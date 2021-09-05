// ==UserScript==
// @name         FHE
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jeaoq/github
// @match        https://stars-ensemble.tumblr.com/*
// @match        https://*.tumblr.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

var icons = [];
var toolbar = "";
var contentWarning = $('[data-content-warning]').last().attr('data-content-warning');
var contentWarningType = $('[data-content-warning-type]').last().attr('data-content-warning-type');

function initializeContentWarnings(){
    contentWarning = $('[data-content-warning]').last().attr('data-content-warning');
    contentWarningType = $('[data-content-warning-type]').last().attr('data-content-warning-type');
    if( $('[data-content-warning]').length ){
        switch(contentWarningType) {
            case 'popup':
                break;
            case 'hidden':
                $('body').addClass('q-dialogue-warning-hidden');
                break;
            default:
        }
    }
}

function initializeToolbar(){
    toolbar = toolbar + `
    <div class="q-toolbar__section tools">
    <a class="tippy" data-tippy-content="Chat Format" href="#maximize" onclick="maximizeToggle();"><span class="material-icons-round">question_answer</span></a>
    <a class="tippy" data-tippy-content="Fullscreen" href="#fullscreen" onclick="fullscreenToggle();"><span class="material-icons-round">fullscreen</span></a>
    </div>`;
    if( $('[data-prev-link]').length + $('[data-next-link]').length + $('[data-directory-link]').length > 0 ){
        toolbar = toolbar + `<nav class="q-toolbar__section nav">`;
        if( $('[data-prev-link]').length > 0 ){
            toolbar = toolbar + `<a class="tippy" data-tippy-content="` + $('[data-prev-title]').last().attr('data-prev-title') + `" href="` + $('[data-prev-link]').last().attr('data-prev-link') + `"><span class="material-icons-round">west</span></a>`
        }
        if( $('[data-directory-link]').length > 0 ){
            toolbar = toolbar + `<a class="tippy" data-tippy-content="` + $('[data-directory-title]').last().attr('data-directory-title') + `" href="` + $('[data-directory-link]').last().attr('data-directory-link') + `"><span class="material-icons-round">toc</span></a>`
        }
        if( $('[data-next-link]').length > 0 ){
            toolbar = toolbar + `<a class="tippy" data-tippy-content="` + $('[data-next-title]').last().attr('data-next-title') + `" href="` + $('[data-next-link]').last().attr('data-next-link') + `"><span class="material-icons-round">east</span></a>`
        }
        toolbar = toolbar + `</nav>`;
    }

    $('.q-dialogue')
    .before(`<div class="q-toolbar top">` + toolbar + `</div>`)
    .after(`<div class="q-toolbar bottom">` + toolbar + `</div>`);
    cw = `<div class="q-dialogue-warning">
    <div class="q-dialogue-warning__header">Content Warning!<span class="material-icons-round">help</span></div>
    <div class="q-dialogue-warning__text">` + contentWarning + `</div>`;
    if(contentWarningType === "popup"){

    }
    else if(contentWarningType === "hidden"){
        cw = cw + `<div class="q-dialogue-warning__confirm"><button class="unhide" type="button">I understand</button></div>`
        $('body').addClass('q-dialogue-warning-hidden');
    }
    cw = cw + `</div>`;
    $('.q-toolbar.top').before(cw);

    $('.unhide').click(function () {
        unhideDialogue();
        $('.q-dialogue-warning').addClass('hidden');
        setTimeout(function () {
            $('.q-dialogue-warning').hide();
        }, 5000);
    });



}

function initializeTooltips() {
    console.log('tippy');
    tippy.createSingleton(tippy('.q-toolbar .tippy'), {
        arrow: false,
        animation: 'shift-away',
        offset: [0, 5],
        delay: [0, 200],
        zIndex: 99999999999,
        theme: 'q-button',
        moveTransition: 'transform 0.25s ease'
    });
    tippy('.q-dialogue sup', {

        maxWidth: 350,
        allowHTML: true,
        animation: 'shift-away',
        offset: [0, 5],
        delay: [0, 200],
        zIndex: 99999999999,
        theme: 'q-note',
        moveTransition: 'transform 0.25s ease'

    });

}

