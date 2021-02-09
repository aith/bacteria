let canvasW = 400;
let canvasH = 400;

let n = 0;
let bg = 50;

let bacteriaArray = []
let bacteriaCount
let bacteriaSizeMin = 800
let bacteriaSizeMax = 2000

let grainX = 0;
let grainY = 0;
let grains = 2000;
let grainColor = 0;
let grainsArray = []
let grainSpeed = 0.0001
let b;

let seed = 0;

function setup() {
    initBacteria()
    createCanvas(canvasW, canvasH);
    background(bg,bg,bg);
    initGrains()
    createButton("Reimagine").mousePressed(reimagine);
}

function reimagine() {
    seed++
    resetSketch()
}

function resetSketch() {
    for(let i = 0; i < bacteriaArray.length; i++) {
        bacteriaArray.pop();
    }
    initBacteria()
    initGrains()
}

function draw() {
    randomSeed(seed);
    drawBG()

    loadPixels()
    buildMetaballs()
    updatePixels()

    riseGrains()
    applyGrainFilter()
    filter(INVERT)
}

function initBacteria() {
    bacteriaCount = random(2,4)
    for(let i = 0; i < bacteriaCount; i++) {
        bacteriaArray[i] = new Bacteria(
            random() * canvasW,
            random() * canvasH,
            random(bacteriaSizeMin, bacteriaSizeMax)
        )
    }
}

// metaballs
// https://www.youtube.com/watch?v=ccYLb7cLB1I
function buildMetaballs() {
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
        let sum = 0;
        for (i = 0; i < bacteriaArray.length; i++) {
            let xdif = x - bacteriaArray[i].x;
            let ydif = y - bacteriaArray[i].y;
            let d = sqrt((xdif * xdif) + (ydif * ydif));
            sum += 2 * bacteriaArray[i].r / d;
        }
        let mod = 90;
        set(x, y, color(sum % mod, sum % mod, sum % mod));
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
        let y = random() * canvasH
        let colScale = random(bg-20, bg+60)
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
        grainsArray[i].x = (grainsArray[i].x + random(-2,2) * .01) % canvasW
        grainsArray[i].y = (grainsArray[i].y + (millis() % 1000) * grainSpeed) % canvasH;
    }
}
