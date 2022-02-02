function setup() {
    createCanvas(700, 700);
    background(200);
}

function draw() {
    drawBoxes(10, color(255, 255, 0), 1);
    drawBoxes(35, color('red'), 2);

}

function drawBoxes(numBoxes, strokeColour, strokeThickness) {
    let boxsize = width / numBoxes
    for (let j = 0; j < numBoxes; j++) {
        for (let i = 0; i < numBoxes; i++) {
            noFill();
            stroke(strokeColour);
            strokeWeight(strokeThickness);
            rect(i * boxsize, j * boxsize, boxsize, boxsize);
        }
    }

}