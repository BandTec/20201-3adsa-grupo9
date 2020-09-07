package jobbyjobs.com.jobbyjobs.models;

public class Contratante extends Usuario{

    private String formaDePagamento;

    public Contratante(String nome, String telefone, String CPF, String email, String senha, String formaDePagamento){
        super(nome, telefone, CPF, email, senha);
        this.formaDePagamento = formaDePagamento;
    }

    public String getFormaDePagamento() {
        return this.formaDePagamento;
    }


    @Override
    public String toString() {
        return "Contratante: " +
            " \n " + super.toString() +
            " \n Forma de pagamento: " + getFormaDePagamento();
    }


}