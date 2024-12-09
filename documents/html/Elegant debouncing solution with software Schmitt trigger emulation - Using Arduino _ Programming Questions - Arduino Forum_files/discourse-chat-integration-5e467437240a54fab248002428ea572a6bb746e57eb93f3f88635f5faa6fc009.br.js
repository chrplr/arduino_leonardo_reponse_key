define("discourse/plugins/discourse-chat-integration/discourse/public-route-map",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.route("transcript",{path:"/chat-transcript/:secret"})}})),define("discourse/plugins/discourse-chat-integration/discourse/routes/transcript",["exports","@ember/service","discourse/lib/ajax","discourse/lib/ajax-error","discourse/routes/discourse"],(function(e,t,r,s,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends i.default{static#e=(()=>dt7948.g(this.prototype,"currentUser",[t.service]))()
#t=(()=>{dt7948.i(this,"currentUser")})()
static#r=(()=>dt7948.g(this.prototype,"composer",[t.service]))()
#s=(()=>{dt7948.i(this,"composer")})()
static#i=(()=>dt7948.g(this.prototype,"router",[t.service]))()
#o=(()=>{dt7948.i(this,"router")})()
async model(e){if(!this.currentUser)return this.session.set("shouldRedirectToUrl",window.location.href),void this.router.replaceWith("login")
await this.router.replaceWith("discovery.latest").followRedirects()
try{const t=await(0,r.ajax)(`/chat-transcript/${e.secret}`)
this.composer.openNewTopic({body:t.content})}catch(t){(0,s.popupAjaxError)(t)}}}e.default=o}))

//# sourceMappingURL=discourse-chat-integration-a5f6f1e0025336bc25614a90faaefe06be3dd0f3df3c7d6de117357362a25c6e.map
//!

;
