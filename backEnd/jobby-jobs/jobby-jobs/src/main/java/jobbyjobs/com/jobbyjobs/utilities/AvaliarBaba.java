package jobbyjobs.com.jobbyjobs.utilities;

public class AvaliarBaba {

    private String msg;
    private Integer nota;
    private String emailAvaliador;
    private Integer babaAvaliada;

    public String getMsg() {
        return msg;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Integer getNota() {
        return nota;
    }
    public void setNota(Integer nota) {
        this.nota = nota;
    }

    public String getEmailAvaliador() {
        return emailAvaliador;
    }
    public void setEmailAvaliador(String emailAvaliador) {
        this.emailAvaliador = emailAvaliador;
    }

    public Integer getBabaAvaliada() {
        return babaAvaliada;
    }
    public void setBabaAvaliada(Integer babaAvaliada) {
        this.babaAvaliada = babaAvaliada;
    }

    @Override
    public String toString() {
        return "\n AvaliarBaba: " +
                "\n Msg: " + msg +
                "\n Nota: " + nota;
    }
}
