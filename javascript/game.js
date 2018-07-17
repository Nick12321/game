window.onload = initAll;
// $( document ).ready(function() {
// initAll();
// })

function initAll() {
    readyPlayerOne();
    // let currentPlayer = 0;
    document.getElementById("square0").innerHTML = "X";
}

function readyPlayerOne() {
    let currentPlayer = Math.floor(Math.random() + 1);
    alert("currentPlayer = " + currentPlayer);
    if (currentPlayer === 0) {
        alert("currentPlayer === 0");
        document.getElementById("square1").innerHTML = currentPlayer;
        
    }
    else {
        alert("currentPlayer != 0")
        document.getElementById("square1").innerHTML = currentPlayer;
    }
}


// $(document).ready(function() {
//     window.alert("We're here!");
//     document.getElementById(square0).innerHTML = 0;
//     let currentPlayer = 0;
//     readyPlayerOne(currentPlayer);
//     document.getElementById(square0).innerHTML = 0;

// })
