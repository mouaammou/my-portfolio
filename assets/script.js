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


//add smoth scroll to all links that start with #
const links = document.querySelectorAll('.navbar a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e){
        //prevent the default action: means the page will not jump to the section   
        e.preventDefault();
        //get the id of the section, getAttribute('href') returns the value of the href attribute
        const id = this.getAttribute('href');
        
        //scrollIntoView() is a method that scrolls the element into the visible area of the browser window
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
