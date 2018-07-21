$( document ).ready(function() {
readyPlayerOne();
playGame();
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

function playGame() {    
    let currentPlayer = document.getElementById("turnHolder").innerHTML;    
    let playerOh = new Array();
    let playerX = new Array();
    let move = 0;    
    move = getMove(currentPlayer);
    alert('Player: ' + currentPlayer  + ' moved to square: ' + move);
    // checkMove();
    // setMove();    
    // checkWin();
}

function getMove(currentPlayer) {
    $('#square0').mousedown(function() {
        return 0;
    })
    $('#square1').mousedown(function() {
        return 1;
    })
    $('#square2').mousedown(function() {
        return 2;
    })
    $('#square3').mousedown(function() {
        return 3;
    })
    $('#square4').mousedown(function() {
        return 4;
    })
    $('#square5').mousedown(function() {
        return 5;
    })
    $('#square6').mousedown(function() {
        return 6;
    })
    $('#square7').mousedown(function() {
        return 7;
    })
    $('#square8').mousedown(function() {
        return 8;
    })
    
}

function checkMove(playerOh, playerX, move) {

}

function setTurnText(descMove) {
    $('#turnText').html("   Has first turn!!!");
}

function setTurnHolder(descTurn) {
    $('#turnHolder').html(descTurn);
}
