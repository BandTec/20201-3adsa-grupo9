package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Trabalhador{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "cobrarPorHora")
    @NotNull
    private Boolean cobrarPorHora;

    @Column(name = "valorHora")
    @NotNull
    private Double valorHora;

    @Column(name = "valorFixo")
    @NotNull
    private Double valorFixo;


    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Boolean getCobrarPorHora() {
        return cobrarPorHora;
    }
    public void setCobrarPorHora(Boolean cobrarPorHora) {
        this.cobrarPorHora = cobrarPorHora;
    }

    public Double getValorHora() {
        return valorHora;
    }
    public void setValorHora(Double valorHora) {
        this.valorHora = valorHora;
    }

    public Double getValorFixo() {
        return valorFixo;
    }
    public void setValorFixo(Double valorFixo) {
        this.valorFixo = valorFixo;
    }
}


