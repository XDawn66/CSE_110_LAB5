// expose.j

window.addEventListener("DOMContentLoaded", init);

function init() {
  const jsConfetti = new JSConfetti();
  const dropdown = document.getElementById("horn-select");
  const img_holder = document.querySelector("img");
  let sound_path = "";
  let audio = "";
  let volume_value = 50;
  dropdown.addEventListener("change", function () {
    let select_value = dropdown.value;
    let img_path = `assets/images/${select_value}.svg`;
    img_holder.setAttribute("src", img_path);
  });

  const sound_button = document.querySelector("button");
  sound_button.addEventListener("click", function () {
    let select_value = dropdown.value;
    sound_path = `assets/audio/${select_value}.mp3`;
    audio = new Audio(sound_path);
    audio.volume = volume_value / 100;
    audio.play();
    if (select_value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  const value_controller = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");

  value_controller.addEventListener("input", function () {
    volume_value = parseInt(value_controller.value);

    if (volume_value === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    } else if (volume_value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (volume_value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
  });
}
