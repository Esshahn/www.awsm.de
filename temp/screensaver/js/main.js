function init(){
  // init assets
  stage= new CanvasStage("main",1200,800);
  sX = stage.width/2;
  sY = stage.height/2; 
  canvas = new CanvasObj(2000,2000); 
  object = new Sprite("gfx/pixel2.gif");
  canvas.clear();
  stage.clear();
  oldX = canvas.width/2;
  oldY = canvas.height/2;
  x = oldX;
  y = oldY;
  dirX = 1;
  dirY = 1;
  randomLengthX = 10;
  randomLengthY = 10;
  multiplier = 2;  
  toggleY = 0;
  toggleX = 0;
  sin = 0;
  canvas.ctx.globalCompositeOperation='lighter';
  render();
}


function move(){
  sin += 0.01;
  toggleX ++;
  toggleY ++;
  if(toggleX >= randomLengthX){
    dirX = Math.random()*multiplier-multiplier/2;
   
    toggleX = 0;
    randomLengthX = Math.random()*100+40;
  }
  if(toggleY >= randomLengthY){
   
    dirY = Math.random()*multiplier-multiplier/2;
    toggleY = 0;
    randomLengthY = Math.random()*100+40;
  }
   
    x = oldX + dirX;
    y = oldY + dirY; 
    oldX = x;
    oldY = y;
  
  //canvas.ctx.drawImage(object,x,y);

  canvas.ctx.beginPath();
  canvas.ctx.strokeStyle = "#080400";
  canvas.ctx.arc(x,y,5+Math.abs(Math.sin(sin)*20),0,2*Math.PI);
  canvas.ctx.stroke();
}

function render(){     
   
  move();     
  //stage.clear();
  stage.ctx.translate(sX,sY);
  stage.ctx.rotate(Math.PI / 180 / 6);
  stage.ctx.translate(-sX,-sY); 
  stage.ctx.drawImage(canvas,sX-x,sY-y);
  
  requestAnimFrame(render);
}
