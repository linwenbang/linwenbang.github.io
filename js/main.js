!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){o(1),e.exports=o(5)},function(e,t,o){"use strict";var r=i(o(2)),n=i(o(3)),s=i(o(4));function i(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(),(0,n.default)(),(0,s.default)()},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){(!sessionStorage.getItem("profile")||sessionStorage.getItem("profile")&&"true"===sessionStorage.getItem("profile"))&&$("#cxo-profile").removeClass("profile-close"),0!==$(document).scrollTop()&&$("#go-up").removeClass("chose"),$(".profile-avatar>i").on("click",function(e){var t=$(this).parents("#cxo-profile");t&&!t.hasClass("profile-close")?(t.addClass("profile-close"),sessionStorage.setItem("profile","false")):t&&t.hasClass("profile-close")&&(t.removeClass("profile-close"),sessionStorage.setItem("profile","true"))}),$("#go-up").on("click",function(){$("html, body").animate({scrollTop:0},"500")})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=$("#cxo-intro-nav"),t=$("#cxo-intro-nav>section>div a,#cxo-intro-nav i"),o=$(".toc-wrapper"),r=o.css("top"),n=$("#cxo-intro").height(),s=$(".read-progress"),i=$("#go-up"),a=0,c=0;var l=-1;function u(e){if(e>n){if(1!==l)return l=1,1}else if(-1!==l)return l=-1,-1;return 0}var f=!1,d=void 0,p=void 0;$("#post").length&&(f=!0,p=n,d=$(".article-entry").outerHeight());var v=e.outerHeight();function m(l){var m=function(e){return c=e-a,a=e,c>10?(c=0,1):c<-20?(c=0,-1):0}(l),g=u(l);1===m?e.css("top",-v+"px"):-1===m&&e.css("top",0),0===l?(t.removeClass("main-color"),e.css("top",0),e.removeClass("nav-style-two"),i.addClass("close")):(e.addClass("nav-style-two"),t.addClass("main-color"),i.removeClass("close")),f&&(1===g?(o.css("position","fixed"),o.css("top","0")):-1===g&&(o.css("position","absolute"),o.css("top",r)),function(e,t,o){var r=$(window).height(),i=void 0;i=(i=e<n?0:(e-t)/(o-r)*100)>=100?100:i,s[0].style.width=i+"%"}(l,p,d),function(e){if(f){var t="";$("#post").find("h1,h2,h3,h4,h5,h6").each(function(){var o=$(this);o.offset().top<e&&(t="#"+o.attr("id"))});var o=$(".toc-link.active");t&&o.attr("href")!==t&&($(".toc-link").removeClass("active"),$('.toc-link[href="'+t+'"]').addClass("active"))}}(l))}$(document).on("scroll",function(){m($(document).scrollTop())})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){document.querySelectorAll(".recent-post-content img,.article-entry img").forEach(function(e){var t=e.outerHTML,o=e.src,r=e.alt;e.outerHTML='<a class="fancy-link" href="'+o+'" data-fancybox="group" data-caption="'+r+'">'+t+'<div class="img-alt">'+r+"</div></a>"})}},function(e,t){}]);