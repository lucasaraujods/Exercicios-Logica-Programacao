//Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
//entre eles.
//Ex:
//Digite um valor: 8
//Digite outro valor: 5
//A soma entre 8 e 5 é igual a 13.

let numero1 = Number(window.prompt("Informe o primeiro número"))
let numero2 = Number(window.prompt("Informe o segundo número"))
let soma= numero1+numero2

document.write(`A soma entre ${numero1} + ${numero2} é igual a ${soma}`)