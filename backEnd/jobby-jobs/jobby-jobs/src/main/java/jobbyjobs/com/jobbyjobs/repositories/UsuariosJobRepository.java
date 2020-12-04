package jobbyjobs.com.jobbyjobs.repositories;

import jobbyjobs.com.jobbyjobs.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UsuariosJobRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findByEmail(String email);
    List<Usuario> findByEnderecoZonaRegional(String zonaRegional);



}
