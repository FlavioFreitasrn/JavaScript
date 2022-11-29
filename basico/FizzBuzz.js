/*Desafio
Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

Entrada
Você receberá um número onde: 
Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
Se o número for apenas múltiplo de 3 -> "Fizz" ; 
Se o número for apenas múltiplo de 5 -> "Buzz"; 
Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

let resultado = gets();
print(fizzBuzz(resultado));

*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.
function fizzBuzz(resultado){
    const multiplo3 = 3;
    const multiplo5 = 5;
    let status;
    //Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
    if ((resultado%multiplo3 ===0) & (resultado%multiplo5 ===0)) {
        //console.log(' FizzBuzz ')
        status = ' FizzBuzz ';
    
    } //Se o número for apenas múltiplo de 3 -> "Fizz" ; 
    else if ((resultado%multiplo3 ===0)) {
        //console.log(' Fizz ')
        status = ' Fizz ';
    }
    //Se o número for apenas múltiplo de 5 -> "Buzz"; 
    else if ((resultado%multiplo5 ===0)) {
        //console.log(' Buzz  ')
        status = ' Buzz ';

    }
    //Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido
    else {
        //console.log(resultado)
        status = resultado;

    }
    return status
}

(function (){
    
    //let resultado = gets();
    fizzBuzz(resultado);
    //print(fizzBuzz(resultado));
})();

(function (){
    resultado = 4; //multiplos        
    console.log(fizzBuzz(resultado))
})();