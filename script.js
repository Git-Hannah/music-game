console.log("Fantastic Music Game!");

let currentConcert = []; // the concert that will be created: array of references of instruments of concerts
let posInConcert = -1; // Position in concert array: -1 concert not playing; >0 concert playing

const trumpet = document.getElementById("trumpet");
const kazoo = document.getElementById("kazoo");
const ukulele = document.getElementById("ukulele");
const tambourine = document.getElementById("tambourine");
//BUG?! :

const instruments = [trumpet, kazoo, ukulele, tambourine];
const concert = document.getElementById("concert");
//BUG?! :

let availableInstruments = ['trumpet', 'kazoo', 'ukulele', 'tambourine'];

// H E R E !!!!!!!!!!!!!!!!!!!!!!!
//HERE: instruments-array instead of string array??? or are the strings ids?

let randomOrder = shuffleTracks([...availableInstruments]); //shuffles the availableInstruments - array
console.log("CHEAT: " + randomOrder);
let guess = []; //user guesses
console.log("available instruments:" + availableInstruments);// available instruments werden hier irgendwie gecasht


/* Listeners
--------------------------------------------------------*/
trumpet.addEventListener("ended", function () {
  soundFinished(trumpet);
});
kazoo.addEventListener("ended", function () {
  soundFinished(kazoo);
});
ukulele.addEventListener("ended", function () {
  soundFinished(ukulele);
});
tambourine.addEventListener("ended", function () {
  soundFinished(tambourine);
});

// "Records" the selected button
function record() {         //click on a certain element, it pushes the value of interface  
  guess.push(element.value);  //this runs until guess.length == randomsequence.length  
}
// plays trumpet sound of html
function playTrumpet() {
  console.log("trumpet plays");
  trumpet.play();
}
// plays kazoo sound of html
function playKazoo() {
  kazoo.play();
}
// plays ukulele sound of html
function playUkulele() {
  ukulele.play();
}
// plays tambourine sound of html
function playTambourine() {
  tambourine.play();
}

// plays the random order of sounds:
function onPlayConcert() {
  console.log("play Concert");
  currentConcert = shuffleTracks([...instruments]);
  posInConcert = 0;
  console.log("current Concert" + currentConcert[0]);
  currentConcert[0].play();
  console.log(currentConcert[0]);
}

// Triggered by end of audio:
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

// selects and logs the instruments in the order of the clicks of the user
function orderSelect(instrument) {
  guess.push(instrument);
  console.log("user order: " + guess);
  if (guess.length == randomOrder.length) {

    //changed randomOrder to currentConcert to maybe fix comparison:
    compare(currentConcert, guess);    // calls the compare function in utility.js
    guess = []; //Resets the game! Game is reset to zero, triggers restart of game
  }
}




// Wird nirgendwo aufgerufen, BLeibsel von Start Game Button:
// function startGame() {
//   console.log("start game" + availableInstruments);
//   randomOrder = shuffleTracks(availableInstruments);
//   onPlayConcert();  
// }

//OLD version:
//let randomOrder = ['trumpet', 'kazoo', 'placeholder-1', 'placeholder-2'];
//Failed attempt in generating buttons:
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

// OLD Solution, now all different
//const recordButton = document.getElementById("record");
