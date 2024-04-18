// скрол меню навигации
// const menulinks = document.querySelectorAll('.anchor__link[data-goto]');
// if (menulinks.length > 0) {
//     menulinks.forEach(menuLink =>{
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });
//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY  - document.querySelector('header'.offsetHeight);

//             if (iconMenu.classList.contains('_active')) {
//                 document.body.classList.remove('_lcok');
//                 iconMenu.classList.remove('_active');
//                 menuBody.classList.remove('_active');
//             }

//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: "smooth"
//             });
//             e.preventDefault();
//         }
//     }
// }

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}

// не ну реально куртой скрол шапки
let header = document.querySelector('.headerJs');
let headerH = document.querySelector('.headerJs').clientHeight;

document.onscroll = function () {
    let scroll = window.scrollY;
    
    if (scroll >= headerH){
        header.classList.add("fixed");
        // document.body.style.paddingTop = headerH + 'px';
    }
    else{
        header.classList.remove("fixed");
        document.body.removeAttribute('style');
    }
}



//----------------------------------------------------------------------------

$(document).ready(function() {
    const galleryItems = $('.gallery__item img');
    let currentIndex = 0;

    // Открытие модального окна с изображением
    galleryItems.click(function() {
        currentIndex = galleryItems.index($(this));
        $('.modal__image').attr('src', $(this).attr('src'));
        $('.modal').css('display', 'flex');
        $('body').addClass('modal-open'); // Добавляем класс для отключения прокрутки
    });

    // Закрытие модального окна при клике вне изображения и стрелок
    $('.modal').click(function(e) {
        if (!$(e.target).hasClass('modal__content') && !$(e.target).hasClass('modal__prev') && !$(e.target).hasClass('modal__next')) {
            $(this).css('display', 'none');
            $('body').removeClass('modal-open'); // Удаляем класс при закрытии модального окна
        }
    });

    // Закрытие модального окна при клике на крестик
    $('.modal__close').click(function() {
        $('.modal').css('display', 'none');
        $('body').removeClass('modal-open'); // Удаляем класс при закрытии модального окна
    });

    // Обработчик события для стрелки "влево"
    $('.modal__prev').click(function() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        $('.modal__image').attr('src', galleryItems.eq(currentIndex).attr('src'));
    });

    // Обработчик события для стрелки "вправо"
    $('.modal__next').click(function() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        $('.modal__image').attr('src', galleryItems.eq(currentIndex).attr('src'));
    });
});