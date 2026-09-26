# degee-kine — contexte projet pour Claude

## Qui
Site statique one-page pour **Degée Sophie**, kinésithérapeute à Huy (Ben-Ahin, Belgique).  
Spécialisée en neurologie adulte et rééducation ATM (temporo-mandibulaire).  
Contact : 0479 84 75 46 — sophiedegee@hotmail.fr

## Structure des versions

```
degee-kine/
├── vanilla/       # v1 — épuré, Inter, palette teal #0a5c65, timeline verticale
├── vanilla-v2/    # v2 — plus fun, gradients teal→violet, cartes formations en grille
├── vanilla-v3/    # v3 — vanilla-v2 + Google Maps + SEO / Open Graph
├── tailwind/      # v4 — vanilla-v2 réimplémenté en Tailwind CDN
├── tailwind-v2/   # v5 — hyper familiale : Nunito, palette chaude vert/pêche/doré
├── tailwind-v3/   # v6 — tailwind-v2 + Google Maps + SEO / Open Graph
├── tailwind-v4/   # v7 — tailwind-v3 + Spécialités + FAQ + compteurs + swipe mobile + Schema.org
└── tailwind-v5/   # v8 — version retenue, tailwind-v4 affinée — RACINE DU SITE PUBLIÉ
```

**Déploiement** : `tailwind-v5/` est la racine du site en production. Les fichiers de racine (`favicon.ico`, `robots.txt`, `sitemap.xml`…) vont dans ce dossier.

Chaque version est autonome, aucun build requis — ouvrir `index.html` suffit.

## Contenu commun à toutes les versions
- Hero avec photo du cabinet
- Section Cabinet (Ben-Ahin, Huy)
- Carrousel photos (vanilla JS, auto-play 4500 ms, IntersectionObserver fade-up)
- Formations (2008 → 2025) : timeline (v1) ou grille de cartes avec filigrane année (v2+)
- Contact : téléphone, email

## Particularités techniques
- **Tailwind** : couleurs custom assignées manuellement par carte (nth-child impossible sans build) ; `css/custom.css` pour gradient clip-text, overlay hero multi-radial, watermark `::after` via `attr(data-year)`, état navbar au scroll
- **tailwind-v2+** : police Nunito, palette `#3d8b5c` / `#e8865a` / `#d4a040`, fond crème `#f7f4ef`, footer `#1e3528`
- **tailwind-v4** : section Spécialités sur fond `#1e3528`, FAQ `<details>/<summary>` sans JS, compteurs CSS/JS, swipe `touchstart`/`touchend`, bouton `tel:` flottant mobile, Schema.org `MedicalBusiness` JSON-LD

## Workflow
- Après chaque nouvelle version : mettre à jour **README.md** ET **index.html** (racine) sans attendre qu'on le demande.
- `index.html` racine liste toutes les versions sous forme de cartes avec lien — rester en sync avec les dossiers réels.
- Vérifier l'alternance des fonds entre sections (blanc / crème `#f7f4ef` / vert foncé) après tout ajout ou déplacement de section.
- Nouvelle version sans stack précisé → proposer vanilla CSS en premier.
- Repartir de la dernière version Tailwind comme base pour les nouvelles versions Tailwind.