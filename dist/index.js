!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.AlphabeticalSorter=t(require("react")):e.AlphabeticalSorter=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),p=r(2),f=n(p),h=r(3),d=n(h);r(4);var y=function(e){function t(e){a(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={selected:e.selected},r}return s(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){e.selected!==this.props.selected&&this.setState({selected:e.selected})}},{key:"render",value:function(){var e=this,t=this.props,r=t.chunkLength,n=t.chunkByLetter,a=(t.labelKey,t.navigator),i=[].concat(o(this.props.asGroup)).sort(this.alphabeticalSort.bind(this)),s={items:(0,f.default)("as-items",{"as-items--navigator":a})};return r&&(i=this.chunkify(i,r)),n&&(i=this.alphaChunk(i)),c.default.createElement("div",{className:s.items},r||n?i.map(function(t,r){return c.default.createElement("div",{className:"as-items__chunk",key:r},t.map(function(r,n){return e.buildItem(r,n,e.isNavigator(t,n,r))}))}):c.default.createElement("div",{className:"as-items__list"},i.map(function(t,r){return e.buildItem(t,r,e.isNavigator(i,r,t))})))}},{key:"buildItem",value:function(e,t,r){return c.default.createElement(d.default,{itemOptions:this.props.itemOptions,isNavigator:r,isSelected:this.findByLabelKey(this.state.selected,e,this.props.labelKey),type:this.props.type,asName:this.props.asName,labelKey:this.props.labelKey,valueKey:this.props.valueKey,handleCheck:this.handleCheck.bind(this,e),item:e,key:t})}},{key:"isNavigator",value:function(e,t,r){var n=this.props,o=n.navigator,a=n.labelKey;if(t>0){var i=r[a].charAt(0).toUpperCase(),s=e[t-1][a].charAt(0).toUpperCase();return o&&i!==s}return o}},{key:"chunkify",value:function(e,t){for(var r=Math.floor(e.length/t),n=[],o=0;o<=r;o++){var a=o*t,i=a+t,s=e.slice(a,i);n.push(s)}return n}},{key:"alphaChunk",value:function(e){for(var t=[],r=0,n=0;n<=e.length;n++)if(void 0!==t[r]){var o=t[r][t[r].length-1];o&&e[n]&&o.title.charAt(0).toLowerCase()===e[n].title.charAt(0).toLowerCase()?t[r].push(e[n]):e[n]&&(t.push([e[n]]),r++)}else t.push([e[n]]);return t}},{key:"alphabeticalSort",value:function(e,t){var r=e[this.props.labelKey].toLowerCase(),n=t[this.props.labelKey].toLowerCase();return r<n?-1:r>n?1:0}},{key:"handleCheck",value:function e(t){var r=[].concat(o(this.state.selected)),n=this.props,a=n.labelKey,i=n.type,e=n.handleCheck;r="checkbox"===i?this.buildCheckboxGroup(r,t,a):[t],this.setState({selected:r}),e&&e(r)}},{key:"buildCheckboxGroup",value:function(e,t,r){var n=this.findByLabelKey(e,t,r);return null!==n?e.splice(n,1):e.push(t),e}},{key:"findByLabelKey",value:function(e,t,r){var n=null;return e.forEach(function(e,o){if(e[r]===t[r])return n=o}),n}}]),t}(c.default.Component);y.propTypes={asGroup:c.default.PropTypes.array.isRequired,selected:c.default.PropTypes.array,asName:c.default.PropTypes.string,type:c.default.PropTypes.string,itemOptions:c.default.PropTypes.object,labelKey:c.default.PropTypes.string,valueKey:c.default.PropTypes.string,navigator:c.default.PropTypes.bool,chunkLength:c.default.PropTypes.number,chunkByLetter:c.default.PropTypes.bool,handleCheck:c.default.PropTypes.func},y.defaultProps={asGroup:[],selected:[],asName:"sorter",type:"text",itemOptions:{},labelKey:"label",valueKey:"value",navigator:!0};var v=y;t.default=v;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"AlphabetSorter","/Users/britt/workspace/go/src/github.com/strongdm/react-alphabet-sorter/src/index.jsx"),__REACT_HOT_LOADER__.register(v,"default","/Users/britt/workspace/go/src/github.com/strongdm/react-alphabet-sorter/src/index.jsx"))})()},function(t,r){t.exports=e},function(e,t,r){var n,o;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=r:(n=[],o=function(){return r}.apply(t,n),!(void 0!==o&&(e.exports=o)))}()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),p=r(2),f=n(p),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.item[this.props.labelKey],t={item:(0,f.default)("as-item",{"as-item--navigator":this.props.isNavigator},{"as-item--selected":null!==this.props.isSelected})};return c.default.createElement("div",{className:t.item},c.default.createElement("div",{className:"as-item__navigator"},e.charAt(0).toUpperCase()),c.default.createElement("div",{className:"as-item__content"},this.buildContent()))}},{key:"buildContent",value:function(){var e=this.props,t=e.item,r=e.labelKey,n=e.valueKey,o=e.itemOptions,a=e.handleCheck,i=e.asName,l=s({name:i,id:i+"_"+t[n],value:t[n],onChange:a},o),u=s({href:t.href,onClick:a},o);switch(this.props.type){case"link":return c.default.createElement("a",u,""+t[r]);case"radio":return c.default.createElement("label",{htmlFor:i+"_"+t[n]},c.default.createElement("input",s({type:"radio"},l)),""+t[r]);case"checkbox":return c.default.createElement("label",{htmlFor:i+"_"+t[n]},c.default.createElement("input",s({type:"checkbox"},l)),""+t[r]);default:return c.default.createElement("span",s({onClick:a},o),""+t[r])}}}]),t}(c.default.Component),d=h;t.default=d;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"SorterItem","/Users/britt/workspace/go/src/github.com/strongdm/react-alphabet-sorter/src/SorterItem.jsx"),__REACT_HOT_LOADER__.register(d,"default","/Users/britt/workspace/go/src/github.com/strongdm/react-alphabet-sorter/src/SorterItem.jsx"))})()},function(e,t,r){var n=r(5);"string"==typeof n&&(n=[[e.id,n,""]]);r(7)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,r){t=e.exports=r(6)(),t.push([e.id,".as-items--navigator .as-items__chunk,.as-items--navigator .as-items__list{padding-left:20px}.as-item{position:relative;margin:4px 0}.as-item label{cursor:pointer}.as-item__navigator,.as-item input{display:none}.as-item__content{cursor:pointer;display:inline-block}.as-item--navigator .as-item__navigator{display:block;position:absolute;top:0;left:-20px}.as-item--selected{font-weight:600}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=h[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(u(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(u(n.parts[a],t));h[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],s=o[2],l=o[3],u={css:i,media:s,sourceMap:l};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}function a(e,t){var r=v(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function u(e,t){var r,n,o;if(t.singleton){var a=b++;r=m||(m=s(t)),n=c.bind(null,r,a,!1),o=c.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(t),n=f.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=p.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function f(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var h={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},y=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=y()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],l=h[s.id];l.refs--,a.push(l)}if(e){var u=o(e);n(u,t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete h[l.id]}}}};var _=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()}])});