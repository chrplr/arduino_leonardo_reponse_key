define("discourse/plugins/discourse-deprecation-collector/discourse/api-initializers/init-deprecation-collector",["exports","discourse/lib/api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.apiInitializer)("0.8",(e=>{e.container.lookup("service:deprecation-collector")}))})),define("discourse/plugins/discourse-deprecation-collector/discourse/services/deprecation-collector",["exports","@ember/debug","@ember/runloop","@ember/service","discourse/lib/source-identifier","discourse-common/deprecation-workflow","discourse-common/lib/debounce","discourse-common/lib/deprecated","discourse-common/lib/get-url","discourse-common/utils/decorators"],(function(e,t,i,o,r,s,n,c,d,l){"use strict"
let u
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,(0,t.registerDeprecationHandler)(((e,t,i)=>(u?.(e,t),i(e,t)))),(0,c.registerDeprecationHandler)(((e,t)=>u?.(e,t)))
class a extends o.default{static#e=(()=>dt7948.g(this.prototype,"router",[o.service]))()
#t=(()=>{dt7948.i(this,"router")})()
#i=(()=>new Map)()
#o=(()=>new Map)()
#r
constructor(){super(...arguments),u=this.track
for(const e of s.default)this.#i.set(e.matchId,e.handler)
document.addEventListener("visibilitychange",this.handleVisibilityChanged),this.router.on("routeWillChange",this.debouncedReport)}willDestroy(){u=null,window.removeEventListener("visibilitychange",this.handleVisibilityChanged),this.router.off("routeWillChange",this.debouncedReport),(0,i.cancel)(this.#r),super.willDestroy()}handleVisibilityChanged(){"visible"!==document.visibilityState&&this.report()}static#s=(()=>dt7948.n(this.prototype,"handleVisibilityChanged",[l.bind]))()
track(e,t){if("silence"===this.#i.get(t.id))return
if("browser-extension"===(0,r.default)()?.type)return
let i=this.#o.get(t.id)||0
i+=1,this.#o.set(t.id,i)}static#n=(()=>dt7948.n(this.prototype,"track",[l.bind]))()
debouncedReport(){this.#r=(0,n.default)(this.report,1e4)}static#c=(()=>dt7948.n(this.prototype,"debouncedReport",[l.bind]))()
report(){if((0,i.cancel)(this.#r),0===this.#o.size)return
const e=Object.fromEntries(this.#o.entries())
this.#o.clear()
const t=new FormData
t.append("data",JSON.stringify(e)),navigator.sendBeacon((0,d.default)("/deprecation-collector/log"),t)}static#d=(()=>dt7948.n(this.prototype,"report",[l.bind]))()}e.default=a}))

//# sourceMappingURL=discourse-deprecation-collector-4b5f1d5fa7ffc1e6551bc4f273d5a4ee5aaa322c24b60a031b1c496f0ed44176.map
//!

;
