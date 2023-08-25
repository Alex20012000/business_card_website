const slides = [
  {
    src: "../business_card_website/static/images/image_2.1.png",
    Должности: "Кассир<br>Администратор<br>Системный Администаротор<br>Главный администратор Управляющий",
    ВремяРаботы: "2,5 года",
    Обязанности: "обслуживанние клиентов, обслуживание пк, управление предприятием",
    repairConst: "Upon request",
  },
  {
    src: "../business_card_website/static/images/image_2.png",
    Должности: "Кассир,Администратор",
    ВремяРаботы: "1 год",
    Обязанности: "обслуживанние клиентов",
    repairConst: "Upon request",
  },
  {
    src: "../business_card_website/static/images/image_2.2.png",
    Должности: "Кладовщик",
    ВремяРаботы: "6 месяцев",
    Обязанности: "сортировка товара на складе, приёмка товара",
    repairConst: "Upon request",
  },
];

const text = document.querySelectorAll(".projects-info-text");
const image = document.querySelector(".project-image-area");
const arrowRight = document.querySelector(".arrow-button-right");
const arrowLeft = document.querySelector(".arrow-button-left");
const dots = document.querySelectorAll(".dot-button");
const links = document.querySelectorAll(".project-link");

let index = 0;

function updaiteText(id) {
  text[0].innerHTML = slides[id].Должности;
  text[1].innerHTML = slides[id].ВремяРаботы;
  text[2].innerHTML = slides[id].Обязанности;
  text[3].innerHTML = slides[id].repairConst;
}

function chengeSlide(id) {
  image.style.backgroundImage = "url(" + slides[id].src + ")";
  index = id;
  updaitedots();
  updaiteLinks();
  updaiteText(id);
}

function updaiteLinks() {
  for (let i = 0; i < links.length; i++) {
    if (index === i) {
      links[i].classList.add("project-link-active");
    } else {
      links[i].classList.remove("project-link-active");
    }
  }
}

function updaitedots() {
  for (let i = 0; i < dots.length; i++) {
    if (index === i) {
      dots[i].classList.add("dot-button-active");
    } else {
      dots[i].classList.remove("dot-button-active");
    }
  }
}

arrowRight.addEventListener("click", function () {
  if (index === slides.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  chengeSlide(index);
});

arrowLeft.addEventListener("click", function () {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index = index - 1;
  }
  chengeSlide(index);
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    chengeSlide(i);
  });
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    chengeSlide(i);
  });
}

module.exports = {
  updaiteText,
  chengeSlide,
  updaiteLinks,
  updaitedots,
};
