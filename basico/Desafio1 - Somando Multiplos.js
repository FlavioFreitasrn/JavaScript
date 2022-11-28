// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

//var a = parseInt(gets());
//var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".


function multiplosDeUmNumero(a, N){
    soma=0;
    for (let index = 0; index <= N; index+= a) {
        soma +=index;
    }  
    return console.log(soma);     
}

(function (){
    a = 3; //multiplos 
    N = 18; //limite    
    multiplosDeUmNumero(a, N)
})();
