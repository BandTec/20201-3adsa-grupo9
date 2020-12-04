package jobbyjobs.com.jobbyjobs.utilities;


import jobbyjobs.com.jobbyjobs.models.Usuario;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

    // CLASSE DE EXEMPLO PARA LEITURA E IMPORTAÇÃO DO ARQUIVO
    public class ImportarArquivo {

        public static List<Usuario> leArquivo(String nomeArq) {

            BufferedReader entrada = null;
            String registro;
            String tipoRegistro;
            String marcaCamiseta, modalidadeCamiseta, timeCamiseta;
            Double valorCamiseta;
            int contRegistro=0;
            List<Usuario> camisetasEstoquesNovas = new ArrayList<>();

            try {
                entrada = new BufferedReader(new FileReader(nomeArq));
            } catch (IOException e) {
                System.err.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
            }

            try {
                registro = entrada.readLine();

                while (registro != null) {
                    tipoRegistro = registro.substring(0, 2);

                    if (tipoRegistro.equals("00")) {
                        System.out.println("Header");
                        System.out.println("Tipo de arquivo: " + registro.substring(3, 29));
                        System.out.println("Data/hora de geração do arquivo: " + registro.substring(30,40));
                        System.out.println("Versão do layout: " + registro.charAt(42));
                    }
                    else if (tipoRegistro.equals("01")) {
                        System.out.println("\nTrailer");
                        int qtdRegistro = Integer.parseInt(registro.substring(3,8));
                        if (qtdRegistro == contRegistro) {
                            System.out.println("Quantidade de registros gravados compatível com quantidade lida");
                        }
                        else {
                            System.out.println("Quantidade de registros gravados não confere com quantidade lida");
                        }
                    }
                    else if (tipoRegistro.equals("02")) {
                        if (contRegistro == 0) {
                            System.out.println();
                            System.out.printf("%-5s %-8s %-50s %-40s\n", "MARCA","MODALIDADE","TIME","VALOR");

                        }

                        marcaCamiseta = registro.substring(3,12);
                        modalidadeCamiseta = registro.substring(13,22);
                        timeCamiseta = registro.substring(23,47);
                        valorCamiseta = Double.parseDouble(registro.substring(49,54).replace(',','.'));


                        System.out.printf("%-5s %-8s %-50s %-40.2f\n", marcaCamiseta, modalidadeCamiseta, timeCamiseta,valorCamiseta);
                        contRegistro++;
                    }
                    else {
                        System.out.println("Tipo de registro inválido");
                    }

                    registro = entrada.readLine();
                }

                entrada.close();
            } catch (IOException e) {
                System.err.printf("Erro ao ler arquivo: %s.\n", e.getMessage());
            }

            return camisetasEstoquesNovas;

        }
    }

