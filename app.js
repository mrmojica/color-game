// var colors = [

// 	"rgb(255,0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255,0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"

// ]

var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent="Try Again!";
		}
	})
}


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var randomNumber = Math.floor(Math.random() * colors.length);
	console.log('#', randomNumber);
	return colors[randomNumber];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];

	//add num random colors to array
	for(var i = 0; i < num; i++) {
		//get random color and push
		arr.push(randomColor());
	}

	return arr;
}


function randomColor() {
	//pick a "red" from 0 255
	var r = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 255
	var b = Math.floor(Math.random() * 256);
	//pick a "green" from 0 255
	var g = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
