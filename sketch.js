var bullet, wall;
var speed, weight, damage, thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 10)
  wall = createSprite(1500, 200, thickness, height/2)

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  
}

function draw() {
  background("black");  
  drawSprites();

  bullet.velocityX = speed;
  bullet.shapeColor = color("white")
  wall.shapeColor = color("white")

  if(wall.x-bullet.x < bullet.width/2+wall.width/2){
      
    bullet.velocityX = 0;
  
    if(damage>10){
      wall.shapeColor = color("red");
    }

    if(damage<10){
      wall.shapeColor = color("green");
    }

  }
  
  
}