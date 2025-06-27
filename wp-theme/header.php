<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header" style="background-color: var(--aca-primary);">
        <div class="container">
            <div class="d-flex justify-between align-center py-3">
                <!-- Logo -->
                <div class="site-branding d-flex align-center">
                    <?php if (has_custom_logo()) : ?>
                        <div class="custom-logo">
                            <?php the_custom_logo(); ?>
                        </div>
                    <?php else : ?>
                        <div class="bg-white rounded p-2 mr-3">
                            <div style="width: 48px; height: 32px; background-color: var(--aca-primary); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">
                                ACA
                            </div>
                        </div>
                    <?php endif; ?>
                    
                    <div style="color: white;">
                        <h1 class="site-title" style="margin: 0; font-size: 1.25rem; color: white;">
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

                <!-- Navigation -->
                <nav id="site-navigation" class="main-navigation">
                    <button class="menu-toggle d-block d-lg-none" aria-controls="primary-menu" aria-expanded="false" style="background: none; border: 2px solid white; color: white; padding: 8px 16px; border-radius: 4px;">
                        <span class="menu-toggle-text">Menu</span>
                    </button>
                    
                    <div class="menu-wrapper" style="background-color: var(--aca-primary-dark); border-radius: 8px; padding: 4px;">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'menu_id'        => 'primary-menu',
                            'menu_class'     => 'd-flex align-center',
                            'container'      => false,
                            'fallback_cb'    => 'aca_default_menu',
                        ));
                        ?>
                        
                        <!-- Bouton CTA -->
                        <a href="#contact" class="btn btn-success ml-3" style="background-color: var(--aca-success);">
                            Devenir Membre
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <div id="content" class="site-content">