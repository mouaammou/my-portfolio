//selet the header element

const header = document.querySelector('header');
const menu = document.getElementById('menu');

//add left = 0 to the header style on click
menu.addEventListener('click', function(){
    //toggle the class 'toggle' on the header
    this.classList.toggle('fa-times');
    header.classList.toggle('display-menu');
});

//remove the toggle class on the header when the window is resized
window.addEventListener('resize', function(){
    menu.classList.remove('fa-times');
    header.classList.remove('display-menu');
});