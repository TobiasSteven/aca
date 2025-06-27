/**
 * Scripts principaux du thème ACA
 */

(function($) {
    'use strict';

    // Initialisation au chargement du DOM
    $(document).ready(function() {
        initMobileMenu();
        initScrollEffects();
        initAnimations();
        initForms();
        initModals();
        initCarousels();
    });

    // Menu mobile
    function initMobileMenu() {
        $('.menu-toggle').on('click', function() {
            const $this = $(this);
            const $menu = $('.menu-wrapper');
            const isExpanded = $this.attr('aria-expanded') === 'true';
            
            $this.attr('aria-expanded', !isExpanded);
            $menu.toggleClass('active');
            
            if (window.innerWidth <= 768) {
                $menu.slideToggle(300);
            }
        });

        // Fermer le menu en cliquant à l'extérieur
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.main-navigation').length) {
                $('.menu-wrapper').removeClass('active').hide();
                $('.menu-toggle').attr('aria-expanded', 'false');
            }
        });

        // Adapter le menu au redimensionnement
        $(window).on('resize', function() {
            if (window.innerWidth > 768) {
                $('.menu-wrapper').show().removeClass('active');
                $('.menu-toggle').attr('aria-expanded', 'false');
            } else {
                $('.menu-wrapper').hide();
            }
        });
    }

    // Effets de scroll
    function initScrollEffects() {
        // Bouton retour en haut
        const $backToTop = $('#back-to-top');
        
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 300) {
                $backToTop.fadeIn();
            } else {
                $backToTop.fadeOut();
            }
        });

        $backToTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
        });

        // Parallax simple pour les sections hero
        $(window).on('scroll', function() {
            const scrolled = $(this).scrollTop();
            $('.aca-hero-block').css('transform', 'translateY(' + (scrolled * 0.5) + 'px)');
        });

        // Navigation sticky
        const $header = $('#masthead');
        const headerOffset = $header.offset().top;

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > headerOffset + 100) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
    }

    // Animations au scroll
    function initAnimations() {
        // Observer pour les animations d'apparition
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        
                        // Animation des compteurs
                        if (entry.target.classList.contains('aca-stat-number')) {
                            animateCounter(entry.target);
                        }
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observer les éléments à animer
            document.querySelectorAll('.aca-stat-item, .card, .aca-news-item, .aca-team-member').forEach(function(el) {
                observer.observe(el);
            });
        }

        // Animation des compteurs
        function animateCounter(element) {
            const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(function() {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + element.textContent.replace(/[\d]/g, '').replace(/[^\d\+K]/g, '');
            }, 16);
        }
    }

    // Gestion des formulaires
    function initForms() {
        // Validation en temps réel
        $('input[required], textarea[required]').on('blur', function() {
            validateField($(this));
        });

        // Soumission des formulaires
        $('form').on('submit', function(e) {
            const $form = $(this);
            const $submitBtn = $form.find('button[type="submit"]');
            
            // Validation avant soumission
            let isValid = true;
            $form.find('input[required], textarea[required]').each(function() {
                if (!validateField($(this))) {
                    isValid = false;
                }
            });

            if (!isValid) {
                e.preventDefault();
                return false;
            }

            // Animation de chargement
            $submitBtn.prop('disabled', true).addClass('loading');
            
            // Simuler un délai pour l'UX
            setTimeout(function() {
                $submitBtn.prop('disabled', false).removeClass('loading');
            }, 2000);
        });

        // Validation des champs
        function validateField($field) {
            const value = $field.val().trim();
            const type = $field.attr('type');
            let isValid = true;
            let message = '';

            // Vérification de base
            if ($field.prop('required') && !value) {
                isValid = false;
                message = 'Ce champ est requis';
            }

            // Validation email
            if (type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    message = 'Adresse email invalide';
                }
            }

            // Validation téléphone
            if (type === 'tel' && value) {
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    message = 'Numéro de téléphone invalide';
                }
            }

            // Affichage des erreurs
            $field.removeClass('error success');
            $field.siblings('.error-message').remove();

            if (!isValid) {
                $field.addClass('error');
                $field.after('<div class="error-message" style="color: var(--aca-danger); font-size: 0.875rem; margin-top: 0.25rem;">' + message + '</div>');
            } else if (value) {
                $field.addClass('success');
            }

            return isValid;
        }
    }

    // Modals
    function initModals() {
        // Ouvrir modal
        $('[data-modal]').on('click', function(e) {
            e.preventDefault();
            const modalId = $(this).data('modal');
            openModal(modalId);
        });

        // Fermer modal
        $(document).on('click', '.modal-close, .modal-overlay', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Fermer avec Escape
        $(document).on('keydown', function(e) {
            if (e.keyCode === 27) {
                closeModal();
            }
        });

        function openModal(modalId) {
            const $modal = $('#' + modalId);
            if ($modal.length) {
                $modal.addClass('active');
                $('body').addClass('modal-open');
                
                // Focus trap
                $modal.find('input, button, textarea, select').first().focus();
            }
        }

        function closeModal() {
            $('.modal').removeClass('active');
            $('body').removeClass('modal-open');
        }
    }

    // Carrousels
    function initCarousels() {
        $('.aca-carousel').each(function() {
            const $carousel = $(this);
            const $items = $carousel.find('.carousel-item');
            const $indicators = $carousel.find('.carousel-indicators button');
            let currentIndex = 0;
            let autoplayTimer;

            // Navigation
            $carousel.find('.carousel-prev').on('click', function() {
                goToSlide(currentIndex - 1);
            });

            $carousel.find('.carousel-next').on('click', function() {
                goToSlide(currentIndex + 1);
            });

            // Indicateurs
            $indicators.on('click', function() {
                const index = $(this).index();
                goToSlide(index);
            });

            // Autoplay
            function startAutoplay() {
                autoplayTimer = setInterval(function() {
                    goToSlide(currentIndex + 1);
                }, 5000);
            }

            function stopAutoplay() {
                clearInterval(autoplayTimer);
            }

            // Navigation
            function goToSlide(index) {
                if (index < 0) index = $items.length - 1;
                if (index >= $items.length) index = 0;

                $items.removeClass('active').eq(index).addClass('active');
                $indicators.removeClass('active').eq(index).addClass('active');
                
                currentIndex = index;
            }

            // Pause au hover
            $carousel.on('mouseenter', stopAutoplay);
            $carousel.on('mouseleave', startAutoplay);

            // Démarrer l'autoplay
            startAutoplay();
        });
    }

    // Utilitaires
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = function() {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Lazy loading des images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }

    // Smooth scroll pour les ancres
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 600);
        }
    });

    // Initialiser le lazy loading
    initLazyLoading();

    // Gestion des notifications
    function showNotification(message, type = 'info') {
        const $notification = $('<div class="notification notification-' + type + '">' + message + '</div>');
        $('body').append($notification);
        
        setTimeout(function() {
            $notification.addClass('show');
        }, 100);

        setTimeout(function() {
            $notification.removeClass('show');
            setTimeout(function() {
                $notification.remove();
            }, 300);
        }, 3000);
    }

    // Exposer les fonctions utiles globalement
    window.ACA = {
        showNotification: showNotification,
        debounce: debounce
    };

})(jQuery);

