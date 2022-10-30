// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornIcon = document.querySelector('[alt="No image selected"]');
  const myAudio = document.querySelector('[class="hidden"]');
  myAudio.volume = 0.5;
  const jsConfetti = new JSConfetti();

  //currHorn is the name of the current horn
  var currHorn = null;

  hornSelect.addEventListener('change', (event) => {
    currHorn = event.target.value;
    if(currHorn == "air-horn") {
      hornIcon.src = "assets/images/air-horn.svg";
      myAudio.src = 'assets/audio/air-horn.mp3';
    }
    else if(currHorn == "car-horn") {
      hornIcon.src = "assets/images/car-horn.svg";
      myAudio.src = 'assets/audio/car-horn.mp3';
    }
    else if(currHorn == "party-horn") {
      hornIcon.src = "assets/images/party-horn.svg";
      myAudio.src = 'assets/audio/party-horn.mp3';
    }
  });

  const vol = document.getElementById('volume');
  const volIcon = document.querySelector('[alt="Volume level 2"]');
  vol.addEventListener('input', (event) => {
    //currVol is the volume value used for the icons 
    let currVol = event.target.value;
    myAudio.volume = currVol / 100;
    if(currVol == 0) {
      volIcon.src = "assets/icons/volume-level-0.svg";
    }
    else if(currVol >= 1 && currVol < 33) {
      volIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if(currVol >= 33 && currVol < 67) {
      volIcon.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  const myButton = document.querySelector('button');
  myButton.addEventListener('click', (event) => {
    myAudio.play();
    if(currHorn == "party-horn") {
      jsConfetti.addConfetti();
    }
  });

}