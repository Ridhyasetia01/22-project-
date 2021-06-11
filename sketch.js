var tom,cat1,cat2,cat3;
var mouse1,mouse,mouse2,mouse3;


function preload() {
    cat1=loadAnimation("images/cat1.png");
    b1=loadImage("images/garden.png");
    mouse1=loadAnimation("images/mouse4.png");
    mouse2=loadAnimation("images/mouse3.png","images/mouse2.png");
  cat2=loadAnimation("images/cat2.png","images/cat3.png");
  mouse3=loadAnimation("images/mouse1.png");
  cat3=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom=createSprite(800,600);
    tom.addAnimation("cat",cat1);
    tom.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("jerry",mouse1);
    mouse.scale=0.1;

}

function draw() {

    background(b1);

  if(tom.x - mouse.x < (tom.width - mouse.width)/2){
    mouse.addAnimation("jerry3",mouse3);
    mouse.changeAnimation("jerry3");
    tom.addAnimation("tom3",cat3);
    tom.changeAnimation("tom3");
    tom.velocityX=0;
    tom.x=tom.x+300;
  }
  

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
mouse.addAnimation("jerry2",mouse2);
mouse.changeAnimation("jerry2");
tom.addAnimation("tom2",cat2);
tom.changeAnimation("tom2");
tom.velocityX=-2;


  }




}