function initializeSiteConfig(callback){

    customicons = [];

    if( $('[data-icon-override]').length > 0 ){
        customicons = JSON.parse( $('[data-icon-override]').last().attr('data-icon-override') );
    }
    if( $('[data-icon-pack]').length > 0 ){
        var x = 0;
        var iconpacks = $('[data-icon-pack]');

        var loopArray = function() {
            addIconPack(iconpacks[x],function(){
                x++;
                if(x < iconpacks.length) {
                    loopArray();
                }
                else{
                    icons = [...customicons, ...icons];
                    callback();
                }
            });
        }
        function addIconPack(iconpack,callback) {
            packname = $(iconpack).attr('data-icon-pack');
            $.getJSON('https://r.tsukina.ga/i/' + packname + '/pack.json', function(data) {
                customicons = [...customicons, ...data];
                console.log('ci '+x);
                console.log(customicons);
                callback();
            });
        }
        loopArray();
    }
}

function unhideDialogue(){
    /*
    $( ".q-dialogue.q-dialogue-loading" ).animate({
        height: 'auto'
    }, 5000, function() {
        $('.q-dialogue').removeClass('q-dialogue-loading');
    })*/
    var el = $('.q-dialogue.q-dialogue-loading').first(),
        curHeight = el.height(),
        autoHeight = el.css('height', 'auto').height();
    el.height(curHeight).animate({
        height: autoHeight,
        '-webkit-mask-position': '0% 0%',
        'mask-position': `0% 0%`,
        '-webkit-mask-position-y': '0%'
    }, 200, function(){
        $('.q-dialogue').removeClass('q-dialogue-loading');
    });

}

function tagDialogue(){

    chat = $('.q-dialogue').children();
    chat.each(function() {
            //console.log($(this).html());
        if(
            $(this).html().startsWith("<b") ||
            $(this).html().startsWith("<strong") ||
            $(this).html().startsWith("<div")
        ){
            //console.log('Found -> ' + $(this).prev().html());
            $(this).prev().addClass('endmsg');
        }
        if(
            $(this).html().startsWith("<b") ||
            $(this).html().startsWith("<strong")
        ){
            $(this).addClass('startmsg');
            commonname = $(this).children().first().text().replace(":", "");
            $(this).attr('character', commonname);
            $(this).nextAll().attr('character', commonname);
            $(this).children().first()
            .wrap('<span class="identifier__wrapper"></span>')
            .wrap('<span class="identifier name"></span>');
            $(this).children().first().append('<span class="identifier icon"></span>');
            iconElement = $(this).children().first().children('.identifier.icon').first();
            iconElement.append('<img src="' + icons.find(x => x.commonname === commonname).filename + '">');
        }
    });
    chat.last().addClass('endmsg');
    inlineNotes = $('.q-dialogue sup[data-note]');
    inlineNotes.each(function() {
        $(this).prepend('<span class="material-icons-round">description</span>');
        $(this).html( $(this).html().replace(/[\[\]']+/g,'') );
        $(this).attr('data-tippy-content', $('q[data-note="' + $(this).attr('data-note') + '"]').html());

    });
    if(contentWarningType !== "hidden"){
        unhideDialogue();
    }

}



function fullscreenInitial(){
    maindialogue = $('.q-dialogue').first().html();
    $('body').prepend(`<div class="q-dialogue__background fullscreen">
    <div class="q-dialogue__wrapper fullscreen">
    <div class="q-dialogue fullscreen">` + maindialogue +
    `</div></div></div>`)
}

function fullscreenToggle(){
    $('.q-dialogue__background').fadeToggle(200);
    $('body').toggleClass('q-dialogue-expanded');
}

function maximizeToggle(){
    $('body').toggleClass('q-dialogue-maximized');
}

function loadScript(scriptUrl) {
  const script = document.createElement('script');
  script.src = scriptUrl;
  document.body.appendChild(script);

  return new Promise((res, rej) => {
    script.onload = function() {
      res();
    }
    script.onerror = function () {
      rej();
    }
  });
}

function loadTippy() {
    loadScript('https://unpkg.com/@popperjs/core@2')
        .then(() => {
            loadScript('https://unpkg.com/tippy.js@6')
                .then(() => {
                    initializeTooltips();
                })
                .catch(() => {
                });

      })
      .catch(() => {
          loadTippy();
      });
}

$(function() {
    initializeContentWarnings();
    $('body').html( $('body').html().replace(/<q class="dialogue-start"><\/q>(.+?)<q class="dialogue-end"><\/q>/gs, '<div class="q-dialogue q-dialogue-loading">$1</div>' ) );
    $.getJSON('https://r.tsukina.ga/i/default/pack.json', function(data) {
        icons = data;
        initializeSiteConfig(function (){
            tagDialogue();
            fullscreenInitial();
            initializeToolbar();
            loadTippy();
        });
    });


});
