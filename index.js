let menu = false;
let divMobileMenu = document.createElement('div');
function createMenuMobile() {
    let nav = document.querySelector('nav');
    let menuList = document.querySelector('#list-menu-id');
    if (menu) {
        divMobileMenu.className = 'closed';
        menu = false;
    } else {
        divMobileMenu.id = 'mobile-menu';
        nav.appendChild(divMobileMenu);
        divMobileMenu.appendChild(menuList);
        menuList.className = 'list-mobile-menu';
        divMobileMenu.className = 'opened';
        menu = true;
    }
}