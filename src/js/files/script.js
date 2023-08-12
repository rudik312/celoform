// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

  //Работаем с табами
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__size"),

    prices = document.querySelectorAll('.tabheader__price-item'),
    tabsPrice = document.querySelector('.tabheader__price');

    // markets = document.querySelectorAll('.tabheader__marketplace-item');

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });

    prices.forEach((item) =>  {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    // markets.forEach((item) => {
    // });
  }

  function showTabContent(i = 1) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  function showTabPrice(i = 1) {
    prices[i].classList.add("show", "fade");
    prices[i].classList.remove("hide");
  }

  hideTabContent();
  showTabContent();
  showTabPrice();

  tabsParent.addEventListener("click", function(event) {
    const target = event.target;
    // console.dir(target);
    
    if (target.nodeName !== "BUTTON") return;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
          showTabPrice(i);
        }
      });
    }

  });

  $(function () {
    var mixer = mixitup('.tabheader__box', {
      animation: {
        duration: 400,
        effects: 'fade opacity(1)'
    }
    });
  });

let btnMarkets = document.querySelectorAll('.category-15');
console.log(btnMarkets);

function changeAtr() {
  let link = document.querySelector(".category-5");

  link.getAttribute("href");
  link.setAttribute("href",
      "https://ya.ru");
}

let btnOzon = document.querySelector('.button_ozon'),
    btnWild = document.querySelector('.button_wildberries'),
    btnYam = document.querySelector('.button_yamarket'),
    btnSber = document.querySelector('.button_sbermarket'),
    btnAli = document.querySelector('.button_ali');

    


