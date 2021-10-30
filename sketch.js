rmoving = false;
lmoving = false;
umoving = false;

dock = false;
function preload() {
  bgimg = loadImage('images/spacebg.jpg');
  issimg = loadImage('images/iss.png');
  craftLeftImg = loadImage('images/spacecraft4.png');
  craftRightImg = loadImage('images/spacecraft3.png');
  craftUpImg = loadImage('images/spacecraft2.png');
  craftIdleImg = loadImage('images/spacecraft1.png');

}

function setup() {
  createCanvas(1200, 600);

  //craft
  craft = createSprite(500, 300, 20, 20);
  craft.addImage(craftIdleImg);
  craft.scale = 0.3;

  //iss
  iss = createSprite(400, 200, 20, 20);
  iss.addImage(issimg);
}

function draw() {
  background(bgimg);

  checkDock();

  console.log("craftx:" + craft.x, "crafty:" + craft.y);
 if(dock===false){
  move();
  vibrateCraft();

 }
   

  drawSprites();
}


function move() {
  //detect key events

  //right
  if (keyDown("RIGHT_ARROW")) {
    craft.x = craft.x + 10;

    rmoving = true;
  } else {
    rmoving = false;
  }
  //left
  if (keyDown('LEFT_ARROW')) {
    craft.x -= 10;
    lmoving = true;
  } else {
    lmoving = false;
  }
  //up
  if (keyDown('UP_ARROW')) {
    craft.y -= 10;
    umoving = true;
  } else {
    umoving = false;
  }

  //assign animations
  if (lmoving === true) {
    craft.addImage(craftLeftImg);
  }

  if (rmoving === true) {
    craft.addImage(craftRightImg);
  }

  if (umoving == true) {
    craft.addImage(craftUpImg);
  }

  if (lmoving === false && rmoving === false && umoving == false) {
    craft.addImage(craftIdleImg);
  }
}




function vibrateCraft() {
  if (lmoving === false && rmoving === false && umoving == false) {
    if (frameCount % 1 === 0) {
      rand = Math.round(random(1, 4));
      switch (rand) {
        case 1: craft.x -= Math.round(random(1, 3))
          break;
        case 2: craft.x += Math.round(random(1, 3))
          break;
        case 3: craft.y += Math.round(random(1, 3))
          break;
        case 4: craft.y -= Math.round(random(1, 3))
          break;
        default: break;
      }
    }

  }
}


function checkDock() {
  if (craft.x > 325 && craft.x < 335 && craft.y > 285 && craft.y < 295) {
    dock = true;
    fill('red')
    textSize(30);
    text('docking done',540,300,200,100);
  }
}