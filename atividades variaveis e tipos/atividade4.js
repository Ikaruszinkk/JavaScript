class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `Veículo ${this.marca} ${this.modelo}, ano ${this.ano}.`;
    }
}
const carro = new Veiculo("Toyota", "Corolla", 2022);
const motocicleta = new Veiculo("Honda", "CBR 600RR", 2021);
console.log(carro.exibirDetalhes());
console.log(motocicleta.exibirDetalhes());
