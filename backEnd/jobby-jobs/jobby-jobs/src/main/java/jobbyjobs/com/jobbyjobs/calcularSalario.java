package jobbyjobs.com.jobbyjobs;

import org.springframework.http.ResponseEntity;

public  interface calcularSalario {
    public ResponseEntity calcularSalarioBaba(int id, int idadeMedia, int qtdCriancas, int qtdHoras);

}
