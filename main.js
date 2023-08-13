difference = 0;
rightWristX = 0;
leftWristX = 0;

 function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLooaded);
    poseNet.on('pose' , gotPoses);
 }
   function modelLooaded(){
   console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
  if(results.length  > 0)
  {
   console.log(results);

   leftWristX = results[0].pose.leftWrist.x;
   rightWristX = results[0].pose.rightWrist.x;
   difference = floor(leftWristX - rightWristX)

   console.log = ("leftWristX  = " + leftWristX + "rightWristx = " + rightWristX + "difference = " +difference);
  }   
}
function draw(){
background('#6C91C2');

    document.getElementById("font_size").innerHTML = "Tamanho da fonte será = " + difference+"px";
    textsize(difference);
    fill('#FFE787');
    text('Pedro', 50, 400);
}