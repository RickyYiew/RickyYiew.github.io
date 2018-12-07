"use strict"
// Pictures
var moon, village, ground, cloud, myFont, night, book, card1, card2, card3;
// Page logics indicators
var count = 0,
	page2Here = false,
	page3Here = false,
	page4Here = false,
	page5Here = false,
	pressed = 0,
	loading = 0;
// Variables used for animation
var mx = 1,
	my = 1,
	vy = 1069,
	gx = -670,
	cx1 = -289,
	cx2 = 1569,
	radius1 = 0,
	radius2 = 0,
	radius3 = 0,
	radius4 = 0,
	expand1 = true,
	expand2 = true,
	expand3 = true,
	expand4 = true,
	nx = 1,
	ny = 1,
	bx = 1,
	by = 1,
	cdr1 = 1,
	cdr2 = 1,
	cdr3 = 1;
// Variables used for modify opacity
var alpha1 = 0,
	alpha2 = 0,
	alpha3 = 0,
	alpha4 = 0,
	alpha5 = 0,
	alpha6 = 0,
	alpha7 = 0,
	alpha8 = 0,
	alpha9 = 0,
	alpha10 = 0,
	alpha11 = 0,
	alpha12 = 0,
	alpha13 = 0;
// DOM elements: inputs & buttons
var input1, input2, input3, input4, button1, button2, button3, button4;
// Arrays
var twi = [],
	i, j, selectArray = [];
// Codebird
var cb = new Codebird;
cb.setConsumerKey("kIsM4rKVBHDKPB3Wvwbj9uSTz", "9DkfH2jPlUqyIlXD69vHOhcp3La3STttLOJyPPcSj9rUT4f0af");
cb.setToken("918829074113589249-eyCJfioJzt0oCZRRczHboAecgO7WJN1", "I21IunS7xn4d43bL9Ihf6sZ34jAMbtNLUIJMJbOI8lU5x");
cb.setProxy("https://peaceful-sea-11713.herokuapp.com/");
// Used for RiTaJS to conjugate the words
var args = {
	tense: RiTa.PAST_TENSE,
	number: RiTa.SINGULAR,
	person: RiTa.THIRD_PERSON
};
// Words array retrieved from the tweets
var noun1 = [],
	noun2 = [],
	noun3 = [],
	noun4 = [],
	verb1 = [],
	verb2 = [],
	verb3 = [],
	verb4 = [],
	adj1 = [],
	adj2 = [],
	adj3 = [],
	adj4 = [];
// DOM elements: selectable name cards & texts
var select1,
	select2,
	select3,
	select4,
	explain;
// Objects to save all related information about a Twitter account
var twi1 = {
		name: "",
		noun: [],
		verb: [],
		adj: [],
		wereWolf: false,
		selected: false,
		poem: [],
	},
	twi2 = {
		name: "",
		noun: [],
		verb: [],
		adj: [],
		wereWolf: false,
		selected: false,
		poem: [],
	},
	twi3 = {
		name: "",
		noun: [],
		verb: [],
		adj: [],
		wereWolf: false,
		selected: false,
		poem: [],
	},
	twi4 = {
		name: "",
		noun: [],
		verb: [],
		adj: [],
		wereWolf: false,
		selected: false,
		poem: [],
	}
// The array for the objects above
var twis = [twi1, twi2, twi3, twi4];
// DOM elements: the divs to display poems
var poemDisplay1, poemDisplay2, poemDisplay3, poemDisplay4, poemDisplayArray = [];


// Preload pictures which will be used in this game
function preload() {
	moon = loadImage("Media/moon.png");
	village = loadImage("Media/village.png");
	ground = loadImage("Media/ground.png");
	cloud = loadImage("Media/cloud.png");
	myFont = loadFont('Media/American Typewriter Regular.ttf');
	night = loadImage("Media/night.png");
	book = loadImage("Media/book.png");
	card1 = loadImage("Media/card1.png");
	card2 = loadImage("Media/card2.png");
	card3 = loadImage("Media/card3.png");
}


// The first page is written purely in HTML becasue of an involvement of video element
// So no canvas is needed at the beginning
function setup() {
	noCanvas();
}


// When you pressed any key on first page,
// the function below will help the player move to the second pag
// Meanwhile, it will create a canvas in page2 function
function keyPressed() {
	pressed = pressed + 1
	console.log("keypressedd");
	if (pressed === 1) {
		page2();
	}

}


