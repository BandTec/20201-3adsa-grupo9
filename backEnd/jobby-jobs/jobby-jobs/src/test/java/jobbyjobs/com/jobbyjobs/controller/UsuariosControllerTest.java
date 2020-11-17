package jobbyjobs.com.jobbyjobs.controller;

import jobbyjobs.com.jobbyjobs.models.Usuario;
import jobbyjobs.com.jobbyjobs.repositories.BabaRepository;
import jobbyjobs.com.jobbyjobs.repositories.NotificacaoRepository;
import jobbyjobs.com.jobbyjobs.repositories.UsuariosJobRepository;
import jobbyjobs.com.jobbyjobs.services.ViaCepService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

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
    @DisplayName("Deve retornar 200 e usuario/Lista usuarios")
    void getUsuariosCenario1() {
        Integer id = 1;
        Usuario usuario = Mockito.mock(Usuario.class);
        Mockito.when(usuarioRepository.findById(id)).thenReturn(Optional.of(usuario));

        ResponseEntity resposta = controller.getUsuarios(id);

        assertEquals(200,resposta.getStatusCodeValue());
        assertEquals(usuario, resposta.getBody());
    }

    @Test
    void registrarUsuarios() {
    }

    @Test
    void getCep() {
    }

    @Test
    void fazerLogin() {
    }

    @Test
    void fazerLogoff() {
    }

    @Test
    void getLogados() {
    }

    @Test
    void pedirOrcamentoBaba() {
    }
}