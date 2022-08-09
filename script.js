var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
    
    color1.setAttribute("value", color1.value );
	color2.setAttribute("value", color2.value);
	css.textContent = body.style.background + ";";
	
}

function colorMath() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function randonButton(){
	var random = document.createElement("button");
    random.innerHTML = "Random";
    body.appendChild(random);

    random.addEventListener("click", function(){
     randonColor() 
     css.textContent = body.style.background + ";";
    })    
}

function randonColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    var rgb = "#" + randomColor;
    var rgb2 = "#" + randomColor2;

    body.style.background = 
	"linear-gradient(to right, " 
	+ rgb 
	+ ", " 
	+ rgb2 
	+ ")";

	color1.setAttribute("value", rgb);
	color2.setAttribute("value", rgb2);
	console.log(rgb);
	console.log(rgb2)
	
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", colorMath);
window.addEventListener("load", randonButton);
