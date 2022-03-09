class PieChart {
    constructor(_data) {
        this.data = _data;

        this.chartTitle = "Fruit Sales 2019";

        this.chartWidth = 300;
        this.chartHeight = 300;
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
        this.showLegend = true;

        this.colors = [color('#00efff'), color('#0189fa'), color('#0237f6'), color('#190bc9'), color('#340597'), color('#440178'), color('#49006f')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues(chartWidth, chartHeight, numTicks, margin, diameter) {
        this.chartWidth = chartWidth;
        this.chartHeight = chartHeight;
        this.margin = margin;
        this.numTicks = numTicks;
        this.diameter = diameter;


        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;
        this.showLegend = true;

        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.total })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render(title) {
        push()
        this.chartTitle = title;
        translate(this.posX, this.posY);
        this.drawPies();
        this.calculateMaxValue();
        this.drawTitle();
        this.BarTotal();
        this.Legend();
        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawTitle() {
        fill(255);
        textSize(this.titleSize);
        textAlign(CENTER)
        text(this.chartTitle, this.chartWidth / 2, -this.chartHeight * 1.15);
    }

    drawPies() {
        push();
        this.pieTemp = 0;
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length - 1; i++) {
            let colorNumber = i % this.colors.length;
            fill(this.colors[colorNumber]);
            noStroke();
            angleMode(DEGREES);
            arc(this.chartWidth / 2 - this.margin, -this.chartHeight / 2, this.diameter, this.diameter, this.pieTemp, ((this.data[i].total / this.data[this.data.length - 1]) * 360) + this.pieTemp, PIE);
            this.pieTemp += this.data[i].total / this.data[this.data.length - 1] * 360;
        }
        pop()
    }

    BarTotal() {
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            push();
            noStroke();
            fill(255, 150);
            textSize(this.barNumSize);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total));
            pop();
        }
    }
    Legend() {
        if (this.showLegend) {
            push();
            translate(this.diameter + this.margin + 20, -this.chartHeight / 2)
            push();
            noFill();
            stroke(255);
            pop();
            for (let j = 0; j < this.data.length - 1; j++) {
                let colorNumber = j % 7;
                fill(255)
                noStroke();
                textSize(this.axisNumSize);
                textAlign(LEFT, CENTER);
                text(this.data[j].name, 0, 0);
                fill(this.colors[colorNumber]);
                ellipse(-15, 0, 10);
                translate(0, -20);
            }
            pop();
        }
    }
}