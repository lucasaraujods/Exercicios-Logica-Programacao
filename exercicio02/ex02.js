//Crie um programa que leia o nome e o salário de um funcionário, mostrando no
//final uma mensagem.
//Ex:
//Nome do Funcionário: Maria do Carmo
//Salário: 1850,45
//O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

let nome = window.prompt("Informe o seu nome")
let salario = Number(window.prompt("Informe o seu sálario"))

document.write(`O funcionário ${nome} tem um salário de R$ ${salario} em Junho`)

