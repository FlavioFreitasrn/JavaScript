// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

//let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

function somatorio(n){
    soma=0;
    for (let index = 0; index <= n; index++) {
        soma +=index;
    }  
    return soma;     
}

(function (){
    n=10;   
    console.log(somatorio(n))
})();