!function(t,e){function n(){R=A=H=S=C=k=x}function o(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function i(t){return parseFloat(t)||0}function r(){B={top:e.pageYOffset,left:e.pageXOffset}}function s(){return e.pageXOffset!=B.left?(r(),void H()):void(e.pageYOffset!=B.top&&(r(),l()))}function a(t){setTimeout(function(){e.pageYOffset!=B.top&&(B.top=e.pageYOffset,l())},0)}function l(){for(var t=W.length-1;t>=0;t--)d(W[t])}function d(t){if(t.inited){var e=B.top<=t.limit.start?0:B.top>=t.limit.end?2:1;t.mode!=e&&g(t,e)}}function c(){for(var t=W.length-1;t>=0;t--)if(W[t].inited){var e=Math.abs(w(W[t].clone)-W[t].docOffsetTop),n=Math.abs(W[t].parent.node.offsetHeight-W[t].parent.height);if(e>=2||n>=2)return!1}return!0}function f(t){isNaN(parseFloat(t.computed.top))||t.isCell||"none"==t.computed.display||(t.inited=!0,t.clone||h(t),"absolute"!=t.parent.computed.position&&"relative"!=t.parent.computed.position&&(t.parent.node.style.position="relative"),d(t),t.parent.height=t.parent.node.offsetHeight,t.docOffsetTop=w(t.clone))}function p(t){var e=!0;t.clone&&v(t),o(t.node.style,t.css);for(var n=W.length-1;n>=0;n--)if(W[n].node!==t.node&&W[n].parent.node===t.parent.node){e=!1;break}e&&(t.parent.node.style.position=t.parent.css.position),t.mode=-1}function u(){for(var t=W.length-1;t>=0;t--)f(W[t])}function m(){for(var t=W.length-1;t>=0;t--)p(W[t])}function g(t,e){var n=t.node.style;switch(e){case 0:n.position="absolute",n.left=t.offset.left+"px",n.right=t.offset.right+"px",n.top=t.offset.top+"px",n.bottom="auto",n.width="auto",n.marginLeft=0,n.marginRight=0,n.marginTop=0;break;case 1:n.position="fixed",n.left=t.box.left+"px",n.right=t.box.right+"px",n.top=t.css.top,n.bottom="auto",n.width="auto",n.marginLeft=0,n.marginRight=0,n.marginTop=0;break;case 2:n.position="absolute",n.left=t.offset.left+"px",n.right=t.offset.right+"px",n.top="auto",n.bottom=0,n.width="auto",n.marginLeft=0,n.marginRight=0}t.mode=e}function h(t){t.clone=document.createElement("div");var e=t.node.nextSibling||t.node,n=t.clone.style;n.height=t.height+"px",n.width=t.width+"px",n.marginTop=t.computed.marginTop,n.marginBottom=t.computed.marginBottom,n.marginLeft=t.computed.marginLeft,n.marginRight=t.computed.marginRight,n.padding=n.border=n.borderSpacing=0,n.fontSize="1em",n.position="static",n.cssFloat=t.computed.cssFloat,t.node.parentNode.insertBefore(t.clone,e)}function v(t){t.clone.parentNode.removeChild(t.clone),t.clone=void 0}function y(t){var e=getComputedStyle(t),n=t.parentNode,o=getComputedStyle(n),r=t.style.position;t.style.position="relative";var s={top:e.top,marginTop:e.marginTop,marginBottom:e.marginBottom,marginLeft:e.marginLeft,marginRight:e.marginRight,cssFloat:e.cssFloat,display:e.display},a={top:i(e.top),marginBottom:i(e.marginBottom),paddingLeft:i(e.paddingLeft),paddingRight:i(e.paddingRight),borderLeftWidth:i(e.borderLeftWidth),borderRightWidth:i(e.borderRightWidth)};t.style.position=r;var l={position:t.style.position,top:t.style.top,bottom:t.style.bottom,left:t.style.left,right:t.style.right,width:t.style.width,marginTop:t.style.marginTop,marginLeft:t.style.marginLeft,marginRight:t.style.marginRight},d=L(t),c=L(n),f={node:n,css:{position:n.style.position},computed:{position:o.position},numeric:{borderLeftWidth:i(o.borderLeftWidth),borderRightWidth:i(o.borderRightWidth),borderTopWidth:i(o.borderTopWidth),borderBottomWidth:i(o.borderBottomWidth)}},p={node:t,box:{left:d.win.left,right:N.clientWidth-d.win.right},offset:{top:d.win.top-c.win.top-f.numeric.borderTopWidth,left:d.win.left-c.win.left-f.numeric.borderLeftWidth,right:-d.win.right+c.win.right-f.numeric.borderRightWidth},css:l,isCell:"table-cell"==e.display,computed:s,numeric:a,width:d.win.right-d.win.left,height:d.win.bottom-d.win.top,mode:-1,inited:!1,parent:f,limit:{start:d.doc.top-a.top,end:c.doc.top+n.offsetHeight-f.numeric.borderBottomWidth-t.offsetHeight-a.top-a.marginBottom}};return p}function w(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}function L(t){var n=t.getBoundingClientRect();return{doc:{top:n.top+e.pageYOffset,left:n.left+e.pageXOffset},win:n}}function b(){_=setInterval(function(){!c()&&H()},500)}function E(){clearInterval(_)}function T(){M&&(document[D]?E():b())}function R(){M||(r(),u(),e.addEventListener("scroll",s),e.addEventListener("wheel",a),e.addEventListener("resize",H),e.addEventListener("orientationchange",H),t.addEventListener(I,T),b(),M=!0)}function H(){if(M){m();for(var t=W.length-1;t>=0;t--)W[t]=y(W[t].node);u()}}function S(){e.removeEventListener("scroll",s),e.removeEventListener("wheel",a),e.removeEventListener("resize",H),e.removeEventListener("orientationchange",H),t.removeEventListener(I,T),E(),M=!1}function C(){S(),m()}function k(){for(C();W.length;)W.pop()}function A(t){for(var e=W.length-1;e>=0;e--)if(W[e].node===t)return;var n=y(t);W.push(n),M?f(n):R()}function O(t){for(var e=W.length-1;e>=0;e--)W[e].node===t&&(p(W[e]),W.splice(e,1))}var B,_,W=[],M=!1,N=t.documentElement,x=function(){},D="hidden",I="visibilitychange";void 0!==t.webkitHidden&&(D="webkitHidden",I="webkitvisibilitychange"),e.getComputedStyle||n();for(var F=["","-webkit-","-moz-","-ms-"],P=document.createElement("div"),G=F.length-1;G>=0;G--){try{P.style.position=F[G]+"sticky"}catch(Y){}""!=P.style.position&&n()}r(),e.Stickyfill={stickies:W,add:A,remove:O,init:R,rebuild:H,pause:S,stop:C,kill:k}}(document,window),window.jQuery&&!function(t){t.fn.Stickyfill=function(t){return this.each(function(){Stickyfill.add(this)}),this}}(window.jQuery);for(var stickyElements=document.getElementsByClassName("sticky"),i=stickyElements.length-1;i>=0;i--)Stickyfill.add(stickyElements[i]);!function(t){function e(t){return"string"==typeof t?document.getElementById(t):t}t.AddClass=function(t,n){t=e(t),t.classList.contains(n)||t.classList.add(n)},t.RemoveClass=function(t,n){t=e(t),t.classList.contains(n)&&t.classList.remove(n)},t.ClearHTML=function(t){t=e(t),t.innerHTML=""},t.AppendHTML=function(t,n){t=e(t),t.innerHTML=t.innerHTML+n},t.InnerHTML=function(n,o){n=e(n),t.ClearHTML(n),t.AppendHTML(n,o)}}(this.DomHelper=void 0==this.DomHelper?{}:this.DomHelper),function(t,e){function n(e,n,i){t.AppendHTML(e,o(n,i))}function o(t,e){return"<div class='alert "+e+"'><div class='alert-content'>"+t+"</div></div>"}e.GenerateDangerAlert=function(t,e){n(t,e,"alert-danger")},e.GenerateSuccessAlert=function(t,e){n(t,e,"alert-success")}}(DomHelper,this.AlertFactory=void 0==this.AlertFactory?{}:this.AlertFactory),function(t){function e(t,e,n,o){var i=new XMLHttpRequest;i.onload=function(){i.readyState==XMLHttpRequest.DONE&&o(i.status,i.responseText)},i.open(e,t),i.send(n)}t.INTERNAL_SERVER_ERROR=500,t.UNPROCESSABLE_ENTITY=422,t.OK=200,t.CREATED=201,t.Get=function(t,n){e(t,"GET","",callback)},t.Post=function(t,n,o){e(t,"POST",n,o)}}(this.HttpHelper=void 0==this.HttpHelper?{}:this.HttpHelper),function(t){t.Redirect=function(t,e){setTimeout(function(){window.location=t},e)}}(this.UrlHelper=void 0==this.UrlHelper?{}:this.UrlHelper),document.getElementById("signup-form").addEventListener("submit",function(t){t.preventDefault(),SignupController.Signup(this.getAttribute("data-source"))}),function(t,e,n,o,i){function r(t,e,n,o,i,r,s){return!0}function s(i,r){var s=JSON.parse(r),a=document.getElementById("notifications");t.ClearHTML(a),["first_name","middle_name","last_name","email","phone","first_password","second_password"].forEach(function(e){t.RemoveClass(e,"form-input-error"),t.ClearHTML(e+"-error")}),i==n.UNPROCESSABLE_ENTITY?(e.GenerateDangerAlert(a,"Could not sign up. Please check validation errors."),window.scrollTo(0,0),Object.keys(s).forEach(function(e){console.log(e),t.AddClass(e,"form-input-error"),t.InnerHTML(e+"-error",s[e].replace(/_/g," "))})):i==n.INTERNAL_SERVER_ERROR?(e.GenerateDangerAlert(a,s.message),window.scrollTo(0,0)):i==n.CREATED&&(e.GenerateSuccessAlert(a,s.message),window.scrollTo(0,0),o.Redirect(s.redirect_url,1e3))}SignupController.Signup=function(t){var e=document.getElementById("signup-form"),o=e.elements.first_name.value,i=e.elements.middle_name.value,a=e.elements.last_name,l=e.elements.email.value,d=e.elements.phone.value,c=e.elements.first_password.value,f=e.elements.second_password.value;if(r(o,i,a,l,d,c,f)){var p=t+"action/signup",u=new FormData(e);n.Post(p,u,s)}}}(DomHelper,AlertFactory,HttpHelper,UrlHelper,this.SignupController=void 0==this.SignupController?{}:this.SignupController);
//# sourceMappingURL=signup.js.map