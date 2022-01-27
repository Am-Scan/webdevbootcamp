let time = document.getElementById("time");

function setTime() {
   
    const d = new Date();

    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    time.innerHTML= hours+":"+mins+":"+secs;
}

setTime();