


function preload(){

spimg = loadImage("snowtrap.png")

otimg = loadImage("old trap.png")

speedimg = loadImage("speed png.png")

dbimg = loadImage("dragon ball.png")

ghimg = loadImage("no motion.png")

ghimg1 = loadImage("right walk.png")

ghimg2 = loadImage("left walk.png")

ghost1img = loadImage("ghost 1.png")

caveimg = loadImage("cave.png")

ghost2img = loadImage("ghost 2.png")

ghost3img = loadImage("ghost 3.png")

ghost4img = loadImage("ghost 4.png")

ghost5img = loadImage("ghost 5.png")

ghost6img = loadImage("ghost 6.png")


}
function setup(){
createCanvas(windowWidth-200,windowHeight-175)
cardboard1 = createSprite(700,20,1400,40);
cardboard1.shapeColor = "cyan";

cardboard2 = createSprite(20,300,40,800);
cardboard2.shapeColor = "cyan";

cardboard3 = createSprite(700,530,1400,40);
cardboard3.shapeColor = "cyan";

cardboard4 = createSprite(1320,300,40,800);
cardboard4.shapeColor = "cyan";

cardboard5 = createSprite(680,100,1100,20);
cardboard5.shapeColor = "black";

cardboard6 = createSprite(680,450,1100,20);
cardboard6.shapeColor = "black";

cardboard7 = createSprite(130,165,20,150);
cardboard7.shapeColor = "black";

cardboard8 = createSprite(130,385,20,150);
cardboard8.shapeColor = "black";

cardboard9 = createSprite(1230,165,20,150);
cardboard9.shapeColor = "black";

cardboard10 = createSprite(1230,385,20,150);
cardboard10.shapeColor = "black";

cardboard11 = createSprite(200,280,20,150);
cardboard11.shapeColor = "brown";

cardboard12 = createSprite(1150,280,20,150);
cardboard12.shapeColor = "brown";

cardboard13 = createSprite(680,280,75,75);
cardboard13.shapeColor = "brown";
cardboard13.addImage(caveimg)
cardboard13.scale = 0.4


cardboard14 = createSprite(680,360,160,20);
cardboard14.shapeColor = "brown";

cardboard15 = createSprite(600,340,20,60);
cardboard15.shapeColor = "brown";

cardboard16 = createSprite(600,240,20,60);
cardboard16.shapeColor = "brown";

cardboard17 = createSprite(760,340,20,60);
cardboard17.shapeColor = "brown";

cardboard18 = createSprite(760,240,20,60);
cardboard18.shapeColor = "brown";

cardboard19 = createSprite(680,200,180,20);
cardboard19.shapeColor = "brown";

cardboard20 = createSprite(580,260,60,20);
cardboard20.shapeColor = "brown";

cardboard21 = createSprite(580,320,60,20);
cardboard21.shapeColor = "brown";

cardboard22 = createSprite(780,260,60,20);
cardboard22.shapeColor = "brown";

cardboard23 = createSprite(780,320,60,20);
cardboard23.shapeColor = "brown";

cardboard24 = createSprite(300,250,20,300);
cardboard24.shapeColor = "brown"

cardboard25 = createSprite(345,400,110,20);
cardboard25.shapeColor = "brown"

cardboard26 = createSprite(390,310,20,200);
cardboard26.shapeColor = "brown"

cardboard27 = createSprite(450,250,20,170);
cardboard27.shapeColor = "brown"

cardboard28 = createSprite(490,175,100,20);
cardboard28.shapeColor = "brown"

cardboard29 = createSprite(1050,300,20,300);
cardboard29.shapeColor = "brown"

cardboard30 = createSprite(1000,160,100,20);
cardboard30.shapeColor = "brown"

cardboard31 = createSprite(950,250,20,200);
cardboard31.shapeColor = "brown"

cardboard32 = createSprite(890,300,20,150);
cardboard32.shapeColor = "brown"

cardboard33 = createSprite(850,370,100,20);
cardboard33.shapeColor = "brown"

cardboard34 = createSprite(500,405,130,20);
cardboard34.shapeColor = "brown"

cardboard35 = createSprite(850,150,130,20);
cardboard35.shapeColor = "brown"



snowtrap = createSprite(280,425,10,10) 
snowtrap.addImage(spimg)
snowtrap.scale = 0.2

holdtrap = createSprite(1080,130,10,10)
holdtrap.addImage(otimg)
holdtrap.scale = 0.15

speed = createSprite(350,360,10,10)
speed.addImage(speedimg)
speed.scale = 0.1

dragonball = createSprite(1000,200,10,10)
dragonball.addImage(dbimg)
dragonball.scale = 0.1 

ghosthunter = createSprite(200,150,10,10)
ghosthunter.addImage(ghimg)
ghosthunter.scale = 0.08

ghost1 = createSprite(750,300,10,10)
ghost1.addImage(ghost1img)
ghost1.scale = 0.1

ghost2 =createSprite(720,300,10,10)
ghost2.addImage(ghost2img)
ghost2.scale = 0.1

ghost3 = createSprite(630,300,10,10)
ghost3.addImage(ghost3img)
ghost3.scale = 0.1

ghost4 = createSprite(650,300,10,10)
ghost4.addImage(ghost4img)
ghost4.scale = 0.1

ghost5 = createSprite(670,300,10,10)
ghost5.addImage(ghost5img)
ghost5.scale = 0.1

ghost6 = createSprite(690,300,10,10)
ghost6.addImage(ghost6img)
ghost6.scale = 0.1




}
function draw(){
background("grey")

if(keyDown(UP_ARROW)){
    ghosthunter.y= ghosthunter.y-2
    ghosthunter.changeImage(ghimg)
}
if(keyDown(DOWN_ARROW)){
    ghosthunter.y= ghosthunter.y+2
    ghosthunter.changeImage(ghimg)
}
if(keyDown(LEFT_ARROW)){
    ghosthunter.x= ghosthunter.x-2
    ghosthunter.changeImage(ghimg2)
}
if(keyDown(RIGHT_ARROW)){
    ghosthunter.x= ghosthunter.x+2
    ghosthunter.changeImage(ghimg1)
}
ghost6.velocityX = 0
ghost6.velocityY = -1

ghost5.velocityX = 2
ghost5.velocityY = -1

ghost4.velocityX = 1.1
ghost4.velocityY = 0

ghost3.velocityX = 2
ghost3.velocityY = -1

ghost2.velocityX = -2
ghost2.velocityY = -1

ghost1.velocityX = -1
ghost1.velocityY = 3


ghosthunter.collide(cardboard1);
ghosthunter.collide(cardboard2);
ghosthunter.collide(cardboard3);
ghosthunter.collide(cardboard4);
ghosthunter.collide(cardboard5);
ghosthunter.collide(cardboard6);
ghosthunter.collide(cardboard7);
ghosthunter.collide(cardboard8);
ghosthunter.collide(cardboard9);
ghosthunter.collide(cardboard10);
ghosthunter.collide(cardboard11);
ghosthunter.collide(cardboard12);
ghosthunter.collide(cardboard13);
ghosthunter.collide(cardboard14);
ghosthunter.collide(cardboard15);
ghosthunter.collide(cardboard16);
ghosthunter.collide(cardboard17);
ghosthunter.collide(cardboard18);
ghosthunter.collide(cardboard19);
ghosthunter.collide(cardboard20);
ghosthunter.collide(cardboard21);
ghosthunter.collide(cardboard22);
ghosthunter.collide(cardboard23);
ghosthunter.collide(cardboard24);
ghosthunter.collide(cardboard25);
ghosthunter.collide(cardboard26);
ghosthunter.collide(cardboard27);
ghosthunter.collide(cardboard28);
ghosthunter.collide(cardboard29);
ghosthunter.collide(cardboard30);
ghosthunter.collide(cardboard31);
ghosthunter.collide(cardboard32);
ghosthunter.collide(cardboard33);
ghosthunter.collide(cardboard34);
ghosthunter.collide(cardboard35);



edges = createEdgeSprites();
ghost1.bounce(cardboard5,backoff);
ghost1.bounce(cardboard6,backoff);
ghost1.bounce(cardboard7,backoff);
ghost1.bounce(cardboard8,backoff);
ghost1.bounce(cardboard9,backoff);
ghost1.bounce(cardboard10,backoff);
ghost2.bounce(cardboard5);
ghost2.bounce(cardboard6);
ghost2.bounce(cardboard7);
ghost2.bounce(cardboard8);
ghost2.bounce(cardboard9);
ghost2.bounce(cardboard10);
ghost3.bounce(cardboard5);
ghost3.bounce(cardboard6);
ghost3.bounce(cardboard7);
ghost3.bounce(cardboard8);
ghost3.bounce(cardboard9);
ghost3.bounce(cardboard10);
ghost4.bounce(cardboard5);
ghost4.bounce(cardboard6);
ghost4.bounce(cardboard7);
ghost4.bounce(cardboard8);
ghost4.bounce(cardboard9);
ghost4.bounce(cardboard10);
ghost5.bounce(cardboard5);
ghost5.bounce(cardboard6);
ghost5.bounce(cardboard7);
ghost5.bounce(cardboard8);
ghost5.bounce(cardboard9);
ghost5.bounce(cardboard10);
ghost6.bounce(cardboard5);
ghost6.bounce(cardboard6);
ghost6.bounce(cardboard7);
ghost6.bounce(cardboard8);
ghost6.bounce(cardboard9);
ghost6.bounce(cardboard10);













//if (ghosthunter.isTouching(cardboard1)||ghosthunter.isTouching(cardboard2)||ghosthunter.isTouching(cardboard3) ||ghosthunter.isTouching(cardboard4)||ghosthunter.isTouching(cardboard5)||ghosthunter.isTouching(cardboard6)||ghosthunter.isTouching(cardboard7) ||ghosthunter.isTouching(cardboard8)||ghosthunter.isTouching(cardboard9)||ghosthunter.isTouching(cardboard10) ||ghosthunter.isTouching(cardboard11)||ghosthunter.isTouching(cardboard12)||ghosthunter.isTouching(cardboard13) ||ghosthunter.isTouching(cardboard14)||ghosthunter.isTouching(cardboard15)||ghosthunter.isTouching(cardboard16) ||ghosthunter.isTouching(cardboard17)||ghosthunter.isTouching(cardboard18)||ghosthunter.isTouching(cardboard19) ||ghosthunter.isTouching(cardboard20)||ghosthunter.isTouching(cardboard21)||ghosthunter.isTouching(cardboard22)||
//ghosthunter.isTouching(cardboard19)||ghosthunter.isTouching(cardboard20)||ghosthunter.isTouching(cardboard21) ||ghosthunter.isTouching(cardboard22)||ghosthunter.isTouching(cardboard23)||ghosthunter.isTouching(cardboard24)||ghosthunter.isTouching(cardboard25) ||ghosthunter.isTouching(cardboard26)||ghosthunter.isTouching(cardboard27)||ghosthunter.isTouching(carboard28) ||ghosthunter.isTouching(cardboard29)||ghosthunter.isTouching(cardboard30)||ghosthunter.isTouching(cardboard31) ||ghosthunter.isTouching(cardboard32)||ghosthunter.isTouching(cardboard33)||ghosthunter.isTouching(cardboard34) ||ghosthunter.isTouching(cardboard35))

 { 
     }

drawSprites();
}
function backoff(){
    ghost1.velocityX = -ghost1.velocityX
    ghost1.velocityY = -ghost1.velocityY

}