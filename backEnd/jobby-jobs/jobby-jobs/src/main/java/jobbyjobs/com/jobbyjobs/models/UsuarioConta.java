package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;

@Entity
public class UsuarioConta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "Agencia", nullable = false)
    private Integer agencia;

    @Column(name = "Numero_Conta", nullable = false)
    private Integer conta;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAgencia() {
        return agencia;
    }
    public void setAgencia(Integer agencia) {
        this.agencia = agencia;
    }

    public Integer getConta() {
        return conta;
    }
    public void setConta(Integer conta) {
        this.conta = conta;
    }
}
