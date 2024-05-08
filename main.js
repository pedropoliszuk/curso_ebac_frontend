function Veiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
};

Veiculo.prototype.acelerar = function() {
    console.log("Veiculo acelerando");
};

Veiculo.prototype.frear = function() {
    console.log("Veiculo freando");
};

function Carro(marca, modelo, portas) {
    Veiculo.call(this, marca, modelo)
    this.portas = portas;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.abrirPortas = function() {
    console.log("Abrindo portas do carro")
}

function Moto(marca, modelo, cilindradas) {
    Veiculo.call(this, marca, modelo);
    this.cilindradas = cilindradas;
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;


const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Volkswagen", "Gol", 4);
const moto1 = new Moto("Honda", "CBR600", 600)

console.log(carro1);
console.log(carro2);
console.log(moto1);

carro1.acelerar();
carro1.frear();
carro2.abrirPortas();
moto1.acelerar();