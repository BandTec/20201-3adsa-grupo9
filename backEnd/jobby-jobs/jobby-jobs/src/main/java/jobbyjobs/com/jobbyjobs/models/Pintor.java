package jobbyjobs.com.jobbyjobs.models;

public class Pintor extends Trabalhador{

    private Double qtdHoras;
    private Double valorFixo; // valor fixo do serviço
    private Double valorMetro;
    private Double qtdMetros;

    public Pintor(String nome, String telefone, String CPF, String email, String senha) {
        super(nome, telefone, CPF, email, senha);
    }

    @Override
    public  Double calculaSalario(){
        Double valorCobrado;
        valorCobrado = (super.getCobrarPorHora()) 
        ? (super.getValorHora() * qtdHoras) + (valorMetro * qtdMetros)  
        : super.getValorFixo() + (valorMetro * qtdMetros);
        return valorCobrado;
    }


    public Double getQtdHoras() {
        return this.qtdHoras;
    }

    public Double getValorFixo() {
        return this.valorFixo;
    }

    public Double getValorMetro() {
        return this.valorMetro;
    }

    public Double getQtdMetros() {
        return this.qtdMetros;
    }
    
    public void setQtdHoras(Double qtdHoras) {
        this.qtdHoras = qtdHoras;
    }
    public void valorFixo(Double valorFixo) {
        this.valorFixo = valorFixo;
    }

    public void setValorMetro(Double valorMetro) {
        this.valorMetro = valorMetro;
    }

    public void qtdMetros(Double qtdMetros) {
        this.qtdMetros = qtdMetros;
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
            " \n Valor total: " + calculaSalario();
        } else {
            return "\n Pintor: " +
                " \n " + super.toString() +
                " \n Valor/Metro: " + getValorMetro() + 
                " \n Qtd/Metro: " + getQtdMetros() +
                " \n Valor total: " + calculaSalario();
        }
           
    }
}
