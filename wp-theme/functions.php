<?php
/**
 * Fonctions du thème ACA
 */

// Sécurité
if (!defined('ABSPATH')) {
    exit;
}

// Configuration du thème
function aca_theme_setup() {
    // Support des fonctionnalités WordPress
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('align-wide');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');
    
    // Menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'aca-theme'),
        'footer' => __('Menu Footer', 'aca-theme'),
    ));
    
    // Tailles d'images
    add_image_size('aca-hero', 1920, 600, true);
    add_image_size('aca-news', 400, 250, true);
    add_image_size('aca-team', 300, 300, true);
    add_image_size('aca-thumbnail', 150, 150, true);
}
add_action('after_setup_theme', 'aca_theme_setup');

// Enqueue des styles et scripts
function aca_theme_scripts() {
    // Styles
    wp_enqueue_style('aca-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('aca-blocks', get_template_directory_uri() . '/assets/css/blocks.css', array(), '1.0.0');
    
    // Scripts
    wp_enqueue_script('aca-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localisation pour AJAX
    wp_localize_script('aca-main', 'aca_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('aca_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'aca_theme_scripts');

// Enqueue des styles pour l'éditeur
function aca_editor_styles() {
    add_editor_style('assets/css/editor-style.css');
}
add_action('admin_init', 'aca_editor_styles');

// Widgets
function aca_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar Principal', 'aca-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Widgets pour la sidebar principale', 'aca-theme'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer 1', 'aca-theme'),
        'id'            => 'footer-1',
        'description'   => __('Première colonne du footer', 'aca-theme'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer 2', 'aca-theme'),
        'id'            => 'footer-2',
        'description'   => __('Deuxième colonne du footer', 'aca-theme'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer 3', 'aca-theme'),
        'id'            => 'footer-3',
        'description'   => __('Troisième colonne du footer', 'aca-theme'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer 4', 'aca-theme'),
        'id'            => 'footer-4',
        'description'   => __('Quatrième colonne du footer', 'aca-theme'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'aca_widgets_init');

// Enregistrement des blocs personnalisés
function aca_register_blocks() {
    // Bloc Hero
    register_block_type('aca/hero', array(
        'editor_script' => 'aca-blocks-editor',
        'editor_style'  => 'aca-blocks-editor',
        'style'         => 'aca-blocks',
        'render_callback' => 'aca_render_hero_block',
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => 'Promouvoir l\'Excellence Cotonnière en Afrique'
            ),
            'subtitle' => array(
                'type' => 'string',
                'default' => 'Fédérer les acteurs de la filière coton pour un développement durable'
            ),
            'backgroundImage' => array(
                'type' => 'string',
                'default' => ''
            ),
            'buttonText' => array(
                'type' => 'string',
                'default' => 'Découvrir l\'ACA'
            ),
            'buttonUrl' => array(
                'type' => 'string',
                'default' => '#'
            )
        )
    ));
    
    // Bloc Statistiques
    register_block_type('aca/stats', array(
        'editor_script' => 'aca-blocks-editor',
        'editor_style'  => 'aca-blocks-editor',
        'style'         => 'aca-blocks',
        'render_callback' => 'aca_render_stats_block',
        'attributes' => array(
            'stats' => array(
                'type' => 'array',
                'default' => array(
                    array('number' => '150', 'label' => 'Membres Actifs', 'suffix' => '+'),
                    array('number' => '25', 'label' => 'Pays Représentés', 'suffix' => ''),
                    array('number' => '2500', 'label' => 'Tonnes de Coton', 'suffix' => 'K'),
                    array('number' => '45', 'label' => 'Projets en Cours', 'suffix' => '')
                )
            )
        )
    ));
    
    // Bloc Actualités
    register_block_type('aca/news', array(
        'editor_script' => 'aca-blocks-editor',
        'editor_style'  => 'aca-blocks-editor',
        'style'         => 'aca-blocks',
        'render_callback' => 'aca_render_news_block',
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => 'Dernières Actualités'
            ),
            'subtitle' => array(
                'type' => 'string',
                'default' => 'Restez informé des dernières nouvelles'
            ),
            'numberOfPosts' => array(
                'type' => 'number',
                'default' => 3
            ),
            'category' => array(
                'type' => 'string',
                'default' => ''
            )
        )
    ));
    
    // Bloc Équipe
    register_block_type('aca/team', array(
        'editor_script' => 'aca-blocks-editor',
        'editor_style'  => 'aca-blocks-editor',
        'style'         => 'aca-blocks',
        'render_callback' => 'aca_render_team_block',
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => 'Notre Équipe'
            ),
            'subtitle' => array(
                'type' => 'string',
                'default' => 'Des experts passionnés au service de l\'excellence'
            ),
            'members' => array(
                'type' => 'array',
                'default' => array()
            )
        )
    ));
    
    // Bloc Contact
    register_block_type('aca/contact', array(
        'editor_script' => 'aca-blocks-editor',
        'editor_style'  => 'aca-blocks-editor',
        'style'         => 'aca-blocks',
        'render_callback' => 'aca_render_contact_block',
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => 'Contactez-nous'
            ),
            'subtitle' => array(
                'type' => 'string',
                'default' => 'Notre équipe est à votre disposition'
            ),
            'email' => array(
                'type' => 'string',
                'default' => 'contact@aca-coton.org'
            ),
            'phone' => array(
                'type' => 'string',
                'default' => '+225 27 20 30 40 50'
            ),
            'address' => array(
                'type' => 'string',
                'default' => '123 Avenue de l\'Indépendance, Abidjan'
            )
        )
    ));
}
add_action('init', 'aca_register_blocks');

