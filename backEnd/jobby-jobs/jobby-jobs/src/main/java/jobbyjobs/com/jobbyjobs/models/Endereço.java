package jobbyjobs.com.jobbyjobs.models;
import javax.persistence.*;

@Entity
public class Endereço {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdEndereço")
    private Integer idEndereço;

    @Column(name ="NomeRua")
    private String rua;

    @Column(name = "NomeBairro")
    private String bairro;

    @Column(name = "Numero")
    private Integer numero;

    @Column(name = "Complemento", length=11)
    private String complemento;

    @Column(name = "CEP", length=9)
    private String CEP;
}
