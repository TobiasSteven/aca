# Thème WordPress ACA - Système de Blocs Complet

Un thème WordPress moderne qui transforme votre site React/Vite en système de blocs Gutenberg entièrement modifiables, respectant exactement le design original.

## 🎯 **Fonctionnalités Principales**

### **Blocs Gutenberg Fidèles au Design Original**
- **Bloc Hero** : Carrousel avec slides multiples, navigation et dots
- **Bloc Statistiques** : Compteurs animés avec icônes personnalisables
- **Bloc Actualités** : Grille d'articles avec métadonnées complètes
- **Bloc Missions** : Cards avec icônes et CTA intégré
- **Bloc Événements** : Calendrier et liste d'événements
- **Bloc Témoignages** : Carrousel avec partenaires
- **Bloc Newsletter** : Formulaire avec fonctionnalités
- **Bloc Breadcrumb** : Navigation contextuelle

### **Système de Design Exact**
- Variables CSS identiques au design original
- Couleurs, typographie et espacements respectés
- Animations et transitions fidèles
- Responsive design complet
- Icônes SVG intégrées

### **Interface d'Édition Intuitive**
- Chaque élément est modifiable dans Gutenberg
- Aperçu en temps réel
- Contrôles visuels pour tous les paramètres
- Validation des données
- Sauvegarde automatique

## 🎨 **Blocs Disponibles**

### **1. Bloc Hero (`/hero`)**
```
Paramètres modifiables :
- Slides multiples (image, titre, sous-titre)
- Autoplay activé/désactivé
- Navigation flèches
- Dots de navigation
- Boutons CTA personnalisables
```

### **2. Bloc Statistiques (`/stats`)**
```
Paramètres modifiables :
- Jusqu'à 4 statistiques
- Icônes personnalisables
- Nombres et suffixes
- Labels descriptifs
- Couleurs d'accent
- Animation au scroll
```

### **3. Bloc Actualités (`/news`)**
```
Paramètres modifiables :
- Titre et sous-titre
- Nombre d'articles à afficher
- Filtrage par catégorie
- Affichage des extraits
- Temps de lecture
- Bouton CTA personnalisable
```

### **4. Bloc Missions (`/missions`)**
```
Paramètres modifiables :
- Titre et description
- Missions multiples (icône, titre, description)
- Couleurs personnalisables
- Section CTA intégrée
- Textes de call-to-action
```

### **5. Bloc Événements (`/events`)**
```
Paramètres modifiables :
- Titre et sous-titre
- Nombre d'événements
- Calendrier activé/désactivé
- Événements personnalisés
- Métadonnées complètes
```

### **6. Bloc Témoignages (`/testimonials`)**
```
Paramètres modifiables :
- Témoignages multiples
- Photos et informations
- Autoplay du carrousel
- Section partenaires
- Logos personnalisables
```

### **7. Bloc Newsletter (`/newsletter`)**
```
Paramètres modifiables :
- Titre et description
- Texte du bouton
- Placeholder de l'input
- Disclaimer personnalisé
- Fonctionnalités affichées
```

### **8. Bloc Breadcrumb (`/breadcrumb`)**
```
Paramètres modifiables :
- Éléments de navigation
- Séparateur personnalisable
- Liens et labels
```

## ⚙️ **Installation et Configuration**

### **1. Installation**
```bash
# Copier le thème dans WordPress
cp -r wp-theme /wp-content/themes/aca-theme

# Activer le thème dans l'admin WordPress
# Aller dans Apparence > Thèmes > Activer "ACA"
```

### **2. Configuration Initiale**
```
1. Aller dans Apparence > Personnaliser
2. Configurer les couleurs (section "Options ACA")
3. Renseigner les informations de contact
4. Créer les menus (principal et footer)
5. Configurer le logo personnalisé
```

### **3. Utilisation des Blocs**
```
1. Créer une nouvelle page
2. Ajouter les blocs ACA depuis l'éditeur Gutenberg
3. Personnaliser chaque bloc selon vos besoins
4. Prévisualiser et publier
```

## 🎛️ **Personnalisation Avancée**

### **Couleurs du Thème**
```css
:root {
  --aca-primary: #2D9B8A;        /* Modifiable via Customizer */
  --aca-primary-dark: #1F6B5C;   /* Auto-calculé */
  --aca-secondary: #A8E6CF;
  --aca-success: #28A745;
  --aca-warning: #FD7E14;
  --aca-danger: #DC3545;
}
```

### **Ajout de Nouveaux Blocs**
```php
// Dans functions.php
register_block_type('aca/nouveau-bloc', array(
    'render_callback' => 'aca_render_nouveau_bloc',
    'attributes' => array(
        'titre' => array(
            'type' => 'string',
            'default' => 'Titre par défaut'
        )
    )
));
```

