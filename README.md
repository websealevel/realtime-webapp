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


## Lancer le projet

### Lancer le projet `demo`

~~~bash
php -S localhost:5001 -t demo
~~~

### Lancer le projet `demo-avec-backend`


## Ressources

- [Realtime Web Apps: With HTML5 WebSocket, PHP, and jQuery, de Jason Lengstorf et Phil Leggeter (Apress, 2013) ](https://learning.oreilly.com/library/view/realtime-web-apps/9781430246206/)
- [Pusher](https://pusher.com/), un SaSS qui offre un serveur WebSocket avec un dashboard et une API REST
