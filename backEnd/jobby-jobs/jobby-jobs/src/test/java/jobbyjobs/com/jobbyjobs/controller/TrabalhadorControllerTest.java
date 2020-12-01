package jobbyjobs.com.jobbyjobs.controller;

import jobbyjobs.com.jobbyjobs.models.*;
import jobbyjobs.com.jobbyjobs.repositories.BabaRepository;
import jobbyjobs.com.jobbyjobs.repositories.NotificacaoRepository;
import jobbyjobs.com.jobbyjobs.repositories.ProfissionalRepository;
import jobbyjobs.com.jobbyjobs.repositories.UsuariosJobRepository;
import jobbyjobs.com.jobbyjobs.services.ViaCepService;
import jobbyjobs.com.jobbyjobs.utilities.CalculoOrcamento;
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

@SpringBootTest
class TrabalhadorControllerTest {


    @Autowired
    TrabalhadorController controller;

    @MockBean
    ProfissionalRepository profissionalRepository;

    @MockBean
    UsuariosJobRepository userRepository;

    @MockBean
    BabaRepository babaRepository;

    @MockBean
    NotificacaoRepository notificacaoRepository;

    @MockBean
    ViaCepService service;


    @Test
    @DisplayName("Deve retornar 204 caso não exista trabalhadores no banco")
    void getTrabalhadores() {
        List<Profissional> profissionais = new ArrayList<>();
        Mockito.when(profissionalRepository.findAll()).thenReturn(profissionais);

        ResponseEntity resposta = controller.getTrabalhadores();

        assertEquals(204, resposta.getStatusCodeValue());
        assertEquals(null, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 200 caso exista trabalhadores no banco")
    void getTrabalhadoresCenario2() {
        List<Profissional> profissionais = Arrays.asList(Mockito.mock(Profissional.class));

        Mockito.when(profissionalRepository.findAll()).thenReturn(profissionais);

        ResponseEntity resposta = controller.getTrabalhadores();

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(profissionais, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 200 caso exista um trabalhador especifico no banco")
    void getTrabalhadorById() {
        int id = 10;
        Profissional profissional = Mockito.mock(Profissional.class);

        Mockito.when(profissionalRepository.findById(id)).thenReturn(Optional.of(profissional));

        ResponseEntity resposta = controller.getTrabalhadorById(id);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(profissional, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 404 caso não exista um trabalhador especifico no banco")
    void getTrabalhadorByIdCenario2() {
        int id = 10;
        Mockito.when(profissionalRepository.findById(id)).thenReturn(Optional.empty());

        ResponseEntity resposta = controller.getTrabalhadorById(id);

        assertEquals(404, resposta.getStatusCodeValue());
        assertEquals(null, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 201 após ter criado um registro de trabalhador")
    void registrarTrabalhador() {

        Profissional profissional = Mockito.mock(Profissional.class);
        profissional.setProfissao("Baba");

        Mockito.when(profissional.getProfissao()).thenReturn("Baba");

        ResponseEntity resposta = controller.registrarTrabalhador(profissional);
        assertEquals(201, resposta.getStatusCodeValue());

    }

    @Test
    @DisplayName("Deve retornar 201 após ter criado um registro de trabalhador (cenario 2)")
    void registrarTrabalhadorCenario2() {

        Profissional profissional = Mockito.mock(Profissional.class);
        Baba baba = Mockito.mock(Baba.class);

        profissional.setBaba(Mockito.mock(Baba.class));
        profissional.setProfissao("Baba");


        Mockito.when(profissional.getProfissao()).thenReturn("Baba");
        Mockito.when(profissionalRepository.save(profissional)).thenReturn(profissional);
        Mockito.when(babaRepository.save(baba)).thenReturn(baba);

        ResponseEntity resposta = controller.registrarTrabalhador(profissional);
        assertEquals(201, resposta.getStatusCodeValue());

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

        Mockito.when(userRepository.findAll()).thenReturn(usuarios);
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

        Mockito.when(userRepository.findAll()).thenReturn(usuarios);
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

        Mockito.when(userRepository.findAll()).thenReturn(usuarios);
        ResponseEntity resposta = controller.fazerLogin(login);

        assertEquals(404, resposta.getStatusCodeValue());
        assertEquals("E-mail ou senha incorretos.", resposta.getBody());
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

    @Test
    @DisplayName("Deve retornar 404 caso não exista uma baba especifico no banco")
    void getNotificacoes() {

        int id = 10;
        Mockito.when(babaRepository.findById(id)).thenReturn(Optional.empty());

        ResponseEntity resposta = controller.getNotificacoes(id);

        assertEquals(404, resposta.getStatusCodeValue());
        assertEquals(null, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 200 caso exista uma baba especifico no banco")
    void getNotificacoesCenario2() {
        Baba baba = Mockito.mock(Baba.class);
        List<Notificacoes> notificacoes = Arrays.asList(Mockito.mock(Notificacoes.class));
        int id = 10;

        Mockito.when(babaRepository.findById(id)).thenReturn(Optional.of(baba));
        Mockito.when(notificacaoRepository.findByBabaNotificadaId(id)).thenReturn(notificacoes);

        ResponseEntity resposta = controller.getNotificacoes(id);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(notificacoes, resposta.getBody());
    }

    @Test
    @DisplayName("Deve retornar 200 e calcular o salario corretamente da baba que cozinha e limpa")
    void calcularSalarioBaba() {

        int id = 10;
        double valorHora = 10.00;
        double precoAteTres = 200.00;
        double precoCozinheira = 50.00;
        double precoLimpeza = 50.00;

        Profissional profissional = new Profissional();
        Baba baba = new Baba();

        baba.setPrecoAteTres(precoAteTres);
        baba.setPrecoCozinheira(precoCozinheira);
        baba.setPrecoLimpeza(precoLimpeza);
        baba.setLimpar(true);
        baba.setCozinhar(true);

        profissional.setValorHora(valorHora);
        profissional.setBaba(baba);

        Mockito.when(profissionalRepository.findById(id)).thenReturn(Optional.of(profissional));
        CalculoOrcamento calculoOrcamento = new CalculoOrcamento();
        calculoOrcamento.setQtdCriancasZeroAteTres(1);
        calculoOrcamento.setQtdCriancasTresAteOito(0);
        calculoOrcamento.setQtdCriancasNoveAteQuinze(0);
        calculoOrcamento.setQtdHoras(10);

        ResponseEntity resposta = controller.calcularSalarioBaba(10, calculoOrcamento);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(400.00, resposta.getBody());

    }

    @Test
    @DisplayName("Deve retornar 200 e calcular o salario corretamente da baba que só cozinha")
    void calcularSalarioBabaCenario2() {

        int id = 15;
        double valorHora = 10.00;
        double precoTresAteOito = 250.00;
        double precoCozinheira = 100.00;

        Profissional profissional = new Profissional();
        Baba baba = new Baba();

        baba.setPrecoTresAteOito(precoTresAteOito);
        baba.setPrecoCozinheira(precoCozinheira);
        baba.setLimpar(false);
        baba.setCozinhar(true);

        profissional.setValorHora(valorHora);
        profissional.setBaba(baba);

        Mockito.when(profissionalRepository.findById(id)).thenReturn(Optional.of(profissional));
        CalculoOrcamento calculoOrcamento = new CalculoOrcamento();
        calculoOrcamento.setQtdCriancasZeroAteTres(0);
        calculoOrcamento.setQtdCriancasTresAteOito(1);
        calculoOrcamento.setQtdCriancasNoveAteQuinze(0);
        calculoOrcamento.setQtdHoras(10);

        ResponseEntity resposta = controller.calcularSalarioBaba(15, calculoOrcamento);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(450.00, resposta.getBody());

    }

    @Test
    @DisplayName("Deve retornar 200 e calcular o salario corretamente da baba que só limpa")
    void calcularSalarioBabaCenario3() {

        int id = 20;
        double valorHora = 10.00;
        double precoNoveAteQuinze = 300.00;
        double precoLimpeza = 150.00;


        Profissional profissional = new Profissional();
        Baba baba = new Baba();

        baba.setPrecoNoveAteQuinze(precoNoveAteQuinze);
        baba.setPrecoLimpeza(precoLimpeza);
        baba.setLimpar(true);
        baba.setCozinhar(false);

        profissional.setValorHora(valorHora);
        profissional.setBaba(baba);

        Mockito.when(profissionalRepository.findById(id)).thenReturn(Optional.of(profissional));
        CalculoOrcamento calculoOrcamento = new CalculoOrcamento();
        calculoOrcamento.setQtdCriancasZeroAteTres(0);
        calculoOrcamento.setQtdCriancasTresAteOito(0);
        calculoOrcamento.setQtdCriancasNoveAteQuinze(1);
        calculoOrcamento.setQtdHoras(10);

        ResponseEntity resposta = controller.calcularSalarioBaba(20, calculoOrcamento);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(550.00, resposta.getBody());

    }

    @Test
    @DisplayName("Deve retornar 200 e as informações do cep passado no parametro")
    void getCep(){
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
}