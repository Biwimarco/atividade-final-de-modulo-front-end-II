const arrImgs = ["background1.png", "background2.jpeg", "background3.jpg"];
let index = 0;

function switchImg() {
  const body = document.body;
  body.style.backgroundImage = `url(../images/${arrImgs[index]})`;
  index = (index + 1) % arrImgs.length;
}

const iconSwitch = document.getElementById("iconHeader");
iconSwitch.addEventListener("click", switchImg);