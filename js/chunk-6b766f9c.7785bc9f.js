(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b766f9c"],{"057f":function(t,e,a){var r=a("fc6a"),s=a("241c").f,o={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return s(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==o.call(t)?i(t):s(r(t))}},"498a":function(t,e,a){"use strict";var r=a("23e7"),s=a("58a8").trim,o=a("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return s(this)}})},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"746f":function(t,e,a){var r=a("428f"),s=a("5135"),o=a("e538"),n=a("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});s(e,t)||n(e,t,{value:o.f(t)})}},a4d3:function(t,e,a){"use strict";var r=a("23e7"),s=a("da84"),o=a("d066"),n=a("c430"),i=a("83ab"),c=a("4930"),l=a("fdbf"),d=a("d039"),u=a("5135"),f=a("e8b5"),m=a("861d"),p=a("825a"),v=a("7b0b"),b=a("fc6a"),g=a("c04e"),h=a("5c6c"),_=a("7c73"),y=a("df75"),C=a("241c"),x=a("057f"),w=a("7418"),O=a("06cf"),j=a("9bf2"),S=a("d1e7"),P=a("9112"),$=a("6eeb"),k=a("5692"),N=a("f772"),E=a("d012"),L=a("90e3"),M=a("b622"),D=a("e538"),q=a("746f"),J=a("d44e"),F=a("69f3"),I=a("b727").forEach,T=N("hidden"),H="Symbol",Q="prototype",R=M("toPrimitive"),U=F.set,V=F.getterFor(H),W=Object[Q],z=s.Symbol,A=o("JSON","stringify"),B=O.f,G=j.f,K=x.f,X=S.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),at=k("wks"),rt=s.QObject,st=!rt||!rt[Q]||!rt[Q].findChild,ot=i&&d((function(){return 7!=_(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,a){var r=B(W,e);r&&delete W[e],G(t,e,a),r&&t!==W&&G(W,e,r)}:G,nt=function(t,e){var a=Y[t]=_(z[Q]);return U(a,{type:H,tag:t,description:e}),i||(a.description=e),a},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,a){t===W&&ct(Z,e,a),p(t);var r=g(e,!0);return p(a),u(Y,r)?(a.enumerable?(u(t,T)&&t[T][r]&&(t[T][r]=!1),a=_(a,{enumerable:h(0,!1)})):(u(t,T)||G(t,T,h(1,{})),t[T][r]=!0),ot(t,r,a)):G(t,r,a)},lt=function(t,e){p(t);var a=b(e),r=y(a).concat(pt(a));return I(r,(function(e){i&&!ut.call(a,e)||ct(t,e,a[e])})),t},dt=function(t,e){return void 0===e?_(t):lt(_(t),e)},ut=function(t){var e=g(t,!0),a=X.call(this,e);return!(this===W&&u(Y,e)&&!u(Z,e))&&(!(a||!u(this,e)||!u(Y,e)||u(this,T)&&this[T][e])||a)},ft=function(t,e){var a=b(t),r=g(e,!0);if(a!==W||!u(Y,r)||u(Z,r)){var s=B(a,r);return!s||!u(Y,r)||u(a,T)&&a[T][r]||(s.enumerable=!0),s}},mt=function(t){var e=K(b(t)),a=[];return I(e,(function(t){u(Y,t)||u(E,t)||a.push(t)})),a},pt=function(t){var e=t===W,a=K(e?Z:b(t)),r=[];return I(a,(function(t){!u(Y,t)||e&&!u(W,t)||r.push(Y[t])})),r};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),a=function(t){this===W&&a.call(Z,t),u(this,T)&&u(this[T],e)&&(this[T][e]=!1),ot(this,e,h(1,t))};return i&&st&&ot(W,e,{configurable:!0,set:a}),nt(e,t)},$(z[Q],"toString",(function(){return V(this).tag})),$(z,"withoutSetter",(function(t){return nt(L(t),t)})),S.f=ut,j.f=ct,O.f=ft,C.f=x.f=mt,w.f=pt,D.f=function(t){return nt(M(t),t)},i&&(G(z[Q],"description",{configurable:!0,get:function(){return V(this).description}}),n||$(W,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),I(y(at),(function(t){q(t)})),r({target:H,stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var a=z(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!i},{create:dt,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:mt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:d((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),A){var vt=!c||d((function(){var t=z();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,a){var r,s=[t],o=1;while(arguments.length>o)s.push(arguments[o++]);if(r=e,(m(e)||void 0!==t)&&!it(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),s[1]=e,A.apply(null,s)}})}z[Q][R]||P(z[Q],R,z[Q].valueOf),J(z,H),E[T]=!0},c8d2:function(t,e,a){var r=a("d039"),s=a("5899"),o="​᠎";t.exports=function(t){return r((function(){return!!s[t]()||o[t]()!=o||s[t].name!==t}))}},dbb4:function(t,e,a){var r=a("23e7"),s=a("83ab"),o=a("56ef"),n=a("fc6a"),i=a("06cf"),c=a("8418");r({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,a,r=n(t),s=i.f,l=o(r),d={},u=0;while(l.length>u)a=s(r,e=l[u++]),void 0!==a&&c(d,e,a);return d}})},e28c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb bg-transparent px-0 mb-7"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-topic",attrs:{to:"/cart"}},[t._v("購物車列表")])],1),a("li",{staticClass:"breadcrumb-item font-weight-bolder active",attrs:{"aria-current":"page"}},[t._v(" 建立訂單 ")])])]),a("div",{staticClass:"row mb-12"},[a("div",{staticClass:"col-md-5 mb-6"},[a("div",{staticClass:"card border mb-4"},[a("h5",{staticClass:"card-header"},[t._v("訂單明細")]),a("div",{staticClass:"card-body px-sm-5 px-3"},t._l(t.cart.carts,(function(e){return a("div",{key:e.id,staticClass:"d-flex align-items-center font-weight-bolder mb-4"},[a("img",{staticClass:"mr-xl-12 mr-md-4 mr-sm-10 mr-5",staticStyle:{width:"70px",height:"70px"},attrs:{src:e.product.imageUrl,alt:"cart-pic"}}),a("div",{staticClass:"d-flex flex-lg-row justify-content-lg-between flex-md-column flex-sm-row flex-column w-100"},[a("p",[t._v(t._s(e.product.title)+" x "+t._s(e.qty))]),a("p",{staticClass:"ml-lg-auto ml-md-0 ml-sm-10"},[t._v("$"+t._s(e.total)+"元")])])])})),0)]),a("div",{staticClass:"card border"},[a("h5",{staticClass:"card-header"},[t._v("訂單金額")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex mb-4"},[a("h5",{staticClass:"card-title mr-auto"},[t._v("商品數量")]),t.cartLength>0?a("p",{staticClass:"card-text h5"},[t._v(t._s(t.cartLength)+" 件")]):t._e()]),t.cart.total===t.cart.final_total?a("div",{staticClass:"d-flex mb-md-10 mb-0"},[a("h5",{staticClass:"card-title mr-auto"},[t._v("金額總計")]),a("p",{staticClass:"card-text text-danger h5 font-weight-bolder"},[t._v(" "+t._s(t._f("currency")(t.cart.total))+" 元 ")])]):t._e(),t.cart.coupon?a("div",{staticClass:"text-success"},[t._v(" 已套用優惠券 ")]):t._e(),t.cart.total!==t.cart.final_total?a("div",{staticClass:"d-flex mb-md-5 mb-0"},[a("h5",{staticClass:"card-title mr-auto"},[t._v("金額總計")]),a("p",{staticClass:"card-text text-danger h5 font-weight-bolder"},[t._v(" "+t._s(t._f("currency")(t.cart.total))+" 元 ")])]):t._e(),t.cart.total!==t.cart.final_total?a("div",{staticClass:"d-flex"},[a("p",{staticClass:"card-text ml-auto text-info h6"},[t._v("( 折扣 "+t._s(t._f("currency")(t.cart.total-t.cart.final_total))+" 元 )")])]):t._e(),t.cart.total!==t.cart.final_total?a("div",{staticClass:"d-flex mb-10"},[a("h5",{staticClass:"card-title mr-auto h5"},[t._v("折扣後總計")]),a("p",{staticClass:"card-text text-danger h5 font-weight-bolder"},[t._v(t._s(t._f("currency")(t.cart.final_total))+" 元")])]):t._e(),a("div",{staticClass:"input-group mt-5 mb-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",staticStyle:{height:"50px"},attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-warning font-weight-bolder py-4 px-lg-7 px-md-1",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v(" 使用優惠碼 ")])])]),a("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" 結帳時輸入優惠券代碼「 HappyCoupon 」，即可享 8 折優惠！ ")]),t._m(0)])])]),a("div",{staticClass:"col-md-7"},[a("div",{staticClass:"card border mb-5"},[a("h5",{staticClass:"card-header"},[t._v("顧客資料")]),a("div",{staticClass:"card-body"},[a("Validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6 mb-5"},[a("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("span",{staticClass:"ml-2 text-danger"},[t._v("*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:s,attrs:{name:"Email",type:"email",id:"email",placeholder:"請輸入Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"col-md-6 mb-5"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"name"}},[t._v("收件人姓名")]),a("span",{staticClass:"ml-2 text-danger"},[t._v("*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:s,attrs:{name:"收件人姓名",type:"text",id:"name",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)]),a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"telphone"}},[t._v("收件人電話")]),a("span",{staticClass:"ml-2 text-danger"},[t._v("*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:s,attrs:{name:"電話",type:"tel",id:"telphone",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])])]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[t._v("收件人地址")]),a("span",{staticClass:"ml-2 text-danger"},[t._v("*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:s,attrs:{name:"收件人地址",type:"address",id:"address",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])])]}}],null,!0)}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertext"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"usertext",cols:"20",rows:"10",placeholder:"有什麼話想告訴店家的嗎 ?"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"d-flex"},[a("button",{staticClass:"btn btn-warning w-50 ml-auto",attrs:{disabled:r,type:"submit"}},[t._v(" 送出訂單 ")])])],1)]}}])})],1)])]),t._m(1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",{staticClass:"font-weight-bolder lh-lg"},[t._v("[ 商品配送需知 ]")]),a("li",{staticClass:"text-secondary d-flex"},[a("span",{staticClass:"mr-3"},[t._v("★")]),a("p",[t._v(" 每個6吋乳酪蛋糕皆有附提袋x1、直立蠟燭x1、含刀的6入叉盤x1，若有不需要附贈的部分請備註告知。 ")])]),a("li",{staticClass:"text-secondary d-flex"},[a("span",{staticClass:"mr-3"},[t._v("★")]),a("p",[t._v(" 包裹內【不會有訂單明細、出貨單等資訊】，僅會附上DM參考，若有送禮需求顧慮也可以在訂單備註不用DM。 ")])]),a("li",{staticClass:"text-secondary d-flex mb-6"},[a("span",{staticClass:"mr-3"},[t._v("★")]),a("p",[t._v(" 若有要寄送【不同地址請分別下單】，目前無提供拆單寄送服務。 ")])]),a("li",{staticClass:"font-weight-bolder lh-lg"},[t._v("[ 退換貨資訊 ]")]),a("li",{staticClass:"text-secondary d-flex"},[a("span",{staticClass:"mr-3"},[t._v("★")]),a("p",[t._v(" 蛋糕皆為接單製作生產，如果按下【送出訂單】，即無法取消或退款。如有其他不可抗之因素，請致電客服詢問。 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"leaveModal",tabindex:"-1",role:"dialog","aria-labelledby":"leaveModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header bg-warning"},[a("h5",{staticClass:"modal-title"},[t._v("Emily Shop")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body py-8 font-weight-bolder lh-lg"},[t._v(" 尚未結帳完成，請問是否確定離開此頁 ? "),a("br"),t._v(" 若離開此頁，"),a("span",{staticClass:"text-danger"},[t._v("購物車商品將需重新選購 !")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary btn-stay",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-warning btn-leave",attrs:{type:"button"}},[t._v("確定離開")])])])])])}],o=(a("99af"),a("498a"),a("5530")),n=a("2f62"),i={data:function(){return{goNext:!1,coupon_code:"",cart:{carts:[]},cartLength:0,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},computed:Object(o["a"])({},Object(n["c"])(["isLoading","orderStep"])),methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])(["setOrderStep"])),{},{getCarts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("emily","/cart");t.$store.dispatch("updateLoading",!0),t.$http.get(e).then((function(e){t.cart=e.data.data,t.cartLength=e.data.data.carts.length,t.$store.dispatch("updateLoading",!1)}))},addCouponCode:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("emily","/coupon"),a={code:t.coupon_code.trim()};t.$store.dispatch("updateLoading",!0),t.$http.post(e,{data:a}).then((function(e){t.$store.dispatch("alertModules/updateMessage",{message:"".concat(e.data.message),status:"info"}),t.$store.dispatch("updateLoading",!1),t.getCarts()}))},createOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("emily","/order"),a=t.form;t.$store.dispatch("updateLoading",!0),t.$http.post(e,{data:a}).then((function(e){e.data.success&&(t.goNext=!0,t.$router.push("/checkout/order_paying/".concat(e.data.orderId)),t.$store.dispatch("alertModules/updateMessage",{message:"訂單建立成功",status:"info"})),t.$store.dispatch("updateLoading",!1)}))}}),created:function(){var t=this;t.setOrderStep("create"),t.getCarts()},beforeRouteLeave:function(t,e,a){var r=this;r.goNext?a():($("#leaveModal").modal("show"),$(".btn-stay").on("click",(function(){$("#leaveModal").modal("hide"),a(!1)})),$(".btn-leave").on("click",(function(){$("#leaveModal").modal("hide"),a()})))}},c=i,l=a("2877"),d=Object(l["a"])(c,r,s,!1,null,null,null);e["default"]=d.exports},e439:function(t,e,a){var r=a("23e7"),s=a("d039"),o=a("fc6a"),n=a("06cf").f,i=a("83ab"),c=s((function(){n(1)})),l=!i||c;r({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(t,e){return n(o(t),e)}})},e538:function(t,e,a){var r=a("b622");e.f=r}}]);
//# sourceMappingURL=chunk-6b766f9c.7785bc9f.js.map