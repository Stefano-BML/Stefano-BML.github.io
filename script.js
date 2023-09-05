// script.js
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = link.getAttribute('href');
        window.open(url, '_blank');
    });
});
