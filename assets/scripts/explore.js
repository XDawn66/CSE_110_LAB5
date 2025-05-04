window.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  const textarea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const face = document.querySelector("img");

  function populateVoices() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = "";

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  populateVoices();

  talkButton.addEventListener("click", function () {
    const utterThis = new SpeechSynthesisUtterance(textarea.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.rate = 1;
    utterThis.pitch = 1;
    synth.speak(utterThis);

    utterThis.onstart = () => {
      face.src = "assets/images/smiling-open.png";
    };

    utterThis.onend = () => {
      face.src = "assets/images/smiling.png";
    };
  });
}
