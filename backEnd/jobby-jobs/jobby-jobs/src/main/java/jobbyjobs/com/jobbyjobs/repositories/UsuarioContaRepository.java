package jobbyjobs.com.jobbyjobs.repositories;

import jobbyjobs.com.jobbyjobs.models.UsuarioConta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioContaRepository extends JpaRepository<UsuarioConta, Integer> {
}
