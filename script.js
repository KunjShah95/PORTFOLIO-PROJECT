// Animate the home image on scroll
window.addEventListener('scroll', () => {
    const homeImage = document.querySelector('.home-image');
    const scrollPosition = window.scrollY;
    homeImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
});

// Animate the portfolio items on hover
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-10px) rotateX(10deg)';
        item.style.boxShadow = '0 15px 35px var(--shadow-color)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0px) rotateX(0deg)';
        item.style.boxShadow = 'none';
    });
});

// Animate the buttons on hover
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 10px 20px var(--shadow-color)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0px)';
        button.style.boxShadow = 'none';
    });
});