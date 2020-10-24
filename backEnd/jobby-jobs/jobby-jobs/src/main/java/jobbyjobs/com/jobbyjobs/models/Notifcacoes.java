package jobbyjobs.com.jobbyjobs.models;

import javax.persistence.*;

@Entity
public class Notifcacoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_notificacao")
    private Integer id;

    @Column(name = "msg_notificacao")
    private String msg;

    @ManyToOne
    private Baba babaNotificada;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getMsg() {
        return msg;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Baba getBabaNotificada() {
        return babaNotificada;
    }
    public void setBabaNotificada(Baba babaNotificada) {
        this.babaNotificada = babaNotificada;
    }
}
