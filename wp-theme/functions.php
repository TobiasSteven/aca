<?php
/**
 * Fonctions du thème ACA - Système de blocs complet
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
    add_theme_support('align-full');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');
    
    // Couleurs personnalisées pour l'éditeur
    add_theme_support('editor-color-palette', array(
        array(
            'name' => 'ACA Primary',
            'slug' => 'aca-primary',
            'color' => '#2D9B8A',
        ),
        array(
            'name' => 'ACA Primary Dark',
            'slug' => 'aca-primary-dark',
            'color' => '#1F6B5C',
        ),
        array(
            'name' => 'ACA Secondary',
            'slug' => 'aca-secondary',
            'color' => '#A8E6CF',
        ),
        array(
            'name' => 'ACA Success',
            'slug' => 'aca-success',
            'color' => '#28A745',
        ),
        array(
            'name' => 'ACA Warning',
            'slug' => 'aca-warning',
            'color' => '#FD7E14',
        ),
        array(
            'name' => 'ACA Danger',
            'slug' => 'aca-danger',
            'color' => '#DC3545',
        ),
    ));
    
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
    add_editor_style('assets/css/blocks.css');
    add_editor_style('style.css');
}
add_action('admin_init', 'aca_editor_styles');

// Enregistrement des blocs personnalisés
function aca_register_blocks() {
    // Vérifier si Gutenberg est actif
    if (!function_exists('register_block_type')) {
        return;
    }

    // Bloc Hero
    register_block_type('aca/hero', array(
        'render_callback' => 'aca_render_hero_block',
        'attributes' => array(
            'slides' => array(
                'type' => 'array',
                'default' => array(
                    array(
                        'image' => 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
                        'title' => 'Promouvoir l\'Excellence Cotonnière en Afrique',
                        'subtitle' => 'Fédérer les acteurs de la filière coton pour un développement durable et inclusif du secteur en Afrique'
                    ),
                    array(
                        'image' => 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
                        'title' => 'Innovation et Durabilité',
                        'subtitle' => 'Accompagner la transformation digitale et écologique de la filière cotonnière africaine'
                    ),
                    array(
                        'image' => 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
                        'title' => 'Réseau Continental',
                        'subtitle' => 'Connecter producteurs, transformateurs et partenaires à travers tout le continent africain'
                    )
                )
            ),
            'autoplay' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'showNavigation' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'showDots' => array(
                'type' => 'boolean',
                'default' => true
            )
        )
    ));

    // Bloc Statistiques
    register_block_type('aca/stats', array(
        'render_callback' => 'aca_render_stats_block',
        'attributes' => array(
            'stats' => array(
                'type' => 'array',
                'default' => array(
                    array(
                        'icon' => 'users',
                        'number' => '150',
                        'suffix' => '+',
                        'label' => 'Membres Actifs',
                        'color' => '#A8E6CF'
                    ),
                    array(
                        'icon' => 'globe',
                        'number' => '25',
                        'suffix' => '',
                        'label' => 'Pays Représentés',
                        'color' => '#A8E6CF'
                    ),
                    array(
                        'icon' => 'package',
                        'number' => '2500',
                        'suffix' => 'K',
                        'label' => 'Tonnes de Coton',
                        'color' => '#A8E6CF'
                    ),
                    array(
                        'icon' => 'trending-up',
                        'number' => '45',
                        'suffix' => '',
                        'label' => 'Projets en Cours',
                        'color' => '#A8E6CF'
                    )
                )
            ),
            'animateOnScroll' => array(
                'type' => 'boolean',
                'default' => true
            )
        )
    ));

    // Bloc Actualités
    register_block_type('aca/news', array(
        'render_callback' => 'aca_render_news_block',
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => 'Dernières Actualités'
            ),
            'subtitle' => array(
                'type' => 'string',
                'default' => 'Restez informé des dernières nouvelles et développements de la filière cotonnière africaine'
            ),
            'numberOfPosts' => array(
                'type' => 'number',
                'default' => 3
            ),
            'category' => array(
                'type' => 'string',
                'default' => ''
            ),
            'showExcerpt' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'showReadTime' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'showCTA' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'ctaText' => array(
                'type' => 'string',
                'default' => 'Voir toutes les actualités'
            )
        )
    ));

    // Bloc Missions
    register_block_type('aca/missions', array(
        'render_callback' => 'aca_render_missions_block',
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => 'Nos Missions'
            ),
            'subtitle' => array(
                'type' => 'string',
                'default' => 'L\'ACA s\'engage à transformer et développer la filière cotonnière africaine à travers trois axes stratégiques'
            ),
            'missions' => array(
                'type' => 'array',
                'default' => array(
                    array(
                        'icon' => 'target',
                        'title' => 'Promotion de la Filière Coton',
                        'description' => 'Développer et promouvoir l\'excellence de la filière cotonnière africaine à travers des initiatives stratégiques et des partenariats durables.',
                        'color' => '#A8E6CF'
                    ),
                    array(
                        'icon' => 'users',
                        'title' => 'Coopération entre Acteurs',
                        'description' => 'Faciliter la collaboration entre producteurs, transformateurs, négociants et institutions pour renforcer l\'écosystème cotonnier.',
                        'color' => '#A8E6CF'
                    ),
                    array(
                        'icon' => 'trending-up',
                        'title' => 'Valorisation des Productions',
                        'description' => 'Accompagner la montée en gamme et l\'amélioration de la qualité des productions cotonnières africaines sur les marchés internationaux.',
                        'color' => '#A8E6CF'
                    )
                )
            ),
            'showCTA' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'ctaTitle' => array(
                'type' => 'string',
                'default' => 'Rejoignez Notre Mission'
            ),
            'ctaText' => array(
                'type' => 'string',
                'default' => 'Participez au développement de l\'excellence cotonnière africaine'
            ),
            'ctaButtonText' => array(
                'type' => 'string',
                'default' => 'Devenir Partenaire'
            )
        )
    ));

    // Bloc Événements
    register_block_type('aca/events', array(
        'render_callback' => 'aca_render_events_block',
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => 'Événements à Venir'
            ),
            'subtitle' => array(
                'type' => 'string',
                'default' => 'Participez aux événements qui façonnent l\'avenir de la filière cotonnière africaine'
            ),
            'numberOfEvents' => array(
                'type' => 'number',
                'default' => 3
            ),
            'showCalendar' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'events' => array(
                'type' => 'array',
                'default' => array(
                    array(
                        'date' => '2024-11-25',
                        'title' => 'Forum International du Coton Africain',
                        'location' => 'Abidjan, Côte d\'Ivoire',
                        'time' => '09:00 - 17:00',
                        'participants' => 150,
                        'type' => 'Conférence',
                        'status' => 'upcoming'
                    ),
                    array(
                        'date' => '2024-12-05',
                        'title' => 'Atelier Innovation Textile',
                        'location' => 'Dakar, Sénégal',
                        'time' => '14:00 - 18:00',
                        'participants' => 80,
                        'type' => 'Atelier',
                        'status' => 'upcoming'
                    ),
                    array(
                        'date' => '2024-12-15',
                        'title' => 'Assemblée Générale ACA',
                        'location' => 'Ouagadougou, Burkina Faso',
                        'time' => '10:00 - 16:00',
                        'participants' => 200,
                        'type' => 'Assemblée',
                        'status' => 'upcoming'
                    )
                )
            )
        )
    ));

    // Bloc Témoignages
    register_block_type('aca/testimonials', array(
        'render_callback' => 'aca_render_testimonials_block',
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => 'Témoignages de nos Membres'
            ),
            'subtitle' => array(
                'type' => 'string',
                'default' => 'Découvrez comment l\'ACA accompagne ses membres vers l\'excellence'
            ),
            'testimonials' => array(
                'type' => 'array',
                'default' => array(
                    array(
                        'name' => 'Amadou Diallo',
                        'position' => 'Directeur Général, CottonCorp Mali',
                        'image' => 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
                        'quote' => 'L\'ACA a transformé notre approche de la production cotonnière. Grâce à leur accompagnement, nous avons amélioré notre rendement de 40% en deux ans.',
                        'country' => 'Mali'
                    ),
                    array(
                        'name' => 'Fatima Ouedraogo',
                        'position' => 'Présidente, Coopérative des Femmes Productrices',
                        'image' => 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
                        'quote' => 'Le réseau ACA nous permet d\'accéder à de nouveaux marchés et d\'échanger les meilleures pratiques avec nos homologues africains.',
                        'country' => 'Burkina Faso'
                    ),
                    array(
                        'name' => 'Jean-Baptiste Koffi',
                        'position' => 'Responsable Innovation, TextileAfric',
                        'image' => 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
                        'quote' => 'Les formations et les outils technologiques proposés par l\'ACA nous ont aidés à moderniser nos processus de transformation.',
                        'country' => 'Côte d\'Ivoire'
                    )
                )
            ),
            'autoplay' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'showPartners' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'partners' => array(
                'type' => 'array',
                'default' => array(
                    array('name' => 'AfDB', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=AfDB'),
                    array('name' => 'UEMOA', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=UEMOA'),
                    array('name' => 'CEDEAO', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=CEDEAO'),
                    array('name' => 'FAO', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=FAO'),
                    array('name' => 'ONUDI', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=ONUDI'),
                    array('name' => 'ICAC', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=ICAC')
                )
            )
        )
    ));

    // Bloc Newsletter
    register_block_type('aca/newsletter', array(
        'render_callback' => 'aca_render_newsletter_block',
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => 'Restez Informé'
            ),
            'subtitle' => array(
                'type' => 'string',
                'default' => 'Recevez les dernières actualités, analyses de marché et opportunités de la filière cotonnière africaine directement dans votre boîte mail.'
            ),
            'buttonText' => array(
                'type' => 'string',
                'default' => 'S\'abonner'
            ),
            'placeholder' => array(
                'type' => 'string',
                'default' => 'Votre adresse email'
            ),
            'disclaimer' => array(
                'type' => 'string',
                'default' => 'Nous respectons votre vie privée. Désabonnement possible à tout moment.'
            ),
            'showFeatures' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'features' => array(
                'type' => 'array',
                'default' => array(
                    array(
                        'icon' => 'mail',
                        'title' => 'Newsletter Hebdomadaire',
                        'description' => 'Actualités et analyses chaque semaine'
                    ),
                    array(
                        'icon' => 'check-circle',
                        'title' => 'Contenu Exclusif',
                        'description' => 'Rapports et études réservés aux abonnés'
                    ),
                    array(
                        'icon' => 'send',
                        'title' => 'Invitations Prioritaires',
                        'description' => 'Accès privilégié aux événements ACA'
                    )
                )
            )
        )
    ));

    // Bloc Breadcrumb
    register_block_type('aca/breadcrumb', array(
        'render_callback' => 'aca_render_breadcrumb_block',
        'attributes' => array(
            'items' => array(
                'type' => 'array',
                'default' => array(
                    array('label' => 'Accueil', 'href' => '#'),
                    array('label' => 'Page Actuelle')
                )
            ),
            'separator' => array(
                'type' => 'string',
                'default' => 'chevron-right'
            )
        )
    ));
}
add_action('init', 'aca_register_blocks');

// Fonctions de rendu des blocs
function aca_render_hero_block($attributes) {
    $slides = $attributes['slides'];
    $autoplay = $attributes['autoplay'];
    $showNavigation = $attributes['showNavigation'];
    $showDots = $attributes['showDots'];
    
    ob_start();
    ?>
    <section class="aca-hero-section">
        <?php foreach ($slides as $index => $slide): ?>
            <div class="aca-hero-slide <?php echo $index === 0 ? 'active' : ''; ?>">
                <div class="aca-hero-background" style="background-image: url('<?php echo esc_url($slide['image']); ?>');">
                    <div class="aca-hero-overlay"></div>
                </div>
            </div>
        <?php endforeach; ?>
        
        <div class="aca-hero-content">
            <div class="container">
                <div class="aca-hero-text">
                    <h1 class="aca-hero-title fade-in-up"><?php echo esc_html($slides[0]['title']); ?></h1>
                    <p class="aca-hero-subtitle fade-in-up" style="animation-delay: 0.2s;"><?php echo esc_html($slides[0]['subtitle']); ?></p>
                    <div class="aca-hero-buttons fade-in-up" style="animation-delay: 0.4s;">
                        <a href="#about" class="btn btn-outline">Découvrir l'ACA</a>
                        <a href="#contact" class="btn btn-success">Nous Rejoindre</a>
                    </div>
                </div>
            </div>
        </div>
        
        <?php if ($showNavigation && count($slides) > 1): ?>
            <button class="aca-hero-nav prev" onclick="acaHeroPrev()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
            </button>
            <button class="aca-hero-nav next" onclick="acaHeroNext()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
            </button>
        <?php endif; ?>
        
        <?php if ($showDots && count($slides) > 1): ?>
            <div class="aca-hero-dots">
                <?php foreach ($slides as $index => $slide): ?>
                    <button class="aca-hero-dot <?php echo $index === 0 ? 'active' : ''; ?>" onclick="acaHeroGoTo(<?php echo $index; ?>)"></button>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </section>
    
    <script>
    let acaHeroCurrentSlide = 0;
    const acaHeroSlides = <?php echo json_encode($slides); ?>;
    const acaHeroAutoplay = <?php echo $autoplay ? 'true' : 'false'; ?>;
    
    function acaHeroGoTo(index) {
        const slides = document.querySelectorAll('.aca-hero-slide');
        const dots = document.querySelectorAll('.aca-hero-dot');
        const title = document.querySelector('.aca-hero-title');
        const subtitle = document.querySelector('.aca-hero-subtitle');
        
        slides[acaHeroCurrentSlide].classList.remove('active');
        dots[acaHeroCurrentSlide].classList.remove('active');
        
        acaHeroCurrentSlide = index;
        
        slides[acaHeroCurrentSlide].classList.add('active');
        dots[acaHeroCurrentSlide].classList.add('active');
        
        title.textContent = acaHeroSlides[acaHeroCurrentSlide].title;
        subtitle.textContent = acaHeroSlides[acaHeroCurrentSlide].subtitle;
    }
    
    function acaHeroNext() {
        const nextIndex = (acaHeroCurrentSlide + 1) % acaHeroSlides.length;
        acaHeroGoTo(nextIndex);
    }
    
    function acaHeroPrev() {
        const prevIndex = (acaHeroCurrentSlide - 1 + acaHeroSlides.length) % acaHeroSlides.length;
        acaHeroGoTo(prevIndex);
    }
    
    if (acaHeroAutoplay && acaHeroSlides.length > 1) {
        setInterval(acaHeroNext, 5000);
    }
    </script>
    <?php
    return ob_get_clean();
}

function aca_render_stats_block($attributes) {
    $stats = $attributes['stats'];
    $animateOnScroll = $attributes['animateOnScroll'];
    
    ob_start();
    ?>
    <section class="aca-stats-section">
        <div class="container">
            <div class="aca-stats-grid">
                <?php foreach ($stats as $index => $stat): ?>
                    <div class="aca-stats-item <?php echo $animateOnScroll ? 'fade-in-up' : ''; ?>">
                        <div class="aca-stats-icon">
                            <?php echo aca_get_icon($stat['icon'], 32); ?>
                        </div>
                        <div class="aca-stats-number" data-target="<?php echo esc_attr($stat['number']); ?>">
                            <?php echo esc_html($stat['number'] . $stat['suffix']); ?>
                        </div>
                        <div class="aca-stats-label">
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
    $numberOfPosts = $attributes['numberOfPosts'];
    $category = $attributes['category'];
    $showExcerpt = $attributes['showExcerpt'];
    $showReadTime = $attributes['showReadTime'];
    $showCTA = $attributes['showCTA'];
    $ctaText = $attributes['ctaText'];
    
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => $numberOfPosts,
        'post_status' => 'publish'
    );
    
    if (!empty($category)) {
        $args['category_name'] = $category;
    }
    
    $posts = get_posts($args);
    
    ob_start();
    ?>
    <section class="aca-news-section">
        <div class="container">
            <div class="aca-news-header">
                <h2 class="aca-news-title"><?php echo esc_html($title); ?></h2>
                <p class="aca-news-subtitle"><?php echo esc_html($subtitle); ?></p>
            </div>
            
            <div class="aca-news-grid">
                <?php foreach ($posts as $index => $post): ?>
                    <article class="aca-news-card fade-in-up">
                        <div class="aca-news-image-container">
                            <?php if (has_post_thumbnail($post->ID)): ?>
                                <img src="<?php echo get_the_post_thumbnail_url($post->ID, 'aca-news'); ?>" 
                                     alt="<?php echo esc_attr($post->post_title); ?>" 
                                     class="aca-news-image">
                            <?php else: ?>
                                <div class="aca-news-image" style="background: linear-gradient(135deg, var(--aca-primary), var(--aca-secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
                                    📰
                                </div>
                            <?php endif; ?>
                            
                            <div class="aca-news-category" style="background-color: var(--aca-success);">
                                <?php 
                                $categories = get_the_category($post->ID);
                                echo !empty($categories) ? esc_html($categories[0]->name) : 'Actualités';
                                ?>
                            </div>
                            
                            <div class="aca-news-date">
                                <?php echo aca_get_icon('calendar', 16); ?>
                                <?php echo get_the_date('d M Y', $post->ID); ?>
                            </div>
                        </div>
                        
                        <div class="aca-news-content">
                            <h3 class="aca-news-card-title">
                                <a href="<?php echo get_permalink($post->ID); ?>">
                                    <?php echo esc_html($post->post_title); ?>
                                </a>
                            </h3>
                            
                            <?php if ($showExcerpt): ?>
                                <p class="aca-news-excerpt">
                                    <?php echo wp_trim_words($post->post_excerpt ?: $post->post_content, 20); ?>
                                </p>
                            <?php endif; ?>
                            
                            <div class="aca-news-meta">
                                <?php if ($showReadTime): ?>
                                    <span class="aca-news-read-time">
                                        <?php echo aca_get_icon('tag', 16); ?>
                                        5 min de lecture
                                    </span>
                                <?php endif; ?>
                                <a href="<?php echo get_permalink($post->ID); ?>" class="aca-news-read-more">
                                    Lire plus
                                    <?php echo aca_get_icon('arrow-right', 16); ?>
                                </a>
                            </div>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
            
            <?php if ($showCTA): ?>
                <div class="aca-news-cta">
                    <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="btn btn-primary">
                        <?php echo esc_html($ctaText); ?>
                    </a>
                </div>
            <?php endif; ?>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function aca_render_missions_block($attributes) {
    $title = $attributes['title'];
    $subtitle = $attributes['subtitle'];
    $missions = $attributes['missions'];
    $showCTA = $attributes['showCTA'];
    $ctaTitle = $attributes['ctaTitle'];
    $ctaText = $attributes['ctaText'];
    $ctaButtonText = $attributes['ctaButtonText'];
    
    ob_start();
    ?>
    <section class="aca-missions-section">
        <div class="container">
            <div class="aca-missions-header">
                <h2 class="aca-missions-title"><?php echo esc_html($title); ?></h2>
                <p class="aca-missions-subtitle"><?php echo esc_html($subtitle); ?></p>
            </div>
            
            <div class="aca-missions-grid">
                <?php foreach ($missions as $index => $mission): ?>
                    <div class="aca-missions-card fade-in-up">
                        <div class="aca-missions-icon">
                            <div class="aca-missions-icon-circle" style="background-color: <?php echo esc_attr($mission['color']); ?>">
                                <?php echo aca_get_icon($mission['icon'], 40); ?>
                            </div>
                        </div>
                        <h3 class="aca-missions-card-title"><?php echo esc_html($mission['title']); ?></h3>
                        <p class="aca-missions-description"><?php echo esc_html($mission['description']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
            
            <?php if ($showCTA): ?>
                <div class="aca-missions-cta">
                    <div class="aca-missions-cta-card">
                        <h3 class="aca-missions-cta-title"><?php echo esc_html($ctaTitle); ?></h3>
                        <p class="aca-missions-cta-text"><?php echo esc_html($ctaText); ?></p>
                        <a href="#contact" class="btn btn-success">
                            <?php echo esc_html($ctaButtonText); ?>
                        </a>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function aca_render_events_block($attributes) {
    $title = $attributes['title'];
    $subtitle = $attributes['subtitle'];
    $numberOfEvents = $attributes['numberOfEvents'];
    $showCalendar = $attributes['showCalendar'];
    $events = $attributes['events'];
    
    ob_start();
    ?>
    <section class="aca-events-section">
        <div class="container">
            <div class="aca-events-header">
                <h2 class="aca-events-title"><?php echo esc_html($title); ?></h2>
                <p class="aca-events-subtitle"><?php echo esc_html($subtitle); ?></p>
            </div>
            
            <div class="aca-events-container">
                <?php if ($showCalendar): ?>
                    <div class="aca-events-calendar">
                        <h3>Calendrier</h3>
                        <!-- Calendrier simple - peut être étendu avec un vrai calendrier -->
                        <div style="text-align: center; padding: 2rem; background: var(--aca-light); border-radius: 0.5rem;">
                            <p>Calendrier des événements</p>
                        </div>
                    </div>
                <?php endif; ?>
                
                <div class="aca-events-list">
                    <?php foreach (array_slice($events, 0, $numberOfEvents) as $event): ?>
                        <div class="aca-events-card fade-in-up">
                            <div class="aca-events-card-content">
                                <div class="aca-events-date-badge">
                                    <div class="aca-events-date-day"><?php echo date('d', strtotime($event['date'])); ?></div>
                                    <div class="aca-events-date-month"><?php echo date('M', strtotime($event['date'])); ?></div>
                                </div>
                                
                                <div class="aca-events-details">
                                    <h3 class="aca-events-card-title"><?php echo esc_html($event['title']); ?></h3>
                                    
                                    <div class="aca-events-meta">
                                        <div class="aca-events-meta-item">
                                            <?php echo aca_get_icon('map-pin', 16); ?>
                                            <span><?php echo esc_html($event['location']); ?></span>
                                        </div>
                                        <div class="aca-events-meta-item">
                                            <?php echo aca_get_icon('clock', 16); ?>
                                            <span><?php echo esc_html($event['time']); ?></span>
                                        </div>
                                        <div class="aca-events-meta-item">
                                            <?php echo aca_get_icon('users', 16); ?>
                                            <span><?php echo esc_html($event['participants']); ?> participants attendus</span>
                                        </div>
                                    </div>
                                    
                                    <div class="aca-events-actions">
                                        <a href="#" class="btn btn-primary">S'inscrire</a>
                                        <a href="#" class="btn btn-outline">Voir détails</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function aca_render_testimonials_block($attributes) {
    $title = $attributes['title'];
    $subtitle = $attributes['subtitle'];
    $testimonials = $attributes['testimonials'];
    $autoplay = $attributes['autoplay'];
    $showPartners = $attributes['showPartners'];
    $partners = $attributes['partners'];
    
    ob_start();
    ?>
    <section class="aca-testimonials-section">
        <div class="container">
            <div class="aca-testimonials-header">
                <h2 class="aca-testimonials-title"><?php echo esc_html($title); ?></h2>
                <p class="aca-testimonials-subtitle"><?php echo esc_html($subtitle); ?></p>
            </div>
            
            <div class="aca-testimonials-carousel">
                <div class="aca-testimonials-card">
                    <div class="aca-testimonials-quote-icon">
                        <?php echo aca_get_icon('quote', 48); ?>
                    </div>
                    
                    <div class="aca-testimonials-content">
                        <blockquote class="aca-testimonials-quote">
                            "<?php echo esc_html($testimonials[0]['quote']); ?>"
                        </blockquote>
                        
                        <div class="aca-testimonials-author">
                            <img src="<?php echo esc_url($testimonials[0]['image']); ?>" 
                                 alt="<?php echo esc_attr($testimonials[0]['name']); ?>" 
                                 class="aca-testimonials-avatar">
                            <div class="aca-testimonials-author-info">
                                <div class="aca-testimonials-author-name"><?php echo esc_html($testimonials[0]['name']); ?></div>
                                <div class="aca-testimonials-author-position"><?php echo esc_html($testimonials[0]['position']); ?></div>
                                <div class="aca-testimonials-author-country"><?php echo esc_html($testimonials[0]['country']); ?></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <?php if (count($testimonials) > 1): ?>
                    <button class="aca-testimonials-nav prev" onclick="acaTestimonialsPrev()">
                        <?php echo aca_get_icon('chevron-left', 24); ?>
                    </button>
                    <button class="aca-testimonials-nav next" onclick="acaTestimonialsNext()">
                        <?php echo aca_get_icon('chevron-right', 24); ?>
                    </button>
                <?php endif; ?>
            </div>
            
            <?php if (count($testimonials) > 1): ?>
                <div class="aca-testimonials-dots">
                    <?php foreach ($testimonials as $index => $testimonial): ?>
                        <button class="aca-testimonials-dot <?php echo $index === 0 ? 'active' : ''; ?>" onclick="acaTestimonialsGoTo(<?php echo $index; ?>)"></button>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
            
            <?php if ($showPartners): ?>
                <div class="aca-testimonials-partners">
                    <h3 class="aca-testimonials-partners-title">Nos Partenaires Stratégiques</h3>
                    <p class="aca-testimonials-partners-subtitle">Ensemble pour le développement de la filière cotonnière africaine</p>
                    
                    <div class="aca-testimonials-partners-grid">
                        <?php foreach ($partners as $partner): ?>
                            <div class="aca-testimonials-partner">
                                <img src="<?php echo esc_url($partner['logo']); ?>" 
                                     alt="<?php echo esc_attr($partner['name']); ?>" 
                                     class="aca-testimonials-partner-logo">
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </section>
    
    <script>
    let acaTestimonialsCurrentIndex = 0;
    const acaTestimonialsData = <?php echo json_encode($testimonials); ?>;
    const acaTestimonialsAutoplay = <?php echo $autoplay ? 'true' : 'false'; ?>;
    
    function acaTestimonialsGoTo(index) {
        const quote = document.querySelector('.aca-testimonials-quote');
        const avatar = document.querySelector('.aca-testimonials-avatar');
        const name = document.querySelector('.aca-testimonials-author-name');
        const position = document.querySelector('.aca-testimonials-author-position');
        const country = document.querySelector('.aca-testimonials-author-country');
        const dots = document.querySelectorAll('.aca-testimonials-dot');
        
        dots[acaTestimonialsCurrentIndex].classList.remove('active');
        acaTestimonialsCurrentIndex = index;
        dots[acaTestimonialsCurrentIndex].classList.add('active');
        
        const testimonial = acaTestimonialsData[acaTestimonialsCurrentIndex];
        quote.textContent = '"' + testimonial.quote + '"';
        avatar.src = testimonial.image;
        avatar.alt = testimonial.name;
        name.textContent = testimonial.name;
        position.textContent = testimonial.position;
        country.textContent = testimonial.country;
    }
    
    function acaTestimonialsNext() {
        const nextIndex = (acaTestimonialsCurrentIndex + 1) % acaTestimonialsData.length;
        acaTestimonialsGoTo(nextIndex);
    }
    
    function acaTestimonialsPrev() {
        const prevIndex = (acaTestimonialsCurrentIndex - 1 + acaTestimonialsData.length) % acaTestimonialsData.length;
        acaTestimonialsGoTo(prevIndex);
    }
    
    if (acaTestimonialsAutoplay && acaTestimonialsData.length > 1) {
        setInterval(acaTestimonialsNext, 5000);
    }
    </script>
    <?php
    return ob_get_clean();
}

function aca_render_newsletter_block($attributes) {
    $title = $attributes['title'];
    $subtitle = $attributes['subtitle'];
    $buttonText = $attributes['buttonText'];
    $placeholder = $attributes['placeholder'];
    $disclaimer = $attributes['disclaimer'];
    $showFeatures = $attributes['showFeatures'];
    $features = $attributes['features'];
    
    ob_start();
    ?>
    <section class="aca-newsletter-section">
        <div class="aca-newsletter-pattern">
            <div class="aca-newsletter-pattern-circle" style="top: 2.5rem; left: 2.5rem; width: 5rem; height: 5rem;"></div>
            <div class="aca-newsletter-pattern-circle" style="top: 8rem; right: 5rem; width: 4rem; height: 4rem;"></div>
            <div class="aca-newsletter-pattern-circle" style="bottom: 5rem; left: 25%; width: 3rem; height: 3rem;"></div>
            <div class="aca-newsletter-pattern-circle" style="bottom: 8rem; right: 33.333333%; width: 6rem; height: 6rem;"></div>
        </div>
        
        <div class="container">
            <div class="aca-newsletter-content">
                <div class="aca-newsletter-icon">
                    <?php echo aca_get_icon('mail', 64); ?>
                </div>
                
                <h2 class="aca-newsletter-title"><?php echo esc_html($title); ?></h2>
                <p class="aca-newsletter-subtitle"><?php echo esc_html($subtitle); ?></p>
                
                <form class="aca-newsletter-form" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                    <input type="hidden" name="action" value="aca_newsletter_signup">
                    <?php wp_nonce_field('aca_newsletter_nonce', 'aca_newsletter_nonce'); ?>
                    
                    <div class="aca-newsletter-form-group">
                        <input type="email" 
                               name="newsletter_email" 
                               placeholder="<?php echo esc_attr($placeholder); ?>" 
                               class="aca-newsletter-input" 
                               required>
                        <button type="submit" class="aca-newsletter-submit">
                            <?php echo aca_get_icon('send', 20); ?>
                            <?php echo esc_html($buttonText); ?>
                        </button>
                    </div>
                </form>
                
                <p class="aca-newsletter-disclaimer"><?php echo esc_html($disclaimer); ?></p>
                
                <?php if ($showFeatures): ?>
                    <div class="aca-newsletter-features">
                        <?php foreach ($features as $feature): ?>
                            <div class="aca-newsletter-feature">
                                <div class="aca-newsletter-feature-icon">
                                    <?php echo aca_get_icon($feature['icon'], 24); ?>
                                </div>
                                <h3 class="aca-newsletter-feature-title"><?php echo esc_html($feature['title']); ?></h3>
                                <p class="aca-newsletter-feature-description"><?php echo esc_html($feature['description']); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function aca_render_breadcrumb_block($attributes) {
    $items = $attributes['items'];
    $separator = $attributes['separator'];
    
    ob_start();
    ?>
    <nav class="aca-breadcrumb-section">
        <div class="container">
            <ol class="aca-breadcrumb-nav">
                <?php foreach ($items as $index => $item): ?>
                    <li class="aca-breadcrumb-item">
                        <?php if ($index > 0): ?>
                            <span class="aca-breadcrumb-separator">
                                <?php echo aca_get_icon($separator, 16); ?>
                            </span>
                        <?php endif; ?>
                        
                        <?php if (isset($item['href'])): ?>
                            <a href="<?php echo esc_url($item['href']); ?>" class="aca-breadcrumb-link">
                                <?php echo esc_html($item['label']); ?>
                            </a>
                        <?php else: ?>
                            <span class="aca-breadcrumb-current"><?php echo esc_html($item['label']); ?></span>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ol>
        </div>
    </nav>
    <?php
    return ob_get_clean();
}

// Fonction utilitaire pour les icônes
function aca_get_icon($name, $size = 24) {
    $icons = array(
        'users' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        'globe' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        'package' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
        'trending-up' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline><polyline points="16,7 22,7 22,13"></polyline></svg>',
        'target' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
        'calendar' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
        'arrow-right' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12,5 19,12 12,19"></polyline></svg>',
        'tag' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>',
        'map-pin' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
        'clock' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>',
        'quote' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>',
        'chevron-left' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"></polyline></svg>',
        'chevron-right' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"></polyline></svg>',
        'mail' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
        'send' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22,2 15,22 11,13 2,9 22,2"></polygon></svg>',
        'check-circle' => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22,4 12,14.01 9,11.01"></polyline></svg>'
    );
    
    return isset($icons[$name]) ? $icons[$name] : '';
}

// Traitement du formulaire newsletter
function aca_handle_newsletter_signup() {
    if (!isset($_POST['aca_newsletter_nonce']) || !wp_verify_nonce($_POST['aca_newsletter_nonce'], 'aca_newsletter_nonce')) {
        wp_die('Erreur de sécurité');
    }
    
    $email = sanitize_email($_POST['newsletter_email']);
    
    if (!is_email($email)) {
        wp_redirect(add_query_arg('newsletter', 'invalid_email', wp_get_referer()));
        exit;
    }
    
    // Ici vous pouvez ajouter l'email à votre service de newsletter
    // Par exemple, MailChimp, SendGrid, etc.
    
    // Pour l'instant, on simule un succès
    wp_redirect(add_query_arg('newsletter', 'success', wp_get_referer()));
    exit;
}
add_action('admin_post_aca_newsletter_signup', 'aca_handle_newsletter_signup');
add_action('admin_post_nopriv_aca_newsletter_signup', 'aca_handle_newsletter_signup');

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
    
    for ($i = 1; $i <= 4; $i++) {
        register_sidebar(array(
            'name'          => sprintf(__('Footer %d', 'aca-theme'), $i),
            'id'            => 'footer-' . $i,
            'description'   => sprintf(__('Colonne %d du footer', 'aca-theme'), $i),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h4 class="widget-title">',
            'after_title'   => '</h4>',
        ));
    }
}
add_action('widgets_init', 'aca_widgets_init');

// Customizer
function aca_customize_register($wp_customize) {
    // Section ACA
    $wp_customize->add_section('aca_options', array(
        'title' => __('Options ACA', 'aca-theme'),
        'priority' => 30,
    ));
    
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
    $contact_fields = array(
        'phone' => array('label' => 'Téléphone', 'default' => '+225 27 20 30 40 50', 'type' => 'text'),
        'email' => array('label' => 'Email', 'default' => 'contact@aca-coton.org', 'type' => 'email'),
        'address' => array('label' => 'Adresse', 'default' => '123 Avenue de l\'Indépendance, Abidjan, Côte d\'Ivoire', 'type' => 'textarea')
    );
    
    foreach ($contact_fields as $field => $config) {
        $wp_customize->add_setting('aca_' . $field, array(
            'default' => $config['default'],
            'sanitize_callback' => $config['type'] === 'email' ? 'sanitize_email' : 'sanitize_text_field',
        ));
        
        $wp_customize->add_control('aca_' . $field, array(
            'label' => __($config['label'], 'aca-theme'),
            'section' => 'aca_options',
            'type' => $config['type'],
        ));
    }
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

// Menu par défaut si aucun menu n'est défini
function aca_default_menu() {
    echo '<ul class="d-flex align-center">';
    echo '<li style="margin-right: 1rem;"><a href="' . home_url() . '" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease;">Accueil</a></li>';
    echo '<li style="margin-right: 1rem;"><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease;">À Propos</a></li>';
    echo '<li style="margin-right: 1rem;"><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease;">Membres</a></li>';
    echo '<li style="margin-right: 1rem;"><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease;">Actualités</a></li>';
    echo '<li style="margin-right: 1rem;"><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease;">Publications</a></li>';
    echo '<li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: all 0.3s ease;">Contact</a></li>';
    echo '</ul>';
}

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