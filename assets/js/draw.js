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
    endGamePopUp.classList.remove('showUp');
    winner.innerText = '';
    howard.src = '../lig-4/assets/img/happyHoward.png'
    result.innerText = "Derrotados pelo Hokage Howard! Mwahaha";
    drawAnimation();
    endGamePopUp.classList.add('showUp');
    setTimeout(() => {
        endGamePopUp.classList.remove("hidden");
    }, 5000);  
}