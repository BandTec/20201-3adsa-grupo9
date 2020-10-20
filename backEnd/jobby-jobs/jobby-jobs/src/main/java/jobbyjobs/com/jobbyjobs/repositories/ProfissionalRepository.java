package jobbyjobs.com.jobbyjobs.repositories;

import jobbyjobs.com.jobbyjobs.models.Profissional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Integer> {
}
