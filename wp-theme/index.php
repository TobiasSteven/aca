<?php
/**
 * Template principal du thème ACA
 */

get_header(); ?>

<main id="main" class="site-main">
    <?php if (have_posts()) : ?>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <?php while (have_posts()) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('card mb-4'); ?>>
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="card-header p-0">
                                    <img src="<?php the_post_thumbnail_url('large'); ?>" 
                                         alt="<?php the_title_attribute(); ?>" 
                                         class="w-100" style="height: 250px; object-fit: cover;">
                                </div>
                            <?php endif; ?>
                            
                            <div class="card-body">
                                <h2 class="card-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                
                                <div class="text-gray mb-3">
                                    <small>
                                        <?php echo get_the_date(); ?> par <?php the_author(); ?>
                                        <?php if (has_category()) : ?>
                                            dans <?php the_category(', '); ?>
                                        <?php endif; ?>
                                    </small>
                                </div>
                                
                                <div class="card-text">
                                    <?php the_excerpt(); ?>
                                </div>
                                
                                <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                    Lire la suite
                                </a>
                            </div>
                        </article>
                    <?php endwhile; ?>
                    
                    <?php
                    // Pagination
                    the_posts_pagination(array(
                        'prev_text' => '&laquo; Précédent',
                        'next_text' => 'Suivant &raquo;',
                        'before_page_number' => '<span class="meta-nav screen-reader-text">Page </span>',
                    ));
                    ?>
                </div>
                
                <div class="col-4">
                    <?php get_sidebar(); ?>
                </div>
            </div>
        </div>
    <?php else : ?>
        <div class="container">
            <div class="text-center py-5">
                <h1>Aucun contenu trouvé</h1>
                <p>Désolé, aucun contenu ne correspond à votre recherche.</p>
                <a href="<?php echo home_url(); ?>" class="btn btn-primary">
                    Retour à l'accueil
                </a>
            </div>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>