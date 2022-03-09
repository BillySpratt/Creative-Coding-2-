let data01 = [
    { name: "EU-27", total: 100, values: [{ catagory: "0 portions", value: 32.9 }, { catagory: "1-4 portions", value: 54.7 }, { catagory: "5+ portions", value: 12.4 }] },
    { name: "Romania", total: 100, values: [{ catagory: "0 portions", value: 73.6 }, { catagory: "1-4 portions", value: 24 }, { catagory: "5+ portions", value: 2.4 }] },
    { name: "Latvia", total: 100, values: [{ catagory: "0 portions", value: 53.9 }, { catagory: "1-4 portions", value: 38.9 }, { catagory: "5+ portions", value: 7.2 }] },
    { name: "Czechia", total: 100, values: [{ catagory: "0 portions", value: 48.2 }, { catagory: "1-4 portions", value: 44.1 }, { catagory: "5+ portions", value: 7.7 }] },
    { name: "Luxembourg", total: 100, values: [{ catagory: "0 portions", value: 48.1 }, { catagory: "1-4 portions", value: 38.3 }, { catagory: "5+ portions", value: 13.6 }] },
    { name: "Bulgaria", total: 100, values: [{ catagory: "0 portions", value: 47.1 }, { catagory: "1-4 portions", value: 47.8 }, { catagory: "5+ portions", value: 5 }] },
    { name: "Serbia", total: 100, values: [{ catagory: "0 portions", value: 44.6 }, { catagory: "1-4 portions", value: 47.3 }, { catagory: "5+ portions", value: 8.1 }] },
    { name: "Netherlands", total: 100, values: [{ catagory: "0 portions", value: 41.8 }, { catagory: "1-4 portions", value: 28.7 }, { catagory: "5+ portions", value: 29.5 }] },
    { name: "Slovakia", total: 100, values: [{ catagory: "0 portions", value: 41.3 }, { catagory: "1-4 portions", value: 50.2 }, { catagory: "5+ portions", value: 8.5 }] },
    { name: "Lithuania", total: 100, values: [{ catagory: "0 portions", value: 41 }, { catagory: "1-4 portions", value: 43.1 }, { catagory: "5+ portions", value: 15.9 }] },
    { name: "Estonia", total: 100, values: [{ catagory: "0 portions", value: 39.4 }, { catagory: "1-4 portions", value: 47.3 }, { catagory: "5+ portions", value: 13.3 }] },
    { name: "Denmark", total: 100, values: [{ catagory: "0 portions", value: 38.6 }, { catagory: "1-4 portions", value: 38.5 }, { catagory: "5+ portions", value: 22.9 }] },
    { name: "Sweden", total: 100, values: [{ catagory: "0 portions", value: 37.7 }, { catagory: "1-4 portions", value: 54.6 }, { catagory: "5+ portions", value: 7.6 }] },
    { name: "Poland", total: 100, values: [{ catagory: "0 portions", value: 37.5 }, { catagory: "1-4 portions", value: 53.9 }, { catagory: "5+ portions", value: 8.6 }] },
    { name: "Finland", total: 100, values: [{ catagory: "0 portions", value: 37.5 }, { catagory: "1-4 portions", value: 49 }, { catagory: "5+ portions", value: 13.5 }] },
    { name: "Turkey", total: 100, values: [{ catagory: "0 portions", value: 37.5 }, { catagory: "1-4 portions", value: 59.7 }, { catagory: "5+ portions", value: 2.8 }] },
    { name: "Malta", total: 100, values: [{ catagory: "0 portions", value: 36.4 }, { catagory: "1-4 portions", value: 52.1 }, { catagory: "5+ portions", value: 11.6 }] },
    { name: "Hungary", total: 100, values: [{ catagory: "0 portions", value: 36.3 }, { catagory: "1-4 portions", value: 55.5 }, { catagory: "5+ portions", value: 8.2 }] },
    { name: "Austria", total: 100, values: [{ catagory: "0 portions", value: 35.8 }, { catagory: "1-4 portions", value: 58.7 }, { catagory: "5+ portions", value: 5.6 }] },
    { name: "Iceland", total: 100, values: [{ catagory: "0 portions", value: 34.1 }, { catagory: "1-4 portions", value: 56.7 }, { catagory: "5+ portions", value: 9.1 }] },
    { name: "Germany", total: 100, values: [{ catagory: "0 portions", value: 33.2 }, { catagory: "1-4 portions", value: 55.9 }, { catagory: "5+ portions", value: 10.9 }] },
    { name: "Cyprus", total: 100, values: [{ catagory: "0 portions", value: 33.2 }, { catagory: "1-4 portions", value: 58.8 }, { catagory: "5+ portions", value: 7.9 }] },
    { name: "Greece", total: 100, values: [{ catagory: "0 portions", value: 33.1 }, { catagory: "1-4 portions", value: 54.5 }, { catagory: "5+ portions", value: 12.4 }] },
    { name: "Slovenia", total: 100, values: [{ catagory: "0 portions", value: 31.9 }, { catagory: "1-4 portions", value: 62.8 }, { catagory: "5+ portions", value: 5.3 }] },
    { name: "Norway", total: 100, values: [{ catagory: "0 portions", value: 29.2 }, { catagory: "1-4 portions", value: 62.2 }, { catagory: "5+ portions", value: 8.6 }] },
    { name: "Croatia", total: 100, values: [{ catagory: "0 portions", value: 28.5 }, { catagory: "1-4 portions", value: 61.7 }, { catagory: "5+ portions", value: 9.8 }] },
    { name: "Portugal", total: 100, values: [{ catagory: "0 portions", value: 27.4 }, { catagory: "1-4 portions", value: 58.2 }, { catagory: "5+ portions", value: 14.4 }] },
    { name: "France", total: 100, values: [{ catagory: "0 portions", value: 25.2 }, { catagory: "1-4 portions", value: 55.3 }, { catagory: "5+ portions", value: 19.5 }] },
    { name: "Italy", total: 100, values: [{ catagory: "0 portions", value: 23.8 }, { catagory: "1-4 portions", value: 65.7 }, { catagory: "5+ portions", value: 10.5 }] },
    { name: "Spain", total: 100, values: [{ catagory: "0 portions", value: 23.4 }, { catagory: "1-4 portions", value: 65.7 }, { catagory: "5+ portions", value: 10.9 }] },
    { name: "Ireland", total: 100, values: [{ catagory: "0 portions", value: 19 }, { catagory: "1-4 portions", value: 48.1 }, { catagory: "5+ portions", value: 32.9 }] },
    { name: "Belgium", total: 100, values: [{ catagory: "0 portions", value: 17.4 }, { catagory: "1-4 portions", value: 67.5 }, { catagory: "5+ portions", value: 15.1 }] }
];
let data02 = [
    { name: "EU-27", total: 100, values: [{ catagory: "Male", value: 51.2 + 9.8 }, { catagory: "Female", value: 58.0 + 14.9 }] },
    { name: "Romania", total: 100, values: [{ catagory: "Male", value: 20.9 + 2.0 }, { catagory: "Female", value: 26.9 + 2.8 }] },
    { name: "Latvia", total: 100, values: [{ catagory: "Male", value: 34.1 + 5.4 }, { catagory: "Female", value: 42.8 + 8.6 }] },
    { name: "Czechia", total: 100, values: [{ catagory: "Male", value: 38.1 + 5 }, { catagory: "Female", value: 49.8 + 10.2 }] },
    { name: "Luxembourg", total: 100, values: [{ catagory: "Male", value: 33.1 + 10.3 }, { catagory: "Female", value: 43.5 + 16.9 }] },
    { name: "Bulgaria", total: 100, values: [{ catagory: "Male", value: 46.5 + 4.1 }, { catagory: "Female", value: 49.0 + 5.9 }] },
    { name: "Serbia", total: 100, values: [{ catagory: "Male", value: 43.8 + 6.9 }, { catagory: "Female", value: 50.6 + 9.2 }] },
    { name: "Netherlands", total: 100, values: [{ catagory: "Male", value: 25.6 + 27.5 }, { catagory: "Female", value: 31.8 + 31.4 }] },
    { name: "Slovakia", total: 100, values: [{ catagory: "Male", value: 45.1 + 7.1 }, { catagory: "Female", value: 55.0 + 9.8 }] },
    { name: "Lithuania", total: 100, values: [{ catagory: "Male", value: 40.0 + 12.7 }, { catagory: "Female", value: 45.7 + 18.7 }] },
    { name: "Estonia", total: 100, values: [{ catagory: "Male", value: 42.8 + 10.2 }, { catagory: "Female", value: 51.2 + 16.0 }] },
    { name: "Denmark", total: 100, values: [{ catagory: "Male", value: 35.2 + 17.2 }, { catagory: "Female", value: 41.7 + 28.3 }] },
    { name: "Sweden", total: 100, values: [{ catagory: "Male", value: 49.0 + 4.6 }, { catagory: "Female", value: 60.3 + 10.7 }] },
    { name: "Poland", total: 100, values: [{ catagory: "Male", value: 50.2 + 6.4 }, { catagory: "Female", value: 57.3 + 10.6 }] },
    { name: "Finland", total: 100, values: [{ catagory: "Male", value: 45.3 + 8.1 }, { catagory: "Female", value: 52.3 + 18.4 }] },
    { name: "Turkey", total: 100, values: [{ catagory: "Male", value: 57.0 + 2.5 }, { catagory: "Female", value: 62.4 + 3.1 }] },
    { name: "Malta", total: 100, values: [{ catagory: "Male", value: 48.7 + 9.3 }, { catagory: "Female", value: 55.6 + 14.0 }] },
    { name: "Hungary", total: 100, values: [{ catagory: "Male", value: 50.5 + 7.0 }, { catagory: "Female", value: 60.1 + 9.2 }] },
    { name: "Austria", total: 100, values: [{ catagory: "Male", value: 51.1 + 3.8 }, { catagory: "Female", value: 65.9 + 7.3 }] },
    { name: "Iceland", total: 100, values: [{ catagory: "Male", value: 51.3 + 6.9 }, { catagory: "Female", value: 61.5 + 11.1 }] },
    { name: "Germany", total: 100, values: [{ catagory: "Male", value: 49.9 + 7 }, { catagory: "Female", value: 61.7 + 14.8 }] },
    { name: "Cyprus", total: 100, values: [{ catagory: "Male", value: 55.6 + 7.8 }, { catagory: "Female", value: 61.8 + 8.1 }] },
    { name: "Greece", total: 100, values: [{ catagory: "Male", value: 49.7 + 12.5 }, { catagory: "Female", value: 58.9 + 12.3 }] },
    { name: "Slovenia", total: 100, values: [{ catagory: "Male", value: 57.9 + 3.4 }, { catagory: "Female", value: 67.7 + 7.2 }] },
    { name: "Norway", total: 100, values: [{ catagory: "Male", value: 57.7 + 6.0 }, { catagory: "Female", value: 66.7 + 11.3 }] },
    { name: "Croatia", total: 100, values: [{ catagory: "Male", value: 58.4 + 9.5 }, { catagory: "Female", value: 64.1 + 10.1 }] },
    { name: "Portugal", total: 100, values: [{ catagory: "Male", value: 56.4 + 12.1 }, { catagory: "Female", value: 59.8 + 16.4 }] },
    { name: "France", total: 100, values: [{ catagory: "Male", value: 53.7 + 15.6 }, { catagory: "Female", value: 56.9 + 23.0 }] },
    { name: "Italy", total: 100, values: [{ catagory: "Male", value: 64.6 + 8.3 }, { catagory: "Female", value: 66.6 + 12.5 }] },
    { name: "Spain", total: 100, values: [{ catagory: "Male", value: 62.8 + 9.4 }, { catagory: "Female", value: 68.3 + 12.3 }] },
    { name: "Ireland", total: 100, values: [{ catagory: "Male", value: 50.0 + 28.5 }, { catagory: "Female", value: 46.3 + 37.1 }] },
    { name: "Belgium", total: 100, values: [{ catagory: "Male", value: 66.9 + 11.8 }, { catagory: "Female", value: 68.0 + 18.2 }] },
];
let data03 = [
    { name: "0 portions", total: 34.4 },
    { name: "1-4 portions", total: 51.4 },
    { name: "5+ portions", total: 14.1 },
    total = 99.9
];
let params1 = {
    chartWidth: 600,
    chartWidthMin: 50,
    chartWidthMax: 600,

    chartHeight: 200,
    chartHeightMin: 50,
    chartHeightMax: 500,

    numTicks: 10,
    numTicksMin: 2,
    numTicksMax: 20,

    margin: 10,
    marginMin: 2,
    marginMax: 40,

    Show_Value: true,
    Show_Label: true,
    Rotate_Label: true,
    Show_Legend: true,
    Show_Total: false,

    Chart_Title: "Daily Fruit consumption in EU countries",
    xAxis_Title: "EU Countries",
    yAxis_Title: "Percent",
}
let params2 = {
    chartWidth: 700,
    chartWidthMin: 50,
    chartWidthMax: 800,

    chartHeight: 200,
    chartHeightMin: 50,
    chartHeightMax: 500,

    numTicks: 10,
    numTicksMin: 2,
    numTicksMax: 20,

    margin: 10,
    marginMin: 2,
    marginMax: 40,

    Show_Value: true,
    Show_Label: true,
    Rotate_Label: true,
    Show_Legend: true,
    Show_Total: false,
    Show_Avg_Line: false,

    Chart_Title: "Daily consumption of fruit and vegetables by sex",
    xAxis_Title: "EU Countries",
    yAxis_Title: "Percent",
}
let params3 = {
    chartWidth: 300,
    chartWidthMin: 50,
    chartWidthMax: 500,

    chartHeight: 200,
    chartHeightMin: 50,
    chartHeightMax: 500,

    numTicks: 10,
    numTicksMin: 2,
    numTicksMax: 20,

    margin: 30,
    marginMin: 2,
    marginMax: 40,

    diameter: 200,
    diameterMin: 50,
    diameterMax: 500,

    Chart_Title: "Daily consumption of fruit and vegetables in the EU",
}

