package jobbyjobs.com.jobbyjobs.models;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_endereco")
    private Integer id;

    @Column(name ="nome_rua")
    @NotNull
    private String rua;

    @Column(name = "nome_bairro")
    @NotNull
    private String bairro;

    @Column(name = "numero")
    @NotNull
    private Integer numero;

    @Column(name = "complemento", length=11)
    private String complemento;

    @Column(name = "zona_regional", length = 20)
    private String zonaRegional;

    @Column(name = "cep", length=9)
    @NotNull
    private String CEP;

    public Integer getIdEndereco() {
        return id;
    }
    public void setIdEndereco(Integer idEndereco) {
        this.id = idEndereco;
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

    public String getZonaRegional() {
        return zonaRegional;
    }
    public void setZonaRegional(String zonaRegional) {
        this.zonaRegional = zonaRegional;
    }

    @Override
    public String toString() {
        return "\n Endereco: " +
                "\n Id: " + id +
                "\n Rua: " + rua +
                "\n Bairro: " + bairro +
                "\n Numero: " + numero +
                "\n Complemento: " + complemento +
                "\n Zona Regional: " + zonaRegional +
                "\n CEP: " + CEP ;
    }
}
