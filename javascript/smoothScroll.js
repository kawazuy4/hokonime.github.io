function smoothScroll(target) {
    const element = document.querySelector(target);
    const offset = 50;

    window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
    });
}