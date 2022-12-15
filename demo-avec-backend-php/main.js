import { pusherAPIKey } from "./pusher-api-key.js";

/**
* Met à jour les couleurs du block indiquant le status de la connection.
*/
const setConnectionStatusCSSColors = function () {
    const state = $('#connection-status').html()
    if ('connected' === state)
        $('#connection-status').css('background-color', 'green').css('color', 'white');

    if ('connecting' === state)
        $('#connection-status').css('background-color', 'orange').css('color', 'white');
}

$(document).ready(function () {

    //Initiatialisation de la connection


    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    // Ouverture de la connexion avec une clé API (credentials fournis par Pusher.com)
    var pusher = new Pusher(pusherAPIKey.key, {
        cluster: pusherAPIKey.cluster
    });

    $('#connection-status').html(pusher.connection.state)

    setConnectionStatusCSSColors()

    //Callback quand le statut de la connexion change
    pusher.connection.bind('state_change', function (change) {
        $('#connection-status').html(change.current);
        setConnectionStatusCSSColors()
    });

    //Création d'un nouveau channel (un lobby, un canal de diffusion, identifié seulement par une chaine de caractère)
    const channel = pusher.subscribe('test_channel');

    //S'abonner sur cette channel aux messages 'my_event'
    channel.bind('my_event', function (data) {
        alert(data);
    });

});