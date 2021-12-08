function preload(){

}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(350, 150);
    vid = createCapture(VIDEO);
    vid.hide();
}

function draw(){
    image( vid, 0, 0, 600, 400);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle( 20, 25, 20);
    circle( 35, 25, 20);   
    triangle( 11, 30, 44, 30, 27, 55);
    circle( 570, 25, 20);
    circle( 585, 25, 20);   
    triangle( 561, 30, 594, 30, 577, 55);
    circle( 20, 360, 20);
    circle( 35, 360, 20);   
    triangle( 11, 365, 44, 365, 27, 390);
    circle( 570, 360, 20);
    circle( 585, 360, 20);   
    triangle( 561, 365, 594, 365, 577, 390);
}

function takeSnapshot(){
    save('capture.png');
}
