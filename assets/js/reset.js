const homePgBtn = document.getElementById('homePgBtn');
const buttonReset = document.getElementById("reset");

const reset = () => {
    setTimeout(() => {
        endGamePopUp.classList.add("hidden");
    }, 1000);
    

    columns.forEach(col=>{
        let colChildArray = Array.from(col.children);
        colChildArray.forEach(row => row.innerHTML ="");
    });

    playCount = 0;

    currentPlayer = 'player1';

    gamePlay = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
    ];

    clearTimeout(timeID);
    setTimer(15);
    changeTurn();
}

const goToHomePg = () => {

}

buttonReset.addEventListener("click",reset);
buttonReset.addEventListener('mouseenter', playBip);

homePgBtn.addEventListener('mouseenter', playBip);

// let col = e.currentTarget;
// let colChildArray = Array.from(col.children)
//
//     colChildArray.forEach((cell,index)=> {
//             cell.innerHTML="";
//     }
//

// columns.forEach((current) => {
//     current.addEventListener('click', insertBall);
// });

