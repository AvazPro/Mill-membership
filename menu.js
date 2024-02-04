var navMenu = document.querySelector('.nav-menu-button');
var navList = document.querySelector('.nav-list-menu');
var btn = document.querySelector('.btn');

// menuni korsatish funksiyasi
var show = function(){
    navList.classList.add('showmenu');
    btn.classList.add('btn-close');
    navList.removeEventListener('animationend', remove);
};

// menuni yashirish uchun funksiya
var hide = function(){
    navList.classList.add('hidemenu');
    btn.classList.remove('btn-close');
    navList.addEventListener('animationend', remove);
};

// classlarni ochirish uchun funksiya
var remove = function(){
    navList.classList.remove('showmenu', 'hidemenu');
};

btn.addEventListener('click', function(){
    if(navList.classList.contains('showmenu')){
        hide();
    } else {
        show();
    }
});