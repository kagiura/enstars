var bookmarkLimit = 100;
var stylesheet = this.document.createElement('link');
stylesheet.setAttribute('rel', 'stylesheet');
stylesheet.setAttribute('type', 'text/css');
stylesheet.setAttribute('href', 'https://jeaoq.github.io/enstars-wiki/bookmarks-sidebar.css');
document.head.appendChild(stylesheet);

const username = mw.config.get("wgUserName");
console.log("Logged in as "+username);
if(username !== null){
	mw.loader.using('mediawiki.api', function() {
		checkUserBookmarks();
		bookmarkInitial();
	});
}

function checkUserBookmarks() {
	console.log("checking BM");
	new mw.Api().get( {
	    action: "query",
	    titles: [ 'User:' + username + '/Bookmarks'],
	}).then( function( ret ) {
	    $.each( ret.query.pages, function() {
	        if ( this.missing !== "" ) {
	        	
	        } else {
	        	console.log("Creating BM");
	          new mw.Api().create( 'User:' + username + '/Bookmarks',
				    { summary: 'Auto-create user\'s bookmarks page' },
				    ''
				);
	        }
	    } );
	});
}



function bookmarkInitial() {
	console.log('bookmarkInitial');
	mw.loader.using('mediawiki.api', function() {
		const params = {
			action: 'parse',
			page: 'User:'+ username + '/Bookmarks',
	        prop: 'wikitext',
			format: 'json'
		};
		const api = new mw.Api();
		
		api.get(params).done(function (data) {
			console.log(data.parse.wikitext['*']);
			var str = data.parse.wikitext['*'];
			var bookmarks = str.substring(str.indexOf("* ") + 2).split('\n* ');
			console.log("bookmarks:");
			console.log(bookmarks);
			//    /\*\s*\n/g
			var latestBookmarks;
			if(bookmarks.length > 1){
				 latestBookmarks = ('* ' + bookmarks.slice(Math.max(bookmarks.length - bookmarkLimit, 1)).join('\n* ')).replace(/\* \[\[(.*)\]\]/g, '<li><a href="/wiki/$1">$1</a><a href="#removeBookmark" onclick="removeBookmark(\'$1\');">X</a></li>') + '<li><a href="/Special:MyPage/Bookmarks">All Bookmarks</a></li>';
			} else {
				latestBookmarks = "Start bookmarking pages by clicking the \"Bookmark this page\" button!";
			}
			
			console.log(latestBookmarks);
			$("#rail-bookmarks").remove();
			$("#WikiaRail").append('<section id="rail-bookmarks" class="rail-module bookmarks"><h2 class="rail-module__header has-icon">Bookmarks</h2><ul class="rail-module__list is-condensed-list"><li><a href="#bookmark" onclick="bookmark();">Bookmark this page</a></li>' + latestBookmarks + '</ul><a onclick="expandBookmarks();">Expand</div></section>');
			if (bookmarks.indexOf('[[' + mw.config.get("wgPageName") + ']]') > -1){
				$('[href="#bookmark"]').addClass('bookmarked');
	        	$('[href="#bookmark"]').text('Remove Bookmark');
	        	$('body').addClass('pageBookmarked');
			} else {
				$('[href="#bookmark"]').text('Bookmark this page');
	        	$('body').removeClass('pageBookmarked');
			}
			
			if( $('#rail-bookmarks ul li').length >= 12 ){
				$('#rail-bookmarks').addClass('scrollable');
			}
		});
	});
}



function bookmark(){
	console.log('bookmark');
	mw.loader.using('mediawiki.api', function() {
		toggleBM('[[' + mw.config.get("wgPageName") + ']]')
	});
	
}

function toggleBM (page){
	console.log('toggleBM');
	mw.loader.using('mediawiki.api', function() {
		new mw.Api()
		    .edit( 'User:'+ username + '/Bookmarks', function ( revision ) {
		    	var str = revision.content;
				var bookmarks = str.substring(str.indexOf("* ") + 2).split('\n* ');
			    if (bookmarks.indexOf(page) === -1) {
			        bookmarks.push(page);
			    } else {
			        bookmarks.splice(bookmarks.indexOf(page), 1);
			    }
		    	console.log(bookmarks);
		        return '* ' + bookmarks.join('\n* ');
		    } )
		    .then( function () {
		        console.log( 'Saved!' );
		        bookmarkInitial();
		    } );
	});
}
{
	mw.loader.using('mediawiki.api', function () {
		new mw.Api().edit('User:Jeaoq/SandboxJS', function (revision) {
			return {
			text: 'hello',
			summary:
			'Replace "foo" with "bar".',
			assert: 'bot',
			minor: !0
			};
		}).then(function () {
			console.log('Saved!');
		});
	});
}
function removeBookmark(page){
	console.log('removeBookmark');
	if (confirm("Remove " + page + "?")) {
		toggleBM('[[' + page + ']]');
	}
}

function expandBookmarks(){
	$('#rail-bookmarks').toggleClass('bookmarks-expanded');
	if($('#rail-bookmarks').hasClass('bookmarks-expanded')){
		$('#rail-bookmarks > a').text('Collapse');
	} else {
		$('#rail-bookmarks > a').text('Expand');
	}
}
