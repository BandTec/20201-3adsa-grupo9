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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;


import javax.validation.Valid;

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
    public ResponseEntity getTrabalhadores(@RequestParam(required = false) Integer id){
        if(profissionalRepository.count() == 0){
            return ResponseEntity.noContent().build();
        } else if (id == null){
            return ResponseEntity.ok(profissionalRepository.findAll());
        } else {
            return ResponseEntity.ok(profissionalRepository.findById(id));
        }
    }

    @PostMapping
    public ResponseEntity registrarTrabalhador(@RequestBody @Valid Profissional p) {
        if(p.getProfissao().equals("Baba")){
            babaRepository.save(p.getBaba());
        }
        profissionalRepository.save(p);
        return ResponseEntity.status(201).build();
    }


    @PostMapping("/login")
    public ResponseEntity fazerLogin(@RequestBody Login l) {
        for (Usuario u: userRepository.findAll()){
            if (l.getEmail().equals(u.getEmail()) && l.getSenha().equals(u.getSenha())){
                logados.add(l);
                return ResponseEntity.ok("Login Aceito!");
            }
        }
        return ResponseEntity.status(404).body("E-mail ou senha incorretos.");
    }

    @PostMapping("/logoff")
    public ResponseEntity fazerLogoff(@RequestBody String email) {
        for (int i = 0; i < logados.size(); i++){
            Login logado = logados.get(i);
            if(logado.getEmail().equals(email)){
                logados.remove(i);
                return ResponseEntity.ok().build();
            }
        }
        return ResponseEntity.status(404).build();
    }

    @GetMapping("/logados")
    public ResponseEntity getLogados() {
        return this.logados.isEmpty() ? ResponseEntity.status(204).build() : ResponseEntity.ok(this.logados);
    }

    @GetMapping("salario-trabalhador")
    @Override
    public Double calcularSalarioTrabalhador(
            @RequestParam(required = true) int id,
            @RequestParam(required = true) int qtdHoras,
            @RequestParam(required = false) Double valorMetro,
            @RequestParam(required = false) Double qtdMetros) {
        Optional<Profissional> trabalhador = profissionalRepository.findById(id);
        double salario;
        if (valorMetro != null && qtdMetros != null){
           if(trabalhador.get().getCobrarPorHora()){
               salario = (trabalhador.get().getValorHora() * qtdHoras) + (valorMetro * qtdMetros);
           } else {
               salario = ((trabalhador.get().getValorFixo()) + ((valorMetro * qtdMetros)));
           }
        } else {
            if(trabalhador.get().getCobrarPorHora()){
                salario = (trabalhador.get().getValorHora() * qtdHoras);
            } else {
                salario = (trabalhador.get().getValorFixo());
            }
        }
        return salario;
    }

    @GetMapping("salario-baba")
    @Override
    public Double calcularSalarioBaba(
        @RequestParam(required = true) int id,
        @RequestParam(required = true) int idadeMedia,
        @RequestParam(required = false) int qtdCriancas,
        @RequestParam(required = true) int qtdHoras){
        Optional<Profissional> t = profissionalRepository.findById(id);

        Double valorCobrado = 0.0;
        if(idadeMedia >= 0 && idadeMedia <= 3){
            valorCobrado += (t.get().getValorHora() * qtdHoras) + t.get().getBaba().getPrecoAteTres();
        }
        else if(idadeMedia >= 4 && idadeMedia <= 8){
            valorCobrado += (t.get().getValorHora() * qtdHoras) + t.get().getBaba().getPrecoTresAteOito();
        }
        else if(idadeMedia >= 9 && idadeMedia <= 15){
            valorCobrado += (t.get().getValorHora() * qtdHoras) +  t.get().getBaba().getPrecoNoveAteQuinze();
        }

        if ( t.get().getBaba().getCozinhar() &&  t.get().getBaba().getLimpar()){
            valorCobrado += t.get().getBaba().getPrecoCozinheira() + t.get().getBaba().getPrecoLimpeza();
        }
        else if (t.get().getBaba().getCozinhar()){
            valorCobrado += t.get().getBaba().getPrecoCozinheira();
        }
        else if (t.get().getBaba().getLimpar()){
            valorCobrado +=  t.get().getBaba().getPrecoLimpeza();
        }

        return valorCobrado;

    }

    @GetMapping("notificacoes/{id}")
    public ResponseEntity getNotificacoes(@PathVariable Integer id) {
        Optional<Baba> babaExistente = babaRepository.findById(id);

        if (babaExistente.isPresent()) {
            List<Notifcacoes> notifcacoes  = notificacaoRepository.findByBabaNotificadaId(id);
            return ResponseEntity.ok(notifcacoes);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/cep/{cep}")
    public ResponseEntity getCep(@PathVariable  String cep) {
        RespostaCep respostaCep = service.getCep(cep);
        return ResponseEntity.ok(respostaCep);
    }

}