// This is where all of the animations happen
// Four booleans are set to test which page the player is in
// In this way, some specific animations and canvas elements can be displayed in order
function draw() {
	// PAGE 2: INTRO TO THE GAME & TWITTER SCREEN NAMES INPUT
	// Since the page 1 is purely created by html and css, I don't hope to have anything on canvass before you move on to page 2
	// "page2Here" is a boolean to test if the player has moved on to page 2
	// When player moves on to page 2, a variable called "count" will be used to document how much time has passed
	// "count" will help me to decide the animation sequences
	if (page2Here === true) {
		count = count + 1;
		background("#3a3d49");
		imageMode(CENTER);

		//////////////////////////// ANIMATED UI BELOW //////////////////////////////////
		// ANIMATIONS
		// Animation for clouds moving
		// The animation would repeat when the cloud moves out of the canvas
		if (count > 200) {
			image(cloud, cx1, 120, 588, 121);
			cx1 = cx1 + 2;
			if (cx1 > 1641) {
				cx1 = -289;
			}
			image(cloud, cx2, 480, 588, 121);
			cx2 = cx2 - 2;
			if (cx2 < -300) {
				cx2 = 1569;
			}
		}
		// Animation for a moon to pop up
		// The moon will pop up after 80 frames since the page 2 starts
		// And this animation will end after 180 frames
		if (count >= 80 && count <= 160) {
			image(moon, 250, 250, mx, my);
			mx = mx + 420 / 80;
			my = my + 420 / 80;
		}
		if (count > 160) {
			image(moon, 250, 250, mx, my);
		}
		// Animation for a village to rise up
		// The village will rise up after 100 frames since the page 2 starts
		// And this animation will end after 200 frames
		if (count >= 100 && count <= 180) {
			image(village, 285, vy, 557, 359);
			vy = vy - 530 / 80;
		}
		if (count > 180) {
			image(village, 285, vy, 557, 359);
		}
		// Animation for the ground to slide in
		// The ground will slide in 120 frames since the page 2 starts
		// And this animation will end after 180 frames
		if (count >= 120 && count <= 160) {
			image(ground, gx, 710, 1320, 30);
			gx = gx + 1290 / 40;
		}
		if (count > 160) {
			image(ground, gx, 710, 1320, 30);
		}

		// TEXTS
		// After the animations above, several texts will display to describe this game
		// Each sentence of these texts will appear gradually with an animation based on opacity
		if (count > 200 && count <= 260) {
			textFont(myFont, 26)
			fill(198, 203, 179, alpha1);
			text("Hello, my friend.", 520, 116);
			alpha1 = alpha1 + 255 / 60;
		}
		if (count > 260) {
			textFont(myFont, 26)
			fill(198, 203, 179, 255);
			text("Hello, my friend.", 520, 116);
			if (count <= 320) {
				textFont(myFont, 26)
				fill(198, 203, 179, alpha2);
				text("Welcome to Wolvliff, a village haunted by werewolf myths.", 520, 152);
				alpha2 = alpha2 + 255 / 60;
			}
		}

		if (count > 320) {
			textFont(myFont, 26)
			fill(198, 203, 179, 255);
			text("Welcome to Wolvliff, a village haunted by werewolf myths.", 520, 152);
			if (count <= 380) {
				textFont(myFont, 26)
				fill(198, 203, 179, alpha3);
				text("Under the ghostly light of full moon,", 520, 188);
				alpha3 = alpha3 + 255 / 60;
			}
		}

		if (count > 380) {
			textFont(myFont, 26);
			fill(198, 203, 179, 255);
			text("Under the ghostly light of full moon,", 520, 188);
			if (count <= 440) {
				textFont(myFont, 26);
				fill(198, 203, 179, alpha4);
				text("it is said some common villagers will transform into a", 520, 224);
				text("furious beast with hair all over their body.", 520, 260);
				alpha4 = alpha4 + 255 / 60;
			}
		}

		if (count > 440) {
			textFont(myFont, 26);
			fill(198, 203, 179, 255);
			text("it is said some common villagers will transform into a", 520, 224);
			text("furious beast with hair all over their body.", 520, 260);
			alpha4 = alpha4 + 255 / 60;
			if (count <= 500) {
				textFont(myFont, 26);
				fill(198, 203, 179, alpha5);
				text("Tonight, you're about to visit this place.", 520, 296);
				alpha5 = alpha5 + 255 / 60;
			}
		}

		if (count > 500) {
			textFont(myFont, 26);
			fill(198, 203, 179, 255);
			text("Tonight, you're about to visit this place.", 520, 296);
			if (count <= 560) {
				textFont(myFont, 26);
				fill(198, 203, 179, alpha6);
				text("Why not ask 4 friends to go with you before it's TOO LATE?", 520, 332);
				alpha6 = alpha6 + 255 / 60;
			}
		}

		if (count > 560) {
			textFont(myFont, 26);
			fill(198, 203, 179, 255);
			text("Why not ask 4 friends to go with you before it's TOO LATE?", 520, 332);
			if (count <= 620) {
				textFont("helvetica", 20);
				fill(222, 222, 222, alpha7);
				text("Now, please enter screen names of four Twitter acounts. They are going to be the", 520, 397);
				text("participants of this game. Make sure the names you input are correct and available.", 520, 420);
				alpha7 = alpha7 + 180 / 60;
			}
		}

		if (count > 620) {
			textFont("helvetica", 20);
			fill(222, 222, 222, 180);
			text("Now, please enter screen names of four Twitter acounts. They are going to be the", 520, 397);
			text("participants of this game. Make sure the names you input are correct and available.", 520, 420);
			//////////////////////////// ANIMATED UI ABOVE //////////////////////////////////

			//////////////////////////// FUNCTIONAL UI BELOW //////////////////////////////////
			// HTML ELEMENTS
			// Create 4 HTML input elements to let player input twitter accounts
			if (count === 621) {
				input1 = createInput('@');
				input2 = createInput('@');
				input3 = createInput('@');
				input4 = createInput('@');
				input1.position(520, 440);
				input2.position(930, 440);
				input3.position(520, 495);
				input4.position(930, 495);
				input1.class("inputClass");
				input2.class("inputClass");
				input3.class("inputClass");
				input4.class("inputClass");
			}
		}

		// Create a button to submit the Twitter screen names that people input,
		// and this will call a function to make you move on to the next page
		// When you click the button, page3 function will run
		// This function will set a variable "page3Here" to indicate that the player has already moved on to page 3
		// It will also set the value of "count" variable back to 0, which would determine the animation sequences on page 3
		// The twitter screen names you input will be saved to retrieve words from their tweets (see details in page3 function)
		if (count === 680) {
			button1 = createDiv('Submit');
			button1.position(930, 565);
			button1.class("button1");
			button1.mouseClicked(page3);
		}
		//////////////////////////// FUNCTIONAL UI ABOVE //////////////////////////////////
	}

	
	// PAGE 3: LOADING & STORYTELLING
	if (page3Here === true) {
		count = count + 1;
		background(color(58, 61, 73, alpha8))
		if (count < 51) {
			alpha8 = alpha8 + 255 / 50;
		}

				
		//////////////////////////// ANIMATED UI BELOW ////////////////////////////////// 
		// ANIMATION
		// Animation for a picture to pop up
		// The picture will pop up after 50 frames since the page 3 starts
		// And this animation will end after 100 frames
		if (count >= 51 && count <= 100) {
			image(night, 629, 170, nx, ny);
			nx = nx + 825 / 50;
			ny = ny + 240 / 50;
		}
		if (count > 100) {
			image(night, 629, 170, nx, ny);
			
		   // TEXT
		   // After the animations above, several texts will display to describe this game
		   // They will appear gradually with an animation based on opacity
			if (count < 160) {
				textFont("helvetica", 20);
				fill(161, 165, 146, alpha10);
				text("Last night, a terrifying beast appeared in this village. Everybody screamed and ran in wide eyed ", 210, 340);
				text("fear. Because of the chaos, you got seperated from your friends. Then you had to hide yourself in", 210, 365);
				text("a safe corner, waiting for the daylight to come. ", 210, 390);
				text("Finally, the sun shined its very first light towards the village. You cautiously observed the", 210, 430);
				text("surroundings. Suddenly, you found the mayor of the village running to you in a hurry. He told you", 210, 455);
				text("this village was attacked by a werewolf last night. And it appeared that one of your four friends", 210, 480);
				text("transformed into the werewolf. But nobody knew who he/she was. The mayor begged you to help him ", 210, 505);
				text("identify who was the werewolf.", 210, 530);
				text("Now each of your friends left a poem to describe what they saw last night. There might be some", 210, 570);
				text("clues in them. Please read the poems and choose who you think was the werewolf.", 210, 595);
				alpha10 = alpha10 + 200 / 60;
			}
		}
		if (count >= 160) {
			textFont("helvetica", 20);
			fill(161, 165, 146, alpha10);
			text("Last night, a terrifying beast appeared in this village. Everybody screamed and ran in wide eyed ", 210, 340);
			text("fear. Because of the chaos, you got seperated from your friends. Then you had to hide yourself in", 210, 365);
			text("a safe corner, waiting for the daylight to come. ", 210, 390);
			text("Finally, the sun shined its very first light towards the village. You cautiously observed the", 210, 430);
			text("surroundings. Suddenly, you found the mayor of the village running to you in a hurry. He told you", 210, 455);
			text("this village was attacked by a werewolf last night. And it appeared that one of your four friends", 210, 480);
			text("transformed into the werewolf. But nobody knew who he/she was. The mayor begged you to help him ", 210, 505);
			text("identify who was the werewolf.", 210, 530);
			text("Now each of your friends left a poem to describe what they saw last night. There might be some", 210, 570);
			text("clues in them. Please read the poems and choose who you think was the werewolf.", 210, 595);
		}
		//////////////////////////// ANIMATED UI ABOVE ////////////////////////////////// 
		
		// LOADING
		// A variable called "loading" is used to test if codebird has already retrieved all of the words in tweets
		// There are four twitter accounts to be reached by codebird
		// Once codebird gets the words from one of them, it will add 1 to "loading" variable
		// So when "loading" is less than 4, a loading UI will display
		// When "loading" is 4, a "continue" button will be shown
		if (loading === 4) {
			button2 = createDiv('Continue');
			button2.position(250, 630);
			button2.class("button2");
			button2.mouseClicked(page4);
			loading = loading + 1;

		}
		if (loading < 4) {
			//////////////////////////// ANIMATED UI BELOW ////////////////////////////////// 
			// LOADING UI ANIMATION
			if (count > 10 && count <= 21) {
				textFont(myFont, 40);
				fill(132, 172, 134, alpha9);
				text("L o a d i n g", 410, 647);
				alpha9 = alpha9 + 255 / 10;
			}
			if (count > 21) {
				textFont(myFont, 40);
				fill(132, 172, 134, alpha9);
				text("L o a d i n g", 410, 647);
				noStroke();
				fill(132, 172, 134, 255);
				ellipse(660, 640, radius1, radius1);
				if (expand1 === true) {
					radius1 = radius1 + 0.5;
				}
				if (radius1 === 15) {
					expand1 = false;
				}
				if (expand1 === false) {
					radius1 = radius1 - 0.5;
				}
				if (radius1 === 0) {
					expand1 = true;
				}
			}
			if (count > 41) {
				noStroke();
				fill(132, 172, 134, 255);
				ellipse(720, 640, radius2, radius2);
				if (expand2 === true) {
					radius2 = radius2 + 0.5;
				}
				if (radius2 === 15) {
					expand2 = false;
				}
				if (expand2 === false) {
					radius2 = radius2 - 0.5;
				}
				if (radius2 === 0) {
					expand2 = true;
				}
			}
			if (count > 61) {
				noStroke();
				fill(132, 172, 134, 255);
				ellipse(780, 640, radius3, radius3);
				if (expand3 === true) {
					radius3 = radius3 + 0.5;
				}
				if (radius3 === 15) {
					expand3 = false;
				}
				if (expand3 === false) {
					radius3 = radius3 - 0.5;
				}
				if (radius3 === 0) {
					expand3 = true;
				}
			}
			if (count > 81) {
				noStroke();
				fill(132, 172, 134, 255);
				ellipse(840, 640, radius4, radius4);
				if (expand4 === true) {
					radius4 = radius4 + 0.5;
				}
				if (radius4 === 15) {
					expand4 = false;
				}
				if (expand4 === false) {
					radius4 = radius4 - 0.5;
				}
				if (radius4 === 0) {
					expand4 = true;
				}
			}
            //////////////////////////// ANIMATED UI ABOVE ////////////////////////////////// 
		}
	}

	
	// PAGE 4: POEM DISPLAY
	// On this page, you can select a screen name, then his/her poem will display
	if (page4Here === true) {
		count = count + 1;
		background(color(58, 61, 73, alpha11))
		if (count < 51) {
			alpha11 = alpha11 + 255 / 50;
		}
		
		//////////////////////////// ANIMATED UI BELOW //////////////////////////////////
		// Animation for a book to pop up
		// The book will pop up after 50 frames since the page 2 starts
		// And this animation will end after 100 frames
		if (count >= 51 && count <= 100) {
			image(book, 670, 362, bx, by);
			bx = bx + 988 / 50;
			by = by + 624 / 50;
		}
		// Animation for some cards to pop up
		// Then it will start an animation loop
		if (count > 100) {
			image(book, 670, 362, bx, by);
			if (count <= 131) {
				image(card1, 210, 180, cdr1, cdr1);
				cdr1 = cdr1 + 210 / 30;
			}
		}
		if (count > 131) {
			image(card1, 210, 180, cdr1, cdr1);
			if (cdr1 === 218) {
				expand1 = false;
			}
			if (expand1 === false) {
				cdr1 = cdr1 - 40 / 80;
			}
			if (cdr1 === 178) {
				expand1 = true;
			}
			if (expand1 === true) {
				cdr1 = cdr1 + 40 / 80;
			}
			if (cdr1 === 218) {
				expand1 = false;
			}
			if (count <= 162) {
				image(card2, 160, 370, cdr2, cdr2);
				cdr2 = cdr2 + 210 / 30;
			}
		}
		if (count > 162) {
			image(card2, 160, 370, cdr2, cdr2);
			if (cdr2 === 218) {
				expand2 = false;
			}
			if (expand2 === false) {
				cdr2 = cdr2 - 40 / 80;
			}
			if (cdr2 === 178) {
				expand2 = true;
			}
			if (expand2 === true) {
				cdr2 = cdr2 + 40 / 80;
			}
			if (cdr2 === 218) {
				expand2 = false;
			}
			if (count <= 193) {
				image(card3, 220, 555, cdr3, cdr3);
				cdr3 = cdr3 + 210 / 30;
			}
		}
		if (count > 193) {
			image(card3, 220, 555, cdr3, cdr3);
			if (cdr3 === 218) {
				expand3 = false;
			}
			if (expand3 === false) {
				cdr3 = cdr3 - 40 / 80;
			}
			if (cdr3 === 178) {
				expand3 = true;
			}
			if (expand3 === true) {
				cdr3 = cdr3 + 40 / 80;
			}
			if (cdr3 === 218) {
				expand3 = false;
			}
			if (count < 253) {
				textFont("helvetica", 16);
				fill(58, 61, 73, alpha12);
				text('You can select the Twitter accounts above', 310, 425);
				text('to see their poems. If you think one of them', 310, 445);
				text('was werewolf, you can click "Report This', 310, 465);
				text('Poem" button to report it to mayor.', 310, 485);
				alpha12 = alpha12 + 255 / 60;
			}
			if (count >= 253) {
				textFont("helvetica", 16);
				fill(58, 61, 73, 255);
				text('You can select the Twitter accounts above', 310, 425);
				text('to see their poems. If you think one of them', 310, 445);
				text('was werewolf, you can click "Report This', 310, 465);
				text('Poem" button to report it to mayor.', 310, 485);
			}

			for (i = 0; i < 4; i++) {
				if (twis[i].selected === true) {
					selectArray[i].style("background-color", "#3a3d49");
					selectArray[i].style("color", "#c6cbb3");

					poemDisplayArray[i].show();

				} else {
					selectArray[i].style("background-color", "#bcbcbb");
					selectArray[i].style("color", "#3a3d49");
					poemDisplayArray[i].hide();
				}
			}
		}
		//////////////////////////// ANIMATED UI ABOVE //////////////////////////////////
		
		// DOM elements are created to help people to select the poem they want to read
		// There is also another button to help people move on to the next page
		// "selected" property in "twis" obejct will help to identify if this poem is selected
		if (count === 193) {
			select1 = createDiv(twis[0].name);
			select2 = createDiv(twis[1].name);
			select3 = createDiv(twis[2].name);
			select4 = createDiv(twis[3].name);
			select1.class("select");
			select2.class("select");
			select3.class("select");
			select4.class("select");
			select1.position(310, 200);
			select2.position(310, 250);
			select3.position(310, 300);
			select4.position(310, 350);
			// These functions will set "selected" property as "true" or "false" to determine which one is selected
			select1.mouseClicked(selected1);
			select2.mouseClicked(selected2);
			select3.mouseClicked(selected3);
			select4.mouseClicked(selected4);
			selectArray.push(select1);
			selectArray.push(select2);
			selectArray.push(select3);
			selectArray.push(select4);
			button3 = createDiv("Report This Poem");
			button3.class("button3");
			button3.position(320, 510);
			// When this button is clicked, page5 function will start to send player into next page
			button3.mouseClicked(page5);
			poemDisplay();
		}

	}

	
	
	// PAGE 5: RESULT PAGE
	if (page5Here === true) {
		count = count + 1;
		background(color(58, 61, 73, alpha13))
		if (count < 51) {
			alpha13 = alpha13 + 255 / 50;
		}
	}


}


