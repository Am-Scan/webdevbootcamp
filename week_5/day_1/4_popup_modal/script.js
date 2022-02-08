let btn = document.getElementById("btn-open");

let btnTwo = document.getElementById("btn-close");

let modal = document.getElementById("modal-div");

btn.onclick = function() {
    modal.style.display = "inherit";
};

btnTwo.onclick = function() {
    modal.style.display = "none";
}

