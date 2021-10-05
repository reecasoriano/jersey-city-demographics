// get dimensions of canvas container div
let divWidth = document.getElementById("canvas-container").clientWidth;
let divHeight = document.getElementById("canvas-container").clientHeight;
/* Could not figure out how to bring in JSON data; attempted to hard code */
// let angles = [31115, 49913, 54821, 54526, 22712, 46564];

/* PLACEHOLDER: 
    Code taken from Pie Chart example on p5.js example page
    https://p5js.org/examples/form-pie-chart.html */

let angles = [30, 10, 45, 35, 60, 38, 75, 67];

function setup() {
    let cnv = createCanvas(divWidth, divHeight);
    cnv.parent("canvas-container");
    background(255);
    noStroke();
    noLoop(); // Run once and stop
}

function draw() {
    pieChart(300, angles);
}

function pieChart(diameter, data) {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {
        let gray = map(i, 0, data.length, 0, 255);
        fill(gray);
        arc(
            width / 2,
            height / 2,
            diameter,
            diameter,
            lastAngle,
            lastAngle + radians(angles[i])
        );
        lastAngle += radians(angles[i]);
    }
}

