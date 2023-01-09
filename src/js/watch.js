const buttonOpenBrands = document.querySelector('.cards-pointer__brands');
const buttonOpenDevices = document.querySelector('.cards-pointer__devices');
const cardsOpenBrands = document.querySelector('.brands-list');
const cardsOpenDevices = document.querySelector('.devices-list');
const swiperStyles = document.querySelector('.swiper-wrapper');
let pointerOpenBrands = document.querySelector('.span-pointer');
let imageRotateBrands = document.querySelector('.image-pointer');
let pointerOpenDevices = document.querySelector('.span-pointer__devices');
let imageRotateDevices = document.querySelector('.image-pointer__devices');

buttonOpenBrands.addEventListener('click', buttonClickBrands);
buttonOpenDevices.addEventListener('click', buttonClickDevices);

function buttonClickBrands() {
    cardsOpenBrands.classList.toggle('brands-list--open');
    if (cardsOpenBrands.classList.contains('brands-list--open')) {
        pointerOpenBrands.textContent="Скрыть";
        imageRotateBrands.classList.replace('image-pointer','image-pointer--rotate');
    } else {
        pointerOpenBrands.textContent="Показать все";
        imageRotateBrands.classList.replace('image-pointer--rotate','image-pointer');
    }
};

function buttonClickDevices() {
    cardsOpenDevices.classList.toggle('devices-list--open');
    if (cardsOpenDevices.classList.contains('devices-list--open')) {
        pointerOpenDevices .textContent="Скрыть";
        imageRotateDevices .classList.replace('image-pointer__devices','image-pointer--rotate');
    } else {
        pointerOpenDevices .textContent="Показать все";
        imageRotateDevices .classList.replace('image-pointer--rotate','image-pointer__devices');
    }
};

