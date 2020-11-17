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

    @Column(name = "qtd_dias_trabalha", nullable = false)
    private int qtdDiasTrabalha;

    @Column(name = "segunda", nullable = false)
    private String segunda;

    @Column(name = "terca", nullable = false)
    private String terca;

    @Column(name = "quarta", nullable = false)
    private String quarta;

    @Column(name = "quinta", nullable = false)
    private String quinta;

    @Column(name = "sexta", nullable = false)
    private String sexta;

    @Column(name = "sabado", nullable = false)
    private String sabado;

    @Column(name = "domingo", nullable = false)
    private String domingo;

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

    public int getQtdDiasTrabalha() {
        return qtdDiasTrabalha;
    }
    public void setQtdDiasTrabalha(int qtdDiasTrabalha) {
        this.qtdDiasTrabalha = qtdDiasTrabalha;
    }

    public String getSegunda() {
        return segunda;
    }
    public void setSegunda(String segunda) {
        this.segunda = segunda;
    }

    public String getTerca() {
        return terca;
    }
    public void setTerca(String terca) {
        this.terca = terca;
    }

    public String getQuarta() {
        return quarta;
    }
    public void setQuarta(String quarta) {
        this.quarta = quarta;
    }

    public String getQuinta() {
        return quinta;
    }
    public void setQuinta(String quinta) {
        this.quinta = quinta;
    }

    public String getSexta() {
        return sexta;
    }
    public void setSexta(String sexta) {
        this.sexta = sexta;
    }

    public String getSabado() {
        return sabado;
    }
    public void setSabado(String sabado) {
        this.sabado = sabado;
    }

    public String getDomingo() {
        return domingo;
    }
    public void setDomingo(String domingo) {
        this.domingo = domingo;
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
        return "Profissional: " +
                "\n  Id:" + id +
                "\n Profissao: '" + profissao +
                "\n CobrarPorHora: " + cobrarPorHora +
                "\n ValorHora: " + valorHora +
                "\n ValorFixo: " + valorFixo +
                "\n QtdDiasTrabalha: " + qtdDiasTrabalha +
                "\n Segunda: " + segunda +
                "\n Terca: " + terca +
                "\n Quarta: " + quarta +
                "\n Quinta: " + quinta +
                "\n Sexta: " + sexta +
                "\n Sabado: " + sabado +
                "\n Domingo: " + domingo +
                "\n Baba: " + baba +
                "\n Usuario: " + usuario;
    }
}
