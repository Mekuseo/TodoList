"use strict";(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{426:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(81),o=r.n(t),a=r(645),c=r.n(a)()(o());c.push([e.id,'body {\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n#container {\r\n  width: 600px;\r\n  margin: 0 auto;\r\n  box-shadow: 0 0 10px #aaa;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\n.reload {\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  text-align: center;\r\n}\r\n\r\n#task {\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  margin-bottom: 10px;\r\n  background-color: #f4f4f4;\r\n}\r\n\r\n#add-task {\r\n  padding: 10px 20px;\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border-radius: 5px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#task-list {\r\n  list-style-type: none;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.task {\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  background-color: #f4f4f4;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.delete-task {\r\n  cursor: pointer;\r\n  color: red;\r\n  margin-left: 10px;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n  vertical-align: middle;\r\n  -webkit-appearance: none;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border: 2px solid gray;\r\n  background-color: white;\r\n  outline: none;\r\n}\r\n\r\ninput[type="checkbox"]:checked {\r\n  background-color: gray;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n#remove-completed {\r\n  padding: 10px 20px;\r\n  background-color: #f44336;\r\n  color: white;\r\n  border-radius: 5px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 60%;\r\n  margin: 0 100px;\r\n}\r\n\r\n#remove-completed:hover {\r\n  background-color: #f7746b;\r\n}\r\n\r\n.checkbox {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n}\r\n',""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=t.base?s[0]+t.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,t);t.byIndex=i,n.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);n[i].references--}for(var s=t(e,o),l=0;l<a.length;l++){var d=r(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},269:(e,n,r)=>{var t=r(379),o=r.n(t),a=r(795),c=r.n(a),i=r(569),s=r.n(i),l=r(565),d=r.n(l),p=r(216),u=r.n(p),f=r(589),m=r.n(f),h=r(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=u(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const v=document.getElementById("task-list");let x=JSON.parse(localStorage.getItem("tasks"))||[];function b(e){const n=document.createElement("li");n.innerHTML=`\n    <input type="checkbox" class="checkbox" ${e.completed?"checked":""}>\n    <span class="task-description ${e.completed?"completed":""}">${e.description}</span>\n    <span class="delete-task">X</span>\n  `,n.classList.add("task"),n.index=e.index,v.appendChild(n),n.querySelector(".checkbox").addEventListener("change",(e=>{const{index:r}=n;x[r].completed=e.target.checked,n.querySelector(".task-description").classList.toggle("completed",e.target.checked),k()}))}function y(){x.forEach(((e,n)=>{e.index=n}))}function k(){localStorage.setItem("tasks",JSON.stringify(x))}const w=document.getElementById("task"),E=document.getElementById("add-task"),S=document.getElementById("task-list"),L=document.getElementById("remove-completed");window.onload=()=>{x.forEach(b)},E.addEventListener("click",(e=>{e.preventDefault(),w.value&&(function(e){const n={description:e,completed:!1,index:x.length};x.push(n),b(n),y(),k()}(w.value),w.value="")})),S.addEventListener("click",(e=>{e.target.classList.contains("delete-task")?function(e){const{index:n}=e;x.splice(n,1),e.remove(),y(),k()}(e.target.parentElement):e.target.classList.contains("task-description")&&function(e){const{index:n}=e.parentElement;x[n].completed=!x[n].completed,e.classList.toggle("completed"),e.parentElement.querySelector(".checkbox").checked=x[n].completed,k()}(e.target)})),L.addEventListener("click",(function(){x=x.filter((e=>!e.completed));for(let e=v.children.length-1;e>=0;e-=1)v.children[e].querySelector(".task-description").classList.contains("completed")&&v.removeChild(v.children[e]);y(),k()}))}},e=>{e(e.s=269)}]);