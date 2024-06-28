//Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
//e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,45.

let valor = Number(window.prompt("Informe o valor em R$:"))
let dolar = valor / 5.45

document.write(`O valor da conversão para dolares é = ${dolar} dolares `)