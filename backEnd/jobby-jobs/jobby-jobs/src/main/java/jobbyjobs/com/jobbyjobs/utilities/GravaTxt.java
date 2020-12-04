package jobbyjobs.com.jobbyjobs.utilities;

import jobbyjobs.com.jobbyjobs.objects.ListaObj;
import jobbyjobs.com.jobbyjobs.models.Usuario;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class GravaTxt {


    public static String nomeArquivo(String nomeArq){
        Date dataDeHoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat(
                "ddMMyyyy-HHmmss");

        return nomeArq + "-" + formatter.format(dataDeHoje) + ".txt";

    }

    public static void gravaRegistro (String nomeArq, String registro) {
        BufferedWriter saida = null;
        try {
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException e) {
            System.err.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
        }
        try {
            saida.append(registro + "\n");
            saida.close();

        } catch (IOException e) {
            System.err.printf("Erro ao gravar arquivo: %s.\n", e.getMessage());
        }
    }

    public static String gravaTxt(String nomeArquivo, ListaObj<Usuario> users) {

        Date dataDeHoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat formatterWithHour = new SimpleDateFormat(
                "ddMMyyyy-HHmmss");

        String nomeArq = nomeArquivo + "-" + formatterWithHour.format(dataDeHoje) + ".txt";
        String header = "";
        String corpo = "";
        String trailer = "";

        String corpoExport = "";
        int contRegDados = 0;

        // Monta o registro header
        header += "00-RELAÇÃO-DE-USUARIOS-DA-PLATAFORMA-";
        header += formatter.format(dataDeHoje);
        header += "-01";

        // Grava o registro header
        gravaRegistro(nomeArq, header);

        // Monta o corpo
        boolean primeiroRegistro = true;
        for (int i = 0; i < users.getTamanho(); i++){
            Usuario usuarios = users.getElemento(i);
            if(primeiroRegistro){
                corpo += "02-";
                primeiroRegistro = false;
            } else {
                corpo = "02-";
            }
            corpo += String.format("%-50s", usuarios.getNome());
            corpo += String.format("%-40s", usuarios.getEmail());
            corpo += String.format("%-11s", usuarios.getCPF());
            corpo += String.format("-%02d", usuarios.getTipoUsuario());
            contRegDados++;

            corpoExport += corpo + "\n";
            gravaRegistro(nomeArq,corpo);
        }

        //Monta o trailer
        trailer += "01-";
        trailer += String.format("%06d", contRegDados);
        gravaRegistro(nomeArq,trailer);

        return header + "\n" + corpoExport + trailer;

    }
}

