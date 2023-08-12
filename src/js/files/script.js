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
    
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
          showTabPrice(i);
        }
      });
    }
    // if (target && target.matches("tabheader__item")) {
    //   tabs.forEach((item, i) => {
    //     if (target == item) {
    //       hideTabContent();
    //       showTabContent(i);
    //       showTabPrice(i);
    //     }
    //   });
    // }
  });

  //   const clickedButton = event.target.closest('.tabheader__item');
    
  //   if (!clickedButton) return;
  //   console.log(clickedButton);
  //   // Активная вкладка
  //   tabs.forEach(tab => tab.classList.remove('tabheader__item_active'));
  //   clickedButton.classList.add("show");

  //     // Активный контент
  // tabContents.forEach(content =>
  //   content.classList.remove('operations__content--active')
  // );

  $(function () {
    var mixer = mixitup('.tabheader__box', {
      animation: {
        duration: 500,
        effects: 'fade opacity(1)'
    }
    });
  });

