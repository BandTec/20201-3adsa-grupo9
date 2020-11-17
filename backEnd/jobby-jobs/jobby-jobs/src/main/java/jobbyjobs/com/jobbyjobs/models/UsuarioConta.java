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

    @Column(name = "titular_conta")
    @NotNull
    private String titularConta;

    @Column(name = "banco")
    @NotNull
    private String banco;

    @Column(name = "tipo_conta")
    @NotNull
    private String tipoConta;

    @Column(name = "pessoa_fisica")
    @NotNull
    private boolean pessoaFisica;

    @Column(name = "pessoa_juridica")
    @NotNull
    private boolean pessoaJuridica;

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

    public String getTitularConta() {
        return titularConta;
    }
    public void setTitularConta(String titularConta) {
        this.titularConta = titularConta;
    }

    public String getBanco() {
        return banco;
    }
    public void setBanco(String banco) {
        this.banco = banco;
    }

    public String getTipoConta() {
        return tipoConta;
    }
    public void setTipoConta(String tipoConta) {
        this.tipoConta = tipoConta;
    }

    public boolean isPessoaFisica() {
        return pessoaFisica;
    }
    public void setPessoaFisica(boolean pessoaFisica) {
        this.pessoaFisica = pessoaFisica;
    }

    public boolean isPessoaJuridica() {
        return pessoaJuridica;
    }
    public void setPessoaJuridica(boolean pessoaJuridica) {
        this.pessoaJuridica = pessoaJuridica;
    }

    @Override
    public String toString() {
        return "\n UsuarioConta: " +
                "\n Id:" + id +
                "\n Agencia: " + agencia +
                "\n Conta: " + conta +
                "\n TitularConta: " + titularConta +
                "\n Banco: " + banco +
                "\n TipoConta: " + tipoConta +
                "\n PessoaFisica: " + pessoaFisica +
                "\n PessoaJuridica: " + pessoaJuridica;
    }
}
