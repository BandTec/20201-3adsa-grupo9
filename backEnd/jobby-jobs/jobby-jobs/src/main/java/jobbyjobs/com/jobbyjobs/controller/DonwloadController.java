package jobbyjobs.com.jobbyjobs.controller;

import jobbyjobs.com.jobbyjobs.GravaCsv;
import jobbyjobs.com.jobbyjobs.GravaTxt;
import jobbyjobs.com.jobbyjobs.ListaObj;
import jobbyjobs.com.jobbyjobs.models.Usuario;
import jobbyjobs.com.jobbyjobs.repositories.UsuariosJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/download")
public class DonwloadController {

    private ListaObj<Usuario> usuarios = new ListaObj<>(100);

    @Autowired
    UsuariosJobRepository usuariosJobRepository;

    @GetMapping(value = "/txt", produces={"application/txt"})
    @ResponseBody
    public ResponseEntity baixarTxt() {
        usuarios.limpa();
        Iterable<Usuario> usuariosCadastrados = usuariosJobRepository.findAll();
        usuariosCadastrados.forEach(uc -> usuarios.adiciona(uc));

        HttpHeaders headers = new HttpHeaders();
        String arqName = GravaTxt.nomeArquivo("lista-de-usuarios");

        headers.add("Content-Disposition", "attachment; filename=" + arqName);

        return new ResponseEntity(
                GravaTxt.gravaTxt("lista-de-usuarios", usuarios), headers, HttpStatus.OK);
    }

    @GetMapping(value = "/csv", produces={"application/csv"})
    @ResponseBody
    public ResponseEntity baixarCsv() {
        usuarios.limpa();
        Iterable<Usuario> usuariosCadastrados = usuariosJobRepository.findAll();
        usuariosCadastrados.forEach(uc -> usuarios.adiciona(uc));
        GravaCsv.gravaCsv(usuarios,"lista-de-usuarios");

        HttpHeaders headers = new HttpHeaders();
        String arqName = GravaCsv.nomeArquivo("lista-de-usuarios");

        headers.add("Content-Disposition", "attachment; filename=" + arqName);

        return new ResponseEntity(
                GravaCsv.gravaCsv(usuarios,"lista-de-usuarios"), headers, HttpStatus.OK);
    }

}
