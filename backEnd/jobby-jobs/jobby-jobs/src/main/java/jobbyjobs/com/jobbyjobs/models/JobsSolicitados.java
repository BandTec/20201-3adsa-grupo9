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

    @Column(name = "valor_total", nullable = false, precision = 2)
    private Double valorTotal;

    @ManyToOne
    private Usuario usuarioSolicitante;

    @ManyToOne
    private Baba babaSolicitada;

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

    public Double getValorTotal() {
        return valorTotal;
    }
    public void setValorTotal(Double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public Usuario getUsuarioSolicitante() {
        return usuarioSolicitante;
    }
    public void setUsuarioSolicitante(Usuario usuario) {
        this.usuarioSolicitante = usuario;
    }

    public Baba getBabaSolicitada() {
        return babaSolicitada;
    }
    public void setBabaSolicitada(Baba baba) {
        this.babaSolicitada = baba;
    }

    @Override
    public String toString() {
        return "\n JobsSolicitados: " +
                "\n IdJob: " + idJob +
                "\n QtdHorasTrabalho: " + qtdHorasTrabalho +
                "\n ValorTotal: " + valorTotal +
                "\n Usuario: " + usuarioSolicitante +
                "\n Baba: " + babaSolicitada;
    }
}
