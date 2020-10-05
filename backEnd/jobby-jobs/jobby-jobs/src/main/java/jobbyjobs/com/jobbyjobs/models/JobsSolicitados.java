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
}
