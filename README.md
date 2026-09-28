<img width="1280" height="652" alt="image" src="https://github.com/user-attachments/assets/cbaa11b5-f6c0-4d6f-b65a-48b6a479a961" /># Samen Meten – GitHub Pages deployment

Deze repository publiceert de live versie van het Samen Meten-luchtkwaliteitsdashboard.

**Live dashboard:** https://bayramgurel.github.io/

De ontwikkelbroncode staat in:

https://github.com/BayramGurel/Samenmeten-Dashboard-Vue

## Deployment

De workflow in `.github/workflows/sync-samenmeten.yml` haalt de nieuwste broncode op, installeert de vastgelegde npm-afhankelijkheden, bouwt de Vue-app en synchroniseert de productiebuild naar deze `gh-pages` branch.

Daardoor blijft deze repository gericht op hosting, terwijl de ontwikkelcode in de bronrepository wordt onderhouden.

De sync kan handmatig via GitHub Actions worden gestart en draait daarnaast periodiek.
<img width="1280" height="652" alt="image" src="https://github.com/user-attachments/assets/fc11ff38-bd5d-418b-b37f-ffde57594b6f" />
