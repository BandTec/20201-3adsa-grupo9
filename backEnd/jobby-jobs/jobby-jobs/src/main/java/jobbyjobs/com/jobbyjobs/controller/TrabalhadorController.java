package jobbyjobs.com.jobbyjobs.controller;

import java.util.ArrayList;
import java.util.List;
import jobbyjobs.com.jobbyjobs.models.Baba;
import jobbyjobs.com.jobbyjobs.models.Pedreiro;
import jobbyjobs.com.jobbyjobs.models.Pintor;
import jobbyjobs.com.jobbyjobs.models.Trabalhador;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trabalhadores")
public class TrabalhadorController {

    private List<Trabalhador> trabalhadores = new ArrayList();

    public TrabalhadorController() {
    }

    @GetMapping
    public ResponseEntity getTrabalhadores() {
        return this.trabalhadores.isEmpty() ? ResponseEntity.status(204).build() : ResponseEntity.ok(trabalhadores);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity getIDTrabalhadores(@PathVariable int id) {
        return this.trabalhadores.size() >= id ? ResponseEntity.ok(this.trabalhadores.get(id - 1)) : ResponseEntity.status(404).build();
    }

    @PostMapping({"/pintor"})
    public ResponseEntity registrarPintor(@RequestBody Pintor p) {
        this.trabalhadores.add(p);
        return ResponseEntity.status(201).build();
    }

    @PostMapping("/pedreiro")
    public ResponseEntity registrarPedreiro(@RequestBody Pedreiro p) {
        this.trabalhadores.add(p);
        return ResponseEntity.status(201).build();
    }

    @PostMapping({"/baba"})
    public ResponseEntity registrarBaba(@RequestBody Baba b) {
        this.trabalhadores.add(b);
        return ResponseEntity.status(201).build();
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity excluirTrabalhador(@PathVariable int id) {
        if (this.trabalhadores.size() >= id) {
            this.trabalhadores.remove(id - 1);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
