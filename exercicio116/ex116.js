let arrayHoteis = []
let arrayReservas = []

class Hotel {

    IdHotel 
    NomeHotel
    CategoriaHotel
    EnderecoHotel
    TelefoneHotel

    constructor(idHotel, nomeHotel, categoriaHotel, enderecoHotel, telefoneHotel){

        this.IdHotel = idHotel
        this.NomeHotel = nomeHotel
        this.CategoriaHotel = categoriaHotel
        this.EnderecoHotel = enderecoHotel
        this.TelefoneHotel = telefoneHotel 
    }
}

class Reservas{

    IdReserva
    IdHotelReserva 
    NomeResponsavel
    DiaEntrada
    DiaSaida

    constructor(idReserva, idHotelReserva, nomeResponsavel, diaEntrada, diaSaida){

        this.IdReserva = idReserva
        this.IdHotelReserva = idHotelReserva
        this.NomeResponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

function CadastrarHotel(){

    let idHotel = parseInt(prompt("Inform o Id do Hotel "))
    let nomeHotel = prompt("Infore o nome do hotel")
    let categoriaHotel = prompt("Informe a categoria do Hotel") // pode ser colocado de 1 a 5 parseInt
    let enderecoHotel = prompt("Informe o endereço do hotel")
    let telefoneHotel = Number(prompt("Informe o telefone do hotel"))

    let ObjetoHotel = new Hotel (idHotel,nomeHotel,categoriaHotel,enderecoHotel, telefoneHotel)

    arrayHoteis.push(ObjetoHotel)

}

function CadastrarReservas(){

    let idReserva = parseInt(prompt("Informe o id da reserva"))
    let idHotelReserva = parseInt(prompt("Informe o Id do hotel da reserva"))
    let nomeResponsavel = prompt("Informe o nome do resposavel pela reserva")
    let diaEntrada = parseInt(prompt("Informe a data de entrada")) // verificara abaixo
    let diaSaida = parseInt(prompt("informe o data de saída")) // verificar este tipo de datype

    let objetoReserva = new Reservas(idReserva,idHotelReserva, nomeResponsavel, diaEntrada, diaSaida)

    arrayReservas.push(objetoReserva)
    
}

function ExibirReservasHotel(idHotelParametro){
    // Verifica se existe algum hotel com o IdHotel igual ao idHotelParametro usando a função some 
    if(arrayHoteis.some(hoteis => hoteis.IdHotel === idHotelParametro)){
        // Filtra as reservas que correspondem ao IdHotel fornecido
        const reservas = arrayReservas.filter(reserva => reserva.IdHotel ===  idHotelParametro)

        // Itera sobre as reservas e exibe as informações
        reservas.forEach(reserva => {
            // Encontra o hotel correspondente para exibir o nome do hotel
            const hotel = arrayHoteis.find(hotel => hotel.IdHotel === idHotelParametro);
            console.log(hotel.NomeHotel)
            console.log(reserva.NomeResponsavel)
            console.log(reserva.DiaEntrada)
            console.log(reserva.DiaSaida)
        });
    }else{

        console.log("id do hotel não encontrado")
    }

   // isto estria correto?
   // console.log(arrayReservas)
   // console.log(`O hotel é ${ObjetoHotel.NomeHotel}` )
   // console.log(`O Id do hotel é ${IdHotel}`)
   // console.log(`O nome do resposavel é ${ObjetoReserva.NomeResponsavel}`) // criar um objeto reserva e uma classe
   // console.log(`O dia de entrada foi de: ${ObjetoReserva.diaEntrada} `)
   // console.log(`O dia de saida foi de: ${ObjetoReserva.diaSaida} `)
}

function ExibirInformacoesHotel(idReservaParametro){

    if(arrayReservas.some(reserva => reserva.IdReserva === idReservaParametro)){

        const reserva = arrayReservas.filter(reserva => reserva.IdReserva === idReservaParametro)

        reserva.forEach(reserva => {

        const hoteis = arrayHoteis.find(hotel => hotel.IdHotel === idReservaParametro)
            console.log(hoteis.NomeHotel)
            console.log(hoteis.EnderecoHotel)
            console.log(reserva.DiaEntrada)
            console.log(reserva.DiaSaida)
        })
    }
}

function ExibirTodasReservasPorNome(nomeParametro){

    if(arrayReservas.some(nome => nome.NomeResponsavel === nomeParametro)){

        const buscarNome = arrayReservas.filter(nome => nome.NomeResponsavel === nomeParametro)

        buscarNome.forEach(nome => {

            console.log(nome.IdReserva)

        });

    }else{

        console.log("A pessoa não possui reserva ")
    }
}

function PesquisarCategoria(categoriaParemetro){

    let hoteisNestaCategoria = arrayHoteis.some(categoria => categoria.CategoriaHotel === categoriaParemetro)

    hoteisNestaCategoria.forEach(categoria => {

        console.log(categoria)
    })
}


function ExecutarPrograma(){

    let opcao = parseInt(prompt("O que deseja fazer? 1- cadastrar hoteis , 2 - cadastrar reservas , 3- exibir reservas, 4 - exibir infomrçãoes da reserva, 5- Exibir todas as reserva em seu nome, 6 - Pesquisar hoteis na categoria de 1a 5 estelas e se deseja encerrar o programa digite 7"))
    let continuar = true 

    while(continuar){

        switch(opcao){

            case 1: 
                CadastrarHotel()
            break;

            case 2: 
                CadastrarReservas() 
            break;

            case 3:
                let idHotel = parseInt(prompt("Informe o id do hotel: ")) 
                ExibirReservasHotel(idHotel)
            break;

            case 4: 
                let idReserva = parseInt(prompt("Informe o id da reserva"))
                ExibirInformacoesHotel(idReserva)
            break;

            case 5:
                let acharReservaNome = prompt("Informe o seu nome para achar as suas reservas")
                ExibirTodasReservasPorNome(acharReservaNome)
            break;

            case 6: 
                let buscarCategoria = parseInt(prompt("Informe a categoria que deseja buscar os hoteis"))
                PesquisarCategoria(buscarCategoria)
            break;

            case 7: 
                console.log("O programa foi encerrado")
                continuar = false
            break;

            default:
                console.log("A opção foi invalida, colcoque o número 1 a 7 ")
            break;
        }
    }
}