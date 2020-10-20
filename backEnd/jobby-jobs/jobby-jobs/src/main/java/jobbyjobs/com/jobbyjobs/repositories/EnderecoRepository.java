package jobbyjobs.com.jobbyjobs.repositories;

import jobbyjobs.com.jobbyjobs.models.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco,Integer> {

}
