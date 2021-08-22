
var narrowLimit = 812;
var titleBarPos = $('.card-pair-wrapper').offset().top + $('.card-pair-wrapper').outerHeight() - 91;
var cardStickyHeight = $('.card-pair-stick').outerHeight() + 20;
var playerName = 'Anzu';
var charArray = [
    "Kohaku Oukawa",
    "Aira Shiratori",
    "Tomoya Mashiro",
    "Yuta Aoi",
    "Hinata Aoi",
    "Tori Himemiya",
    "Hiiro Amagi",
    "Mitsuru Tenma",
    "Midori Takamine",
    "Hajime Shino",
    "Sora Harukawa",
    "Tetora Nagumo",
    "Shinobu Sengoku",
    "Tsukasa Suou",
    "Mao Isara",
    "Arashi Narukami",
    "Natsume Sakasaki",
    "Tatsumi Kazehaya",
    "Mika Kagehira",
    "Hokuto Hidaka",
    "Ibara Saegusa",
    "Yuzuru Fushimi",
    "Adonis Otogari",
    "Jun Sazanami",
    "Koga Oogami",
    "HiMERU",
    "Subaru Akehoshi",
    "Mayoi Ayase",
    "Makoto Yuuki",
    "Souma Kanzaki",
    "Wataru Hibiki",
    "Kuro Kiryu",
    "Eichi Tenshouin",
    "Kaoru Hakaze",
    "Izumi Sena",
    "Shu Itsuki",
    "Nagisa Ran",
    "Niki Shiina",
    "Ritsu Sakuma",
    "Chiaki Morisawa",
    "Keito Hasumi",
    "Kanata Shinkai",
    "Tsumugi Aoba",
    "Hiyori Tomoe",
    "Madara Mikejima",
    "Leo Tsukinaga",
    "Nazuna Nito",
    "Rei Sakuma",
    "Rinne Amagi",
    "Akiomi Kunugi",
    "Jin Sagami",
    "Seiya Hidaka",
    "Anzu",
    "Gatekeeper"
];


/*
var cssStyle = document.createElement('link');
cssStyle.href = 'https://jeaoq.github.io/enstars-wiki/story.css';
cssStyle.rel = 'stylesheet';
document.head.appendChild(cssStyle);
*/

