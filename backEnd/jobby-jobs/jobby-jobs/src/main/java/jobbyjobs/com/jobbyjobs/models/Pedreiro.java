package jobbyjobs.com.jobbyjobs.models;

public class Pedreiro extends Trabalhador{

    private Double qtdHoras;
    private Double valorCobrado;

    public Pedreiro(String nome, String telefone, String CPF, String email, String senha, Boolean cobrarPorHora, Double valorHora, Double valorFixo, Double qtdHoras, Double valorCobrado) {
        super(nome, telefone, CPF, email, senha, cobrarPorHora, valorHora, valorFixo);
        this.qtdHoras = qtdHoras;
        this.valorCobrado = valorCobrado;
    }

    @Override
    public  Double getCalculaSalario(){
        valorCobrado = (super.getCobrarPorHora())
                ? (super.getValorHora() * qtdHoras)
                : super.getValorFixo();
        return valorCobrado;
    }

    public Double getQtdHoras() {
        return this.qtdHoras;
    }


    @Override
    public String toString() {
        if(super.getCobrarPorHora()){
        return "\n Pedreiro: " +
            " \n " + super.toString() +
            " \n Valor/Hora: " + getValorHora() +
            " \n Qtd/Horas: " + getQtdHoras() +
            " \n Valor total: " + getCalculaSalario();
        } else {
            return "\n Pedreiro: " +
                " \n " + super.toString() +
                " \n ValorFixo: " + getValorFixo() +
                " \n Valor total: " + getCalculaSalario();
        }
           
    }
    

}