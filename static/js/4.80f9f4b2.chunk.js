(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(67),o=a(68),i=a(81),s=a(69),l=a(82),m=a(70),u=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"processedMetas",value:function(){var e=this.props.metas;return e&&e.map(function(e){return r.a.createElement("meta",{key:e.name,name:e.name,content:e.content})})}},{key:"processedLinks",value:function(){var e=this.props.links;return e&&e.map(function(e){return r.a.createElement("link",{key:e.name,name:e.name,content:e.content})})}},{key:"render",value:function(){var e=this.props.title;return r.a.createElement(m.Helmet,null,r.a.createElement("title",null,e),this.processedMetas(),this.processedLinks())}}]),t}(r.a.PureComponent);var p=function(e){var t=e.backgroundImage,a=e.title,n=e.subtitle;return r.a.createElement("div",{className:"mastHead"},r.a.createElement("div",{className:"mastHead__wrapper",style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("h1",{className:"mastHead__wrapper__title"},a),r.a.createElement("h3",{className:"mastHead__wrapper__title"},n)))},g=a(11);var d=function(e){var t=e.title,a=e.image,n=e.content;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"card__img",src:a.src,alt:a.alt}),r.a.createElement("h4",{className:"card__title"},t),r.a.createElement("p",{className:"card__content"},n))},b=a(76),h=a.n(b),_=a(77),f=a.n(_),v=a(78),H=a.n(v),E=a(79),k=a.n(E),y=a(80),P=a.n(y),w={HomePage:{mastHead:{backgroundImage:h.a,title:"Stephanie Hong",subtitle:"Hello World"},description:"Independent developer who is passionate about learning more about programming",overlapLeftImage:{src:P.a,alt:"highlight bg"},overlapRightImage:{src:P.a,alt:"highlight bg"},cardTitle:"Highlights",cards:[{buttonType:"link",buttonRoute:"/about",title:"About Me",image:{src:f.a,alt:"About Me"},content:"Puzzle-loving, game-playing, web developing girl"},{buttonType:"link",buttonRoute:"/projects",title:"Game Projects",image:{src:H.a,alt:"Projects"},content:"Games are how I learn best!"},{buttonType:"link",buttonRoute:"/media",title:"Media",image:{src:k.a,alt:"Media"},content:"Past creative projects I designed or collaborated in"}]}};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{title:"Home Page",metas:[{name:"description",content:"Stephanie Hong: Home Page"}]}),r.a.createElement("div",{className:"home"},r.a.createElement(p,{backgroundImage:w.HomePage.mastHead.backgroundImage,title:w.HomePage.mastHead.title,subtitle:w.HomePage.mastHead.subtitle}),r.a.createElement("h4",{className:"home__description"},w.HomePage.description),r.a.createElement("div",{className:"home__cards",style:{backgroundImage:"url(".concat(P.a,")")}},r.a.createElement("div",{className:"home__cards__container"},r.a.createElement("h1",{className:"home__cards__container__title"},w.HomePage.cardTitle),w.HomePage.cards?w.HomePage.cards.map(function(e){return r.a.createElement(g.a,{buttonType:e.buttonType,classes:"home__cards__container__card",route:e.buttonRoute,key:e.buttonRoute},r.a.createElement(d,{title:e.title,image:e.image,content:e.content}))}):null))))}},76:function(e,t,a){e.exports=a.p+"static/media/javascript.27f1b2f6.png"},77:function(e,t,a){e.exports=a.p+"static/media/about-me.255657da.png"},78:function(e,t,a){e.exports=a.p+"static/media/game-controller.80be8b77.png"},79:function(e,t,a){e.exports=a.p+"static/media/media.5c3fbaf1.png"},80:function(e,t,a){e.exports=a.p+"static/media/highlight-bg.2389ba8f.png"}}]);
//# sourceMappingURL=4.80f9f4b2.chunk.js.map