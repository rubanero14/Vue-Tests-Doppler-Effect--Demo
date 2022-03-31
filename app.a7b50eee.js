(function(){"use strict";var t={5697:function(t,n,e){var i=e(9242),r=e(3396),s=e(7139);const l=(0,r._)("header",null,[(0,r._)("h1",{class:"mb-0"},[(0,r._)("i",{class:"bi bi-stars me-2"}),(0,r.Uk)("Doppler Effect Demo"),(0,r._)("i",{class:"bi bi-stars ms-2"})])],-1),o={class:"container"},u={class:"container"},a={class:"row"},c={class:"col-12 col-md-6 col-lg-4"},h={class:"d-flex align-items-center justify-content-between mb-3 mb-md-0"},f=(0,r._)("label",{class:"me-2"},"-100",-1),p=["min","max"],m=(0,r._)("label",{class:"ms-2"},"100",-1),d={class:"col-12 col-md-6 col-lg-4"},b={class:"d-flex align-items-center justify-content-center"},g=(0,r._)("label",{class:"mb-3 mb-md-0 me-2"},"Enter Velocity (km/s):",-1),v=(0,r._)("div",{class:"col-12 col-md-6 col-lg-4"},[(0,r._)("a",{class:"btn btn-secondary w-100",target:"_blank",href:"https://github.com/rubanero14/Vue-Tests-Doppler-Effect"},[(0,r._)("i",{class:"bi bi-code-slash me-2"}),(0,r.Uk)("Source Code ")])],-1);function _(t,n,e,_,V,y){return(0,r.wg)(),(0,r.iD)(r.HY,null,[l,(0,r._)("div",o,[(0,r._)("div",{class:"circle",onClick:n[0]||(n[0]=(...t)=>y.reset&&y.reset(...t)),style:(0,s.j5)({background:this.finalColor,transform:this.transform})},null,4)]),(0,r._)("footer",null,[(0,r._)("div",u,[(0,r._)("div",a,[(0,r._)("div",c,[(0,r._)("div",h,[f,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>V.inputValue=t),onChange:n[2]||(n[2]=t=>{y.changeColors()}),onInput:n[3]||(n[3]=t=>{y.changeColors()}),class:"w-100",id:"inputRange",type:"range",min:V.min,max:V.max,step:"5"},null,40,p),[[i.nr,V.inputValue]]),m])]),(0,r._)("div",d,[(0,r._)("div",b,[g,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[4]||(n[4]=t=>V.inputValue=t),onInput:n[5]||(n[5]=t=>{y.changeColors()}),class:"form-control w-25 mb-3 mb-md-0",type:"type"},null,544),[[i.nr,V.inputValue]])])]),v])])])],64)}var V={data(){return{inputValue:0,min:-100,max:100,red:0,green:0,blue:255,finalColor:"",transform:0}},methods:{changeColors(){this.inputValue<this.min?this.inputValue=this.min:this.inputValue>this.max&&(this.inputValue=this.max),this.inputValue<0?(this.red=255+2.55*this.inputValue,this.blue=-2.55*this.inputValue,this.green=255+2.55*this.inputValue,this.finalColor="rgb("+this.red+","+this.green+","+this.blue+")",this.transform="scale("+(2.3-.015*this.inputValue)+")"):this.inputValue>0?(this.red=255,this.green=255-2.55*this.inputValue,this.blue=0,this.finalColor="rgb("+this.red+","+this.green+","+this.blue+")",this.transform="scale("+(2.5+-.015*this.inputValue)+")"):(this.green=255-2.55*this.inputValue,this.red=255,this.blue=0,this.finalColor="rgb("+this.red+","+this.green+","+this.blue+")",this.transform="scale("+(2.5+.015*this.inputValue)+")")},reset(){this.inputValue=0,this.finalColor="",this.transform=null}}},y=e(89);const w=(0,y.Z)(V,[["render",_]]);var C=w;const x=(0,i.ri)(C);x.mount("#app")}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var s=n[i]={exports:{}};return t[i](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(n,i,r,s){if(!i){var l=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],s=t[c][2];for(var o=!0,u=0;u<i.length;u++)(!1&s||l>=s)&&Object.keys(e.O).every((function(t){return e.O[t](i[u])}))?i.splice(u--,1):(o=!1,s<l&&(l=s));if(o){t.splice(c--,1);var a=r();void 0!==a&&(n=a)}}return n}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[i,r,s]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var r,s,l=i[0],o=i[1],u=i[2],a=0;if(l.some((function(n){return 0!==t[n]}))){for(r in o)e.o(o,r)&&(e.m[r]=o[r]);if(u)var c=u(e)}for(n&&n(i);a<l.length;a++)s=l[a],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(c)},i=self["webpackChunkvue_test_2"]=self["webpackChunkvue_test_2"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(5697)}));i=e.O(i)})();
//# sourceMappingURL=app.a7b50eee.js.map