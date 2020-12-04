package jobbyjobs.com.jobbyjobs.utilities;

import jobbyjobs.com.jobbyjobs.objects.ListaObj;
import jobbyjobs.com.jobbyjobs.models.Usuario;

import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Formatter;
import java.util.FormatterClosedException;

public class GravaCsv {
    public static String nomeArquivo(String nomeArq){
        Date dataDeHoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat(
                "ddMMyyyy-HHmmss");

        return nomeArq + "-" + formatter.format(dataDeHoje) + ".csv";
    }

    public static String gravaCsv(ListaObj<Usuario> lista, String nomeArqv) {

        Date dataDeHoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("ddMMyyyy-HHmmss");

        FileWriter arq = null;
        Formatter saida = null;
        boolean deuRuim = false;
        String nomeArquivo;

        String saidaCsv = "";

        nomeArquivo=  nomeArqv + "-" + formatter.format(dataDeHoje)+ ".csv";

        try {
            arq = new FileWriter(nomeArquivo, true);
            saida = new Formatter(arq);
        }
        catch (IOException erro) {
            System.err.println("Erro ao abrir arquivo");
            System.exit(1);
        }

        try {
            for (int i=0; i< lista.getTamanho(); i++) {
                Usuario u = lista.getElemento(i);
                saidaCsv += String.format("%s;%s;%s;%d%n", u.getNome(), u.getEmail(), u.getCPF(), u.getTipoUsuario());
                saida.format("%s;%s;%s%d%n", u.getNome(), u.getEmail(), u.getCPF(), u.getTipoUsuario());

            }
            return saidaCsv;
        }
        catch (FormatterClosedException erro) {
            System.err.println("Erro ao gravar no arquivo");
            deuRuim= true;
        }
        finally {
            saida.close();
            try {
                arq.close();
            }
            catch (IOException erro) {
                System.err.println("Erro ao fechar arquivo.");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
        return null;
    }

}
