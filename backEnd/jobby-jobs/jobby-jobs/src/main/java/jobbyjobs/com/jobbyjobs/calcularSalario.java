package jobbyjobs.com.jobbyjobs;

import jobbyjobs.com.jobbyjobs.utilities.CalculoOrcamento;
import org.springframework.http.ResponseEntity;

public  interface CalcularSalario {
    public ResponseEntity calcularSalarioBaba(int id, CalculoOrcamento calculoOrcamento);

}
