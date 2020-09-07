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

    public Baba(String nome, String telefone, String CPF, String email, String senha) {
        super(nome, telefone, CPF, email, senha);
    }

    public Double getQtdHoras() {
        return qtdHoras;
    }
    public void setQtdHoras(Double qtdHoras) {
        this.qtdHoras = qtdHoras;
    }

    public Integer getQtdCriancas() {
        return qtdCriancas;
    }
    public void setQtdCriancas(Integer qtdCriancas) {
        this.qtdCriancas = qtdCriancas;
    }

    public Integer getIdadeMedia() {
        return idadeMedia;
    }
    public void setIdadeMedia(Integer idadeMedia) {
        this.idadeMedia = idadeMedia;
    }

    public Double getPrecoCozinheira() {
        return precoCozinheira;
    }
    public void setPrecoCozinheira(Double precoCozinheira) {
        this.precoCozinheira = precoCozinheira;
    }

    public Double getPrecoLimpeza() {
        return precoLimpeza;
    }
    public void setPrecoLimpeza(Double precoLimpeza) {
        this.precoLimpeza = precoLimpeza;
    }

    public Boolean getCozinhar() {
        return cozinhar;
    }
    public void setCozinhar(Boolean cozinhar) {
        this.cozinhar = cozinhar;
    }

    public Boolean getLimpar() {
        return limpar;
    }
    public void setLimpar(Boolean limpar) {
        this.limpar = limpar;
    }

    public Double getPrecoAteTres() {
        return precoAteTres;
    }
    public void setPrecoAteTres(Double precoAteTres) {
        this.precoAteTres = precoAteTres;
    }

    public Double getPrecoTresAteOito() {
        return precoTresAteOito;
    }
    public void setPrecoTresAteOito(Double precoTresAteOito) {
        this.precoTresAteOito = precoTresAteOito;
    }

    public Double getPrecoNoveAteQuinze() {
        return precoNoveAteQuinze;
    }
    public void setPrecoNoveAteQuinze(Double precoNoveAteQuinze) {
        this.precoNoveAteQuinze = precoNoveAteQuinze;
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
    public  Double calculaSalario(){
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
