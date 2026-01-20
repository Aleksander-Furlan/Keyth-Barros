function togglePlano(element) {
    // Fecha outros planos
    document.querySelectorAll('.plano-card').forEach(card => {
        if (card !== element) card.classList.remove('active');
    });
    // Abre o atual
    element.classList.toggle('active');
}

ScrollReveal().reveal('.hero-content, .card-metodo', { delay: 200, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.sobre-container', { delay: 300 });