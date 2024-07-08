//Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

let numeroEleitores = 0
let contador = 0
let opcao= ""
let totBolsonaro = 0
let totLula = 0
let totCiro = 0 

numeroEleitores = parseInt(window.prompt("Informe o número de leitores"))

while(contador < numeroEleitores){

  opcao= (window.prompt("Informe a sua opção de voto: Bolsonaro, Lula ou Ciro Gomes:"))

    switch(opcao){

        case "Bolsonaro":
            totBolsonaro++
        break;

        case"Lula":
            totLula++
        break;

        case "Ciro Gomes":
            totCiro++
        break;

        default:
            console.log("Opção não valida, tente novamente")
            contador--; // decrementa o contador para permitir uma nova tentativa
        break;
    }
    contador++
}
console.log("O total de votos para bolsonaro foi de: " + totBolsonaro)
console.log("O total de votos para Lula foi de: " + totLula)
console.log("O total de votos para Ciro foi de: " + totCiro)