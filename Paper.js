
        this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options)
        World.add(world, this.body);

    }
    display() {

        var paperpos = this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
            //strokeWeight(4);
        fill(255)
        ellipse(0, 0, this.r, this.r);
        pop()

    }

}