// CSS pour les animations (ajouté dynamiquement)
const animationCSS = `
<style>
.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-in {
    animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.loading {
    position: relative;
    color: transparent !important;
}

.loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 2px solid #ffffff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background: white;
    border-radius: 12px;
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    transform: scale(0.8);
    transition: transform 0.3s ease;
}

.modal.active .modal-content {
    transform: scale(1);
}

.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
}

.notification.show {
    transform: translateX(0);
}

.notification-success {
    background-color: var(--aca-success);
}

.notification-error {
    background-color: var(--aca-danger);
}

.notification-info {
    background-color: var(--aca-primary);
}

.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}

body.modal-open {
    overflow: hidden;
}

.error {
    border-color: var(--aca-danger) !important;
    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;
}

.success {
    border-color: var(--aca-success) !important;
    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1) !important;
}

@media (max-width: 768px) {
    .menu-wrapper {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--aca-primary-dark);
        border-radius: 0 0 8px 8px;
        display: none;
    }
    
    .menu-wrapper.active {
        display: block;
    }
    
    .menu-wrapper ul {
        flex-direction: column;
        padding: 1rem;
    }
    
    .menu-wrapper li {
        margin: 0.5rem 0;
    }
}
</style>
`;

// Injecter le CSS
document.head.insertAdjacentHTML('beforeend', animationCSS);