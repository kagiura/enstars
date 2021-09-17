// ==UserScript==
// @name         HiiroPoint
// @namespace    https://tsukina.ga/leo
// @version      1.0.1
// @description  :HiiroPoint:
// @author       twitter.com/junsweats
// @match        https://twitter.com/*
// @match        https://*.twitter.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

var jQ = document.createElement('script');
jQ.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(jQ);

var emotes = [];
var emotesLoaded = false;

function DOMModificationHandler(){
    $(this).unbind('DOMSubtreeModified.event1');
    setTimeout(function(){
        if(emotesLoaded){
            pageUpdate();
        }
        console.log('update!');
        $('main').bind('DOMSubtreeModified.event1', DOMModificationHandler);
    },3000);
}
$('main').bind('DOMSubtreeModified.event1', DOMModificationHandler);

$(function() {
    $('head').append(`<style>@import url("https://r.tsukina.ga/hp/emotes.css");</style>`)
    $.getJSON('https://r.tsukina.ga/hp/emotes.json', function(data) {
        emotes = data;
        emotesLoaded = true;
        pageUpdate();
    });
});

function pageUpdate(){

    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    for (const val of emotes) {
        console.log(`span:contains("${val}")`);
        $(`span:contains("${val}")`).each(function() {
            console.log(this);
            var re = new RegExp(`:${val}:`,"gi");
            $(this).html( $(this).html().replace(re, `<i class="hp-icon hp-${val.toLowerCase()}"></i>`) );
        })
        console.log(val);
    }

    $(`span:contains("@junsweats")`).each(function() {
        var re = new RegExp(`@junsweats`,"gi");
        $(this).html( $(this).html().replace(re, `@<i class="hp-icon hp-junsweat"></i>`) );
    })
}
