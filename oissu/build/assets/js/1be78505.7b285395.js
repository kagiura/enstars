(self.webpackChunkoissu=self.webpackChunkoissu||[]).push([[514,181],{5750:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Be}});var a=n(7294),r=n(3905),o=n(6291),l=n(9416),c=n(6010),i=n(2915),s=n(3783),u=n(5537),d=n(7462),m=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(4973),h=n(3366),f=n(6742),v=n(3919),y=n(8617),g="menuLinkText_1J2g",b=["items"],k=["item"],E=["item","onItemClick","activePath","level"],_=["item","onItemClick","activePath","level"],N=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},Z=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,b);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,d.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,h.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(C,(0,d.Z)({item:t},n)):a.createElement(S,(0,d.Z)({item:t},n))}function C(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=e.level,s=(0,h.Z)(e,E),u=n.items,m=n.label,p=n.collapsible,f=n.className,v=N(n,o),y=(0,i.uR)({initialState:function(){return!!p&&(!v&&n.collapsed)}}),b=y.collapsed,k=y.setCollapsed,_=y.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:v,collapsed:b,setCollapsed:k}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":b},f)},a.createElement("a",(0,d.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&v},t[g]=!p,t)),onClick:p?function(e){e.preventDefault(),_()}:void 0,href:p?"#":void 0},s),m),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.createElement(Z,{items:u,tabIndex:b?-1:0,onItemClick:r,activePath:o,level:l+1})))}function S(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(0,h.Z)(e,_),s=t.href,u=t.label,m=t.className,p=N(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},a.createElement(f.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,v.Z)(s)&&{onClick:n},l),(0,v.Z)(s)?u:a.createElement("span",null,u,a.createElement(y.Z,null))))}var I="sidebar_15mo",x="sidebarWithHideableNavbar_267A",L="sidebarHidden_2kNb",B="sidebarLogo_3h0W",j="menu_Bmed",P="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",M="collapseSidebarButtonIcon_3E-R";function w(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(m,{className:M}))}function D(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(I,(t={},t[x]=p,t[L]=s,t))},p&&a.createElement(u.Z,{tabIndex:-1,className:B}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",j,(n={},n[P]=d,n))},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(Z,{items:o,activePath:r,level:1}))),h&&a.createElement(w,{onClick:l}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(Z,{items:n,activePath:r,onItemClick:function(){return t()},level:1}))};function R(e){return a.createElement(i.Cv,{component:F,props:e})}var O=a.memo(D),H=a.memo(R);function W(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(O,e),r&&a.createElement(H,e))}var z=n(9105),U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},V={Prism:n(7410).default,theme:U};function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},$.apply(this,arguments)}var J=/\r\n|\r|\n/,K=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},q=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},G=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=$({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=$({},n,{backgroundColor:null}),r};function Q(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var X=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Y(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?G(e.theme,e.language):void 0;return t.themeDict=n})),Y(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=$({},Q(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?$({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),Y(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),Y(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=$({},Q(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?$({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),Y(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=q(u,d.type),d.alias&&(u=q(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(J),p=m.length;c.push({types:u,content:m[0]});for(var h=1;h<p;h++)K(c),i.push(c=[]),c.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return K(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),ee=X;var te=n(7594),ne=n.n(te),ae={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},re=n(5350),oe=function(){var e=(0,i.LU)().prism,t=(0,re.Z)().isDarkTheme,n=e.theme||ae,a=e.darkTheme||n;return t?a:n},le="codeBlockContainer_K1bP",ce="codeBlockContent_hGly",ie="codeBlockTitle_eoMF",se="codeBlock_23N8",ue="copyButton_Ue-o",de="codeBlockLines_39YC",me=/{([\d,-]+)}/,pe=["js","jsBlock","jsx","python","html"],he={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},fe=["highlight-next-line","highlight-start","highlight-end"],ve=function(e){void 0===e&&(e=pe);var t=e.map((function(e){var t=he[e],n=t.start,a=t.end;return"(?:"+n+"\\s*("+fe.join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function ye(e){var t=e.children,n=e.className,r=e.metastring,o=e.title,l=(0,i.LU)().prism,s=(0,a.useState)(!1),u=s[0],m=s[1],h=(0,a.useState)(!1),f=h[0],v=h[1];(0,a.useEffect)((function(){v(!0)}),[]);var y=(0,i.bc)(r)||o,g=(0,a.useRef)(null),b=[],k=oe(),E=Array.isArray(t)?t.join(""):t;if(r&&me.test(r)){var _=r.match(me)[1];b=ne()(_).filter((function(e){return e>0}))}var N=null==n?void 0:n.replace(/language-/,"");!N&&l.defaultLanguage&&(N=l.defaultLanguage);var Z=E.replace(/\n$/,"");if(0===b.length&&void 0!==N){for(var T,C="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return ve(["js","jsBlock"]);case"jsx":case"tsx":return ve(["js","jsBlock","jsx"]);case"html":return ve(["js","jsBlock","html"]);case"python":case"py":return ve(["python"]);default:return ve()}}(N),I=E.replace(/\n$/,"").split("\n"),x=0;x<I.length;){var L=x+1,B=I[x].match(S);if(null!==B){switch(B.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":C+=L+",";break;case"highlight-start":T=L;break;case"highlight-end":C+=T+"-"+(L-1)+","}I.splice(x,1)}else x+=1}b=ne()(C),Z=I.join("\n")}var j=function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}r.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(Z),m(!0),setTimeout((function(){return m(!1)}),2e3)};return a.createElement(ee,(0,d.Z)({},V,{key:String(f),theme:k,code:Z,language:N}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,l=e.getTokenProps;return a.createElement("div",{className:le},y&&a.createElement("div",{style:n,className:ie},y),a.createElement("div",{className:(0,c.Z)(ce,N)},a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,se,"thin-scrollbar"),style:n},a.createElement("code",{className:de},r.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=o({line:e,key:t});return b.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,d.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,d.Z)({key:t},l({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{ref:g,type:"button","aria-label":(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(ue,"clean-btn"),onClick:j},u?a.createElement(p.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(p.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var ge=n(6159),be="details_1VDD";function ke(e){var t=Object.assign({},e);return a.createElement(i.PO,(0,d.Z)({},t,{className:(0,c.Z)("alert alert--info",be,t.className)}))}var Ee=["mdxType","originalType"];var _e={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,h.Z)(r,Ee));return a.createElement(e.props.originalType,o)}return e}(e)}));return a.createElement(z.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(ye,e):a.createElement("code",e)},a:function(e){return a.createElement(f.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(ye,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(ke,(0,d.Z)({},e,{summary:n}),r)},h1:(0,ge.Z)("h1"),h2:(0,ge.Z)("h2"),h3:(0,ge.Z)("h3"),h4:(0,ge.Z)("h4"),h5:(0,ge.Z)("h5"),h6:(0,ge.Z)("h6")},Ne=n(4608),Ze="backToTopButton_35hR",Te="backToTopButtonShow_18ls";function Ce(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Se=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=Ce(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||u(),n<300)r(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,Ze,(e={},e[Te]=n,e)),type:"button",onClick:function(){return s()}})},Ie=n(5977),xe={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function Le(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,h=u.pluginId,f=u.version,v=s.sidebar,y=v?u.docsSidebars[v]:void 0,g=(0,a.useState)(!1),b=g[0],k=g[1],E=(0,a.useState)(!1),_=E[0],N=E[1],Z=(0,a.useCallback)((function(){_&&N(!1),k(!b)}),[_]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,i.os)(h,f)}},a.createElement("div",{className:xe.docPage},a.createElement(Se,null),y&&a.createElement("aside",{className:(0,c.Z)(xe.docSidebarContainer,(t={},t[xe.docSidebarContainerHidden]=b,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(xe.docSidebarContainer)&&b&&N(!0)}},a.createElement(W,{key:v,sidebar:y,path:s.path,onCollapse:Z,isHidden:_}),_&&a.createElement("div",{className:xe.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},a.createElement(m,{className:xe.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(xe.docMainContainer,(n={},n[xe.docMainContainerEnhanced]=b||!y,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",xe.docItemWrapper,(o={},o[xe.docItemWrapperEnhanced]=b,o))},a.createElement(r.Zo,{components:_e},d)))))}var Be=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,Ie.LX)(r.pathname,e)}));return l?a.createElement(a.Fragment,null,a.createElement(z.Z,null,a.createElement("html",{className:n.className})),a.createElement(Le,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(Ne.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(3366),r=n(7462),o=n(7294),l=n(6010),c=n(4973),i=n(2915),s="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,a.Z)(e,d),h=(0,i.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,r.Z)({},p,{className:(0,l.Z)("anchor",(n={},n[u]=h,n[s]=!h,n)),id:m}),p.children,o.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},4608:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(9416),o=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},546:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var a=n(7462),r=n(3366),o=n(7294),l=n(6010),c=n(6742),i=n(2915),s=n(4996),u=n(3919),d="footerLogoLink_qW4Z",m=n(8465),p=n(8617),h=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,n=e.href,l=e.label,i=e.prependBaseUrlToHref,d=(0,r.Z)(e,h),m=(0,s.Z)(t),f=(0,s.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(c.Z,(0,a.Z)({className:"footer__link-item"},n?{href:i?f:n}:{to:m},d),n&&!(0,u.Z)(n)?o.createElement("span",null,l,o.createElement(p.Z,null)):l)}var v=function(e){var t=e.sources,n=e.alt;return o.createElement(m.Z,{className:"footer__logo",alt:n,sources:t})};var y=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,u=t.logo,m=void 0===u?{}:u,p={light:(0,s.Z)(m.src),dark:(0,s.Z)(m.srcDark||m.src)};return e?o.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},r&&r.length>0&&o.createElement("div",{className:"row footer__links"},r.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(f,e))}))):null)}))),(m||n)&&o.createElement("div",{className:"footer__bottom text--center"},m&&(m.src||m.srcDark)&&o.createElement("div",{className:"margin-bottom--sm"},m.href?o.createElement(c.Z,{href:m.href,className:d},o.createElement(v,{alt:m.alt,sources:p})):o.createElement(v,{alt:m.alt,sources:p})),n?o.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null}},7594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);