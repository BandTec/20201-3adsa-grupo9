package jobbyjobs.com.jobbyjobs.repositories;

import jobbyjobs.com.jobbyjobs.models.Avaliacoes;
import jobbyjobs.com.jobbyjobs.models.JobsSolicitados;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsSolicitadosRepository extends JpaRepository<JobsSolicitados,Integer> {

    List<JobsSolicitados> findByBabaSolicitadaId(int id);



}