// This is a function to initiate the elements in page 2
// It will set up a canvas
function page2() {

	var canvas = createCanvas(1280, 725);
	frameRate(40);

	canvas.position(0, 0);
	canvas.style("visibility", "visible");
	canvas.class("canvas");
	page2Here = true;

}


// In this function, the Twitter screen names will be saved into an array, which might be used to pull their tweets
// At the same time, it will also set the page indicator to help player move on to next page
function page3() {
	twi.push(input1.value());
	twi.push(input2.value());
	twi.push(input3.value());
	twi.push(input4.value());
	twi1.name = twi[0];
	twi2.name = twi[1];
	twi3.name = twi[2];
	twi4.name = twi[3];
	// This is a function to format the screen names player input as something the codebird can use  
	formatInput();
	input1.remove();
	input2.remove();
	input3.remove();
	input4.remove();
	button1.remove();
	page3Here = true;
	page2Here = false;
	count = 0;
	// In these functions, words in tweets will be retrieved
	getTweets1();
	getTweets2();
	getTweets3();
	getTweets4();
}


// OBJECTS ARE USED
// In this function, the words from tweets will saved into some objects which will help to make each information of these Twitter accounts keep connected
// Each of the objects will contain their noun words array, verb words array, adjective words array, a "wereWolf" property to document if it is a wereworf, a "selected" property to document if it is selected, a poem property to document its poem
// They will saved into an array called "twis"
// I'll call them "twis" object in the comments

