# Page Actualités & Événements - Association Cotonnière Africaine (ACA)

## Header & Navigation
- **Header standard** avec mise en évidence "Actualités"
- **Breadcrumb** : Accueil > Actualités & Événements
- **Tabs navigation** :
  - Onglet "Actualités" actif en `#2D9B8A`
  - Onglet "Événements" en `#6C757D`
  - Onglet "Archives" en `#6C757D`
  - Ligne de séparation sous onglet actif

## Section Hero Actualités
- **Background** : Image dynamique (dernière actualité importante)
- **Overlay** : `rgba(45, 155, 138, 0.7)`
- **Contenu featured** :
  - Badge "À la Une" en `#FD7E14`
  - Titre principal (blanc, 36px)
  - Résumé court (blanc, 18px)
  - Date et auteur en `#A8E6CF`
  - Bouton "Lire l'article" en `#28A745`

## Sidebar Filtres & Navigation
- **Position** : Colonne gauche, width 280px
- **Background** : `#F8F9FA`

### Filtres Actualités
- **Recherche** :
  - Input avec icône
  - Placeholder : "Rechercher dans les actualités..."
  - Border focus `#2D9B8A`

- **Catégories** :
  - Checkboxes stylisées :
    - Production : `#28A745`
    - Marché : `#FD7E14`
    - Politique : `#2D9B8A`
    - Innovation : `#A8E6CF`
    - Partenariats : `#6C757D`
  - Compteur articles par catégorie

- **Filtres temporels** :
  - Aujourd'hui, Cette semaine, Ce mois
  - Sélecteur période personnalisée
  - Archive par année (dropdown)

- **Filtres géographiques** :
  - Par pays membres
  - Par région africaine
  - International

### Widget Événements Sidebar
- **Titre** : "Événements à venir" en `#1F6B5C`
- **Liste compacte** :
  - Date en badge `#2D9B8A`
  - Titre événement (lien)
  - Lieu en `#6C757D`
  - Nombre participants si disponible

### Newsletter Signup
- **Background** : `#2D9B8A` avec coins arrondis
- **Contenu** : Email + bouton "S'abonner" `#28A745`

## Zone Principale Articles
- **Layout** : Grid responsive
- **Contrôles** :
  - Vue : Grille (3 col) / Liste / Carte
  - Tri : Plus récent, Plus lu, Alphabétique
  - Nombre par page : 9/18/36

## Cards Articles (Vue Grille)
- **Dimensions** : 360x420px
- **Structure card** :

### Image Header
- **Dimensions** : 360x180px
- **Overlay hover** : `rgba(45, 155, 138, 0.8)`
- **Icônes overlay** : Partage, Favoris, Lecture
- **Badge catégorie** : Coin supérieur gauche, couleur thématique

### Contenu Card
- **Padding** : 20px
- **Éléments** :
  - Date publication en `#6C757D` (format : "15 Nov 2024")
  - Titre article en `#1F6B5C` (2 lignes max, ellipsis)
  - Résumé en `#343A40` (3 lignes max)
  - Tags en badges `#A8E6CF`
  - Auteur + avatar (32x32px)
  - Temps de lecture estimé
  - Compteur vues (si activé)

### Footer Card
- **Actions** :
  - Bouton "Lire plus" en `#2D9B8A`
  - Icônes partage social
  - Bouton favoris (pour membres connectés)

## Vue Liste Articles
- **Design compact** :
  - Image 150x100px à gauche
  - Contenu texte à droite
  - Méta-informations en ligne
  - Séparateur entre articles

## Page Article Détaillée
### Header Article
- **Image full-width** : 1200x400px avec overlay
- **Titre H1** : Superposé en blanc
- **Meta informations** :
  - Date, auteur, catégorie, temps lecture
  - Boutons partage social
  - Bouton imprimer
  - Compteur vues

