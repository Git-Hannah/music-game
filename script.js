console.log('hello test');

const trumpet = document.getElementById("trumpet");   
function playTrumpet() { 
  console.log("trumpet plays")
    trumpet.play(); 
} 
function pauseTrumpet() { 
    trumpet.pause(); 
} 

const kazoo = document.getElementById("kazoo");
function playKazoo() {
  kazoo.play();
}
function pauseKazoo() {
  kazoo.pause();
}

const concert = document.getElementById("concert");
function randomInstruments() {
  console.log("randomInstruments");
  let randomPlaylist = ["trumpet", "kazoo"];

}
