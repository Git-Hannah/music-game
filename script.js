console.log("hello test");

let currentConcert = []; // the concert that was created: array of references of instruments of concerts
let posInConcert = -1; // -1 concert not playing; >0 concert playing

const recordButton = document.getElementById("record");
const trumpet = document.getElementById("trumpet");
const kazoo = document.getElementById("kazoo");
const instruments = [trumpet, kazoo];
const concert = document.getElementById("concert");

let availableInstruments = ['trumpet', 'kazoo', 'placeholder-1', 'placeholder-2'];

let randomOrder = shuffleTracks(availableInstruments);
console.log("CHEAT: " + randomOrder);
let guess = []; //user guesses
console.log("available instruments:" + availableInstruments);// available instruments werden hier irgendwie gecasht

//let randomOrder = ['trumpet', 'kazoo', 'placeholder-1', 'placeholder-2'];

// function generateInstrumentButtons(buttonInstruments) {
//   let instrumentButtons = "";
//   console.log(availableInstruments);
//   for (let i = 0; i < availableInstruments.length; i++) {
//     let newButton = "<button onclick=\"orderSelect('kazoo')\" id=\"btn-kazoo\" type=\"button\">Kazoo</button>";
//     instrumentButtons = instrumentButtons + newButton;
//     console.log(instrumentButtons);
//   }
//   document.getElementById("instrument-buttons").innerHTML = instrumentButtons;
// }


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

function orderSelect(instrument) {
  guess.push(instrument);
  console.log("user order: " + guess);
  if (guess.length == randomOrder.length) {
    compare(randomOrder, guess);
    guess = []; //Resets the game! Game is reset to zero, triggers restart of game
  }
}

// TODO: WIN "Music to my ears!" /LOSE "Practice makes perfect!"

// Wird nirgendwo aufgerufen, noch vom Start Game Button:
function startGame() {
  console.log("start game" + availableInstruments);
  randomOrder = shuffleTracks(availableInstruments);
  onPlayConcert();  
}
