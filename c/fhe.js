
var icons = [];
var toolbar = "";
var contentWarning = $('[data-content-warning]').last().attr('data-content-warning');
var contentWarningType = $('[data-content-warning-type]').last().attr('data-content-warning-type');
var logo = `<svg width="1093" height="421" viewBox="0 0 1093 421" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.75124 191.341C9.75124 85.7277 95.3678 0.111267 200.981 0.111267H901.019C1006.63 0.111267 1092.25 85.7277 1092.25 191.341C1092.25 296.954 1006.63 382.571 901.019 382.571H200.981C190.336 382.571 179.895 381.701 169.724 380.029C155.811 390.612 138.097 401.238 117.302 410.124C82.9101 424.821 44.8501 421.969 16.1172 413.366C8.23887 411.007 0.0539638 406.444 0.882103 400.082C1.84272 392.702 7.69815 390.663 14.3841 388.335C14.9566 388.136 15.5351 387.934 16.1172 387.727C30.5423 382.594 41.3119 374.935 55.4507 358.487C62.1263 350.721 67.7048 342.001 72.307 332.806C33.8746 297.828 9.75124 247.402 9.75124 191.341ZM818.93 146.696H785.105V195.53C785.105 202.788 783.978 208.461 781.723 212.548C779.468 216.635 776.649 219.524 773.267 221.215C769.814 222.907 766.361 223.752 762.908 223.752C759.103 223.752 756.002 222.59 753.606 220.264C751.14 218.009 749.907 214.486 749.907 209.694V146.696H716.082V213.605C716.082 223.752 717.985 231.715 721.79 237.493C725.525 243.272 730.458 247.359 736.588 249.755C742.719 252.151 749.272 253.349 756.249 253.349C763.155 253.349 769.356 251.411 774.852 247.535C778.896 244.647 782.314 240.466 785.105 234.994V251.446H818.93V146.696ZM651.938 254.829C642.002 254.829 633.229 253.49 625.619 250.812C618.008 248.205 612.089 244.223 607.861 238.868C603.562 233.583 601.448 226.888 601.519 218.784H632.066C632.207 222.449 633.652 224.986 636.4 226.395C639.078 227.804 642.742 228.509 647.393 228.509C650.212 228.509 652.537 228.157 654.369 227.452C656.202 226.747 657.576 225.796 658.492 224.598C659.408 223.47 659.866 222.237 659.866 220.898C659.866 219.137 659.232 217.727 657.963 216.67C656.695 215.613 654.722 214.556 652.044 213.499L626.781 203.669C619.312 200.568 613.569 196.622 609.552 191.831C605.465 187.109 603.421 181.472 603.421 174.918C603.421 165.687 607.685 158.217 616.211 152.51C624.738 146.802 636.4 143.948 651.198 143.948C665.081 143.948 675.756 147.189 683.226 153.672C690.695 160.155 694.466 168.4 694.536 178.406H663.565C663.565 176.151 662.614 174.178 660.712 172.487C658.809 170.866 655.638 170.056 651.198 170.056C647.534 170.056 644.645 170.655 642.531 171.853C640.417 173.051 639.36 174.636 639.36 176.61C639.36 179.287 641.58 181.401 646.019 182.952L674.77 194.473C681.887 197.292 687.489 200.815 691.576 205.043C695.663 209.271 697.707 214.556 697.707 220.898C697.707 226.677 695.734 232.138 691.788 237.282C687.771 242.497 682.31 246.725 675.404 249.966C668.498 253.208 660.676 254.829 651.938 254.829ZM540.001 254.829C530.065 254.829 521.291 253.49 513.681 250.812C506.07 248.205 500.151 244.223 495.923 238.868C491.625 233.583 489.51 226.888 489.581 218.784H520.129C520.27 222.449 521.714 224.986 524.462 226.395C527.14 227.804 530.805 228.509 535.455 228.509C538.274 228.509 540.6 228.157 542.432 227.452C544.264 226.747 545.638 225.796 546.554 224.598C547.47 223.47 547.928 222.237 547.928 220.898C547.928 219.137 547.294 217.727 546.026 216.67C544.757 215.613 542.784 214.556 540.106 213.499L514.844 203.669C507.374 200.568 501.631 196.622 497.614 191.831C493.527 187.109 491.484 181.472 491.484 174.918C491.484 165.687 495.747 158.217 504.273 152.51C512.8 146.802 524.462 143.948 539.261 143.948C553.143 143.948 563.819 147.189 571.288 153.672C578.758 160.155 582.528 168.4 582.598 178.406H551.628C551.628 176.151 550.676 174.178 548.774 172.487C546.871 170.866 543.7 170.056 539.261 170.056C535.596 170.056 532.707 170.655 530.593 171.853C528.479 173.051 527.422 174.636 527.422 176.61C527.422 179.287 529.642 181.401 534.081 182.952L562.832 194.473C569.949 197.292 575.551 200.815 579.639 205.043C583.726 209.271 585.769 214.556 585.769 220.898C585.769 226.677 583.796 232.138 579.85 237.282C575.833 242.497 570.372 246.725 563.466 249.966C556.56 253.208 548.739 254.829 540.001 254.829ZM349.387 202.929L376.683 212.548C378.375 207.897 380.383 204.515 382.708 202.401C384.963 200.287 387.641 199.23 390.742 199.23C392.641 199.23 393.562 199.529 395.405 200.129C395.614 200.197 395.835 200.269 396.07 200.345C396.224 200.394 396.384 200.445 396.551 200.498C399.229 201.414 402.858 202.577 407.438 203.986C412.512 206.171 416.881 207.686 420.545 208.531C424.139 209.447 427.204 209.905 429.741 209.905C437.704 209.905 449.379 207.192 455.228 201.766C461.077 196.34 467.176 188.483 470.348 178.195L444.43 166.885C442.879 170.479 440.977 173.227 438.722 175.13C436.396 177.103 433.789 178.089 430.9 178.089C429.089 178.089 428.104 177.775 426.135 177.145C425.728 177.015 425.28 176.872 424.773 176.715C421.743 175.799 418.044 174.495 413.675 172.804C408.742 170.902 404.338 169.422 400.462 168.365C396.516 167.378 392.711 166.885 389.046 166.885C380.238 166.885 367.043 170.197 362.181 176.821C357.319 183.515 351.994 192.218 349.387 202.929ZM308.083 133.906C301.671 133.906 296.738 132.25 293.285 128.938C289.762 125.697 288 121.081 288 115.091C288 109.242 289.762 104.556 293.285 101.033C296.738 97.58 301.671 95.8536 308.083 95.8536C314.284 95.8536 319.182 97.58 322.776 101.033C326.369 104.556 328.166 109.242 328.166 115.091C328.166 121.081 326.369 125.697 322.776 128.938C319.182 132.25 314.284 133.906 308.083 133.906ZM291.171 251.446V146.696H324.995V251.446H291.171ZM219.429 254.828C209.775 254.828 200.931 252.82 192.898 248.803C184.794 244.857 178.347 238.797 173.555 230.623C168.693 222.519 166.261 212.196 166.261 199.652C166.261 186.686 168.693 176.116 173.555 167.942C178.347 159.768 184.794 153.707 192.898 149.761C200.931 145.886 209.775 143.948 219.429 143.948C228.872 143.948 237.575 145.886 245.537 149.761C253.5 153.707 259.913 159.768 264.775 167.942C269.567 176.116 271.963 186.686 271.963 199.652C271.963 212.196 269.567 222.519 264.775 230.623C259.913 238.797 253.5 244.857 245.537 248.803C237.575 252.82 228.872 254.828 219.429 254.828ZM227.674 222.801C224.573 224.492 221.402 225.338 218.161 225.338C213.298 225.338 209.07 223.4 205.477 219.524C201.812 215.648 199.98 209.025 199.98 199.652C199.98 193.169 201.037 187.99 203.151 184.114C205.195 180.309 207.837 177.561 211.079 175.87C214.25 174.178 217.456 173.333 220.698 173.333C225.56 173.333 229.717 175.306 233.17 179.252C236.623 183.198 238.35 189.998 238.35 199.652C238.35 205.853 237.328 210.821 235.284 214.556C233.241 218.361 230.704 221.11 227.674 222.801ZM898.454 111.654V193.82C893.608 191.027 884.917 188.558 878.944 189.094C856.919 191.071 849.315 206.532 849.315 224.685C849.315 242.838 863.776 254.829 878.944 254.829C901.659 254.829 916.304 240.822 914.882 211.301V144.51L947.738 166.971V134.114L914.882 111.654H898.454Z" fill="black"/>
</svg>`
var scrollReveal = document.createElement('script');
scrollReveal.src = 'https://unpkg.com/scrollreveal';
document.head.appendChild(scrollReveal);
var modernContext = document.createElement('script');
modernContext.src = 'http://localhost:4000/js/context.js';
document.head.appendChild(modernContext);



