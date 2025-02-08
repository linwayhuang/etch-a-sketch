//Set variables
const container = document.querySelector("#container");
const sideBar = document.querySelector("#sideBar");
const slider = document.querySelector("#slider");
const gridSize = document.querySelector("#gridSize");
const colorChoice = document.querySelector("#colorPicker");
const canvas = document.querySelector("#canvas");

//Create elements, attach to other elements, and set variables
gridSize.textContent = `${slider.value} x ${slider.value}`;

//Remember that if you try to use querySelectorAll to select the elements, the return value is NOT an array.
//It looks like an array but it's actually a node list.
let buttonBrush = document.createElement("button");
buttonBrush.id = "buttonBrush";
buttonBrush.textContent = "Brush Mode";
sideBar.appendChild(buttonBrush);

let buttonRainbow = document.createElement("button");
buttonRainbow.id = "buttonRainbow";
buttonRainbow.textContent = "Rainbow Mode";
sideBar.appendChild(buttonRainbow);

let buttonShade = document.createElement("button");
buttonShade.id = "buttonShade";
buttonShade.textContent = ("Shade Mode");
sideBar.appendChild(buttonShade);

//Start
slider.addEventListener("input", (event) => {
    gridSize.textContent = event.target.value;
    //Remove all pixels
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
    }
    //For some reasons, when you have two variables (one for row and one for column) in the canvasSize function, "canvasSize()" doesn't work. I had to put in an argument to make it work
    //If you have one variable in the canvasSize function, "canvasSize()" work
    canvasSize(slider.value);
    //You can use the below method to select the elements based on class. This class can even be created inside a loop.
    const pixels = document.querySelectorAll(".square");
    
    sideBar.addEventListener("click", (event) => {
        let target = event.target;
    
        switch(target.id) {
            case "buttonBrush":
                alert("Brush Mode");
                pixels.forEach(pixel => {
                    pixel.addEventListener("mouseenter", () => {
                        pixel.style.backgroundColor = colorChoice.value; //if you put the rgb values in back bracket then it doesn't work
                    });
                });
                break;
            case "buttonRainbow":
                alert("Rainbow Mode");
                pixels.forEach(pixel => {
                    pixel.addEventListener("mouseenter", () => {
                        pixel.style.backgroundColor = randomColor();
                    });
                });
                break;
            case "buttonShade":
                alert("Shade Mode");
                pixels.forEach(pixel => {
                    let i = 0.1;
                    if (i < 1) {
                        pixel.addEventListener("mouseenter", () => {
                            pixel.style.backgroundColor = "black";
                            pixel.style.opacity = `${i}`;
                            i += 0.1;
                        });
                    }
                });
                break;
        }
    });
});




//Functions
//You can't create divs by copying and pasting the same code block, but you can create multiples of them
//by using the loop. You can access the divs from outside of the loop by its class/id
function canvasSize (size = 4) {
    for (i = 0; i < (size * size); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        canvas.appendChild(square);
        square.setAttribute("style", `border-radius: ${70 / size}px; width: ${700 / size}px; height: ${700 / size}px;`);
    }
}

function randomColor () {
    let r = Math.floor(Math.random() * 257); //return a random integer between 0 and 256
    let g = Math.floor(Math.random() * 257); //return a random integer between 0 and 256
    let b = Math.floor(Math.random() * 257); //return a random integer between 0 and 256
    return `rgb(${r}, ${g}, ${b})`;
}

//add borders: https://bscottnz.github.io/esketch/
//https://aroan-v.github.io/Etch-A-Sketch/
//code the program so canvasSize() can also run when you first load the site
//add addjustable grid length based on adjusted canvas size
//make the grid change color only when the left button is pressed. Also make the hover effect on
//each grid whereever the mouse enter but it won't do anything until the click
