var canvas=new fabric.Canvas('myCanvas');

playerX=10;
playerY=10;
block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
player_object.set({
    top:playerY,left:playerX
});
canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
    top:playerY,left:playerX
});
canvas.add(block_object);
    });
}

window.addEventListener("keydown",mykeydown);

function mykeydown (e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true && keyPressed=='80'){
        console.log("shift n P to increse the block size");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if(e.shiftKey==true && keyPressed=='77'){
        console.log("shift n M to decrese the block size");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
   
    if(keyPressed == '38') {
         up(); console.log("up"); 
        }
        
        if(keyPressed == '40') {
             down(); console.log("down"); 
            }

            if(keyPressed == '37') {
                left(); console.log("left"); 
               }

               if(keyPressed == '39') {
                right(); console.log("right"); 
               }


    if(keyPressed == '70')
	{
		new_image('https://i.postimg.cc/hGnyTPLB/ironman-face.png'); 
		console.log("f");
	}
	if(keyPressed == '66')
	{
		new_image('https://i.postimg.cc/FscwL6M0/spiderman-body.png'); 
		console.log("b");
	}
	if(keyPressed == '76')
	{
		new_image('https://i.postimg.cc/KzF6GDqt/hulk-legs.png'); 
		console.log("l");
	}
	if(keyPressed == '82')
	{
		new_image('https://i.postimg.cc/8s8BGtwS/thor-right-hand.png'); 
		console.log("r");
	}
	if(keyPressed == '72')
	{
		new_image('https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png'); 
		console.log("h");
    }
}

function up(){
    if(playerY>=0){
        playerY=playerY-block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(playerY<=500){
        playerY=playerY+block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(playerX>=0){
        playerX=playerX-block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(playerX<=850){
        playerX=playerX+block_width;
        canvas.remove(player_object);
        player_update();
    }
}