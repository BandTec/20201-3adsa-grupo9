package jobbyjobs.com.jobbyjobs.utilities;

import org.springframework.http.ResponseEntity;

public interface CalcularSalario {
        public ResponseEntity calcularSalarioBaba(int id, CalculoOrcamento calculoOrcamento);

}
