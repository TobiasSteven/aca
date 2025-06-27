<aside id="secondary" class="widget-area">
    <?php if (is_active_sidebar('sidebar-1')) : ?>
        <?php dynamic_sidebar('sidebar-1'); ?>
    <?php else : ?>
        <!-- Widgets par défaut -->
        <div class="widget card">
            <div class="card-body">
                <h3 class="widget-title">À propos de l'ACA</h3>
                <p>L'Association Cotonnière Africaine fédère les acteurs de la filière coton pour promouvoir l'excellence et le développement durable du secteur en Afrique.</p>
                <a href="#" class="btn btn-primary">En savoir plus</a>
            </div>
        </div>
        
        <div class="widget card">
            <div class="card-body">
                <h3 class="widget-title">Dernières actualités</h3>
                <?php
                $recent_posts = wp_get_recent_posts(array(
                    'numberposts' => 3,
                    'post_status' => 'publish'
                ));
                
                if ($recent_posts) :
                ?>
                    <ul style="list-style: none; padding: 0;">
                        <?php foreach ($recent_posts as $post) : ?>
                            <li class="mb-3">
                                <a href="<?php echo get_permalink($post['ID']); ?>" style="text-decoration: none;">
                                    <strong><?php echo esc_html($post['post_title']); ?></strong>
                                </a>
                                <br>
                                <small class="text-gray"><?php echo get_the_date('d M Y', $post['ID']); ?></small>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
            </div>
        </div>
        
        <div class="widget card">
            <div class="card-body">
                <h3 class="widget-title">Nos membres</h3>
                <p>Découvrez notre réseau de professionnels à travers l'Afrique.</p>
                <div class="text-center">
                    <div class="aca-stat-number" style="font-size: 2rem; color: var(--aca-primary); font-weight: bold;">150+</div>
                    <div class="aca-stat-label">Membres actifs</div>
                </div>
                <a href="#" class="btn btn-outline mt-3 w-100">Voir tous les membres</a>
            </div>
        </div>
        
        <div class="widget card">
            <div class="card-body">
                <h3 class="widget-title">Newsletter</h3>
                <p>Restez informé de nos dernières actualités et opportunités.</p>
                <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                    <input type="hidden" name="action" value="aca_newsletter_signup">
                    <?php wp_nonce_field('aca_newsletter_nonce', 'aca_newsletter_nonce'); ?>
                    <div class="aca-form-group">
                        <input type="email" name="newsletter_email" placeholder="Votre email" class="aca-form-input" required>
                    </div>
                    <button type="submit" class="btn btn-success w-100">S'abonner</button>
                </form>
            </div>
        </div>
        
        <div class="widget card">
            <div class="card-body">
                <h3 class="widget-title">Contact rapide</h3>
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
                <a href="#contact" class="btn btn-primary w-100">Nous contacter</a>
            </div>
        </div>
    <?php endif; ?>
</aside>