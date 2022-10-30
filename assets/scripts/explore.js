// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const myButton = document.querySelector('button');
  const smile = document.querySelector('[alt="Smiling face"]')
  var dict = {};

  synth.addEventListener('voiceschanged', () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = voices[i].name;
      voiceSelect.appendChild(option);
      dict[option.value] = voices[i];
    }
  });

  myButton.addEventListener('click', (event) => {
    //instead of adding unique eventListeners for each value, they can be consolidated into the button
    const utter = new SpeechSynthesisUtterance(textInput.value);
    utter.voice = dict[voiceSelect.value];
    synth.speak(utter);
    smile.src = "assets/images/smiling-open.png";
    const myInterval = setInterval(function() {
      if(!synth.speaking) {
        smile.src = "assets/images/smiling.png";
        clearInterval(myInterval);
      }
    }, 50);
  });
}