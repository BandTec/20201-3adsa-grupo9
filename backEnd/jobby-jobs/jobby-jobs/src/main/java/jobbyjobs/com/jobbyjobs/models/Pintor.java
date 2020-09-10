package jobbyjobs.com.jobbyjobs.models;

public class Pintor extends Trabalhador{

    private Double qtdHoras;
    private Double valorMetro;
    private Double qtdMetros;
    private Double valorCobrado;

    public Pintor(String nome, String telefone, String CPF, String email, String senha, Boolean cobrarPorHora, Double valorHora, Double valorFixo, Double qtdHoras, Double valorMetro, Double qtdMetros, Double valorCobrado) {
        super(nome, telefone, CPF, email, senha, cobrarPorHora, valorHora, valorFixo);
        this.qtdHoras = qtdHoras;
        this.valorMetro = valorMetro;
        this.qtdMetros = qtdMetros;
        this.valorCobrado = valorCobrado;
    }

    @Override
    public  Double getCalculaSalario(){
        valorCobrado = (super.getCobrarPorHora()) 
        ? (super.getValorHora() * qtdHoras) + (valorMetro * qtdMetros)  
        : super.getValorFixo() + (valorMetro * qtdMetros);
        return valorCobrado;
    }

    public Double getQtdHoras() {
        return this.qtdHoras;
    }

    public Double getValorMetro() {
        return this.valorMetro;
    }

    public Double getQtdMetros() {
        return this.qtdMetros;
    }

    @Override
    public String toString() {
        if(super.getCobrarPorHora()){
        return "\n Pintor: " +
            " \n " + super.toString() +
            " \n Valor/Hora: " + getValorHora() +
            " \n Qtd/Horas: " + getQtdHoras() + 
            " \n Valor/Metro: " + getValorMetro() + 
            " \n Qtd/Metro: " + getQtdMetros() + 
            " \n Valor total: " + getCalculaSalario();
        } else {
            return "\n Pintor: " +
                " \n " + super.toString() +
                " \n Valor/Metro: " + getValorMetro() + 
                " \n Qtd/Metro: " + getQtdMetros() +
                " \n Valor total: " + getCalculaSalario();
        }
           
    }
}
