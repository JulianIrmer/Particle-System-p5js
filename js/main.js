const width = 600;
const height = 700;
let particles = [];
let sparks = [];

function setup(){
    createCanvas(width, height);
    frameRate(60);
}

function draw(){
    background(0);
    let p = new Particle();
    particles.push(p);
    for(let i = 0; i < particles.length; i++){
        particles[i].show();
        particles[i].update();
        if(particles[i].finished()){
            particles.splice(i, 1);
        }
    }
    let s = new Spark();
    sparks.push(s);
    for(let i = 0; i < sparks.length; i++){
        sparks[i].show();
        sparks[i].update();
        if(sparks[i].finished()){
            sparks.splice(i, 1);
        }
    }
}

class Particle{

    constructor(){
        this.x = width/2;
        this.y = height-70;
        this.vx = random(-0.8, 0.8);
        this.vy = random(-6, -2);
        this.d = random(10, 28);
        this.alpha = 255;
    }

    show(){
        noStroke();
        fill(200, this.alpha);
        ellipse(this.x, this.y, this.d)
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 2;
    }

    finished(){
        return this.alpha < 0;
    }
}

class Spark{

    constructor(){
        this.x = width/2;
        this.y = height-70;
        this.vx = random(-0.8, 0.8);
        this.vy = random(-6, -2);
        this.d = random(2, 10);
        this.alpha = 255;
    }

    show(){
        noStroke();
        fill('rgba(100,0,255, 0.25)');
        ellipse(this.x, this.y, this.d)
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 1;
    }

    finished(){
        return this.alpha < 0;
    }
}