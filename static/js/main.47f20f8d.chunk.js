(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__VGvPs",BreadTop:"BurgerIngredient_BreadTop__3Fm_h",Seeds1:"BurgerIngredient_Seeds1__3fM86",Seeds2:"BurgerIngredient_Seeds2__3K2WR",Meat:"BurgerIngredient_Meat__3VZyG",Cheese:"BurgerIngredient_Cheese__2EKQi",Salad:"BurgerIngredient_Salad__2VVSb",Bacon:"BurgerIngredient_Bacon__1LCaZ"}},,,,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__LnUMG",Open:"SideDrawer_Open__1pWGy",Close:"SideDrawer_Close__2SaEA",Logo:"SideDrawer_Logo__3zgsx"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__2w8W6",Label:"BuildControl_Label__14Z0p",Less:"BuildControl_Less__2yb4l",More:"BuildControl_More__2A_d3"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__1XByl",Toobar:"Toolbar_Toobar__1iemj",Logo:"Toolbar_Logo__280B3",DesktopOnly:"Toolbar_DesktopOnly__1H-Bs"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__1eVc8",active:"NavigationItem_active__3i0Bk"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1lhFT",OrderButton:"BuildControls_OrderButton__2liXG",enable:"BuildControls_enable__1JPtJ"}},function(e,t,a){e.exports={Button:"Button_Button__2Ajf-",Success:"Button_Success__34PY3",Danger:"Button_Danger__2nfno"}},,,function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__d04QA"}},function(e,t,a){e.exports={navigationItems:"NavigationItems_navigationItems__2xL9y"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__Vem4f"}},function(e,t,a){e.exports={content:"Layout_content__1WYaT"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3W8DC"}},,function(e,t,a){e.exports={Burguer:"Burguer_Burguer__39_Fw"}},function(e,t,a){e.exports={Modal:"Modal_Modal__31OI7"}},,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){e.exports={App:"App_App__15LM-","App-logo":"App_App-logo__1GLNd","App-header":"App_App-header__3nnPn","App-link":"App_App-link__TRj1P"}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=(a(30),a(2)),i=a(3),s=a(5),u=a(4),d=a(6),m=(a(31),function(e){return e.children}),p=a(15),_=a.n(p),g=a(16),h=a.n(g),b=function(e){return r.a.createElement("div",{className:h.a.Logo},r.a.createElement("img",{src:_.a,alt:"app logo"}))},f=a(17),E=a.n(f),v=a(10),B=a.n(v),y=function(e){return r.a.createElement("li",{className:B.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?B.a.active:null},e.children))},w=function(){return r.a.createElement("ul",{className:E.a.navigationItems},r.a.createElement(y,{link:"/",active:!0},"Burguer Builder"),r.a.createElement(y,{link:"/"},"Checkout"))},k=a(7),O=a.n(k),C=a(18),S=a.n(C),j=function(e){return e.show?r.a.createElement("div",{className:S.a.Backdrop,onClick:e.clicked}):null},N=function(e){var t=[O.a.SideDrawer,O.a.Close];return e.open&&(t=[O.a.SideDrawer,O.a.open]),r.a.createElement(m,null,r.a.createElement(j,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:O.a.Logo},r.a.createElement(b,null)),r.a.createElement("nav",null,r.a.createElement(w,null))))},D=a(19),T=a.n(D),P=a(9),I=a.n(P),L=a(20),x=a.n(L),A=function(e){return r.a.createElement("div",{className:x.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},H=function(e){return r.a.createElement("header",{className:I.a.Toolbar},r.a.createElement(A,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:I.a.Logo},r.a.createElement(b,null)),r.a.createElement("nav",{className:I.a.DesktopOnly},r.a.createElement(w,null)))},M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!0},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(H,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(N,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:T.a.content},this.props.children))}}]),t}(n.Component),W=a(21),G=a(24),R=a(1),V=a.n(R),Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:V.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:V.a.BreadTop},r.a.createElement("div",{className:V.a.Seeds1}),r.a.createElement("div",{className:V.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:V.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:V.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:V.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:V.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),F=a(22),J=a.n(F),Z=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(G.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(Y,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add some ingredients!")),r.a.createElement("div",{className:J.a.Burguer},r.a.createElement(Y,{type:"bread-top"}),t,r.a.createElement(Y,{type:"bread-bottom"}))},z=a(11),K=a.n(z),Q=a(8),X=a.n(Q),U=function(e){return r.a.createElement("div",{className:X.a.BuildControl},r.a.createElement("div",{className:X.a.Label},e.label),r.a.createElement("button",{onClick:e.removed,className:X.a.Less,disabled:e.disabled},"Less"),r.a.createElement("button",{onClick:e.added,className:X.a.More},"More"))},$=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}],q=function(e){return r.a.createElement("div",{className:K.a.BuildControls},r.a.createElement("p",null,"Total Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),$.map((function(t){return r.a.createElement(U,{added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},key:t.label,label:t.label,disabled:e.disabled[t.type]})})),r.a.createElement("button",{type:"button",className:K.a.OrderButton,onClick:e.ordered,disabled:!e.purchasable},"ORDER NOW"))},ee=a(23),te=a.n(ee),ae=function(e){return r.a.createElement(m,null,r.a.createElement(j,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},className:te.a.Modal},e.children))},ne=a(12),re=a.n(ne),le=function(e){return r.a.createElement("button",{className:"".concat(re.a.Button," ").concat(re.a[e.btnType]),onClick:e.clicked},e.children)},oe=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"captalize"}},t,":"),e.ingredients[t])}));return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price)),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(le,{btnType:"Danger",clicked:e.purchaseCancelled},"Cancel"),r.a.createElement(le,{btnType:"Success",clicked:e.purchaseContinue},"Continue"))};function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(W.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var se={salad:.5,cheese:.4,meat:1.3,bacon:.7},ue=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=ie({},a.state.ingredients);n[e]=t;var r=se[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e],n=t>0?t-1:t,r=ie({},a.state.ingredients);r[e]=n;var l=se[e],o=a.state.totalPrice-l;a.setState({totalPrice:o,ingredients:r}),a.updatePurchaseState(r)},a.updatePurchaseState=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);a.setState({purchasable:t>0})},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelledHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("You continue!")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=ie({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(ae,{show:this.state.purchasing,modalClosed:this.purchaseCancelledHandler},r.a.createElement(oe,{ingredients:this.state.ingredients,price:this.state.totalPrice.toFixed(2),purchaseCancelled:this.purchaseCancelledHandler,purchaseContinue:this.purchaseContinueHandler})),r.a.createElement(Z,{ingredients:this.state.ingredients}),r.a.createElement(q,{price:this.state.totalPrice,ingredientRemoved:this.removeIngredientHandler,ingredientAdded:this.addIngredientHandler,purchasable:this.state.purchasable,ordered:this.purchaseHandler,disabled:e}))}}]),t}(n.Component),de=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,null,r.a.createElement(ue,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[25,1,2]]]);
//# sourceMappingURL=main.47f20f8d.chunk.js.map