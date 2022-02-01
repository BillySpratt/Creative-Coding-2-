function setup() {
    createCanvas(600, 600);
    background(150);
}

let boxwidth = 20;
let spacing = 5;
let xOffset, yOffset = 10;
let numOfBoxes = 10;

function draw() {
    fill(255, 0, 0);
    noStroke()
    for (let i = 0; i < numOfBoxes; i++) {
        rect(xOffset + (spacing + boxwidth), yOffset, boxwidth)
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