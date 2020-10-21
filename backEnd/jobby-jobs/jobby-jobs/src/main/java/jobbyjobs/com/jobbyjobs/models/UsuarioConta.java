package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class UsuarioConta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario_conta")
    private Integer id;

    @Column(name = "agencia")
    @NotNull
    private Integer agencia;

    @Column(name = "numero_conta")
    @NotNull
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

    @Override
    public String toString() {
        return "\n UsuarioConta: " +
                "\n Id:" + id +
                "\n Agencia: " + agencia +
                "\n Conta: " + conta;
    }
}
