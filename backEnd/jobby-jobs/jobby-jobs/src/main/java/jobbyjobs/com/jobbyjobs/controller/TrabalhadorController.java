package jobbyjobs.com.jobbyjobs.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jobbyjobs.com.jobbyjobs.CalcularSalario;
import jobbyjobs.com.jobbyjobs.models.*;
import jobbyjobs.com.jobbyjobs.objects.FilaObj;
import jobbyjobs.com.jobbyjobs.repositories.*;
import jobbyjobs.com.jobbyjobs.services.RespostaCep;
import jobbyjobs.com.jobbyjobs.services.ViaCepService;
import jobbyjobs.com.jobbyjobs.utilities.CalculoOrcamento;
import jobbyjobs.com.jobbyjobs.utilities.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import javax.validation.Valid;

import static org.springframework.http.ResponseEntity.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/trabalhadores")
public class TrabalhadorController implements CalcularSalario {

    @Autowired
    private ProfissionalRepository profissionalRepository;

    @Autowired
    private UsuariosJobRepository userRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private UsuarioContaRepository usuarioContaRepository;

    @Autowired
    private BabaRepository babaRepository;

    @Autowired
    private NotificacaoRepository notificacaoRepository;

    @Autowired
    private JobsSolicitadosRepository solicitadosRepository;

    @Autowired
    private ViaCepService service;

    private final FilaObj<JobsSolicitados> solicitacoes = new FilaObj(10);
    List<JobsSolicitados> solicitadosExibe = new ArrayList<>();

    private final List<Login> logados = new ArrayList<>();

    @GetMapping("/notificacoes-alert")
    public FilaObj<JobsSolicitados> verificarFila(){
        if (solicitacoes.isEmpty()){
            return null;
        } else{
            return solicitacoes;
        }
    }

    @GetMapping("/solicitacoes/{id}")
    public ResponseEntity getSolicitacoes(@PathVariable Integer id){
       if (!solicitadosRepository.findByBabaSolicitadaId(id).isEmpty()){
           for(JobsSolicitados j: solicitadosRepository.findByBabaSolicitadaId(id)){
               solicitacoes.insert(j);
           }
       }

        FilaObj<JobsSolicitados> retorno = verificarFila();

        if(retorno == null){
            return noContent().build();
        } else {
            //Garante que vai trazer apenas os dados que exitem no banco
            solicitadosExibe.clear();

            while (!solicitacoes.isEmpty()){
                solicitadosExibe.add(solicitacoes.poll());
            }
            return ok(solicitadosExibe);
        }
    }

    @GetMapping
    public ResponseEntity getTrabalhadores(
            @RequestParam(required = false) String zonaRegional ){

        List<Integer> idsDosUsuarios = new ArrayList<>();
        List<Profissional> profissionais = new ArrayList<>();

        if(zonaRegional != null){
             List<Usuario> usuarios = userRepository.findByEnderecoZonaRegional(zonaRegional);
             if(usuarios.isEmpty()){
                 return noContent().build();
             } else{
                for(Usuario u: usuarios){
                    if(u.getTipoUsuario() == 1){
                        idsDosUsuarios.add(u.getId());
                    }
                }

                for(Integer idUser: idsDosUsuarios){
                    profissionais.add(profissionalRepository.findByUsuarioId(idUser));
                }

                return ok(profissionais);
             }

        } else {
            profissionais = profissionalRepository.findAll();
            return profissionais.isEmpty()
                    ? noContent().build()
                    : ok(profissionais);
        }
    }

    @GetMapping("{/id}")
    public ResponseEntity getTrabalhadorById(@PathVariable Integer id){
        return of(profissionalRepository.findById(id));
    }

    @GetMapping("/email/{email}")
    public Integer getUserByEmail(@PathVariable String email){
        return (userRepository.findByEmail(email).get().getTipoUsuario());
    }

    @PostMapping
    public ResponseEntity registrarTrabalhador(@RequestBody @Valid Profissional p) {
        if(p.getProfissao().equals("Baba")){
            babaRepository.save(p.getBaba());
        }
        Usuario usuarioCadastrado = p.getUsuario();
        enderecoRepository.save(usuarioCadastrado.getEndereco());
        usuarioContaRepository.save(usuarioCadastrado.getUsuarioConta());
        userRepository.save(usuarioCadastrado);
        profissionalRepository.save(p);
        return status(201).build();
    }


    @PostMapping("/login")
    public ResponseEntity fazerLogin(@RequestBody Login l) {
        for (Usuario u: userRepository.findAll()){
            if (l.getEmail().equals(u.getEmail()) && l.getSenha().equals(u.getSenha())){
                logados.add(l);
                // return ok("Login Aceito!");
                return ok(u.getTipoUsuario());
            }
        }
        return status(404).body("E-mail ou senha incorretos.");
    }

    @PostMapping("/logoff")
    public ResponseEntity fazerLogoff(@RequestBody String email) {
        for (int i = 0; i < logados.size(); i++){
            Login logado = logados.get(i);
            if(logado.getEmail().equals(email)){
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


    @PostMapping("calcular-orcamento")
    @Override
    public ResponseEntity calcularSalarioBaba(
            @RequestParam(required = true) int id,
            @RequestBody CalculoOrcamento calculoOrcamento){
        Optional<Profissional> p = profissionalRepository.findById(id);

        Double valorCobrado = 0.0;
        valorCobrado += p.get().getValorHora() * calculoOrcamento.getQtdHoras();

        if(calculoOrcamento.getQtdCriancasZeroAteTres() != 0){
            valorCobrado += (p.get().getBaba().getPrecoAteTres() * calculoOrcamento.getQtdCriancasZeroAteTres());
        }
        if(calculoOrcamento.getQtdCriancasTresAteOito() != 0){
            valorCobrado += (p.get().getBaba().getPrecoTresAteOito() * calculoOrcamento.getQtdCriancasTresAteOito());
        }
        if(calculoOrcamento.getQtdCriancasNoveAteQuinze() != 0){
            valorCobrado += (p.get().getBaba().getPrecoNoveAteQuinze() * calculoOrcamento.getQtdCriancasNoveAteQuinze());
        }

        if ( p.get().getBaba().getCozinhar() &&  p.get().getBaba().getLimpar()){
            valorCobrado += p.get().getBaba().getPrecoCozinheira() + p.get().getBaba().getPrecoLimpeza();
        }
        else if (p.get().getBaba().getCozinhar()){
            valorCobrado += p.get().getBaba().getPrecoCozinheira();
        }
        else if (p.get().getBaba().getLimpar()){
            valorCobrado +=  p.get().getBaba().getPrecoLimpeza();
        }

        return ok(valorCobrado);

    }

    @GetMapping("/cep/{cep}")
    public ResponseEntity getCep(@PathVariable  String cep) {
        RespostaCep respostaCep = service.getCep(cep);
        return ResponseEntity.ok(respostaCep);
    }



}
