package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;

@Entity
public class Avaliacoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_avaliacao")
    private Integer id;

    @Column(name = "nota_baba", nullable = false)
    private Integer nota;

    @Column(name = "msg_avaliativa", length = 250, nullable = true)
    private String msg_avaliativa;

    @ManyToOne
    private Usuario usuarioAvaliador;

    @ManyToOne
    private Baba babaAvaliada;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNota() {
        return nota;
    }
    public void setNota(Integer nota) {
        this.nota = nota;
    }

    public String getMsg_avaliativa() {
        return msg_avaliativa;
    }
    public void setMsg_avaliativa(String msg_avaliativa) {
        this.msg_avaliativa = msg_avaliativa;
    }

    public Usuario getUsuarioAvaliador() {
        return usuarioAvaliador;
    }
    public void setUsuarioAvaliador(Usuario usuario) {
        this.usuarioAvaliador = usuario;
    }

    public Baba getBabaAvaliada() {
        return babaAvaliada;
    }
    public void setBabaAvaliada(Baba baba) {
        this.babaAvaliada = baba;
    }

    @Override
    public String toString() {
        return "\n Avaliacoes: " +
                "\n Id: " + id +
                "\n Nota: " + nota +
                "\n Msg_avaliativa: " + msg_avaliativa +
                "\n Usuario Avaliador: " + usuarioAvaliador +
                "\n Baba Avaliada: " + babaAvaliada;
    }
}
