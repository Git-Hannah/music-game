console.log('hello test');

const trumpet = document.getElementById("trumpet");   
const kazoo = document.getElementById("kazoo");


let instruments = [trumpet, kazoo];

let guess = [];

// Record input
// Create an array with input order

function record() {
  //click on a certain element, it pushes the value of interface
  guess.push(element.value)
  //this runs until guess.length == randomsequence.length
}
// Compare arrays
function compare(random, guess){
  if (random == guess) {
    return true
  } else {
    return false
  }
        // MAYBE TODO: Score + point to SCORE
}
        // TODO: WIN "Music to my ears!" /LOSE "Practice makes perfect!"

function playTrumpet() { 
  console.log("trumpet plays")
    trumpet.play(); 
} 
// function pauseTrumpet() { 
//     trumpet.pause(); 
// } 

function playKazoo() {
  kazoo.play();
}
// function pauseKazoo() {
//   kazoo.pause();
// }


const concert = document.getElementById("concert");
function randomInstruments() {
  console.log("randomInstruments");
  let randomPlaylist = ["trumpet", "kazoo"];

}

// Shuffle tracks to get random order

function shuffleTracks(tracks) {
  console.log("tracks", tracks, tracks.length)
  let shuffled = [];
  while (tracks.length > 0) {
    let random = Math.floor(Math.random() * tracks.length);
    shuffled.push(tracks[random]);
    tracks.splice(random,1);
  }
  console.log(shuffled);
  return shuffled
}
const randomSequence = shuffleTracks([...instruments]);
//console.log(randomSequence);​

function playConcert(sequence) {
  console.log(sequence)
  //loop through the array of tracks  (loop of your choice)
  for ( let i = 0; i < sequence.length; i++) {
    shuffleTracks(instruments);
    
    let output = 'Output: ';
      switch (instruments) {
        case trumpet:
          output += playTrumpet();
          break;
        case kazoo:
          output += playKazoo();
          break;
        default:
          console.log('Please record a sequence!');
      }
  }
  
  //switch statement
  //for each track check what is the instrument (trumpet)
  //play the instrument (trumpet.play())
}
playConcert(instruments)


