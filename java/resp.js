

const burger = document.querySelector('.burger');
const  navLinks = document.querySelector('.nav-Links');
const links = document.querySelectorAll('.nav-Links li');




burger.addEventListener('click',()=>{

  navLinks.classList.toggle('open')

  links.forEach(link =>{
link.classList.toggle("fade");
  });

  

});