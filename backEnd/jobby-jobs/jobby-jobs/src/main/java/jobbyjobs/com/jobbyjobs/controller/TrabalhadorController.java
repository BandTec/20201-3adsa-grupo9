package jobbyjobs.com.jobbyjobs.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jobbyjobs.com.jobbyjobs.calcularSalario;
import jobbyjobs.com.jobbyjobs.models.*;
import jobbyjobs.com.jobbyjobs.repositories.BabaRepository;
import jobbyjobs.com.jobbyjobs.repositories.NotificacaoRepository;
import jobbyjobs.com.jobbyjobs.repositories.ProfissionalRepository;
import jobbyjobs.com.jobbyjobs.repositories.UsuariosJobRepository;
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
public class TrabalhadorController implements calcularSalario {

    @Autowired
    private ProfissionalRepository profissionalRepository;

    @Autowired
    private UsuariosJobRepository userRepository;

    @Autowired
    private BabaRepository babaRepository;

    @Autowired
    private NotificacaoRepository notificacaoRepository;

    @Autowired
    private ViaCepService service;



    private List<Login> logados = new ArrayList<>();

    @GetMapping
    public ResponseEntity getTrabalhadores(){
        List<Profissional> profissionais = profissionalRepository.findAll();
        return profissionais.isEmpty()
            ? noContent().build()
            : ok(profissionais);
    }

    @GetMapping("{/id}")
    public ResponseEntity getTrabalhadorById(@PathVariable Integer id){
        return of(profissionalRepository.findById(id));
    }

    @PostMapping
    public ResponseEntity registrarTrabalhador(@RequestBody @Valid Profissional p) {
        if(p.getProfissao().equals("Baba")){
            babaRepository.save(p.getBaba());
        }
        profissionalRepository.save(p);
        return status(201).build();
    }


    @PostMapping("/login")
    public ResponseEntity fazerLogin(@RequestBody Login l) {
        for (Usuario u: userRepository.findAll()){
            if (l.getEmail().equals(u.getEmail()) && l.getSenha().equals(u.getSenha())){
                logados.add(l);
                return ok("Login Aceito!");
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

    @GetMapping("notificacoes/{id}")
    public ResponseEntity getNotificacoes(@PathVariable Integer id) {
        Optional<Baba> babaExistente = babaRepository.findById(id);

        if (babaExistente.isPresent()) {
            List<Notifcacoes> notifcacoes  = notificacaoRepository.findByBabaNotificadaId(id);
            return ok(notifcacoes);
        } else {
            return notFound().build();
        }
    }

    @GetMapping("/cep/{cep}")
    public ResponseEntity getCep(@PathVariable  String cep) {
        RespostaCep respostaCep = service.getCep(cep);
        return ResponseEntity.ok(respostaCep);
    }

}
