!function(e){e.ClearHTML=function(e){e.innerHTML=""},e.AppendHTML=function(e,t){e.innerHTML=e.innerHTML+t}}(this.DomHelper=void 0==this.DomHelper?{}:this.DomHelper),function(e,t){function n(t,n,i,o){o&&e.ClearHTML(t),e.AppendHTML(t,r(n,i))}function r(e,t){return"<div class='alert "+t+"'>"+e+"</div>"}t.GenerateDangerAlert=function(e,t,r){n(e,r,"alert-danger",t)},t.GenerateSuccessAlert=function(e,t,r){n(e,r,"alert-success",t)}}(DomHelper,this.AlertFactory=void 0==this.AlertFactory?{}:this.AlertFactory),function(e){function t(e,t,n,r){var i=new XMLHttpRequest;i.onload=function(){i.readyState==XMLHttpRequest.DONE&&r(i.status,i.responseText)},i.open(t,e),i.send(n)}e.UNPROCESSABLE_ENTITY=422,e.OK=200,e.CREATED=201,e.Get=function(e,n){t(e,"GET","",callback)},e.Post=function(e,n,r){t(e,"POST",n,r)}}(this.HttpHelper=void 0==this.HttpHelper?{}:this.HttpHelper),function(e){e.Redirect=function(e,t){setTimeout(function(){window.location=e},t)}}(this.UrlHelper=void 0==this.UrlHelper?{}:this.UrlHelper),document.getElementById("signup-form").addEventListener("submit",function(e){e.preventDefault(),SignupController.Signup(this.getAttribute("data-source"))}),function(e,t,n,r){function i(e,t,n,r,i,o,s){return!0}function o(r,i){var o=JSON.parse(i),s=document.getElementById("notifications");r==t.UNPROCESSABLE_ENTITY?(void 0!=o.first_name&&e.GenerateDangerAlert(s,!1,o.first_name),void 0!=o.middle_name&&e.GenerateDangerAlert(s,!1,o.middle_name),void 0!=o.last_name&&e.GenerateDangerAlert(s,!1,o.last_name),void 0!=o.email_address&&e.GenerateDangerAlert(s,!1,o.email_address),void 0!=o.phone_number&&e.GenerateDangerAlert(s,!1,o.phone_number),void 0!=o.first_password&&e.GenerateDangerAlert(s,!1,o.first_password),void 0!=o.second_password&&e.GenerateDangerAlert(s,!1,o.second_password)):r==t.CREATED&&(e.GenerateSuccessAlert(s,!0,o.message),n.Redirect(o.redirect_url,1e3))}SignupController.Signup=function(e){var n=document.getElementById("signup-form"),r=n.elements.first_name.value,s=n.elements.middle_name.value,a=n.elements.last_name,l=n.elements.email.value,u=n.elements.phone.value,d=n.elements.first_password.value,c=n.elements.second_password.value;if(i(r,s,a,l,u,d,c)){var p=e+"action/signup",m=new FormData(n);t.Post(p,m,o)}}}(AlertFactory,HttpHelper,UrlHelper,this.SignupController=void 0==this.SignupController?{}:this.SignupController);
//# sourceMappingURL=signup.js.map
