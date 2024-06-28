//Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
//na tela a sua média na disciplina.
//ex:
//Nota 1: 4.5
//Nota 2: 8.5
//A média entre 4.5 e 8.5 é igual a 6.5

let nota1 = Number(window.prompt("Informe a primeira nota"))
let nota2 = Number(window.prompt("Informe a segunda nota"))
let media = (nota1+nota2)/2

document.write(`A média entre ${nota1} e ${nota2} é ${media}`)