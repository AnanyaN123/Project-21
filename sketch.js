var canvas;
var music;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(700, 560, 190, 70);
    surface1.shapeColor = "violet";

    surface2 = createSprite(500, 560, 190, 70);
    surface2.shapeColor = "lightBlue";
    
    surface3 = createSprite(300, 560, 190, 70);
    surface3.shapeColor = "lightGreen";

    surface4 = createSprite(100, 560, 190, 70);
    surface4.shapeColor = "Orange";

    ball = createSprite(random(20, 750));
    ball.shapeColor = "white";
    ball.width = 50;
    ball.height = 50;
    ball.velocityX = 8;
    ball.velocityY = 6;
}

function draw() {
    background("black");
    //create edgeSprite
    
    edges = createEdgeSprites();

    if(ball.isTouching(surface1) && ball.bounceOff(surface1)){
        ball.shapeColor = "violet";
        music.play();
    }

    if(ball.isTouching(surface2) && ball.bounceOff(surface2)){
        ball.shapeColor = "lightBlue";
        music.stop();
        ball.velocityY = 0;
        ball.velocityX = 0;
    }

    if(ball.isTouching(surface3) && ball.bounceOff(surface3)){
        ball.shapeColor = "lightGreen";
    }

    if(ball.isTouching(surface4) && ball.bounceOff(surface4)){
        ball.shapeColor = "Orange";
    }

    ball.bounceOff(edges);
    
    drawSprites();

    //add condition to check if box touching surface and make it box
}
