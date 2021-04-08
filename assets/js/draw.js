const howard = document.getElementById('howard');
const result = document.getElementById("result");
const winner = document.getElementById("winner");

const gameDraw = (playCount) => {
    if (playCount === 41) {
        endGamePopUpDraw();
    } else {
        playCount++;
    }
    return playCount;
};

const endGamePopUpDraw =()=>{
    winner.innerText = '';
    howard.src = '../assets/img/happyHoward.png'
    result.innerText = "Derrotados pelo Hokage Howard! Mwahaha";
    endGamePopUp.classList.remove("hidden");
}