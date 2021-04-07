const endGamePopUp = document.getElementById("endGamePopUp");
const winner = document.getElementById("winner");

const showEndGamePopUp = (cell)=>{
    
    winner.innerText = `Player ${cell} `
    endGamePopUp.classList.remove("hidden");
}
