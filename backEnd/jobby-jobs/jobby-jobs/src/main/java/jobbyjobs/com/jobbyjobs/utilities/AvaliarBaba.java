package jobbyjobs.com.jobbyjobs.utilities;

public class AvaliarBaba {

    private String msg;
    private Integer nota;

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

    @Override
    public String toString() {
        return "\n AvaliarBaba: " +
                "\n Msg: " + msg +
                "\n Nota: " + nota;
    }
}
