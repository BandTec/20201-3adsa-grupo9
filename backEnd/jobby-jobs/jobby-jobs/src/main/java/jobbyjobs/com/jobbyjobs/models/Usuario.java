package jobbyjobs.com.jobbyjobs.models;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "Usuario_Nome", length = 30)
    @NotNull
    private String nome;

    @Column(name = "Usuario_Email", length = 40)
    @NotNull
    private String email;

    @Column(name = "Usuario_Senha", length = 16)
    @NotNull
    private String senha;

    @Column(name = "Usuario_Cpf", length = 12)
    @NotNull
    private String CPF;

    @Column(name = "Tipo_usuario")
    private Integer tipoUsuario;

    @Column(name = "Fk_Endereco")
    @ManyToOne
    private Endereco endereco;

    @Column(name = "Fk_Usuario_Conta")
    @ManyToOne
    private UsuarioConta usuarioConta;



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

    public Integer getTipoUsuario() {
        return tipoUsuario;
    }
    public void setTipoUsuario(Integer tipoPessoa) {
        this.tipoUsuario = tipoPessoa;
    }

    public Endereco getEndereco() {
        return endereco;
    }
    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public UsuarioConta getUsuarioConta() {
        return usuarioConta;
    }
    public void setUsuarioConta(UsuarioConta usuarioConta) {
        this.usuarioConta = usuarioConta;
    }
}
