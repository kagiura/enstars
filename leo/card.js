/*
SCRIPT: CARD.JS

THIS SCRIPT DOES NOT ALTER THE DOM STRUCTURE OF THE PAGE, AND ONLY EDITS CSS,
CLASSES, AND VARIABLES FOR THE CSS TO FUNCTION PROPERLY.

CREDITS ARE LOGGED IN CONSOLE.
*/

var narrowLimit = 812; /* iPhone X screen height */
var titleBarPos = $('.card-pair-wrapper').offset().top + $('.card-pair-wrapper').outerHeight() - 91;
var cardStickyHeight = $('.card-pair-stick').outerHeight() + 20;

/* Scroll detection for collapsing card infobox header when scrolled past */

function cardSpaceDown() {
    if( $('body').hasClass('isPageNarrow') ){
        if($(window).scrollTop() > ( titleBarPos )){
            $("[data-item-name=\"card-images\"]").css("height", cardStickyHeight);
            $(".card-infobox-wrapper").addClass("isScrolledPast");
        }
        else{
            $("[data-item-name=\"card-images\"]").css("height", '');
            $(".card-infobox-wrapper").removeClass("isScrolledPast");
        }
    }
    else {
        $("[data-item-name=\"card-images\"]").css("height", '');
        if($(window).scrollTop() > ( $('.wds-is-current [data-item-name|="card-stats"]').offset().top - 91 - $('.wds-is-current [data-item-name="title_name"]').outerHeight()  )){
            $(".card-infobox-wrapper").addClass("isScrolledPast");
        }
        else{
            $(".card-infobox-wrapper").removeClass("isScrolledPast");
        }
    }
}

$(window).scroll(function(){
    cardSpaceDown();
});


function initialConfig(){
    document.documentElement.style.setProperty('--content-width', $('#content').width() + 'px');
    updatePageWidth();
}

/* Mobile tap to toggle bloomed status on cards */

$('.card-pair-wrapper').click(function(){
    $('.card-pair-wrapper').toggleClass('bloomed');
});

/* Update page width variable whenever width of container updates,
adds isPageNarrow class if page has less width than narrowLimit */

function updatePageWidth() {
    var currentContentWidth = $('.resizable-container').width();
    if( !$('aside.page__right-rail').hasClass('is-rail-hidden') ) {
        currentContentWidth = currentContentWidth - 336;
    }
    document.documentElement.style.setProperty('--content-width', currentContentWidth + 'px');

    if(currentContentWidth < narrowLimit){
        $('body').addClass("isPageNarrow")
    } else {
        $('body').removeClass("isPageNarrow")
    }

    if( !$('.card-infobox-wrapper').hasClass('isScrolledPast') ){
        titleBarPos = $('.wds-is-current .card-pair-wrapper').offset().top + $('.wds-is-current .card-pair-wrapper').outerHeight() - 91;
        cardStickyHeight = $('.wds-is-current .card-pair-stick').outerHeight() + 20;
    }

    cardSpaceDown();

}

$(".page__right-rail").on('transitionend', function() {
    updatePageWidth();
});

$(window).resize(function(){
    updatePageWidth();
});

$(document).ready(function() {
    mw.loader.using('mediawiki.api', function() {
        console.log("%cCARD.JS v1.0.0", "display: inline-block; color:#3434eb; background:white; padding: 10px 40px; margin: 0px 5px 5px 0px; border-radius: 15px 5px; border: solid 2px #3434eb; box-shadow: 5px 5px 0px 0px #3434eb; font-weight: 700; font-size: 1.2em;");
        console.log("Info:   Developed on github/jeaoq/enstars-wiki\nLatest version available at https://tsukina.ga/leo");
        initialConfig();
    });
});
