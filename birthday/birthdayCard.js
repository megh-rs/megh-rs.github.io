function togglePlay(audio) {
  var myAudio = document.getElementById(audio);
  var isPlaying = false;
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};
