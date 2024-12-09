define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-llms-new",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends s.default{queryParams={llmTemplate:{refreshModel:!0}}
async model(){const e=this.store.createRecord("ai-llm")
return e.provider_params={},e}setupController(e,s){super.setupController(e,s),e.set("allLlms",this.modelFor("adminPlugins.show.discourse-ai-llms")),e.set("llmTemplate",this.paramsFor(this.routeName).llmTemplate||null)}}e.default=o})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-llms-show",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends s.default{async model(e){const s=this.modelFor("adminPlugins.show.discourse-ai-llms"),o=parseInt(e.id,10),i=s.findBy("id",o)
return i.provider_params=i.provider_params||{},i}setupController(e,s){super.setupController(e,s),e.set("allLlms",this.modelFor("adminPlugins.show.discourse-ai-llms"))}}e.default=o})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-llms",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends s.default{model(){return this.store.findAll("ai-llm")}}e.default=o})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-personas-new",["exports","discourse/lib/constants","discourse/routes/discourse"],(function(e,s,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends o.default{async model(){const e=this.store.createRecord("ai-persona")
return e.set("allowed_group_ids",[s.AUTO_GROUPS.trust_level_0.id]),e.set("rag_uploads",[]),e.set("rag_chunk_tokens",374),e.set("rag_chunk_overlap_tokens",10),e.set("rag_conversation_chunks",10),e.set("allow_personal_messages",!0),e.set("tool_details",!1),e}setupController(e,s){super.setupController(e,s),e.set("allPersonas",this.modelFor("adminPlugins.show.discourse-ai-personas"))}}e.default=i})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-personas-show",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends s.default{async model(e){const s=this.modelFor("adminPlugins.show.discourse-ai-personas"),o=parseInt(e.id,10)
return s.findBy("id",o)}setupController(e,s){super.setupController(e,s),e.set("allPersonas",this.modelFor("adminPlugins.show.discourse-ai-personas"))}}e.default=o})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-personas",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends s.default{model(){return this.store.findAll("ai-persona")}}e.default=o})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-tools-new",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends s.default{async model(){return this.store.createRecord("ai-tool")}setupController(e){super.setupController(...arguments)
const s=this.modelFor("adminPlugins.show.discourse-ai-tools")
e.set("allTools",s),e.set("presets",s.resultSetMeta.presets)}}e.default=o})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-tools-show",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends s.default{async model(e){const s=this.modelFor("adminPlugins.show.discourse-ai-tools"),o=parseInt(e.id,10)
return s.find((e=>e.id===o))}setupController(e){super.setupController(...arguments)
const s=this.modelFor("adminPlugins.show.discourse-ai-tools")
e.set("allTools",s),e.set("presets",s.resultSetMeta.presets)}}e.default=o})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-tools",["exports","@ember/service","discourse/routes/discourse"],(function(e,s,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends o.default{static#e=(()=>dt7948.g(this.prototype,"store",[s.service]))()
#s=(()=>{dt7948.i(this,"store")})()
model(){return this.store.findAll("ai-tool")}}e.default=i})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-usage",["exports","@ember/service","discourse/lib/ajax","discourse/routes/discourse"],(function(e,s,o,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class t extends i.default{static#e=(()=>dt7948.g(this.prototype,"store",[s.service]))()
#s=(()=>{dt7948.i(this,"store")})()
model(){return(0,o.ajax)("/admin/plugins/discourse-ai/ai-usage.json")}}e.default=t})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-llms/index",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"/hpMWqzQ",block:'[[[8,[39,0],null,[["@llms"],[[30,0,["model"]]]],null]],[],false,["ai-llms-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-llms/index.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-llms/new",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"bkbJM+7c",block:'[[[8,[39,0],null,[["@llms","@currentLlm","@llmTemplate"],[[30,0,["allLlms"]],[30,0,["model"]],[30,0,["llmTemplate"]]]],null]],[],false,["ai-llms-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-llms/new.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-llms/show",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"tdQ3gCh/",block:'[[[8,[39,0],null,[["@llms","@currentLlm"],[[30,0,["allLlms"]],[30,0,["model"]]]],null]],[],false,["ai-llms-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-llms/show.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-personas/index",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"S3ls7MhI",block:'[[[8,[39,0],null,[["@personas"],[[30,0,["model"]]]],null]],[],false,["ai-persona-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-personas/index.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-personas/new",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"uPcey72d",block:'[[[8,[39,0],null,[["@personas","@currentPersona"],[[30,0,["allPersonas"]],[30,0,["model"]]]],null]],[],false,["ai-persona-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-personas/new.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-personas/show",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"vhi53gxi",block:'[[[8,[39,0],null,[["@personas","@currentPersona"],[[30,0,["allPersonas"]],[30,0,["model"]]]],null]],[],false,["ai-persona-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-personas/show.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-tools/index",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"jeGs6+Fr",block:'[[[8,[39,0],null,[["@tools"],[[30,0,["model"]]]],null]],[],false,["ai-tool-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-tools/index.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-tools/new",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"k5O9JeBX",block:'[[[10,"section"],[14,0,"ai-persona-tool-editor__current admin-detail pull-left"],[12],[1,"\\n  "],[8,[39,0],null,[["@tools","@model","@presets"],[[30,0,["allTools"]],[30,0,["model"]],[30,0,["presets"]]]],null],[1,"\\n"],[13]],[],false,["ai-tool-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-tools/new.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-tools/show",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"jYv1nOaS",block:'[[[10,"section"],[14,0,"ai-persona-tool-editor__current admin-detail pull-left"],[12],[1,"\\n  "],[8,[39,0],null,[["@tools","@model","@presets"],[[30,0,["allTools"]],[30,0,["model"]],[30,0,["presets"]]]],null],[1,"\\n"],[13]],[],false,["ai-tool-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-tools/show.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-usage",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"aIPPrruw",block:'[[[8,[39,0],null,[["@model"],[[30,0,["model"]]]],null]],[],false,["ai-usage"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai-usage.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-ai_admin-2ca9aeb21685a4662cdd875fffc837aafa31a14c69115989939b03ecbaf9351e.map
//!

;
