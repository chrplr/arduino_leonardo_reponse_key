define("discourse/plugins/discourse-details/initializers/apply-details",["exports","jquery","discourse/lib/plugin-api","discourse-i18n"],(function(e,i,t,s){"use strict"
function l(e){e.decorateCooked((e=>(0,i.default)("details",e)),{id:"discourse-details"}),e.addComposerToolbarPopupMenuOption({action:function(e){e.applySurround(`\n[details="${(0,s.i18n)("composer.details_title")}"]\n`,"\n[/details]\n","details_text",{multiline:!1})},icon:"caret-right",label:"details.title"})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"apply-details",initialize(){(0,t.withPluginApi)("1.14.0",l)}}})),define("discourse/plugins/discourse-details/lib/discourse-markdown/details",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.allowList(["summary","summary[title]","details","details[open]","details.elided"]),e.registerPlugin((e=>{e.block.bbcode.ruler.push("details",i)}))}
const i={tag:"details",before(e,i){const t=i.attrs,s=e.push("bbcode_open","details",1)
e.push("bbcode_open","summary",1),""===t.open&&(s.attrs=[["open",""]]),e.push("text","",0).content=t._default||"",e.push("bbcode_close","summary",-1)},after(e){e.push("bbcode_close","details",-1)}}}))

//# sourceMappingURL=discourse-details-95310822c6ffe544451c27eff3aa57a1711aaf3fa82b285918b278db887b8432.map
//!

;
