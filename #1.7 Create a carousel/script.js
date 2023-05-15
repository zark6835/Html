let offset = 0;

const pushSlider = document.querySelector(".slider-line");

document
  .querySelector(".slider-btn__next")
  .addEventListener("click", function () {
    offset = offset - 600;
    if (offset < -1200) {
      offset = 0;
    }
    pushSlider.style.left = offset + "px";

    circle();
  });

document
  .querySelector(".slider-btn__prev")
  .addEventListener("click", function () {
    offset = offset + 600;
    if (offset > 0) {
      offset = -1200;
    }
    pushSlider.style.left = offset + "px";

    circle();
  });

function slide(el) {
  if (el == 1) {
    offset = 0;
    pushSlider.style.left = offset + "px";
  } else if (el == 2) {
    offset = -600;
    pushSlider.style.left = offset + "px";
  } else if (el == 3) {
    offset = -1200;
    pushSlider.style.left = offset + "px";
  }

  circle();
}

function circle() {
  if (offset == 0) {
    document.querySelector(".circle1").style.backgroundColor = "black";
    document.querySelector(".circle2").style.backgroundColor = "darkgray";
    document.querySelector(".circle3").style.backgroundColor = "darkgray";
  } else if (offset == -600) {
    document.querySelector(".circle1").style.backgroundColor = "darkgray";
    document.querySelector(".circle2").style.backgroundColor = "black";
    document.querySelector(".circle3").style.backgroundColor = "darkgray";
  } else if (offset == -1200) {
    document.querySelector(".circle1").style.backgroundColor = "darkgray";
    document.querySelector(".circle2").style.backgroundColor = "darkgray";
    document.querySelector(".circle3").style.backgroundColor = "black";
  }
}
