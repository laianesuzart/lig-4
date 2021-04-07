
const reset =()=>{
    let popUp=document.getElementById("endGamePopUp");
    popUp.classList.add("hidden");
    let columns = document.querySelectorAll(".col");
    columns.forEach(col=>{
        let colChildArray = Array.from(col.children)
        colChildArray.forEach(row => row.innerHTML ="")
    })
    count=0
}

const buttonReset = document.getElementById("reset")
buttonReset.addEventListener("click",reset)


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

