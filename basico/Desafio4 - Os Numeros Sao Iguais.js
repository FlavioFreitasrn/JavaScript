/*Desafio
Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”.
 Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

Entrada
As entradas serão dois valores, um em cada linha, representados por A e B, 
que sempre serão números inteiros. 

Saída
A saída deverá retornar a frase "Sao iguais!" caso A e B sejam o mesmo valor. 
Caso contrário,  retorne "Nao sao iguais!", sem as aspas.
*/
function comparaNumerosIguais(A, B){
    if (A===B) {
        compara = 'Sao iguais!';
    }//"Nao sao iguais!”
    else {
        compara = 'Nao sao iguais!';
    }
    return compara
}
(function(){
    A=2;
    B=2;
    console.log(comparaNumerosIguais(A,B))
})();