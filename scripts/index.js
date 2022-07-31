let menu = false;
let divMobileMenu = document.createElement('div');
let mobileBtn = document.querySelector('#mobile-btn');

function createMenuMobile() {
    let nav = document.querySelector('nav');
    let menuList = document.querySelector('#list-menu-id');
    if (menu) {
        divMobileMenu.className = 'closed';
        mobileBtn.innerHTML = 'MENU <i class="fas fa-bars estilo-icon"></i>';
        menu = false;
    } else {
        divMobileMenu.id = 'mobile-menu';
        nav.appendChild(divMobileMenu);
        divMobileMenu.appendChild(menuList);
        menuList.className = 'list-mobile-menu';
        divMobileMenu.className = 'opened';
        mobileBtn.innerHTML = 'FECHAR <i class="fas fa-times estilo-icon"></i>';
        menu = true;
    }
}