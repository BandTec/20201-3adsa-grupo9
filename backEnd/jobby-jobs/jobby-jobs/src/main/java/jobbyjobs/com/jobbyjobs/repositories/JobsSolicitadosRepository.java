package jobbyjobs.com.jobbyjobs.repositories;

import jobbyjobs.com.jobbyjobs.models.JobsSolicitados;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobsSolicitadosRepository extends JpaRepository<JobsSolicitados,Integer> {

}
