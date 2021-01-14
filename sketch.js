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
let b;

function setup() {
    b = new Bacteria(200, 200)
    console.log("p5 is running!");
    createCanvas(canvasW, canvasH);
    background(bg,bg,bg);
    initGrains()
}

function draw() {
    drawBG()
    
    loadPixels()
    
    getPixels()
    updatePixels()

    b.show()
    // riseGrains()
    // applyGrainFilter()
}

function getPixels() {
    for (let x = 0; x < canvasW; x++) {
        for (let y = 0; y < canvasH; y++) {
            let index = x + y * canvasW;
            let d = dist(x, y, b.x, b.y);
            let c = 1000 * b.r / d;
            pixels[index] = color(c);
        }
    }
}

function drawBG() {
    background(bg)
}

function drawBacteria() {
    ellipse(56, 46, 55, 55);
}

function applyGrainFilter() {
    drawGrains()
}

function initGrains() {
    for (let i = 0; i < grains; i++) {
        let y = random(canvasH)
        let colScale = random(bg-40, bg+40)
        let col = color(colScale,colScale,colScale,230)
        grainsArray[i] = new Grain(random(canvasW), y, col)
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

