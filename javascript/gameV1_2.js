$( document ).ready(function() {
readyPlayerOne();
})

function readyPlayerOne() {
    // alert("in readyPlayerOne");
    // document.getElementById("turnText").innerHTML = "  Has First Turn!";
    // alert(descMove);
    let descMove = "Has first turn!!";
    setTurnText(descMove);
    let currentPlayer = Math.round(Math.random());
    if (currentPlayer === 0) {
        $('#turnHolder').html("X");
        // document.getElementById("turnHolder").innerHTML = "' X '";
    }
    else {
        $('#turnHolder').html("O");
        // document.getElementById("turnHolder").innerHTML = "' O '";
    }
}

function setTurnText(descMove) {

    $('#turnText').html("   Has first turn!!!");
}

// function playGame() {
//     // let currentPlayer = $('#turnHolder').innerhtml;
//     let currentPlayer = document.getElementById("turnHolder").innerHTML;
//     let playerO = new Array;
//     let playerX = new Array;
//     alert("We're here! Current player: " + currentPlayer);