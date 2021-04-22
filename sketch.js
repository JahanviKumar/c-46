var earth,earthImg;
var goodObstaclesGroup,badObstaclesGroup;
var goodObstacle1, goodObstacle2 ,goodObstacle3;
var badObstacle1,badObstacle2,badObstacle3 , badObstacle4;
var back1, backImg;

var score=0;


function preload(){
  earthImg = loadImage("earthCute.png");
  badObstacle1=loadImage("thunder.png");
  badObstacle2=loadImage("tapOpen.png");
  badObstacle3=loadImage("garbage.png");
  badObstacle4=loadImage("smoke.png");
  goodObstacle1=loadImage("lightOff.png");
  goodObstacle2=loadImage("3rs.png");
  backimg=loadImage("blackStars.jpg");
  //goodObstacle3=loadImage("");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  fill("white")
  text("Score:" + score, 500, 100);
  console.log(score);
  

  back1=createSprite(windowWidth/2,windowHeight/2,windowWidth+100,windowHeight);
  back1.addImage(backimg);
  back1.x=back1.width/2;
  back1.velocityX=-4;
  back1.scale = 4

  earth = createSprite(200,height-90,90,70);
  earth.addImage(earthImg);
  earth.scale=0.5;

  ground = createSprite(width/2,height-90,width,50);
  ground.x = ground.width /2;
  ground.visible = false;
  ground.shapeColor="brown"

  goodObstaclesGroup = new Group();
  badObstaclesGroup = new Group();

}
function draw() {

  background("white");
 
  ground.velocityX = -2;

  if (ground.x < 0)
        {
          ground.x = ground.width/2;
        }
  if(back1.x< 550)
  {
     back1.x=back1.width/2;
  }
   if(earth.y>90)
   {
  if(keyDown("space")) {
    earth.velocityY = -12;
  }
  }
   earth.velocityY = earth.velocityY + 0.8
   earth.collide(ground);
 console.log(earth.y)

 spawnGoodObstaclesGroup();
 spawnBadObstaclesGroup();

 for(var i=0;i<goodObstaclesGroup.length;i++)
 {
  if(goodObstaclesGroup.get(i).isTouching(earth))
  {
    score = score+5;
    goodObstaclesGroup.get(i).destroy();
  }

 }

  drawSprites();
  fill("white")
  text("SCORE: "+ score, windowWidth-100,50);
}

function  spawnGoodObstaclesGroup()
{
  var randY = random(100,  height-200);
  if(frameCount % 160 === 0) {
    var obstacle = createSprite(width , randY,10,40);
    obstacle.velocityX = -6;

    var rand = Math.round(random(1,2));
   switch(rand) {
      case 1: obstacle.addImage(goodObstacle1);
      break;
      case 2: obstacle.addImage(goodObstacle2);
      break;
      default: break;
    }
    obstacle.scale = 0.2;
    obstacle.lifetime = width/4;
    goodObstaclesGroup.add(obstacle);
  }
}

function  spawnBadObstaclesGroup()
{
  var randY = random(100,  height-200);
  if(frameCount % 250 === 0) {
    var obstacle = createSprite(width , randY,10,40);
    obstacle.velocityX = -6;

    var rand = Math.round(random(1,2));
   switch(rand) {
      case 1: obstacle.addImage(badObstacle1);
      break;
      case 2: obstacle.addImage(badObstacle2);
      break;
      case 1: obstacle.addImage(badObstacle3);
      break;
      case 2: obstacle.addImage(badObstacle4);
      break;
      default: break;
    }
    obstacle.scale = 0.3;
    obstacle.lifetime = width/4;
    badObstaclesGroup.add(obstacle);
  }
}
