package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "usuarioNome", length = 30)
    @NotNull
    private String nome;

    @Column(name = "usuarioEmail", length = 40)
    @NotNull
    private String email;

    @Column(name = "usuarioSenha", length = 16)
    @NotNull
    private String senha;

    @Column(name = "usuarioCPF", length = 12)
    @NotNull
    private String CPF;

    @Column(name = "formaDePagamento", length = 20)
    @NotNull
    private String formaPagamento;

    @Column(name = "usurioTipo")
    private Integer tipoPessoa;


    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCPF() {
        return CPF;
    }
    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public String getFormaPagamento() {
        return formaPagamento;
    }
    public void setFormaPagamento(String formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public Integer getTipoPessoa() {
        return tipoPessoa;
    }
    public void setTipoPessoa(Integer tipoPessoa) {
        this.tipoPessoa = tipoPessoa;
    }
}
