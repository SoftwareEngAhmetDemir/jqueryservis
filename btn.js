
let footercerez = document.querySelector('.cerez-footer');

document.querySelector('.footer-btn').on('click', function() {
    'use strict';
    localStorage.setItem('okundu', true);
    footercerez.addClass('d-none');
});
if (localStorage.getItem('okundu')) {
    footercerez.addClass('d-none');
}

