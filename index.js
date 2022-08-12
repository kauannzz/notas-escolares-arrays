const prompt = require("prompt-sync")();

//Array vazia, o usuario ainda não inseriu nada
let storageNotes = []

//Se você errar na hora de por a nota, ele não vai contabilizar o restante das notas. Você pode inserir mas não irá sair os resultados (A..B..C..E...etc)
function createNotes(){
    let numberofNotes = prompt("Quantas notas você deseja digitar: ")
    if (numberofNotes && isNumber(numberofNotes)){
    }
    else {
        console.log('Ih, rapaiz..')
    }
    //For que permite que o usuario consiga digitar 6X, não mais que isso. Pra alterar mude o *6* dentro do for
    for (i = 0; i < numberofNotes ; i++){
    notes_console = prompt("Digite sua nota: ")
    //Verifiquei se o que o usuario digitou é realmente um número, se for ele insere dentro da array
    if (notes_console && isNumber(notes_console)){
        storageNotes.push(notes_console)

    //Todos esses blocos realizam a alteração de número pra letra, fiz pra consultar a variavel "i" dentro da array,
    //e usei os ifs pra checar os números 

    if (storageNotes[i] >= 10){ //Aqui ocorre a checagem do número
        storageNotes[i] = "A" //Aqui ocorre a alteração
    }
    if (storageNotes[i] == 9){
        storageNotes[i] = "B"
    }
    if (storageNotes[i] == 8){
        storageNotes[i] = "C"
    }
    if (storageNotes[i] == 7){
        storageNotes[i] = "D"
    }
    if (storageNotes[i] == 6){
        storageNotes[i] = "E"
    }
    if (storageNotes[i] <= 5){
        storageNotes[i] = "F"
    }

    }

    else {
        console.log("Ih, rapaiz..")
    }
}

console.log(storageNotes)


//Função pra checar se realmente o que foi digitado é um número
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }
}

//Executo a função criada,
createNotes()

