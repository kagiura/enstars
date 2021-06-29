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

var renderMaximized = true;
$('body').addClass('render-maximized');

const resizeButton = document.createElement('tr');
resizeButton.setAttribute('class', 'story-options');
resizeButton.innerHTML = '<th colspan="2" class="story-resize-img">Reading Mode <a onclick="resizeImg();">Chat Mode</a></th><th colspan="2" class="story-resize-text">Text Size<a href="#small" onclick="storyOptionsSmall();">Small</a><a href="#normal" onclick="storyOptionsNormal();">Normal</a><a href="#large" onclick="storyOptionsLarge();">Large</a><a href="#huge" onclick="storyOptionsHuge();">Huge</a></th>';
$('.mw-parser-output .storyNavBar:first-child > tbody').append(resizeButton);

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

function resizeImg(){
    renderMaximized = !renderMaximized;
    console.log("Maximize Story " + renderMaximized);
    if(renderMaximized){
        $('body').removeClass('render-minimized');
        $('body').addClass('render-maximized');
        $('.story-resize-img a').text('Chat Mode');
    }
    else{
        $('body').removeClass('render-maximized');
        $('body').addClass('render-minimized');
        $('.story-resize-img a').text('Default Mode');
    }
}


function storyOptionsSmall() {
	document.documentElement.style.setProperty('--story-font-size', "14px");
}
function storyOptionsNormal() {
	document.documentElement.style.setProperty('--story-font-size', "16px");
}
function storyOptionsLarge() {
	document.documentElement.style.setProperty('--story-font-size', "18px");
}
function storyOptionsHuge() {
	document.documentElement.style.setProperty('--story-font-size', "21px");
}
