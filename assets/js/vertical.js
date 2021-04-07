document.addEventListener("click", () => {
    for (let i = 5; i > 0; i--) {
        for (let j = 0; j < gamePlay[i].length; j++) {
            if (gamePlay[i][j] === 1) {
                if (gamePlay[i-1][j] === 1) {
                    if (gamePlay[i-2][j] === 1) {
                        if (gamePlay[i-3][j] === 1) {
                            let victory = "player1"
                            return console.log(victory)
                        }
                    } 
                }
            }

            if (gamePlay[i][j] === 2) {
                if (gamePlay[i-1][j] === 2) {
                    if (gamePlay[i-2][j] === 2) {
                        if (gamePlay[i-3][j] === 2) {
                            let victory = "player2"
                             return console.log(victory)
                        }
                    }   
                }
            }      
        }
    }
})