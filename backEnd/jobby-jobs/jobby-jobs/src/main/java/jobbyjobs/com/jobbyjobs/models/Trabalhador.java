package jobbyjobs.com.jobbyjobs.models;

public abstract class Trabalhador extends Usuario{

    private Boolean cobrarPorHora = false;
    private Double valorHora;
    private Double valorFixo;

    public Trabalhador(String nome, String telefone, String CPF, String email, String senha) {
        super(nome, telefone, CPF, email, senha);
    }

    public abstract Double calculaSalario();

    public Boolean getCobrarPorHora() {
        return this.cobrarPorHora;
    }

    public Double getValorFixo() {
        return this.valorFixo;
    }

    public Double getValorHora() {
        return this.valorFixo;
    }

    public void setCobrarPorHora(Boolean cobrarPorHora) {
        this.cobrarPorHora = cobrarPorHora;
    }

    public void setValorhora(Double valorhora) {
        this.valorHora = valorhora;
    }

    public void setValorFixo(Double valorFixo) {
        this.valorFixo = valorFixo;
    }


    @Override
    public String toString() {
        return "Trabalhador: " +
        " \n " + super.toString();
    }
    
}


