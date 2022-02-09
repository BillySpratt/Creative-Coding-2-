let chartWidth = 400;
let chartHeight = 400;
let data = [230, 330, 120, 240, 390, 60]
let spacing = 10;
let margin = 20;
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1));
let barWidth = availableWidth / data.length;
let sideNum = 10
let sideSpacing = chartWidth / sideNum;



function setup() {
    createCanvas(500, 500);
}


function draw() {
    background(0);
    translate(50, 450);

    fill(255, 0, 0);
    noStroke();
    textSize(20);
    text("Graph", 0, 25);

    stroke(255);
    strokeWeight(2);
    line(0, 0, 0, -400);
    line(0, 0, 400, 0);

    stroke(255, 200);
    strokeWeight(1);
    for (let i = 0; i <= sideNum; i++) {
        stroke(255, 200);
        line(0, -sideSpacing * i, -sideNum, -sideSpacing * i);
        noStroke();
        fill(255);
        textSize(13);
        textAlign(CENTER, CENTER);
        text(sideSpacing * i, -30, -sideSpacing * i);
    }

    translate(margin, 0);

    for (let i = 0; i < data.length; i++) {
        fill(0, 255, 0);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -data[i]);
        noStroke();
        fill(255);
        textSize(12);
        textAlign(LEFT, CENTER);
        text(data[i], (barWidth + spacing) * i, -data[i] - 10);
    }
}