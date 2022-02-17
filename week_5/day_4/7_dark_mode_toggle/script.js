let btn = document.querySelector("button");
let bg = document.body;
let h1 = document.getElementById("header");
let p = document.getElementById("para");

btn.addEventListener("click", changeMode);

let currentState = "";

function changeMode() {
    console.log(currentState);
    if (currentState = "day") {
        currentState = "night";
        h1.style.color="white";
        p.style.color="white";
        bg.style.backgroundColor="black";
        
    } else if (currentState = "night") {
        currentState = "day";
        console.log(currentState);
        h1.style.color="black";
        p.style.color="black";
        bg.style.backgroundColor="white";
    }
    return currentState;
}