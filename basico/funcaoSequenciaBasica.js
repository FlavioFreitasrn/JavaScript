var primeiraFuncao = function() {
    document.write("<br><br>Roda primeira instrução da primeira função - chama 2º função <br><br>");
    segundaFuncao();
    document.write("<br><br>Roda segunda instrução da primeira função - Finaliza 1º função<br><br>");
};
var segundaFuncao = function() {
    document.write("<br><br>Roda primeira instrução da segunda função - chama 3º função<br><br>");
    terceiraFuncao();
    document.write("<br><br>Roda segunda instrução da segunda função - Finaliza 2º função<br><br>");
};
var terceiraFuncao = function() {
    document.write("<br><br>Roda terceira função - Finaliza 3º função<br><br>");
};

primeiraFuncao();