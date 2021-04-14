var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(400, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "purple";
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.arc(300, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.arc(100, 500, 40, 0, 2 * Math.PI);
ctx.fillStyle = "teal";
ctx.fill();
ctx.stroke();


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "pink";
ctx.fillRect(0, 0, 150, 75);


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("My Art", 10, 50);


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "yellow");


ctx.fillStyle = grd;
ctx.fillRect(90, 90, 150, 80);


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "25px Arial";
ctx.strokeText("Layne Cooper", 400, 40);
