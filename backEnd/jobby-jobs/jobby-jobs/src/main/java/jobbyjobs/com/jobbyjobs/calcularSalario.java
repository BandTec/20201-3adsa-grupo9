package jobbyjobs.com.jobbyjobs;

public  interface calcularSalario {
    public Double calcularSalarioTrabalhador(int id, int qtdHoras, Double valorMetro, Double qtdMetro);

    public Double calcularSalarioBaba(int id, int idadeMedia, int qtdCriancas, int qtdHoras);

}
