
let draft, ready;
let playMode = 'sustain';
let sample;

function preload(){
  // put preload code here

  ready = loadImage("billie2.jpg");
  draft = loadImage("billienero.jpg");


}

function setup() {


  createCanvas(windowWidth,windowHeight)
  noCursor();
  cursor("brush.png", 20, -10);
  image(ready, 0, 0);
  image(draft, 0, 0);
  soundFormats('mp3', 'ogg');
  sample = loadSound('buryafriend2.mp3');

}



function mouseDragged() {
  copy(ready, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}




function draw() {
  // put drawing code here


  //let str = 'Every click is a new beginning... Find Billie';


  var myText = "Every click is a new beginning... Find Billie";

  textFont("Xanh Mono");
  textAlign(CENTER);
  textSize(60);
  fill("white");
  text(myText, width/2, height/2);



  }

  function mouseClicked() {
    sample.play();
  }
  function keyPressed(k) {
    togglePlayMode();
  }

  function togglePlayMode() {
    if (playMode === 'sustain') {
      playMode = 'restart';
    } else {
      playMode = 'sustain';
    }
    sample.playMode(playMode);







}
