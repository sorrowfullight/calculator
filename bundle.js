(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>u});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,'/* общее оформление */\n\n.calculator {\n    margin: 50px auto;\n    width: 300px;\n    height: 570px;\n    border-radius: 20px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 30px;\n    padding: 20px;\n}\n\n.buttons {\n    display: grid;\n    grid-template-areas: \n    "ac de plus-minus percentage "\n    "seven eight nine division "\n    "four five six multiplication "\n    "one two three minus"\n    "zero zero dot plus"\n    "theme-button theme-button equal equal";\n    justify-items: center;\n    align-items: center;\n    grid-gap: 5px;\n}\n\n.button {\n    border-radius: 30%;\n    width: 60px;\n    height: 60px;\n    margin: 5px;\n    text-align: center;\n    justify-self: center;\n    font-size: 20px;\n    cursor: pointer;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n}\n\n.button.zero {\n    grid-area: zero;\n    border-radius: 15px;\n    width: 135px;\n}\n\n.button.theme-button {\n    grid-area: theme-button;\n    border-radius: 15px;\n    width: 135px;\n}\n\n.button.equal {\n    grid-area: equal;\n    border-radius: 15px;\n    width: 135px;\n}\n\n.button:hover {\n    filter: brightness(130%);\n}\n\n.button:active {\n    filter: brightness(75%);\n}\n\n.theme-button svg:hover {\n    transform: scale(1.1);\n}\n\n.display {\n    height: 100px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items:last baseline;\n    justify-content: flex-end;\n    font-size: 50px;\n    padding: 10px;\n    border-radius: 20px;\n}\n\n/* темная тема */\n\n.dark-theme .calculator {\n    background: #000;\n    color: #fff;\n    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)\n}\n\n.dark-theme .button {\n    color: #fff;\n    background-color: #363636;\n    box-shadow: 2px 2px 3px 2px rgba(255, 255, 255, 0.7);\n}\n\n.dark-theme .display {\n    box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n    color: #fff; \n}\n\n.dark-theme .button.ac,\n.dark-theme .button.plus-minus,\n.dark-theme .button.percentage,\n.dark-theme .button.de {\n    background: #878787;\n}\n\n.dark-theme .button.division,\n.dark-theme .button.multiplication,\n.dark-theme .button.minus,\n.dark-theme .button.plus,\n.dark-theme .button.equal\n {\n    background: #008b8b;\n}\n\n.dark-theme .theme-button {\n    background: #7FFFD4;\n}\n\n/* светлая тема */\n\n.light-theme .calculator {\n    background: #E1E1E1;\n    color: #4B4B4B;\n    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)\n}\n\n.light-theme .button {\n    color: #4B4B4B;\n    background-color: #BDBCBC;\n    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);\n}\n\n.light-theme .display {\n    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.2);\n    color: #4B4B4B;\n}\n\n.light-theme .button.ac,\n.light-theme .button.plus-minus,\n.light-theme .button.percentage,\n.light-theme .button.de {\n    background: #4B4B4B;\n    color: #E1E1E1;\n}\n\n.light-theme .button.division,\n.light-theme .button.multiplication,\n.light-theme .button.minus,\n.light-theme .button.plus,\n.light-theme .button.equal\n {\n    background: #2AAA8A;\n    color: #E1E1E1;\n}\n\n.light-theme .theme-button {\n    background: #478778;\n    color: #BDBCBC;\n}\n',""]);const u=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],u=0;u<n.length;u++){var s=n[u],c=r.base?s[0]+r.base:s[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var p=e(d),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=o(h,r);r.byIndex=u,t.splice(u,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var u=e(i[a]);t[u].references--}for(var s=r(n,o),c=0;c<i.length;c++){var l=e(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var r=e(72),o=e.n(r),i=e(825),a=e.n(i),u=e(659),s=e.n(u),c=e(56),l=e.n(c),d=e(540),p=e.n(d),h=e(113),m=e.n(h),f=e(365),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),o()(f.A,b),f.A&&f.A.locals&&f.A.locals;var g=document.querySelector(".display"),x=["0","1","2","3","4","5","6","7","8","9","."],v=["+","-","X","/"],y="",k="",C="",S=!1,w=document.querySelector("main"),E=document.querySelector(".theme-button"),B=function(){""!==k?(k=k.slice(0,-1),g.textContent=k||"0"):(y=y.slice(0,-1),g.textContent=y||"0")};document.addEventListener("keydown",(function(n){"Backspace"===n.key&&B()})),document.querySelector(".de").addEventListener("click",(function(){B()})),document.querySelector(".ac").addEventListener("click",(function(){y="",k="",C="",S=!1,g.textContent="0"})),document.querySelector(".buttons").addEventListener("click",(function(n){if(n.target.classList.contains("button")){var t=n.target.textContent;if(x.includes(t))if(""===k&&""===C){if("0"===y&&"."!==t&&(y=""),"."===t&&y.includes("."))return;String(y).length<10&&(y+=t,g.textContent=y),String(y).length>10&&(y=String(y).slice(0,10),g.textContent=y)}else if(""!==y&&""!==k&&S)k=t,S=!1,g.textContent=k;else{if("0"===k&&"."!==t&&(k=""),"."===t&&k.includes("."))return;String(k).length<10&&(k+=t,g.textContent=k),String(k).length>10&&(k=String(k).slice(0,10),g.textContent=k)}if(n.target.classList.contains("plus-minus")&&(""!==k?(k=-Number(k),g.textContent=k):""!==y&&(y=-Number(y),g.textContent=y)),n.target.classList.contains("percentage"))""===k&&""===C?(y=Number(y)/100,g.textContent=y,String(y).length>10&&(g.textContent=String(y).slice(0,10))):""!==y&&""!==k&&(k=Number(y)*Number(k)/100,g.textContent=k,String(k).length>10&&(g.textContent=String(k).slice(0,10)));else{if(v.includes(t))return C=t,void(g.textContent=C);if("="===t){switch(""===k&&(k=y),C){case"+":y=Number(y)+Number(k);break;case"-":y=Number(y)-Number(k);break;case"X":y=Number(y)*Number(k);break;case"/":if("0"===k)return g.textContent="Error",y="",k="",void(C="");y=Number(y)/Number(k)}String(y).length<=10?(S=!0,g.textContent=y):(S=!0,g.textContent=String(y).slice(0,10))}}}})),E.addEventListener("click",(function(){w.classList.toggle("light-theme"),w.classList.toggle("dark-theme")}))})();