nx = 0;
ny = 0;
f = 0;

function preload(){
c = loadImage("0.png");
}

function setup(){
canvas = createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log("POSENET IS INITIALISED");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nx = results[0].pose.nose.x - 32;
        ny = results[0].pose.nose.y;
    }
}
function draw(){
image(video, 0 , 0 , 400,400);
image(c,nx,ny,70,50);
}
function take_snap_of_clown(){
    save("heheboi.png")
}