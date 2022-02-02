function setup() {
    createCanvas(width, 700);
    background(150);
}

let width = 700;
let spacing = 5;
let xOffset = spacing;
let yOffset = spacing;
let numOfBoxes = 30;
let boxwidth = (width - (spacing * (numOfBoxes + 1))) / numOfBoxes;
let totalXSpace = boxwidth + spacing;



function draw() {
    noStroke();
    drawBoxes();
}

function drawBoxes() {
    for (let j = 0; j < numOfBoxes; j++) {
        for (let i = 0; i < numOfBoxes; i++) {
            fill(255 - (i * 5), 0, j * 5);
            ellipseMode(CORNER);
            ellipse(xOffset + (i * totalXSpace), yOffset + (j * totalXSpace), boxwidth, boxwidth);
        }
    }

}