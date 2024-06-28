//Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
//sucessor.
//Ex:
//Digite um número: 9
//O antecessor de 9 é 8
//O sucessor de 9 é 10

let numero = Number(window.prompt("Informe o número para saber o seu antecessor e sucessor"))
let antecessor = numero - 1
let sucessor = numero + 1

document.write(`O numero ${numero} tem seu antecessor = ${antecessor} e seu sucessor = ${sucessor}`)

