/* Импортируем webpack */
 import * as flsFunctions from "./modules/function.js";

 flsFunctions.isWebp();

 /*Импорт плагина для видео*/
 import * as videoTube from "./modules/videotube.min.js";

 //  /*плагин Swiper*/

  import Swiper, { Pagination, Mousewheel } from 'swiper';
Swiper.use([Pagination, Mousewheel]);
const swiper = new Swiper(".swiper", {
     spaceBetween: 30,
     autoHeight: true,
     slidesPerView: 1,
     loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
      },
     mousewheel: {
      sensitivity: 1,
    },
});
//появление формы поиска при клике на иконку "поиск"
const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', () => {
  const inputSearch = document.getElementById('input-search');
  inputSearch.classList.toggle('input-search-active');
});

// меню бургер
const menuList = document.querySelector('.side-left__nav');
const btnOpenMenu = document.getElementById('btn_open');

btnOpenMenu.addEventListener('click', ev => {
  menuList.classList.toggle('menu__active');
});

menuList.addEventListener('click', ev => {
  if (ev.target.tagName == 'A'
    || ev.target.classList.contains('event-close'))
    menuList.classList.toggle('menu__active');
});