let chartWidth = 400;
let chartHeight = 400;

//Array of objects
let data = [
    { name: 'Oranges', total: 63 },
    { name: 'Bananas', total: 33 },
    { name: 'Pears', total: 7 },
    { name: 'Apples', total: 43 },
];

//array
let listValues = data.map(function(x) {
    return x.total;
});

let scaledData = [];
let numPlaces;
let maxValue;
let posX = 50;
let posY = 450;
let spacing = 10;
let margin = 20;
let numTicks = 10;
let tickIncrements;
let showValues = true;
let showLabels = true;
let rotateLabels = true;
let colors;
let colorNumb;

let tickSpacing = chartHeight / numTicks;
let availableWidth = chartWidth - margin * 2 - spacing * (data.length - 1);
let barWidth = availableWidth / data.length;

function setup() {
    createCanvas(500, 500);
    background(0);

    colors = [
        color('#ffe066'),
        color('#fab666'),
        color('#f68f6a'),
        color('#f3646a'),
    ];
    maxValue = max(listValues);
    tickIncrements = maxValue / numTicks;

    for (let i = 0; i < data.length; i++) {
        let tempVal = map(data[i].total, 0, maxValue, 0, chartHeight);
        scaledData.push(tempVal);
    }
}

function draw() {
    background(0);

    translate(posX, posY);
    //chart axis
    stroke(255, 180);
    strokeWeight(1);
    line(0, 0, 0, -chartHeight);
    line(0, 0, chartWidth, 0);
    drawTicks();


    translate(margin, 0);
    for (let i = 0; i < scaledData.length; i++) {
        let colorNumb = i % 4;
        drawBars();

        drawLabels();
    }

    function drawTicks() {
        for (let i = 0; i <= numTicks; i++) {
            //ticks
            stroke(255, 100);
            line(0, tickSpacing * -i, -10, tickSpacing * -i);
            stroke(255, 100);
            line(0, tickSpacing * -i, chartWidth, tickSpacing * -i);

            //numbers
            fill(255, 200);
            noStroke();
            textSize(11);
            textAlign(RIGHT, CENTER);
            text((i * tickIncrements).toFixed(numPlaces), -15, tickSpacing * -i);
        }
    }

    function drawBars() {
        push()
            //bars
        fill(colors[colorNumb]);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        //Bar Value
        if (showValues) {
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(
                data[i].total,
                (barWidth + spacing) * i + barWidth / 2, -scaledData[i]
            );
        }
        pop()
    }

    function drawLabels() {
        //Bar Label
        if (showLabels) {
            if (rotateLabels) {
                push();
                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, CENTER);
                translate((barWidth + spacing) * i + barWidth / 2, 15);
                text(data[i].name, 0, 0);
                rotate(PI / 3);
                pop();
            } else {
                noStroke();
                fill(255);
                textSize(14);
                textAlign(CENTER, BOTTOM);
                text(data[i].name, (barWidth + spacing) * i + barWidth / 2, 20);
            }
        }
    }
}