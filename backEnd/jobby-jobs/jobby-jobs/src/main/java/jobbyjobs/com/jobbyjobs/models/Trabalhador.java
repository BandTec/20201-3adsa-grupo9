package jobbyjobs.com.jobbyjobs.models;

public abstract class Trabalhador extends Usuario{

    private Boolean cobrarPorHora = false;
    private Double valorHora;
    private Double valorFixo;

    public Trabalhador(String nome, String telefone, String CPF, String email, String senha, Boolean cobrarPorHora, Double valorHora, Double valorFixo) {
        super(nome, telefone, CPF, email, senha);
        this.cobrarPorHora = cobrarPorHora;
        this.valorHora = valorHora;
        this.valorFixo = valorFixo;
    }

    public abstract Double getCalculaSalario();

    public Boolean getCobrarPorHora() {
        return this.cobrarPorHora;
    }

    public Double getValorFixo() {
        return this.valorFixo;
    }

    public Double getValorHora() {
        return this.valorHora;
    }

    @Override
    public String toString() {
        return "Trabalhador: " +
        " \n " + super.toString();
    }
    
}


