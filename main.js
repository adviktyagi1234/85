canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
width_car=85;
height_car=125;
greencarX = 10;
greencarY = 10;

function add() {
	background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    greencar_imageTag = new Image();
    greencar_imageTag.onload = uploadgreencar();
    greencar_imageTag.src = 'car2.png';
}     
function uploadBackground() {
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag, greencarX, greencarY, width_car, height_car);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencarY >= 0)
{
    greencarY=greencarY-10;
    console.log("when up arrow is pressed, X="+greencarX+"|y="+greencarY);
    uploadBackground();
    uploadgreencar();
}
}

function down()
{
	if (greencarY <= 500)
{
    greencarY=greencarY+10;
    console.log("when down arrow is pressed, X="+greencarX+"|y="+greencarY);
    uploadBackground();
    uploadgreencar();
}
}

function left()
{
	if (greencarX >= 0)
{
    greencarX=greencarX-10;
    console.log("when left arrow is pressed, X="+greencarX+"|y="+greencarY);
    uploadBackground();
    uploadgreencar();
}
}

function right()
{
	if (greencarY <= 700)
{
    greencarX=greencarX+10;
    console.log("when right arrow is pressed, X="+greencarX+"|y="+greencarY);
    uploadBackground();
    uploadgreencar();
}
}
