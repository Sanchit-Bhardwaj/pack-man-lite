


function preload(){
spimg = loadImage("snowtrap.png")
otimg = loadImage("old trap.png")
speedimg = loadImage("speed png.png")
dbimg = loadImage("dragon ball.png")
ghimg = loadImage("no motion.png")
ghimg1 = loadImage("right walk.png")
ghimg2 = loadImage("left walk.png")
ghost1img = loadImage("ghost 1.jpg")

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
cardboard5.shapeColor = "brown";

cardboard6 = createSprite(680,450,1100,20);
cardboard6.shapeColor = "brown";

cardboard7 = createSprite(130,165,20,150);
cardboard7.shapeColor = "brown";

cardboard8 = createSprite(130,385,20,150);
cardboard8.shapeColor = "brown";

cardboard9 = createSprite(1230,165,20,150);
cardboard9.shapeColor = "brown";

cardboard10 = createSprite(1230,385,20,150);
cardboard10.shapeColor = "brown";

cardboard11 = createSprite(200,280,20,150);
cardboard11.shapeColor = "brown";

cardboard12 = createSprite(1150,280,20,150);
cardboard12.shapeColor = "brown";

cardboard13 = createSprite(680,280,75,75);
cardboard13.shapeColor = "brown";

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

cardboard34 = createSprite(550,405,130,20);
cardboard34.shapeColor = "brown"

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

ghost1 = createSprite(200,300,10,10)
ghost1.addImage(ghost1img)


}
function draw(){
background("grey")

drawSprites();
}