//Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
//No final, mostre quais são os números pares que foram digitados e em que
//posições eles estão armazenados.

let vetor = new Array(10)
let vetorPares = []
let vetorPosicoes = []

for(let i=0; i<10; i++){

    let numero = parseInt(window.prompt("Informe o " + (i+1) + "º número: "))
    vetor[i] = numero

    if(numero % 2 == 0){

        vetorPares[i]= numero
        vetorPosicoes[i] = i
    }
}

console.log("O vetor com todos o números: " + vetor)
console.log("O vetor de números pares: os números são: " )

for(let i= 0; i<10; i++){

    console.log("o total de numeros é de " + vetorPares + " sendo suas posições: " + vetorPosicoes)
}