package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;

@Entity
public class JobsSolicitados {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_job")
    private Integer idJob;

    @Column(name = "qtd_horas_trabalho", nullable = false)
    private Integer qtdHorasTrabalho;

    @Column(name = "valor_da_hora", nullable = true, precision = 2)
    private Double valorHora;

    @Column(name = "valor_fixo", nullable = true, precision = 2)
    private Double valorFixo;

    @Column(name = "valor_total", nullable = false, precision = 2)
    private Double valorTotal;

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

    @Override
    public String toString() {
        return "\n JobsSolicitados: " +
                "\n IdJob: " + idJob +
                "\n QtdHorasTrabalho: " + qtdHorasTrabalho +
                "\n ValorHora: " + valorHora +
                "\n ValorFixo " + valorFixo +
                "\n ValorTotal: " + valorTotal +
                "\n Usuario: " + usuario;
    }
}
