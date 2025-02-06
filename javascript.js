//Set variables
const container = document.querySelector("#container");
const sideBar = document.querySelector("#sideBar");
const canvas = document.querySelector("#canvas");

//Create elements, attach to other elements, and set variables
//Remember that if you try to use querySelectorAll to select the elements, the return value is NOT an array.
//It looks like an array but it's actually a node list.
let buttonBrush = document.createElement("button");
buttonBrush.id = "buttonBrush";
buttonBrush.textContent = "Brush Mode";
sideBar.appendChild(buttonBrush);

//Initial event listeners
sideBar.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "buttonBrush":
            alert("you win");
            break;
    }
});

//Start

//You can create an array so you can give the square unique ID, another way is that you can create a unique ID directly using ${} and class/id
const squares = [];
//For some reasons, when you have two variables (one for row and one for column) in the canvasSize function, "canvasSize()" doesn't work. I had to put in an argument to make it work
//If you have one variable in the canvasSize function, "canvasSize()" work
canvasSize(5);

//You can use the below method to select the elements based on class. This class can even be created inside a loop.
const pixels = document.querySelectorAll(".square");
pixels.forEach(pixel => {
    pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = "black";
    });
});

pixels.forEach(pixel => {
    pixel.addEventListener("mouseleave", () => {
        pixel.style.backgroundColor = "";
    });
});

//Functions
//You can't create divs by coping and pasting the same code block, but you can create multiples of them
//by using the loop. I don't know why and how the programs treats the "pixel" variable but we'll see
function canvasSize (size = 16) {
    for (i = 0; i < (size * size); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        canvas.appendChild(square);
        square.setAttribute("style", `border-radius: ${60 / size}px; width: ${600 / size}px; height: ${600 / size}px;`);
        squares.push(square);
    }
}

function hover () {

}

//add borders: https://bscottnz.github.io/esketch/
//https://aroan-v.github.io/Etch-A-Sketch/
//add addjustable grid length based on adjusted canvas size