// A $( document ).ready() block.
$( document ).ready(function() {
    mw.loader.using('mediawiki.api', function() {
        // console.log("DEBUG - Adds CategoryClasses Manually");
        addCategories();

        console.log("%cSTORY.JS v0.4.1 — github/jeaoq/enstars-wiki", "display: inline-block; color:#3434eb; background:white; padding: 10px 40px; margin: 0px 5px 5px 0px; border-radius: 15px 5px; border: solid 2px #3434eb; box-shadow: 5px 5px 0px 0px #3434eb; font-weight: 700; font-size: 1.2em;");
        console.log(`Changelog:
        0.3.0   Included CategoryClasses in story.js
                Fixed HiMERU & Gatekeeper from disappearing
                Adjusted colors in fill mode to be more readable
        0.4.0   Includes js required for updated card pages [BETA]
                Added player name customization option [BETA]
                Fixed unreadable InLinks in stories
        0.4.1   Fixed lag when running script
                Added ability to disable Natsume's font
                Added dyslexic friendly font option [BETA]
        0.4.2   Fixed unreadable Links in stories`);
        console.log(`Credits:
        -       https://github.com/yaycupcake/enstars-wiki-js
                (Render detection, Character List, and a lot more! by @mizuhanome_tl)`);

        $(document.querySelector('.storyNavBar')).addClass('storyTopNav');
        $(document.querySelector('.storyNavBar')).addClass('storyOptions');
        $('.storyTopNav > tbody > tr > *:nth-child(2)').after(`

        <th class="story-show-options">
            <a href="#options" onclick="showOptions();">
                <span class="material-icons-round">text_fields</span>
            </a>
        </th>
        <th class="story-bookmark">
            <a href="#bookmarkToolbar" onclick="bookmark();">
                <span class="material-icons-round">bookmark_border</span>
            </a>
        </th>
        `);

        $('.storyTopNav > tbody').append(`
        <tr class="story-options-wrapper">
        <th class="story-options storyOptions">
        <div class="story-format">
            <a href="#resize" onclick="resizeImg();">
                <span class="material-icons-round">question_answer</span>
            </a>
            <a href="#color" onclick="color();">
                <span class="material-icons-round">palette</span>
            </a>
            <a href="#colorFill" onclick="colorFill();">
                <span class="material-icons-round">format_color_fill</span>
            </a>
            <a href="#colorShadow" onclick="colorShadow();">
                <span class="material-icons-round">copy_all</span>
            </a>
        </div>
        <div class="story-resize-text">
            <a>
                <span class="material-icons-round">format_size</span>
            </a>
            <ul>
                <li id="sf-14" onclick="storyOptionsFontSize('14');">14px</li>
                <li id="sf-16" onclick="storyOptionsFontSize('16');">16px</li>
                <li id="sf-18" onclick="storyOptionsFontSize('18');">18px</li>
                <li id="sf-21" onclick="storyOptionsFontSize('21');">21px</li>
            </ul>
        </div>
        <div class="story-name">
            <a>
                <span class="material-icons-round">badge</span>
            </a>
            <input type="text" id="playerName" name="playerName">

        </div>
        <div class="story-natsume">
            <a onclick="notsume();">
                <img src="https://ensemble-stars.fandom.com/wiki/Special:Redirect/file/Natsume ES Head.png" alt="Disable Natsume Spell Font"></img>
            </a>


        </div>
        </th>
        </tr>
        `);

        $('.storyCover > tbody').append(`
        <tr>
        <th colspan="3">Reading Options</th>
        </tr>
        <tr class="story-options-wrapper">
        <td colspan="3" class="story-options storyOptions">
        <div class="story-format">
            <h3><span class="material-icons-round">menu_book</span>Reading Settings</h3>
            <div>
                <a href="#resize" onclick="resizeImg();">
                    <span class="material-icons-round">question_answer</span> Chat Mode
                </a>
                <a href="#color" onclick="color();">
                    <span class="material-icons-round">palette</span> Colored
                </a>
                <a href="#colorFill" onclick="colorFill();">
                    <span class="material-icons-round">format_color_fill</span> Full
                </a>
                <a href="#colorShadow" onclick="colorShadow();">
                    <span class="material-icons-round">copy_all</span> Shadow
                </a>
            </div>
        </div>
        <div class="story-resize-text">
            <h3><span class="material-icons-round">format_size</span>Font Size</h3>
            <div>
                <span class="story-options-fontSize">
                    <input type="number" id="fontSize" name="fontSize">
                    <span>px</span>
                </span>
            </div>
        </div>
        <div class="story-name">
            <h3><span class="material-icons-round">badge</span> Player Name</h3>
            <div>
                <input type="text" id="playerName" name="playerName">
            </div>
        </div>
        </td>
        </tr>
        `);



        $('body[class*="_-_Story"]:not([class*="_-_Story_Index"]) .article-table:not(.storyNavBar)').addClass('story-table');
        initialConfig();
        if($('.storyTopNav').length){
            stickyInitial();
        }
        updatePageWidth();
        $( "#playerName" ).change(function() {
            // console.log('pNC');

            if($('#playerName').length > 0){
                adjustWidthOfInput();
                try{
                    playerName = $('#playerName').val();
                }catch(e){

                }
            }
            setPreference('playerName', playerName);
        });
        $('#playerName').focus(function() {
            $('body').addClass('writing');
        }).
        blur(function() {
            $('body').removeClass('writing');
        });
    });
});


$(".page__right-rail").on('transitionend', function() {
    updatePageWidth();
});

$(window).resize(function(){
    updatePageWidth();
});


$('.card-pair-wrapper').click(function(){
    $('.card-pair-wrapper').toggleClass('bloomed');
});

$(window).scroll(function(){
    cardSpaceDown();
});

