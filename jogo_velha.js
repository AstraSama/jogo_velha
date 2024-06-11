console.log(" 1 | 2 | 3 \n-----------\n 4 | 5 | 6 \n-----------\n 7 | 8 | 9 ");

let estrutura = [  
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];

let passo = 0;


process.stdin.on('data', function(data) {
    let posicao = Number(data.toString().trim());
    
    if((posicao > 0 && posicao < 10) && !isNaN(posicao)) {
        if (passo % 2 === 0) { 
            if(!isNaN(estrutura[Math.floor((posicao - 1) / 3)][(posicao - 1) % 3])) {
                estrutura[Math.floor((posicao - 1) / 3)][(posicao - 1) % 3] = 'X';
              
            } else {
                passo++;
              
            }
        } else {  
            if(!isNaN(estrutura[Math.floor((posicao - 1) / 3)][(posicao - 1) % 3])) {
                estrutura[Math.floor((posicao - 1) / 3)][(posicao - 1) % 3] = 'O'; 
              
            } else {
                passo++;
              
            }
        }
        
        passo++;
        
        console.log(
            "\n-----------------------------------------------------------\n\n" +
            estrutura[0].join(" | ") + "\n" + 
            "---------\n" +
            estrutura[1].join(" | ") + "\n" +
            "---------\n" +
            estrutura[2].join(" | ") + "\n" +
            "\n-----------------------------------------------------------\n"
        );


        for(let i = 0; i < 3; i++) {
            if(isNaN(estrutura[i][0]) && estrutura[i][0] === estrutura[i][1] && estrutura[i][0] === estrutura[i][2]) { //linha
                console.log("\nvitória1 ");
                process.exit();
              
            } else if(isNaN(estrutura[0][i]) && estrutura[0][i] === estrutura[1][i] && estrutura[0][i] === estrutura[2][i]) { //coluna
                console.log("\nvitória2");
                process.exit();
              
            } else if(isNaN(estrutura[1][1]) && ((estrutura[0][0] === estrutura[1][1] && estrutura[0][0] === estrutura[2][2]) || (estrutura[2][0] === estrutura[1][1] && estrutura[0][2] === estrutura[1][1]))) {
                console.log("\nvitória3"); //diagonal
                process.exit();
              
            } else if(
                isNaN(estrutura[i][0]) && 
                isNaN(estrutura[i][1]) && 
                isNaN(estrutura[i][2]) && 
                isNaN(estrutura[0][i]) && 
                isNaN(estrutura[1][i]) && 
                isNaN(estrutura[2][i]) &&
                isNaN(estrutura[2][1]) && 
                isNaN(estrutura[2][2]) 
            ) {
                console.log("\nempate");
                process.exit();
              
            }
        }
    } else {
        console.log("\njogue novamente\n");
      
    }
});

/*
    Jogo da velha Lógica:
        - para a estrutura, fazer uma array com arrays dentro;
        - para alternar os jogadores, utilizar passo. Se o número do passo for par, é a vez do jogador "X" jogar.
        Se for ímpar, é a vez do jogador "O";
        - Já que as posições são representadas por uma matriz 3x3. È necessário conventer as entradas dos jogadores
        em índices de matrizes. Para isso usa-se o "estrutura[Math.floor((posicao - 1) / 3)][(posicao - 1) % 3] = 'X'",
        no qual "[Math.floor((posicao - 1) / 3)]" converte a posição no índice da linha e
        "[(posicao - 1) % 3]" converte no índice da coluna e atribue o "X" ou "O" de acordo com o passo. Exemplo:
        se o jogador "X" colocou a posição 9, usando a fórmula para a linha e coluna reespectivamente, seria:
            o Math.floor(9 - 1)/ 3 = 8 / 3 = 2.66667, no qual o floor deixa como 2. ficando como índice 2 para linha;
            o (9 - 1) % 3 = 8 % 3 = 2, pois o resto dessa divisão é 2, ficando assim o índice da coluna;
            o A posicão nessa matriz seria ( 2, 2).
*/