// At the same time, it will also set the page indicator to help player move on to next page
// The identities of werewolf and villagers will be randomly assigned to each Twitter account
// poemGenerator function will start to create poems
function page4() {
	page4Here = true;
	page3Here = false;
	count = 0;
	button2.remove();
	twi1.noun = noun1;
	twi2.noun = noun2;
	twi3.noun = noun3;
	twi4.noun = noun4;
	twi1.verb = verb1;
	twi2.verb = verb2;
	twi3.verb = verb3;
	twi4.verb = verb4;
	twi1.adj = adj1;
	twi2.adj = adj2;
	twi3.adj = adj3;
	twi4.adj = adj4;
	// Set the default poem to be displayed
	twi1.selected = true;
	// Randomly, choose one twitter account as the werewolf in the game
	var N = Math.floor(Math.random() * 4)
	twis[N].wereWolf = true;
	console.log(twis)
	// This function will use the words we get to create four different poems
	poemGenerator();

}


// In this function, DOM elements will be generated to contain the identities of each people
// Your result will also be displayed
function page5() {
	var resultImage, resultText;
	var img1, img2, img3, img4;
	var identityImage = [img1, img2, img3, img4];
	var name1 = createDiv(twis[0].name),
		name2 = createDiv(twis[1].name),
		name3 = createDiv(twis[2].name),
		name4 = createDiv(twis[3].name);
	var nameArray = [name1, name2, name3, name4];
	var t1 = createP(""),
		t2 = createP(""),
		t3 = createP(""),
		t4 = createP("");
	var tArray = [t1, t2, t3, t4];
	page4Here = false;
	page5Here = true;
	count = 0;
	poemDisplay1.remove();
	poemDisplay2.remove();
	poemDisplay3.remove();
	poemDisplay4.remove();
	select1.remove();
	select2.remove();
	select3.remove();
	select4.remove();
	button3.remove();


	for (i = 0; i < 4; i++) {
		// These conditional statements will help to identify if you choose the werewolf's poem
		if (twis[i].wereWolf === true) {
			// The identity of the werewolf to be shown
			identityImage[i] = createImg("Media/card1.png");
			nameArray[i].class("name1");
			tArray[i].html("Werewolf");
			// If you choose the right one,
			if (twis[i].selected === true) {
				resultImage = createImg('Media/con.png');
				resultText = createDiv("You found the real werewolf. Now everybody is safe. You are such a hero! The real identities of your friends are:");
			}
			// If you choose the wrong one,
			if (twis[i].selected === false) {
				resultImage = createImg('Media/over.png');
				resultText = createDiv("You chose the wrong one. This whole village is occupied by terror now. The real identities of your friends are:");
			}
			resultImage.class("result");
			resultImage.position(310, 20);
			resultText.class("resultText");
			resultText.position(370, 120);
		} else {
			// The identities of the villagers to be shown
			identityImage[i] = createImg("Media/card3.png");
			nameArray[i].class("name2");
			tArray[i].html("Villager");
		}
		tArray[i].class("iText");

	}
	identityImage[0].class("identity");
	identityImage[1].class("identity");
	identityImage[2].class("identity");
	identityImage[3].class("identity");
	identityImage[0].position(250, 180);
	identityImage[1].position(250, 290);
	identityImage[2].position(250, 400);
	identityImage[3].position(250, 510);

	name1.position(370, 215);
	name2.position(370, 325);
	name3.position(370, 435);
	name4.position(370, 545);

	t1.position(380, 175);
	t2.position(380, 285);
	t3.position(380, 395);
	t4.position(380, 505);

	// Create a button to help the player refresh this page
	button4 = createDiv("Play Again")
	button4.position(420, 650);
	button4.class("button4");
	button4.mouseClicked(reload);
}


