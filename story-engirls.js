var imported = document.createElement('script');
imported.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.head.appendChild(imported);

var icons = document.createElement('link');
icons.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Round';
icons.rel = 'stylesheet';
document.head.appendChild(icons);

$('.page-header__top').append('<div class="story-resize-text"><a><span class="material-icons-round">text_fields</span></a><ul><li id="sf-14" onclick="storyOptionsFontSize(\'14\');">14px</li><li id="sf-16" onclick="storyOptionsFontSize(\'16\');">16px</li><li id="sf-18" onclick="storyOptionsFontSize(\'18\');">18px</li><li id="sf-21" onclick="storyOptionsFontSize(\'21\');">21px</li></ul></div>');
storyOptionsFontSize('16');

function storyOptionsFontSize(val) {
    document.documentElement.style.setProperty('--story-font-size', val + 'px');
    $('[id|="sf"]').removeClass("currentFontSize");
    $('#sf-'+val).addClass("currentFontSize");
}