function cardSpaceDown() {
    if( $('body').hasClass('isPageNarrow') ){
        if($(window).scrollTop() > ( titleBarPos )){
            $(".isPageNarrow [data-item-name=\"card-images\"]").css("height", cardStickyHeight);
            $(".card-infobox-wrapper").addClass("isScrolledPast");
        }
        else{
            //
            $(".card-infobox-wrapper").removeClass("isScrolledPast");
            $(".isPageNarrow [data-item-name=\"card-images\"]").css("height", '');
        }
    }
    else {
        $("[data-item-name=\"card-images\"]").css("height", '');
        if($(window).scrollTop() > ( $('.wds-is-current [data-item-name|="card-stats"]').offset().top - 91 - $('.wds-is-current [data-item-name="title_name"]').outerHeight()  )){
            $(".card-infobox-wrapper").addClass("isScrolledPast");
        }
        else{
            //
            $(".card-infobox-wrapper").removeClass("isScrolledPast");
        }
    }
    // console.log($('[data-item-name="title_name"]').offset().top);
    //console.log($(window).scrollTop());
}

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

function addCategories(){
    (function($, mw) {
    var fn = function() {
        var cats = mw.config.get('wgCategories'), newClasses;
        if (cats) {
        newClasses = $.map(cats, function(el) {
            return 'cat-' + encodeURIComponent(el.replace(/[ .]/g, '_')).replace(/%/g, '_');
        }).join(' ');
        $(document.body).addClass(newClasses);
        // console.log(newClasses);
        }
    };
    if (document.body) {
        fn();
    } else {
        $(fn);
    }
    })(jQuery, mw);

}

function stickyInitial(){
    const stickyElm = document.querySelector('.storyTopNav');

    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      {threshold: [1]}
    );

    observer.observe(stickyElm);
}



function tagRenders() {
    if($('#playerName').length > 0){
        adjustWidthOfInput();
    }
    const renders = $('.story-table img[data-image-name*="Render"]');
    renders.each(function() {
        var filename = $(this).attr('data-image-name');
        var name = "";
        var firstName = "";
        var squareFileName = "";
        if(filename.charAt(0) === "!"){
            // console.log(filename.split("!"));
            name = filename.split("!")[1];
            squareFileName = 'https://ensemble-stars.fandom.com/wiki/Special:Redirect/file/' + filename.split("!")[2];
            firstName = filename.split("!")[3];
        } else if ( $(this).attr('title') === "???" ) {
            name = "???";
            squareFileName = 'https://ensemble-stars.fandom.com/wiki/Special:Redirect/file/Mystery Icon.png';
            firstName = "mystery";
            var render = 'url(' + $(this).attr('src'); + ')';
            console.log(render);
            $(this).closest('td').css("--render", render);

        } else {
            charArray.forEach(function(chName) {
                if (filename.includes(chName)) {
                    name = chName;
                    firstName = chName.replace(/ .*/,'');
                }
            });
            squareFileName = "https://ensemble-stars.fandom.com/wiki/Special:Redirect/file/"+firstName+" ES.png";

        }
        // console.log(filename + " -> " + name + " / " + firstName);
        $(this)
        .wrap("<div class='character-render-full'></div>")
        .parent('.character-render-full')
        .attr('data-char-name', name)
        ;
        const cri = document.createElement('div');
        cri.setAttribute('class', 'character-render-icon');
        cri.setAttribute('alt', name);
        cri.innerHTML = '<img src="'+squareFileName+'">';
        $(cri).insertBefore( $(this).parent() );
        var cell = $(this).closest('td');
        var attr = cell.attr('alt');
        // console.log(attr);
        if(typeof attr !== 'undefined' && attr !== false){
            cell.attr('alt', attr + ' & ' + name);
        } else {
            cell.attr('alt', name);
        }

        var colorClass = 'pi-theme-' + firstName.toLowerCase() + '-color'
        cell.parent().addClass(colorClass);
    });

    $('.story-table p').each(function() {
        $(this).html( $(this).html().replace('Anzu', playerName ) );
    });
}


function showOptions() {
    $('.storyTopNav').toggleClass('storyOptions');
}

function resizeImg(){
    $('body').toggleClass('story-minimized');
    setPreference('format', $('body').hasClass('story-minimized'));
}

function color(){
    $('body').toggleClass('story-color');
    setPreference('color', $('body').hasClass('story-color'));
}

function colorFill(){
    $('body').toggleClass('story-colorFill');
    setPreference('colorFill', $('body').hasClass('story-colorFill'));
}

