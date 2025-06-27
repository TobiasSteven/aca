# Thème WordPress ACA - Association Cotonnière Africaine

Un thème WordPress moderne et professionnel pour l'Association Cotonnière Africaine, avec des blocs Gutenberg personnalisés et une interface d'administration intuitive.

## Fonctionnalités

### 🎨 Design Moderne
- Interface responsive et mobile-first
- Palette de couleurs personnalisable
- Animations et micro-interactions
- Design system cohérent

### 🧩 Blocs Gutenberg Personnalisés
- **Bloc Hero** : Section d'en-tête avec image de fond et CTA
- **Bloc Statistiques** : Affichage de chiffres clés avec animations
- **Bloc Actualités** : Grille d'articles avec filtres
- **Bloc Équipe** : Présentation des membres de l'équipe
- **Bloc Contact** : Formulaire de contact intégré

### 📱 Types de Contenu Personnalisés
- **Membres** : Gestion des membres de l'association
- **Publications** : Bibliothèque de documents et ressources
- **Événements** : Calendrier et gestion d'événements

### ⚙️ Fonctionnalités Avancées
- Customizer WordPress intégré
- Formulaires de contact avec validation
- Newsletter et abonnements
- SEO optimisé
- Performance optimisée
- Sécurité renforcée

## Installation

1. **Télécharger le thème**
   ```bash
   git clone [repository-url] wp-content/themes/aca-theme
   ```

2. **Activer le thème**
   - Aller dans `Apparence > Thèmes` dans l'admin WordPress
   - Activer le thème "ACA - Association Cotonnière Africaine"

3. **Configuration initiale**
   - Aller dans `Apparence > Personnaliser`
   - Configurer le logo, les couleurs et les informations de contact
   - Créer les menus dans `Apparence > Menus`

## Configuration

### Menus
Créer deux menus :
- **Menu Principal** : Navigation principale du site
- **Menu Footer** : Liens dans le footer

### Widgets
Le thème inclut plusieurs zones de widgets :
- Sidebar principale
- Footer (4 colonnes)

### Pages Recommandées
Créer les pages suivantes :
- Accueil (définie comme page d'accueil)
- À Propos
- Nos Membres
- Actualités (définie comme page des articles)
- Publications
- Contact

## Utilisation des Blocs

### Bloc Hero
```
/hero
```
- Titre principal
- Sous-titre
- Image de fond
- Boutons d'action

### Bloc Statistiques
```
/stats
```
- Jusqu'à 4 statistiques
- Animations au scroll
- Personnalisation des couleurs

### Bloc Actualités
```
/news
```
- Nombre d'articles à afficher
- Filtrage par catégorie
- Styles de grille ou liste

### Bloc Équipe
```
/team
```
- Photos des membres
- Informations de contact
- Biographies

### Bloc Contact
```
/contact
```
- Formulaire intégré
- Validation côté client
- Envoi par email

## Personnalisation

### Couleurs
Les couleurs peuvent être modifiées dans le Customizer :
- Couleur primaire : `#2D9B8A`
- Couleur secondaire : `#A8E6CF`
- Couleur de succès : `#28A745`

### CSS Personnalisé
Ajouter du CSS personnalisé dans `Apparence > Personnaliser > CSS additionnel`

### Hooks et Filtres
Le thème inclut de nombreux hooks pour la personnalisation :

```php
// Modifier les couleurs par défaut
add_filter('aca_default_colors', function($colors) {
    $colors['primary'] = '#your-color';
    return $colors;
});

// Ajouter du contenu après le header
add_action('aca_after_header', function() {
    echo '<div>Contenu personnalisé</div>';
});
```

## Types de Contenu

### Membres
Champs disponibles :
- Nom/Entreprise
- Type de membre
- Pays
- Contact (email, téléphone, site web)
- Description
- Logo/Photo

### Publications
Champs disponibles :
- Titre
- Auteur
- Type de publication
- Fichier PDF
- Langue
- Nombre de pages

### Événements
Champs disponibles :
- Date et heure
- Lieu
- Organisateur
- Capacité
- Description

## Sécurité

Le thème inclut plusieurs mesures de sécurité :
- Validation et échappement des données
- Protection CSRF avec nonces
- Headers de sécurité
- Sanitisation des entrées utilisateur

## Performance

Optimisations incluses :
- CSS et JS minifiés
- Lazy loading des images
- Cache des requêtes
- Optimisation des images
- CDN ready

## Support et Maintenance

### Logs d'Erreurs
Les erreurs sont loggées dans `/wp-content/debug.log` si `WP_DEBUG` est activé.

### Mise à Jour
Pour mettre à jour le thème :
1. Sauvegarder les personnalisations
2. Remplacer les fichiers du thème
3. Vérifier la compatibilité

### Support
Pour obtenir de l'aide :
- Documentation : [lien vers la documentation]
- Issues : [lien vers le système de tickets]
- Email : support@aca-theme.com

## Développement

### Structure des Fichiers
```
aca-theme/
├── style.css
├── functions.php
├── index.php
├── header.php
├── footer.php
├── sidebar.php
├── single.php
├── page.php
├── front-page.php
├── assets/
│   ├── css/
│   │   ├── blocks.css
│   │   └── editor-style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── blocks/
│   ├── hero/
│   ├── stats/
│   ├── news/
│   ├── team/
│   └── contact/
├── inc/
│   ├── customizer.php
│   ├── post-types.php
│   └── blocks.php
└── templates/
    ├── single-aca_member.php
    ├── single-aca_publication.php
    └── single-aca_event.php
```

### Environnement de Développement
1. WordPress 5.0+
2. PHP 7.4+
3. Node.js (pour la compilation des assets)

### Build Process
```bash
# Installer les dépendances
npm install

# Compiler les assets
npm run build

# Mode développement
npm run dev

# Watch mode
npm run watch
```

## Licence

Ce thème est sous licence GPL v2 ou ultérieure.

## Changelog

### Version 1.0.0
- Version initiale
- Blocs Gutenberg personnalisés
- Types de contenu personnalisés
- Interface d'administration
- Responsive design
- Optimisations SEO et performance

---

**Développé avec ❤️ pour l'Association Cotonnière Africaine**