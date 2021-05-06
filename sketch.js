


function preload(){


}
function setup(){
createCanvas(windowWidth-200,windowHeight-175)
cardboard1 = createSprite(700,20,1400,40);
cardboard1.shapeColor = "brown";

cardboard2 = createSprite(20,300,40,800);
cardboard2.shapeColor = "brown";

cardboard3 = createSprite(700,530,1400,40);
cardboard3.shapeColor = "brown";

cardboard4 = createSprite(1320,300,40,800);
cardboard4.shapeColor = "brown";

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

/*cardboard20 = createSprite(350,270,120,20);
cardboard20.shapeColor = "brown";

cardboard21 = createSprite(250,390,100,20);
cardboard21.shapeColor = "brown";

cardboard22 = createSprite(330,370,20,100);
cardboard22.shapeColor = "brown";
*/
}
function draw(){
background("black")

drawSprites();
}