!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){var n,o="not_set",r={html:"",css:"",js:"",lastSaved:"",getPage:function(){return{html:r.html,css:r.css,js:r.js}}},a={id:"not_set"},c=function(){var t=document.getElementById("live-frame"),e="".concat(r.html,"<style>").concat(r.css,"</style><script>").concat(r.js,"<\/script>");srcDoc.set(t,e)},s=function(t){var e=!1;t.html!=r.html&&(r.html=t.html,e=!0),t.css!=r.css&&(r.css=t.css,e=!0),t.js!=r.js&&(r.js=t.js,e=!0),e&&(!function(t){$("#html textarea").val(t.html),$("#css textarea").val(t.css),$("#js textarea").val(t.js)}(t),c())};$(document).ready(function(){var t=document.getElementById("live-frame"),e=$("#data").attr("data-page");srcDoc.set(t,e),o=$("#data").attr("data-roomid"),$("#fork-btn").click(function(){window.location="/room/".concat(o,"/fork")}),void 0===n&&((n=new Worker("/js/autosave.js")).onmessage=function(t){$("#last-saved").text("Autosaved @ ".concat(t.data))},n.postMessage({roomId:o}));var i=io();i.emit("join-room",{roomId:o}),$(function(){i.on("connect",function(){var t;t=i.id,a.id=t}),i.on("update",function(t){s(t)}),i.on("_pong",function(t){$("#ping").text("".concat(t.roomCount," in room / ping: ").concat(Date.now()-t.time,"ms"))})}),$("textarea").bind("change keypress input textInput paste",function(){var t=$("#html textarea").val(),e=$("#css textarea").val(),s=$("#js textarea").val();t==r.html&&e==r.css&&s==r.js||(r.html=t,r.css=e,r.js=s,c(),i.emit("update",{data:{id:a.id,html:t,css:e,js:s},roomId:o}),n.postMessage({html:t,css:e,js:s}))}),$("#delete-btn").click(function(){return window.location.replace("/room/".concat(o,"/delete"))}),$("#home-btn").click(function(){return window.location.assign("/")}),$("#header").click(function(){return window.location.assign("/")}),ping=function(){i.emit("_ping",{time:Date.now(),roomId:o,roomCount:null}),setTimeout("ping()",2e3)},ping()})}]);