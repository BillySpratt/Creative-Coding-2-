class HBarChart {
    constructor(_data) {
        this.data = _data;

        this.chartTitle = "Fruit Sales 2020";
        this.titleXAxis = "Fruit Sales per 1,000";
        this.titleYAxis = "Type of Fruit";

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 10;
        this.margin = 15;
        this.numTicks = 10;
        this.posX = 50;
        this.posY = 400;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.axisNumSize = 14;
        this.labelSize = 14;
        this.titleSize = 20;
        this.barNumSize = 16;


        this.colors = [color('#00efff'), color('#0189fa'), color('#0237f6'), color('#190bc9'), color('#340597'), color('#440178'), color('#49006f')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues(chartWidth, chartHeight, numTicks, margin) {
        this.chartWidth = chartWidth;
        this.chartHeight = chartHeight;
        this.margin = margin;
        this.numTicks = numTicks;

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;
        this.rotateAxisNum = true;

        this.tickSpacing = this.chartWidth / this.numTicks;
        this.availableWidth = this.chartHeight - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.total })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);
        this.calculateMaxValue();
        this.axisTitles();
        this.drawTicks();
        this.drawVerticalLines();
        this.drawRects();
        this.drawAxis();
        this.YAxisLabels();
        this.BarTotal();

        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartWidth);
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
        textSize(this.titleSize);
        textAlign(CENTER)
        text(this.chartTitle, this.chartWidth / 2, -this.chartHeight * 1.15);
    }

    axisTitles() {
        push()
        textSize(this.chartWidth / 25);
        textAlign(CENTER, BOTTOM);
        fill(255, 80)
        text(this.titleXAxis, this.chartWidth / 2, this.chartHeight * .3);
        translate(-130, 0);
        rotate(1.5 * PI);
        text(this.titleYAxis, 100, 80)
        pop()
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 10);

            //numbers (text)
            if (this.showValues) {
                if (this.rotateAxisNum) {
                    fill(255, 200);
                    noStroke();
                    textSize(this.axisNumSize);
                    textAlign(LEFT, CENTER);
                    push()
                    translate(-5 + this.tickSpacing * i, 20)
                    rotate(PI / 4.5)
                    text((i * this.tickIncrements).toFixed(this.numPlaces), 0, 0);
                    pop()
                } else {
                    fill(255, 200);
                    noStroke();
                    textSize(this.axisNumSize);
                    textAlign(CENTER);
                    text((i * this.tickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, this.margin);
                }

            }
        }
    }

    drawVerticalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //vertical line
            stroke(255, 50);
            strokeWeight(1)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, -this.chartHeight);
        }
    }

    drawRects() {
        push();
        translate(0, -this.margin);
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 7;
            fill(this.colors[colorNumber]);
            noStroke();
            rect(0, -(this.barWidth + this.spacing) * i, -this.scaleData(-this.data[i].total), -this.barWidth);
        }
        pop()
    }
    YAxisLabels() {
        push();
        translate(0, -this.margin);
        for (let i = 0; i < this.data.length; i++) {
            if (this.showLabels) {
                if (this.rotateLabels) {
                    noStroke();
                    fill(255);
                    textSize(this.labelSize * .8);
                    textAlign(CENTER);
                    push()
                    translate(-20, -((this.barWidth + this.spacing) * i) - this.barWidth / 2)
                    rotate(PI / 4.5)
                    text(this.data[i].name, 0, 0);
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize(this.labelSize);
                    textAlign(RIGHT, CENTER);
                    text(this.data[i].name, -10, -((this.barWidth + this.spacing) * i) - this.barWidth / 2);
                }
            }
        }
        pop();
    }
    BarTotal() {
        translate(5, -this.margin);
        for (let i = 0; i < this.data.length; i++) {
            push();
            noStroke();
            fill(255);
            textSize(this.barNumSize);
            textAlign(LEFT, CENTER);
            text(this.data[i].total, this.scaleData(this.data[i].total), -((this.barWidth + this.spacing) * i) - this.barWidth / 2);
            pop();
        }
    }
}