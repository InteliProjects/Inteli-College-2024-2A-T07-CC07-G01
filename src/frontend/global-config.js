document.addEventListener('DOMContentLoaded', function () {
    const savedFontSize = localStorage.getItem('fontSize');
    const isColorModeEnabled = localStorage.getItem('colorMode') === 'true';

    // Aplica o tamanho da fonte salvo
    if (savedFontSize) {
        document.documentElement.style.fontSize = `${savedFontSize}px`;
    }

    // Aplica o modo para daltônicos salvo
    if (isColorModeEnabled) {
        document.documentElement.classList.add('daltonico');
    } else {
        document.documentElement.classList.remove('daltonico');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const navItems = document.querySelectorAll('.side-item');

    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link && link.getAttribute('href') === path) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