function initializeContentWarnings(){
    contentWarning = $('[data-content-warning]').last().attr('data-content-warning');
    contentWarningType = $('[data-content-warning-type]').last().attr('data-content-warning-type');
    if( $('[data-content-warning]').length > 0 ){
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
    <a class="tippy qd-t-chat" data-tippy-content="Chat Format" onclick="chatToggle();"><span class="material-icons-round">question_answer</span></a>
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
    .after(`<div class="q-toolbar bottom">` + logo + toolbar + `</div>`);
    if( $('[data-content-warning]').length > 0 ){
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
    }
    $('.unhide').click(function () {
        unhideDialogue();
        $('.q-dialogue-warning').addClass('hidden');
        setTimeout(function () {
            $('.q-dialogue-warning').hide();
        }, 5000);
    });

    const context = new Context(".qd-t-chat", [
        {
            type: "item",
            label: "Custom Options",
        },
        {
            type: "item",
            label: "Display Images",
            callback: () => {
                imageToggle();
                $('body').toggleClass('q-dialogue-custom');
            }
        },
        {
            type: "item",
            label: "Bubble Format",
            callback: () => {
                bubbleToggle();
                $('body').toggleClass('q-dialogue-custom');
            }
        },
    ]);



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

function initializeSiteConfig(mainCallback){

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
                    mainCallback();
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
    else{
        mainCallback();
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
        $('.q-dialogue').css('height','');
    });

}

function tagDialogueOld(){

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
            try{
                iconElement.append('<img src="' + icons.find(x => x.commonname === commonname).filename + '">');
            }catch(e){
                console.log(e);
            }
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

function tagDialogue(){
    var cache = $(`<div class="qd-exclude"></div>`);
    var dialogue = $(`<div></div>`);
    $('.q-dialogue').append(`<div class="end"></div>`);
    chat = $('.q-dialogue').children();
    chat.each( function() {
        console.log($(this).html());
        var newUnit =
            $(this).html().startsWith("<b") ||
            $(this).html().startsWith("<strong") ||
            $(this).hasClass('end'),
            rich =
            $(this).prop('outerHTML').startsWith("<div") ||
            $(this).prop('outerHTML').startsWith("<blockquote"),
            block =
            $(this).prop('outerHTML').startsWith("<blockquote");
        if( newUnit || rich ){
            if(newUnit){
                var name = $(this).children().first().text().replace(":", "");
                $(this).children().first().remove();
            }
            if( !$(cache).hasClass('qd-exclude') ){
                var unit = $('<div></div>').addClass('qd-unit');
                if( $(cache).is("[character]") ){
                    var thisName = $(cache).attr('character');
                    var iconFile = "";
                    try{
                        iconFile = icons.find(x => x.commonname === thisName).filename;
                    }catch(e){
                        iconFile = `https://r.tsukina.ga/i/default/Icon.png`;
                    }
                    $(unit).append( $('<img></img>').addClass('qd-identifier').attr(`src`, iconFile) );
                    $(unit).append( $('<span></span>').addClass('qd-identifier').text(thisName) );
                }
                $(unit).append(cache);
                $(dialogue).append(unit);
            }

            if( newUnit ) {
                cache = $(`<div></div>`).addClass(`qd-content qd-lines`);
                $(cache).attr('character', name)
                $(cache).append(`<p>` + $(this).html() + `</p>`);
            } else {
                cache = $(`<div></div>`).addClass(`qd-content qd-rich`);
                $(cache).append($(this).html());
                if(block){
                    $(cache).addClass('qd-block');
                    $(cache).children().each(function() {
                        if($(this).text().toLowerCase().startsWith("location")){
                            $(this).prepend(`<span class="material-icons-round">place</span>`)
                            .wrap('<div></div>').parent().addClass('qd-location')
                            .prepend(`<span class="qd-hr left"></span><span class="qd-hr right"></span>`);
                        }
                        else if(
                            $(this).text().toLowerCase().startsWith("season") ||
                            $(this).text().toLowerCase().startsWith("time")
                        ){
                            $(this).addClass('qd-time').prepend(`<span class="material-icons-round">thermostat</span>`);
                        }
                        else {
                            $(this).wrap('<div></div>').parent().addClass('qd-narration');


                        }
                    });
                }
                console.log('.');
            }

        }
        else {
            $(cache).append(`<p>` + $(this).html() + `</p>`);
        }
        $(this).remove();

    });
    $('.q-dialogue').append( $(dialogue).html() );

    inlineNotes = $('.q-dialogue sup[data-note]');
    inlineNotes.each(function() {
        $(this)
        .html( $(this).html().replace(/[\[\]']+/g,'') )
        .attr( 'data-tippy-content', $('q[data-note="' + $(this).attr('data-note') + '"]').html() );

    });
    if(contentWarningType !== "hidden"){
        unhideDialogue();
    }
    //ScrollReveal().reveal('.qd-unit');

}




function fullscreenInitial(){
    maindialogue = $('.q-dialogue').first().html();
    $('body').prepend(`<div class="q-dialogue__background fullscreen">
    <div class="q-dialogue__wrapper fullscreen">
    <div class="q-dialogue fullscreen">` + maindialogue +
    `</div></div></div>`);
    $('.q-dialogue__background.fullscreen').click(function() {
        $('.q-dialogue__background').fadeOut(200);
        $('body').removeClass('q-dialogue-expanded');

    }).children().click(function(e) {
        return false;
    });
}

function fullscreenToggle(){
    $('.q-dialogue__background').fadeToggle(200);
    $('body').toggleClass('q-dialogue-expanded');
}

function bubbleToggle(){
    $('body').toggleClass('q-dialogue-bubble');
}

function imageToggle(){
    $('body').toggleClass('q-dialogue-image');
}

function chatToggle(){
    if( $('body').hasClass('q-dialogue-custom') ){
        $('body').removeClass('q-dialogue-image');
        $('body').removeClass('q-dialogue-bubble');
        $('body').removeClass('q-dialogue-custom');
    }
    else {
        $('body').toggleClass('q-dialogue-image');
        $('body').toggleClass('q-dialogue-bubble');

    }
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
