package jobbyjobs.com.jobbyjobs.models;
import javax.persistence.*;

@Entity
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Endereço")
    private Integer idEndereco;

    @Column(name ="Nome_Rua")
    private String rua;

    @Column(name = "Nome_Bairro")
    private String bairro;

    @Column(name = "Numero")
    private Integer numero;

    @Column(name = "Complemento", length=11)
    private String complemento;

    @Column(name = "CEP", length=9)
    private String CEP;

    public Integer getIdEndereco() {
        return idEndereco;
    }
    public void setIdEndereco(Integer idEndereco) {
        this.idEndereco = idEndereco;
    }

    public String getRua() {
        return rua;
    }
    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getBairro() {
        return bairro;
    }
    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public Integer getNumero() {
        return numero;
    }
    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }
    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getCEP() {
        return CEP;
    }
    public void setCEP(String CEP) {
        this.CEP = CEP;
    }
}
