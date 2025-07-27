document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Smooth Scrolling & Close Mobile Menu ---
    const allLinks = document.querySelectorAll('.nav-links a, .cta-button');

    for (const link of allLinks) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // ONLY prevent default for internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();

                // Close mobile menu on link click
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }

                const targetElement = document.querySelector(href);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for fixed header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // --- Fade-in effect for sections on scroll ---
    const scrollFadeElements = document.querySelectorAll('.scroll-fade');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    scrollFadeElements.forEach(element => {
        scrollObserver.observe(element);
    });

});
