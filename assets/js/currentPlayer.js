const gameTableID = document.getElementById("gameTable");
const showPlayer = document.createElement("span")
showPlayer.innerText = currentPlayer
gameTableID.appendChild(showPlayer);

document.addEventListener("click", () => {
    showPlayer.innerText = currentPlayer
    gameTableID.appendChild(showPlayer);
})