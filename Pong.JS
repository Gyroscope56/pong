var theta = Math.random()*100;
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
function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.lineWidth = 1;
}
function draw() {
    var radius = 10;
    newx = Math.ceil(hyp * Math.sin(theta * Math.PI/180));
    if (x <= 0){
        move = newx;
        theta=theta-Math.random()*100;
    } else if (x >= canvas.width-radius){
        move = -1 * newx;
        theta=theta+Math.random()*100;
    }
    newy = Math.ceil(hyp * Math.cos(theta * Math.PI/180));
    if (y <= 0){
        angle = newy
        theta=theta+Math.random()*100
    } else if (y >= canvas.height-radius){
        angle = -1 * newy
        theta=theta-Math.random()*100;
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
    ctx.fillStyle = 'black';
    // ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI, false)
    ctx.fillRect(x, y, radius, radius);
    ctx.fill()
    ctx.stroke()
    prex = x
    prey = y
    x = x + move;
    y = y + angle  
    ctx.beginPath();
    
}

function myfunction() {
    setup();
    draw();
    drawtimer = setInterval(function(){ draw(); }, 5);
}