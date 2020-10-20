package jobbyjobs.com.jobbyjobs.repositories;

import jobbyjobs.com.jobbyjobs.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuariosJobRepository extends JpaRepository<Usuario, Integer> {

}
