# Clavier Meca

Site éditorial statique sous **Astro 7**, **Tailwind CSS 4** et **Node.js 24**. Le contenu publié provient du projet Sanity existant. Les articles, catégories et auteurs conservent leurs URL.

## Développement

```sh
nvm install
nvm use
npm ci
npm run dev
```

Le site démarre sur http://localhost:8000. `npm start` et `npm run develop` sont aussi disponibles.

## Configuration

Le dataset public existant fonctionne sans fichier d’environnement. Pour utiliser un autre projet, copier `.env.example` vers `.env` et renseigner `SANITY_PROJECT_ID`, `SANITY_DATASET` et éventuellement `SANITY_READ_TOKEN`. Le jeton reste côté serveur et ne doit jamais avoir de préfixe `PUBLIC_`. Les anciennes variables `GATSBY_SANITY_PROJECTID`, `GATSBY_SANITY_DATASET` et `GATSBY_SANITY_TOKEN` sont encore acceptées pour faciliter la transition.

## Vérifications et production

```sh
npm test
npm run build
npm run validate:build
npm run preview
```

`build` vérifie les composants puis génère le site dans `dist/`. `validate:build` vérifie les routes publiées, les ancres, les métadonnées et la présence du texte des articles dans le HTML produit. Cette commande signale aussi les anciens liens éditoriaux pointant vers des pages qui n’existent pas dans le CMS.

Déployer `dist/` sur un hébergement statique avec Node 24 pour la compilation. Configurer la page 404 avec `404.html` et conserver les routes vers les répertoires `index.html`. `sitemap-index.xml` et `robots.txt` sont générés automatiquement. Un changement de contenu Sanity demande une nouvelle compilation en production ; en développement, le contenu est rafraîchi au prochain rendu après une minute.

Le formulaire de contact conserve son intégration **Netlify Forms** : activer la détection des formulaires sur le site Netlify et reconstruire le site. L’envoi local est désactivé et annoncé dans le formulaire. Aucun serveur d’envoi de courriel n’est inclus. Les durées de conservation annoncées dans le formulaire doivent être appliquées dans la configuration du service d’hébergement.

## Organisation

- `src/pages/` : pages Astro et routes dynamiques des articles, catégories et auteurs.
- `src/components/` : blocs éditoriaux, tableaux, fiches produits, audio et vidéo.
- `src/lib/sanity.mjs` : récupération du contenu publié et résolution des références.
- `src/lib/content.mjs` : texte enrichi, images Sanity et sommaires.
- `src/styles/global.css` : Tailwind 4, thème violet et polices Suisse d’origine.

Gatsby, React, Emotion et Framer Motion ne sont plus nécessaires. Le menu mobile et le sommaire utilisent les éléments HTML natifs ; seul le formulaire de contact charge un petit script. Le dossier historique `storybook-static/` est conservé comme archive et n’est ni compilé ni déployé.
