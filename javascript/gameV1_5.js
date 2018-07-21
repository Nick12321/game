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
    $('#square0').mousedown(function() {
    if (currentPlayer === "O" ) {
        playerOh.push(0);
        alert("player O has: " + playerOh);
    }
    else {
        playerX.push(0);
        alert("player X has: " + playerX);
    }
    })

    $('#square1').mousedown(function() {
        if (currentPlayer === "O" ) {
            playerOh.push(1);
            alert("player O has: " + playerOh);
        }
        else {
            playerX.push(1);
            alert("player X has: " + playerX);
        }
        })
    
    $('#square2').mousedown(function() {
        if (currentPlayer === "O" ) {
            playerOh.push(2);
            alert("player O has: " + playerOh);
        }
        else {
            playerX.push(2);
            alert("player X has: " + playerX);
        }
        })

    $('#square3').mousedown(function() {
        if (currentPlayer === "O" ) {
            playerOh.push(3);
            alert("player O has: " + playerOh);
        }
        else {
            playerX.push(3);
            alert("player X has: " + playerX);
        }
        })
    
    $('#square4').mousedown(function() {
        if (currentPlayer === "O" ) {
            playerOh.push(4);
            alert("player O has: " + playerOh);
        }
        else {
            playerX.push(4);
            alert("player X has: " + playerX);
        }
        })

    $('#square5').mousedown(function() {
        if (currentPlayer === "O" ) {
            playerOh.push(5);
            alert("player O has: " + playerOh);
        }
        else {
            playerX.push(5);
            alert("player X has: " + playerX);
        }
        })

    $('#square6').mousedown(function() {
        if (currentPlayer === "O" ) {
            playerOh.push(6);
            alert("player O has: " + playerOh);
        }
        else {
            playerX.push(6);
            alert("player X has: " + playerX);
        }
        })

    $('#square7').mousedown(function() {
        if (currentPlayer === "O" ) {
            playerOh.push(7);
            alert("player O has: " + playerOh);
        }
        else {
            playerX.push(7);
            alert("player X has: " + playerX);
        }
        })

    $('#square8').mousedown(function() {
        if (currentPlayer === "O" ) {
            playerOh.push(8);
            alert("player O has: " + playerOh);
        }
        else {
            playerX.push(8);
            alert("player X has: " + playerX);
        }
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
