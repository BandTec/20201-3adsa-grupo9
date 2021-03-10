package jobbyjobs.com.jobbyjobs.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jobbyjobs.com.jobbyjobs.models.*;
import jobbyjobs.com.jobbyjobs.objects.PilhaObj;
import jobbyjobs.com.jobbyjobs.repositories.*;
import jobbyjobs.com.jobbyjobs.services.RespostaCep;
import jobbyjobs.com.jobbyjobs.services.RespostaSms;
import jobbyjobs.com.jobbyjobs.services.SmsService;
import jobbyjobs.com.jobbyjobs.services.ViaCepService;
import jobbyjobs.com.jobbyjobs.utilities.AvaliarBaba;
import jobbyjobs.com.jobbyjobs.utilities.FazerPedido;
import jobbyjobs.com.jobbyjobs.utilities.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;

import static org.springframework.http.ResponseEntity.*;

@CrossOrigin(origins = "http://54.243.208.81" , maxAge = 3600)
@RestController
@RequestMapping("/usuarios")
public class UsuariosController {

    List<Login> logados = new ArrayList<>();

    @Autowired
    private UsuariosJobRepository usuarioRepository;

    @Autowired
    private NotificacaoRepository notificacaoRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private UsuarioContaRepository usuarioContaRepository;

    @Autowired
    private BabaRepository babaRepository;

    @Autowired
    private AvaliacoesRepository avaliacoesRepository;

    @Autowired
    private JobsSolicitadosRepository jobsSolicitadosRepository;

    @Autowired
    private ViaCepService service;

    @Autowired
    private SmsService smsService;

    @GetMapping
    public ResponseEntity getUsuarios() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios.isEmpty()
                ? noContent().build()
                : ok(usuarios);
    }

    @GetMapping("{/id}")
    public ResponseEntity getUserById(@PathVariable Integer id) {
        return of(usuarioRepository.findById(id));
    }

    @GetMapping("/email/{email}")
    public Integer getUserByEmail(@PathVariable String email){
        return (usuarioRepository.findByEmail(email).get().getId());
    }

    @PostMapping
    public ResponseEntity registrarUsuarios(@RequestBody @Valid Usuario novoUsuario) {
        enderecoRepository.save(novoUsuario.getEndereco());
        usuarioContaRepository.save(novoUsuario.getUsuarioConta());
        usuarioRepository.save(novoUsuario);
        return created(null).build();
    }

    @GetMapping("/cep/{cep}")
    public ResponseEntity getCep(@PathVariable String cep) {
        RespostaCep respostaCep = service.getCep(cep);
        return ok(respostaCep);
    }

    @PostMapping("/login")
    public ResponseEntity fazerLogin(@RequestBody Login l) {
        for (Usuario u : usuarioRepository.findAll()) {
            if (l.getEmail().equals(u.getEmail()) && l.getSenha().equals(u.getSenha())) {
                logados.add(l);
                // return ok("Login Aceito!");
                return ok(u.getTipoUsuario());
            }
        }
        return status(404).body("E-mail ou senha incorretos.");
    }

    @GetMapping("/logoff")
    public ResponseEntity fazerLogoff(@RequestParam(required = true) String email) {
        for (int i = 0; i < logados.size(); i++) {
            Login logado = logados.get(i);
            if (logado.getEmail().equals(email)) {
                System.out.println("entrou");
                logados.remove(i);
                return ok().build();
            }
        }
        return status(404).build();
    }

    @GetMapping("/logados")
    public ResponseEntity getLogados() {
        return this.logados.isEmpty() ? status(204).build() : ok(this.logados);
    }

    @PostMapping("/avaliar")
    public ResponseEntity avaliarBaba(
            @RequestBody AvaliarBaba obj
    ){
        Avaliacoes avaliacao = new Avaliacoes();
        avaliacao.setMsg_avaliativa(obj.getMsg());
        avaliacao.setNota(obj.getNota());

        Optional<Baba> babaEncontrada = babaRepository.findById(obj.getBabaAvaliada());
        Optional<Usuario> usuarioEncontrado = usuarioRepository.findByEmail(obj.getEmailAvaliador());

        if(usuarioEncontrado.isPresent()){
            Usuario user = usuarioEncontrado.get();
            if(babaEncontrada.isPresent()){
                Baba b = babaEncontrada.get();
                avaliacao.setBabaAvaliada(b);
                avaliacao.setUsuarioAvaliador(user);
                avaliacoesRepository.save(avaliacao);
                return created(null).build();
            }
        }

        return notFound().build();
    }

    @GetMapping ("/avaliacoes/{idBaba}")
    public ResponseEntity empilharBaba(

            @PathVariable Integer idBaba
      ){
        List<Avaliacoes> avaliacoes = avaliacoesRepository.findByBabaAvaliadaId(idBaba);

        if(avaliacoes.isEmpty()) {
            return noContent().build();
        }else{
            PilhaObj<Avaliacoes> pilhaObj = new PilhaObj<>(100);

            int contador = 0;

            for (Avaliacoes a: avaliacoes){
                pilhaObj.push(a);
                contador ++;
            }

            List<Avaliacoes> avaliacoesPilha = new ArrayList<>();

            while(!pilhaObj.isEmpty()){
                for (int i = 0; i < contador; i++){
                    avaliacoesPilha.add(pilhaObj.pop());
                }
            }
            return ok(avaliacoesPilha);
    }}

    @PostMapping("/sms")
    public RespostaSms enviarSms(Long number, String nome) {
        String key = "25HVE9MLHJ5JN55T4331KM81ZPS489ZVC88SE8A9IKVMRATE88ZI8A81V90NIMGTREC2DF2NOZOBX1G7YRNGJ7X7H9GXUR2AY7P5QV1X8NU5CP9U1N31TE19NSZ864XN";
        Integer type = 9;
        String msg = "Você recebeu um pedido de trabalho, realizado por: " +nome+ ", faça login em nossa " +
                "plataforma para mais informações!";
        return smsService.enviarSms(key,type, number, msg);
    }

    @PostMapping("/fazer-pedido")
    public ResponseEntity fazerPedidoBaba(
            @RequestBody FazerPedido pedir
            ){
        Optional<Baba> babaExistente = babaRepository.findById(pedir.getIdBaba());
        Optional<Usuario> usuarioSolicitante = usuarioRepository.findById(pedir.getIdUsuario());

        if(babaExistente.isPresent()){
            Baba baba = babaExistente.get();
            Usuario user = usuarioSolicitante.get();

            JobsSolicitados jobsSolicitado = new JobsSolicitados();
            jobsSolicitado.setValorTotal(pedir.getValorTotal());
            jobsSolicitado.setQtdHorasTrabalho(pedir.getQtdHorasTrabalho());
            jobsSolicitado.setBabaSolicitada(baba);
            jobsSolicitado.setUsuarioSolicitante(user);

            jobsSolicitadosRepository.save(jobsSolicitado);
            Long telefone = 11957828492L;
            enviarSms(telefone, user.getNome());
            return ok("Pedido realizado com sucesso!");
        }
        return notFound().build();
    }






}