### Contenu Article
- **Typography** optimisée :
  - Titres H2/H3 en `#1F6B5C`
  - Paragraphes en `#343A40`
  - Liens en `#2D9B8A`
  - Citations avec bordure `#A8E6CF`
  - Listes stylisées

### Éléments Multimédia
- **Images** : Légendes stylisées, zoom modal
- **Vidéos** : Player intégré responsive
- **Documents** : Liens téléchargement avec icônes

### Sidebar Article
- **Table des matières** : Navigation interne
- **Articles liés** : Suggestions similaires
- **Partage** : Boutons réseaux sociaux persistants

## Section Événements
### Calendrier Événements
- **Vue calendrier** : Mensuelle par défaut
- **Navigation** : Mois précédent/suivant
- **Événements** :
  - Pastilles colorées par type
  - Hover : tooltip avec détails
  - Clic : modal ou page événement

### Liste Événements
- **Cards événements** :
  - Date en grand format à gauche
  - Détails événement à droite
  - Statut : À venir, En cours, Terminé
  - Boutons : S'inscrire, Participer, Voir détails

### Page Événement Détaillée
- **Header** : Image bannière + titre
- **Informations** :
  - Date, heure, lieu avec carte
  - Organisateur, partenaires
  - Nombre places, inscrits
  - Prix si payant
- **Description complète**
- **Programme détaillé**
- **Formulaire inscription**

## Système Commentaires
- **Disponible** : Articles et événements
- **Modération** : Pré-modération activée
- **Design** :
  - Avatar utilisateur
  - Nom + date commentaire
  - Système de votes/likes
  - Réponses imbriquées (1 niveau)

## Archives & Recherche Avancée
### Page Archives
- **Organisation** : Par année/mois
- **Vue timeline** : Chronologique
- **Filtres conservés** : Même interface que page principale

### Recherche Avancée
- **Modal** ou page dédiée
- **Critères** :
  - Mots-clés titre/contenu
  - Auteur, catégorie, tags
  - Période précise
  - Type contenu

## Newsletters & Abonnements
### Centre Newsletters
- **Archives newsletters** : Avec aperçu
- **Gestion abonnements** : Fréquence, sujets
- **Statistiques** : Taux ouverture (admin)

## Version Mobile
- **Navigation** : Tabs horizontaux scrollables
- **Filtres** : Modal overlay
- **Cards** : Single column, hauteur adaptée
- **Lecteur article** : Typography mobile optimisée

## Fonctionnalités Avancées

### Système de Notifications
- **Push notifications** : Nouveaux articles importants
- **Email alerts** : Digest hebdomadaire personnalisé
- **Préférences** : Par catégorie, fréquence

### Analytics & Métriques
- **Tableau de bord admin** :
  - Articles les plus lus
  - Catégories populaires
  - Engagement par article
  - Sources de trafic
- **Heatmaps** : Comportement lecture
- **A/B testing** : Titres, images

### SEO & Performance
- **URLs** : Structure /actualites/[année]/[slug]
- **Meta données** : Auto-génération + personnalisation
- **Schema markup** : Article, Event, NewsArticle
- **AMP** : Version accélérée articles
- **CDN** : Images et assets optimisés
- **Cache** : Intelligent par catégorie/utilisateur

### Intégrations
- **RSS Feeds** : Par catégorie
- **API REST** : Pour applications mobiles
- **Réseaux sociaux** : Auto-posting configuré
- **CRM** : Synchronisation leads événements

## États d'Interface
- **Chargement** : Skeleton screens personnalisés
- **Erreur 404** : Page avec suggestions
- **Maintenance** : Mode dégradé
- **Offline** : Service worker avec cache
- **Aucun résultat** : Suggestions de recherche

## Accessibilité & UX
- **Navigation clavier** : Focus visible `#2D9B8A`
- **Screen readers** : ARIA labels complets
- **Contraste** : WCAG 2.1 AA compliance
- **Tailles police** : Variables CSS responsive
- **Animations** : Respecte prefers-reduced-motion
- **Focus management** : Trappes dans modals