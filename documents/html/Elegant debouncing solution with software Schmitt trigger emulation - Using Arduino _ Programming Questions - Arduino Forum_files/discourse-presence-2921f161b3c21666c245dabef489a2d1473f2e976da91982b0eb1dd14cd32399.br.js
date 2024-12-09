define("discourse/plugins/discourse-presence/discourse/components/composer-presence-display",["exports","@glimmer/component","@glimmer/tracking","@ember/service","truth-helpers","discourse/components/user-link","discourse/helpers/avatar","discourse/helpers/helper-fn","discourse-i18n","@ember/component","@ember/template-factory"],(function(e,s,t,r,n,i,c,o,l,p,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class u extends s.default{static#e=(()=>dt7948.g(this.prototype,"presence",[r.service]))()
#s=(()=>{dt7948.i(this,"presence")})()
static#t=(()=>dt7948.g(this.prototype,"composerPresenceManager",[r.service]))()
#r=(()=>{dt7948.i(this,"composerPresenceManager")})()
static#n=(()=>dt7948.g(this.prototype,"currentUser",[r.service]))()
#i=(()=>{dt7948.i(this,"currentUser")})()
static#c=(()=>dt7948.g(this.prototype,"siteSettings",[r.service]))()
#o=(()=>{dt7948.i(this,"siteSettings")})()
static#l=(()=>dt7948.g(this.prototype,"replyChannel",[t.tracked]))()
#p=(()=>{dt7948.i(this,"replyChannel")})()
static#a=(()=>dt7948.g(this.prototype,"whisperChannel",[t.tracked]))()
#u=(()=>{dt7948.i(this,"whisperChannel")})()
static#d=(()=>dt7948.g(this.prototype,"editChannel",[t.tracked]))()
#h=(()=>{dt7948.i(this,"editChannel")})()
setupReplyChannel=(()=>(0,o.default)(((e,s)=>{const{topic:t}=this.args.model
if(!t||!this.isReply)return
const r=`/discourse-presence/reply/${t.id}`,n=this.presence.getChannel(r)
this.replyChannel=n,n.subscribe(),s.cleanup((()=>n.unsubscribe()))})))()
setupWhisperChannel=(()=>(0,o.default)(((e,s)=>{const{topic:t}=this.args.model,{whisperer:r}=this.currentUser
if(!t||!this.isReply||!r)return
const n=`/discourse-presence/whisper/${t.id}`,i=this.presence.getChannel(n)
this.whisperChannel=i,i.subscribe(),s.cleanup((()=>i.unsubscribe()))})))()
setupEditChannel=(()=>(0,o.default)(((e,s)=>{const{post:t}=this.args.model
if(!t||!this.isEdit)return
const r=`/discourse-presence/edit/${t.id}`,n=this.presence.getChannel(r)
this.editChannel=n,n.subscribe(),s.cleanup((()=>n.unsubscribe()))})))()
notifyState=(()=>(0,o.default)(((e,s)=>{const{topic:t,post:r,replyDirty:n}=this.args.model,i=this.isEdit?r:t
if(i){const e=`/discourse-presence/${this.state}/${i.id}`
this.composerPresenceManager.notifyState(e,n)}s.cleanup((()=>this.composerPresenceManager.leave()))})))()
get isReply(){return"reply"===this.state||"whisper"===this.state}get isEdit(){return"edit"===this.state}get state(){const{editingPost:e,whisper:s,replyingToTopic:t}=this.args.model
return e?"edit":s?"whisper":t?"reply":void 0}static#m=(()=>dt7948.n(this.prototype,"state",[t.cached]))()
get users(){let e
if(this.isEdit)e=this.editChannel?.users||[]
else{e=[...this.replyChannel?.users||[],...this.whisperChannel?.users||[]]}return e.filter((e=>e.id!==this.currentUser.id)).slice(0,this.siteSettings.presence_max_users_shown)}static#g=(()=>dt7948.n(this.prototype,"users",[t.cached]))()
static#f=(()=>(0,p.setComponentTemplate)((0,a.createTemplateFactory)({id:"zqhHwS/X",block:'[[[1,"\\n    "],[1,[30,0,["setupReplyChannel"]]],[1,"\\n    "],[1,[30,0,["setupWhisperChannel"]]],[1,"\\n    "],[1,[30,0,["setupEditChannel"]]],[1,"\\n    "],[1,[30,0,["notifyState"]]],[1,"\\n\\n"],[41,[28,[32,0],[[30,0,["users","length"]],0],null],[[[1,"      "],[10,0],[14,0,"presence-users"],[12],[1,"\\n        "],[10,0],[14,0,"presence-avatars"],[12],[1,"\\n"],[42,[28,[31,2],[[28,[31,2],[[30,0,["users"]]],null]],null],null,[[[1,"            "],[8,[32,1],null,[["@user"],[[30,1]]],[["default"],[[[[1,"\\n              "],[1,[28,[32,2],[[30,1]],[["imageSize"],["small"]]]],[1,"\\n            "]],[]]]]],[1,"\\n"]],[1]],null],[1,"        "],[13],[1,"\\n\\n        "],[10,1],[14,0,"presence-text"],[12],[1,"\\n          "],[10,1],[14,0,"description"],[12],[41,[30,0,["isReply"]],[[[1,[28,[32,3],["presence.replying"],[["count"],[[30,0,["users","length"]]]]]]],[]],[[[1,[28,[32,3],["presence.editing"],[["count"],[[30,0,["users","length"]]]]]]],[]]],[13],[1,"\\n          "],[10,1],[14,0,"wave"],[12],[1,"\\n            "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n            "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n            "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "]],["user"],false,["if","each","-track-array"]]',moduleName:"/var/www/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-presence/discourse/components/composer-presence-display.js",scope:()=>[n.gt,i.default,c.default,l.i18n],isStrictMode:!0}),this))()}e.default=u})),define("discourse/plugins/discourse-presence/discourse/components/topic-presence-display",["exports","@glimmer/component","@glimmer/tracking","@ember/service","truth-helpers","discourse/components/user-link","discourse/helpers/avatar","discourse/helpers/helper-fn","discourse-i18n","@ember/component","@ember/template-factory"],(function(e,s,t,r,n,i,c,o,l,p,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class u extends s.default{static#e=(()=>dt7948.g(this.prototype,"presence",[r.service]))()
#s=(()=>{dt7948.i(this,"presence")})()
static#t=(()=>dt7948.g(this.prototype,"currentUser",[r.service]))()
#i=(()=>{dt7948.i(this,"currentUser")})()
static#n=(()=>dt7948.g(this.prototype,"replyChannel",[t.tracked]))()
#p=(()=>{dt7948.i(this,"replyChannel")})()
static#c=(()=>dt7948.g(this.prototype,"whisperChannel",[t.tracked]))()
#u=(()=>{dt7948.i(this,"whisperChannel")})()
setupReplyChannel=(()=>(0,o.default)(((e,s)=>{const{topic:t}=this.args
if(!t)return
const r=`/discourse-presence/reply/${t.id}`,n=this.presence.getChannel(r)
this.replyChannel=n,n.subscribe(),s.cleanup((()=>n.unsubscribe()))})))()
setupWhisperChannel=(()=>(0,o.default)(((e,s)=>{const{topic:t}=this.args,{whisperer:r}=this.currentUser
if(!t||!r)return
const n=`/discourse-presence/whisper/${t.id}`,i=this.presence.getChannel(n)
this.whisperChannel=i,i.subscribe(),s.cleanup((()=>i.unsubscribe()))})))()
get users(){return[...this.replyChannel?.users||[],...this.whisperChannel?.users||[]].filter((e=>e.id!==this.currentUser.id))}static#l=(()=>dt7948.n(this.prototype,"users",[t.cached]))()
static#a=(()=>(0,p.setComponentTemplate)((0,a.createTemplateFactory)({id:"jkMEHMUr",block:'[[[1,"\\n    "],[1,[30,0,["setupReplyChannel"]]],[1,"\\n    "],[1,[30,0,["setupWhisperChannel"]]],[1,"\\n\\n"],[41,[28,[32,0],[[30,0,["users","length"]],0],null],[[[1,"      "],[10,0],[14,0,"presence-users"],[12],[1,"\\n        "],[10,0],[14,0,"presence-avatars"],[12],[1,"\\n"],[42,[28,[31,2],[[28,[31,2],[[30,0,["users"]]],null]],null],null,[[[1,"            "],[8,[32,1],null,[["@user"],[[30,1]]],[["default"],[[[[1,"\\n              "],[1,[28,[32,2],[[30,1]],[["imageSize"],["small"]]]],[1,"\\n            "]],[]]]]],[1,"\\n"]],[1]],null],[1,"        "],[13],[1,"\\n\\n        "],[10,1],[14,0,"presence-text"],[12],[1,"\\n          "],[10,1],[14,0,"description"],[12],[1,"\\n            "],[1,[28,[32,3],["presence.replying_to_topic"],[["count"],[[30,0,["users","length"]]]]]],[1,"\\n          "],[13],[1,"\\n          "],[10,1],[14,0,"wave"],[12],[1,"\\n            "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n            "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n            "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "]],["user"],false,["if","each","-track-array"]]',moduleName:"/var/www/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-presence/discourse/components/topic-presence-display.js",scope:()=>[n.gt,i.default,c.default,l.i18n],isStrictMode:!0}),this))()}e.default=u})),define("discourse/plugins/discourse-presence/discourse/services/composer-presence-manager",["exports","@ember/runloop","@ember/service","discourse-common/config/environment"],(function(e,s,t,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{static#e=(()=>dt7948.g(this.prototype,"currentUser",[t.service]))()
#i=(()=>{dt7948.i(this,"currentUser")})()
static#t=(()=>dt7948.g(this.prototype,"presence",[t.service]))()
#s=(()=>{dt7948.i(this,"presence")})()
static#n=(()=>dt7948.g(this.prototype,"siteSettings",[t.service]))()
#o=(()=>{dt7948.i(this,"siteSettings")})()
notifyState(e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4
if(!(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]))return void this.leave()
const n=this.siteSettings.allow_users_to_hide_profile,i=this.currentUser.user_option.hide_presence
n&&i||this._name!==e&&(this.leave(),this._name=e,this._channel=this.presence.getChannel(e),this._channel.enter(),(0,r.isTesting)()||(this._autoLeaveTimer=(0,s.debounce)(this,this.leave,t)))}leave(){this._autoLeaveTimer&&((0,s.cancel)(this._autoLeaveTimer),this._autoLeaveTimer=null),this._channel?.leave(),this._channel=null,this._name=null}}e.default=n})),define("discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"CkgOp30y",block:'[[[8,[39,0],null,[["@model"],[[30,1,["model"]]]],null]],["@outletArgs"],false,["composer-presence-display"]]',moduleName:"discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"+1wbySXZ",block:'[[[8,[39,0],null,[["@topic"],[[30,1,["model"]]]],null]],["@outletArgs"],false,["topic-presence-display"]]',moduleName:"discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-presence-4d26799b3f3f7184e5104c29602249816554fdf738c340e5e7490e148af6305e.map
//!

;
