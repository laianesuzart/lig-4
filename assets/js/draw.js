const gameDraw = (count) => {
    if (count === 41) {
        endGamePopUpDraw();
    }else{
        count++;
    }
    return count;
};

const endGamePopUpDraw =()=>{
    let result = document.getElementById("result");
    result.innerHTML = "";
    result.innerText ="Empate!";
    let popUp=document.getElementById("endGamePopUp");
    popUp.classList.remove("hidden");
}