var muzich = " ";

lWristx = 0;
rWristx = 0;
lWristy = 0;
rWristy = 0;

function preload(){
    muzich = loadSound('music.mp3')
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, wakaWakaEE)
    poseNet.on('pose', safrica)
}
function draw(){
    image(video, 0, 0, 600, 500)

    fill('red')
    stroke('red');
    circle(lWristx, lWristy, 20)
    isnumberlWy = Number(lWristy);
    tira10 =floor(isnumberlWy)
    volume = tira10/500
    document.getElementById("volume").innerHTML = "Volume: "+volume;
    muzich.setVolume(volume) 
}
function babagi(){
    muzich.play();
}
function fortinaiti(){
    muzich.pause();
}
function wakaWakaEE(){
    console.log("TONERI E UM LIXO")
}
function safrica(results){
    if(results.length > 0){
        console.log(results)
        lWristx = results[0].pose.leftWrist.x;
        lWristy = results[0].pose.leftWrist.y;
        console.log("pulso esquerdo: " + lWristx + " pulso esquerdo y: " + lWristy)

        rWristx = results[0].pose.rightWrist.x;
        rWristy = results[0].pose.rightWrist.y;
        console.log("pulso direito: " + rWristx + " pulso direito y: " + rWristy)
    }
}