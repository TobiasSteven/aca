</div><!-- #content -->

    <footer id="colophon" class="site-footer" style="background-color: var(--aca-dark); color: white;">
        <div class="footer-widgets section">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <?php if (is_active_sidebar('footer-1')) : ?>
                            <?php dynamic_sidebar('footer-1'); ?>
                        <?php else : ?>
                            <div class="widget">
                                <div class="d-flex align-center mb-4">
                                    <div class="bg-white rounded p-2 mr-3">
                                        <div style="width: 40px; height: 24px; background-color: var(--aca-primary); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 10px;">
                                            ACA
                                        </div>
                                    </div>
                                    <div>
                                        <h3 style="margin: 0; color: white;">ACA</h3>
                                        <p style="margin: 0; color: var(--aca-secondary); font-size: 0.875rem;">Excellence Cotonnière</p>
                                    </div>
                                </div>
                                <p style="color: #ccc; line-height: 1.6;">
                                    L'Association Cotonnière Africaine fédère les acteurs de la filière coton pour promouvoir l'excellence et le développement durable du secteur en Afrique.
                                </p>
                            </div>
                        <?php endif; ?>
                    </div>
                    
                    <div class="col-3">
                        <?php if (is_active_sidebar('footer-2')) : ?>
                            <?php dynamic_sidebar('footer-2'); ?>
                        <?php else : ?>
                            <div class="widget">
                                <h4 class="widget-title" style="color: white;">Liens Rapides</h4>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="margin-bottom: 8px;">
                                        <a href="<?php echo home_url(); ?>" style="color: #ccc; text-decoration: none;">
                                            <span style="width: 8px; height: 8px; background-color: var(--aca-primary); border-radius: 50%; display: inline-block; margin-right: 12px;"></span>
                                            Accueil
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 8px;">
                                        <a href="#" style="color: #ccc; text-decoration: none;">
                                            <span style="width: 8px; height: 8px; background-color: var(--aca-primary); border-radius: 50%; display: inline-block; margin-right: 12px;"></span>
                                            À Propos
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 8px;">
                                        <a href="#" style="color: #ccc; text-decoration: none;">
                                            <span style="width: 8px; height: 8px; background-color: var(--aca-primary); border-radius: 50%; display: inline-block; margin-right: 12px;"></span>
                                            Nos Membres
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 8px;">
                                        <a href="#" style="color: #ccc; text-decoration: none;">
                                            <span style="width: 8px; height: 8px; background-color: var(--aca-primary); border-radius: 50%; display: inline-block; margin-right: 12px;"></span>
                                            Actualités
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        <?php endif; ?>
                    </div>
                    
                    <div class="col-3">
                        <?php if (is_active_sidebar('footer-3')) : ?>
                            <?php dynamic_sidebar('footer-3'); ?>
                        <?php else : ?>
                            <div class="widget">
                                <h4 class="widget-title" style="color: white;">Contact</h4>
                                <div style="color: #ccc;">
                                    <div class="mb-3">
                                        <strong>Adresse:</strong><br>
                                        <?php echo get_theme_mod('aca_address', '123 Avenue de l\'Indépendance, Abidjan, Côte d\'Ivoire'); ?>
                                    </div>
                                    <div class="mb-3">
                                        <strong>Téléphone:</strong><br>
                                        <a href="tel:<?php echo esc_attr(get_theme_mod('aca_phone', '+225 27 20 30 40 50')); ?>" style="color: var(--aca-primary);">
                                            <?php echo get_theme_mod('aca_phone', '+225 27 20 30 40 50'); ?>
                                        </a>
                                    </div>
                                    <div class="mb-3">
                                        <strong>Email:</strong><br>
                                        <a href="mailto:<?php echo esc_attr(get_theme_mod('aca_email', 'contact@aca-coton.org')); ?>" style="color: var(--aca-primary);">
                                            <?php echo get_theme_mod('aca_email', 'contact@aca-coton.org'); ?>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                    
                    <div class="col-3">
                        <?php if (is_active_sidebar('footer-4')) : ?>
                            <?php dynamic_sidebar('footer-4'); ?>
                        <?php else : ?>
                            <div class="widget">
                                <h4 class="widget-title" style="color: white;">Nos Services</h4>
                                <ul style="list-style: none; padding: 0; color: #ccc;">
                                    <li style="margin-bottom: 8px;">
                                        <span style="width: 8px; height: 8px; background-color: var(--aca-primary); border-radius: 50%; display: inline-block; margin-right: 12px;"></span>
                                        Accompagnement technique
                                    </li>
                                    <li style="margin-bottom: 8px;">
                                        <span style="width: 8px; height: 8px; background-color: var(--aca-primary); border-radius: 50%; display: inline-block; margin-right: 12px;"></span>
                                        Formation professionnelle
                                    </li>
                                    <li style="margin-bottom: 8px;">
                                        <span style="width: 8px; height: 8px; background-color: var(--aca-primary); border-radius: 50%; display: inline-block; margin-right: 12px;"></span>
                                        Études de marché
                                    </li>
                                    <li style="margin-bottom: 8px;">
                                        <span style="width: 8px; height: 8px; background-color: var(--aca-primary); border-radius: 50%; display: inline-block; margin-right: 12px;"></span>
                                        Certification qualité
                                    </li>
                                </ul>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom" style="background-color: var(--aca-primary-dark); padding: 20px 0;">
            <div class="container">
                <div class="d-flex justify-between align-center">
                    <div style="color: #ccc; font-size: 0.875rem;">
                        © <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Tous droits réservés.
                    </div>
                    <div>
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footer',
                            'menu_class'     => 'd-flex',
                            'container'      => false,
                            'depth'          => 1,
                            'fallback_cb'    => false,
                        ));
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<!-- Bouton retour en haut -->
<button id="back-to-top" class="btn btn-primary" style="position: fixed; bottom: 20px; right: 20px; display: none; z-index: 1000; border-radius: 50%; width: 50px; height: 50px;">
    ↑
</button>

<?php wp_footer(); ?>

<script>
// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuWrapper = document.querySelector('.menu-wrapper');
    
    if (menuToggle && menuWrapper) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            menuWrapper.style.display = isExpanded ? 'none' : 'block';
        });
    }
    
    // Bouton retour en haut
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
</script>

</body>
</html>