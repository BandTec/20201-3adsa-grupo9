package jobbyjobs.com.jobbyjobs.controller;

import java.util.ArrayList;
import java.util.List;
import jobbyjobs.com.jobbyjobs.models.Contratante;
import jobbyjobs.com.jobbyjobs.models.Login;
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
@RequestMapping("/contratantes")
public class ContratanteController {

    private List<Contratante> clientes = new ArrayList();
    private List<Login> logados = new ArrayList<>();

    @GetMapping
    public ResponseEntity getClientes() {
        return this.clientes.isEmpty() ? ResponseEntity.status(204).build() : ResponseEntity.ok(this.clientes);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity getIDClientes(@PathVariable int id) {
        return this.clientes.size() >= id ? ResponseEntity.ok(this.clientes.get(id - 1)) : ResponseEntity.status(404).build();
    }

    @PostMapping
    public ResponseEntity registrarClientes(@RequestBody Contratante c) {
        this.clientes.add(c);
        return ResponseEntity.status(201).build();
    }

    @PostMapping("/login")
    public ResponseEntity fazerLogin(@RequestBody Login l) {
        for (Contratante c: clientes){
            if (l.getEmail().equals(c.getEmail()) && l.getSenha().equals(c.getSenha())){
                logados.add(l);
                return ResponseEntity.ok("Login Aceito!");
            }
        }
        return ResponseEntity.status(404).build();
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


    @DeleteMapping({"/{id}"})
    public ResponseEntity excluirClientes(@PathVariable int id) {
        if (this.clientes.size() >= id) {
            this.clientes.remove(id - 1);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
