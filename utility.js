
function shuffleTracks(tracks) {
    let shuffled = [];
    while (tracks.length > 0) {
      let random = Math.floor(Math.random() * tracks.length);
      shuffled.push(tracks[random]);
      tracks.splice(random,1);
    }
    return shuffled
  }
// Compares two arrays
function compare(random, guess){
    if (random == guess) {
      return true
    } else {
      return false
    }
          // MAYBE TODO: Score + point to SCORE
  }



