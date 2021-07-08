


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



var cssStyle = document.createElement('link');
cssStyle.href = 'https://jeaoq.github.io/enstars-wiki/story.css';
cssStyle.rel = 'stylesheet';
document.head.appendChild(cssStyle);

// A $( document ).ready() block.
$( document ).ready(function() {
    mw.loader.using('mediawiki.api', function() {

        console.log("%cSTORY SCRIPT - jeaoq / 0.2.0", "color:blue");

        $(document.querySelector('.storyNavBar')).addClass('storyTopNav');
        $(document.querySelector('.storyNavBar')).addClass('storyOptions');
        $(':not([class*="_-_Story_Index"]) .storyNavBar:first-child > tbody > tr > *:nth-child(2)').after(`

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

        $(':not([class*="_-_Story_Index"]) .storyNavBar:first-child > tbody').append(`
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
        </th>
        </tr>
        `);
        tagRenders();
        initialConfig();
        stickyInitial();

    });
});

function stickyInitial(){
    const stickyElm = document.querySelector('.storyTopNav');
    
    const observer = new IntersectionObserver( 
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      {threshold: [1]}
    );
    
    observer.observe(stickyElm);
}



function tagRenders() {
    const renders = $('img[data-image-name*="Render"]');
    renders.each(function() {
        var filename = $(this).attr('alt');
        var name = "";
        charArray.forEach(function(chName) {
            if (filename.includes(chName)) {
                name = chName;
            }
        });
        // console.log(filename + " -> " + name);
        var circleFileName = "https://ensemble-stars.fandom.com/wiki/Special:Redirect/file/"+name+" Circle.png";
        var squareFileName = "https://ensemble-stars.fandom.com/wiki/Special:Redirect/file/"+name.substr(0, name.indexOf(" "))+" ES.png";
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

function storyOptionsFontSize(val) {
	console.log('Font size = ' + val);
    document.documentElement.style.setProperty('--story-font-size', val + 'px');
    $('[id|="sf"]').removeClass("currentFontSize");
    $('#sf-'+val).addClass("currentFontSize");
    setPreference('fontSize', val);
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
    } );
}


function getPreference(param){
    var params = {
            action: 'query',
            meta: 'userinfo',
            uiprop: 'options',
            format: 'json'
        },
        api = new mw.Api();

    api.get( params ).done( function ( data ) {
    	var pref = data.query.userinfo.options['userjs-'+param];
        // console.log( pref );
    } );
}


