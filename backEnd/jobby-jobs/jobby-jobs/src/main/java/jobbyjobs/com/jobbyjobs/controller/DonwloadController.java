package jobbyjobs.com.jobbyjobs.controller;

import jobbyjobs.com.jobbyjobs.models.Endereco;
import jobbyjobs.com.jobbyjobs.repositories.EnderecoRepository;
import jobbyjobs.com.jobbyjobs.utilities.GravaCsv;
import jobbyjobs.com.jobbyjobs.utilities.GravaTxt;
import jobbyjobs.com.jobbyjobs.objects.ListaObj;
import jobbyjobs.com.jobbyjobs.models.Usuario;
import jobbyjobs.com.jobbyjobs.repositories.UsuariosJobRepository;
import jobbyjobs.com.jobbyjobs.utilities.ImportarArquivo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/download")
public class DonwloadController {

    private ListaObj<Usuario> usuarios = new ListaObj<>(100);

    @Autowired
    UsuariosJobRepository usuariosJobRepository;

    @Autowired
    EnderecoRepository enderecoRepository;

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

    @PostMapping("/importar")
    public ResponseEntity enviar(@RequestBody byte[] conteudoArquivo) throws IOException {
        Date dataDeHoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat(
                "ddMMyyyy-HHmmss");
        String nomeArquivo = "novas-enderecos" + "-" + formatter.format(dataDeHoje) + ".txt";
        Path path = Paths.get(nomeArquivo);
        Files.write(path, conteudoArquivo);
        List<Endereco> enderecoAdicionado = ImportarArquivo.leArquivo(nomeArquivo);

        for(Endereco e: enderecoAdicionado){
            enderecoRepository.save(e);
        }
        return ResponseEntity.created(null).build();
    }

}
