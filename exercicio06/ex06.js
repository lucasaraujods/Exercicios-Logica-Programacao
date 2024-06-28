 //Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
//sua terça parte.
//Ex:
//Digite um número: 3.5
//O dobro de 3.5 é 7.0
//A terça parte de 3.5 é 1.16666

let numero = Number(window.prompt("Informe o número"))
let dobro = numero * 2 
let tercaParte = numero/3

document.write(`O número ${numero} tem o seu dobro como ${dobro} e sua terça parte é ${tercaParte}`)