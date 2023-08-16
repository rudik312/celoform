// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

  //Работаем с табами
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__size"),

    prices = document.querySelectorAll('.tabheader__price-item');

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


  // функция работы MixitUp
  $(function () {
    var mixer = mixitup('.tabheader__box', {
      animation: {
        duration: 400,
        effects: 'fade opacity(1)'
    }
    });
  });


  // кнопки выбора продукта
  const cel5 = document.querySelector('._icon-celoform-5');
  const cel15 = document.querySelector('._icon-celoform-15');
  const cel50 = document.querySelector('._icon-celoform-50');

  // все кнопки магазинов
  const markets = document.querySelectorAll('.mix');
  
  //каждая кнопка по отдельности 
  // const btnOzon = document.querySelector('.button_ozon');
  // const btnWild = document.querySelector('.button_wildberries');
  // const btnYam = document.querySelector('.button_yamarket');
  // const btnSber = document.querySelector('.button_sbermarket');
  // const btnAli = document.querySelector('.button_ali');
  
  // function deleteUrl () {
  //   markets.forEach(item => {
  //     item.removeAttribute("href");
  //   })
  // };

  // function addSizeMini () {
  //   markets.forEach(item => {
  //     if (item.classList.contains('category-5')) {

  //       if (item.classList.contains('button_ozon')) {
  //         item.setAttribute('href', 'https://kurl.ru/qlsUQ');
  //         console.log(item);
  //       }
  //     }
  //   });
  // };

  // function addSizeMedium () {
  //   markets.forEach(item => {
  //     if (item.classList.contains('category-15')) {
  //       if (item.classList.contains('button_ozon')) {
  //         item.setAttribute('href', 'https://kurl.ru/AfRvV');
  //         console.log(item);
  //       }
  //     }
  //   })
    
  // };

  // function addSizeBig () {
  //   markets.forEach(item => {
  //     if (item.classList.contains('category-50')) {
        
  //     }
  //   })
  // };

  // deleteUrl();
  // addSizeMini();
  // addSizeMedium();
  // addSizeBig();


cel5.addEventListener('click', function () {
  markets.forEach(item => {
    if (item.classList.contains('category-5')) {

      if (item.classList.contains('button_ozon')) {
        item.setAttribute('href', 'https://kurl.ru/qlsUQ');
        console.log(item);
      }
      if (item.classList.contains('button_wildberries')) {
        item.setAttribute('href', 'https://kurl.ru/vQhoC');
        console.log(item);
      }
      if (item.classList.contains('button_yamarket')) {
        item.setAttribute('href', 'https://kurl.ru/WPURu');
        console.log(item);
      }
      if (item.classList.contains('button_sbermarket')) {
        item.setAttribute('href', 'https://kurl.ru/YBIrU');
        console.log(item);
      }
    }
    
  });
});

cel15.addEventListener('click', function () {
  markets.forEach(item => {
    if (item.classList.contains('category-15')) {

      if (item.classList.contains('button_ozon')) {
        item.setAttribute('href', 'https://kurl.ru/AfRvV');
      }
      if (item.classList.contains('button_wildberries')) {
        item.setAttribute('href', 'https://kurl.ru/eMHjq');
      }
      if (item.classList.contains('button_yamarket')) {
        item.setAttribute('href', 'https://kurl.ru/ffDpp');
      }
      if (item.classList.contains('button_sbermarket')) {
        item.setAttribute('href', 'https://kurl.ru/IqJJB');
      }
      if (item.classList.contains('button_ali')) {
        item.setAttribute('href', 'https://kurl.ru/KQmPb');
      }
    }

  });
});

cel50.addEventListener('click', function () {
  markets.forEach(item => {
    if (item.classList.contains('category-50')) {

      if (item.classList.contains('button_ozon')) {
        item.setAttribute('href', 'https://kurl.ru/CHPsz');
      }
      if (item.classList.contains('button_wildberries')) {
        item.setAttribute('href', 'https://kurl.ru/PJwiy');
      }
      if (item.classList.contains('button_yamarket')) {
        item.setAttribute('href', 'https://kurl.ru/ibqqK');
      }
      if (item.classList.contains('button_ali')) {
        item.setAttribute('href', 'https://kurl.ru/UOgak');
      }
    }

  });
});

