(this.webpackJsonphotdogs=this.webpackJsonphotdogs||[]).push([[0],{105:function(e,t,r){e.exports=r.p+"static/media/logo.c218e58c.png"},107:function(e,t,r){e.exports={container:"productPage_container__36GUt"}},113:function(e,t,r){e.exports=r(238)},118:function(e,t,r){},23:function(e,t,r){e.exports={header:"header_header__v9FKw",header_logo:"header_header_logo__-eDjf",header_btn:"header_header_btn__9po7R",header_crud:"header_header_crud__3wLma",header_crud_text:"header_header_crud_text__2cwWB",header_logo_wrapper:"header_header_logo_wrapper__SM7XQ",overlay:"header_overlay__1x8hJ"}},238:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(47),o=r.n(c),s=(r(118),r(17)),i=r(6),u=r.n(i),p=r(9),l="FETCH_START",d="FETCH_ERROR",m="GET_PRODUCTS_SUCCESS",h="POST_PRODUCT_SUCCESS",_="UPDATE_PRODUCT_SUCCESS",f="DELETE_PRODUCT_SUCCESS",b=function(){return{type:l}},v=function(e){return{type:d,payload:{error:e}}},g=function(e){return{type:h,payload:{obj:e}}},E=function(e,t){return{type:_,payload:{id:t,obj:e}}},w=function(e){return{type:f,payload:{id:e}}},O=r(26),y=r.n(O);y.a.defaults.baseURL="http://localhost:3001/";var x=function(){return Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/products");case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},C=function(e){return Object(p.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post("/products/",e);case 3:return r=t.sent,t.abrupt("return",r.data.product);case 7:throw t.prev=7,t.t0=t.catch(0),console.log(t.t0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},j=function(e,t){return Object(p.a)(u.a.mark((function r(){var a;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,y.a.put("/products/".concat(t),e);case 3:return a=r.sent,r.abrupt("return",a.data.product);case 7:throw r.prev=7,r.t0=r.catch(0),console.log(r.t0),new Error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))()},k=function(e){return Object(p.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.delete("/products/".concat(e));case 3:return r=t.sent,t.abrupt("return",r);case 7:throw t.prev=7,t.t0=t.catch(0),console.log(t.t0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},S=r(15),F=r(16),N=r(19),P=r(18),T=r(23),D=r.n(T),A=r(105),L=r.n(A),R=r(48),U=r(32),I=r.n(U),M=r(240),J=r(239),B=function(e){var t=e.input,r=e.type,a=e.placeholder,c=e.meta;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",Object.assign({},t,{type:r,placeholder:a})),c.error&&c.touched&&n.a.createElement("div",null,c.error))},H=function(e){Object(N.a)(r,e);var t=Object(P.a)(r);function r(){var e;Object(S.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={name:"",description:"",price:null,image:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(p.a)(u.a.mark((function t(r){var a,n,c,o,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),a=e.state,n=a.name,c=a.description,o=a.price,s=a.image,""!==n&&""!==c&&null!==o&&""!==s){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.props.postProduct({name:n,description:c,price:o,image:s});case 6:e.clearForm(),e.props.isOpen();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.clearForm=function(){e.setState({name:"",description:"",price:null,image:""})},e.correctInput=function(t){return e.props.products.map((function(e){return e.name})).includes(t)?"Such name already exists":void 0},e}return Object(F.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:I.a.form_wrapper},n.a.createElement("p",{className:I.a.form_text},"Add new hot-dog"),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement(M.a,{type:"text",component:B,placeholder:"Name",name:"name",validate:[this.correctInput],onChange:this.handleChange}),n.a.createElement("textarea",{type:"text",placeholder:"Description",name:"description",onChange:this.handleChange}),n.a.createElement("input",{type:"number",min:"1",placeholder:"Price",name:"price",onChange:this.handleChange}),n.a.createElement("input",{type:"text",placeholder:"Image",name:"image",onChange:this.handleChange}),n.a.createElement("div",{className:I.a.btn_wrapper},n.a.createElement("button",{className:I.a.form_btn,type:"reset",onClick:function(){e.props.isOpen()}},"No Thanks"),n.a.createElement("button",{className:I.a.form_btn,type:"submit"},"Add"))))}}]),r}(a.Component),Q=H=Object(J.a)({form:"create"})(H),Y=function(e){Object(N.a)(r,e);var t=Object(P.a)(r);function r(){var e;Object(S.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isOpenModal:!1},e.handleChangeModal=function(t){e.setState((function(e){return{isOpenModal:!e.isOpenModal}}))},e}return Object(F.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:D.a.header},n.a.createElement("div",{className:D.a.header_logo_wrapper},n.a.createElement("img",{className:D.a.header_logo,src:L.a,alt:"Logo"}),n.a.createElement("div",{className:D.a.header_crud},n.a.createElement("h1",{className:D.a.header_crud_text},"Crud"))),n.a.createElement("button",{className:D.a.header_btn,onClick:this.handleChangeModal},"Add hot-dog"),this.state.isOpenModal&&n.a.createElement("div",{className:D.a.overlay},n.a.createElement(Q,{isOpen:this.handleChangeModal,products:this.props.products,postProduct:this.props.postProduct})))}}]),r}(a.Component),G=r(51),V=r.n(G),W=r(27),q=r.n(W),K=r(52),X=r.n(K),$=function(e){Object(N.a)(r,e);var t=Object(P.a)(r);function r(){var e;Object(S.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={id:e.props.item.id,name:e.props.item.name,description:e.props.item.description,price:e.props.item.price,image:e.props.item.image},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.handleDelete=function(){var t=Object(p.a)(u.a.mark((function t(r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,e.props.deleteProduct(e.state.id);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(p.a)(u.a.mark((function t(r){var a,n,c,o,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),a=e.state,n=a.id,c=a.name,o=a.description,s=a.price,i=a.image,""!==c&&""!==o&&null!==s&&""!==i){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.props.updateProduct({id:n,name:c,description:o,price:s,image:i},n);case 6:e.props.handleChangeEditForm();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(F.a)(r,[{key:"render",value:function(){var e=this.state,t=e.name,r=e.description,a=e.price,c=e.image;return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",value:c,name:"image",onChange:this.handleChange}),n.a.createElement("input",{type:"text",value:t,name:"name",onChange:this.handleChange}),n.a.createElement("input",{type:"number",min:"1",value:a,name:"price",onChange:this.handleChange}),n.a.createElement("textarea",{value:r,name:"description",onChange:this.handleChange}),n.a.createElement("button",{className:X.a.editForm_btn,type:"submit"},"Update"),n.a.createElement("button",{type:"reset",className:X.a.editForm_btn,onClick:this.handleDelete},"Delete"),n.a.createElement("button",{className:X.a.editForm_btn,type:"reset",onClick:this.props.handleChangeEditForm},"Cancel"))}}]),r}(a.Component),z={deleteProduct:function(e){return function(){var t=Object(p.a)(u.a.mark((function t(r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(b()),t.prev=1,t.next=4,k(e);case 4:return t.next=6,r(w(e));case 6:t.next=13;break;case 8:throw t.prev=8,t.t0=t.catch(1),r(v(t.t0.message)),console.log(t.t0),new Error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},updateProduct:function(e,t){return function(){var r=Object(p.a)(u.a.mark((function r(a){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(b()),r.prev=1,r.next=4,j(e,t);case 4:a(E(e,t)),r.next=12;break;case 7:throw r.prev=7,r.t0=r.catch(1),a(v(r.t0.message)),console.log("error",r.t0),new Error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}()}},Z=Object(s.b)((function(e){return e}),z)($),ee=function(e){Object(N.a)(r,e);var t=Object(P.a)(r);function r(){var e;Object(S.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isOpenEditForm:!1},e.handleChangeEditForm=function(){e.setState((function(e){return{isOpenEditForm:!e.isOpenEditForm}}))},e}return Object(F.a)(r,[{key:"render",value:function(){var e=this.props.item,t=e.image,r=e.name,a=e.price,c=e.description;return n.a.createElement("li",{className:q.a.products_list_item},n.a.createElement("img",{className:q.a.products_list_item_img,src:t,alt:"hot-dog"}),this.state.isOpenEditForm?n.a.createElement(Z,{handleChangeEditForm:this.handleChangeEditForm,item:this.props.item}):n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:q.a.products_list_item_title},r),n.a.createElement("p",{className:q.a.products_list_item_price},a," $"),n.a.createElement("p",{className:q.a.products_list_item_description},c),n.a.createElement("button",{className:q.a.products_list_item_btn,onClick:this.handleChangeEditForm},"Edit")))}}]),r}(a.Component),te=function(e){Object(N.a)(r,e);var t=Object(P.a)(r);function r(){var e;Object(S.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(F.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:V.a.products_wrapper},n.a.createElement("h2",{className:V.a.products_title},"All hot-dogs"),n.a.createElement("ul",{className:V.a.products_list},this.props.products&&this.props.products.sort((function(e,t){return e.id-t.id})).map((function(e){return n.a.createElement(ee,{key:e.id,item:e})}))))}}]),r}(a.Component),re=r(107),ae=r.n(re),ne={getProducts:function(){return function(){var e=Object(p.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b()),e.prev=1,e.next=4,x();case 4:r=e.sent,t((a=r.data.products,{type:m,payload:{value:a}})),e.next=13;break;case 8:throw e.prev=8,e.t0=e.catch(1),t(v(e.t0.message)),console.log("error",e.t0),new Error(e.t0);case 13:case"end":return e.stop()}var a}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},postProduct:function(e){return function(){var t=Object(p.a)(u.a.mark((function t(r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(b()),t.prev=1,t.next=4,C(e);case 4:a=t.sent,r(g(a)),t.next=13;break;case 8:throw t.prev=8,t.t0=t.catch(1),r(v(t.t0.message)),console.log("error",t.t0),new Error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},ce=Object(s.b)((function(e){return e}),ne)((function(e){var t=e.products,r=e.postProduct,c=e.getProducts;return Object(a.useEffect)((function(){c()}),[c,t.length]),n.a.createElement("div",{className:ae.a.container},n.a.createElement(Y,{products:t,postProduct:r}),n.a.createElement(te,{products:t}))})),oe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ce,null))},se=r(111),ie=r(7),ue=r(108),pe=r(109),le=r(73),de=r(241),me=Object(ie.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=t.type,a=t.payload;switch(r){case m:return a.value;case h:return[].concat(Object(le.a)(e),[a.obj]);case _:return[].concat(Object(le.a)(e.filter((function(e){return a.id!==e.id}))),[a.obj]);case f:return e.filter((function(e){return a.id!==e.id}));default:return e}},form:de.a}),he=Object(ie.createStore)(me,Object(ue.composeWithDevTools)(Object(ie.applyMiddleware)(pe.a)));o.a.render(n.a.createElement(s.a,{store:he},n.a.createElement(se.a,null,n.a.createElement(oe,null))),document.getElementById("root"))},27:function(e,t,r){e.exports={products_list_item:"productsListItem_products_list_item__3stdM",products_list_item_img:"productsListItem_products_list_item_img__27Jf0",products_list_item_title:"productsListItem_products_list_item_title__a1TpS",products_list_item_price:"productsListItem_products_list_item_price__2Oyfy",products_list_item_description:"productsListItem_products_list_item_description__1ml99",products_list_item_btn:"productsListItem_products_list_item_btn__3UtRi"}},32:function(e,t,r){e.exports={form_wrapper:"createForm_form_wrapper__AnRvr",form_text:"createForm_form_text__3p0vT",form_btn:"createForm_form_btn__3Q_yt",btn_wrapper:"createForm_btn_wrapper__3V08Y"}},51:function(e,t,r){e.exports={products_wrapper:"productsList_products_wrapper__hBH8x",products_title:"productsList_products_title__Vi6ym",products_list:"productsList_products_list__2ApbQ"}},52:function(e,t,r){e.exports={editForm_btn:"editForm_editForm_btn__YT0Yq"}}},[[113,1,2]]]);
//# sourceMappingURL=main.32205c46.chunk.js.map