// "use strict";


var targets = [];
var counter = 0;
var isY = false;
var hasBeenClicked = false;


var refreshRate = 30;
var freq = 10;

var totalClicks = 0;
var correctHits = 0;
var falseAlarms = 0;
var totalYs = 0;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	frameRate(refreshRate);
	genLetters();

	button = createButton('Response');
	button.position(window.innerWidth/2-10, window.innerHeight * .9);
	button.mousePressed(seenY);
	// button = createButton('Log Results'); 
	// button.position(window.innerWidth/2 -10,window.innerHeight * 0.95); 


}


function draw() {
	textSize(32);
	fill(255);
	counter++;




	for (var i = 0; i < targets.length; i++){
		text(targets[i][0], targets[i][1], targets[i][2]);
	}



	if (counter % refreshRate === 0){
		hasBeenClicked = false;

		isY = false;
		genLetters();

		background(0);
	}
}	


function seenY() {

	if (!hasBeenClicked){


		totalClicks++;

		if (isY){
			correctHits++;
		}else{
			falseAlarms++;
		}
		hasBeenClicked = true;
	}
}

function genLetters(){
	targets = [];

	for (var i = 0; i < 3; i++){
		var letter = 'V';

		var temp = (int)(Math.random() * freq)

		if (temp === 1 && !isY){
			isY = true;
			totalYs++;
			letter = 'Y';
		}

		targets.push([letter, Math.random()*window.innerWidth*.9+32, Math.random()*window.innerHeight*.9+32]);
	}
}


