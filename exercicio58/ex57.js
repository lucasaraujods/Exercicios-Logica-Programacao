//Escreva um programa que apresente um menu com as seguintes opções: Somar dois números Subtrair dois números Multiplicar dois números Dividir dois números Sair
//O programa deve executar a operação escolhida pelo usuário e depois retornar ao menu até que a opção "Sair" seja escolhida.


let continuar = ""
do{

    let numero1 = parseInt(window.prompt("Informe o primeiro número"))
    let numero2 = parseInt(window.prompt("Informe o segundo número"))
    let opcao = window.prompt("Informe qual opção deseja: 1- somar, 2-subtrair, 3-multiplicar 4-dividir")

   switch(opcao){

    case "1": 
        
        document.write(`A opção que escolhida foi de adição: ${numero1} + ${numero2} = ${numero1 + numero2} <br/>`)
        break;

    case "2": 
       
        document.write(`A opção que escolhida foi de subtração: ${numero1} - ${numero2} = ${numero1 - numero2} <br/> `)
        break;
    case "3": 
      
        document.write(`A opção que escolhida foi de multiplicação: ${numero1} x ${numero2} = ${numero1 * numero2} <br/>`)
        break;
    case "4": 
        if (numero2 !== 0) {
            document.write(`A opção escolhida foi de divisão: ${numero1} / ${numero2} = ${numero1 / numero2}<br>`);
        } else {
            document.write("Não é possível dividir por zero.<br>");
        }
    break;
    default:
        document.write("A opção escolhida não é válida <br/> ")
        break;
   }

   continuar = window.prompt("Deseja continuar? Digite 'sair' para encerrar ou qualquer outra tecla para continuar.");

}while(continuar != "sair")