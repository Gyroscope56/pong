var i = 0;
var preplayerpaddley = 0;
var playerpaddlex = 0;
var playerpaddley = 300;
var precompaddley = 0;
var compaddley = 0;
var compaddlex = 0;
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
var radius = 10;


function reset() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    precompaddley = 0;
    compaddley = 0;
    compaddlex = 0;
    playerpaddlex = 0;
    playerpaddley = 300;
    preplayerpaddley = 300;
    theta = 1;
    hyp = 2;
    drawtimer;
    newx = Math.ceil(Math.random() * 10)
    newy = Math.ceil(Math.random() * 10)
    //    newx = Math.ceil(hyp * Math.sin(theta * Math.PI / 180));
    //    newy = Math.ceil(hyp * Math.cos(theta * Math.PI / 180));
    angle = newy;
    move = newx;
    prex = 0;
    prey = 0;
    x = 50; //radius + 10;
    y = radius + 10;
    playerpaddlex = 20;
    compaddlex = canvas.width - 20;
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
    if (x > playerpaddlex - 1 && x < playerpaddlex + radius + 1) {
        if (y >= playerpaddley && y <= playerpaddley + 51) {
            move = 1 * newx;
        }
    } else if (x == compaddlex - radius) {
        if (y > compaddley - 1 && y < compaddley + 51) {
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
        angle = 1 * newy;
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
    ctx.fillStyle = 'white';
    // ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(x, y, radius, radius);

}

function drawPaddles() {
    // Erase the previous image
    if (playerpaddley > y - 25) {
        playerpaddley = playerpaddley - 1.75
    } else if (playerpaddley < y - 25) {
        playerpaddley = playerpaddley + 1.75
    }
    if (compaddley > y - 25) {
        compaddley = compaddley - 1.75
    } else if (compaddley < y - 25) {
        compaddley = compaddley + 1.75
    }
    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black';
    ctx.fillRect(compaddlex, precompaddley, radius, 50)
    // ctx.ellipse(prex, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()

    // Draw a new one
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    // ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(compaddlex, compaddley, radius, 50);

    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black';
    ctx.fillRect(playerpaddlex, preplayerpaddley, radius, 50)
    // ctx.ellipse(prex, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()

    // Draw a new one
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    // ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(playerpaddlex, playerpaddley, radius, 50);
    ctx.fill()
    ctx.stroke()

    ctx.beginPath();
    precompaddley = compaddley
    preplayerpaddley = playerpaddley
}

function draw() {
    moveball()
    drawball()
    drawPaddles()
}

function myfunction() {
    setup();
    draw();
    drawtimer = setInterval(function () { draw(); }, 10);
}