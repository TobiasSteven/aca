<?php
/**
 * Template pour les articles individuels
 */

get_header(); ?>

<main id="main" class="site-main">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <!-- Hero de l'article -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="article-hero" style="position: relative; height: 400px; background-image: url('<?php the_post_thumbnail_url('large'); ?>'); background-size: cover; background-position: center;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(45, 155, 138, 0.8), rgba(45, 155, 138, 0.6));"></div>
                    <div class="container" style="position: relative; z-index: 2; height: 100%; display: flex; align-items: center;">
                        <div style="color: white; max-width: 800px;">
                            <h1 style="color: white; font-size: 3rem; margin-bottom: 1rem;"><?php the_title(); ?></h1>
                            <div style="display: flex; align-items: center; gap: 2rem; color: var(--aca-secondary);">
                                <span><?php echo get_the_date('d M Y'); ?></span>
                                <span>Par <?php the_author(); ?></span>
                                <?php if (has_category()) : ?>
                                    <span>Dans <?php the_category(', '); ?></span>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            <?php else : ?>
                <div class="section section-light">
                    <div class="container">
                        <h1><?php the_title(); ?></h1>
                        <div class="text-gray mb-4">
                            <?php echo get_the_date('d M Y'); ?> par <?php the_author(); ?>
                            <?php if (has_category()) : ?>
                                dans <?php the_category(', '); ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
            
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <div class="article-content">
                                <?php the_content(); ?>
                                
                                <?php
                                wp_link_pages(array(
                                    'before' => '<div class="page-links">Pages: ',
                                    'after'  => '</div>',
                                ));
                                ?>
                                
                                <?php if (has_tag()) : ?>
                                    <div class="article-tags mt-5">
                                        <h4>Tags:</h4>
                                        <div>
                                            <?php
                                            $tags = get_the_tags();
                                            if ($tags) {
                                                foreach ($tags as $tag) {
                                                    echo '<span style="background: var(--aca-secondary); color: var(--aca-primary-dark); padding: 4px 12px; border-radius: 20px; font-size: 0.875rem; margin-right: 8px; margin-bottom: 8px; display: inline-block;">' . esc_html($tag->name) . '</span>';
                                                }
                                            }
                                            ?>
                                        </div>
                                    </div>
                                <?php endif; ?>
                                
                                <!-- Navigation entre articles -->
                                <div class="article-navigation mt-5 pt-5" style="border-top: 1px solid #eee;">
                                    <div class="row">
                                        <div class="col-6">
                                            <?php
                                            $prev_post = get_previous_post();
                                            if ($prev_post) :
                                            ?>
                                                <a href="<?php echo get_permalink($prev_post->ID); ?>" class="btn btn-outline">
                                                    ← Article précédent
                                                </a>
                                            <?php endif; ?>
                                        </div>
                                        <div class="col-6 text-right">
                                            <?php
                                            $next_post = get_next_post();
                                            if ($next_post) :
                                            ?>
                                                <a href="<?php echo get_permalink($next_post->ID); ?>" class="btn btn-outline">
                                                    Article suivant →
                                                </a>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-4">
                            <?php get_sidebar(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
        <?php
        // Commentaires
        if (comments_open() || get_comments_number()) :
        ?>
            <div class="section section-light">
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <?php comments_template(); ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>