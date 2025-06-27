<?php
/**
 * Template pour la page d'accueil avec blocs par défaut
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
        // Contenu par défaut avec tous les blocs ACA
    ?>
        <!-- Bloc Hero par défaut -->
        <?php echo aca_render_hero_block(array(
            'slides' => array(
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
            ),
            'autoplay' => true,
            'showNavigation' => true,
            'showDots' => true
        )); ?>

        <!-- Bloc Statistiques par défaut -->
        <?php echo aca_render_stats_block(array(
            'stats' => array(
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
            ),
            'animateOnScroll' => true
        )); ?>

        <!-- Bloc Actualités par défaut -->
        <?php echo aca_render_news_block(array(
            'title' => 'Dernières Actualités',
            'subtitle' => 'Restez informé des dernières nouvelles et développements de la filière cotonnière africaine',
            'numberOfPosts' => 3,
            'category' => '',
            'showExcerpt' => true,
            'showReadTime' => true,
            'showCTA' => true,
            'ctaText' => 'Voir toutes les actualités'
        )); ?>

        <!-- Bloc Missions par défaut -->
        <?php echo aca_render_missions_block(array(
            'title' => 'Nos Missions',
            'subtitle' => 'L\'ACA s\'engage à transformer et développer la filière cotonnière africaine à travers trois axes stratégiques',
            'missions' => array(
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
            ),
            'showCTA' => true,
            'ctaTitle' => 'Rejoignez Notre Mission',
            'ctaText' => 'Participez au développement de l\'excellence cotonnière africaine',
            'ctaButtonText' => 'Devenir Partenaire'
        )); ?>

        <!-- Bloc Événements par défaut -->
        <?php echo aca_render_events_block(array(
            'title' => 'Événements à Venir',
            'subtitle' => 'Participez aux événements qui façonnent l\'avenir de la filière cotonnière africaine',
            'numberOfEvents' => 3,
            'showCalendar' => true,
            'events' => array(
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
        )); ?>

        <!-- Bloc Témoignages par défaut -->
        <?php echo aca_render_testimonials_block(array(
            'title' => 'Témoignages de nos Membres',
            'subtitle' => 'Découvrez comment l\'ACA accompagne ses membres vers l\'excellence',
            'testimonials' => array(
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
            ),
            'autoplay' => true,
            'showPartners' => true,
            'partners' => array(
                array('name' => 'AfDB', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=AfDB'),
                array('name' => 'UEMOA', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=UEMOA'),
                array('name' => 'CEDEAO', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=CEDEAO'),
                array('name' => 'FAO', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=FAO'),
                array('name' => 'ONUDI', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=ONUDI'),
                array('name' => 'ICAC', 'logo' => 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=ICAC')
            )
        )); ?>

        <!-- Bloc Newsletter par défaut -->
        <?php echo aca_render_newsletter_block(array(
            'title' => 'Restez Informé',
            'subtitle' => 'Recevez les dernières actualités, analyses de marché et opportunités de la filière cotonnière africaine directement dans votre boîte mail.',
            'buttonText' => 'S\'abonner',
            'placeholder' => 'Votre adresse email',
            'disclaimer' => 'Nous respectons votre vie privée. Désabonnement possible à tout moment.',
            'showFeatures' => true,
            'features' => array(
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
        )); ?>

    <?php endif; ?>
</main>

<?php get_footer(); ?>