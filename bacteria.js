class Bacteria {
    r = 40;   

    constructor(x, y) {
        // this.pos = new p5.Vector(x, y);
        this.x = x
        this.y = y
        this.r = 40;
    }

    show() {
        noFill()
        strokeWeight(4)
        stroke(0)
        ellipse(this.x, this.y, this.r*2, this.r*2)
    }
}
