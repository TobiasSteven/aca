<?php
/**
 * Template pour la page d'accueil
 */

get_header(); ?>

<main id="main" class="site-main">
    <?php
    // Affichage du contenu de la page si elle existe
    if (have_posts()) :
        while (have_posts()) : the_post();
            the_content();
        endwhile;
    else :
        // Contenu par défaut si aucune page d'accueil n'est définie
    ?>
        <!-- Hero par défaut -->
        <section class="aca-hero-block" style="background-image: url('https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop');">
            <div class="aca-hero-overlay"></div>
            <div class="container">
                <div class="aca-hero-content">
                    <h1 class="fade-in-up">Promouvoir l'Excellence Cotonnière en Afrique</h1>
                    <p class="fade-in-up" style="animation-delay: 0.2s;">Fédérer les acteurs de la filière coton pour un développement durable et inclusif du secteur en Afrique</p>
                    <div class="fade-in-up" style="animation-delay: 0.4s;">
                        <a href="#about" class="btn btn-outline mr-3">Découvrir l'ACA</a>
                        <a href="#contact" class="btn btn-success">Nous Rejoindre</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Statistiques -->
        <section class="section section-light">
            <div class="container">
                <div class="aca-stats-block">
                    <div class="aca-stat-item">
                        <div class="aca-stat-number">150+</div>
                        <div class="aca-stat-label">Membres Actifs</div>
                    </div>
                    <div class="aca-stat-item">
                        <div class="aca-stat-number">25</div>
                        <div class="aca-stat-label">Pays Représentés</div>
                    </div>
                    <div class="aca-stat-item">
                        <div class="aca-stat-number">2500K</div>
                        <div class="aca-stat-label">Tonnes de Coton</div>
                    </div>
                    <div class="aca-stat-item">
                        <div class="aca-stat-number">45</div>
                        <div class="aca-stat-label">Projets en Cours</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Actualités -->
        <section class="section">
            <div class="container">
                <div class="text-center mb-5">
                    <h2>Dernières Actualités</h2>
                    <p>Restez informé des dernières nouvelles et développements de la filière cotonnière africaine</p>
                </div>
                
                <div class="aca-news-grid">
                    <?php
                    $recent_posts = wp_get_recent_posts(array(
                        'numberposts' => 3,
                        'post_status' => 'publish'
                    ));
                    
                    foreach ($recent_posts as $post) :
                    ?>
                        <article class="aca-news-item">
                            <?php if (has_post_thumbnail($post['ID'])) : ?>
                                <img src="<?php echo get_the_post_thumbnail_url($post['ID'], 'aca-news'); ?>" 
                                     alt="<?php echo esc_attr($post['post_title']); ?>" 
                                     class="aca-news-image">
                            <?php else : ?>
                                <div class="aca-news-image" style="background: linear-gradient(135deg, var(--aca-primary), var(--aca-secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
                                    📰
                                </div>
                            <?php endif; ?>
                            
                            <div class="aca-news-content">
                                <div class="aca-news-meta">
                                    <span class="aca-news-category">Actualités</span>
                                    <span><?php echo get_the_date('d M Y', $post['ID']); ?></span>
                                </div>
                                
                                <h3>
                                    <a href="<?php echo get_permalink($post['ID']); ?>">
                                        <?php echo esc_html($post['post_title']); ?>
                                    </a>
                                </h3>
                                
                                <p><?php echo wp_trim_words($post['post_excerpt'] ?: $post['post_content'], 20); ?></p>
                                
                                <a href="<?php echo get_permalink($post['ID']); ?>" class="btn btn-outline">
                                    Lire plus
                                </a>
                            </div>
                        </article>
                    <?php endforeach; ?>
                </div>
                
                <div class="text-center mt-5">
                    <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="btn btn-primary">
                        Voir toutes les actualités
                    </a>
                </div>
            </div>
        </section>

        <!-- Missions -->
        <section class="section section-light">
            <div class="container">
                <div class="text-center mb-5">
                    <h2>Nos Missions</h2>
                    <p>L'ACA s'engage à transformer et développer la filière cotonnière africaine</p>
                </div>
                
                <div class="row">
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="mb-4">
                                    <div style="width: 80px; height: 80px; background-color: var(--aca-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 2rem;">
                                        🎯
                                    </div>
                                </div>
                                <h3>Promotion de la Filière</h3>
                                <p>Développer et promouvoir l'excellence de la filière cotonnière africaine à travers des initiatives stratégiques.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="mb-4">
                                    <div style="width: 80px; height: 80px; background-color: var(--aca-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 2rem;">
                                        👥
                                    </div>
                                </div>
                                <h3>Coopération</h3>
                                <p>Faciliter la collaboration entre producteurs, transformateurs et institutions pour renforcer l'écosystème.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="mb-4">
                                    <div style="width: 80px; height: 80px; background-color: var(--aca-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 2rem;">
                                        📈
                                    </div>
                                </div>
                                <h3>Valorisation</h3>
                                <p>Accompagner l'amélioration de la qualité des productions cotonnières sur les marchés internationaux.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter -->
        <section class="section section-primary">
            <div class="container text-center">
                <h2 style="color: white;">Restez Informé</h2>
                <p style="color: var(--aca-secondary); font-size: 1.125rem; margin-bottom: 2rem;">
                    Recevez les dernières actualités et opportunités de la filière cotonnière africaine
                </p>
                
                <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" style="max-width: 500px; margin: 0 auto;">
                    <input type="hidden" name="action" value="aca_newsletter_signup">
                    <?php wp_nonce_field('aca_newsletter_nonce', 'aca_newsletter_nonce'); ?>
                    <div class="d-flex gap-3">
                        <input type="email" name="newsletter_email" placeholder="Votre adresse email" class="aca-form-input" style="flex: 1;" required>
                        <button type="submit" class="btn btn-success">S'abonner</button>
                    </div>
                </form>
            </div>
        </section>
    <?php endif; ?>
</main>

<?php get_footer(); ?>