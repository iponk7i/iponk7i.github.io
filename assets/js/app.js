const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav
    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-active');
       
        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //burger animate
        burger.classList.toggle('toggle');
    });
}

navSlide();