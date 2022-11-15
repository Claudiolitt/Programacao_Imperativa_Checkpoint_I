let readlineSync = require("readline-sync");

let itemEscolhido = readlineSync.question(
    "Escolha o seu item:  "
  );

let tempoEscolhido = readlineSync.question(
    "Escolha o tempo de preparo:  "
  );

let item = [
["Pipoca", 10],
["Macarrao",  8],  
["Carne", 15 ] ,  
["Feijao",  12 ],
["Brigadeiro",  8 ]
]

function timer () {
    if (itemEscolhido == item[0][0]) { 
        if (tempoEscolhido < (item[0][1])) {
            return "Tempo insuficiente.";
        }
        else if ((tempoEscolhido >= item[0][1] && tempoEscolhido < (item[0][1]*2))) {
            return "Prato pronto, bom apetite!";
        } 
        else if ((tempoEscolhido >= (item[0][1]*2) && tempoEscolhido < (item[0][1]*3) )) {
            return "A comida queimou!" ;
        }
        else if (tempoEscolhido >= (item[0][1]*3)) {
            return "Kaboom!";
        };
    } 
    else if (itemEscolhido == item[1][0]) { 
        if (tempoEscolhido < (item[1][1])) {
            return "Tempo insuficiente.";
        }
        else if ((tempoEscolhido >= item[1][1] && tempoEscolhido < (item[1][1]*2))) {
            return "Prato pronto, bom apetite!";
        } 
        else if ((tempoEscolhido >= (item[1][1]*2) && tempoEscolhido < (item[1][1]*3) )) {
            return "A comida queimou!" ;
        }
        else if (tempoEscolhido >= (item[1][1]*3)) {
            return "Kaboom!";
        };
    } 
    else if (itemEscolhido == item[2][0]) { 
        if (tempoEscolhido < (item[2][1])) {
            return "Tempo insuficiente.";
        }
        else if ((tempoEscolhido >= item[2][1] && tempoEscolhido < (item[2][1]*2))) {
            return "Prato pronto, bom apetite!";
        } 
        else if ((tempoEscolhido >= (item[2][1]*2) && tempoEscolhido < (item[2][1]*3) )) {
            return "A comida queimou!" ;
        }
        else if (tempoEscolhido >= (item[2][1]*3)) {
            return "Kaboom!";
        };
    }
    else if (itemEscolhido == item[3][0]) { 
        if (tempoEscolhido < (item[3][1])) {
            return "Tempo insuficiente.";
        }
        else if ((tempoEscolhido >= item[3][1] && tempoEscolhido < (item[3][1]*2))) {
            return "Prato pronto, bom apetite!";
        } 
        else if ((tempoEscolhido >= (item[3][1]*2) && tempoEscolhido < (item[3][1]*3) )) {
            return "A comida queimou!" ;
        }
        else if (tempoEscolhido >= (item[3][1]*3)) {
            return "Kaboom!";
        };
    } 
    else if (itemEscolhido == item[4][0]) { 
        if (tempoEscolhido < (item[4][1])) {
            return "Tempo insuficiente.";
        }
        else if ((tempoEscolhido >= item[4][1] && tempoEscolhido < (item[4][1]*2))) {
            return "Prato pronto, bom apetite!";
        } 
        else if ((tempoEscolhido >= (item[4][1]*2) && tempoEscolhido < (item[4][1]*3) )) {
            return "A comida queimou!" ;
        }
        else if (tempoEscolhido >= (item[4][1]*3)) {
            return "Kaboom!";
        };
    }      
    else if (itemEscolhido != item[0][0] || itemEscolhido != item[1][0] || itemEscolhido != item[2][0] || itemEscolhido != item[3][0] || itemEscolhido != item[4][0]) { 
           return "Prato inexistente.";
   
    }    
    else {
            return "Insira os valores corretamente.";
    }  
}


console.log(timer ())

 
