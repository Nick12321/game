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
    getMove(currentPlayer, playerOh, playerX);
}

function getMove(currentPlayer, playerOh, playerX) {
    let move = new Array();
    let currentSquare = "square10";
    if (currentPlayer === "O" ) {
        move = playerOh;               
    }
    else {
        move = playerX;         
    }
        
    $(".grid").mousedown(function(){        
        currentSquare = ($(this).attr('id'));
        // alert(currentPlayer);
        // var text = $(this).text();
        if ($(this).html = '&nbsp') {
            ($(this).html) = currentPlayer;
            move.push(currentSquare);
            alert('push' + push);
        }
        
        else {
            alert('Not a valid move!')
        }
        
        // alert(currentSquare + " " + move);
    });
    
        
}

function checkMove(playerOh, playerX, move) {

}

function setTurnText(descMove) {
    $('#turnText').html("   Has first turn!!!");
}

function setTurnHolder(descTurn) {
    $('#turnHolder').html(descTurn);
}
