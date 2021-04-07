const winHorizontal = (gamePlay,rowPosition)=>{
    let colSelected = gamePlay[rowPosition];

    colSelected.forEach((cell,index)=>{
        if(cell !== 0) {
            if(
                (cell === colSelected[index+1])
                &&
                (cell === colSelected[index+2])
                &&
                (cell === colSelected[index+3])
            ) {
                if(cell===1){
                    console.log("player1");
                }else if (cell===2){
                    console.log("player2");
                }
            }
        }
    })
}

// columns.forEach((current) => {
//     current.addEventListener('click', ()=>{
//         winHorizontal(gamePlay, rowPosition);
//     });
// });