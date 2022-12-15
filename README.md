# Realtime-webapp

Un projet d'application web en temps réel utilisant le protocole WebScoket, PHP et jQuery. Fortement inspiré par le livre *Realtime Web Apps: With HTML5 WebSocket, PHP, and jQuery, de Jason Lengstorf et Phil Leggeter (Apress, 2013)*.

## But du projet

Créer une application de FAQ. L'application autorise un présentateur (*host*) à créer une salle d'attente (*lobby*) que des participants peuvent rejoindre. Les participants pourront poser des *questions* au *host*, questions qui seront immédiatement affichées sur l'écran (navigateur web) du *host*. 

Si un participant pose une question, les autres participants peuvent voter pour la question la plus urgente à laquelle répondre (prioriser).

Le *host* pourra également signaler une question comme *ayant obtenu réponse*, et pourra également fermer la salle d'attente. Le résultat de toutes ces actions sera instantanément partagé et affiché sur les écrans de tous les participants.

## Ce qu'on a besoin de développer

- une interface utilisateur pour interagir avec l'application
- une application qui process les requetes et gere les differentes actions
- une base de données pour stocker les données et les interactions (questions, réponses, votes, etc.)

Le livre mentionné utilise pour le projet le SaSS [Pusher](https://pusher.com/) qui gère pour nous le serveur WebScoket et les connections clients/serveurs. On apprendra à s'en servir mais le but c'est de mettre en place ce serveur nous mêmes et de pas dépendre d'un service vendor.

## Dossiers

- `demo`: un dossier démo sur la connection WebSocket avec [Pusher](https://pusher.com/) et Jquery
- `demo-avec-backend-php` : un dossier démo sur la connection WebScocket avec Pusher. Soumission de formulaire à un backend PHP qui soumet lui même le résutat à Pusher, ce dernier publie le contenu sur la channel et le dispatch à tous les clients connectés via WebScoket.

## Lancer le projet



### Lancer le projet `demo`

*Pour lancer cette démo vous devez vous créer un compte (gratuit) sur [Pusher.com](https://pusher.com/), récupérer les clefs d'API et créer un fichier `pusher-api-key.js` à la racine du dossier de la démo qui exporte un objet `pusherAPIKey` comme suit

~~~javascript
export const pusherAPIKey = {
    'key' : votre clé Pusher,
    'cluster' : votre cluster
}
~~~


~~~bash
php -S localhost:5001 -t demo
~~~

### Lancer le projet `demo-avec-backend`

*Pour lancer cette démo vous devez vous créer un compte (gratuit) sur [Pusher.com](https://pusher.com/), récupérer les clefs d'API et créer un fichier `pusher-api-key.js` à la racine du dossier de la démo qui exporte un objet `pusherAPIKey` comme suit

~~~javascript
export const pusherAPIKey = {
    'key' : votre clé Pusher,
    'cluster' : votre cluster
}
~~~


~~~bash
php -S localhost:5001 -t demo-avec-backend-php/
~~~

## Ressources

- [Realtime Web Apps: With HTML5 WebSocket, PHP, and jQuery, de Jason Lengstorf et Phil Leggeter (Apress, 2013) ](https://learning.oreilly.com/library/view/realtime-web-apps/9781430246206/)
- [Pusher](https://pusher.com/), un SaSS qui offre un serveur WebSocket avec un dashboard et une API REST. La version gratuite du service nous autorise jusqu'à 200k messages publiés par jour et 100 connections simultanées.
