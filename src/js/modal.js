const burgerButton = document.querySelector('.button-icon__burger');
const burgerCloseButton = document.querySelector('.button-icon__aside--close');
const burgercallButton = document.querySelector('.button-icon__call--active');
const burgerchatButton = document.querySelector('.button-icon__chat--active');
const mainContainer = document.querySelector('.main-container');
const mainHeader = document.querySelector('.header');
const mainAside = document.querySelector('.aside');
const menuCall = document.querySelector('.modal-call--close');
const menuFeedback = document.querySelector('.modal-feedback--close');
const callButton = document.querySelector('.button-icon__call');
const chatButton = document.querySelector('.button-icon__chat');

const burger = function(){
    burgerButton.addEventListener('click', burgerbuttonClick);
    burgercallButton.addEventListener('click', callburgerbuttonClick);
    burgerchatButton.addEventListener('click', chatburgerbuttonClick);
    burgerCloseButton.addEventListener('click', burgerClosebuttonClick);

    function callburgerbuttonClick(){
        if(document.documentElement.clientWidth<1120){
        mainAside.classList.replace('aside--open','aside');
        menuCall.classList.replace('modal-call--close','modal-call');
        let closeButton = document.querySelector('.button-icon--close');
        closeButton.addEventListener('click', callClosebuttonClick);
        }else{
            mainAside.classList.replace('aside','aside--close');
            menuCall.classList.replace('modal-call--close','modal-call');
            mainContainer.classList.replace('main-container','main-container--disable');
            let closeButtonMain = document.querySelector('.button-icon--close');
            closeButtonMain.addEventListener('click', callClosebuttonClickMain);
        };
    };

    function callClosebuttonClick(){
        mainContainer.classList.replace('main-container','main-container--disable');
        mainHeader.classList.replace('header','header--disable');
        mainAside.classList.replace('aside','aside--open'); 
        menuCall.classList.replace('modal-call','modal-call--close');
    };
    function callClosebuttonClickMain(){
        mainContainer.classList.replace('main-container--disable','main-container');
        mainHeader.classList.replace('header--disable','header');
        mainAside.classList.replace('aside--close','aside'); 
        menuCall.classList.replace('modal-call','modal-call--close');
    };


    function chatburgerbuttonClick(){
        if(document.documentElement.clientWidth<1120){
            mainAside.classList.replace('aside--open','aside');
            menuFeedback.classList.replace('modal-feedback--close','modal-feedback') 
            let closeButton = document.querySelector('.button-icon__modal--close');
            closeButton.addEventListener('click', chatClosebuttonClick);
        }else{
            mainAside.classList.replace('aside','aside--close');
            menuFeedback.classList.replace('modal-feedback--close','modal-feedback');
            mainContainer.classList.replace('main-container','main-container--disable');
            let closeButtonMain = document.querySelector('.button-icon__modal--close');
            closeButtonMain.addEventListener('click', chatClosebuttonClickMain);
        };
    };

    function chatClosebuttonClick(){
        mainContainer.classList.replace('main-container','main-container--disable');
        mainHeader.classList.replace('header','header--disable');
        mainAside.classList.replace('aside','aside--open'); 
        menuFeedback.classList.replace('modal-feedback','modal-feedback--close')   
    };

    function chatClosebuttonClickMain(){
        mainContainer.classList.replace('main-container--disable','main-container');
        mainHeader.classList.replace('header--disable','header');
        mainAside.classList.replace('aside--close','aside'); 
        menuFeedback.classList.replace('modal-feedback','modal-feedback--close');
    };

    function burgerbuttonClick(){    
        if (mainContainer.classList.contains('main-container')){
            mainContainer.classList.replace('main-container','main-container--disable');
            mainHeader.classList.replace('header','header--disable');
            mainAside.classList.replace('aside','aside--open');     
        };
        let arrayModal = document.querySelector('.main-container--disable');
        arrayModal.addEventListener('click', burgerClosebuttonClickModal);
    };

    function burgerClosebuttonClick(){
        if (mainContainer.classList.contains('main-container--disable')){
            mainContainer.classList.replace('main-container--disable','main-container');
            mainHeader.classList.replace('header--disable','header');
            mainAside.classList.replace('aside--open','aside');
        };   
    };

    function burgerClosebuttonClickModal(){
            mainContainer.classList.replace('main-container--disable','main-container');
            mainHeader.classList.replace('header--disable','header');
            mainAside.classList.replace('aside--open','aside');
            menuCall.classList.replace('modal-call','modal-call--close');
            menuFeedback.classList.replace('modal-feedback','modal-feedback--close') ;      
        };
};


const header = function(){

    callButton.addEventListener('click', callbuttonClickHeader);
    chatButton.addEventListener('click', chatbuttonClickHeader);

    function callbuttonClickHeader(){
        menuCall.classList.replace('modal-call--close','modal-call');
        mainContainer.classList.replace('main-container','main-container--disable');
        mainHeader.classList.replace('header','header--disable');
        let closeButtonHeader = document.querySelector('.button-icon--close');
        closeButtonHeader.addEventListener('click', callClosebuttonClickHeader); 
    };
    function callClosebuttonClickHeader(){
        mainContainer.classList.replace('main-container--disable','main-container');
        mainHeader.classList.replace('header--disable','header');
        mainAside.classList.replace('aside--open','aside'); 
        menuCall.classList.replace('modal-call','modal-call--close')   
    };
    function chatbuttonClickHeader(){
        menuFeedback.classList.replace('modal-feedback--close','modal-feedback');
        mainContainer.classList.replace('main-container','main-container--disable');
        mainHeader.classList.replace('header','header--disable');
        let closeButtonHeader = document.querySelector('.button-icon__modal--close');
        closeButtonHeader.addEventListener('click', chatClosebuttonClickHeader);
    };
    function chatClosebuttonClickHeader(){
        mainContainer.classList.replace('main-container--disable','main-container');
        mainHeader.classList.replace('header--disable','header');
        mainAside.classList.replace('aside--open','aside'); 
        menuFeedback.classList.replace('modal-feedback','modal-feedback--close')   
    };
};

burger();
header();




















