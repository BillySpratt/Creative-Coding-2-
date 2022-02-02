function setup() {
    createCanvas(600, 600);
    background(150);
}

let boxwidth = 20;
let spacing = 5;
let xOffset = 10;
let yOffset = 10;
let numOfBoxes = 10;

function draw() {
    drawBoxes();
}

function drawBoxes() {
    fill(255, 0, 0);
    noStroke();
    for (let i = 0; i <= numOfBoxes; i++) {
        let totalSpace = boxwidth + spacing;
        rect(1 * totalSpace + xOffset, yOffset, boxwidth, boxwidth);
        console.log("working");
    }

}

function clap(startnum, endnum) {
    let loopCount = endnum - startnum
    for (let i = 0; i < loopCount; i++) {
        console.log("Hi " + (startnum + 1 + i))
    }
    return "Done"
}

function addMeUp(num01, num02) {
    let total = num01 + num02;
    console.log("Ooh boy that sure was a tough one to solve")
    return total;
}

function mean(num1, num2) {
    let avg = (num1 + num2) / 2
    return avg;
}