package jobbyjobs.com.jobbyjobs.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jobbyjobs.com.jobbyjobs.models.*;
import jobbyjobs.com.jobbyjobs.repositories.BabaRepository;
import jobbyjobs.com.jobbyjobs.repositories.TrabalhadorRepository;
import jobbyjobs.com.jobbyjobs.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/trabalhadores")
public class TrabalhadorController implements calcularSalario {

    @Autowired
    private TrabalhadorRepository trabalhadorRepo;

    @Autowired
    private UsuarioRepository userRepository;

    @Autowired
    private BabaRepository babaRepository;

    private List<Login> logados = new ArrayList<>();

    @GetMapping
    public ResponseEntity getTrabalhadores(@RequestParam(required = false) Integer id){
        if(trabalhadorRepo.count() == 0){
            return ResponseEntity.noContent().build();
        } else if (id == null){
            return ResponseEntity.ok(trabalhadorRepo.findAll());
        } else {
            return ResponseEntity.ok(trabalhadorRepo.findById(id));
        }
    }

    @PostMapping
    public ResponseEntity registrarTrabalhador(@RequestBody @Valid Trabalhador t) {
        trabalhadorRepo.save(t);
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

    @GetMapping
    @Override
    public Double calcularSalarioTrabalhador(
            @RequestParam(required = true) int id,
            @RequestParam(required = true) int qtdHoras,
            @RequestParam(required = false) Double valorMetro,
            @RequestParam(required = false) Double qtdMetros) {
        Optional<Trabalhador> trabalhador = trabalhadorRepo.findById(id);
        Double salario;
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

    @GetMapping
    @Override
    public Double calcularSalarioBaba(
        @RequestParam(required = true) int id,
        @RequestParam(required = true) int idadeMedia,
        @RequestParam(required = false) int qtdCriancas,
        @RequestParam(required = true) int qtdHoras){
        Optional<Baba> baba = babaRepository.findById(id);
        Optional<Trabalhador> trabalhador = trabalhadorRepo.findById(id);

        Double valorCobrado = 0.0;
        if(idadeMedia >= 0 && idadeMedia <= 3){
            valorCobrado += (trabalhador.get().getValorHora() * qtdHoras) + baba.get().getPrecoAteTres();
        }
        else if(idadeMedia >= 4 && idadeMedia <= 8){
            valorCobrado += (trabalhador.get().getValorHora() * qtdHoras) + baba.get().getPrecoTresAteOito();
        }
        else if(idadeMedia >= 9 && idadeMedia <= 15){
            valorCobrado += (trabalhador.get().getValorHora() * qtdHoras) +  baba.get().getPrecoNoveAteQuinze();
        }

        if ( baba.get().getCozinhar() &&  baba.get().getLimpar()){
            valorCobrado += baba.get().getPrecoCozinheira() + baba.get().getPrecoLimpeza();
        }
        else if (baba.get().getCozinhar()){
            valorCobrado += baba.get().getPrecoCozinheira();
        }
        else if (baba.get().getLimpar()){
            valorCobrado +=  baba.get().getPrecoLimpeza();
        }

        return valorCobrado;

    }

}
