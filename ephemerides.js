(()=>{"use strict";var e={8569:()=>{},6301:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(3559);window.addEventListener("load",(()=>o(void 0,void 0,void 0,(function*(){const e=document.querySelector("#todays-events");e.innerHTML="Give me a sec...";const t=yield(0,i.fetchTodaysEphemerides)();e.innerHTML="";const n=document.getElementById("event-template");for(const o of t){const{year:t,text:i}=o,r=n.content.cloneNode(!0);r.querySelector(".title").innerHTML=t,r.querySelector(".content").innerHTML=i,e.appendChild(r)}}))))},3559:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchTodaysEphemerides=void 0;const o=(e,t)=>Number(e.year)-Number(t.year);t.fetchTodaysEphemerides=()=>n(void 0,void 0,void 0,(function*(){const e=new Date,t=yield fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${e.getMonth()}/${e.getDay()}`,{headers:{"Content-Type":"application/json"}});return(yield t.json()).events.sort(o)}))}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n(6301),n(8569)})();