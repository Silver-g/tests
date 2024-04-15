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
