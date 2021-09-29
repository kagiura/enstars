// ==UserScript==
// @name         LocalLoad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stars-ensemble.tumblr.com/*
// @match        https://*.tumblr.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==


(function() {
    $('<script />', { type : 'text/javascript', src : 'https://r.tsukina.ga/c/fhe.js'}).appendTo('head');
    // $('<script />', { type : 'text/javascript', src : 'http://localhost:4000/js/fhe.js'}).appendTo('head');

})();
