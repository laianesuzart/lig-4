const endGamePopUp = document.getElementById("endGamePopUp");

const showEndGamePopUp = (cell)=>{
    const playersName = getPlayersName();
    result.innerText = 'venceu e deixou a vila!';
    howard.src = '../assets/img/sadHoward.png'

    if (cell === 1) {
        if (playersName[1] !== undefined) {
            winner.innerText = `${playersName[1]} `
        } else {
            winner.innerText = 'Naruto ';
        }
    } else {
        if (playersName[2] !== undefined) {
            winner.innerText = `${playersName[2]} `
        } else {
            winner.innerText = 'Sakura ';
        }
    }
    endGamePopUp.classList.remove("hidden");
}