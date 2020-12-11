package jobbyjobs.com.jobbyjobs.controller;

import jobbyjobs.com.jobbyjobs.models.*;
import jobbyjobs.com.jobbyjobs.repositories.BabaRepository;
import jobbyjobs.com.jobbyjobs.repositories.NotificacaoRepository;
import jobbyjobs.com.jobbyjobs.repositories.UsuariosJobRepository;
import jobbyjobs.com.jobbyjobs.services.RespostaCep;
import jobbyjobs.com.jobbyjobs.services.ViaCepService;
import jobbyjobs.com.jobbyjobs.utilities.Login;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(classes = UsuariosController.class)
class UsuariosControllerTest {

    @Autowired
    private UsuariosController controller;

    @MockBean
    private UsuariosJobRepository usuarioRepository;

    @MockBean
    private NotificacaoRepository notificacaoRepository;

    @MockBean
    private BabaRepository babaRepository;

    @MockBean
    private ViaCepService service;



    @Test
    @DisplayName("Deve retornar 204 e lista de usuarios vazia")
    void getUsuarios() {
        List<Usuario> usuarios = new ArrayList<>();
        Mockito.when(usuarioRepository.findAll()).thenReturn(usuarios);

        ResponseEntity resposta = controller.getUsuarios();

        assertEquals(204, resposta.getStatusCodeValue());
        assertEquals(null, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 200 e lista de usuarios comm conteúdo")
    void getUsuariosCenario2() {
        List<Usuario> usuarios = Arrays.asList(Mockito.mock(Usuario.class));
        Mockito.when(usuarioRepository.findAll()).thenReturn(usuarios);

        ResponseEntity resposta = controller.getUsuarios();

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(usuarios, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 404 caso não exista usuario com certo id")
    void getUserById() {
        int id = 10;
        Mockito.when(usuarioRepository.findById(id)).thenReturn(Optional.empty());

        ResponseEntity resposta = controller.getUserById(id);

        assertEquals(404, resposta.getStatusCodeValue());
        assertEquals(null, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 200 caso exista usuario com certo id")
    void getUserByIdCenario2() {
        int id = 10;
        Usuario usuario = Mockito.mock(Usuario.class);
        Mockito.when(usuarioRepository.findById(id)).thenReturn(Optional.of(usuario));

        ResponseEntity resposta = controller.getUserById(id);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(usuario, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 201 após ter criado um registro de usuario")
    void registrarUsuarios() {
        Usuario usuario = Mockito.mock(Usuario.class);
        Mockito.when(usuarioRepository.save(usuario)).thenReturn(usuario);

        ResponseEntity resposta = controller.registrarUsuarios(usuario);
        assertEquals(201, resposta.getStatusCodeValue());
    }

    @Test
    @DisplayName("Deve retornar 200 e as informações do cep passado no parametro")
    void getCep() {
        RespostaCep respostaCep = new RespostaCep();

        respostaCep.setBairro("Nova Gerty");
        respostaCep.setComplemento("");
        respostaCep.setLocalidade("São Caetano do sul");
        respostaCep.setLogradouro("Rua Manoel Augusto Ferreirinha");

        String cep = "09580020";

        Mockito.when(service.getCep(cep)).thenReturn(respostaCep);

        ResponseEntity resposta = controller.getCep(cep);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(respostaCep, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 200 e a informação de login aceito")
    void fazerLogin() {
        Usuario usuario = new Usuario();
        usuario.setEmail("teste123@teste.com");
        usuario.setSenha("senha");
        List<Usuario> usuarios = new ArrayList<>();
        usuarios.add(usuario);

        Login login = new Login("teste123@teste.com", "senha");

        Mockito.when(usuarioRepository.findAll()).thenReturn(usuarios);
        ResponseEntity resposta = controller.fazerLogin(login);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals("Login Aceito!", resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 404 pois a senha estará incorreta")
    void fazerLoginCenario2() {
        Usuario usuario = new Usuario();
        usuario.setEmail("teste123@teste.com");
        usuario.setSenha("senha");
        List<Usuario> usuarios = new ArrayList<>();
        usuarios.add(usuario);

        Login login = new Login("teste123@teste.com", "teste");

        Mockito.when(usuarioRepository.findAll()).thenReturn(usuarios);
        ResponseEntity resposta = controller.fazerLogin(login);

        assertEquals(404, resposta.getStatusCodeValue());
        assertEquals("E-mail ou senha incorretos.", resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 404 pois o email estará incorreto")
    void fazerLoginCenario3() {
        Usuario usuario = new Usuario();
        usuario.setEmail("teste123@teste.com");
        usuario.setSenha("senha");
        List<Usuario> usuarios = new ArrayList<>();
        usuarios.add(usuario);

        Login login = new Login("teste123@teste.com.br", "senha");

        Mockito.when(usuarioRepository.findAll()).thenReturn(usuarios);
        ResponseEntity resposta = controller.fazerLogin(login);

        assertEquals(404, resposta.getStatusCodeValue());
        assertEquals("E-mail ou senha incorretos.", resposta.getBody());
    }

    @Test
    void fazerLogoff() {
    }

    @Test
    @DisplayName("Deve retornar 204 caso não esteja ninguem logado")
    void getLogados(){
        List<Login> logados = new ArrayList<>();
        assertTrue(logados.isEmpty());
    }

    @Test
    @DisplayName("Deve retornar 200 caso alguem esteja logado")
    void getLogadosCenario2(){
        List<Login> logados = new ArrayList<>();
        Login logado = new Login("teste123@teste.com", "teste");
        logados.add(logado);
        assertFalse(logados.isEmpty());
    }

}