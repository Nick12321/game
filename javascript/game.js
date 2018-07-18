window.onload = initAll;
// $( document ).ready(function() {
// initAll();
// })

function initAll() {
    readyPlayerOne();
    document.getElementById("square0").innerHTML = "X";
}

function readyPlayerOne() {
    let currentPlayer = Math.round(Math.random());
    if (currentPlayer === 0) {
        alert("currentPlayer === 0");
        document.getElementById("turnHolder").innerHTML = "X";
        
    }
    else {
        alert("currentPlayer != 0")
        document.getElementById("turnHolder").innerHTML = "O";
    }
}
