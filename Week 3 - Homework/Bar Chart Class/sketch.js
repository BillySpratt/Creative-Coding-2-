let data01 = [
    { name: "Oranges", total: 23 },
    { name: "Bananas", total: 34 },
    { name: "Pears", total: 23 },
    { name: "Apples", total: 18 },
    { name: "Grapes", total: 41 },
    { name: "Kiwi", total: 02 },
    { name: "Melon", total: 31 }
];

let data02 = [
    { name: "Oranges", total: 223 },
    { name: "Bananas", total: 134 },
    { name: "Pears", total: 233 },
    { name: "Apples", total: 118 }
];

let data03 = [
    { name: "Oranges", total: 181, values: [{ catagory: "USA", value: 60 }, { catagory: "ASIA", value: 41 }, { catagory: "EUROPE", value: 80 }] },
    { name: "Bananas", total: 160, values: [{ catagory: "USA", value: 95 }, { catagory: "ASIA", value: 27 }, { catagory: "EUROPE", value: 38 }] },
    { name: "Pears", total: 196, values: [{ catagory: "USA", value: 15 }, { catagory: "ASIA", value: 87 }, { catagory: "EUROPE", value: 94 }] },
    { name: "Apples", total: 72, values: [{ catagory: "USA", value: 28 }, { catagory: "ASIA", value: 25 }, { catagory: "EUROPE", value: 19 }] },
    { name: "Grapes", total: 121, values: [{ catagory: "USA", value: 28 }, { catagory: "ASIA", value: 22 }, { catagory: "EUROPE", value: 71 }] },
    { name: "Kiwi", total: 80, values: [{ catagory: "USA", value: 40 }, { catagory: "ASIA", value: 25 }, { catagory: "EUROPE", value: 15 }] }
];

let data04 = [
    { name: "Oranges", total: 181, values: [{ catagory: "USA", value: 54 }, { catagory: "ASIA", value: 41 }, { catagory: "EUROPE", value: 62 }, { catagory: "UK", value: 24 }] },
    { name: "Bananas", total: 200, values: [{ catagory: "USA", value: 97 }, { catagory: "ASIA", value: 22 }, { catagory: "EUROPE", value: 38 }, { catagory: "UK", value: 43 }] },
    { name: "Pears", total: 274, values: [{ catagory: "USA", value: 15 }, { catagory: "ASIA", value: 87 }, { catagory: "EUROPE", value: 94 }, { catagory: "UK", value: 78 }] },
    { name: "Apples", total: 90, values: [{ catagory: "USA", value: 28 }, { catagory: "ASIA", value: 15 }, { catagory: "EUROPE", value: 19 }, { catagory: "UK", value: 28 }] },
    { name: "Grapes", total: 131, values: [{ catagory: "USA", value: 26 }, { catagory: "ASIA", value: 22 }, { catagory: "EUROPE", value: 56 }, { catagory: "UK", value: 27 }] },
    { name: "Kiwi", total: 110, values: [{ catagory: "USA", value: 40 }, { catagory: "ASIA", value: 25 }, { catagory: "EUROPE", value: 15 }, { catagory: "UK", value: 30 }] }
];

let data05 = [
    { name: "2014", total: 23 },
    { name: "2015", total: 34 },
    { name: "2016", total: 23 },
    { name: "2017", total: 18 },
    { name: "2018", total: 41 },
    { name: "2019", total: 02 },
    { name: "2020", total: 31 }
];

let params1 = {
    chartWidth: 300,
    chartWidthMin: 50,
    chartWidthMax: 400,

    chartHeight: 200,
    chartHeightMin: 50,
    chartHeightMax: 400,

    numTicks: 10,
    numTicksMin: 2,
    numTicksMax: 20,

    margin: 10,
    marginMin: 2,
    marginMax: 30,
}
let params2 = {
    chartWidth: 300,
    chartWidthMin: 50,
    chartWidthMax: 400,

    chartHeight: 200,
    chartHeightMin: 50,
    chartHeightMax: 400,

    numTicks: 10,
    numTicksMin: 2,
    numTicksMax: 20,

    margin: 10,
    marginMin: 2,
    marginMax: 30
}
let params3 = {
    chartWidth: 300,
    chartWidthMin: 50,
    chartWidthMax: 400,

    chartHeight: 200,
    chartHeightMin: 50,
    chartHeightMax: 400,

    numTicks: 10,
    numTicksMin: 2,
    numTicksMax: 20,

    margin: 30,
    marginMin: 2,
    marginMax: 30
}
let params4 = {
    chartWidth: 300,
    chartWidthMin: 50,
    chartWidthMax: 400,

    chartHeight: 200,
    chartHeightMin: 50,
    chartHeightMax: 400,

    numTicks: 5,
    numTicksMin: 2,
    numTicksMax: 20,

    margin: 20,
    marginMin: 2,
    marginMax: 40,
}
let params5 = {
    chartWidth: 300,
    chartWidthMin: 50,
    chartWidthMax: 400,

    chartHeight: 200,
    chartHeightMin: 50,
    chartHeightMax: 400,

    numTicks: 10,
    numTicksMin: 2,
    numTicksMax: 20,

    margin: 10,
    marginMin: 2,
    marginMax: 30
}


