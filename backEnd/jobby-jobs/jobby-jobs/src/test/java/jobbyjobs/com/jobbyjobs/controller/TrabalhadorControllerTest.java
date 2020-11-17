package jobbyjobs.com.jobbyjobs.controller;

import javafx.beans.binding.When;
import jobbyjobs.com.jobbyjobs.models.Baba;
import jobbyjobs.com.jobbyjobs.models.Login;
import jobbyjobs.com.jobbyjobs.models.Notifcacoes;
import jobbyjobs.com.jobbyjobs.models.Profissional;
import jobbyjobs.com.jobbyjobs.repositories.BabaRepository;
import jobbyjobs.com.jobbyjobs.repositories.NotificacaoRepository;
import jobbyjobs.com.jobbyjobs.repositories.ProfissionalRepository;
import jobbyjobs.com.jobbyjobs.repositories.UsuariosJobRepository;
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

@SpringBootTest(classes = TrabalhadorController.class)
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

    @Test
    @DisplayName("getTrabalhadores() deve retornar 204 caso não exista trabalhadores no banco")
    void getTrabalhadores() {
        List<Profissional> profissionais = new ArrayList<>();
        int id = 10;

        Mockito.when(profissionalRepository.findAll()).thenReturn(profissionais);

        ResponseEntity resposta = controller.getTrabalhadores();

        assertEquals(204, resposta.getStatusCodeValue());
        assertEquals(null, resposta.getBody());
    }

    @Test
    @DisplayName("getTrabalhadores() deve retornar 200 caso exista trabalhadores no banco")
    void getTrabalhadoresCenario2() {
        List<Profissional> profissionais = Arrays.asList(Mockito.mock(Profissional.class));

        Mockito.when(profissionalRepository.findAll()).thenReturn(profissionais);

        ResponseEntity resposta = controller.getTrabalhadores();

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(profissionais, resposta.getBody());
    }

    @Test
    @DisplayName("getTrabalhadorById() deve retornar 200 caso exista um trabalhador especifico no banco")
    void getTrabalhadorById() {
        int id = 10;
        Profissional profissional = Mockito.mock(Profissional.class);

        Mockito.when(profissionalRepository.findById(id)).thenReturn(Optional.of(profissional));

        ResponseEntity resposta = controller.getTrabalhadorById(id);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(profissional, resposta.getBody());
    }

    @Test
    @DisplayName("getTrabalhadorById() deve retornar 404 caso não exista um trabalhador especifico no banco")
    void getTrabalhadorByIdCenario2() {
        int id = 10;
        Mockito.when(profissionalRepository.findById(id)).thenReturn(Optional.empty());

        ResponseEntity resposta = controller.getTrabalhadorById(id);

        assertEquals(404, resposta.getStatusCodeValue());
        assertEquals(null, resposta.getBody());
    }

    @Test
    void registrarTrabalhador() {

        Profissional profissional = Mockito.mock(Profissional.class);
        profissional.setProfissao("Baba");

        Mockito.when(profissional.getProfissao()).thenReturn("Baba");

        ResponseEntity resposta = controller.registrarTrabalhador(profissional);
        assertEquals(201, resposta.getStatusCodeValue());

    }

    @Test
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
    @DisplayName("getLogados() deve retornar 204 caso não esteja ninguem logado")
    void getLogados(){
        ResponseEntity resposta = controller.getLogados();
        assertEquals(204, resposta.getStatusCodeValue());
        assertEquals(null, resposta.getBody());
    }

    @Test
    @DisplayName("getLogados() deve retornar 200 caso alguem esteja logado")
    void getLogadosCenario2(){
        List<Login> logins = Arrays.asList(Mockito.mock(Login.class));
        ResponseEntity resposta = controller.getLogados();
        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(logins, resposta.getBody());
    }

    @Test
    @DisplayName("getNotificacoes() deve retornar 404 caso não exista uma baba especifico no banco")
    void getNotificacoes() {

        int id = 10;
        Mockito.when(babaRepository.findById(id)).thenReturn(Optional.empty());

        ResponseEntity resposta = controller.getNotificacoes(id);

        assertEquals(404, resposta.getStatusCodeValue());
        assertEquals(null, resposta.getBody());
    }

    @Test
    @DisplayName("getNotificacoes() deve retornar 200 caso exista uma baba especifico no banco")
    void getNotificacoesCenario2() {
        Baba baba = Mockito.mock(Baba.class);
        List<Notifcacoes> notifcacoes = Arrays.asList(Mockito.mock(Notifcacoes.class));
        int id = 10;

        Mockito.when(babaRepository.findById(id)).thenReturn(Optional.of(baba));
        Mockito.when(notificacaoRepository.findByBabaNotificadaId(id)).thenReturn(notifcacoes);

        ResponseEntity resposta = controller.getNotificacoes(id);

        assertEquals(200, resposta.getStatusCodeValue());
        assertEquals(notifcacoes, resposta.getBody());
    }

//    @Test
//    void calcularSalarioBaba() {
//
//        int id = 10;
//        Double valorCobrado = 250.00;
//
//        Profissional profissional = Mockito.mock(Profissional.class);
//        Baba baba = Mockito.mock(Baba.class);
//
//        profissional.setCobrarPorHora(true);
//        profissional.setValorHora(5.00);
//
//        baba.setCozinhar(true);
//        baba.setLimpar(true);
//
//        baba.setPrecoCozinheira(100.00);
//        baba.setPrecoLimpeza(50.00);
//
//        baba.setPrecoAteTres(50.00);
//        baba.setPrecoTresAteOito(100.00);
//        baba.setPrecoNoveAteQuinze(150.00);
//
//        profissional.setBaba(baba);
//
//        Mockito.when(profissionalRepository.findById(id)).thenReturn(Optional.of(profissional));
//
//        System.out.println(baba);
//
//        ResponseEntity resposta = controller.calcularSalarioBaba(10, 2, 1, 10);
//
//        assertEquals(200, resposta.getStatusCodeValue());
//        assertEquals(valorCobrado, resposta.getBody());
//
//    }
}