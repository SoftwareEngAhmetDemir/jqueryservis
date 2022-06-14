let footercerez = document.querySelector('.cerez-footer');

document.querySelector('.footer-btn').onclick = function() {
    'use strict';
    localStorage.setItem('okundu', true);
    footercerez.classList.add('d-none');
}
if (localStorage.getItem('okundu')) {
    footercerez.addClass('d-none');
}
