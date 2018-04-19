
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

function Ant(x, y) {
	this.x = x;
	this.y = y;
	this.start = -3;
	this.end = 10;

	this.show = function() {
		fill(101, 67, 33);
		ellipse(this.x, this.y, 25, 25);
	};

	this.move = function() {
		this.x += random(this.start, this.end);
		this.y += random(this.start, this.end);

	};
 
 	this.check = function(){
 		var distance = (sqrt(pow(mouseX - this.x, 2)) + pow((mouseY - this.y, 2)))
 		if (distance < 12) {return true }
 			else {return false}
 print("hello")
 	}

}

function mousePressed(){
for(var i = 0; i<200; i++) {	
  ants[i].check() 

  if(ants[i].check() == true){
ants[i].start = 0
ants[i].end = 0

 } // background(255, 0, 0)
}
}