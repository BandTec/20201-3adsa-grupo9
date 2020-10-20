package jobbyjobs.com.jobbyjobs.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioContaRepository extends JpaRepository<UsuarioContaRepository, Integer> {
}
