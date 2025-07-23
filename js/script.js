document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade do Menu Hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('nav ul li a');

    function openMenu() {
        navMenu.classList.add('menu-open');
        menuOverlay.classList.add('active');
        menuToggle.innerHTML = '✕';
        menuToggle.setAttribute('aria-label', 'Fechar menu');
        // Previne scroll do body quando menu está aberto
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navMenu.classList.remove('menu-open');
        menuOverlay.classList.remove('active');
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-label', 'Abrir menu');
        // Restaura scroll do body
        document.body.style.overflow = '';
    }

    // Toggle do menu hambúrguer
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (navMenu.classList.contains('menu-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // Fechar menu ao clicar no overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('menu-open')) {
            closeMenu();
        }
    });

    // Fechar menu ao clicar em um link (importante para mobile)
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Fecha o menu se estiver aberto
            if (navMenu && navMenu.classList.contains('menu-open')) {
                closeMenu();
            }

            // Só aplica scroll suave para links internos (que começam com #)
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();

                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    window.scrollTo({
                        top: targetSection.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('menu-open')) {
            closeMenu();
        }
    });
});