var boy_running, boy_collided, boy;
var seamonster_running, seamonster;
var backgroundImg, background;
var monsterAttackImg, monsterAttack, monsterAttackGroup
var spikeImg, spike, spikeGroup
var jumpSound, dieSound, checkpointSound;
var score;
var gameOver, restart, gameOverImage, restartImage;
var gameState = "play"

function preload(){
boy_running=loadImage("boy_running.png")
boy_collided=loadImage("boy_collided.png")
seamonster_running=loadImage("sea_monster.jpg")
backgroundImg=loadImage("Background.png")
monsterAttackImg=loadImage("monster_attack_obstacle.jpg")
spikeImg=loadImage("spike.png")
gameOverImage=loadImage("gameOver1.png")
restartImage=loadImage("restart1.png")
}

function setup() {
  createCanvas(600, 600);
  background = createSprite(300,300);
  background.addImage("background",backgroundImg);
  background.x = background.width / 2

  boy = createSprite(300,400)
  boy.addImage(boy_running)
  boy.scale=0.3

  seamonster = createSprite(100,390)
  seamonster.addImage(seamonster_running)
  seamonster.scale=0.3

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImage);
  
  restart = createSprite(300,140);
  restart.addImage(restartImage);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

      
  }

  function draw() {
    
  
   
    
 
  
  
  drawSprites()
  }
