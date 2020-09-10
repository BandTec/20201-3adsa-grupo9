package jobbyjobs.com.jobbyjobs.models;

public class Baba extends Trabalhador{

    private Double qtdHoras; 
    private Integer qtdCriancas;
    private Integer idadeMedia;
    private Double precoCozinheira;
    private Double precoLimpeza;
    private Double precoAteTres, precoTresAteOito, precoNoveAteQuinze;
    private Boolean cozinhar = false;
    private Boolean limpar = false;
    private Double valorCobrado = 0.0;

    public Baba(String nome, String telefone, String CPF, String email, String senha, Boolean cobrarPorHora, Double valorHora, Double valorFixo, Double qtdHoras, Integer qtdCriancas, Integer idadeMedia, Double precoCozinheira, Double precoLimpeza, Double precoAteTres, Double precoTresAteOito, Double precoNoveAteQuinze, Boolean cozinhar, Boolean limpar, Double valorCobrado) {
        super(nome, telefone, CPF, email, senha, cobrarPorHora, valorHora, valorFixo);
        this.qtdHoras = qtdHoras;
        this.qtdCriancas = qtdCriancas;
        this.idadeMedia = idadeMedia;
        this.precoCozinheira = precoCozinheira;
        this.precoLimpeza = precoLimpeza;
        this.precoAteTres = precoAteTres;
        this.precoTresAteOito = precoTresAteOito;
        this.precoNoveAteQuinze = precoNoveAteQuinze;
        this.cozinhar = cozinhar;
        this.limpar = limpar;
        this.valorCobrado = valorCobrado;
    }

    public Double getQtdHoras() {
        return qtdHoras;
    }

    public Integer getQtdCriancas() {
        return qtdCriancas;
    }

    public Integer getIdadeMedia() {
        return idadeMedia;
    }

    public Double getPrecoCozinheira() {
        return precoCozinheira;
    }

    public Double getPrecoLimpeza() {
        return precoLimpeza;
    }

    public Boolean getCozinhar() {
        return cozinhar;
    }

    public Boolean getLimpar() {
        return limpar;
    }

    public Double getPrecoAteTres() {
        return precoAteTres;
    }

    public Double getPrecoTresAteOito() {
        return precoTresAteOito;
    }

    public Double getPrecoNoveAteQuinze() {
        return precoNoveAteQuinze;
    }

    public Double getValorCobrado() {
        return valorCobrado;
    }


    public void verificaTrabalho(){
        if (cozinhar && limpar){
            valorCobrado += precoCozinheira + precoLimpeza;
        }
        else if (cozinhar){
            valorCobrado += precoCozinheira;
        }
        else if (limpar){
            valorCobrado += precoLimpeza;
        }
    }

    @Override
    public  Double getCalculaSalario(){
        if(idadeMedia >= 0 && idadeMedia <= 3){
            valorCobrado += (super.getValorHora() * qtdHoras) + precoAteTres;
        }
        else if(idadeMedia >= 4 && idadeMedia <= 8){
            valorCobrado += (super.getValorHora() * qtdHoras) + precoTresAteOito;
        }
        else if(idadeMedia >= 9 && idadeMedia <= 15){
            valorCobrado += (super.getValorHora() * qtdHoras) + precoNoveAteQuinze;
        }
        verificaTrabalho();

        return valorCobrado;
    }

    @Override
    public String toString() {
        return "\n Baba: " +
                "\n " + super.toString() +
                "\n Valor/hora: " + getValorHora() +
                "\n QtdHoras: " + qtdHoras +
                "\n QtdCriancas: " + qtdCriancas +
                "\n Idade média das crianças: " + idadeMedia +
                "\n Cozinha?: " + cozinhar +
                "\n Limpa?: " + limpar +
                "\n Preço do serviço de cozinheira: " + precoCozinheira +
                "\n Preço do serviço como limpeza: " + precoLimpeza +
                "\n Preço até 3 anos: " + precoAteTres +
                "\n Preço de 4 até 8 anos: " + precoTresAteOito +
                "\n Preço de 9 até 15 anos: " + precoNoveAteQuinze;
    }
}
