let buttons = document.querySelector(".set").children;

for (let btn of buttons) {
  // add click event listener
  btn.addEventListener("click", () => {
    btnEffect(btn.innerHTML);
    btnAnimation(btn.innerHTML);
  });
}

document.addEventListener("keydown", (e) => {
  btnEffect(e.key);
  btnAnimation(e.key);
});

function btnEffect(key) {
  if ("wasdjkl".includes(key)) {
    let sound = new Audio(`./sounds/${key}.mp3`);
    sound.play();
  }
}

function btnAnimation(key) {
  let btn = document.querySelector(`.${key}`);
  btn.classList.add("pressed");
  setTimeout(() => btn.classList.remove("pressed"), 100);
}
