//Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a
//média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota.
//Acrescente uma mensagem 'NOVO CÁLCULO (S/N)?' ao final do e/exercício. Se for
//respondido 'S' deve retornar e executar um novo cálculo, caso contrário deverá encerrar o algoritmo.
let continuar = ""
let media = 0

do{
    let nota1 = Number(window.prompt("Informe a primera nota"))
    let nota2 = Number(window.prompt("Informe a segunda nota"))
    

    if((nota1 >= 1 && nota1 <= 10) && (nota2 >= 1 && nota2 <= 10)){

        media = (nota1 + nota2)/2
    }
    else{
       console.log("O valor da nota não é válido, digite uma nota de 1 a 10")
    }

    continuar = window.prompt("Deseja fazer um novo cálculo ?")
    

}while(continuar === "S")

console.log(`A media dos números é ${media} `)





 
