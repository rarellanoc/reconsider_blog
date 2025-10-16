
var counter = 0;

var comentario = ['WELCOME', ' ' , 'TO', 'THE', 'CIRCLE', '      ', '                 '];

function setup() {
  // put setup code here

	cnv = createCanvas(1400,200);
	cnv.parent("divinicial");
	background(252);
	

}

function draw() {
  // put drawing code here

	background(252);
	frameRate(10);

	//stroke(20);
	fill(20);
	textAlign(LEFT);
	textSize(18);
	text('Hello', 100,100);
	text('I will help you to meet women on the street',100, 120)
	text('Initiate change on the way you approach, today',100, 140);	 
	text('Rick Arellano',100, 160);


	fill(255,99,71)
	noStroke()
	rect(540,0,1000,250);

	textAlign(RIGHT);
	textSize(70);


	
	fill(255);
	text(comentario[counter], 980,170);

	var largo_palabra = comentario[counter].length

	if (frameCount % largo_palabra == 0){

		counter = counter + 1;

	}

	

	//console.log(counter);
	//console.log(comentario.length);

	if (counter >= comentario.length) {

		
		counter = 0;

	}

}
