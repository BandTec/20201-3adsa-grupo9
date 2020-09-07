package jobbyjobs.com.jobbyjobs.models;

public class Pedreiro extends Trabalhador{

    private Double qtdHoras;

    public Pedreiro(String nome, String telefone, String CPF, String email, String senha){
        super(nome, telefone, CPF, email, senha);
    }

    @Override
    public  Double calculaSalario(){
        Double valorCobrado;
        valorCobrado = (super.getCobrarPorHora())
                ? (super.getValorHora() * qtdHoras)
                : super.getValorFixo();
        return valorCobrado;
    }

    public Double getQtdHoras() {
        return this.qtdHoras;
    }

    public void setQtdHoras(Double qtdHoras) {
        this.qtdHoras = qtdHoras;
    }

    @Override
    public String toString() {
        if(super.getCobrarPorHora()){
        return "\n Pedreiro: " +
            " \n " + super.toString() +
            " \n Valor/Hora: " + getValorHora() +
            " \n Qtd/Horas: " + getQtdHoras() +
            " \n Valor total: " + calculaSalario(); 
        } else {
            return "\n Pedreiro: " +
                " \n " + super.toString() +
                " \n ValorFixo: " + getValorFixo() +
                " \n Valor total: " + calculaSalario();
        }
           
    }
    

}