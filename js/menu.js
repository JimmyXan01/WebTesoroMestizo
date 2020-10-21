const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.burger-menu');
  const productLink = document.querySelector('.products-link');
  const productMenu = document.querySelector('.products-menu');

  const burgericon = document.querySelector('.burger-icon');
  const burgericonline1 = document.querySelector('.burger-icon-line1');
  const burgericonline2 = document.querySelector('.burger-icon-line2');
  const burgericonline3 = document.querySelector('.burger-icon-line3');
  const equisicon = document.querySelector('.equis-icon');
  const equisiconline1 = document.querySelector('.equis-icon-line1');
  const equisiconline2 = document.querySelector('.equis-icon-line2');
  const equisiconline3 = document.querySelector('.equis-icon-line3');

  const navLinks = document.querySelectorAll('.burger-menu-links li');
  const productLinks = document.querySelectorAll('.product');

  burger.addEventListener('click', () => {
    nav.classList.toggle('burger-menu-active');
    burgericon.classList.toggle('burger-icon-active');
    burgericonline1.classList.toggle('burger-icon-x');
    burgericonline2.classList.toggle('burger-icon-y');
    burgericonline3.classList.toggle('burger-icon-z');

    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation='';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  });

  productLink.addEventListener('click', () => {
    productMenu.classList.toggle('products-menu-active');
    
    equisicon.classList.toggle('equis-icon-active');
    equisiconline1.classList.toggle('equis-icon-x');
    equisiconline2.classList.toggle('equis-icon-y');
    equisiconline3.classList.toggle('equis-icon-z');
    
    productLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation='';
      } else {
        link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  });
}

navSlide();