function colorShadow(){
    $('body').toggleClass('story-colorShadow');
    setPreference('colorShadow', $('body').hasClass('story-colorShadow'));
}

function notsume(){
    $('body').toggleClass('notsume');
    setPreference('notsume', $('body').hasClass('notsume'));
}

function opendyslexic(){
    $('body').toggleClass('opendyslexic');
    setPreference('opendyslexic', $('body').hasClass('opendyslexic'));
}

function storyOptionsFontSize(val) {
	console.log('Font size = ' + val);
    document.documentElement.style.setProperty('--story-font-size', val + 'px');
    $('[id|="sf"]').removeClass("currentFontSize");
    $('#sf-'+val).addClass("currentFontSize");
    setPreference('fontSize', val);
}


//var inputEl = document.getElementById("playerName");

function getWidthOfInput() {
    var tmp = document.createElement("span");
    tmp.className = "playerNameTemp";
    try{
        tmp.innerHTML = $('#playerName').val().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    }catch(e){

    }
    document.body.appendChild(tmp);
    var theWidth = $('.playerNameTemp').outerWidth();
    document.body.removeChild(tmp);
    return theWidth;
}

function adjustWidthOfInput() {
    // inputEl.style.width = getWidthOfInput() + "px";
    $('#playerName').width( getWidthOfInput() );
}



function setPreference(param, val){
    var params = {
            action: 'options',
	    optionname: 'userjs-'+param,
            optionvalue: val,
            format: 'json'
        },
        api = new mw.Api();
    api.postWithToken( 'csrf', params ).done( function ( data ) {
        // console.log(param + ' ' + val);
        // console.log(data);
    } );
}

function initialConfig(){
    document.documentElement.style.setProperty('--content-width', $('#content').width() + 'px');
    var params = {
            action: 'query',
            meta: 'userinfo',
            uiprop: 'options',
            format: 'json'
        },
        api = new mw.Api();
    api.get( params ).done( function ( data ) {
    	var pref = data.query.userinfo;
        // console.log( pref );
        if(pref.options['userjs-fontSize'] === "undefined"){
        	setPreference('fontSize', '16');
        }
        storyOptionsFontSize(pref.options['userjs-fontSize']);

        if(pref.options['userjs-format'] === "undefined"){
        	setPreference('format', false);
        }
        else if(pref.options['userjs-format']){
        	$('body').addClass('story-minimized');
        }

        if(pref.options['userjs-color'] === "undefined"){
        	setPreference('color', false);
        }
        else if(pref.options['userjs-color']){
        	$('body').addClass('story-color');
        }

        if(pref.options['userjs-colorFill'] === "undefined"){
        	setPreference('colorFill', false);
        }
        else if(pref.options['userjs-colorFill']){
        	$('body').addClass('story-colorFill');
        }

        if(pref.options['userjs-colorShadow'] === "undefined"){
        	setPreference('colorShadow', false);
        }
        else if(pref.options['userjs-colorShadow']){
        	$('body').addClass('story-colorShadow');
        }

        if(pref.options['userjs-notsume'] === "undefined"){
        	setPreference('notsume', false);
        }
        else if(pref.options['userjs-notsume']){
        	$('body').addClass('notsume');
        }

        if(pref.options['userjs-opendyslexic'] === "undefined"){
        	setPreference('opendyslexic', false);
        }
        else if(pref.options['userjs-opendyslexic']){
        	$('body').addClass('opendyslexic');
        }

        if(pref.options['userjs-playerName'] === "undefined"){
        	setPreference('playerName', 'Anzu');
            playerName = Anzu;
            if($('#playerName').length > 0){
                try{
                    $('#playerName').val( 'Anzu' );

                }catch(e){

                }
            }
        } else {
            playerName = pref.options['userjs-playerName'];
            if($('#playerName').length > 0){

                try{
                    $('#playerName').val( pref.options['userjs-playerName'] );

                }catch(e){

                }

            }
        }
        tagRenders();
    } );
}


function getPreference(param){
    var params = {
            action: 'query',
            meta: 'userinfo',
            uiprop: 'options',
            format: 'json'
        },
        api = new mw.Api(), pref;

    api.get( params ).done( function ( data ) {
    	pref = data.query.userinfo.options['userjs-'+param];
        // console.log( pref );
    } );

}
