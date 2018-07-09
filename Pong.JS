var drawtimer;
var prex = 0;
var x = 0;
var canvas;
var ctx;
var move = 0;
function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.lineWidth = 1;
}
function draw() {
    var radius = 10;
    if (x <= 0){
        move = 10;
    } else if (x >= canvas.width-radius){
        move = -10
    }
//    if (x > canvas.width-radius){
//        clearInterval(drawtimer)
//        return
//    }
    // Erase the previous image
    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black';
    ctx.fillRect(prex, 100, radius, radius)
    // ctx.ellipse(prex, 100, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()

    // Draw a new one
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    // ctx.ellipse(x, 100, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(x, 100, radius, radius)
    ctx.fill()
    ctx.stroke()
    prex = x
    x = x + move;    
    ctx.beginPath();
}

function myfunction() {
    setup();
    draw();
    drawtimer = setInterval(function(){ draw(); }, 33);
}