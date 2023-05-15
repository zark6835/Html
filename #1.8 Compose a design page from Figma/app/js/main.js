$(function () {
  const menu = document.querySelector(".header__media-link");

  document
    .querySelector(".header__media-btn--open")
    .addEventListener("click", function (e) {
      menu.style.right = "0px";
    });

  document
    .querySelector(".header__media-btn--closed")
    .addEventListener("click", function (e) {
      menu.style.right = "-500px";
    });

  $(".slick__wrapper").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    nextArrow: document.querySelector("#slick-next"),
    prevArrow: document.querySelector("#slick-prev"),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
        },
      },
    ],
  });
});