// This function will be used to format the Twitter screen names people input
// It will delete the "@" at the beginning
function formatInput() {
	console.log(twi);
	for (i = 0; i < 4; i++) {
		twi[i] = twi[i].trim();
		twi[i] = twi[i].substr(1, twi[i].length + 1);
	}
	console.log(twi);
}


//////////////////////////// FUNCTIONS USING TWITTER API BELOW //////////////////////////////////
// Codebird is used to retrieve tweets from twitter accounts
// Twitter API "statuses_userTimeline" is used
function getTweets1() {

	var tweet = [],
		tweets = [],
		sen;

	// Get the tweets from the first account
	var params = {
		screen_name: twi[0],
		count: 70
	};

	cb.__call(

		"statuses_userTimeline",

		params,


		function (reply, rate, err) {
			// First, I pushed each tweet into an array
			for (i = 0; i < reply.length; i++) {
				sen = reply[i].text;
				tweet.push(sen);
			}
			// Then I tokenize them, seperating them into multiple words
			for (i = 0; i < reply.length; i++) {
				tweets = tweets.concat(RiTa.tokenize(tweet[i]))
			}
			// Use RiTaJS isNoun function to get all of the nouns in the tweets
			// Singularize them at the same time
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isNoun(tweets[i]) === true) {
					noun1.push(RiTa.singularize(tweets[i]));
				}
			}
			// Use RiTaJS isVerb function to get all of the verbs in the tweets
			// Turn them into past tense at the same time
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isVerb(tweets[i]) === true) {
					verb1.push(RiTa.conjugate(tweets[i], args));
				}
			}
			// Use RiTaJS isAdjective function to get all of the adjectives in the tweets
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isAdjective(tweets[i]) === true) {
					adj1.push(tweets[i]);
				}
			}

			console.log(params)
			console.log(noun1)
			console.log(verb1)
			console.log(adj1)
			// if this task is finished, add 1 to "loading" variable
			// This will be used to help test if we can continue
			loading = loading + 1;
		}

	);


}


// The following three are similar to the first one
// No repeated comments for them
function getTweets2() {

	var tweet = [],
		tweets = [],
		sen;


	// Get the tweets from the second account
	var params = {
		screen_name: twi[1],
		count: 70
	};

	cb.__call(

		"statuses_userTimeline",

		params,


		function (reply, rate, err) {
			for (i = 0; i < reply.length; i++) {
				sen = reply[i].text;
				tweet.push(sen);
			}
			for (i = 0; i < reply.length; i++) {
				tweets = tweets.concat(RiTa.tokenize(tweet[i]))
			}
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isNoun(tweets[i]) === true) {
					noun2.push(RiTa.singularize(tweets[i]));
				}
			}
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isVerb(tweets[i]) === true) {
					verb2.push(RiTa.conjugate(tweets[i], args));
				}
			}
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isAdjective(tweets[i]) === true) {
					adj2.push(tweets[i]);
				}
			}
			console.log(params)
			console.log(noun2)
			console.log(verb2)
			console.log(adj2)
			loading = loading + 1;
		}

	);


}


function getTweets3() {

	var tweet = [],
		tweets = [],
		sen;


	// Get the tweets from the third account
	var params = {
		screen_name: twi[2],
		count: 70
	};

	cb.__call(

		"statuses_userTimeline",

		params,


		function (reply, rate, err) {
			for (i = 0; i < reply.length; i++) {
				sen = reply[i].text;
				tweet.push(sen);
			}
			for (i = 0; i < reply.length; i++) {
				tweets = tweets.concat(RiTa.tokenize(tweet[i]))
			}
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isNoun(tweets[i]) === true) {
					noun3.push(RiTa.singularize(tweets[i]));
				}
			}
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isVerb(tweets[i]) === true) {
					verb3.push(RiTa.conjugate(tweets[i], args));
				}
			}
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isAdjective(tweets[i]) === true) {
					adj3.push(tweets[i]);
				}
			}
			console.log(params)
			console.log(noun3)
			console.log(verb3)
			console.log(adj3)
			loading = loading + 1;
		}

	);


}


function getTweets4() {

	var tweet = [],
		tweets = [],
		sen;


	// Get the tweets from the fouth account
	var params = {
		screen_name: twi[3],
		count: 70
	};

	cb.__call(

		"statuses_userTimeline",

		params,


		function (reply, rate, err) {
			for (i = 0; i < reply.length; i++) {
				sen = reply[i].text;
				tweet.push(sen);
			}
			for (i = 0; i < reply.length; i++) {
				tweets = tweets.concat(RiTa.tokenize(tweet[i]))
			}
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isNoun(tweets[i]) === true) {
					noun4.push(RiTa.singularize(tweets[i]));
				}
			}
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isVerb(tweets[i]) === true) {
					verb4.push(RiTa.conjugate(tweets[i], args));
				}
			}
			for (i = 0; i < tweets.length; i++) {
				if (RiTa.isAdjective(tweets[i]) === true) {
					adj4.push(tweets[i]);
				}
			}
			console.log(params)
			console.log(noun4)
			console.log(verb4)
			console.log(adj4)
			loading = loading + 1;
		}

	);


}
//////////////////////////// FUNCTIONS USING TWITTER API ABOVE //////////////////////////////////


//////////////////////////// FUNCTIONS TO DETERMINE WHICH POEM IS SELECTED BELOW //////////////////////////////////
// If the first Twitter account is selected, then set its "selected" property as true
// Set the rest as false
function selected1() {
	twi1.selected = true;
	twi2.selected = false;
	twi3.selected = false;
	twi4.selected = false;
}


// If the second Twitter account is selected, then set its "selected" property as true
// Set the rest as false
function selected2() {
	twi2.selected = true;
	twi1.selected = false;
	twi3.selected = false;
	twi4.selected = false;
}


// If the third Twitter account is selected, then set its "selected" property as true
// Set the rest as false
function selected3() {
	twi3.selected = true;
	twi1.selected = false;
	twi2.selected = false;
	twi4.selected = false;
}


// If the fourth Twitter account is selected, then set its "selected" property as true
// Set the rest as false
function selected4() {
	twi4.selected = true;
	twi1.selected = false;
	twi2.selected = false;
	twi3.selected = false;
}
//////////////////////////// FUNCTIONS TO DETERMINE WHICH POEM IS SELECTED ABOVE //////////////////////////////////


