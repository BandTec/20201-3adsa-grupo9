package jobbyjobs.com.jobbyjobs.utilities;


import jobbyjobs.com.jobbyjobs.models.Endereco;
import jobbyjobs.com.jobbyjobs.models.Usuario;

import javax.persistence.criteria.CriteriaBuilder;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

    // CLASSE DE EXEMPLO PARA LEITURA E IMPORTAÇÃO DO ARQUIVO
    public class ImportarArquivo {

        public static List<Endereco> leArquivo(String nomeArq) {

            BufferedReader entrada = null;
            String registro;
            String tipoRegistro;
            String rua, bairro, complemento, zonaRegional, cep;
            Integer numero;
            int contRegistro=0;
            List<Endereco> enderecos = new ArrayList<>();

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
                        System.out.println("Tipo de arquivo: " + registro.substring(3, 23));
                        System.out.println("Data/hora de geração do arquivo: " + registro.substring(25,35));
                        System.out.println("Versão do layout: " + registro.charAt(37));
                    }
                    else if (tipoRegistro.equals("01")) {
                        System.out.println("\nTrailer");
                        int qtdRegistro = Integer.parseInt(registro.substring(8));
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
                        }

                        rua = registro.substring(3,47); // tamanho 45
                        bairro = registro.substring(48,62); // tamanho 15
                        numero = Integer.parseInt(registro.substring(63,67)); // tamanho 4
                        complemento = registro.substring(67,76); // tamanho 10
                        zonaRegional = registro.substring(77,87); // tamanho 10
                        cep = registro.substring(87,95); // tamanho 8

                        Endereco e = new Endereco();
                        e.setRua(rua);
                        e.setBairro(bairro);
                        e.setNumero(numero);
                        e.setComplemento(complemento);
                        e.setZonaRegional(zonaRegional);
                        e.setCEP(cep);

                        enderecos.add(e);

                        System.out.println("Rua: " + rua);
                        System.out.println("Bairro: " + bairro);
                        System.out.println("Numero: " + numero);
                        System.out.println("Complemento: " + complemento);
                        System.out.println("Zona Regional: " + zonaRegional);
                        System.out.println("CEP: " + cep);
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

            return enderecos;

        }
    }

