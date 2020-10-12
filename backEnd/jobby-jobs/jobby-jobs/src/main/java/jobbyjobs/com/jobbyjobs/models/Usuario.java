package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "usuarioNome", length = 30)
    private String nome;

    @Column(name = "usuarioEmail", length = 40)
    private String email;

    @Column(name = "usuarioSenha", length = 16)
    private String senha;

    @Column(name = "usuarioCPF", length = 12)
    private String CPF;

    @Column(name = "formaDePagamento", length = 20)
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
