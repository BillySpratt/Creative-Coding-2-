class LineChart {
    constructor(_data) {
        this.data = _data;

        this.chartTitle = "Fruit Sales 2023";
        this.titleXAxis = "Years";
        this.titleYAxis = "Fruit Sales per 1,000";


        this.chartWidth = 200;
        this.chartHeight = 200;
        this.spacing = 10;
        this.margin = 30;
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

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = false;

        this.colors = [color('#00efff'), color('#0189fa'), color('#0237f6'), color('#190bc9'), color('#340597'), color('#440178'), color('#49006f')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues(chartWidth, chartHeight, numTicks, margin, Values, sLabels, rLabels, Totals) {
        this.chartWidth = chartWidth;
        this.chartHeight = chartHeight;
        this.margin = margin;
        this.numTicks = numTicks;

        this.showValues = Values;
        this.showLabels = sLabels;
        this.rotateLabels = rLabels;
        this.showTotal = Totals;

        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.total })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render(title, xAxis, yAxis) {
        push()
        this.chartTitle = title;
        this.titleXAxis = xAxis;
        this.titleYAxis = yAxis;
        translate(this.posX, this.posY);
        this.calculateMaxValue();
        this.drawTicks();
        this.drawHorizontalLines();
        this.axisTitles();
        this.drawLines();
        this.drawAxis();
        this.XAxisLabels();
        this.BarTotal();
        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
        textSize(this.titleSize);
        textAlign(CENTER);
        fill(255);
        text(this.chartTitle, this.chartWidth / 2, -this.chartHeight * 1.15);
    }

    axisTitles() {
        push()
        noStroke();
        textSize(this.chartWidth / 25);
        textAlign(CENTER, BOTTOM);
        fill(255, 80)
        text(this.titleXAxis, this.chartWidth / 2, 60);
        translate(-130, 0);
        rotate(1.5 * PI);
        text(this.titleYAxis, this.chartHeight / 2, 80)
        pop()
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(this.chartHeight / (this.tickIncrements + this.numTicks));
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);


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

    drawLines() {
        push();
        translate(this.margin + (this.barWidth / 2), 0);
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % this.colors.length;
            stroke(this.colors[colorNumber]);
            noFill();
            beginShape();
            for (let j = 0; j < this.data.length; j++) {
                vertex((this.barWidth + this.spacing) * j, this.scaleData(-this.data[j].total));
                fill(this.colors[colorNumber]);
                ellipse((this.barWidth + this.spacing) * j, this.scaleData(-this.data[j].total), 5)
                noFill();
            }
            endShape();
        }
        pop()
    }
    XAxisLabels() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(this.barWidth / 3);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 5, 10);
                    rotate(PI / 4.5)
                    text(this.data[i].name, 0, 0);
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize((this.barWidth + this.spacing) / 4);
                    textAlign(CENTER, CENTER);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
            }
        }
        pop();
    }
    BarTotal() {
        translate(this.margin, 0);
        if (this.showTotal) {
            for (let i = 0; i < this.data.length; i++) {
                push();
                noStroke();
                fill(255, 150);
                textSize(this.barNumSize);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total) - 5);
                pop();
            }
        }
    }
}