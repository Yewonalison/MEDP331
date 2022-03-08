var my=document.getElementById("myVideo");

function playVideo(){
        my.play();
}

function pauseVideo(){
        my.pause();
}

function muteVideo(){
        my.muted=true;
}

function unmuteVideo(){
        my.muted=false;
}

function addToModifier() {
  let value = getModifier()
  playbackSpeed = playbackSpeed + value
  media.playbackRate = playbackSpeed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}

function subtractModifier() {
  let value = getModifier()
  playbackSpeed = playbackSpeed - value // update the global playback speed value
  //or we can shorthand this
  //playbackSpeed -= value
  // Set the playback speed
  media.playbackRate = playbackSpeed
  // Display the updated playback Speed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}

function zeroModifier() {
  playbackSpeed = 1; // set the global modifier to 0
  // Set the playback speed
  media.playbackRate = playbackSpeed

  // update the display
  let resultElement = O("playbackSpeed")
  resultElement.innerText = "Playback speed is 1"
}
