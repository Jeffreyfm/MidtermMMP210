
var ants = [];
var backgroundColor;
var isOverCircle;

function setup() {
	createCanvas(1200,500);
	backgroundColor = color(255, 255, 255);
	for(var i=0; i<200; i++) {
		ants.push(new Ant(random(width),random(height)));
	}
}

function draw() {
	background(backgroundColor);
	for(var i = 0; i<200; i++) {
		ants[i].move();
		ants[i].show();
	}
	
}

//Bubbles class
function Ant(x, y) {
	this.x = x;
	this.y = y;

	this.show = function() {
		fill(101, 67, 33);
		ellipse(this.x, this.y, 25, 25);
	};

	this.move = function() {
		this.x += random(-3,10);
		this.y += random(-3,10);
	}
 
 	this.check = function(){

 	}
}

function mousePressed(){
for(var i = 0; i<200; i++) {
  	if(ants[i].check() == true)
  // background(255, 0, 0)
}