let visible = true;
let gui1;
let gui2;
let gui3;
let gui4;
let gui5;

let chart01;
let chart02;
let chart03;
let chart04;
let chart05;

let xGap = 200;

function setup() {
    createCanvas(1500, 900);

    chart01 = new BarChart(data01)
    chart01.chartWidth = 300;
    chart01.chartHeight = 200;
    chart01.posX = 100;
    chart01.posY = 100 + params1.chartHeight;
    chart01.updateValues();
    //gui menu1
    gui1 = createGui('Chart 1 Settings');
    gui1.addObject(params1);
    gui1.setPosition(1250, 25);
    gui1.hide();

    chart02 = new HBarChart(data02)
    chart02.chartWidth = 200;
    chart02.chartHeight = 200;
    chart02.posX = chart01.posX + params1.chartWidth + xGap;;
    chart02.posY = 100 + params2.chartHeight;
    chart02.updateValues();
    //gui menu2
    gui2 = createGui('Chart 2 Settings');
    gui2.addObject(params2);
    gui2.setPosition(1250, 25);
    gui2.hide();

    chart03 = new SBarChart(data03)
    chart03.chartWidth = 200;
    chart03.chartHeight = 200;
    chart03.posX = chart02.posX + params2.chartWidth + xGap;;
    chart03.posY = 100 + params3.chartHeight;
    chart03.updateValues();
    //gui menu3
    gui3 = createGui('Chart 3 Settings');
    gui3.addObject(params3);
    gui3.setPosition(1250, 25);
    gui3.hide();

    chart04 = new SBarChart100(data04)
    chart04.chartWidth = 200;
    chart04.chartHeight = 200;
    chart04.posX = 100;
    chart04.posY = 650;
    chart04.updateValues();
    //gui menu4
    gui4 = createGui('Chart 4 Settings');
    gui4.addObject(params4);
    gui4.setPosition(1250, 25);
    gui4.hide();

    chart05 = new LineChart(data05)
    chart05.chartWidth = 200;
    chart05.chartHeight = 200;
    chart05.posX = 500;
    chart05.posY = 650;
    chart05.updateValues();
    //gui menu4
    gui5 = createGui('Chart 5 Settings');
    gui5.addObject(params5);
    gui5.setPosition(1250, 25);
    gui5.hide();
}


function draw() {
    background(100);
    chart01.render();
    chart01.updateValues(params1.chartWidth, params1.chartHeight, params1.numTicks, params1.margin);
    chart01.posY = 100 + params1.chartHeight;

    chart02.render();
    chart02.updateValues(params2.chartWidth, params2.chartHeight, params2.numTicks, params2.margin);
    chart02.posX = chart01.posX + params1.chartWidth + xGap;
    chart02.posY = 100 + params2.chartHeight;

    chart03.render();
    chart03.updateValues(params3.chartWidth, params3.chartHeight, params3.numTicks, params3.margin);
    chart03.posX = chart02.posX + params2.chartWidth + xGap;
    chart03.posY = 100 + params3.chartHeight;

    chart04.render();
    chart04.updateValues(params4.chartWidth, params4.chartHeight, params4.numTicks, params4.margin);
    chart04.posY = 250 + params1.chartHeight + params4.chartHeight;

    chart05.render();
    chart05.updateValues(params5.chartWidth, params5.chartHeight, params5.numTicks, params5.margin);
    chart05.posX = chart04.posX + params4.chartWidth + xGap;
    chart05.posY = 250 + params2.chartHeight + params5.chartHeight;

}

function keyPressed() {
    switch (key) {
        case '1':
            visible = !visible;
            if (visible) gui1.show();
            else gui1.hide();
            break;
    }
    switch (key) {
        case '2':
            visible = !visible;
            if (visible) gui2.show();
            else gui2.hide();
            break;
    }
    switch (key) {
        case '3':
            visible = !visible;
            if (visible) gui3.show();
            else gui3.hide();
            break;
    }
    switch (key) {
        case '4':
            visible = !visible;
            if (visible) gui4.show();
            else gui4.hide();
            break;
    }
    switch (key) {
        case '5':
            visible = !visible;
            if (visible) gui5.show();
            else gui5.hide();
            break;
    }
}