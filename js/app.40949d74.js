(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},s=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"4d1c":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("ffc1"),i("551c");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view",{attrs:{name:"header"}}),i("main",[i("fade-transition",{attrs:{origin:"center",mode:"out-in",duration:250}},[i("router-view")],1)],1),i("router-view",{attrs:{name:"footer"}})],1)},s=[],r=i("7c76"),o={components:{FadeTransition:r["a"]}},l=o,c=i("2877"),u=Object(c["a"])(l,a,s,!1,null,null,null),d=u.exports,p=i("8c4f"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"landing"},[i("div",{staticClass:"brand-description text-center",class:{"demo-running":e.demoRunning}},[i("Particles",{attrs:{id:"particles",options:{background:{color:{value:"#ffffff"}},fpsLimit:30,interactivity:{modes:{bubble:{distance:400,duration:5,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:3}}},particles:{color:{value:e.scssVariables["primaryColor"]},links:{color:e.scssVariables["primaryColor"],distance:150,enable:!0,opacity:.3,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.3},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}}),i("div",{staticClass:"vertical-align"},[e._m(0),i("p",{staticClass:"motto"},[e._v("Aliatul tău în securitate")]),i("div",{staticClass:"description"},[i("p",[e._v("\n                    Dacă și pe tine te îngrijorează un posibil atac în\n                    mediul online, dar ai vrea să te concentrezi pe ce e mai\n                    important pentru tine și organizația ta, noi suntem aici\n                    să te ajutăm.\n                ")]),i("p",[e._v("\n                    Misiunea noastră este să ajutăm organizațiile mici și\n                    mijlocii să își îmbunătățească postura de securitate.\n                ")]),i("form",{staticClass:"form-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Adresa ta de email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),i("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:e.sendEmail}},[e._v("\n                        Află când lansăm!\n                    ")])])])])],1),i("div",{staticClass:"demo",class:{"demo-running":""!=e.demoRunning}},[i("div",{staticClass:"demo-container vertical-align"},[""==e.demoRunning?i("base-button",{staticClass:"goto-demo",attrs:{type:"default"},on:{click:e.startDemo}},[e._v("\n                Vezi cum va funcționa"),i("br"),e._v("\n                întregul proces\n                "),i("i",{staticClass:"fa fa-arrow-right"})]):e._e(),i("div",{staticClass:"custom-slider-container",class:{"demo-loading-finished":"running"==e.demoRunning}},[i("div",{staticClass:"navigation-icons"},[i("i",{staticClass:"fa fa-chevron-up slider-controller",on:{click:e.onArrowUp}}),e._l(e.navigationButtons,(function(t,n){return i("i",{key:n,class:"fa "+t.icon+" "+t.class,on:{click:function(t){return e.slideTo(n)}}})})),i("i",{staticClass:"fa fa-chevron-down slider-controller",on:{click:e.onArrowDown}})],2),i("div",[i("slider",{ref:"slider",attrs:{options:e.options},on:{slide:e.slide}},[i("slideritem",[i("div",{staticClass:"vertical-align"},[i("h3",[e._v("\n                                    Verificarea Automată a "),i("wbr"),e._v("Prezenței\n                                    Online\n                                ")]),i("p",[e._v("\n                                    Pentru a face procesul mai rapid și mai\n                                    ușor, folosim\n                                    "),i("b",[e._v("informații publice")]),e._v(" pentru a\n                                    "),i("b",[e._v("identifica automat")]),e._v(" serviciile\n                                    organizației tale (de exemplu: servere\n                                    web și de email). Toate informațiile\n                                    găsite îți vor fi afișate pentru a le\n                                    putea valida, și, eventual, modifica.\n                                    Tot în această etapă de configurare a\n                                    platformei, îți vom cere și alte detalii\n                                    pentru a îți putea oferii o\n                                    "),i("b",[e._v("imagine de ansamblu asupra\n                                        infrastructurii")]),e._v("\n                                    organizației tale.\n                                ")])])]),i("slideritem",[i("div",{staticClass:"vertical-align"},[i("h3",[e._v("\n                                    Estimarea Pierderilor în "),i("wbr"),e._v("Caz de\n                                    Atac\n                                ")]),i("p",[e._v("\n                                    Dacă te-ai întrebat vreodată ce impact\n                                    ar avea un atac cibernetic asupra\n                                    organizației tale, te putem ajuta cu o\n                                    estimare. Folosim datele pe care deja le\n                                    avem din pasul anterior, împreună cu\n                                    altele specifice (numărul de membrii și\n                                    veniturile anuale), pentru a genera\n                                    diferite\n                                    "),i("b",[e._v("scenarii posibile de atac")]),e._v("\n                                    ("),i("i",[e._v("ransomware")]),e._v(", "),i("i",[e._v("phishing")]),e._v(",\n                                    etc.) de pe urma cărora organizația ta\n                                    ar putea avea de suferit. Înarmat cu\n                                    aceste informații, poți lua decizii\n                                    privind prioritățile organizației, cum\n                                    ar fi unde și cât ar fi cazul să\n                                    investești pentru a o proteja mai bine.\n                                ")])])]),i("slideritem",[i("div",{staticClass:"vertical-align"},[i("h3",[e._v("Recomandarea de "),i("wbr"),e._v("Soluții")]),i("p",[e._v("\n                                    Vom "),i("b",[e._v("modela infrastructura")]),e._v(" ta\n                                    digitală pe baza informațiilor colectate\n                                    și furnizate: dispozitive pe care le\n                                    deții (laptop-uri, routere, etc.),\n                                    servicii pe care le folosești și soluții\n                                    de securitate cu care te protejezi în\n                                    prezent (antivirus, "),i("i",[e._v("firewall")]),e._v(",\n                                    etc.). Cu ajutorul acestui model, putem\n                                    să îți arătăm "),i("b",[e._v("în ce stadiu")]),e._v(" se\n                                    află organizația ta și\n                                    "),i("b",[e._v("unde ar putea ajunge")]),e._v(" cu ajutorul\n                                    unor soluții de securitate."),i("br"),e._v("Din\n                                    aceste recomandări, poți să alegi în\n                                    funcție de prioritățile tale și să treci\n                                    la pasul următor. Vei avea acces mereu\n                                    la informațiile și recomandările\n                                    oferite, salvăm informațiile pentru\n                                    tine.\n                                ")])])]),i("slideritem",[i("div",{staticClass:"vertical-align"},[i("h3",[e._v("\n                                    Instalarea Automată de "),i("wbr"),e._v("Soluții\n                                ")]),i("p",[e._v("\n                                    Din panoul de control, vei putea începe\n                                    instalarea soluțiilor de securitate.\n                                    Pentru fiecare dintre acestea, îți vom\n                                    "),i("b",[e._v("detalia de ce sunt necesare și ce\n                                        modificări")]),e._v("\n                                    trebuiesc efectuate în infrastructura\n                                    ta. Vei avea posibilitatea de a genera\n                                    fie un "),i("b",[e._v("pachet")]),e._v(" pe care îl poți\n                                    instala chiar tu, sau ne putem ocupa noi\n                                    "),i("b",[e._v("în mod automatizat")]),e._v(", dacă ne vei\n                                    oferi detaliile de autentificare pentru\n                                    a putea face acest lucru.\n                                ")])])]),i("slideritem",[i("div",{staticClass:"vertical-align"},[i("h3",[e._v("Configurarea "),i("wbr"),e._v("Soluțiilor")]),i("p",[e._v("\n                                    Odată setate și verificate, ne asigurăm\n                                    că soluțiile de securitate funcționează\n                                    corespunzător. Iar, pentru că vrem să ne\n                                    asigurăm că soluțiile propuse sunt mereu\n                                    la standarde înalte, odată ce intervin\n                                    schimbări în infrastructura ta sau dacă\n                                    nevoile de securitate se vor schimba,\n                                    vei avea mereu\n                                    "),i("b",[e._v("posibilitatea de a modifica\n                                        setările")]),e._v(".\n                                ")])])]),i("div",{attrs:{slot:"loading"},slot:"loading"},[e._v("loading...")])],1)],1)])],1),i("div",{attrs:{id:"end"}})])])},m=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:"img/logo.svg"}}),i("b",[e._v("MutableSecurity")])])}],h=i("b190"),g=i("998b"),v=i.n(g),b={components:{slider:h["slider"],slideritem:h["slideritem"]},methods:{startDemo:function(){this.demoRunning="loading",this.$scrollTo("#end",1e3,{easing:"ease",cancelable:!1}),setTimeout(function(){this.demoRunning="running",this.$refs.slider.$emit("autoplayStart",3e3)}.bind(this),1e3)},onArrowUp:function(e){this.$refs.slider.$emit("autoplayStop"),this.$refs["slider"]&&this.$refs["slider"].$emit("slidePre")},onArrowDown:function(e){this.$refs.slider.$emit("autoplayStop"),this.$refs["slider"]&&this.$refs["slider"].$emit("slideNext")},slideTo:function(e){this.$refs.slider.$emit("autoplayStop"),this.$refs["slider"]&&this.$refs["slider"].$emit("slideTo",e)},slide:function(e){for(var t=0;t<this.navigationButtons.length;t++)this.navigationButtons[t].class=t<=e.currentPage?"completed":"no"},sendEmail:function(){var e={email:this.email};fetch("https://europe-central2-mutablesecurity.cloudfunctions.net/enter_waiting_list",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e),redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},data:function(){return{demoRunning:"",navigationButtons:[{icon:"fa-search",class:""},{icon:"fa-fire",class:""},{icon:"fa-th",class:""},{icon:"fa-shield",class:""},{icon:"fa-sliders",class:""}],options:{currentPage:0,direction:"vertical",itemAnimation:!0,centeredSlides:!0,loopedSlides:2,slidesToScroll:1},email:"",scssVariables:v.a}}},y=b,_=Object(c["a"])(y,f,m,!1,null,null,null),C=_.exports;n["a"].use(p["a"]);var w=new p["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"landing",components:{default:C}}],scrollBehavior:function(e){return e.hash?{selector:e.hash}:{x:0,y:0}}}),O=(i("4d1c"),i("d5a0"),i("a4d4"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(e.tag,{tag:"component",staticClass:"badge",class:["badge-"+e.type,e.rounded?"badge-pill":"",e.circle&&"badge-circle"]},[e._t("default",(function(){return[e.icon?i("i",{class:e.icon}):e._e()]}))],2)}),P=[],S={name:"badge",props:{tag:{type:String,default:"span",description:"Html tag to use for the badge."},rounded:{type:Boolean,default:!1,description:"Whether badge is of pill type"},circle:{type:Boolean,default:!1,description:"Whether badge is circle"},icon:{type:String,default:"",description:"Icon name. Will be overwritten by slot if slot is used"},type:{type:String,default:"default",description:"Badge type (primary|info|danger|default|warning|success)"}}},x=S,$=Object(c["a"])(x,O,P,!1,null,null,null),j=$.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("fade-transition",[e.visible?i("div",{staticClass:"alert",class:["alert-"+e.type,{"alert-dismissible":e.dismissible}],attrs:{role:"alert"}},[e.dismissible?[e._t("default",(function(){return[e.icon?i("span",{staticClass:"alert-inner--icon"},[i("i",{class:e.icon})]):e._e(),e.$slots.text?i("span",{staticClass:"alert-inner--text"},[e._t("text")],2):e._e()]})),e._t("dismiss-icon",(function(){return[i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:e.dismissAlert}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]}))]:e._t("default",(function(){return[e.icon?i("span",{staticClass:"alert-inner--icon"},[i("i",{class:e.icon})]):e._e(),e.$slots.text?i("span",{staticClass:"alert-inner--text"},[e._t("text")],2):e._e()]}))],2):e._e()])},B=[],A={name:"base-alert",components:{FadeTransition:r["a"]},props:{type:{type:String,default:"default",description:"Alert type"},icon:{type:String,default:"",description:"Alert icon. Will be overwritten by default slot"},dismissible:{type:Boolean,default:!1,description:"Whether alert is closes when clicking"}},data:function(){return{visible:!0}},methods:{dismissAlert:function(){this.visible=!1}}},z=A,I=Object(c["a"])(z,k,B,!1,null,null,null),E=I.exports,T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(e.tag,{tag:"component",staticClass:"btn",class:e.classes,attrs:{type:"button"===e.tag?e.nativeType:""},on:{click:e.handleClick}},[e.$slots.icon||e.icon&&e.$slots.default?i("span",{staticClass:"btn-inner--icon"},[e._t("icon",(function(){return[i("i",{class:e.icon})]}))],2):e._e(),e.$slots.default?e._e():i("i",{class:e.icon}),e.$slots.icon||e.icon&&e.$slots.default?i("span",{staticClass:"btn-inner--text"},[e._t("default",(function(){return[e._v("\n        "+e._s(e.text)+"\n      ")]}))],2):e._e(),e.$slots.icon||e.icon?e._e():e._t("default")],2)},D=[],W=i("bd86"),R={name:"base-button",props:{tag:{type:String,default:"button",description:"Button tag (default -> button)"},type:{type:String,default:"default",description:"Button type (e,g primary, danger etc)"},size:{type:String,default:"",description:"Button size lg|sm"},textColor:{type:String,default:"",description:"Button text color (e.g primary, danger etc)"},nativeType:{type:String,default:"button",description:"Button native type (e.g submit,button etc)"},icon:{type:String,default:"",description:"Button icon"},text:{type:String,default:"",description:"Button text in case not provided via default slot"},outline:{type:Boolean,default:!1,description:"Whether button style is outline"},rounded:{type:Boolean,default:!1,description:"Whether button style is rounded"},iconOnly:{type:Boolean,default:!1,description:"Whether button contains only an icon"},block:{type:Boolean,default:!1,description:"Whether button is of block type"}},computed:{classes:function(){var e=[{"btn-block":this.block},{"rounded-circle":this.rounded},{"btn-icon-only":this.iconOnly},Object(W["a"])({},"text-".concat(this.textColor),this.textColor),{"btn-icon":this.icon||this.$slots.icon},this.type&&!this.outline?"btn-".concat(this.type):"",this.outline?"btn-outline-".concat(this.type):""];return this.size&&e.push("btn-".concat(this.size)),e}},methods:{handleClick:function(e){this.$emit("click",e)}}},N=R,M=Object(c["a"])(N,T,D,!1,null,null,null),L=M.exports,V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"custom-control custom-checkbox",class:[{disabled:e.disabled},e.inlineClass]},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"custom-control-input",attrs:{id:e.cbId,type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:function(t){var i=e.model,n=t.target,a=!!n.checked;if(Array.isArray(i)){var s=null,r=e._i(i,s);n.checked?r<0&&(e.model=i.concat([s])):r>-1&&(e.model=i.slice(0,r).concat(i.slice(r+1)))}else e.model=a}}}),i("label",{staticClass:"custom-control-label",attrs:{for:e.cbId}},[e._t("default",(function(){return[e.inline?i("span",[e._v(" ")]):e._e()]}))],2)])},q=[];function F(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",i="",n=0;n<e;n++)i+=t.charAt(Math.floor(Math.random()*t.length));return i}var U={name:"base-checkbox",model:{prop:"checked"},props:{checked:{type:[Array,Boolean],description:"Whether checkbox is checked"},disabled:{type:Boolean,description:"Whether checkbox is disabled"},inline:{type:Boolean,description:"Whether checkbox is inline"}},data:function(){return{cbId:"",touched:!1}},computed:{model:{get:function(){return this.checked},set:function(e){this.touched||(this.touched=!0),this.$emit("input",e)}},inlineClass:function(){if(this.inline)return"form-check-inline"}},mounted:function(){this.cbId=F()}},J=U,H=Object(c["a"])(J,V,q,!1,null,null,null),G=H.exports,K=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-group",class:[{"input-group":e.hasIcon},{"has-danger":e.error},{focused:e.focused},{"input-group-alternative":e.alternative},{"has-label":e.label||e.$slots.label},{"has-success":!0===e.valid},{"has-danger":!1===e.valid}]},[e._t("label",(function(){return[e.label?i("label",{class:e.labelClasses},[e._v("\n            "+e._s(e.label)+"\n            "),e.required?i("span",[e._v("*")]):e._e()]):e._e()]})),e.addonLeftIcon||e.$slots.addonLeft?i("div",{staticClass:"input-group-prepend"},[i("span",{staticClass:"input-group-text"},[e._t("addonLeft",(function(){return[i("i",{class:e.addonLeftIcon})]}))],2)]):e._e(),e._t("default",(function(){return[i("input",e._g(e._b({staticClass:"form-control",class:[{"is-valid":!0===e.valid},{"is-invalid":!1===e.valid},e.inputClasses],attrs:{"aria-describedby":"addon-right addon-left"},domProps:{value:e.value}},"input",e.$attrs,!1),e.listeners))]}),null,e.slotData),e.addonRightIcon||e.$slots.addonRight?i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text"},[e._t("addonRight",(function(){return[i("i",{class:e.addonRightIcon})]}))],2)]):e._e(),e._t("infoBlock"),e._t("helpBlock",(function(){return[e.error?i("div",{staticClass:"text-danger invalid-feedback",class:{"mt-2":e.hasIcon},staticStyle:{display:"block"}},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e()]}))],2)},Q=[];i("8e6e"),i("ac6a"),i("cadf"),i("456d"),i("c5f6");function X(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?X(Object(i),!0).forEach((function(t){Object(W["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var Z={inheritAttrs:!1,name:"base-input",props:{required:{type:Boolean,description:"Whether input is required (adds an asterix *)"},valid:{type:Boolean,description:"Whether is valid",default:void 0},alternative:{type:Boolean,description:"Whether input is of alternative layout"},label:{type:String,description:"Input label (text before input)"},error:{type:String,description:"Input error (below input)"},labelClasses:{type:String,description:"Input label css classes"},inputClasses:{type:String,description:"Input css classes"},value:{type:[String,Number],description:"Input value"},addonRightIcon:{type:String,description:"Addon right icon"},addonLeftIcon:{type:String,description:"Addont left icon"}},data:function(){return{focused:!1}},computed:{listeners:function(){return Y(Y({},this.$listeners),{},{input:this.updateValue,focus:this.onFocus,blur:this.onBlur})},slotData:function(){return Y({focused:this.focused},this.listeners)},hasIcon:function(){var e=this.$slots,t=e.addonRight,i=e.addonLeft;return void 0!==t||void 0!==i||void 0!==this.addonRightIcon||void 0!==this.addonLeftIcon}},methods:{updateValue:function(e){var t=e.target.value;this.$emit("input",t)},onFocus:function(e){this.focused=!0,this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.$emit("blur",e)}}},ee=Z,te=Object(c["a"])(ee,K,Q,!1,null,null,null),ie=te.exports,ne=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"pagination",class:[e.size&&"pagination-"+e.size,e.align&&"justify-content-"+e.align]},[i("li",{staticClass:"page-item prev-page",class:{disabled:1===e.value}},[i("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:e.prevPage}},[e._m(0)])]),e._l(e.range(e.minPage,e.maxPage),(function(t){return i("li",{key:t,staticClass:"page-item",class:{active:e.value===t}},[i("a",{staticClass:"page-link",on:{click:function(i){return e.changePage(t)}}},[e._v(e._s(t))])])})),i("li",{staticClass:"page-item next-page",class:{disabled:e.value===e.totalPages}},[i("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:e.nextPage}},[e._m(1)])])],2)},ae=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{attrs:{"aria-hidden":"true"}},[i("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{attrs:{"aria-hidden":"true"}},[i("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])}],se={name:"base-pagination",props:{pageCount:{type:Number,default:0,description:"Pagination page count. This should be specified in combination with perPage"},perPage:{type:Number,default:10,description:"Pagination per page. Should be specified with total or pageCount"},total:{type:Number,default:0,description:"Can be specified instead of pageCount. The page count in this case will be total/perPage"},value:{type:Number,default:1,description:"Pagination value"},size:{type:String,default:"",description:"Pagination size"},align:{type:String,default:"",description:"Pagination alignment (e.g center|start|end)"}},computed:{totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var e=Math.floor(this.pagesToDisplay/2),t=e+this.value;return t>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-e}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var e=Math.floor(this.pagesToDisplay/2),t=e+this.value;return t<this.totalPages?t:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(e,t){for(var i=[],n=e;n<=t;n++)i.push(n);return i},changePage:function(e){this.$emit("input",e)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}},re=se,oe=Object(c["a"])(re,ne,ae,!1,null,null,null),le=oe.exports,ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"progress-wrapper"},[i("div",{class:"progress-"+e.type},[i("div",{staticClass:"progress-label"},[e._t("label",(function(){return[i("span",[e._v(e._s(e.label))])]}))],2),i("div",{staticClass:"progress-percentage"},[e._t("default",(function(){return[i("span",[e._v(e._s(e.value)+"%")])]}))],2)]),i("div",{staticClass:"progress",style:"height: "+e.height+"px"},[i("div",{staticClass:"progress-bar",class:e.computedClasses,style:"width: "+e.value+"%;",attrs:{role:"progressbar","aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"}})])])},ue=[],de={name:"base-progress",props:{striped:{type:Boolean,description:"Whether progress is striped"},animated:{type:Boolean,description:"Whether progress is animated (works only with `striped` prop together)"},label:{type:String,description:"Progress label (shown on the left above progress)"},height:{type:Number,default:8,description:"Progress line height"},type:{type:String,default:"default",description:"Progress type (e.g danger, primary etc)"},value:{type:Number,default:0,validator:function(e){return e>=0&&e<=100},description:"Progress value"}},computed:{computedClasses:function(){return[{"progress-bar-striped":this.striped},{"progress-bar-animated":this.animated},Object(W["a"])({},"bg-".concat(this.type),this.type)]}}},pe=de,fe=Object(c["a"])(pe,ce,ue,!1,null,null,null),me=fe.exports,he=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"custom-control custom-radio",class:[e.inlineClass,{disabled:e.disabled}]},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"custom-control-input",attrs:{id:e.cbId,type:"radio",disabled:e.disabled},domProps:{value:e.name,checked:e._q(e.model,e.name)},on:{change:function(t){e.model=e.name}}}),i("label",{staticClass:"custom-control-label",attrs:{for:e.cbId}},[e._t("default")],2)])},ge=[],ve={name:"base-radio",props:{name:{type:[String,Number],description:"Radio label"},disabled:{type:Boolean,description:"Whether radio is disabled"},value:{type:[String,Boolean],description:"Radio value"},inline:{type:Boolean,description:"Whether radio is inline"}},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},inlineClass:function(){return this.inline?"form-check-inline":""}},mounted:function(){this.cbId=F()}},be=ve,ye=Object(c["a"])(be,he,ge,!1,null,null,null),_e=ye.exports,Ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"input-slider-container"},[i("div",{ref:"slider",staticClass:"input-slider",class:["slider-"+e.type],attrs:{disabled:e.disabled}})])},we=[],Oe=i("e9fa"),Pe=i.n(Oe);function Se(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function xe(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(i),!0).forEach((function(t){Object(W["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Se(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var $e={name:"base-slider",props:{value:{type:[String,Array,Number],description:"Slider value"},disabled:{type:Boolean,description:"Whether slider is disabled"},range:{type:Object,default:function(){return{min:0,max:100}},description:"Slider range (defaults to 0-100)"},type:{type:String,default:"",description:"Slider type (e.g primary, danger etc)"},options:{type:Object,default:function(){return{}},description:"noUiSlider options"}},computed:{connect:function(){return Array.isArray(this.value)||[!0,!1]}},data:function(){return{slider:null}},methods:{createSlider:function(){var e=this;Pe.a.create(this.$refs.slider,xe({start:this.value,connect:this.connect,range:this.range},this.options));var t=this.$refs.slider.noUiSlider;t.on("slide",(function(){var i=t.get();i!==e.value&&e.$emit("input",i)}))}},mounted:function(){this.createSlider()},watch:{value:function(e,t){var i=this.$refs.slider.noUiSlider,n=i.get();e!==t&&n!==e&&(Array.isArray(n)&&Array.isArray(e)?t.length===e.length&&t.every((function(t,i){return t===e[i]}))&&i.set(e):i.set(e))}}},je=$e,ke=Object(c["a"])(je,Ce,we,!1,null,null,null),Be=ke.exports,Ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"custom-toggle"},[i("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:function(t){var i=e.model,n=t.target,a=!!n.checked;if(Array.isArray(i)){var s=null,r=e._i(i,s);n.checked?r<0&&(e.model=i.concat([s])):r>-1&&(e.model=i.slice(0,r).concat(i.slice(r+1)))}else e.model=a}}},"input",e.$attrs,!1),e.$listeners)),i("span",{staticClass:"custom-toggle-slider rounded-circle"})])},ze=[],Ie={name:"base-switch",inheritAttrs:!1,props:{value:{type:Boolean,default:!1,description:"Switch value"}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},Ee=Ie,Te=Object(c["a"])(Ee,Ae,ze,!1,null,null,null),De=Te.exports,We=function(){var e,t,i,n=this,a=n.$createElement,s=n._self._c||a;return s("div",{staticClass:"card",class:[{"card-lift--hover":n.hover},{shadow:n.shadow},(e={},e["shadow-"+n.shadowSize]=n.shadowSize,e),(t={},t["bg-gradient-"+n.gradient]=n.gradient,t),(i={},i["bg-"+n.type]=n.type,i)]},[n.$slots.header?s("div",{staticClass:"card-header",class:n.headerClasses},[n._t("header")],2):n._e(),n.noBody?n._e():s("div",{staticClass:"card-body",class:n.bodyClasses},[n._t("default")],2),n.noBody?n._t("default"):n._e(),n.$slots.footer?s("div",{staticClass:"card-footer",class:n.footerClasses},[n._t("footer")],2):n._e()],2)},Re=[],Ne={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},Me=Ne,Le=Object(c["a"])(Me,We,Re,!1,null,null,null),Ve=Le.exports,qe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"icon icon-shape",class:[e.size&&"icon-"+e.size,e.type&&"icon-shape-"+e.type,e.gradient&&"bg-gradient-"+e.gradient,e.shadow&&"shadow",e.rounded&&"rounded-circle",e.color&&"text-"+e.color]},[e._t("default",(function(){return[i("i",{class:e.name})]}))],2)},Fe=[],Ue={name:"icon",props:{name:{type:String,default:"",description:"Icon name"},size:{type:String,default:"",description:"Icon size"},type:{type:String,default:"",description:"Icon type (primary, warning etc)"},gradient:{type:String,default:"",description:"Icon gradient type (primary, warning etc)"},color:{type:String,default:"",description:"Icon color (primary, warning etc)"},shadow:{type:Boolean,default:!1,description:"Whether icon has shadow"},rounded:{type:Boolean,default:!1,description:"Whether icon is rounded"}}},Je=Ue,He=Object(c["a"])(Je,qe,Fe,!1,null,null,null),Ge=He.exports,Ke={install:function(e){e.component(j.name,j),e.component(E.name,E),e.component(L.name,L),e.component(ie.name,ie),e.component(G.name,G),e.component(le.name,le),e.component(me.name,me),e.component(_e.name,_e),e.component(Be.name,Be),e.component(De.name,De),e.component(Ve.name,Ve),e.component(Ge.name,Ge)}},Qe={bind:function(e,t,i){e.clickOutsideEvent=function(n){e==n.target||e.contains(n.target)||i.context[t.expression](n)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},Xe={install:function(e){e.directive("click-outside",Qe)}},Ye=Xe,Ze=i("caf9"),et={install:function(e){e.use(Ke),e.use(Ye),e.use(Ze["a"])}},tt=i("f13c"),it=i.n(tt),nt=i("d7da");i("ff41");n["a"].config.productionTip=!1,n["a"].use(et),n["a"].use(it.a),n["a"].use(nt["a"]),new n["a"]({router:w,render:function(e){return e(d)}}).$mount("#app")},"998b":function(e,t,i){e.exports={primaryColor:"#3f37c9"}},a4d4:function(e,t,i){},d5a0:function(e,t,i){},ff41:function(e,t,i){e.exports={primaryColor:"#3f37c9"}}});
//# sourceMappingURL=app.40949d74.js.map