<?php
/**
 * Template pour les pages
 */

get_header(); ?>

<main id="main" class="site-main">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <!-- Hero de la page -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="page-hero" style="position: relative; height: 300px; background-image: url('<?php the_post_thumbnail_url('large'); ?>'); background-size: cover; background-position: center;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(45, 155, 138, 0.8), rgba(45, 155, 138, 0.6));"></div>
                    <div class="container" style="position: relative; z-index: 2; height: 100%; display: flex; align-items: center;">
                        <div style="color: white;">
                            <h1 style="color: white; font-size: 3rem; margin-bottom: 0;"><?php the_title(); ?></h1>
                        </div>
                    </div>
                </div>
            <?php else : ?>
                <div class="section section-light">
                    <div class="container">
                        <h1><?php the_title(); ?></h1>
                    </div>
                </div>
            <?php endif; ?>
            
            <div class="section">
                <div class="container">
                    <?php if (is_page_template('page-full-width.php')) : ?>
                        <div class="page-content">
                            <?php the_content(); ?>
                        </div>
                    <?php else : ?>
                        <div class="row">
                            <div class="col-8">
                                <div class="page-content">
                                    <?php the_content(); ?>
                                    
                                    <?php
                                    wp_link_pages(array(
                                        'before' => '<div class="page-links">Pages: ',
                                        'after'  => '</div>',
                                    ));
                                    ?>
                                </div>
                            </div>
                            
                            <div class="col-4">
                                <?php get_sidebar(); ?>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>