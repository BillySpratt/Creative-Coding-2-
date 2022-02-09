let chartWidth = 400;
let chartHeight = 400;
let data = [30, 70, 20];
let dataNames = ["Apples", "Bananas", "Grapes"];
let scaledData = [];
let spacing = 10;
let margin = 20;
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1));
let barWidth = availableWidth / data.length;
let sideNum = 10
let sideSpacing = chartWidth / sideNum;
let sideInc;




function setup() {
    createCanvas(500, 500);
    let maxValue = max(data);
    sideInc = Math.round(maxValue) / sideNum;

    for (let i = 0; i < data.length; i++) {
        let tempVal = map(data[i], 0, max(data), 0, chartHeight)

        scaledData.push(tempVal);

    }
}


function draw() {
    background(0);
    translate(50, 450);



    stroke(255);
    strokeWeight(2);
    line(0, 0, 0, -chartHeight);
    line(0, 0, chartWidth, 0);

    stroke(255, 200);
    strokeWeight(1);
    //y-axis text
    for (let i = 0; i <= sideNum; i++) {
        stroke(255, 200);
        line(0, -sideSpacing * i, -sideNum, -sideSpacing * i);
        noStroke();
        fill(255);
        textSize(13);
        textAlign(CENTER, CENTER);
        text(sideInc * i, -30, -sideSpacing * i);
    }

    translate(margin, 0);

    //Bars
    for (let i = 0; i < data.length; i++) {
        fill(0, 255, 0);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);
        noStroke();
        fill(255);
        textSize(22);
        textAlign(CENTER, CENTER);
        text(data[i], ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i] - 10);
        text(dataNames[i], ((barWidth + spacing) * i) + barWidth / 2, margin);
    }
}