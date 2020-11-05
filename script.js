console.log("Fantastic Music Game!");

/* Arrays
--------------------------------------------------------*/
let currentConcert = []; // the concert that will be created: array of references of instruments of concerts
let posInConcert = -1; // Position in concert array: -1 concert not playing; >0 concert playing

/* Variables
--------------------------------------------------------*/
const trumpet = document.getElementById("trumpet");
const kazoo = document.getElementById("kazoo");
const ukulele = document.getElementById("ukulele");
const tambourine = document.getElementById("tambourine");

const instruments = [trumpet, kazoo, ukulele, tambourine];
const concert = document.getElementById("concert");

let availableInstruments = ['trumpet', 'kazoo', 'ukulele', 'tambourine'];

let randomOrder = shuffleTracks([...availableInstruments]); //shuffles the availableInstruments - array
//let randomOrderInstruments = shuffleTracks([...instruments]);
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


/* Players
---------------------------------------------------------*/
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

/* Shuffler
--------------------------------------------------------*/
// plays the random order of sounds:
function onPlayConcert() {  
    console.log("play Concert");
  guess = []; 
  currentConcert = shuffleTracks([...instruments]);
  posInConcert = 0;
    console.log("current Concert" + currentConcert[0]);
  currentConcert[0].play();
  //console.log(currentConcert[0]);
    console.log("ready to choose order");
}

/* Finisher
--------------------------------------------------------*/
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

/* Selector and Comparer
--------------------------------------------------------*/
// selects and logs the instruments in the order of the clicks of the user
function orderSelect(instrument) {
  switch (instrument) {
    case 'trumpet': 
      guess.push(trumpet);
      break;
    case 'kazoo': 
      guess.push(kazoo);
      break;
    case 'ukulele': 
      guess.push(ukulele);
      break;
    case 'tambourine': 
      guess.push(tambourine);
      break;    
  }
  //guess.push(instrument);  //old variant, bettered by switch statement above
  console.log("user order: " + guess);
  if (guess.length == randomOrder.length) {

    //changed randomOrder to currentConcert to DEFINITELY fix comparison:
    //YAY I KNEW WHAT TO CHANGE!!! Just not quite how :o) help is good!

    compare(currentConcert, guess);    // calls the compare function in utility.js
    //guess = []; //Resets the game! Game is reset to zero, triggers restart of game
  }
}





// OLD CODE
// left it in to show how very hard I worked ;o) 
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
