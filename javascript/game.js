window.onload = initAll;
// $( document ).ready(function() {
// initAll();
// })

function initAll() {
    readyPlayerOne();
    playGame();

}

function readyPlayerOne() {
    document.getElementById("turnText").innerHTML = "  Has First Turn!";
    let currentPlayer = Math.round(Math.random());
    if (currentPlayer === 0) {
        $('#turnHolder').html("X")
        // document.getElementById("turnHolder").innerHTML = "' X '";
    }
    else {
        $('#turnHolder').html("O")
        // document.getElementById("turnHolder").innerHTML = "' O '";
    }
}

function playGame() {
    // let currentPlayer = $('#turnHolder').innerhtml;
    let currentPlayer = document.getElementById("turnHolder").innerHTML;
    let playerO = new Array;
    let playerX = new Array;
    alert("We're here! Current player: " + currentPlayer);
    // Trying to get the 'onmousedown' event to capture the square
    // let squareClicked = document.getElementById().onmousedown;
    // alert("Square clicked: " + squareClicked);
//     $("#td id").mousedown(cellSelected() {
//         alert( "Handler for .mousedown() called." );
//     });

}

// function cellSelected() {
//     alert("in cellSelected!");
// }