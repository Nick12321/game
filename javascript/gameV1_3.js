$( document ).ready(function() {
readyPlayerOne();
playGame();
// $ .mousedown(function() {
//     alert("mousedown!");
// }
})

function readyPlayerOne() {
    let descMove = "Has first turn!!";
    setTurnText(descMove);
    let currentPlayer = Math.round(Math.random());
    if (currentPlayer === 0) {        
        setTurnHolder("X");        
    }
    else {        
        setTurnHolder("O");        
    }
}

function setTurnText(descMove) {
    $('#turnText').html("   Has first turn!!!");
}

function setTurnHolder(descTurn) {
    $('#turnHolder').html(descTurn);
}

function playGame() {
    // let currentPlayer = $('#turnHolder').innerhtml;
    let currentPlayer = document.getElementById("turnHolder").innerHTML;
    alert("playGame() currentPlayer is " + currentPlayer);
    let playerO = new Array;
    let playerX = new Array;
    $('#turnText').mousedown(function() {
        alert("mousedown function called");
    });
    // $('#square').mousedown(function() {
    //     alert("mousedown function called");
    // });
    // alert("We're here! Current player: " + currentPlayer);
}
