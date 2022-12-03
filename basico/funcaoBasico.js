        //Declarando funções
        /* ver.1
        function pulaLinha(){
            document.write("<br>")
        }*/
        //ver.2
        pulaLinha = function (){
            document.write("<br>")
        }

        function janelaPop(){
            alert("Alerta com JavaScript! - Pop-up");
        }
               
        var exibeMsg = function(msg, msgPeloConsole) {
            document.write(msg);
            pulaLinha();
            document.write("Pulouuuu");
            console.log(msgPeloConsole)
            };
        
                
        var msg = "Testando o function Pula linha"
        var msgPeloConsole = "Msg exibida no console" 
        //document.write(msg);
        //pulaLinha();
        //document.write("Pulouuuu");
        
        exibeMsg(msg, msgPeloConsole);
        janelaPop();