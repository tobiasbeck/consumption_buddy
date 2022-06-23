"use strict";(self["webpackChunkconsumption_buddy"]=self["webpackChunkconsumption_buddy"]||[]).push([[990],{8990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return i}});var r=n(6587),o=n(545),c=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(t,e,n,i,s)=>{const u=t.ownerDocument.defaultView,a=(0,o.i)(t),d=t=>{const e=50,{startX:n}=t;return a?n>=u.innerWidth-e:n<=e},h=t=>a?-t.deltaX:t.deltaX,l=t=>a?-t.velocityX:t.velocityX,p=t=>d(t)&&e(),b=t=>{const e=h(t),n=e/u.innerWidth;i(n)},f=t=>{const e=h(t),n=u.innerWidth,o=e/n,c=l(t),i=n/2,a=c>=0&&(c>.2||e>i),d=a?1-o:o,p=d*n;let b=0;if(p>5){const t=p/Math.abs(c);b=Math.min(t,540)}s(a,o<=0?.01:(0,r.j)(0,o,.9999),b)};return(0,c.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:b,onEnd:f})}}}]);
//# sourceMappingURL=990.0c8a4bfe.js.map