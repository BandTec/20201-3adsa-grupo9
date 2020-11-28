package jobbyjobs.com.jobbyjobs.repositories;

import jobbyjobs.com.jobbyjobs.models.Avaliacoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvaliacoesRepository extends JpaRepository<Avaliacoes, Integer> {

    List<Avaliacoes> findByBabaAvaliadaId(int id);

}
