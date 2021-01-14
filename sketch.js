let canvasW = 400;
let canvasH = 400;

let seed = 0;
let n = 0;
let bg = 210;

let grainX = 0;
let grainY = 0;
let grains = 800;
let grainColor = 0;
let grainsArray = []
let grainSpeed = 0.0001

class grain {
    constructor(x, y, col) {
        this.x = x
        this.y = y
        this.color = col
    }
}

function setup() {
    console.log("p5 is running!");
    createCanvas(canvasW, canvasH);
    background(bg,bg,bg);
    grainColor = color(155,155,155,122)
    initGrains()
    print(grainsArray[200])
}

function draw() {
    drawBG()
    drawBacteria()
    riseGrains()
    applyGrainFilter()
}

function drawBG() {
    background(bg)
}

// function drawBacteria() {
//     ellipse(56, 46, 55, 55);
// }

function applyGrainFilter() {
    drawGrains()
}

function initGrains() {
    for (let i = 0; i < grains; i++) {
        let y = random(canvasH)
        let colScale = random(bg-40, bg+40)
        let col = color(colScale,colScale,colScale,230)
        grainsArray[i] = new grain(random(canvasW), y, col)
    }
}

function drawGrains() {
    for(let grain = 0; grain < grains; grain++) {
        fill('white')
        stroke(grainsArray[grain].color)
        strokeWeight(3)
        point(grainsArray[grain].x, grainsArray[grain].y)
    }
}

function riseGrains() {
    for (let i = 0; i < grainsArray.length; i++) {
        grainsArray[i].y = (grainsArray[i].y + (millis() % 1000) * grainSpeed) % canvasH;
    }
}

