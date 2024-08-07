//1 - Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a opção escolhida pelo usuário
// duvida: dificudade de integras as funções com os parametros, ou seja, como eu chamo as funções com os parametros e como eu faço para o mesmo valor de uma função acima entre na função de baixo, 
//exemplo na função de cadastro e login
// Duvida 2: como eu faço para testar esse tipo de código com funções eu devo chamar as funções no console.log?
// Duvida da duvida 2: eu passo os valores aqui no programa mesmo no final?? seria essa forma de teste? 

// Parte do exercicio com dificuldade: faça o fluxo de funcionamento do código, 
//considere que o usuário pode escolher quando encerrar o programa conforme as opções e que no 
//login caso seja bem sucedido retorna uma mensagem “Login feito com sucesso!” e em caso negativo “Nome ou senha incorretos!” 

let arrayNomes = []
let arraySenha = []
let resultado = ""
let continuar = true

function SolicitarDados(){

    let opcao = parseInt(prompt("Informe o que deseja fazer: cadastro-1, login-2, excluir-3, encerrar o programa-4 "))
    
    switch(opcao){

        case 1:
            Cadastro()
        break;

        case 2:
            let nomeLogin = prompt("Informe o nome para cadastro")
            let senhaLogin = prompt("Infore a sua senha")
            Login(nomeLogin, senhaLogin)
        break;

        case 3:
            let VariavelNomeExcluir = prompt("Informe o nome que deseja exluir:") //eu coloquie 3 para excluir e deu indefninido do console do programa
            Excluir(VariavelNomeExcluir)
        break;

        case 4:
            EncerrarPrograma()
        break;

        default:
            resultado = console.log("A opção escolhida é invalida") // duvida aqui: é melhor eu colocar essa variavel resultado ou um console.log ? 
        break;
    }
}

// como eu acesso a minha opção de cadastro atraves da função acima, sendo se eu escolher a opção de cadastro, como eu faço para chamar a função cadastro como entrar dentro do escopo da função cadastro??

function Cadastro(){

    while(continuar){

        let nome = prompt("Informe o nome para cadastro")
        let senha = prompt("Infore a sua senha")

        arrayNomes.push(nome) 
        arraySenha.push(senha)

        let desejaContinuar = prompt("Informe se deseja cadastrar mais usuarios: sim ou não")
        if(desejaContinuar === "sim"){

            continuar = true
            Cadastro()                 
        }
        else{

            continuar = false
            console.log("=====Cadastros e senhas====")
            resultado = MostrarCadastros() 
        }
    } 

    return resultado 
    
}

// mostrar os nomes e senhas cadastrdos usando forEach
function MostrarCadastros(){

    arrayNomes.forEach(nomes => {console.log(nomes)})
    arraySenha.forEach(senhas => {console.log(senhas)})

}


function Login(nome, senha){ // aqui nesta função eu coloco os parametros podendo ser desta forma? ou pode teria que ser os arrays de senha e nomes ??
  
    if(arrayNomes.includes(nome) && arraySenha.includes(senha)){

        resultado = console.log ("Login feito com sucesso")
        
    }
    else{

        resultado = console.log("Nome ou senhas estão incorretos") 
    }

    return resultado

}

function Excluir(nomeExcluir){   // outra pergunta: pode colocar o mesmo nome de parametro para funções diferentes, exemplo: eu colocar nome  aqui em vez de nomeExcluir, o código ficaria sujo, poderia dar algum problema? 
 
    
    let indexNomeExcluir = 0
    let nomeExcluido = 0
    let senhaExcluida = 0
    
    if(arrayNomes.includes(nomeExcluir)){

        indexNomeExcluir = arrayNomes.indexOf(nomeExcluir)
        
        
        nomeExcluido = arrayNomes.splice(indexNomeExcluir,1)
        senhaExcluida = arraySenha.splice(indexNomeExcluir,1) // estaria certo colcoando assim? o indexNomeExluir para pegar o indice que o nome está 

        resultado = console.log(`O nome: ${nomeExcluir} foi excluido juntamente com a sua senha dos arrays de nomes e senhas ` )// fazer isso está certo?

    }else{

        resultado = "este nome não contém no array de nomes cadastrados"
    }

    return resultado
}

function EncerrarPrograma(){

    resultado = console.log("O programa foi encerrado")

    return resultado
}

SolicitarDados()
