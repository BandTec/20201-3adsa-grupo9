package jobbyjobs.com.jobbyjobs.models;

public abstract class Usuario {
    private String nome;
    private String telefone;
    private String CPF;
    private String email;
    private String senha;


    public Usuario(String nome, String telefone, String CPF, String email, String senha) {
        this.nome = nome;
        this.telefone = telefone;
        this.CPF = CPF;
        this.email = email;
        this.senha = senha;
    }


    public String getNome() {
        return this.nome;
    }

    public String getTelefone() {
        return this.telefone;
    }

    public String getCPF() {
        return this.CPF;
    }

    public String getEmail() {
        return this.email;
    }

    public String getSenha() {
        return this.senha;
    }

    @Override
    public String toString() {
        return "\n Usuario: " +
                "\n Nome: " + nome +
                "\n Telefone: " + telefone +
                "\n CPF: " + CPF +
                "\n Email: " + email +
                "\n Senha: " + senha;
    }
}