// Fonctions de rendu des blocs
function aca_render_hero_block($attributes) {
    $title = $attributes['title'];
    $subtitle = $attributes['subtitle'];
    $background = $attributes['backgroundImage'];
    $button_text = $attributes['buttonText'];
    $button_url = $attributes['buttonUrl'];
    
    ob_start();
    ?>
    <section class="aca-hero-block" style="background-image: url('<?php echo esc_url($background); ?>');">
        <div class="aca-hero-overlay"></div>
        <div class="container">
            <div class="aca-hero-content">
                <h1 class="fade-in-up"><?php echo esc_html($title); ?></h1>
                <p class="fade-in-up" style="animation-delay: 0.2s;"><?php echo esc_html($subtitle); ?></p>
                <div class="fade-in-up" style="animation-delay: 0.4s;">
                    <a href="<?php echo esc_url($button_url); ?>" class="btn btn-primary">
                        <?php echo esc_html($button_text); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function aca_render_stats_block($attributes) {
    $stats = $attributes['stats'];
    
    ob_start();
    ?>
    <section class="section section-light">
        <div class="container">
            <div class="aca-stats-block">
                <?php foreach ($stats as $stat): ?>
                    <div class="aca-stat-item">
                        <div class="aca-stat-number">
                            <?php echo esc_html($stat['number'] . $stat['suffix']); ?>
                        </div>
                        <div class="aca-stat-label">
                            <?php echo esc_html($stat['label']); ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function aca_render_news_block($attributes) {
    $title = $attributes['title'];
    $subtitle = $attributes['subtitle'];
    $number_of_posts = $attributes['numberOfPosts'];
    $category = $attributes['category'];
    
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => $number_of_posts,
        'post_status' => 'publish'
    );
    
    if (!empty($category)) {
        $args['category_name'] = $category;
    }
    
    $posts = get_posts($args);
    
    ob_start();
    ?>
    <section class="section">
        <div class="container">
            <div class="text-center mb-5">
                <h2><?php echo esc_html($title); ?></h2>
                <p><?php echo esc_html($subtitle); ?></p>
            </div>
            
            <div class="aca-news-grid">
                <?php foreach ($posts as $post): ?>
                    <article class="aca-news-item">
                        <?php if (has_post_thumbnail($post->ID)): ?>
                            <img src="<?php echo get_the_post_thumbnail_url($post->ID, 'aca-news'); ?>" 
                                 alt="<?php echo esc_attr($post->post_title); ?>" 
                                 class="aca-news-image">
                        <?php endif; ?>
                        
                        <div class="aca-news-content">
                            <div class="aca-news-meta">
                                <span class="aca-news-category">
                                    <?php 
                                    $categories = get_the_category($post->ID);
                                    echo !empty($categories) ? esc_html($categories[0]->name) : 'Actualités';
                                    ?>
                                </span>
                                <span><?php echo get_the_date('d M Y', $post->ID); ?></span>
                            </div>
                            
                            <h3>
                                <a href="<?php echo get_permalink($post->ID); ?>">
                                    <?php echo esc_html($post->post_title); ?>
                                </a>
                            </h3>
                            
                            <p><?php echo wp_trim_words($post->post_excerpt ?: $post->post_content, 20); ?></p>
                            
                            <a href="<?php echo get_permalink($post->ID); ?>" class="btn btn-outline">
                                Lire plus
                            </a>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function aca_render_team_block($attributes) {
    $title = $attributes['title'];
    $subtitle = $attributes['subtitle'];
    $members = $attributes['members'];
    
    ob_start();
    ?>
    <section class="section section-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2><?php echo esc_html($title); ?></h2>
                <p><?php echo esc_html($subtitle); ?></p>
            </div>
            
            <div class="aca-team-grid">
                <?php foreach ($members as $member): ?>
                    <div class="aca-team-member">
                        <?php if (!empty($member['photo'])): ?>
                            <img src="<?php echo esc_url($member['photo']); ?>" 
                                 alt="<?php echo esc_attr($member['name']); ?>" 
                                 class="aca-team-photo">
                        <?php endif; ?>
                        
                        <div class="aca-team-name"><?php echo esc_html($member['name']); ?></div>
                        <div class="aca-team-position"><?php echo esc_html($member['position']); ?></div>
                        <p><?php echo esc_html($member['bio']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function aca_render_contact_block($attributes) {
    $title = $attributes['title'];
    $subtitle = $attributes['subtitle'];
    $email = $attributes['email'];
    $phone = $attributes['phone'];
    $address = $attributes['address'];
    
    ob_start();
    ?>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="aca-contact-form">
                        <h2><?php echo esc_html($title); ?></h2>
                        <p><?php echo esc_html($subtitle); ?></p>
                        
                        <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                            <input type="hidden" name="action" value="aca_contact_form">
                            <?php wp_nonce_field('aca_contact_nonce', 'aca_contact_nonce'); ?>
                            
                            <div class="row">
                                <div class="col-6">
                                    <div class="aca-form-group">
                                        <label class="aca-form-label" for="first_name">Prénom *</label>
                                        <input type="text" id="first_name" name="first_name" class="aca-form-input" required>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="aca-form-group">
                                        <label class="aca-form-label" for="last_name">Nom *</label>
                                        <input type="text" id="last_name" name="last_name" class="aca-form-input" required>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="aca-form-group">
                                <label class="aca-form-label" for="email">Email *</label>
                                <input type="email" id="email" name="email" class="aca-form-input" required>
                            </div>
                            
                            <div class="aca-form-group">
                                <label class="aca-form-label" for="subject">Sujet *</label>
                                <input type="text" id="subject" name="subject" class="aca-form-input" required>
                            </div>
                            
                            <div class="aca-form-group">
                                <label class="aca-form-label" for="message">Message *</label>
                                <textarea id="message" name="message" class="aca-form-textarea" required></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Envoyer le message</button>
                        </form>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h3>Contact Rapide</h3>
                            
                            <div class="mb-3">
                                <strong>Email:</strong><br>
                                <a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a>
                            </div>
                            
                            <div class="mb-3">
                                <strong>Téléphone:</strong><br>
                                <a href="tel:<?php echo esc_attr($phone); ?>"><?php echo esc_html($phone); ?></a>
                            </div>
                            
                            <div class="mb-3">
                                <strong>Adresse:</strong><br>
                                <?php echo esc_html($address); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

// Traitement du formulaire de contact
function aca_handle_contact_form() {
    if (!isset($_POST['aca_contact_nonce']) || !wp_verify_nonce($_POST['aca_contact_nonce'], 'aca_contact_nonce')) {
        wp_die('Erreur de sécurité');
    }
    
    $first_name = sanitize_text_field($_POST['first_name']);
    $last_name = sanitize_text_field($_POST['last_name']);
    $email = sanitize_email($_POST['email']);
    $subject = sanitize_text_field($_POST['subject']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Envoi de l'email
    $to = get_option('admin_email');
    $email_subject = 'Nouveau message de contact ACA: ' . $subject;
    $email_message = "Nom: $first_name $last_name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";
    
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    
    if (wp_mail($to, $email_subject, $email_message, $headers)) {
        wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
    }
    exit;
}
add_action('admin_post_aca_contact_form', 'aca_handle_contact_form');
add_action('admin_post_nopriv_aca_contact_form', 'aca_handle_contact_form');

// Customizer
function aca_customize_register($wp_customize) {
    // Section ACA
    $wp_customize->add_section('aca_options', array(
        'title' => __('Options ACA', 'aca-theme'),
        'priority' => 30,
    ));
    
    // Logo
    $wp_customize->add_setting('aca_logo', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'aca_logo', array(
        'label' => __('Logo ACA', 'aca-theme'),
        'section' => 'aca_options',
        'settings' => 'aca_logo',
    )));
    
    // Couleur primaire
    $wp_customize->add_setting('aca_primary_color', array(
        'default' => '#2D9B8A',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'aca_primary_color', array(
        'label' => __('Couleur Primaire', 'aca-theme'),
        'section' => 'aca_options',
        'settings' => 'aca_primary_color',
    )));
    
    // Informations de contact
    $wp_customize->add_setting('aca_phone', array(
        'default' => '+225 27 20 30 40 50',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('aca_phone', array(
        'label' => __('Téléphone', 'aca-theme'),
        'section' => 'aca_options',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('aca_email', array(
        'default' => 'contact@aca-coton.org',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('aca_email', array(
        'label' => __('Email', 'aca-theme'),
        'section' => 'aca_options',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('aca_address', array(
        'default' => '123 Avenue de l\'Indépendance, Abidjan, Côte d\'Ivoire',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('aca_address', array(
        'label' => __('Adresse', 'aca-theme'),
        'section' => 'aca_options',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'aca_customize_register');

// CSS personnalisé basé sur les options du customizer
function aca_customizer_css() {
    $primary_color = get_theme_mod('aca_primary_color', '#2D9B8A');
    ?>
    <style type="text/css">
        :root {
            --aca-primary: <?php echo esc_html($primary_color); ?>;
            --aca-primary-dark: <?php echo esc_html(aca_darken_color($primary_color, 20)); ?>;
        }
    </style>
    <?php
}
add_action('wp_head', 'aca_customizer_css');

// Fonction utilitaire pour assombrir une couleur
function aca_darken_color($color, $percent) {
    $color = str_replace('#', '', $color);
    $r = hexdec(substr($color, 0, 2));
    $g = hexdec(substr($color, 2, 2));
    $b = hexdec(substr($color, 4, 2));
    
    $r = max(0, min(255, $r - ($r * $percent / 100)));
    $g = max(0, min(255, $g - ($g * $percent / 100)));
    $b = max(0, min(255, $b - ($b * $percent / 100)));
    
    return sprintf('#%02x%02x%02x', $r, $g, $b);
}

// Post types personnalisés
function aca_register_post_types() {
    // Membres
    register_post_type('aca_member', array(
        'labels' => array(
            'name' => 'Membres',
            'singular_name' => 'Membre',
            'add_new' => 'Ajouter un membre',
            'add_new_item' => 'Ajouter un nouveau membre',
            'edit_item' => 'Modifier le membre',
            'new_item' => 'Nouveau membre',
            'view_item' => 'Voir le membre',
            'search_items' => 'Rechercher des membres',
            'not_found' => 'Aucun membre trouvé',
            'not_found_in_trash' => 'Aucun membre dans la corbeille'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-groups',
        'rewrite' => array('slug' => 'membres'),
    ));
    
    // Publications
    register_post_type('aca_publication', array(
        'labels' => array(
            'name' => 'Publications',
            'singular_name' => 'Publication',
            'add_new' => 'Ajouter une publication',
            'add_new_item' => 'Ajouter une nouvelle publication',
            'edit_item' => 'Modifier la publication',
            'new_item' => 'Nouvelle publication',
            'view_item' => 'Voir la publication',
            'search_items' => 'Rechercher des publications',
            'not_found' => 'Aucune publication trouvée',
            'not_found_in_trash' => 'Aucune publication dans la corbeille'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-media-document',
        'rewrite' => array('slug' => 'publications'),
    ));
    
    // Événements
    register_post_type('aca_event', array(
        'labels' => array(
            'name' => 'Événements',
            'singular_name' => 'Événement',
            'add_new' => 'Ajouter un événement',
            'add_new_item' => 'Ajouter un nouvel événement',
            'edit_item' => 'Modifier l\'événement',
            'new_item' => 'Nouvel événement',
            'view_item' => 'Voir l\'événement',
            'search_items' => 'Rechercher des événements',
            'not_found' => 'Aucun événement trouvé',
            'not_found_in_trash' => 'Aucun événement dans la corbeille'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-calendar-alt',
        'rewrite' => array('slug' => 'evenements'),
    ));
}
add_action('init', 'aca_register_post_types');

// Taxonomies personnalisées
function aca_register_taxonomies() {
    // Type de membre
    register_taxonomy('member_type', 'aca_member', array(
        'labels' => array(
            'name' => 'Types de membre',
            'singular_name' => 'Type de membre',
            'search_items' => 'Rechercher des types',
            'all_items' => 'Tous les types',
            'edit_item' => 'Modifier le type',
            'update_item' => 'Mettre à jour le type',
            'add_new_item' => 'Ajouter un nouveau type',
            'new_item_name' => 'Nom du nouveau type',
            'menu_name' => 'Types de membre',
        ),
        'hierarchical' => true,
        'public' => true,
        'rewrite' => array('slug' => 'type-membre'),
    ));
    
    // Pays
    register_taxonomy('country', array('aca_member', 'aca_event'), array(
        'labels' => array(
            'name' => 'Pays',
            'singular_name' => 'Pays',
            'search_items' => 'Rechercher des pays',
            'all_items' => 'Tous les pays',
            'edit_item' => 'Modifier le pays',
            'update_item' => 'Mettre à jour le pays',
            'add_new_item' => 'Ajouter un nouveau pays',
            'new_item_name' => 'Nom du nouveau pays',
            'menu_name' => 'Pays',
        ),
        'hierarchical' => true,
        'public' => true,
        'rewrite' => array('slug' => 'pays'),
    ));
    
    // Type de publication
    register_taxonomy('publication_type', 'aca_publication', array(
        'labels' => array(
            'name' => 'Types de publication',
            'singular_name' => 'Type de publication',
            'search_items' => 'Rechercher des types',
            'all_items' => 'Tous les types',
            'edit_item' => 'Modifier le type',
            'update_item' => 'Mettre à jour le type',
            'add_new_item' => 'Ajouter un nouveau type',
            'new_item_name' => 'Nom du nouveau type',
            'menu_name' => 'Types de publication',
        ),
        'hierarchical' => true,
        'public' => true,
        'rewrite' => array('slug' => 'type-publication'),
    ));
}
add_action('init', 'aca_register_taxonomies');

// Champs personnalisés avec ACF (si installé)
function aca_add_meta_boxes() {
    // Meta box pour les membres
    add_meta_box(
        'aca_member_details',
        'Détails du membre',
        'aca_member_details_callback',
        'aca_member',
        'normal',
        'high'
    );
    
    // Meta box pour les événements
    add_meta_box(
        'aca_event_details',
        'Détails de l\'événement',
        'aca_event_details_callback',
        'aca_event',
        'normal',
        'high'
    );
    
    // Meta box pour les publications
    add_meta_box(
        'aca_publication_details',
        'Détails de la publication',
        'aca_publication_details_callback',
        'aca_publication',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'aca_add_meta_boxes');

function aca_member_details_callback($post) {
    wp_nonce_field('aca_member_details_nonce', 'aca_member_details_nonce');
    
    $company = get_post_meta($post->ID, '_aca_member_company', true);
    $position = get_post_meta($post->ID, '_aca_member_position', true);
    $email = get_post_meta($post->ID, '_aca_member_email', true);
    $phone = get_post_meta($post->ID, '_aca_member_phone', true);
    $website = get_post_meta($post->ID, '_aca_member_website', true);
    $address = get_post_meta($post->ID, '_aca_member_address', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="aca_member_company">Entreprise</label></th>
            <td><input type="text" id="aca_member_company" name="aca_member_company" value="<?php echo esc_attr($company); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="aca_member_position">Poste</label></th>
            <td><input type="text" id="aca_member_position" name="aca_member_position" value="<?php echo esc_attr($position); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="aca_member_email">Email</label></th>
            <td><input type="email" id="aca_member_email" name="aca_member_email" value="<?php echo esc_attr($email); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="aca_member_phone">Téléphone</label></th>
            <td><input type="text" id="aca_member_phone" name="aca_member_phone" value="<?php echo esc_attr($phone); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="aca_member_website">Site web</label></th>
            <td><input type="url" id="aca_member_website" name="aca_member_website" value="<?php echo esc_attr($website); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="aca_member_address">Adresse</label></th>
            <td><textarea id="aca_member_address" name="aca_member_address" rows="3" class="large-text"><?php echo esc_textarea($address); ?></textarea></td>
        </tr>
    </table>
    <?php
}

function aca_event_details_callback($post) {
    wp_nonce_field('aca_event_details_nonce', 'aca_event_details_nonce');
    
    $date = get_post_meta($post->ID, '_aca_event_date', true);
    $time = get_post_meta($post->ID, '_aca_event_time', true);
    $location = get_post_meta($post->ID, '_aca_event_location', true);
    $organizer = get_post_meta($post->ID, '_aca_event_organizer', true);
    $capacity = get_post_meta($post->ID, '_aca_event_capacity', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="aca_event_date">Date</label></th>
            <td><input type="date" id="aca_event_date" name="aca_event_date" value="<?php echo esc_attr($date); ?>" /></td>
        </tr>
        <tr>
            <th><label for="aca_event_time">Heure</label></th>
            <td><input type="time" id="aca_event_time" name="aca_event_time" value="<?php echo esc_attr($time); ?>" /></td>
        </tr>
        <tr>
            <th><label for="aca_event_location">Lieu</label></th>
            <td><input type="text" id="aca_event_location" name="aca_event_location" value="<?php echo esc_attr($location); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="aca_event_organizer">Organisateur</label></th>
            <td><input type="text" id="aca_event_organizer" name="aca_event_organizer" value="<?php echo esc_attr($organizer); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="aca_event_capacity">Capacité</label></th>
            <td><input type="number" id="aca_event_capacity" name="aca_event_capacity" value="<?php echo esc_attr($capacity); ?>" /></td>
        </tr>
    </table>
    <?php
}

function aca_publication_details_callback($post) {
    wp_nonce_field('aca_publication_details_nonce', 'aca_publication_details_nonce');
    
    $author = get_post_meta($post->ID, '_aca_publication_author', true);
    $file_url = get_post_meta($post->ID, '_aca_publication_file', true);
    $file_size = get_post_meta($post->ID, '_aca_publication_size', true);
    $pages = get_post_meta($post->ID, '_aca_publication_pages', true);
    $language = get_post_meta($post->ID, '_aca_publication_language', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="aca_publication_author">Auteur</label></th>
            <td><input type="text" id="aca_publication_author" name="aca_publication_author" value="<?php echo esc_attr($author); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="aca_publication_file">Fichier</label></th>
            <td>
                <input type="url" id="aca_publication_file" name="aca_publication_file" value="<?php echo esc_attr($file_url); ?>" class="regular-text" />
                <button type="button" class="button" onclick="openMediaUploader()">Choisir un fichier</button>
            </td>
        </tr>
        <tr>
            <th><label for="aca_publication_size">Taille du fichier</label></th>
            <td><input type="text" id="aca_publication_size" name="aca_publication_size" value="<?php echo esc_attr($file_size); ?>" placeholder="ex: 2.5 MB" /></td>
        </tr>
        <tr>
            <th><label for="aca_publication_pages">Nombre de pages</label></th>
            <td><input type="number" id="aca_publication_pages" name="aca_publication_pages" value="<?php echo esc_attr($pages); ?>" /></td>
        </tr>
        <tr>
            <th><label for="aca_publication_language">Langue</label></th>
            <td>
                <select id="aca_publication_language" name="aca_publication_language">
                    <option value="fr" <?php selected($language, 'fr'); ?>>Français</option>
                    <option value="en" <?php selected($language, 'en'); ?>>Anglais</option>
                </select>
            </td>
        </tr>
    </table>
    
    <script>
    function openMediaUploader() {
        var mediaUploader = wp.media({
            title: 'Choisir un fichier',
            button: {
                text: 'Utiliser ce fichier'
            },
            multiple: false
        });
        
        mediaUploader.on('select', function() {
            var attachment = mediaUploader.state().get('selection').first().toJSON();
            document.getElementById('aca_publication_file').value = attachment.url;
        });
        
        mediaUploader.open();
    }
    </script>
    <?php
}

// Sauvegarde des champs personnalisés
function aca_save_meta_boxes($post_id) {
    // Vérification des nonces et permissions
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    
    // Sauvegarde des champs membres
    if (isset($_POST['aca_member_details_nonce']) && wp_verify_nonce($_POST['aca_member_details_nonce'], 'aca_member_details_nonce')) {
        $fields = array('company', 'position', 'email', 'phone', 'website', 'address');
        foreach ($fields as $field) {
            if (isset($_POST['aca_member_' . $field])) {
                update_post_meta($post_id, '_aca_member_' . $field, sanitize_text_field($_POST['aca_member_' . $field]));
            }
        }
    }
    
    // Sauvegarde des champs événements
    if (isset($_POST['aca_event_details_nonce']) && wp_verify_nonce($_POST['aca_event_details_nonce'], 'aca_event_details_nonce')) {
        $fields = array('date', 'time', 'location', 'organizer', 'capacity');
        foreach ($fields as $field) {
            if (isset($_POST['aca_event_' . $field])) {
                update_post_meta($post_id, '_aca_event_' . $field, sanitize_text_field($_POST['aca_event_' . $field]));
            }
        }
    }
    
    // Sauvegarde des champs publications
    if (isset($_POST['aca_publication_details_nonce']) && wp_verify_nonce($_POST['aca_publication_details_nonce'], 'aca_publication_details_nonce')) {
        $fields = array('author', 'file', 'size', 'pages', 'language');
        foreach ($fields as $field) {
            if (isset($_POST['aca_publication_' . $field])) {
                update_post_meta($post_id, '_aca_publication_' . $field, sanitize_text_field($_POST['aca_publication_' . $field]));
            }
        }
    }
}
add_action('save_post', 'aca_save_meta_boxes');

// Sécurité et optimisations
function aca_security_headers() {
    if (!is_admin()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
    }
}
add_action('send_headers', 'aca_security_headers');

// Nettoyage du head
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// Désactiver les emojis si non nécessaires
function aca_disable_emojis() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
}
add_action('init', 'aca_disable_emojis');