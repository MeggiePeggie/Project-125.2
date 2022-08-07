difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
}

function modelLoaded()
{
    console.log('PoseNet is initilazied!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background('#969A97');
    textSize(difference);
    fill('skyblue');
    text('Meg', 50, 400);
}