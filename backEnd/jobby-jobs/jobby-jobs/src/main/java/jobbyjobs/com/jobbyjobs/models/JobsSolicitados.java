package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;

@Entity
public class JobsSolicitados {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Integer idJob;

    @Column(name = "QtdHorasTrabalho", nullable = false)
    private Integer qtdHorasTrabalho;

    @Column(name = "ValorDaHora", nullable = true, precision = 2)
    private Double valorHora;

    @Column(name = "ValorFixo", nullable = true, precision = 2)
    private Double valorFixo;

    @Column(name = "ValorTotal", nullable = false, precision = 2)
    private Double valorTotal;

    @Column(name = "Fk_Usuario")
    @ManyToOne
    private Usuario usuario;

    public Integer getIdJob() {
        return idJob;
    }
    public void setIdJob(Integer idJob) {
        this.idJob = idJob;
    }

    public Integer getQtdHorasTrabalho() {
        return qtdHorasTrabalho;
    }
    public void setQtdHorasTrabalho(Integer qtdHorasTrabalho) {
        this.qtdHorasTrabalho = qtdHorasTrabalho;
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

    public Double getValorTotal() {
        return valorTotal;
    }
    public void setValorTotal(Double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public Usuario getUsuario() {
        return usuario;
    }
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
