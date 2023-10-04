// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import {} from "./main.js";

window.onload = function() {

//Работаем с табами
const tabs = document.querySelectorAll(".tabheader__item"),
tabsContent = document.querySelectorAll(".tabcontent"),
tabsParent = document.querySelector(".tabheader__size");

// prices = document.querySelectorAll('.tabheader__price-item');

function hideTabContent() {
tabsContent.forEach((item) => {
  item.classList.add("hide");
  item.classList.remove("show", "fade");
});

tabs.forEach((item) => {
  item.classList.remove("tabheader__item_active");
});

// prices.forEach((item) =>  {
//   item.classList.add("hide");
//   item.classList.remove("show", "fade");
// });


}

function showTabContent(i = 1) {

  if (typeof tabsContent !== 'undefined' && tabsContent.length > 0) {

    // Тут код, который обрабатывает объект
    tabsContent[i].classList.add("show", "fades");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }


}

// function showTabPrice(i = 1) {
// prices[i].classList.add("show", "fades");
// prices[i].classList.remove("hide");
// }

hideTabContent();
showTabContent();
// showTabPrice();


const setListener = (element, type, handler) => {
  if(!element) {
    return; 
  }
  element.addEventListener(type, handler);
  return () => {
    element.removeEventListener(type, handler);
  };
}


setListener(tabsParent, "click", function(event) {
const target = event.target;
// console.dir(target);

// if (target.nodeName !== "BUTTON") return;

if (target && target.classList.contains("tabheader__item")) {
  tabs.forEach((item, i) => {
    if (target == item) {
      hideTabContent();
      showTabContent(i);
      // showTabPrice(i);
    }
  });
}

});


  // функция работы MixitUp
  // $(function () {
  //   var mixer = mixitup('.tabheader__box', {
  //     animation: {
  //       duration: 400,
  //       effects: 'fade opacity(1)'
  //   }
  //   });
  // });



  var containerEl = document.querySelector('.tabheader__box');
    var mixer;
    if (containerEl) {
      mixer = mixitup(containerEl, {
        animation: {
          duration: 400,
          effects: 'fade opacity(1)'
      }
      });
    }


//========================================================================================================================================================


//========================================================================================================================================================

    // document.querySelectorAll('.select').forEach(select => { //Выбриаем все выпадающие списки на странице

    //   let selectCurrent = select.querySelector('.select__current'),
    //       selectList = select.querySelector('.select__list'),
    //       selectInput = select.querySelector('.select__input'),
    //       selectItem = select.querySelectorAll('.select__item');
    
    //   //по клику добавляем/удаляем класс
    //   selectCurrent.addEventListener('click', () => {
    //     selectList.classList.toggle('select__list--show')
    //   });
    
    //   //обходим элементы списка
    //   selectItem.forEach(item =>{
      
    //     //обрабатываем событие клик по элементу
    //     item.addEventListener('click', ()=>{
          
    //       //получаем значение из data-атрибута
    //       let itemValue = item.getAttribute('data-value') 
          
    //       //получаем содержание элемента (текст)
    //       let itemText = item.textContent
          
    //       //присваиваем инпуту ранее полученное значение из data-атрибута
    //       selectInput.value = itemValue 
          
    //       //присваиваем текущее значение (текст)
    //       selectCurrent.textContent = itemText 
          
    //       //скрываем выпадающий список
    //       selectListHide() 
    //     })
    //   });
      
    //   // функция закрытия выпадающего списка
    //   let selectListHide = () => {
    //     selectList.classList.remove('select__list--show')
    //   }
    //   //Закрываем выпадающий сисок, если клик был вне области
    //   document.addEventListener('mouseup', (e) =>{
    //   if (!select.contains(e.target))	selectListHide()
    //   });
      
    // });
    //========================================================================================================================================================
    
    // (function(){
    //   var cut = document.querySelectorAll('.select__content > span .select__text');
      
    //   for( var i = 0; i < cut.length; i++ ){
    //     cut[i].innerText = cut[i].innerText.slice(0, 3, i);
    //   }

    // })();

  //========================================================================================================================================================
  

    // function cuter(){
    //   var cut = document.querySelectorAll('.select__content > span .select__text');
    //   for( var i = 0; i < cut.length; i++ ){
        
    //     cut[i].innerText = cut[i].innerText.slice(0, 3);

        
    //     if ( cut.length <= 3) {


    //     }
    //   }

    // };

    // cuter();
    //========================================================================================================================================================

}

