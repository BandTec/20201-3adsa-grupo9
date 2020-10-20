package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;

@Entity
public class Profissional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "Nome_Profissao", length = 40, nullable = false)
    private String profissao;

    @Column(name = "Cobrar_Por_Hora", nullable = false)
    private Boolean cobrarPorHora;

    @Column(name = "Valor_Hora", nullable = false)
    private double valorHora;

    @Column(name = "Valor_Fixo", nullable = false)
    private double valorFixo;

    @Column(name = "Fk_Baba")
    @ManyToOne
    private Baba baba;

    @Column(name = "Fk_Usuario")
    @ManyToOne
    private Usuario usuario;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getProfissao() {
        return profissao;
    }
    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public Boolean getCobrarPorHora() {
        return cobrarPorHora;
    }
    public void setCobrarPorHora(Boolean cobrarPorHora) {
        this.cobrarPorHora = cobrarPorHora;
    }

    public double getValorHora() {
        return valorHora;
    }
    public void setValorHora(double valorHora) {
        this.valorHora = valorHora;
    }

    public double getValorFixo() {
        return valorFixo;
    }
    public void setValorFixo(double valorFixo) {
        this.valorFixo = valorFixo;
    }

    public Baba getBaba() {
        return baba;
    }
    public void setBaba(Baba baba) {
        this.baba = baba;
    }

    public Usuario getUsuario() {
        return usuario;
    }
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
