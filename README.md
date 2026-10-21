# Portfolio de Yassine Oussi

Site statique (HTML, CSS, JavaScript), bilingue français / anglais, avec mode clair et sombre.
Aucun outil à installer : il suffit de déposer les fichiers sur GitHub Pages.

## Fichiers

- `index.html` : le contenu du site (texte français).
- `script.js` : les traductions anglaises et les boutons langue / thème.
- `styles.css` : la mise en page.
- `.nojekyll` : indique à GitHub Pages de servir les fichiers tels quels.
- `photo.jpg` : photo de profil (600 x 600 px).
- `cv.pdf` : le CV actuel (copie de `01_CV/Actuel/Yassine_Oussi_CV.pdf`, exporté depuis Overleaf).

## Déployer gratuitement sur GitHub Pages

1. Va sur https://github.com/YassineOussi/Portfolio (ton dépôt actuel).
2. Clique sur **Add file**, puis **Upload files**.
3. Glisse tous les fichiers du dossier (y compris `photo.jpg` et `cv.pdf`). Accepte de remplacer les anciens fichiers du même nom.
4. Clique sur **Commit changes**.
5. Va dans **Settings**, puis **Pages**. Dans **Source**, choisis **Deploy from a branch**, la branche **main** et le dossier **/ (root)**, puis **Save**.
6. Attends 1 à 2 minutes : le site est en ligne sur https://yassineoussi.github.io/Portfolio/

Option : pour avoir l'adresse plus courte https://yassineoussi.github.io/, crée un nouveau dépôt public nommé exactement `YassineOussi.github.io` et refais les étapes 2 à 5 dedans.

## Modifier le contenu

- Texte français : directement dans `index.html`.
- Texte anglais : dans `script.js`, objet `EN`, avec la même clé que l'attribut `data-i18n` du texte français.
- Lien direct vers la version anglaise : ajoute `?lang=en` à l'adresse.
