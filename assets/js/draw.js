const gameDraw = (playCount) => {
    if (playCount === 41) {
        endGamePopUpDraw();
    }else{
        playCount++;
    }
    return playCount;
};

const endGamePopUpDraw =()=>{
    let result = document.getElementById("result");
    result.innerHTML = "";
    result.innerText ="Empate!";
    let popUp=document.getElementById("endGamePopUp");
    popUp.classList.remove("hidden");
}