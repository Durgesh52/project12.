var jake, jake_running, coin, coinImg, energyImg,bomb
var groundimage

function preload() {
  //pre-load images
  jake_running = loadAnimation("runner-1.png" , "runner-2.png");
  groundImage = loadImage("path.png");
  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png")
  energyImg = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //createing  sprites 
  ground = createSprite(200, -100);
  ground.addAnimation("path", groundImage);
  ground.scale = 0.9;
  ground.velocityY = 8;
  ground.tint = 'yellow';
  
  coin = createSprite(200, 10);
  coin.addAnimation("coin", coinImg);
  coin.scale = 0.3;
  coin.velocityY = 8;
  
  coin1 = createSprite(120, 10);
  coin1.addAnimation("coin", coinImg);
  coin1.scale = 0.3;
  coin1.velocityY = 8;
  
  jake = createSprite(200,200);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.05;
  
  bomb = createSprite(200, -100);
  bomb.addAnimation("bomb", bombImg);
  bomb.scale = 0.05;
  bomb.velocityY = 8;

invisibleGround = createSprite(370, 200, 100, 400);
  invisibleGround.visible = false;
  
  invisibleGround2 = createSprite(40, 200, 100, 400);
  invisibleGround2.visible = false;
  
  energy = createSprite(200, -2000);
  energy.addAnimation("energy", energyImg);
  energy.scale = 0.05;
  energy.velocityY = 10;
}

  function draw() {
    
    background("white");
    
   if(ground.y > 400){
     ground.y=height /2
   }
    
    jake.x=World.mouseX;
        drawSprites();
  
  
      } 
