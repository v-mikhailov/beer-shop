(this["webpackJsonpbeer-shop"]=this["webpackJsonpbeer-shop"]||[]).push([[0],{17:function(e,a,t){e.exports=t(30)},22:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),l=t.n(r),i=(t(22),t(16)),s=t(7),o=t.n(s),m=t(14),u=t(1),f=t(5),v=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__container"},c.a.createElement("h1",{className:"title"},"Beer shop"),c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(f.a,{className:"link",to:"/"},"Home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(f.a,{className:"link",to:"/favourites"},"Favourites"))))))},E=function(e){return c.a.createElement("section",{className:"search-section"},c.a.createElement("form",{className:"form",id:"search-form",onSubmit:e.onSubmit},c.a.createElement("input",{type:"text",className:"form__input",placeholder:"Search for beer",value:e.value,onChange:e.onChange}),c.a.createElement("button",{className:"form__button",form:"search-form"},"Search")))},d=function(e){for(var a=[],t=1;t<=e.totalPages;t++)a.push(t);return c.a.createElement("ul",{className:"nav__list"},a.map((function(a){return c.a.createElement("li",{key:a,className:"nav__item"},c.a.createElement("a",{className:"link__pagination",href:"!",onClick:function(t){t.preventDefault(),e.paginate(a)}},a))})))},p=function(e){var a,t;return c.a.createElement("svg",{onClick:function(){return e.onFavClick(e.beerData)},className:"card__svg ".concat((a=e.beerData,t=e.favList,t.find((function(e){return e.id===a.id}))&&"card__svg_active")),viewBox:"0 -10 511.98685 511"},c.a.createElement("path",{d:"m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"}))},_=function(e){return e.list.map((function(a){return c.a.createElement("div",{className:"card",key:a.id},c.a.createElement("div",{className:"card__svg-container"},c.a.createElement(p,{onFavClick:e.onFavClick,beerData:a,favList:e.favBeers})),c.a.createElement("div",{className:"card__img-container"},c.a.createElement("img",{className:"card__img",src:a.image_url,alt:"#"})),c.a.createElement("div",{className:"card__text-block"},c.a.createElement("h2",{className:"card__title"},a.name),c.a.createElement("p",{className:"card__text"},a.description),c.a.createElement("ul",{className:"card__info-list"},c.a.createElement("li",{className:"card__info"},"abv: ",a.abv),c.a.createElement("li",{className:"card__info"},"ibu: ",a.ibu),c.a.createElement("li",{className:"card__info"},"ebc: ",a.ebc))))}))},h=function(e){return c.a.createElement("section",{className:"catalog"},e.isFavouritesPage&&c.a.createElement("h2",null,"Favourites"),c.a.createElement("div",{className:"catalog__container"},c.a.createElement(_,{list:e.list,onFavClick:e.onFavClick,favBeers:e.favBeers})),c.a.createElement(d,{totalPages:e.totalPages,paginate:e.paginate}))},g=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",null,"Created by Vladimir Mikhailov"),c.a.createElement("div",{className:"attr"},"Icons made by ",c.a.createElement("a",{href:"http://www.freepik.com/",title:"Freepik"},"Freepik"),", ",c.a.createElement("a",{href:"https://icon54.com/",title:"Pixel perfect"},"Pixel perfect")," from ",c.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))},b=(t(29),"https://api.punkapi.com/v2/beers"),N=function(){var e=c.a.useState([]),a=Object(u.a)(e,2),t=a[0],n=a[1],r=c.a.useState(!1),l=Object(u.a)(r,2),s=(l[0],l[1]),f=c.a.useState(!1),d=Object(u.a)(f,2),p=(d[0],d[1]),_=c.a.useState(""),N=Object(u.a)(_,2),k=N[0],w=N[1],S=c.a.useState("".concat(b)),F=Object(u.a)(S,2),C=F[0],x=F[1],O=c.a.useState(13),j=Object(u.a)(O,2),B=j[0],y=(j[1],c.a.useState([])),P=Object(u.a)(y,2),D=P[0],I=P[1],J=c.a.useCallback(Object(m.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch(C);case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,n(t),s(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),p(!0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])}))),[C]),L=function(e){localStorage.setItem("favBeersList",JSON.stringify(e))};return c.a.useEffect((function(){J()}),[J]),c.a.useEffect((function(){I(JSON.parse(localStorage.getItem("favBeersList")))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(E,{onSubmit:function(e){e.preventDefault(),x(k?"".concat(b).concat("?beer_name=").concat(k):"".concat(b))},value:k,onChange:function(e){w(e.target.value)}}),c.a.createElement(h,{list:t,paginate:function(e){x("".concat(b).concat("?page=").concat(e))},totalPages:B,onFavClick:function(e){var a=Object(i.a)(D);a.find((function(a){return a.id===e.id}))?a.splice(a.findIndex((function(a){return a.id===e.id})),1):a.push(e),I(a),L(a)},favBeers:D,isFavouritesPage:!1}),c.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.835fec49.chunk.js.map