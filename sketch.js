var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1200,200,thickness,height/2);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = 30;
}

function draw() {
  background("pink");  

  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX=0;

    var deformation=0.5 *weight *speed*speed/25009;
    if(deformation>180){
      bullet.shapeColor="white";
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor="white";
    }
    if(deformation<100){
      bullet.shapeColor="white";
    }
  }

  if(hasCollided(bullet,wall)){

      bullet.velocityX=0;

      var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness/2);

      if(damage>10){
        wall.shapeColor=color(255,0,0);
      }
      if(damage<10){
        wall.shapeColor=color(0,255,0);
      }
   }

    console.log(damage);
    drawSprites();
  }

  function hasCollided(lwall,lbullet){
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
     return false;
  }