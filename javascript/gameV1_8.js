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
    
        let currentSquare = "square10";            
        $(".grid").mousedown(function(){        
            currentSquare = ($(this).attr('id'));        
            let text = ($(this).html());
              
            if (text === '&nbsp;') {            
                document.getElementById(currentSquare).innerHTML = currentPlayer;
                                            
                if (currentPlayer === "O" ) {
                    playerOh.push(currentSquare);                
                    checkWin(playerOh, currentPlayer);
                    currentPlayer = 'X';                
                }
                else {
                    playerX.push(currentSquare);
                    checkWin(playerX, currentPlayer);
                    currentPlayer = 'O';
                }
                
                setTurnText("  Has Next Move!!!");
                setTurnHolder(currentPlayer);
                checkWin(move);   
            }
            else {
                alert('Not a valid move!');
            }
                    
        });
        
    }
    
    function checkWin(moves, currentPlayer) {
        let win0 = new Array();
       
        
        // for (var i=0; i<3; i++) {
        //     // let sub = 'square' + i;
        //     // win0.push(sub);
        //     alert('here!');
        // }
        // alert(currentSquare);
            
        
        
        
        // let winComb = new Array (0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5, 8, 2, 4, 6, 0, 4, 8);
        // // let test = winComb.shift();
        // let numb = playerOh.length;
        // let ('win' + 0) = new Array(1, 2, 3, 4);
        // alert(win0);
            
        // for (var i = 0; i < 8; i++){
        //     let checkArray = 'win' + i;
        //     let ('win' + i) = new Array();
        //     for (var n = 0; n < 3; n++) {
        //         ('win' + i).push(winComb[0]);
        //         winComb.shift();
        //     }
        // }
        // // let win0 = new Array();
        // win0.push($(square0).attr('id'));
        // win0.push($(square1).attr('id'));
        // win0.push($(square2).attr('id'));
        // alert(win0);
    
        // let win1 = ($(square1).attr('id')) + ($(square2).attr('id')) + ($(square3).attr('id'));
        // alert(win1);
    
    }
    
    function setTurnText(descMove) {
        $('#turnText').html("   " + descMove);
    }
    
    function setTurnHolder(descTurn) {
        $('#turnHolder').html(descTurn);
    }
    