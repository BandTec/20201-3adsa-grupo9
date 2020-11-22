package jobbyjobs.com.jobbyjobs.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import jobbyjobs.com.jobbyjobs.services.ApiGoogle;
import jobbyjobs.com.jobbyjobs.models.*;
import jobbyjobs.com.jobbyjobs.repositories.BabaRepository;
import jobbyjobs.com.jobbyjobs.repositories.NotificacaoRepository;
import jobbyjobs.com.jobbyjobs.repositories.UsuariosJobRepository;
import jobbyjobs.com.jobbyjobs.services.ViaCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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
    private ViaCepService service;

    @GetMapping
    public ResponseEntity getUsuarios(){
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios.isEmpty()
                ? noContent().build()
                : ok(usuarios);
    }

    @GetMapping("{/id}")
    public ResponseEntity getUserById(@PathVariable Integer id){
        return of(usuarioRepository.findById(id));
    }

    @PostMapping
    public ResponseEntity registrarUsuarios(@RequestBody @Valid Usuario novoUsuario) {
        usuarioRepository.save(novoUsuario);
        return created(null).build();
    }

    @GetMapping("/cep/{cep}")
    public ResponseEntity getCep(@PathVariable  String cep) {
        RespostaCep respostaCep = service.getCep(cep);
        return ok(respostaCep);
    }

    @PostMapping("/login")
    public ResponseEntity fazerLogin(@RequestBody Login l) {
        for (Usuario u: usuarioRepository.findAll()){
            if (l.getEmail().equals(u.getEmail()) && l.getSenha().equals(u.getSenha())){
                logados.add(l);
                return ok("Login Aceito!");
            }
        }
        return status(404).body("E-mail ou senha incorretos.");
    }

    @GetMapping("/logoff")
    public ResponseEntity fazerLogoff(@RequestParam(required = true) String email) {
        for (int i = 0; i < logados.size(); i++){
            Login logado = logados.get(i);
            if(logado.getEmail().equals(email)){
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

        if (babaExistente.isPresent()){
            Baba b = babaExistente.get();
            notifcacoes.setMsg(msg);
            notifcacoes.setBabaNotificada(b);
            notificacaoRepository.save(notifcacoes);
            return ok().build();
        } else {
            return notFound().build();
        }
    }



}
