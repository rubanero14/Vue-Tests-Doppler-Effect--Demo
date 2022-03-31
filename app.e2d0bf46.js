(function(){"use strict";var t={5783:function(t,e,n){var o=n(9242),i=n(3396),l=n(7139);const r={class:"container"},s={key:0,class:"text-light"},a={key:1,class:"text-light"},u={key:2,class:"text-secondary"},c={class:"top-left"},h={class:"d-flex align-items-center mb-5"},f=["min","max"],p={class:"ms-2",for:"inputValue"},g={class:"bottom-left"},d=(0,i._)("label",{class:"mb-2"},"Enter Velocity (km/s):",-1),v=(0,i._)("div",null,[(0,i._)("a",{class:"btn btn-secondary top-right",target:"_blank",href:"https://github.com/rubanero14/Vue-Tests-Doppler-Effect"},"Source Code")],-1);function m(t,e,n,m,b,y){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",{class:"circle",style:(0,l.j5)({background:this.finalColor,transform:this.transform})},[b.inputValue<-10?((0,i.wg)(),(0,i.iD)("p",s,"Blue Star")):b.inputValue>10?((0,i.wg)(),(0,i.iD)("p",a,"Red Star")):((0,i.wg)(),(0,i.iD)("p",u,"Yellow Star"))],4),(0,i._)("div",c,[(0,i._)("div",h,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>b.inputValue=t),onChange:e[1]||(e[1]=e=>{t.changeColors()}),onInput:e[2]||(e[2]=e=>{t.changeColors()}),class:"w-100",id:"inputRange",type:"range",min:b.min,max:b.max,step:"5"},null,40,f),[[o.nr,b.inputValue]]),(0,i._)("label",p,(0,l.zw)(b.inputValue),1)]),(0,i._)("div",g,[d,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>b.velocity=t),onChange:e[4]||(e[4]=(...t)=>y.velocityControl&&y.velocityControl(...t)),class:"form-control",placeholder:"Enter velocity..",type:"text"},null,544),[[o.nr,b.velocity]])]),v])])}var b={data(){return{inputValue:0,velocity:0,min:-100,max:100,red:0,green:0,blue:255,finalColor:"",transform:0}},methods:{velocityControl(){this.velocity<this.min?(this.min=-100,this.velocity=this.min):this.velocity>this.max?(this.max=100,this.velocity=this.max):(this.inputValue=parseInt(this.velocity),console.log(typeof this.inputValue,this.inputValue))}},watch:{inputValue:function(){this.inputValue<0?(this.red=255+2.55*this.inputValue,this.blue=-2.55*this.inputValue,this.green=255+2.55*this.inputValue,this.finalColor="rgb("+this.red+","+this.green+","+this.blue+")",this.transform="scale("+(2.5-.015*this.inputValue)+")",console.log("blue activated"),console.log("Final color "+this.finalColor),console.log("Green "+this.green),console.log("Red "+this.red),console.log("Blue "+this.blue),console.log("Transform "+this.transform)):this.inputValue>0?(this.red=255,this.green=255-2.55*this.inputValue,this.blue=0,this.finalColor="rgb("+this.red+","+this.green+","+this.blue+")",this.transform="scale("+(2.5+-.015*this.inputValue)+")",console.log("red activated"),console.log("Final color "+this.finalColor),console.log("Green "+this.green),console.log("Red "+this.red),console.log("Blue "+this.blue),console.log("Transform "+this.transform),console.log("inputvalue "+this.inputValue)):(this.green=255-2.55*this.inputValue,this.red=255,this.blue=0,this.finalColor="rgb("+this.red+","+this.green+","+this.blue+")",this.transform="scale("+(2.5+.015*this.inputValue)+")",console.log("yellow activated"),console.log("Final color "+this.finalColor),console.log("Green "+this.green),console.log("Red "+this.red),console.log("Blue "+this.blue),console.log("Transform "+this.transform))}}},y=n(89);const V=(0,y.Z)(b,[["render",m]]);var w=V;const C=(0,o.ri)(w);C.mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var l=e[o]={exports:{}};return t[o](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,l){if(!o){var r=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],l=t[c][2];for(var s=!0,a=0;a<o.length;a++)(!1&l||r>=l)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(s=!1,l<r&&(r=l));if(s){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[o,i,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,l,r=o[0],s=o[1],a=o[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(a)var c=a(n)}for(e&&e(o);u<r.length;u++)l=r[u],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(c)},o=self["webpackChunkvue_test_2"]=self["webpackChunkvue_test_2"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5783)}));o=n.O(o)})();
//# sourceMappingURL=app.e2d0bf46.js.map