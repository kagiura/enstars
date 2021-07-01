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
var renderMaximized = false;

var imported = document.createElement('script');
imported.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.head.appendChild(imported);
var icons = document.createElement('link');
icons.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Round';
icons.rel = 'stylesheet';
document.head.appendChild(icons);

$('.mw-parser-output .storyNavBar:first-child > tbody > tr > *:nth-child(2)').after('<th colspan="2" class="story-resize-img"><a onclick="resizeImg();"><span class="material-icons-round">question_answer</span></a></th><th colspan="2" class="story-resize-text"><a><span class="material-icons-round">text_fields</span></a><ul><li id="sf-14" onclick="storyOptionsFontSize(\'14\');">14px</li><li id="sf-16" onclick="storyOptionsFontSize(\'16\');">16px</li><li id="sf-18" onclick="storyOptionsFontSize(\'18\');">18px</li><li id="sf-21" onclick="storyOptionsFontSize(\'21\');">21px</li></ul></th><th class="story-bookmark"><a href="#bookmark" onclick="bookmark();"><span class="material-icons-round">bookmark_border</span></a></th>');
$(document.querySelector('.storyNavBar')).addClass('storyTopNav');
tagRenders();
storyOptionsFontSize('16');


function tagRenders() {
    $('body').addClass('render-minimized');
    const renders = $('img[data-image-name*="Render"]');
    console.log("Add name labels - jeaoq");
    renders.each(function() {
        var filename = $(this).attr('alt');
        var name = "";
        charArray.forEach(function(chName) {
            if (filename.includes(chName)) {
                name = chName;
            }
        });
        console.log(filename + " -> " + name);
        var circleFileName = "https://ensemble-stars.fandom.com/wiki/Special:Redirect/file/"+name+" Circle.png";
        $(this)
        .wrap("<div class='character-render-full'></div>")
        .parent('.character-render-full')
        .attr('data-char-name', name)
        ;
        const cri = document.createElement('div');
        cri.setAttribute('class', 'character-render-icon');
        cri.setAttribute('alt', name);
        cri.innerHTML = '<img src="'+circleFileName+'">';
        $(cri).insertBefore( $(this).parent() );

    });

}

function resizeImg(){
    renderMaximized = !renderMaximized;
    console.log("Maximize Story " + renderMaximized);
    if(renderMaximized){
        $('body').removeClass('render-minimized');
        $('body').addClass('render-maximized');
        $('.story-resize-img a').html('<span class="material-icons-round">question_answer</span>');
    }
    
    else{
        $('body').removeClass('render-maximized');
        $('body').addClass('render-minimized');
        $('.story-resize-img a').html('<span class="material-icons-round">menu_book</span>');
    }
}

function storyOptionsFontSize(val) {
    document.documentElement.style.setProperty('--story-font-size', val + 'px');
    $('[id|="sf"]').removeClass("currentFontSize");
    $('#sf-'+val).addClass("currentFontSize");
}




