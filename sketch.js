var move,fix,a,b,c,d;

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 300, 50, 90);
  fix.shapeColor = "green";
  fix.debug = true;

  move = createSprite(400, 200, 100, 60);
  move.shapeColor = "green";
  move.debug = true;

  a = createSprite(100,100,50, 50);
  a.shapeColor = "green";
  a.debug = true;

  b = createSprite(200, 100,50,50);
  b.shapeColor = "green";
  b.debug = true;

  c = createSprite(300, 100, 50,50);
  c.shapeColor = "green";
  c.debug = true;

  d = createSprite(400, 100, 50,50);
  d.shapeColor = "green";
  d.debug = true;
 
}

function draw() {
  background("aquamarine");  

  move.x = mouseX;
  move.y = mouseY;
  
  if(isTouchingalgor(d,move)){
    d.shapeColor = "red";
    move.shapeColor = "red";
  }
  else{
    d.shapeColor = "green";
    move.shapeColor = "green";
  }

  drawSprites();
}

function isTouchingalgor(o1,o2) {
  if(o1.x-o2.x < o1.width/2+o2.width/2 &&
    o2.x - o1.x < o2.width/2+o1.width/2 &&
    o1.y-o2.y < o1.height/2+o2.height/2 &&
    o2.y - o1.y < o2.height/2+o1.height/2){
    return true;
  }
  else{
    return false;

  }

}
