//1 - Crie uma classe Carro com as seguintes propriedades:


//Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
//Potencia - número de cavalos de potência do carro;
//VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
//Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h


//2 - Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância. Use a seguinte fórmula para o cálculo: 


//resultado = distância / (VelocidadeMaxima / Aceleracao). 
// A função deve retornar esse resultado;

//3 - Crie uma classe Corrida com as seguintes propriedades:
//Nome - nome do local da corrida;
//Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
//Distancia - o total em metros da corrida;
//Participantes - um array de objetos da classe Carro
//Vencedor - qual a equipe que ganhou a corrida;


class Carro{

    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){

        this.Nome = nome
        this.Potencia = potencia 
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    calcularTempo(distancia){

        let resultado = distancia / (this.VelocidadeMaxima/this.Aceleracao)
        return resultado
    }
}

let participantesCarro = []
let continuar = true
let contador = 0
let tempo = 0

let distancia = parseFloat(prompt("Informe a distancia da corrida em metros: "))

while(continuar){

    let nome= prompt("Informe a equipe do carro:")
    let potencia = prompt("Informe a potencia do carro ")
    let velocidadeMaxima = parseFloat(prompt("Informe a velocidade maxima que o carro pode alcançar"))
    let aceleracao = parseInt(prompt("Informe a aceleração em segundos em segundos que o carro leva de 0 a 100 km/h: "))

    tempo = carro.calcularTempo(distancia)
    
    let carro = new Carro(nome, potencia, velocidadeMaxima, aceleracao)

    let desejaContinuar = prompt("Informe 1 se deseja continuar")
    if( desejaContinuar != 1){
        continuar = false
    }else{

        contador++
    }

    participantesCarro[contador] = carro
    
}