//////////////////////////// POETRY RELATED FUNCTIONS BELOW //////////////////////////////////
// This function will be used to filter all of the inappropriate words in each array
function filterWords() {
	var N
	for (i = 0; i < 4; i++) {
		// First, delete any undefined elements	
		twis[i].noun = twis[i].noun.filter(function (element) {
			return element !== undefined;
		});
		twis[i].adj = twis[i].adj.filter(function (element) {
			return element !== undefined;
		});
		twis[i].verb = twis[i].verb.filter(function (element) {
			return element !== undefined;
		});
		// Second, I'll turn all of the words into lowercase
		for (j = 0; j < twis[i].verb.length; j++) {
			twis[i].verb[j] = twis[i].verb[j].toLowerCase();
		}
		for (j = 0; j < twis[i].noun.length; j++) {

			twis[i].noun[j] = twis[i].noun[j].toLowerCase();
		}
		for (j = 0; j < twis[i].adj.length; j++) {
			twis[i].adj[j] = twis[i].adj[j].toLowerCase();
		}
		// Third, I'll fix a tense problem caused by RiTaJS
		// Because some verbs in tweets are already in past tense, they don't need to be added more "ed"s
		// There are some verbs transformed into wrong one
		// I also need to delete them	
		twis[i].verb = twis[i].verb.filter(function (element) {
			return element !== undefined && element !== "willed" && element !== "canned" && element !== "tilled" && element !== "bettered" && element !== "gonnaed" && element !== "was" && element !== "doed" && element !== "doesd" && element !== "did" && element !== "bested" && element !== "hased"  && element !== "been"
		});

		for (j = 0; j < twis[i].verb.length; j++) {
			N = twis[i].verb[j];
			if (N.substr(N.length - 4, 4) === "eded") {
				twis[i].verb[j] = N.substring(0, N.length - 2);
			}
			if (N.substr(N.length - 5, 5) === "inged") {
				twis[i].verb[j] = N.substring(0, N.length - 5) + "ed"
			}
			if (N.substr(N.length - 3, 3) === "ang") {
				console.log("yes" + N);
				twis[i].verb[j] = N.substring(0, N.length - 3) + "ed"
				console.log(twis[i].verb[j]);
			}
			if (N === "hased" || N === "haved" || N === "haded") {
				twis[i].verb[j] = "had"
			}
			if (N === "maked" || N === "maded" || N === "makesed") {
				twis[i].verb[j] = "made"
			}
			if (N === "sawed" || N === "seed" || N === "seesed") {
				twis[i].verb[j] = "saw"
			}
			if (N === "goted" || N === "getsed" || N === "geted" || N === "getted") {
				twis[i].verb[j] = "got"
			}
			if (N === "camed" || N === "comed" || N === "becamed" || N === "becomed") {
				twis[i].verb[j] = "got"
			}
			if (N === "goinged" || N === "goed" || N === "wented" || N === "goesed") {
				twis[i].verb[j] = "went"
			}
			if (N === "taked" || N === "takes" || N === "tooked" || N === "takened") {
				twis[i].verb[j] = "took"
			}
			if (N.substr(N.length - 3, 3) === "sed" && N.substr(N.length - 4, 4) !== "ssed" && N !== "pleased" && N !== "licensed" &&
				N !== "surprised" && N !== "raised" && N !== "used") {
				if (N.substr(N.length - 4, 4) === "esed") {
					twis[i].verb[j] = N.substring(0, N.length - 3) + "d"
				} else {
					twis[i].verb[j] = N.substring(0, N.length - 3) + "ed"
				}
			}

		}
		// Then I will set several black lists to delete any undefined elements and inappropriate words in each category
		twis[i].noun = twis[i].noun.filter(function (element) {
			return element !== undefined && element !== "in" && element !== "for" && element !== "will" && element !== "want" && element !== "in" && element !== "have" && element !== "can" && element !== "let" && element !== "like" && element !== "more" && element !== "now" && element !== "go" && element !== "find" && element !== "think" && element !== "real" && element !== "most" && element !== "say" && element !== "out" && element !== "right" && element !== "but" && element !== "still" && element !== "that" && element !== "behind" && element !== "west" && element !== "east" && element !== "coming" && element !== "then" && element !== "much" && element !== "last" && element !== "no" && element !== "today" &&
				element !== "best" && element !== "better" && element !== "some" && element !== "going" && element !== "plus" && element !== "good" && element !== "come" && element !== "down" && element !== "no" && element !== "doing" && element !== "open" && element !== "first" && element !== "make" && element !== "back" && element !== "under" && element !== "above" && element !== "below" && element !== "werewolf"
		});

		twis[i].verb = twis[i].verb.filter(function (element) {
			return element !== undefined;
		});
		twis[i].adj = twis[i].adj.filter(function (element) {
			return element !== undefined && element !== "on" && element !== "for" && element !== "like" && element !== "with" && element !== "an" && element !== "about" && element !== "out" && element !== "put" && element !== "have" && element !== "but" && element !== "been" && element !== "now" && element !== "through" && element !== "behind" && element !== "just" && element !== "go" && element !== "then" && element !== "An" && element !== "much" && element !== "more" && element !== "most" && element !== "going" && element !== "today" && element !== "another" && element !== "with" && element !== "much" && element !== "come" && element !== "down" && element !== "no" && element !== "many" && element !== "other" && element !== "year" && element !== "first" && element !== "very" && element !== "made" && element !== "next" && element !== "while" && element !== "under" && element !== "above" && element !== "below" && element !== "back"
		});
		console.log(twis[i].verb);
	}

}


