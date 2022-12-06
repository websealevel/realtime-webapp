# Realtime-webapp

Un projet d'application web en temps réel utilisant le protocole websocket, PHP et jQuery. Fortement inspiré par le livre Realtime Web Apps: With HTML5 WebSocket, PHP, and jQuery, de Jason Lengstorf et Phil Leggeter (Apress, 2013).

## But du projet

Créer une application de FAQ. L'application autorise un présentateur(host) à créer une salle d'attente que des participants peuvent rejoindre. Les participants pourront poser des questions au présentateur, questions qui seront immédiatement affichées sur l'écran (navigateur web) du présentateur. 

Si un autre participant pose une question, les participants  pourront voter pour la question la plus urgente à répondre (prioriser).

Le présentateur pourra également marquer une question comme répondue et pourra également fermer la salle d'attente. Le résultat de toutes ces actions sera instantanément partagé et affiché sur les écrans de tous les participants.

## Ce qu'on a besoin de développer

- une interface utilisateur pour interagir avec l'application
- une application qui process les requetes et gere les differentes actions
- une base de données pour stocker les données et les interactions (questions, réponses, votes, etc.)

## Ressources

- [Realtime Web Apps: With HTML5 WebSocket, PHP, and jQuery, de Jason Lengstorf et Phil Leggeter (Apress, 2013) ](https://learning.oreilly.com/library/view/realtime-web-apps/9781430246206/)
