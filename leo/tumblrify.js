var jQ = document.createElement('script');
jQ.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.head.appendChild(jQ);
var tumblrifyCssStyle = document.createElement('link');
tumblrifyCssStyle.href = 'https://jeaoq.github.io/enstars-wiki/tumblrify.css';
tumblrifyCssStyle.rel = 'stylesheet';
document.head.appendChild(tumblrifyCssStyle);

function addTumblrButton(){
    $('body').addClass('tumblrify-page');
    $('table').each(function(i) {
        $(this).attr('id', 'id'+(i+1));
        $(this).children().prepend("<tr><th style=\"padding: 0px;\"><button type=\"button\" onclick=\"tumblrify('id" + (i+1) + "');\">Tumblrify this table</button></th></tr>");
    });
}

function tumblrify(thisTable) {

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
    $('#'+thisTable).addClass('tumblrify');
    var renders = $('#'+ thisTable +' img[data-image-name*="Render"]');
    console.log("Tumblrify - github/jeaoq/enstars-wiki");
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
        var squareFileName = "https://ensemble-stars.fandom.com/wiki/Special:Redirect/file/"+name.substr(0, name.indexOf(" "))+" ES.png";
        if(name.substr(0, name.indexOf(" ")) === ""){
            squareFileName = "https://ensemble-stars.fandom.com/wiki/Special:Redirect/file/"+name+" ES.png";
        }
        $(this)
        .wrap("<div class='character-render-full'></div>")
        .parent('.character-render-full')
        .attr('data-char-name', name)
        ;
        const cri = document.createElement('div');
        cri.setAttribute('class', 'character-render-icon');
        cri.setAttribute('alt', name);
        cri.setAttribute('username', name.replace(/\s/g, '').toLowerCase());
        cri.innerHTML = '<img src="'+squareFileName+'">';
        $(cri).insertBefore( $(this).parent() );
        var cell = $(this).parent().parent().parent().parent();
        var attr = cell.attr('alt');
        if(typeof attr !== 'undefined' && attr !== false){
            cell.attr('alt', attr + ' & ' + name);
        } else {
            cell.attr('alt', name);
        }

        var colorClass = 'pi-theme-' + name.substr(0, name.indexOf(" ")).toLowerCase() + '-color'
        cell.parent().addClass(colorClass);
    });

}
