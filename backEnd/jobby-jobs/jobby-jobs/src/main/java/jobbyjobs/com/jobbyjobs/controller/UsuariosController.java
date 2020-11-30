package jobbyjobs.com.jobbyjobs.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jobbyjobs.com.jobbyjobs.ListaObj;
import jobbyjobs.com.jobbyjobs.models.*;
import jobbyjobs.com.jobbyjobs.objects.FilaObj;
import jobbyjobs.com.jobbyjobs.objects.PilhaObj;
import jobbyjobs.com.jobbyjobs.repositories.*;
import jobbyjobs.com.jobbyjobs.services.ViaCepService;
import jobbyjobs.com.jobbyjobs.utilities.AvaliarBaba;
import jobbyjobs.com.jobbyjobs.utilities.FazerPedido;
import jobbyjobs.com.jobbyjobs.utilities.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import javax.xml.ws.Response;

import static org.springframework.http.ResponseEntity.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/usuarios")
public class UsuariosController {

    List<Login> logados = new ArrayList<>();

    @Autowired
    private UsuariosJobRepository usuarioRepository;

    @Autowired
    private NotificacaoRepository notificacaoRepository;

    @Autowired
    private BabaRepository babaRepository;

    @Autowired
    private AvaliacoesRepository avaliacoesRepository;

    @Autowired
    private JobsSolicitadosRepository jobsSolicitadosRepository;

    @Autowired
    private ViaCepService service;

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

    @PostMapping
    public ResponseEntity registrarUsuarios(@RequestBody @Valid Usuario novoUsuario) {
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
                return ok("Login Aceito!");
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

    @GetMapping("/pedir-orcamento/{id}")
    public ResponseEntity pedirOrcamentoBaba(@PathVariable int id) {
        String msg = "Pedido de orçamento requisitado";
        Notifcacoes notifcacoes = new Notifcacoes();
        Optional<Baba> babaExistente = babaRepository.findById(id);

        if (babaExistente.isPresent()) {
            Baba b = babaExistente.get();
            notifcacoes.setMsg(msg);
            notifcacoes.setBabaNotificada(b);
            notificacaoRepository.save(notifcacoes);
            return ok().build();
        } else {
            return notFound().build();
        }
    }

    @PostMapping("/avaliar")
    public ResponseEntity avaliarBaba(
            @RequestBody AvaliarBaba obj,
            @RequestParam(required = true) String email,
            @RequestParam(required = true) Integer idBaba
    ){
        Avaliacoes avaliacao = new Avaliacoes();
        avaliacao.setMsg_avaliativa(obj.getMsg());
        avaliacao.setNota(obj.getNota());

        Optional<Baba> babaEncontrada = babaRepository.findById(idBaba);
        Optional<Usuario> usuarioEncontrado = usuarioRepository.findByEmail(email);

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

    @GetMapping ("/empilhar/{idBaba}")
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

    @PostMapping("/fazer-pedido")
    public ResponseEntity fazerPedidoBaba(
            @RequestParam(required = true) Integer idBaba,
            @RequestBody FazerPedido pedir
            ){
        Optional<Baba> babaExistente = babaRepository.findById(idBaba);
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
            return ok("Pedido realizado com sucesso!");
        }
        return notFound().build();
    }

//    @GetMapping("/api-mapa")
//    public ResponseEntity api() {
//       return ok(ApiGoogle.calcular("Rua Augusta, 500, Sao Paulo - SP",
//                "Avenida Liberdade, 800, Sao Paulo - SP"));
//    }



}
