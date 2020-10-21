package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;

@Entity
public class Profissional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nome_profissao", length = 40, nullable = false)
    private String profissao;

    @Column(name = "cobrar_cor_hora", nullable = false)
    private Boolean cobrarPorHora;

    @Column(name = "valor_hora", nullable = false)
    private double valorHora;

    @Column(name = "valor_fixo", nullable = false)
    private double valorFixo;

    @ManyToOne
    private Baba baba;

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

    @Override
    public String toString() {
        return "\n Profissional: " +
                "\n Id: " + id +
                "\n Profissao: " + profissao +
                "\n CobrarPorHora: " + cobrarPorHora +
                "\n ValorHora: " + valorHora +
                "\n ValorFixo: " + valorFixo +
                "\n Baba: " + baba +
                "\n Usuario: " + usuario;
    }
}