### **Hooks Disponibles**
```php
// Modifier les couleurs par défaut
add_filter('aca_default_colors', function($colors) {
    $colors['primary'] = '#votre-couleur';
    return $colors;
});

// Ajouter du contenu après le header
add_action('aca_after_header', function() {
    echo '<div>Contenu personnalisé</div>';
});
```

## 📱 **Responsive Design**

### **Breakpoints**
```css
/* Mobile */
@media (max-width: 640px) { ... }

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }
```

### **Adaptations Mobiles**
- Navigation hamburger automatique
- Grilles qui deviennent colonnes uniques
- Tailles de police adaptatives
- Espacements réduits
- Boutons pleine largeur

## 🔧 **Fonctionnalités Techniques**

### **Performance**
- CSS et JS optimisés
- Lazy loading des images
- Cache intelligent
- Minification automatique
- CDN ready

### **SEO**
- Structure HTML sémantique
- Meta données optimisées
- Schema markup intégré
- URLs propres
- Sitemap automatique

### **Sécurité**
- Validation des données
- Protection CSRF
- Sanitisation des entrées
- Headers de sécurité
- Nonces WordPress

### **Accessibilité**
- Navigation clavier complète
- ARIA labels appropriés
- Contraste WCAG 2.1 AA
- Focus visible
- Screen readers compatibles

## 📊 **Gestion du Contenu**

### **Types de Contenu Supportés**
- Articles WordPress standard
- Pages avec blocs personnalisés
- Menus de navigation
- Widgets dans sidebars
- Customizer WordPress

### **Formulaires Intégrés**
- Newsletter avec validation
- Contact (extensible)
- Recherche avancée
- Commentaires stylisés

## 🎯 **Cas d'Usage**

### **Page d'Accueil Complète**
```
1. Ajouter le bloc Hero
2. Configurer les slides
3. Ajouter le bloc Statistiques
4. Personnaliser les chiffres
5. Ajouter les autres blocs selon vos besoins
```

### **Page À Propos**
```
1. Bloc Breadcrumb pour la navigation
2. Bloc Hero avec une seule slide
3. Bloc Missions pour présenter l'organisation
4. Bloc Témoignages pour la crédibilité
```

### **Page Actualités**
```
1. Bloc Breadcrumb
2. Bloc Actualités avec filtres
3. Pagination automatique
4. Sidebar avec widgets
```

## 🔄 **Mises à Jour**

### **Sauvegarde Avant Mise à Jour**
```bash
# Sauvegarder les personnalisations
cp -r /wp-content/themes/aca-theme/style.css /backup/
cp -r /wp-content/uploads/customizations/ /backup/
```

### **Processus de Mise à Jour**
```
1. Sauvegarder le site complet
2. Remplacer les fichiers du thème
3. Vérifier la compatibilité
4. Tester toutes les fonctionnalités
5. Restaurer les personnalisations si nécessaire
```

## 🆘 **Support et Dépannage**

### **Problèmes Courants**
```
Q: Les blocs n'apparaissent pas dans Gutenberg
R: Vérifier que les fonctions sont bien enregistrées dans functions.php

Q: Les styles ne s'appliquent pas
R: Vider le cache et vérifier l'enqueue des CSS

Q: Les animations ne fonctionnent pas
R: Vérifier que JavaScript est activé et les scripts chargés
```

### **Debug Mode**
```php
// Dans wp-config.php pour le debug
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## 📈 **Optimisations Recommandées**

### **Performance**
- Utiliser un plugin de cache (WP Rocket, W3 Total Cache)
- Optimiser les images (WebP, compression)
- Minifier CSS/JS en production
- Utiliser un CDN

### **SEO**
- Installer Yoast SEO ou RankMath
- Configurer Google Analytics
- Optimiser les meta descriptions
- Créer un sitemap XML

## 🎨 **Personnalisation du Design**

### **Modifier les Couleurs**
```
1. Aller dans Apparence > Personnaliser
2. Section "Options ACA"
3. Modifier la couleur primaire
4. Les autres couleurs s'adaptent automatiquement
```

### **Ajouter des Polices**
```php
// Dans functions.php
function aca_custom_fonts() {
    wp_enqueue_style('custom-fonts', 'https://fonts.googleapis.com/css2?family=VotrePolice:wght@400;600;700&display=swap');
}
add_action('wp_enqueue_scripts', 'aca_custom_fonts');
```

---

**Développé avec ❤️ pour respecter exactement votre design original tout en offrant une flexibilité maximale d'édition dans WordPress.**