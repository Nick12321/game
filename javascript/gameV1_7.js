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
    // checkMove();
    // setMove();
    
    // checkWin();
}

function getMove(currentPlayer, playerOh, playerX) {
    let move = new Array();
    if (currentPlayer === "O" ) {
        move = playerOh;
        alert('Player O');       
    }
    else {
        move = playerX;
        alert('Player X'); 
    }

    // $('#square0').mousedown(function() {
    //     // checkMove();
    //     // if((document.getElementById("square0").innerHTML) === None) {
    //     // if($('#square0').html() === '') {
    //     $('#square0').html() = currentPlayer
    //     move.push(0);
    //     alert('in square 0' + move);
    //     }
    $('#square0').mousedown(function(){
        move.push(0);        
        document.getElementById("square0").innerhtml = '"X"';
        alert('in square 0'+ move + currentPlayer);
    })
    $('#square1').mousedown(function() {
        move.push(1);
    })
    $('#square2').mousedown(function() {
        move.push(2);
    })
    $('#square3').mousedown(function() {
        move.push(3);
    })
    $('#square4').mousedown(function() {
        move.push(4);
    })
    $('#square5').mousedown(function() {
        move.push(5);
    })
    $('#square6').mousedown(function() {
        move.push(6);
    })
    $('#square7').mousedown(function() {
        move.push(7);
    })
    $('#square8').mousedown(function() {
        move.push(8);
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
