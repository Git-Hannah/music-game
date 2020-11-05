// Shuffles elements in array
function shuffleTracks(tracks) {
    console.log("NEW SHUFFLE ORDER: " + tracks)
    let shuffled = [];
    let tracksCopy = tracks;
    while (tracksCopy.length > 0) {
      let random = Math.floor(Math.random() * tracksCopy.length);
      shuffled.push(tracksCopy[random]);
      tracksCopy.splice(random,1);
    }
    console.log("shuffled: " + shuffled);
    return shuffled;
  }

// Compares two arrays
// compares the randomOrder array to the user guess:
function compare(random, guess){
    console.log(random);
    console.log(guess);
   for (let i = 0; i < random.length; i++) {
       if (random[i] != guess[i]) {
           console.log("LOST!");
           loseAnimation();
            return false;
        }
   }
   console.log("WON!");
   winAnimation();
   return true;
  }

function winAnimation() {
   document.getElementById("animation-box-topic").innerText = "You Win!";
   document.getElementById("animation-box-details").innerText = "Well Done! Play Again!";
}
   
function loseAnimation() {
    document.getElementById("animation-box-topic").innerText = "You Lost!";
    document.getElementById("animation-box-details").innerText = "Practice makes perfect! Play Again!";
}