// This function will create poems
function poemGenerator() {
	// Building the grammatic templates of the gothic poems
	// I prepared 15 pairs of sentences to be the templates of the poem, they are saved in four arrays
	// RULES: werewolf will never say the word "werewolf" in his/her poems
	// RULES: villagers must say the word "werewolf" in their poems
	// temp1 and temp2 are used to save all of the templates
	// temp3 and temp4 are used to save sentences containing the word "werewolf"
	var temp1 = ["It was a night, <adj1> and <adj2>.",
		"Cursed by the <adj1> <n1>,",
		"The moon <v1>, <adj1> and <adj2>,",
		"After the <n1> <v1> towards the <n2>,",
		"Not far from the <adj1> <n1>,",
		"Hidden in the <n1>,",
		"Trembling in the <n1>,",
		"The <adj1> <n1> from every tomb,",
		"Upon a <n1> dreary,",
		"Suddenly my soul grew <adj1>,",
		"Villagers <v1> in <n1> and <n2>,",
		"The werewolf <v1> in a ghastly <n1>,",
		"Out of the darkness came <adj1> <n1>,",
		"For that it shined a <adj1> <n1>,",
		"By the <n1> of the <adj1> <n2>,"
	]
	var temp2 = ["A dark <n1> <v1>, <adj3> and <adj4>.",
		"the <adj2> <n2> <v1> gradually to your <n3>.",
		"the ominous <n1> <v2> at night.",
		"even the <n3> screamed with <adj1> eyes.",
		"howls were <adj2> while claws were <adj3>.",
		"beneath the <adj1> <n2>.",
		"shivering by the <n2>.",
		"were closing in till it <v1> my <n2>.",
		"while I <v1>, <adj1> and <adj2>.",
		"long I stood to avoid the <n1>.",
		"hidden in a corner till the <n3> <v1>.",
		"towards the <n2> with a <adj1> <n3>.",
		"as the werewolf <v1>, <adj2> and <adj3>.",
		"deep into the darkness the werewolf <v1>.",
		"the werewolf <v1> and slowly <v2>."

	]

	var temp3 = [
		"The werewolf <v1> in a ghastly <n1>,",
		"Out of the darkness came <adj1> <n1>,",
		"For that it shined a <adj1> <n1>,",
		"By the <n1> of the <adj1> <n2>,"
	]

	var temp4 = ["towards the <n2> with a <adj1> <n3>.",
		"as the werewolf <v1>, <adj2> and <adj3>.",
		"deep into the darkness the werewolf <v1>.",
		"the werewolf <v1> and slowly <v2>."
	]

	// FilterWords function will be used to get undefined elements off the array,
	// it will also help me to delete some inappropriate words RiTaJS gets
	filterWords();
    
	
	//////////////////////////// POEM ASSEMBLING //////////////////////////////////
	// GENERAL RULES
	// The poem consists of 14 sentences
	// The sentences of odd number will be chosen randomly from temp1 array
	// The sentences of even number will be chosen randonly from temp2 array
	// The sentence in temp1 array is connected with the sentence in temp2 array
	// At last, all of the sentences will be pushed into an array
	// This array will be saved as one of the properties in "twis" objects
	var rg, result, k, N1, N2, N3, N4, N5, N6, N7, N8, N9;
	for (i = 0; i < 4; i++) {
		// the "wereWolf" property is used to test if this people was the werewolf
		// If the boolean is false, it means this person is a very common villager
		// They would mention "werewolf" in their poems
		// The following rule will make sure that they will mention "werewolf" in their poems
		// The sentence 13 and 14 will respectively choose a sentence from temp3 and temp4,
		// which will make sure "werewolf" is mentioned
		if (twis[i].wereWolf === false) {
			for (j = 1; j < 15; j++) {
				if (j < 13) {
					if (j % 2 === 1) {
						k = Math.floor(Math.random() * 15);
						N1 = Math.floor(Math.random() * twis[i].noun.length);
						N2 = Math.floor(Math.random() * twis[i].noun.length);
						N3 = Math.floor(Math.random() * twis[i].noun.length);
						N4 = Math.floor(Math.random() * twis[i].verb.length);
						N5 = Math.floor(Math.random() * twis[i].verb.length);
						N6 = Math.floor(Math.random() * twis[i].adj.length);
						N7 = Math.floor(Math.random() * twis[i].adj.length);
						N8 = Math.floor(Math.random() * twis[i].adj.length);
						N9 = Math.floor(Math.random() * twis[i].adj.length);
						rg = new RiGrammar();
						rg.addRule("<start>", "<part1>");
						rg.addRule("<part1>", temp1[k], 1);
						rg.addRule("<n1>", twis[i].noun[N1]);
						rg.addRule("<n2>", twis[i].noun[N2]);
						rg.addRule("<n3>", twis[i].noun[N3]);
						rg.addRule("<v1>", twis[i].verb[N4]);
						rg.addRule("<v2>", twis[i].verb[N5]);
						rg.addRule("<adj1>", twis[i].adj[N6]);
						rg.addRule("<adj2>", twis[i].adj[N7]);
						rg.addRule("<adj3>", twis[i].adj[N8]);
						rg.addRule("<adj4>", twis[i].adj[N9]);
						result = rg.expand();
						twis[i].poem.push(result);
					} else {
						N1 = Math.floor(Math.random() * twis[i].noun.length);
						N2 = Math.floor(Math.random() * twis[i].noun.length);
						N3 = Math.floor(Math.random() * twis[i].noun.length);
						N4 = Math.floor(Math.random() * twis[i].verb.length);
						N5 = Math.floor(Math.random() * twis[i].verb.length);
						N6 = Math.floor(Math.random() * twis[i].adj.length);
						N7 = Math.floor(Math.random() * twis[i].adj.length);
						N8 = Math.floor(Math.random() * twis[i].adj.length);
						N9 = Math.floor(Math.random() * twis[i].adj.length);

						rg = new RiGrammar();
						rg.addRule("<start>", "<part2>");
						rg.addRule("<part2>", temp2[k], 1);
						rg.addRule("<n1>", twis[i].noun[N1]);
						rg.addRule("<n2>", twis[i].noun[N2]);
						rg.addRule("<n3>", twis[i].noun[N3]);
						rg.addRule("<v1>", twis[i].verb[N4]);
						rg.addRule("<v2>", twis[i].verb[N5]);
						rg.addRule("<adj1>", twis[i].adj[N6]);
						rg.addRule("<adj2>", twis[i].adj[N7]);
						rg.addRule("<adj3>", twis[i].adj[N8]);
						rg.addRule("<adj4>", twis[i].adj[N9]);
						result = rg.expand();
						twis[i].poem.push(result);
					}
				}
				if (j === 13) {
					k = Math.floor(Math.random() * 4);
					N1 = Math.floor(Math.random() * twis[i].noun.length);
					N2 = Math.floor(Math.random() * twis[i].noun.length);
					N3 = Math.floor(Math.random() * twis[i].noun.length);
					N4 = Math.floor(Math.random() * twis[i].verb.length);
					N5 = Math.floor(Math.random() * twis[i].verb.length);
					N6 = Math.floor(Math.random() * twis[i].adj.length);
					N7 = Math.floor(Math.random() * twis[i].adj.length);
					N8 = Math.floor(Math.random() * twis[i].adj.length);
					N9 = Math.floor(Math.random() * twis[i].adj.length);
					rg = new RiGrammar();
					rg.addRule("<start>", "<part1>");
					rg.addRule("<part1>", temp3[k], 1);
					rg.addRule("<n1>", twis[i].noun[N1]);
					rg.addRule("<n2>", twis[i].noun[N2]);
					rg.addRule("<n3>", twis[i].noun[N3]);
					rg.addRule("<v1>", twis[i].verb[N4]);
					rg.addRule("<v2>", twis[i].verb[N5]);
					rg.addRule("<adj1>", twis[i].adj[N6]);
					rg.addRule("<adj2>", twis[i].adj[N7]);
					rg.addRule("<adj3>", twis[i].adj[N8]);
					rg.addRule("<adj4>", twis[i].adj[N9]);
					result = rg.expand();
					twis[i].poem.push(result);

				}
				if (j === 14) {
					N1 = Math.floor(Math.random() * twis[i].noun.length);
					N2 = Math.floor(Math.random() * twis[i].noun.length);
					N3 = Math.floor(Math.random() * twis[i].noun.length);
					N4 = Math.floor(Math.random() * twis[i].verb.length);
					N5 = Math.floor(Math.random() * twis[i].verb.length);
					N6 = Math.floor(Math.random() * twis[i].adj.length);
					N7 = Math.floor(Math.random() * twis[i].adj.length);
					N8 = Math.floor(Math.random() * twis[i].adj.length);
					N9 = Math.floor(Math.random() * twis[i].adj.length);
					rg = new RiGrammar();
					rg.addRule("<start>", "<part1>");
					rg.addRule("<part1>", temp4[k], 1);
					rg.addRule("<n1>", twis[i].noun[N1]);
					rg.addRule("<n2>", twis[i].noun[N2]);
					rg.addRule("<n3>", twis[i].noun[N3]);
					rg.addRule("<v1>", twis[i].verb[N4]);
					rg.addRule("<v2>", twis[i].verb[N5]);
					rg.addRule("<adj1>", twis[i].adj[N6]);
					rg.addRule("<adj2>", twis[i].adj[N7]);
					rg.addRule("<adj3>", twis[i].adj[N8]);
					rg.addRule("<adj4>", twis[i].adj[N9]);
					result = rg.expand();
					twis[i].poem.push(result);

				}
			}
			j = 1;
			console.log(twis[i].poem);
		}
		// If this person is a werewolf, he/she would avoid mentioning the word "werewolf" in poem
		// The following rule will make sure that they won't use template with "werewolf" in it
		// From temp1[0] to temp1[10] and temp2[0] to temp2[10], no templates mention "werwolf"
		// So these are the templates will be used for a person who is a werewolf
		else {
			for (j = 1; j < 15; j++) {
				if (j % 2 === 1) {
					k = Math.floor(Math.random() * 11);
					N1 = Math.floor(Math.random() * twis[i].noun.length);
					N2 = Math.floor(Math.random() * twis[i].noun.length);
					N3 = Math.floor(Math.random() * twis[i].noun.length);
					N4 = Math.floor(Math.random() * twis[i].verb.length);
					N5 = Math.floor(Math.random() * twis[i].verb.length);
					N6 = Math.floor(Math.random() * twis[i].adj.length);
					N7 = Math.floor(Math.random() * twis[i].adj.length);
					N8 = Math.floor(Math.random() * twis[i].adj.length);
					N9 = Math.floor(Math.random() * twis[i].adj.length);
					rg = new RiGrammar();
					rg.addRule("<start>", "<part1>");
					rg.addRule("<part1>", temp1[k], 1);
					rg.addRule("<n1>", twis[i].noun[N1]);
					rg.addRule("<n2>", twis[i].noun[N2]);
					rg.addRule("<n3>", twis[i].noun[N3]);
					rg.addRule("<v1>", twis[i].verb[N4]);
					rg.addRule("<v2>", twis[i].verb[N5]);
					rg.addRule("<adj1>", twis[i].adj[N6]);
					rg.addRule("<adj2>", twis[i].adj[N7]);
					rg.addRule("<adj3>", twis[i].adj[N8]);
					rg.addRule("<adj4>", twis[i].adj[N9]);
					result = rg.expand();
					twis[i].poem.push(result);
				} else {
					N1 = Math.floor(Math.random() * twis[i].noun.length);
					N2 = Math.floor(Math.random() * twis[i].noun.length);
					N3 = Math.floor(Math.random() * twis[i].noun.length);
					N4 = Math.floor(Math.random() * twis[i].verb.length);
					N5 = Math.floor(Math.random() * twis[i].verb.length);
					N6 = Math.floor(Math.random() * twis[i].adj.length);
					N7 = Math.floor(Math.random() * twis[i].adj.length);
					N8 = Math.floor(Math.random() * twis[i].adj.length);
					N9 = Math.floor(Math.random() * twis[i].adj.length);

					rg = new RiGrammar();
					rg.addRule("<start>", "<part2>");
					rg.addRule("<part2>", temp2[k], 1);
					rg.addRule("<n1>", twis[i].noun[N1]);
					rg.addRule("<n2>", twis[i].noun[N2]);
					rg.addRule("<n3>", twis[i].noun[N3]);
					rg.addRule("<v1>", twis[i].verb[N4]);
					rg.addRule("<v2>", twis[i].verb[N5]);
					rg.addRule("<adj1>", twis[i].adj[N6]);
					rg.addRule("<adj2>", twis[i].adj[N7]);
					rg.addRule("<adj3>", twis[i].adj[N8]);
					rg.addRule("<adj4>", twis[i].adj[N9]);
					result = rg.expand();
					twis[i].poem.push(result);
				}
			}

		}
	}

}


