package jobbyjobs.com.jobbyjobs.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jobbyjobs.com.jobbyjobs.models.Baba;
import jobbyjobs.com.jobbyjobs.models.Login;
import jobbyjobs.com.jobbyjobs.models.Notifcacoes;
import jobbyjobs.com.jobbyjobs.models.Usuario;
import jobbyjobs.com.jobbyjobs.repositories.BabaRepository;
import jobbyjobs.com.jobbyjobs.repositories.NotificacaoRepository;
import jobbyjobs.com.jobbyjobs.repositories.UsuariosJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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

    @GetMapping
    public ResponseEntity getUsuarios(@RequestParam(required = false) Integer id){
        if(usuarioRepository.count() == 0){
            return ResponseEntity.noContent().build();
        } else if (id == null){
            return ResponseEntity.ok(usuarioRepository.findAll());
        } else {
            return ResponseEntity.ok(usuarioRepository.findById(id));
        }
    }

    @PostMapping
    public ResponseEntity registrarUsuarios(@RequestBody @Valid Usuario novoUsuario) {
        usuarioRepository.save(novoUsuario);
        return ResponseEntity.created(null).build();
    }

    @PostMapping("/login")
    public ResponseEntity fazerLogin(@RequestBody Login l) {
        for (Usuario u: usuarioRepository.findAll()){
            if (l.getEmail().equals(u.getEmail()) && l.getSenha().equals(u.getSenha())){
                logados.add(l);
                return ResponseEntity.ok("Login Aceito!");
            }
        }
        return ResponseEntity.status(404).body("E-mail ou senha incorretos.");
    }

    @GetMapping("/logoff")
    public ResponseEntity fazerLogoff(@RequestParam(required = true) String email) {
        for (int i = 0; i < logados.size(); i++){
            Login logado = logados.get(i);
            if(logado.getEmail().equals(email)){
                System.out.println("entrou");
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

    @GetMapping("/pedir-orcamento/{id}")
    public ResponseEntity pedirOrcamentoBaba(@PathVariable int id) {
        String msg = "Pedido de orçamento requisitado";
        Notifcacoes notifcacoes = new Notifcacoes();
        Optional<Baba> babaExistente = babaRepository.findById(id);

        if (babaExistente.isPresent()){
            Baba b = babaExistente.get();
            notifcacoes.setMsg(msg);
            notifcacoes.setBabaNotificada(b);
            notificacaoRepository.save(notifcacoes);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }




}
