img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(1240,336);
    canvas.parent('canvas');

	InSetupinstialize(mario);

	video = createcapture(VIDEO);
	video.size(600,300);
	video.parent("game_console")
}

function draw() {
game()
background("#D3D3D3")
if(noseX < 300)
{
	marioX = marioX - 1;
}
if(noseX > 300)
{
	marioX = marioX + 1;
}
if(noseY < 150)
{
	marioY = marioY - 1;
}
 image(img,marioX, marioY,40,70);
}
function setup(){
	createCanvas(650,400);
	video = createCapture(VIDEO);
   video.size(600,300);

   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
	console.log('Model Loaded!');
}
function gotPoses (results)
{
	if(results.lenght > 0 )
	{
		consolelog(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

	}
}





