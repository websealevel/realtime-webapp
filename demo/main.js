import { pusherAPIKey } from "./pusher_api_key.js";

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

/**
 * Ouvre une connexion WebScoket avec le serveur de Pusher.com
 */
const openPusherConnection = function () {
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
}

/**
 * Ouvre une nouvelle channel, s'abonne à un type d'evenement et définit une callback à la reception de l'evenement
 * @param {*} channelName 
 * @param {*} event 
 * @param {*} callback 
 */
const openPusherChannelAndSuscribeToEvents = function(channelName, event, callback){

    //Création d'une nouvelle channel:
    const channel = pusher.subscribe(channelName);
    //S'abonner sur cette channel aux messages 'my_event' et executer la callback quand ce message est reçu.
    channel.bind(event, callback);
}

$(document).ready(function () {

    //Initiatialisation de la connection
    openPusherConnection()

    //Création d'un nouveau channel (un lobby, un canal de diffusion, identifié seulement par une chaine de caractère),
    //souscription aux évenements sur cet channel et callback appelé coté client quand un event de ce type est émis.
    openPusherChannelAndSuscribeToEvents('channel_test', 'my_event', function (data) {
        alert(data);
    })

});