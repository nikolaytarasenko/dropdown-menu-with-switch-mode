const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const formContainerWidth = document.querySelector('.options__container-width');
const formMenuMode = document.querySelector('.options__menu-mode');

formContainerWidth.addEventListener('click', formContainerWidthHandler);
formMenuMode.addEventListener('click', formMenuModeHandler);

Array.prototype.forEach.call(menuItems, function(item) {
    if (item.querySelector('.submenu')) item.classList.add('menu__item--has-submenu');
});

function formContainerWidthHandler(e) {
    e.target.getAttribute('id') === 'full-width' ? menu.classList.add('menu-fluid') : menu.classList.remove('menu-fluid');
}

function formMenuModeHandler(e) {
    if (e.target.value === 'click') {
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', menuItemClickHandler);
            menuItems[i].classList.remove('menu__item--hover');
        }
    } else {
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].removeEventListener('click', menuItemClickHandler);
            menuItems[i].classList.remove('menu__item--click');
            menuItems[i].classList.add('menu__item--hover');
        }
    }
}

function menuItemClickHandler(e) {
    if (e.target.parentElement.classList.contains('menu__item--click') || !e.target.parentElement.querySelector('.submenu')) {
        e.target.parentElement.classList.remove('menu__item--click');
    } else {
        e.target.parentElement.classList.add('menu__item--click');
    }
}