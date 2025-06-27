# Page Membres - Association Cotonnière Africaine (ACA)

## Header & Navigation
- **Header standard** ACA avec highlighting "Membres" en `#2D9B8A`
- **Breadcrumb** : Accueil > Membres
- **Page title** : "Nos Membres" avec compteur total

## Section Hero Membres
- **Background** : `#2D9B8A` avec pattern géométrique subtil
- **Contenu** :
  - Titre H1 : "Nos Membres" (blanc, 42px)
  - Sous-titre : "Un réseau de X professionnels à travers l'Afrique"
  - Statistiques rapides : Pays représentés, secteurs d'activité
  - Bouton CTA : "Devenir Membre" en `#28A745`

## Sidebar Filtres (Desktop)
- **Position** : Colonne gauche fixe, largeur 300px
- **Background** : `#F8F9FA` avec bordure droite `#E9ECEF`
- **Sections filtres** :

### Filtres de Recherche
- **Barre recherche** :
  - Input avec icône loupe
  - Placeholder : "Rechercher un membre..."
  - Border focus en `#2D9B8A`
  - Bouton clear en `#6C757D`

### Filtres par Catégorie
- **Type de membre** :
  - Checkboxes stylisées couleur `#2D9B8A`
  - Options : Producteur, Transformateur, Négociant, Institution, Partenaire
  - Compteur par catégorie en `#6C757D`

### Filtres Géographiques
- **Par pays** :
  - Dropdown avec drapeaux
  - Multi-sélection possible
  - Recherche interne dans dropdown
- **Par région** :
  - Afrique de l'Ouest, Centrale, Est, Australe
  - Couleurs distinctes par région

### Filtres Avancés
- **Statut adhésion** :
  - Membre actif : badge `#28A745`
  - Membre associé : badge `#FD7E14`
  - Partenaire : badge `#2D9B8A`
- **Date d'adhésion** : Slider temporel
- **Taille entreprise** : PME, Grande entreprise, Coopérative

## Zone Principale Membres
- **Layout** : Grid responsive principal
- **Contrôles d'affichage** :
  - Vue grille/liste (toggle icons)
  - Tri par : Nom, Date adhésion, Pays, Type
  - Nombre par page : 12/24/48
- **Compteur résultats** : "X membres trouvés"

## Cards Membres (Vue Grille)
- **Dimensions** : 350x280px
- **Design card** :
  - **Header** :
    - Logo membre (80x80px) centré
    - Badge statut coin supérieur droit
  - **Contenu** :
    - Nom entreprise/membre en `#1F6B5C` (18px, bold)
    - Type activité en `#28A745` (14px)
    - Pays avec drapeau en `#6C757D`
    - Description courte (2 lignes max)
  - **Footer** :
    - Date adhésion en `#6C757D`
    - Bouton "Voir profil" en `#2D9B8A`
  - **Hover effects** :
    - Légère élévation (box-shadow)
    - Bordure gauche colorée `#A8E6CF`
    - Animation smooth 0.3s

## Liste Membres (Vue Liste)
- **Table responsive** :
  - Headers en `#F8F9FA` avec texte `#1F6B5C`
  - Colonnes : Logo, Nom, Type, Pays, Statut, Actions
  - Lignes alternées `#FFFFFF` / `#F8F9FA`
  - Hover row en `#A8E6CF` (très léger)

## Modal Profil Membre
- **Déclenchement** : Clic sur "Voir profil" ou nom membre
- **Design modal** :
  - Overlay semi-transparent `rgba(0,0,0,0.7)`
  - Modal centré, max-width 800px
  - Header avec logo membre + bouton fermer
  
### Contenu Modal
- **Informations générales** :
  - Logo haute résolution
  - Nom complet entreprise/organisation
  - Secteur d'activité principal
  - Adresse complète avec carte intégrée
  - Contacts (tel, email, site web)
  
- **Profil détaillé** :
  - Description longue de l'activité
  - Capacités de production
  - Certifications et labels
  - Photos galerie (si disponibles)
  
- **Informations adhésion** :
  - Date d'adhésion
  - Type de membership
  - Contributions/participations ACA
  
- **Actions** :
  - Bouton "Contacter" en `#28A745`
  - Bouton "Site web" en `#2D9B8A`
  - Partage profil (réseaux sociaux)

## Section Devenir Membre
- **Position** : Sidebar droite ou section dédiée
- **Background** : `#2D9B8A` avec coins arrondis
- **Contenu** :
  - Titre "Rejoignez-nous !" en blanc
  - Avantages membership (liste)
  - Bouton "Candidater" en `#28A745`
  - Lien "Conditions d'adhésion"

## Pagination
- **Design** : Centered, style moderne
- **Couleurs** :
  - Numéros inactifs : `#6C757D`
  - Numéro actif : `#2D9B8A` avec background
  - Hover : `#A8E6CF`
- **Navigation** : Première, Précédent, Suivant, Dernière

## Version Mobile
- **Filtres** : Collapsed, bouton "Filtres" ouvre modal
- **Cards** : Single column, hauteur adaptée
- **Profils** : Modal fullscreen
- **Tri** : Dropdown simplifié

## Fonctionnalités Avancées

### Géolocalisation
- **Carte interactive** (vue alternative) :
  - Markers colorés par type membre
  - Clustering intelligent
  - Popup avec infos rapides
  - Zoom par région/pays

### Export Données
- **Bouton export** (admins seulement) :
  - Format CSV/Excel
  - Filtres appliqués conservés
  - Données anonymisées si nécessaire

### Favoris (Membres connectés)
- **Système de favoris** :
  - Icône cœur sur chaque card
  - Section "Mes favoris" dans profil
  - Notifications nouveaux membres favoris

## Analytics & Tracking
- **Métriques suivies** :
  - Recherches populaires
  - Profils les plus consultés
  - Filtres les plus utilisés
  - Taux de conversion vers adhésion

## SEO & Performance
- **URLs** : /membres/[slug-nom-membre]
- **Meta données** : Dynamiques par membre
- **Lazy loading** : Images et cards au scroll
- **Cache** : Intelligent par filtres
- **Sitemap** : Auto-génération profils publics

## Accessibilité
- **Navigation clavier** : Focus trap dans modal
- **Screen readers** : Labels descriptifs
- **Contraste** : Validation WCAG 2.1 AA
- **Zoom** : Support jusqu'à 200%
- **Animation** : Respecte prefers-reduced-motion

## États et Messages
- **Chargement** : Skeleton screens en `#F8F9FA`
- **Aucun résultat** : Message avec suggestions
- **Erreur** : Message friendly avec retry
- **Succès** : Confirmations discrètes
- **Offline** : Message avec cache disponible