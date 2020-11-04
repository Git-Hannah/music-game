console.log("hello test");

let currentConcert = []; // the concert that was created: array of references of instruments of concerts
let posInConcert = -1; // -1 concert not playing; >0 concert playing

const recordButton = document.getElementById("record");
const trumpet = document.getElementById("trumpet");
const kazoo = document.getElementById("kazoo");
const instruments = [trumpet, kazoo];
const concert = document.getElementById("concert");
let guess = [];

/* 
Listener
--------------------------------------------------------
*/
trumpet.addEventListener("ended", function () {
  soundFinished(trumpet);
});

kazoo.addEventListener("ended", function () {
  soundFinished(kazoo);
});

//Records the button
function record() {
  //click on a certain element, it pushes the value of interface
  guess.push(element.value);
  //this runs until guess.length == randomsequence.length
}
function playTrumpet() {
  console.log("trumpet plays");

  trumpet.play();
}

function playKazoo() {
  kazoo.play();
}

function onPlayConcert() {
  currentConcert = shuffleTracks([...instruments]);
  posInConcert = 0;
  currentConcert[0].play();
}

// Triggered by end of audio
function soundFinished(sound) {
  console.log("ende von sound + ", sound);
  if (posInConcert !== -1) {
    posInConcert += 1;
    if (posInConcert >= currentConcert.length) {
      console.log("end of concert");
      posInConcert = -1;
    } else {
      currentConcert[posInConcert].play();
    }
  }
}

// TODO: WIN "Music to my ears!" /LOSE "Practice makes perfect!"
