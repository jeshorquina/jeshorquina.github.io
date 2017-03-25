!function(e){function t(e){return"string"==typeof e?document.getElementById(e):e}e.AddClass=function(e,n){e=t(e),e.classList.contains(n)||e.classList.add(n)},e.RemoveClass=function(e,n){e=t(e),e.classList.contains(n)&&e.classList.remove(n)},e.ClearHTML=function(e){e=t(e),e.innerHTML=""},e.AppendHTML=function(e,n){e=t(e),e.innerHTML=e.innerHTML+n},e.InnerHTML=function(n,r){n=t(n),e.ClearHTML(n),e.AppendHTML(n,r)}}(this.DomHelper=void 0==this.DomHelper?{}:this.DomHelper),function(e,t){function n(t,n,o){e.AppendHTML(t,r(n,o))}function r(e,t){return"<div class='alert "+t+"'>"+e+"</div>"}t.GenerateDangerAlert=function(e,t){n(e,t,"alert-danger")},t.GenerateSuccessAlert=function(e,t){n(e,t,"alert-success")}}(DomHelper,this.AlertFactory=void 0==this.AlertFactory?{}:this.AlertFactory),function(e){function t(e,t,n,r){var o=new XMLHttpRequest;o.onload=function(){o.readyState==XMLHttpRequest.DONE&&r(o.status,o.responseText)},o.open(t,e),o.send(n)}e.UNPROCESSABLE_ENTITY=422,e.OK=200,e.CREATED=201,e.Get=function(e,n){t(e,"GET","",callback)},e.Post=function(e,n,r){t(e,"POST",n,r)}}(this.HttpHelper=void 0==this.HttpHelper?{}:this.HttpHelper),function(e){e.Redirect=function(e,t){setTimeout(function(){window.location=e},t)}}(this.UrlHelper=void 0==this.UrlHelper?{}:this.UrlHelper),document.getElementById("login-form").addEventListener("submit",function(e){e.preventDefault(),LoginController.Login(this.getAttribute("data-source"))}),function(e,t,n,r,o){function i(e,t){return!0}function s(o,i){var s=JSON.parse(i),l=document.getElementById("notifications");e.ClearHTML(l),o==n.UNPROCESSABLE_ENTITY?(t.GenerateDangerAlert(l,"Could not log in. Please check validation errors."),["username","password"].forEach(function(t){e.RemoveClass(t,"input-error"),e.ClearHTML(t+"-error")}),Object.keys(s).forEach(function(t){e.AddClass(t,"input-error"),e.InnerHTML(t+"-error",s[t])})):o==n.OK&&(t.GenerateSuccessAlert(l,s.message),r.Redirect(s.redirect_url,1e3))}o.Login=function(e){var t=document.getElementById("login-form"),r=t.elements.username.value,o=t.elements.password.value;if(i(r,o)){var l=e+"action/login",a=new FormData(t);n.Post(l,a,s)}}}(DomHelper,AlertFactory,HttpHelper,UrlHelper,this.LoginController=void 0==this.LoginController?{}:this.LoginController);
//# sourceMappingURL=login.js.map
