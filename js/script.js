// скрол меню навигации
const menulinks = document.querySelectorAll('.anchor__link[data-goto]');
if (menulinks.length > 0) {
    menulinks.forEach(menuLink =>{
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY  - document.querySelector('header'.offsetHeight);

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lcok');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
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

    if (scroll >= headerH) {
        header.classList.add("fixed");
        // document.body.style.paddingTop = headerH + 'px';
    }
    else {
        header.classList.remove("fixed");
        document.body.removeAttribute('style');
    }
}



//----------------------------------------------------------------------------

$(document).ready(function () {
    const galleryItems = $('.gallery__item img');
    let currentIndex = 0;

    // Открытие модального окна с изображением
    galleryItems.click(function () {
        currentIndex = galleryItems.index($(this));
        $('.modal__image').attr('src', $(this).attr('src'));
        $('.modal').css('display', 'flex');
        $('body').addClass('modal-open'); // Добавляем класс для отключения прокрутки
    });

    // Закрытие модального окна при клике вне изображения и стрелок
    $('.modal').click(function (e) {
        if (!$(e.target).hasClass('modal__content') && !$(e.target).hasClass('modal__prev') && !$(e.target).hasClass('modal__next') && !$(e.target).hasClass('modal__image')) {
            $(this).css('display', 'none');
            $('body').removeClass('modal-open'); // Удаляем класс при закрытии модального окна
        }
    });

    // Закрытие модального окна при клике на крестик
    $('.modal__close').click(function () {
        $('.modal').css('display', 'none');
        $('body').removeClass('modal-open'); // Удаляем класс при закрытии модального окна
    });

    // Обработчик события для стрелки "влево"
    $('.modal__prev').click(function () {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        $('.modal__image').attr('src', galleryItems.eq(currentIndex).attr('src'));
    });

    // Обработчик события для стрелки "вправо"
    $('.modal__next').click(function () {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        $('.modal__image').attr('src', galleryItems.eq(currentIndex).attr('src'));
    });
});


let PopapActive = document.querySelector('.start');
let PopapClose = document.querySelector('.services-popap-crose__close');
let ServicesBlock = document.querySelector('.services-body__card');
let PopapBlock = document.querySelector('.services__popap');
let PopapDye = document.querySelector('.dye');
let PopapSale = document.querySelector('.sale');
let PopapSpares = document.querySelector('.spares');
let PopapRepair = document.querySelector('.repair');

let DyeBut = document.querySelector('.dyeLink')
let SaleBut = document.querySelector('.saleLink')
let SparesBut = document.querySelector('.sparesLink')
let RepairBut = document.querySelector('.repairLink')

let PopapCloseDye = document.querySelector('.popap-crose__dye');
let PopapCloseSale = document.querySelector('.popap-crose__sale');
let PopapCloseSpares = document.querySelector('.popap-crose__spares');
let PopapCloseRepair = document.querySelector('.popap-crose__repair');


function addPopapDye() {
    PopapDye.classList.remove('start');
    document.body.classList.add('lock');
}
function delPopapDye() {
    PopapDye.classList.add('start');
    document.body.classList.remove('lock');
}
//---------------------------------------
function addPopapSale() {
    PopapSale.classList.remove('start');
    document.body.classList.add('lock');
}
function delPopapSale() {
    PopapSale.classList.add('start');
    document.body.classList.remove('lock');
}
//---------------------------------------
function addPopapSpares() {
    PopapSpares.classList.remove('start');
    document.body.classList.add('lock');
}
function delPopapSpares() {
    PopapSpares.classList.add('start');
    document.body.classList.remove('lock');
}
//--------------------------------------------
function addPopapRepair() {
    PopapRepair.classList.remove('start');
    document.body.classList.add('lock');
}
function delPopapRepair() {
    PopapRepair.classList.add('start');
    document.body.classList.remove('lock');
}
//----------------------------------------------
DyeBut.addEventListener('click', addPopapDye);
PopapCloseDye.addEventListener('click', delPopapDye);
PopapCloseSale.addEventListener('click', delPopapSale);
PopapCloseSpares.addEventListener('click', delPopapSpares);
PopapCloseRepair.addEventListener('click', delPopapRepair);
//-----------------------------------------------
SaleBut.addEventListener('click', addPopapSale);
SparesBut.addEventListener('click', addPopapSpares);
RepairBut.addEventListener('click', addPopapRepair);


document.addEventListener('DOMContentLoaded', () => {
    const statistikSection = document.querySelector('.about-us__statistik');
    const numbers = statistikSection.querySelectorAll('.number');

    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animateCounter = (element) => {
        let start = 0;
        const end = parseInt(element.dataset.max.replace(/\D/g, ''), 10); // Удаляем все символы, кроме цифр

        const duration = 2000; // Продолжительность анимации в миллисекундах
        const frameDuration = 1000 / 60; // 60 кадров в секунду
        const totalFrames = Math.round(duration / frameDuration);
        const easeOutQuad = t => t * (2 - t);
        const countTo = end;
        let frame = 0;
        const counter = () => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentCount = Math.round(countTo * progress);

            if (parseInt(element.innerHTML, 10) !== currentCount) {
                element.innerHTML = currentCount;
            }

            if (frame < totalFrames) {
                requestAnimationFrame(counter);
            } else {
                element.innerHTML = countTo;
            }
        };
        const onScroll = function () {
            if (isElementInViewport(statistikSection)) {
                window.removeEventListener('scroll', onScroll);
                requestAnimationFrame(counter);
            }
        };
        window.addEventListener('scroll', onScroll);
        // Check if the section is already in view on page load
        if (isElementInViewport(statistikSection)) {
            window.removeEventListener('scroll', onScroll);
            requestAnimationFrame(counter);
        }
    };

    numbers.forEach((number) => animateCounter(number));
});