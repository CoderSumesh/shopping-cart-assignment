(this["webpackJsonpadobe-assignment"]=this["webpackJsonpadobe-assignment"]||[]).push([[0],{112:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),i=(t(88),t(26)),u=t(67),o=t(68),m=t(81),s=t(80),E=t(29),d=t(134),p=t(132),f=t(73),b=t(8),g=t(33),O=t(70),h=t(6),T=t(71),y=t.n(T),j=[{name:"Samsung Series 4",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:13999,display:22500},discount:37},{name:"Samsung Super 6",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:35999,display:66900},discount:46},{name:"Samsung The Frame",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:84999,display:133900},discount:36},{name:"Thomson B9 Pro",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:9999,display:16999},discount:41},{name:"LG Ultra HD",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:39990,display:79990},discount:50},{name:"Vu Ready LED TV",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:7999,display:17e3},discount:52},{name:"Koryo Android TV",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:55999,display:199990},discount:71},{name:"Micromax LED Smart",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:9999,display:27990},discount:64}],C=function(e){return{type:"SET_PAGE",payload:e}},k=function(e){return{type:"SEARCH_PRODUCT",payload:e}},N=function(e){return{type:"FILTER_PRODUCT",payload:e}},S=function(e){return{type:"FETCH_SUCCESS",payload:e}};var _={isLoading:!0,products:[],cart:[],sortType:"",searchText:"",filterValues:{min:1e3,max:1e5},currentPage:"list"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:a.payload});case"FETCH_REQUEST":return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0});case"FETCH_SUCCESS":return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1,products:a.payload});case"SEARCH_PRODUCT":return console.log(a.payload),Object(h.a)(Object(h.a)({},e),{},{searchText:a.payload});case"FILTER_PRODUCT":return Object(h.a)(Object(h.a)({},e),{},{filterValues:a.payload});case"ADD_TO_CART":var t=e.cart,n=e.products,r=t.findIndex((function(e){return e.name===a.payload}));if(r>-1)t[r].count=t[r].count+1;else{var c=n.find((function(e){return e.name===a.payload}));c.count=1,t.push(c)}return Object(h.a)(Object(h.a)({},e),{},{cart:Object(i.a)(t)});case"REMOVE_FROM_CART":var l=e.cart;return Object(h.a)(Object(h.a)({},e),{},{cart:l.filter((function(e){return e.name!==a.payload}))});case"INCREMENT_ITEM":var u=e.cart,o=u.findIndex((function(e){return e.name===a.payload}));return u[o].count=u[o].count+1,Object(h.a)(Object(h.a)({},e),{},{cart:Object(i.a)(u)});case"DECREMENT_ITEM":var m=e.cart,s=m.findIndex((function(e){return e.name===a.payload}));return m[s].count>1?m[s].count=m[s].count-1:m=m.filter((function(e){return e.name!==a.payload})),Object(h.a)(Object(h.a)({},e),{},{cart:Object(i.a)(m)});case"SORT_HIGH_LOW":return Object(h.a)(Object(h.a)({},e),{},{sortType:"SORT_HIGH_LOW"});case"SORT_LOW_HIGH":return Object(h.a)(Object(h.a)({},e),{},{sortType:"SORT_LOW_HIGH"});case"SORT_DISCOUNT":return Object(h.a)(Object(h.a)({},e),{},{sortType:"SORT_DISCOUNT"});default:return e}},v=Object(g.c)(x,Object(g.a)(O.a)),H=(t(110),t(111),t(112),t(9)),R=t(12),I=t(135),L=t(40),P=t.n(L),D=t(133),z=(t(49),Object(b.b)((function(e){return{filterValues:e.filterValues}}),(function(e){return{filterProduct:function(a){return e(N(a))}}}))((function(e){var a=e.filterValues,t=e.filterProduct,c=Object(n.useState)(a),l=Object(R.a)(c,2),i=l[0],u=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,"\u20b9",i.min),r.a.createElement(f.a,{className:"text-right"},"\u20b9",i.max)),r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(P.a,{maxValue:1e5,minValue:1e3,value:i,formatLabel:function(){return""},onChange:function(e){return u(e)}}))),r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"text-center"},"Price")),r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"text-center pt-2"},r.a.createElement(D.a,{variant:"primary",size:"md",style:{borderRadius:"23px",minWidth:"100px"},onClick:function(){t(i)}},"Apply"))))}))),w=Object(b.b)((function(e){return{filterValues:e.filterValues}}),(function(e){return{filterProduct:function(a){return e(N(a))}}}))((function(e){var a=e.handleClose,t=e.filterValues,c=e.filterProduct,l=Object(n.useState)(t),i=Object(R.a)(l,2),u=i[0],o=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,"Filter Options")),r.a.createElement(I.a.Body,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,"\u20b9",u.min),r.a.createElement(f.a,{className:"text-right"},"\u20b9",u.max)),r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(P.a,{maxValue:1e5,minValue:1e3,value:u,formatLabel:function(){return""},onChange:function(e){return o(e)}}))),r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"text-center"},"Price"))),r.a.createElement(p.a,{className:"app-modal-actions m-0"},r.a.createElement(f.a,{className:"text-center",onClick:function(){return a(!1)}},"Cancel"),r.a.createElement(f.a,{className:"text-center",onClick:function(){c(u),a(!1)}},"Apply")))})),F=Object(b.b)((function(e){return{sortType:e.sortType}}),(function(e){return{sortHighLow:function(){return e({type:"SORT_HIGH_LOW"})},sortLowHigh:function(){return e({type:"SORT_LOW_HIGH"})},sortDiscount:function(){return e({type:"SORT_DISCOUNT"})}}}))((function(e){var a=e.sortType,t=e.sortHighLow,n=e.sortLowHigh,c=e.sortDiscount;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"justify-content-start"},r.a.createElement(f.a,null,r.a.createElement("ul",{className:"sort-options"},r.a.createElement("li",null,r.a.createElement("h6",null,"Sort by")),r.a.createElement("li",{onClick:t,className:"".concat("SORT_HIGH_LOW"===a&&"active"," pl-3")},r.a.createElement("span",null,"Price -- High Low")),r.a.createElement("li",{onClick:n,className:"".concat("SORT_LOW_HIGH"===a&&"active"," pl-3")},r.a.createElement("span",null,"Price -- Low High")),r.a.createElement("li",{onClick:c,className:"".concat("SORT_DISCOUNT"===a&&"active"," pl-3")},r.a.createElement("span",null,"Discount"))))))})),V=t(136),G=Object(b.b)((function(e){return{sortType:e.sortType}}),(function(e){return{sortProduct:function(a){return e(function(e){return{type:e}}(a))}}}))((function(e){var a=e.handleClose,t=e.sortType,c=e.sortProduct,l=Object(n.useState)(t),i=Object(R.a)(l,2),u=i[0],o=i[1],m=function(e){o(e.currentTarget.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,"Sort Options")),r.a.createElement(I.a.Body,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement("div",{className:"mb-3"},r.a.createElement(V.a.Check,{name:"sort-radio",type:"radio",label:"Price -- High Low",id:"SORT_HIGH_LOW",value:"SORT_HIGH_LOW",checked:"SORT_HIGH_LOW"===u,onChange:m})),r.a.createElement("div",{className:"mb-3"},r.a.createElement(V.a.Check,{name:"sort-radio",type:"radio",label:"Price -- Low High",id:"SORT_LOW_HIGH",value:"SORT_LOW_HIGH",checked:"SORT_LOW_HIGH"===u,onChange:m})),r.a.createElement("div",{className:"mb-3"},r.a.createElement(V.a.Check,{name:"sort-radio",type:"radio",label:"Discount",id:"SORT_DISCOUNT",value:"SORT_DISCOUNT",checked:"SORT_DISCOUNT"===u,onChange:m}))))),r.a.createElement(p.a,{className:"app-modal-actions m-0"},r.a.createElement(f.a,{className:"text-center",onClick:function(){return a(!1)}},"Cancel"),r.a.createElement(f.a,{className:"text-center",onClick:function(){c(u),a(!1)}},"Apply")))})),U=t(139),W=Object(b.b)(null,(function(e){return{addToCart:function(a){return e(function(e){return{type:"ADD_TO_CART",payload:e}}(a))}}}))((function(e){var a=e.data,t=e.addToCart;return r.a.createElement(f.a,{lg:3,md:4,sm:4,xs:6},r.a.createElement(U.a,{className:"mb-2"},r.a.createElement("img",{className:"card-img-top",src:a.image,alt:a.name}),r.a.createElement(U.a.Body,null,r.a.createElement("h6",null,a.name),r.a.createElement("p",{className:"m-0"},r.a.createElement("span",null,"\u20b9",a.price.actual),"\xa0\xa0",r.a.createElement("strike",null,a.price.display),"\xa0\xa0",r.a.createElement("span",{className:"text-success"},a.discount,"% off"))),r.a.createElement(U.a.Footer,{className:"text-center"},r.a.createElement(D.a,{onClick:function(){return t(a.name)},variant:"warning",size:"sm"},"Add To Cart"))))})),q=Object(b.b)((function(e){return{isLoading:e.isLoading,products:e.products,sortType:e.sortType,searchText:e.searchText,filterValues:e.filterValues}}),(function(e){return{fetchProducts:function(){return e((function(e){e({type:"FETCH_REQUEST"}),y.a.get("https://api.jsonbin.io/b/5e8c3ad0ff9c906bdf1d5380").then((function(a){var t;t=a.success?a.items:j,e(S(t))})).catch((function(a){console.error(a),e(S(j))}))}))},setPage:function(a){return e(C(a))}}}))((function(e){var a=e.isLoading,t=e.products,c=e.fetchProducts,l=e.sortType,u=e.searchText,o=e.filterValues,m=e.setPage,s=Object(n.useState)(t),E=Object(R.a)(s,2),d=E[0],b=E[1],g=Object(n.useState)(!1),O=Object(R.a)(g,2),h=O[0],T=O[1],y=Object(n.useState)(!1),j=Object(R.a)(y,2),C=j[0],k=j[1];return Object(n.useEffect)((function(){m("list"),c()}),[]),Object(n.useEffect)((function(){var e=[];switch(l){case"SORT_HIGH_LOW":e=t.sort((function(e,a){return a.price.actual-e.price.actual}));break;case"SORT_LOW_HIGH":e=t.sort((function(e,a){return e.price.actual-a.price.actual}));break;case"SORT_DISCOUNT":e=t.sort((function(e,a){return a.discount-e.discount}));break;default:e=t}u&&(e=e.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}))),o&&o.min&&o.max&&(e=e.filter((function(e){return e.price.actual>=o.min&&e.price.actual<=o.max}))),b(Object(i.a)(e))}),[l,t,u,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{md:3,className:"d-none d-md-block"},r.a.createElement("h6",null,"Filters"),r.a.createElement(z,null)),r.a.createElement(f.a,null,r.a.createElement(p.a,{className:"d-none d-md-block"},r.a.createElement(f.a,null,r.a.createElement(F,null))),r.a.createElement(p.a,{className:"filter-sort-xs d-md-none"},r.a.createElement(f.a,{onClick:function(){return k(!0)}},r.a.createElement("i",{class:"fa fa-sort"})," Sort"),r.a.createElement(f.a,{onClick:function(){return T(!0)}},r.a.createElement("i",{class:"fa fa-filter"})," Filter")),r.a.createElement(p.a,null,a?r.a.createElement(f.a,null,"Loading...."):r.a.createElement(r.a.Fragment,null,d.length?d.map((function(e){return r.a.createElement(W,{data:e})})):r.a.createElement(f.a,{className:"text-center"},"No products available")))),h&&r.a.createElement(I.a,{show:!0,onHide:function(){return T(!1)},animation:!1},r.a.createElement(w,{handleClose:T})),C&&r.a.createElement(I.a,{show:!0,onHide:function(){return k(!1)},animation:!1},r.a.createElement(G,{handleClose:k})))})),A=Object(b.b)((function(e){return{cart:e.cart}}),(function(e){return{removeFromCart:function(a){return e({type:"REMOVE_FROM_CART",payload:a})},incrementCartItem:function(a){return e({type:"INCREMENT_ITEM",payload:a})},decrementCartItem:function(a){return e({type:"DECREMENT_ITEM",payload:a})}}}))((function(e){var a=e.cart,t=e.removeFromCart,n=e.incrementCartItem,c=e.decrementCartItem;return r.a.createElement(f.a,{sm:12},a.map((function(e){return r.a.createElement(U.a,{className:"mb-3"},r.a.createElement(U.a.Body,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{xs:4,md:3},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name})),r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement("h6",null,e.name),r.a.createElement("p",{className:"m-0"},r.a.createElement("span",null,"\u20b9",e.price.actual),"\xa0\xa0",r.a.createElement("strike",null,e.price.display),"\xa0\xa0",r.a.createElement("span",{className:"text-success"},e.discount,"% off"))),r.a.createElement(f.a,{md:6,className:"align-self-center"},r.a.createElement("div",null,r.a.createElement(D.a,{variant:"outline-dark",onClick:function(){return c(e.name)},style:{borderRadius:"50%"}},r.a.createElement("i",{className:"fa fa-minus"})),r.a.createElement(D.a,{disabled:!0,variant:"outline-dark",className:"ml-2 mr-2"},e.count),r.a.createElement(D.a,{variant:"outline-dark",onClick:function(){return n(e.name)},style:{borderRadius:"50%"}},r.a.createElement("i",{className:"fa fa-plus"})))))),r.a.createElement(f.a,{md:3,className:"align-self-center"},r.a.createElement("b",{onClick:function(){return t(e.name)},style:{cursor:"pointer"}},"REMOVE")))))))})),!a.length&&r.a.createElement("h6",{className:"text-center"},"Your cart is empty!"))})),M=Object(b.b)((function(e){return{cart:e.cart}}),(function(e){return{searchProduct:function(a){return e(k(a))}}}))((function(e){var a=function(e){var a=e.reduce((function(e,a){return e+a.count}),0),t=e.reduce((function(e,a){return e+a.price.display*a.count}),0),n=e.reduce((function(e,a){return e+a.price.actual*a.count}),0);return[a,t,n,t-n]}(e.cart),t=Object(R.a)(a,4),n=t[0],c=t[1],l=t[2],i=t[3];return r.a.createElement(U.a,null,r.a.createElement(U.a.Header,null,r.a.createElement(U.a.Title,{as:"h5"},"PRICE DETAILS")),r.a.createElement(U.a.Body,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Price (",n," Item)"),r.a.createElement(f.a,null,":"),r.a.createElement(f.a,{className:"text-right"},"\u20b9",c)),r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Discount"),r.a.createElement(f.a,null,":"),r.a.createElement(f.a,{className:"text-right"},"\u20b9",i))),r.a.createElement(U.a.Footer,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement("b",null,"Total Payable")),r.a.createElement(f.a,null,":"),r.a.createElement(f.a,{className:"text-right"},"\u20b9",l))))})),B=Object(b.b)(null,(function(e){return{setPage:function(a){return e(C(a))}}}))((function(e){var a=e.setPage;return Object(n.useEffect)((function(){a("cart")}),[]),r.a.createElement(d.a,{className:"mt-3",fluid:!0},r.a.createElement(p.a,null,r.a.createElement(f.a,{lg:8,sm:12},r.a.createElement(p.a,null,r.a.createElement(A,null))),r.a.createElement(f.a,null,r.a.createElement(M,null))))})),J=function(){return r.a.createElement(n.Suspense,{fallback:"loading"},r.a.createElement(H.d,null,r.a.createElement(H.a,{from:"/",exact:!0,to:"/list"}),r.a.createElement(H.b,{path:"/list",component:q}),r.a.createElement(H.b,{path:"/cart",component:B})))},Q=t(138),K=t(137),X=t(77),Y=Object(b.b)((function(e){return{cart:e.cart,currentPage:e.currentPage}}),(function(e){return{searchProduct:function(a){return e(k(a))}}}))((function(e){var a=e.cart,t=e.currentPage,c=e.searchProduct,l=Object(n.useState)(!1),i=Object(R.a)(l,2),u=i[0],o=i[1],m=a.reduce((function(e,a){return e+a.count}),0);return r.a.createElement(Q.a,{bg:"primary",variant:"dark"},r.a.createElement(E.b,{to:"/list"},r.a.createElement(Q.a.Brand,null,r.a.createElement("i",{className:"fa fa-star text-warning"}))),r.a.createElement(K.a,{className:"mr-auto"}),r.a.createElement(V.a,{inline:!0},u&&r.a.createElement(X.a,{type:"text",placeholder:"Search",className:"mr-sm-2 header-search",style:{width:"auto"},onChange:function(e){return c(e.currentTarget.value)}}),"list"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"fa-stack"},r.a.createElement("i",{onClick:function(){o(!u),c("")},className:"fa fa-search fa-stack-2x text-white",style:{cursor:"pointer"}})),r.a.createElement(E.b,{to:"/cart"},r.a.createElement("span",{className:"fa-stack  has-badge","data-count":m},r.a.createElement("i",{className:"fa fa-shopping-cart fa-stack-2x text-white"}))))))})),Z=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).onUpdate=function(e){n.nodes=Object(i.a)(e)},n.saveData=function(){console.log(n.nodes)},n.nodes=[],n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{store:v},r.a.createElement(E.a,{basename:"product"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"p-0"},r.a.createElement(Y,null))),r.a.createElement(p.a,{className:"app-container",style:{height:"calc(100vh - 80px)",overflowX:"auto"}},r.a.createElement(J,null)),r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"p-0"},r.a.createElement("div",{className:"bg-primary text-white text-center"},"\xa9copyright"))))))}}]),t}(n.Component);l.a.render(r.a.createElement(Z,null),document.getElementById("root"))},83:function(e,a,t){e.exports=t(130)},88:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.04ab5903.chunk.js.map