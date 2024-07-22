//Crie uma função chamada Calculadora, essa função deve receber três parâmetros: dois serão números utilizados na conta e o último será a operação a ser feita;
//Os valores recebidos por parâmetro serão strings, então se necessário converta para outro tipo de dado;
//Use o  parâmetro "operador" como a opção de operação escolhida pelo usuário;

//Crie caminhos diferentes para cada operação ("+","-","*","/","e") e salve o resultado em uma variável;
//Para a operação de exponenciação, você deve multiplicar o primeiro número por ele mesmo a quantidade de vezes igual ao segundo número (Utilize um loop);
//Sua função deve retornar o resultado.
//Ex.: Entrada => num1 = 2, num2 = 3; Saída => resultado = 2*2*2 = 8
//Se o resultado for undefined (indefinido) ou for maior que 1.000.000, o valor do resultado deve ser substituído por "ERRO";

let contador 


function calculadora(numero1,numero2,operador){

    let resultado 
    let num1= parseFloat(numero1)
    let num2 = parseFloat(numero2)

   if(operador === "+"){

        resultado = num1 + num2;
   }
   else if(operador === "-"){

        resultado = num1-num2;
   }
   else if(operador === "*"){

        resultado = num1 * num2;
   }
   else if(operador === "/"){

        if(num2 === 0){

            resutado = ("Não é possível dividir este número por zero")
        }
        else{
            
            resultado = num1/num2;
        }
   }
   else if(operador === "e"){

        contador = 1
        resultado = num1*num1

        while(contador < num2 - 1){

            resultado = resultado * num1
            contador++
        }
   }

   if (resultado > 1000000 || resultado == undefined){

    resultado = "ERRO"

    }

return resultado


}


    