// This function will create DOM elements to created a selective interface to display four poems
// UI STUFF
function poemDisplay() {
	var p, k;
	// The divs to contain four poems are created
	// They are pushed into an array for loop operation
	poemDisplay1 = createDiv("");
	poemDisplay2 = createDiv("");
	poemDisplay3 = createDiv("");
	poemDisplay4 = createDiv("");
	poemDisplayArray.push(poemDisplay1);
	poemDisplayArray.push(poemDisplay2);
	poemDisplayArray.push(poemDisplay3);
	poemDisplayArray.push(poemDisplay4);
	// Set position, class for divs
	// Hide them if they are not selected
	// Then create <p> to contain sentences
	for (i = 0; i < 4; i++) {
		poemDisplayArray[i].position(730, 111);
		poemDisplayArray[i].hide();
		poemDisplayArray[i].class("display");
		for (j = 0; j < twis[i].poem.length; j++) {
			p = createP(twis[i].poem[j]);
			p.class("sentence");
			poemDisplayArray[i].child(p);
			k = j + 1;
			if (k % 4 === 0) {
				p = createElement("br")
				poemDisplayArray[i].child(p);
			}
		}
		p = createP("When the darkness falls across the land,");
		p.class("sentence");
		poemDisplayArray[i].child(p);
		p = createP("take a deep breath and close your eyes.");
		p.class("sentence");
		poemDisplayArray[i].child(p);
	}




}
//////////////////////////// POETRY RELATED FUNCTIONS ABOVE //////////////////////////////////


// This is a function to refresh the page
function reload() {
	window.location.reload();
}
