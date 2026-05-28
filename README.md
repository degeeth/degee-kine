# degee-kine

Site web de **Degée Sophie**, kinésithérapeute à Huy (Belgique).  
Spécialisée en neurologie adulte et rééducation ATM.

## Structure

```
degee-kine/
├── vanilla/          # v1 — design moderne épuré (HTML/CSS/JS vanilla)
├── vanilla-v2/       # v2 — design plus coloré et dynamique (HTML/CSS/JS vanilla)
├── vanilla-v3/       # v3 — vanilla-v2 + Google Maps + SEO meta tags
├── tailwind/         # v4 — même direction que v2, built with Tailwind CSS
├── tailwind-v2/      # v5 — version Tailwind hyper familiale (Nunito, tons chauds vert/pêche)
├── tailwind-v3/      # v6 — tailwind-v2 + Google Maps + SEO meta tags
└── tailwind-v4/      # v7 — tailwind-v3 + spécialités + FAQ + compteurs + swipe + bouton mobile + horaires + Schema.org
```

Chaque version est un site statique autonome, aucune étape de build requise.  
Ouvrir `index.html` dans un navigateur suffit pour visualiser le site.

## Versions

### vanilla
Design professionnel et minimaliste.

- Palette teal sobre
- Timeline verticale pour les formations
- Navbar transparente → blanche au scroll
- Animations fade-up au scroll (`IntersectionObserver`)
- Carousel photos vanilla JS

### vanilla-v2
Même contenu, direction artistique plus vivante.

- Gradients teal → violet sur les titres et le bouton CTA
- Hero : double gradient radial coloré derrière la photo
- **Formations en grille de cartes** 3 colonnes avec 5 couleurs alternées, grande année en filigrane et animation en cascade au scroll
- Coins plus arrondis, séparateur tricolore

### vanilla-v3
Identique à vanilla-v2, avec deux ajouts orientés mise en ligne.

- **Google Maps intégré** dans la section Contact (iframe sans clé API, lazy-loaded), avec `.contact-map` ajouté au CSS
- **SEO** : `<meta name="description">`, balises Open Graph (titre, description, image, locale), favicon SVG inline (cœur blanc sur fond teal), `.fade-up.delay-3` ajouté au CSS
- Titre `<title>` reformulé pour le référencement : « Degée Sophie · Kinésithérapeute à Huy »

### tailwind
Même design que v2, réimplémenté avec Tailwind CSS (CDN Play, aucun build).

- ~95 % du style exprimé en classes Tailwind utilitaires
- `tailwind.config` inline pour les couleurs custom (teal, primary)
- `css/custom.css` (~60 lignes) pour les effets que Tailwind ne supporte pas nativement : gradient clip-text, overlay multi-radial du hero, watermark `::after` via `attr()`, état navbar au scroll
- Cartes formations : couleurs assignées manuellement dans le HTML (Tailwind ne supporte pas `nth-child` sans purge)
- Même JS que v2 : carousel, `IntersectionObserver`, cascade de cartes

### tailwind-v2
Direction artistique « hyper familiale » — chaleur, rondeur, bonne humeur.

- Police **Nunito** (ronde et accueillante) à la place d'Inter
- Palette chaude : vert doux `#3d8b5c`, pêche `#e8865a`, doré `#d4a040`, fond crème `#f7f4ef`
- Hero : badge « Cabinet familial » avec icône cœur, overlay radial pêche + vert, **vague SVG** en bas de section pour une transition organique
- Bouton CTA en dégradé vert → doré
- Cartes formations en 5 tons chauds (vert, pêche, doré, sauge, terre cuite) avec grande année en filigrane
- Textes de contact plus personnels : « Venez nous voir », « avec plaisir ! »
- Footer vert profond chaud `#1e3528`

### tailwind-v3
Identique à tailwind-v2, avec deux ajouts orientés mise en ligne.

- **Google Maps intégré** dans la section Contact (iframe sans clé API, lazy-loaded)
- **SEO** : `<meta name="description">`, balises Open Graph (titre, description, image, locale), favicon SVG inline (cœur blanc sur fond vert)
- Titre `<title>` reformulé pour le référencement : « Degée Sophie · Kinésithérapeute à Huy »

### tailwind-v4
Version enrichie basée sur tailwind-v3, avec 7 améliorations.

- **Section Spécialités** : section dédiée sur fond vert foncé (`#1e3528`) avec deux cartes détaillées — neurologie adulte et rééducation ATM — icônes, descriptions et liste de pathologies traitées
- **Bande de statistiques animées** : compteurs CSS/JS (14 ans d'expérience, 11 formations, 10 ans de cabinet, soins à domicile) entre le hero et la section Cabinet
- **FAQ en accordéon** : 6 questions fréquentes patients avec `<details>/<summary>` natif, sans JS — entre Formations et Contact
- **Horaires structurés** : tableau visuel jour par jour dans la section Contact, en colonne latérale à côté de la carte et de la carte
- **Swipe mobile sur le carousel** : `touchstart`/`touchend` pour naviguer dans les photos sans boutons sur mobile
- **Bouton d'appel flottant** : bouton fixe `tel:` visible uniquement sur mobile (`max-width: 767px`), gradient vert → doré
- **Schema.org `MedicalBusiness`** : bloc JSON-LD dans le `<head>` avec nom, adresse, téléphone, email, horaires et spécialités pour le référencement local Google
- **Lien skip-to-content** : accessibilité clavier (`sr-only`, visible au focus)
- **Deuxième CTA hero** : bouton secondaire « Nos spécialités » aux côtés de « Prendre rendez-vous »
- Lien « Spécialités » ajouté dans la navbar

## Contenu

- Présentation du cabinet (Ben-Ahin, Huy)
- Carrousel photos du cabinet
- Historique des formations (2008 → 2025)
- Coordonnées et informations de contact

## Contact

**0479 84 75 46** — du lundi au vendredi de 9h à 18h  
sophiedegee@hotmail.fr
