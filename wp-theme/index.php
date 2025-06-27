<?php
/**
 * Template principal du thème ACA
 */

get_header(); ?>

<main id="main" class="site-main">
    <?php if (have_posts()) : ?>
        <div class="container py-16">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2">
                    <?php while (have_posts()) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('card mb-8'); ?>>
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="relative overflow-hidden" style="border-radius: 0.75rem 0.75rem 0 0;">
                                    <img src="<?php the_post_thumbnail_url('large'); ?>" 
                                         alt="<?php the_title_attribute(); ?>" 
                                         class="w-full h-64 object-cover transition-transform duration-500 hover:scale-105">
                                    
                                    <div class="absolute top-4 left-4">
                                        <?php 
                                        $categories = get_the_category();
                                        if (!empty($categories)) :
                                        ?>
                                            <span class="bg-[var(--aca-primary)] text-white px-3 py-1 rounded-full text-sm font-medium">
                                                <?php echo esc_html($categories[0]->name); ?>
                                            </span>
                                        <?php endif; ?>
                                    </div>
                                    
                                    <div class="absolute top-4 right-4 bg-[var(--aca-success)] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        <?php echo get_the_date('d M Y'); ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <div class="p-6">
                                <h2 class="text-2xl font-bold text-[var(--aca-primary-dark)] mb-3 hover:text-[var(--aca-primary)] transition-colors">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                
                                <div class="flex items-center gap-4 text-[var(--aca-gray)] text-sm mb-4">
                                    <span class="flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <?php the_author(); ?>
                                    </span>
                                    <span>•</span>
                                    <span><?php echo get_the_date(); ?></span>
                                    <?php if (has_category()) : ?>
                                        <span>•</span>
                                        <span><?php the_category(', '); ?></span>
                                    <?php endif; ?>
                                </div>
                                
                                <div class="text-[var(--aca-gray)] mb-6 leading-relaxed">
                                    <?php the_excerpt(); ?>
                                </div>
                                
                                <div class="flex items-center justify-between">
                                    <span class="flex items-center gap-1 text-sm text-[var(--aca-gray)]">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                        </svg>
                                        5 min de lecture
                                    </span>
                                    <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                        Lire la suite
                                    </a>
                                </div>
                            </div>
                        </article>
                    <?php endwhile; ?>
                    
                    <?php
                    // Pagination
                    the_posts_pagination(array(
                        'prev_text' => '&laquo; Précédent',
                        'next_text' => 'Suivant &raquo;',
                        'before_page_number' => '<span class="meta-nav screen-reader-text">Page </span>',
                        'class' => 'pagination-wrapper',
                    ));
                    ?>
                </div>
                
                <div class="lg:col-span-1">
                    <?php get_sidebar(); ?>
                </div>
            </div>
        </div>
    <?php else : ?>
        <div class="container py-16">
            <div class="text-center">
                <h1 class="text-4xl font-bold text-[var(--aca-primary-dark)] mb-4">Aucun contenu trouvé</h1>
                <p class="text-lg text-[var(--aca-gray)] mb-8">Désolé, aucun contenu ne correspond à votre recherche.</p>
                <a href="<?php echo home_url(); ?>" class="btn btn-primary">
                    Retour à l'accueil
                </a>
            </div>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>