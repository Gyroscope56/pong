var isGameRunning = true;
var scoreToWin = 10;
var i = 0;
var playerPaddleX = 0;
var playerPaddleY = 300;
var comPaddleY = 0;
var comPaddleX = 0;
var theta = 10;
var hyp = 2;
var drawtimer;
var angle = Math.ceil(Math.random() * 100);
var prex = 0;
var prey = 0;
var x = 0;
var canvas;
var ctx;
var move = Math.ceil(Math.random() * 100);
var y = 0;
var radius = 5;
var paddleHeight = 75;
var paddleSpeed = 5;
var ballColor = "white"
var paddleColor = "white"
var playerScore = 0
var computerScore = 0

function reset() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    precompaddley = 0;
    comPaddleY = 0;
    comPaddleX = 0;
    playerPaddleY = canvas.height / 2;
    preplayerpaddley = 300;
    theta = 1;
    hyp = 2;
    drawtimer;
    newx = 2 + Math.ceil(Math.random() * 5)
    newy = 6 // Math.ceil(Math.random() * 3)
    //    newx = Math.ceil(hyp * Math.sin(theta * Math.PI / 180));
    //    newy = Math.ceil(hyp * Math.cos(theta * Math.PI / 180));
    angle = newy;
    move = newx;
    prex = 0;
    prey = 0;
    x = canvas.width / 2; //radius + 10;
    y = Math.ceil(Math.random() * canvas.height);
    playerPaddleX = 20;
    comPaddleX = canvas.width - 20;
    drawScore()
    if (isGameRunning == true){
        DrawPlayerPaddle()    
    }
}

function endGame() {
    if (playerScore == scoreToWin) {
        reset()
        ctx.font = "100px Comic Sans MS";
        ctx.fillStyle = 'white'
        ctx.fillText("YOU WON!!!", (canvas.width / 2)-275, canvas.height/2);
        myStopFunction()
        isGameRunning = false
        ErasePlayerPaddle()
    } else if (computerScore == scoreToWin) {
        reset()
        ctx.font = "100px Comic Sans MS";
        ctx.fillStyle = 'white'
        ctx.fillText("Computer Won! Good try!", 10, canvas.height/2);
        myStopFunction()
        isGameRunning = false
        ErasePlayerPaddle()
    }
}
function ErasePlayerPaddle() {
    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black';
    ctx.fillRect(playerPaddleX, playerPaddleY, radius, paddleHeight)
    // ctx.ellipse(prex, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
}

function DrawPlayerPaddle() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = paddleColor;
    // ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(playerPaddleX, playerPaddleY, radius, paddleHeight);
    ctx.fill()
    ctx.stroke()
    ctx.beginPath();
}

function handleKeyDown(event) {
    if (isGameRunning == true) {
        console.log("Got keydown", event)
        if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
        }
        if (event.keyCode == 40) {
            ErasePlayerPaddle()
            playerPaddleY = playerPaddleY + 20
            DrawPlayerPaddle()
            // Draw a new one
            return
        } else if (event.keyCode == 38) {
            ErasePlayerPaddle()
            playerPaddleY = playerPaddleY - 20
            DrawPlayerPaddle()
            return
        }
        event.preventDefault();    
    }
}

function setup() {
    window.addEventListener("keydown", handleKeyDown, true)
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    reset()
    ctx.lineWidth = 1;
}

function drawScore() {
    //Player Score
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = 'white'
    ctx.fillText(playerScore, (canvas.width / 4)-20, 50);
    //Computer Score
    ctx.fillText(computerScore, ((canvas.width / 4) * 3), 50);
}

function moveball() {
    prex = x
    prey = y
    x = x + move;
    y = y + angle
    if (x >= playerPaddleX - 1 && x < playerPaddleX + radius + 1) {
        if (y >= playerPaddleY && y <= playerPaddleY + paddleHeight) {
            move = newx;
        }
    } else if (x >= comPaddleX - radius && x <= comPaddleX+radius) {
        if (y > comPaddleY - 1 && y < comPaddleY + paddleHeight + 1) {
            move = -1 * newx;
        }
    }
    if (x < 0) {
        computerScore = computerScore + 1
        reset()
    }
    if (x > canvas.width) {
        playerScore ++
        reset()
    }
    if (y <= 0) {
        angle = newy;
    } else if (y >= canvas.height - radius) {
        angle = -1 * newy;
    }
}

function drawball() {
    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black';
    ctx.fillRect(prex, prey, radius, radius)
    // ctx.ellipse(prex, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()

    // Draw a new one
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = ballColor;
    // ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(x, y, radius, radius);

}

function drawComputerPaddle() {
    // Erase both paddles first
    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black';
    var adjust = 1
    ctx.fillRect(comPaddleX, comPaddleY - adjust, radius, paddleHeight + adjust)
    // ctx.ellipse(prex, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()

    // Calculate new positions for the paddles.
    halfPaddleHeight = paddleHeight / 2
    //if (playerPaddleY > y - halfPaddleHeight) {
    //  playerPaddleY = playerPaddleY - paddleSpeed
    //} else {
    //  playerPaddleY = playerPaddleY + paddleSpeed
    //}
    if (comPaddleY > y - halfPaddleHeight) {
        comPaddleY = comPaddleY - paddleSpeed
    } else {
        comPaddleY = comPaddleY + paddleSpeed
    }
    // Draw a new one
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = paddleColor;
    // ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(comPaddleX, comPaddleY, radius, paddleHeight);

}
function centerLine() {
    ctx.beginPath();
    ctx.strokeStyle = 'white'
    ctx.fillStyle = 'white'
    ctx.setLineDash([5, 10]);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}
function draw() {
    moveball()
    drawball()
    drawComputerPaddle()
    centerLine()
    drawScore()
    endGame()
}

function myfunction() {
    setup();
    draw();
    drawtimer = setInterval(function () { draw(); }, 20);
}

function myStopFunction() {
    clearInterval(drawtimer);
}