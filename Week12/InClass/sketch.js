let posX;
let posY;

let velX;
let velY;

let radius;
let circColor;

let sliderHue;
let clickCounter;

let sliderScale;

function setup(){
    let myCanvas = createCanvas(800,600);
    myCanvas.parent('canvasParent');

    colorMode(HSB, 360, 100, 100);
    sliderHue = createSlider(0, 360, 0, 15);
    sliderHue.parent('canvasUI');
    sliderHue.style('width', '150px')

    sliderScale = createSlider(30, 200, 0, 10);
    sliderScale.parent('canvasUI')
    sliderHue.style('width', '150px')

    posX = width/2;
    posY = height/2;

    velX= 3;
    velY= 1;

    circColor = color(50,90,80);

    clickCounter = 0;

}
function draw(){
    let val = sliderHue.value();
    background(val, 60, 80);
    noStroke();

    fill(circColor);
    circle(posX, posY, sliderScale.value()*2);
    if (posX + sliderScale.value() >= width || posX - sliderScale.value() <= 0){
        velX = velX * -1;
    }
    if (posY + sliderScale.value() >= height || posY - sliderScale.value() <= 0){
        velY = velY * -1;
    }
    posX += velX;
    posY += velY;

    noFill();
    stroke(150,80,50);
    strokeWeight(5);
    rect(5, 5, 70, 30);

    textSize(24);
    fill(270, 80, 80);
    text(clickCounter, 20, 30);
    
}

function mouseReleased(){
    if (dist(mouseX, mouseY, posX, posY)< sliderScale.value()){
        circColor= color(15,90,70);
        clickCounter++;
    }
    else{
        circColor= color(50,90,80);
    }
}