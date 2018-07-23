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
var radius = 12;
var paddleHeight = 100;
var paddleSpeed = 3;
var ballColor = "white"
var paddleColor = "white"

function reset() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    precompaddley = 0;
    comPaddleY = 0;
    comPaddleX = 0;
    playerPaddleY = 300;
    preplayerpaddley = 300;
    theta = 1;
    hyp = 2;
    drawtimer;
    newx = Math.ceil(Math.random() * 3)
    newy = 3 // Math.ceil(Math.random() * 3)
    //    newx = Math.ceil(hyp * Math.sin(theta * Math.PI / 180));
    //    newy = Math.ceil(hyp * Math.cos(theta * Math.PI / 180));
    angle = newy;
    move = newx;
    prex = 0;
    prey = 0;
    x = 50; //radius + 10;
    y = radius + 10;
    playerPaddleX = 20;
    comPaddleX = canvas.width - 20;
    i = 0;
}

function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    reset()
    ctx.lineWidth = 1;
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
    } else if (x >= comPaddleX - radius) {
        if (y > comPaddleY - 1 && y < comPaddleY + paddleHeight + 1) {
            move = -1 * newx;
        }
    }
    if (x < 0) {
        reset()
    }
    if (x > canvas.width) {
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

function drawPaddles() {
    // Erase both paddles first
    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black';
    var adjust = 1
    ctx.fillRect(comPaddleX, comPaddleY - adjust, radius, paddleHeight + adjust)
    // ctx.ellipse(prex, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()

    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black';
    ctx.fillRect(playerPaddleX, playerPaddleY - adjust, radius, paddleHeight + adjust)
    // ctx.ellipse(prex, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()

    // Calculate new positions for the paddles.
    halfPaddleHeight = paddleHeight / 2
    if (playerPaddleY > y - halfPaddleHeight) {
        playerPaddleY = playerPaddleY - paddleSpeed
    } else {
        playerPaddleY = playerPaddleY + paddleSpeed
    }
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

    // Draw a new one
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = paddleColor;
    // ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(playerPaddleX, playerPaddleY, radius, paddleHeight);
    ctx.fill()
    ctx.stroke()

    ctx.beginPath();
}

function draw() {
    moveball()
    drawball()
    drawPaddles()
}

function myfunction() {
    setup();
    draw();
    drawtimer = setInterval(function () { draw(); }, 15);
}