document.addEventListener('DOMContentLoaded', function() {

    // --- particles.js config ---
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": true,
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
            }
        },
        "retina_detect": true
    });


    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinksList = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinksList.classList.toggle('active');
    });

    // --- Smooth Scrolling & Close Mobile Menu ---
    const allLinks = document.querySelectorAll('.nav-links a, .cta-button, .logo');

    for (const link of allLinks) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only act on internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();

                // Close mobile menu on link click
                if (navLinksList.classList.contains('active')) {
                    navLinksList.classList.remove('active');
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

    // --- Staggered Slide-in Animation on Scroll ---
    // FIXED: Changed '.scroll-fade' to '.anim-slide-in' to match the HTML
    const animatedElements = document.querySelectorAll('.anim-slide-in');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach((element, index) => {
        // Add a slight delay to each element for a staggered effect
        element.style.transitionDelay = `${index * 100}ms`;
        scrollObserver.observe(element);
    });

});
