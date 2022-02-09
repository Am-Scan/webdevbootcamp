let btn = document.getElementById("btn");

let container = document.getElementById("container");

function createNotification() {
    let note = document.createElement("div");

    note.classList.add("toast");

    note.innerText=("This is a web development bootcamp");

    container.appendChild(note);
    
    setTimeout(() => {
        note.remove();
    }, 3000);
}

btn.addEventListener("click", () => {
    createNotification();
});