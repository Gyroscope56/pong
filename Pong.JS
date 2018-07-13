var precompaddley = 0;
var compaddley = 0;
var compaddlex = 0;
var theta = Math.random() * 100;
var hyp = 2;
var drawtimer;
var angle = 0;
var prex = 0;
var prey = 0;
var x = 0;
var canvas;
var ctx;
var move = 0;
var y = 0;

function reset() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    precompaddley = 0;
    compaddley = 0;
    compaddlex = 0;
    theta = Math.random() * 100;
    hyp = 2;
    drawtimer;
    angle = 0;
    prex = 0;
    prey = 0;
    x = 0;
    move = 0;
    y = 0;
    compaddlex = canvas.width - 20;
}
function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    reset()
    ctx.lineWidth = 1;
}
function draw() {
    var radius = 10;
    newx = Math.ceil(hyp * Math.sin(theta * Math.PI / 180));
    if (x <= 0) {
        move = newx;
        theta = theta - Math.random() * 100;
    } else if (x >= compaddlex - radius) {
        if (y > compaddley - 1 && y < compaddley + 51) {
            move = -1 * newx;
            theta = theta + Math.random() * 100;
        } else if (x > canvas.width) {
            reset()
        }
    }
    newy = Math.ceil(hyp * Math.cos(theta * Math.PI / 180));
    if (y <= 0) {
        angle = newy
        theta = theta + Math.random() * 100
    } else if (y >= canvas.height - radius) {
        angle = -1 * newy
        theta = theta - Math.random() * 100;
    }
    //    if (x > canvas.width-radius){
    //        clearInterval(drawtimer)
    //        return
    //    }
    // Erase the previous image
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
    if (compaddley > y) {
        compaddley = compaddley - 1.75
    } else if (compaddley < y) {
        compaddley = compaddley + 1.75
    }
    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black';
    ctx.fillRect(compaddlex, precompaddley - 25, radius, 50)
    // ctx.ellipse(prex, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()

    // Draw a new one
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    // ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(compaddlex, compaddley - 25, radius, 50);
    ctx.fill()
    ctx.stroke()
    prex = x
    prey = y
    x = x + move;
    y = y + angle
    ctx.beginPath();
    precompaddley = compaddley

}

function myfunction() {
    setup();
    draw();
    drawtimer = setInterval(function () { draw(); }, 5);
}