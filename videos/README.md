# Vidéos WysiQ — « moins d'une minute »

La page `videos-fr.html` / `videos-en.html` se construit **toute seule** à partir de ce dossier.
Rien d'autre à modifier : déposer les fichiers, commit, push.

## Pour chaque vidéo

| Fichier | Rôle |
|---|---|
| `01-live-sources.mp4` | la vidéo (`.mp4` H.264/AAC, ou `.webm`) |
| `01-live-sources.txt` | **1re ligne = titre**, lignes suivantes = texte d'explication (page FR) |
| `01-live-sources.en.txt` | facultatif — titre + texte en anglais ; sinon le `.txt` sert aussi en EN |
| `01-live-sources.jpg` | facultatif — vignette (`.jpg` / `.png` / `.webp`) ; sinon une image de la vidéo est utilisée |

- Même nom de base pour la vidéo et ses fichiers associés.
- L'ordre d'affichage suit le nom (préfixe `01-`, `02-`…).
- La durée est lue automatiquement dans la vidéo.
- Dans le `.txt`, une ligne vide sépare deux paragraphes. Enregistrer en UTF-8.
- GitHub refuse les fichiers > 100 Mo ; viser < 50 Mo (un enregistrement d'écran de 30-60 s en 1080p convient).
- Pas d'espaces ni d'accents dans les noms de fichiers.

## Comment la page trouve les fichiers

1. API GitHub du dépôt indiqué dans `site-config.json` (`site_repo`, `site_branch`) — fonctionne si le dépôt est public.
2. Sinon `videos/index.json`, régénéré automatiquement par `.github/workflows/videos-index.yml` à chaque push.

## Conseil : démarrage immédiat de la lecture

Les enregistrements d'écran Windows placent souvent l'index du MP4 à la fin du fichier : le navigateur doit alors aller le chercher avant de lancer la lecture.
Le replacer au début, sans réencoder ni perdre de qualité (quelques secondes) :

    ffmpeg -i enregistrement.mp4 -c copy -movflags +faststart 01-ma-video.mp4
