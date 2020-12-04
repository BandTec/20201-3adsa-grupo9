package jobbyjobs.com.jobbyjobs.objects;

public class ListaObj<T> {

    T[]vetor;
    int nroElem;
    int valorBusca;

    public ListaObj(int tamanhoLista) {
        vetor = (T[]) new Object[tamanhoLista];
        this.nroElem = 0;
    }


    public Boolean adiciona(T valor){
        System.out.println("Adicionando valores: ");
        if (nroElem == vetor.length){
            System.out.println("A lista já está cheia, não é possivel adicionar valores");
            return false;
        } else {
            vetor[nroElem] = valor;
            nroElem ++;
            System.out.println("Elemento ["+ valor + "] adicionado na lista!");
            return true;
        }
    }

    public void exibe(){
        if(vetor.length == 0){
            System.out.println("A lista não pode ser exibida pois está vazia!");
        } else {
            System.out.println("Lista atual: ");
            for (int i = 0; i < nroElem; i++) {
                System.out.printf(vetor[i] + "\t");
            }
        }
    }

    public void busca(T valor){
        int indiceEncontrado = 0;
        System.out.println("Buscando o elemento: [" + valor + "].");
        if(vetor.length == 0){
            System.out.println("A lista está vazia!");
        } else {
            for (int i = 0; i < nroElem - 1 ; i++) {
                if(vetor[i].equals(valor)) {
                    indiceEncontrado = i;
                    System.out.println("O elemento [" + valor + "] foi encontrado no indice (" + indiceEncontrado +").");
                    valorBusca = indiceEncontrado;
                    return;
                }
            }
        }
        System.out.println("O elemento [" + valor + "] não foi encontrado!" );
        valorBusca = -1;
    }

    public void removePeloIndice(int indice){
        System.out.println("Removendo um elemento da lista pelo indice: (" + indice + ").");
        if(indice > nroElem - 1 || indice < 0){
            System.out.println("O indice (" + indice + ") é invalido! \n" +
                    "A lista tem (" + (nroElem - 1) + ") indices!");
        } else {
            System.out.println("Exibindo a lista com um numero removido pelo indice: (" + indice + ").");
            for (int i = indice; i < vetor.length -1; i++){
                vetor[i] = vetor[i +1];
            }
            nroElem--;
        }
    }

    public void removeElemento(T valor){
        System.out.println("Removendo da lista o elemento: ["+ valor + "]");
        busca(valor);
        if(valorBusca < 0){
            System.out.println("Elemento ["+ valor + "] não existe!");
        } else {
            removePeloIndice(valorBusca);
        }
    }

    public int getTamanho() {
        return nroElem;
    }

    public T getElemento(int indice){
        if (indice < 0 || indice >= nroElem){
            System.out.println("O elemento nesse indice não existe!");
            return null;
        } else {
            return vetor[indice];
        }
    }

    public void limpa(){
        nroElem = 0;
    }

}

