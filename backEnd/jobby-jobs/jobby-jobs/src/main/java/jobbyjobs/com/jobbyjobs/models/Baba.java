package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Baba{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "cozinhar")
    @NotNull
    private Boolean cozinhar;

    @Column(name = "limpar")
    @NotNull
    private Boolean limpar;

    @Column(name = "precoSeCozinha")
    @NotNull
    private Double precoCozinheira;

    @Column(name = "precoSeLimpa")
    @NotNull
    private Double precoLimpeza;

    @Column(name = "precoIdadeAteTres")
    @NotNull
    private Double precoAteTres;

    @Column(name = "precoIdadeTresAteOito")
    @NotNull
    private Double precoTresAteOito;

    @Column(name = "precoIdadeNoveAteQuinze")
    @NotNull
    private Double precoNoveAteQuinze;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
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

}
