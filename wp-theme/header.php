<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Preconnect pour les performances -->
    <link rel="preconnect" href="https://images.pexels.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header" style="background-color: var(--aca-primary); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div class="container">
            <div class="flex justify-between items-center" style="height: 5rem;">
                <!-- Logo -->
                <div class="site-branding flex items-center">
                    <?php if (has_custom_logo()) : ?>
                        <div class="custom-logo mr-4">
                            <?php the_custom_logo(); ?>
                        </div>
                    <?php else : ?>
                        <div class="bg-white rounded-lg p-2 mr-4">
                            <div style="width: 48px; height: 32px; background-color: var(--aca-primary); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">
                                ACA
                            </div>
                        </div>
                    <?php endif; ?>
                    
                    <div style="color: white;">
                        <h1 class="site-title" style="margin: 0; font-size: 1.25rem; color: white; font-weight: 700;">
                            <a href="<?php echo esc_url(home_url('/')); ?>" style="color: white; text-decoration: none;">
                                <?php bloginfo('name'); ?>
                            </a>
                        </h1>
                        <?php
                        $description = get_bloginfo('description', 'display');
                        if ($description || is_customize_preview()) :
                        ?>
                            <p class="site-description" style="margin: 0; font-size: 0.875rem; color: var(--aca-secondary);">
                                <?php echo $description; ?>
                            </p>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Navigation Desktop -->
                <nav id="site-navigation" class="main-navigation hidden lg:flex">
                    <div class="menu-wrapper" style="background-color: var(--aca-primary-dark); border-radius: 8px; padding: 4px; display: flex; align-items: center;">
                        <?php
                        if (has_nav_menu('primary')) {
                            wp_nav_menu(array(
                                'theme_location' => 'primary',
                                'menu_id'        => 'primary-menu',
                                'menu_class'     => 'flex items-center',
                                'container'      => false,
                                'walker'         => new ACA_Walker_Nav_Menu(),
                            ));
                        } else {
                            aca_default_menu();
                        }
                        ?>
                        
                        <!-- Sélecteur de langue -->
                        <div class="relative ml-4">
                            <button class="flex items-center text-white hover:text-[#A8E6CF] transition-colors" style="gap: 0.25rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <span class="text-sm">FR</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </button>
                        </div>
                        
                        <!-- Bouton CTA -->
                        <a href="#contact" class="btn btn-success ml-4">
                            Devenir Membre
                        </a>
                    </div>
                </nav>

                <!-- Menu mobile button -->
                <button class="menu-toggle lg:hidden" aria-controls="primary-menu" aria-expanded="false" style="background: none; border: 2px solid white; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
                    <span class="sr-only">Menu</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Navigation Mobile -->
        <div class="mobile-menu lg:hidden" style="display: none; background-color: var(--aca-primary-dark); border-top: 1px solid rgba(255, 255, 255, 0.1);">
            <div class="container">
                <div class="py-4" style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <?php
                    if (has_nav_menu('primary')) {
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'menu_class'     => 'mobile-nav-menu',
                            'container'      => false,
                            'walker'         => new ACA_Walker_Nav_Menu_Mobile(),
                        ));
                    } else {
                        echo '<a href="' . home_url() . '" style="color: white; text-decoration: none; padding: 0.75rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease; display: block;">Accueil</a>';
                        echo '<a href="#" style="color: white; text-decoration: none; padding: 0.75rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease; display: block;">À Propos</a>';
                        echo '<a href="#" style="color: white; text-decoration: none; padding: 0.75rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease; display: block;">Membres</a>';
                        echo '<a href="#" style="color: white; text-decoration: none; padding: 0.75rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease; display: block;">Actualités</a>';
                        echo '<a href="#" style="color: white; text-decoration: none; padding: 0.75rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease; display: block;">Publications</a>';
                        echo '<a href="#" style="color: white; text-decoration: none; padding: 0.75rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease; display: block;">Contact</a>';
                    }
                    ?>
                    <div style="padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1); margin-top: 1rem;">
                        <a href="#contact" class="btn btn-success" style="width: 100%; text-align: center;">
                            Devenir Membre
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div id="content" class="site-content">

<?php
// Walker personnalisé pour le menu de navigation
class ACA_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';
        
        $output .= '<li' . $id . $class_names . ' style="margin-right: 0.25rem;">';
        
        $attributes = ! empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= ! empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= ! empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= ! empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
        
        $item_output = isset($args->before) ? $args->before : '';
        $item_output .= '<a' . $attributes . ' style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease; font-weight: 500; display: block;">';
        $item_output .= (isset($args->link_before) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (isset($args->link_after) ? $args->link_after : '');
        $item_output .= '</a>';
        $item_output .= isset($args->after) ? $args->after : '';
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

// Walker pour le menu mobile
class ACA_Walker_Nav_Menu_Mobile extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';
        
        $attributes = ! empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= ! empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= ! empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= ! empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
        
        $item_output = '<a' . $attributes . ' style="color: white; text-decoration: none; padding: 0.75rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease; display: block; font-weight: 500;">';
        $item_output .= apply_filters('the_title', $item->title, $item->ID);
        $item_output .= '</a>';
        
        $output .= $item_output;
    }
}
?>

<script>
// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.style.display = isExpanded ? 'none' : 'block';
        });
    }
    
    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.main-navigation') && !e.target.closest('.menu-toggle')) {
            if (mobileMenu) {
                mobileMenu.style.display = 'none';
            }
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // Adapter le menu au redimensionnement
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) {
            if (mobileMenu) {
                mobileMenu.style.display = 'none';
            }
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});
</script>