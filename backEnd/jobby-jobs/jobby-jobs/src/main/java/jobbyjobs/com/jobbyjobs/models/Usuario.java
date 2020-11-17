package jobbyjobs.com.jobbyjobs.models;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Integer id;

    @Column(name = "usuario_nome", length = 50)
    @NotNull
    private String nome;

    @Column(name = "usuario_email", length = 40)
    @NotNull
    private String email;

    @Column(name = "usuario_senha", length = 16)
    @NotNull
    private String senha;

    @Column(name = "usuario_cpf", length = 11)
    @NotNull
    private String CPF;

    @Column(name = "usuario_telefone", length = 11)
    @NotNull
    private String telefone;

    @Column(name = "tipo_usuario")
    private Integer tipoUsuario;

    @ManyToOne
    private Endereco endereco;

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


    public String getTelefone() {
        return telefone;
    }
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String toString() {
        return "\n Usuario: " +
                "\n Id:" + id +
                "\n Nome: " + nome +
                "\n Email: " + email +
                "\n Senha: " + senha +
                "\n CPF: " + CPF +
                "\n Telefone: " + telefone +
                "\n Tipo usuario: " + tipoUsuario +
                "\n Endereco: " + endereco +
                "\n Usuario conta: " + usuarioConta;
    }
}