let visible = true;
let gui1;
let gui2;
let gui3;

let chart01;
let chart02;
let chart03;

function setup() {
    createCanvas(1500, 900);

    chart01 = new SBarChart100(data01)
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

    chart02 = new CBarChart(data02)
    chart02.chartWidth = 200;
    chart02.chartHeight = 200;
    chart02.posX = chart01.posX + params1.chartWidth + 250;
    chart02.posY = 650 //100 + params2.chartHeight;
    chart02.updateValues();
    //gui menu2
    gui2 = createGui('Chart 2 Settings');
    gui2.addObject(params2);
    gui2.setPosition(1250, 25);
    gui2.hide();

    chart03 = new PieChart(data03)
    chart03.chartWidth = 200;
    chart03.chartHeight = 200;
    chart03.posX = chart02.posX + params2.chartWidth + 250;
    chart03.posY = 100 + params3.chartHeight;
    chart03.updateValues();
    //gui menu3
    gui3 = createGui('Chart 3 Settings');
    gui3.addObject(params3);
    gui3.setPosition(1250, 25);
    gui3.hide();
}

function draw() {
    background(100);
    chart01.render(params1.Chart_Title, params1.xAxis_Title, params1.yAxis_Title);
    chart01.updateValues(params1.chartWidth, params1.chartHeight, params1.numTicks, params1.margin, params1.Show_Value, params1.Show_Label, params1.Rotate_Label, params1.Show_Legend, params1.Show_Total);
    chart01.posY = 100 + params1.chartHeight;

    chart02.render(params2.Chart_Title, params2.xAxis_Title, params2.yAxis_Title);
    chart02.updateValues(params2.chartWidth, params2.chartHeight, params2.numTicks, params2.margin, params2.Show_Value, params2.Show_Label, params2.Rotate_Label, params2.Show_Legend, params2.Show_Total, params2.Show_Avg_Line);
    chart02.posX = 100;
    chart02.posY = 250 + params1.chartHeight + params2.chartHeight;

    chart03.render(params3.Chart_Title);
    chart03.updateValues(params3.chartWidth, params3.chartHeight, params3.numTicks, params3.margin, params3.diameter);
    chart03.posX = chart01.posX + params1.chartWidth + 250;
    chart03.posY = 100 + params3.chartHeight;
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
}