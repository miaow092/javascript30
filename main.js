const keys = document.querySelector(".keys");

function SoundKbd(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  if (!key) return;
  key.classList.add("playing");
}

keys.addEventListener("transitionend", (event) => {
  const key = event.target.dataset.key;
  if (event.propertyName !== "transform") {
    return;
  } else if (key) {
    const romoveClassName = document.querySelector(`div[data-key="${key}"]`);
    romoveClassName.classList.remove("playing");
  }
});

document.addEventListener("keydown", SoundKbd);
