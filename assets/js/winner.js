const endGamePopUp = (cell)=>{
    let winner = document.getElementById("winner");
    winner.innerText = `Player ${cell} `
    let popUp=document.getElementById("endGamePopUp");
    popUp.classList.remove("hidden");
}
