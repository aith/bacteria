class Bacteria {
    r = 0;   

    constructor(x, y, r) {
        // this.pos = new p5.Vector(x, y);
        this.x = x
        this.y = y
        this.r = r;
    }

    show() {
        noFill()
        strokeWeight(4)
        stroke(0)
        ellipse(this.x, this.y, this.r*2, this.r*2)
    }
}
