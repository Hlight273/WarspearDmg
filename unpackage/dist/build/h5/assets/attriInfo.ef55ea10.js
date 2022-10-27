var t=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(s,i,e)=>i in s?t(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e,r=(t,s)=>{for(var i in s||(s={}))o.call(s,i)&&n(t,i,s[i]);if(e)for(var i of e(s))a.call(s,i)&&n(t,i,s[i]);return t};import{z as l,o as h,f as p,w as c,l as u,j as m,n as d,g as f,h as g,r as y,e as k,b,A as w,a as A,t as C,c as T,d as v,i as P}from"./index.42495251.js";import{_ as x,r as D}from"./uni-app.es.b5f3add0.js";class S{constructor(t,s){this.options=t,this.animation=l(t),this.currentStepAnimates={},this.next=0,this.$=s}_nvuePushAnimates(t,s){let i=this.currentStepAnimates[this.next],e={};if(e=i||{styles:{},config:{}},j.includes(t)){e.styles.transform||(e.styles.transform="");let i="";"rotate"===t&&(i="deg"),e.styles.transform+=`${t}(${s+i}) `}else e.styles[t]=`${s}`;this.currentStepAnimates[this.next]=e}_animateRun(t={},s={}){let i=this.$.$refs.ani.ref;if(i)return new Promise(((e,o)=>{nvueAnimation.transition(i,r({styles:t},s),(t=>{e()}))}))}_nvueNextAnimate(t,s=0,i){let e=t[s];if(e){let{styles:o,config:a}=e;this._animateRun(o,a).then((()=>{s+=1,this._nvueNextAnimate(t,s,i)}))}else this.currentStepAnimates={},"function"==typeof i&&i(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const j=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function I(t,s){if(s)return clearTimeout(s.timer),new S(t,s)}j.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{S.prototype[t]=function(...s){return this.animation[t](...s),this}}));var O=x({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t=(e=r({},this.styles),o={"transition-duration":this.duration/1e3+"s"},s(e,i(o)));var e,o;let a="";for(let s in t){a+=this.toLine(s)+":"+t[s]+";"}return a},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=I(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,s={}){if(this.animation){for(let s in t)try{"object"==typeof t[s]?this.animation[s](...t[s]):this.animation[s](t[s])}catch(i){console.error(`方法 ${s} 不存在`)}return this.animation.step(s),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:s}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=s,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=I(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:s}=this.styleInit(!1);this.opacity=t||1,this.transform=s,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let s={transform:""},i=(t,i)=>{"fade"===i?s.opacity=this.animationType(t)[i]:s.transform+=this.animationType(t)[i]+" "};return"string"==typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((s=>{i(t,s)})),s},tranfromInit(t){let s=(t,s)=>{let i=null;"fade"===s?i=t?0:1:(i=t?"-100%":"0","zoom-in"===s&&(i=t?.8:1),"zoom-out"===s&&(i=t?1.2:1),"slide-right"===s&&(i=t?"100%":"0"),"slide-bottom"===s&&(i=t?"100%":"0")),this.animation[this.animationMode()[s]](i)};return"string"==typeof this.modeClass?s(t,this.modeClass):this.modeClass.forEach((i=>{s(t,i)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,s,i,e,o,a){const n=g;return o.isShow?(h(),p(n,{key:0,ref:"ani",animation:o.animationData,class:m(i.customClass),style:d(a.transformStyles),onClick:a.onClick},{default:c((()=>[u(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])):f("",!0)}]]),M={name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(s=>{if(this.disable)return;const i=Object.keys(t).find((i=>{const e=s.key,o=t[i];return o===e||Array.isArray(o)&&o.includes(e)}));i&&setTimeout((()=>{this.$emit(i,{})}),0)}))},render:()=>{}};var H=x({name:"uniPopup",components:{keypress:M},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted(){(()=>{const{windowWidth:t,windowHeight:s,windowTop:i,safeArea:e,screenHeight:o,safeAreaInsets:a}=w();this.popupWidth=t,this.popupHeight=s+(i||0),e&&this.safeArea?this.safeAreaInsets=a.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(){document.getElementsByTagName("body")[0].style.overflow="visible"},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){this.showPopup&&(clearTimeout(this.timer),this.showPopup=!1);t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,s,i,e,o,a){const n=D(y("uni-transition"),O),r=g,l=k("keypress");return o.showPopup?(h(),p(r,{key:0,class:m(["uni-popup",[o.popupstyle,a.isDesktop?"fixforpc-z-index":""]])},{default:c((()=>[b(r,{onTouchstart:a.touchstart},{default:c((()=>[o.maskShow?(h(),p(n,{key:"1",name:"mask","mode-class":"fade",styles:o.maskClass,duration:o.duration,show:o.showTrans,onClick:a.onTap},null,8,["styles","duration","show","onClick"])):f("",!0),b(n,{key:"2","mode-class":o.ani,name:"content",styles:o.transClass,duration:o.duration,show:o.showTrans,onClick:a.onTap},{default:c((()=>[b(r,{class:m(["uni-popup__wrapper",[o.popupstyle]]),style:d({backgroundColor:a.bg}),onClick:a.clear},{default:c((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode-class","styles","duration","show","onClick"])])),_:3},8,["onTouchstart"]),o.maskShow?(h(),p(l,{key:0,onEsc:a.onTap},null,8,["onEsc"])):f("",!0)])),_:3},8,["class"])):f("",!0)}],["__scopeId","data-v-30a0ef24"]]);var q=x({data:()=>({aID:0,hiIMG:"",hiAttiName:"",attrs:["acc","pene","crit","speed","attackStrength","superdmg","piericing","depthFury","rage","defPhysic","defMagic","dodge","parry","block"],attrs_ZH:["精准","穿透","暴击","攻速","攻强","暴伤","穿刺","鱼叉","肆虐","物防","魔防","闪避","招架","格挡"]}),methods:{changeAttri(t){this.pene=t},hi(t,s){this.aID=s,this.hiIMG=this.iconURL(this.attrs[s]),this.hiAttiName=this.attrs_ZH[s],-1==this.aID&&(this.hiIMG="../../static/image/attribute/dmg.png",this.hiAttiName="攻击力"),this.$refs.popup.open("center")},closePopup(){this.$refs.popup.close()},iconURL:t=>"../../static/image/attribute/"+t+".webp"}},[["render",function(t,s,i,e,o,a){const n=P,r=D(y("uni-popup"),H);return h(),p(r,{ref:"popup",type:"center"},{default:c((()=>[A("div",{class:"helpbox",onClick:s[0]||(s[0]=(...t)=>a.closePopup&&a.closePopup(...t))},[b(n,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAEpElEQVRYhc2ZLXvbSBCA3/QJGLisYl1WsYjFLGYxa1gNA+8nHLyfcD+h0GUuc5nLFKYylenYwoXDfGA/tLKda5/nnlqexJG02o8349nZ2dkbXpGPD3eH195dQj5/+35zrvz2uODDw92hMtDUFlMZUAEBVQ9Irqf5SRERVP8bQARUQ6ux7dibiImdKt55jOHgPHw5Ap8Af7i/O9TW8LRqqBqLGIP6s8NH5P8j5/sQA+o9TTew3XWgd4cvLyN0vvlwf3eoa8P6aUG1aHAOhq4/7TSo6vT+lzl/1l6wTU1VgWs7NtuWvvck6BuAj493B1sZ1usF1WJBu+tBPbYSxMh5ZabvVNNFEWSquHif351pd9ynemVwCmJYrGpc27LZtAzO8/nr95s3AEZgtWyomppuPyDqqWuTbVMJ9jcZQyNMLM9AelQnvkt9pHaTbmIfqiAiYWz1dPuBqqlZLRtM7P728f79oWlq6kXN0CvqHU1tAqgq2/1wRhW/T56WFiFAd71j6IV6UdMMjkenh1uAqjIo4AaHrUw2qz/+3seZfTnZdQOf/lyhCrYyDIOjqiqqygDRS6iCHxzqHWItirLdDagq37+9nPWHv0vuHu4Pm13P08oGk/QOP4xz8w2EyZongxT2OKPkCRweAiMReKyVloL5JTPIVHnFwhFh00yeWyZeaYQOGi4Ar8EckkxYShvWsuQqZdT2m7Pv5Qq0/ArDFFg1LqPzS1jV9STWiH64WPwVfP4C5jCTMKbXpLjCGVDasBaWkmKEGXhTSFAGVRSO6zbV8uoj4Ag9mxQcquDVZ9PIGpawrYjRmUZtz2MS+SeGcCnag0LDqopXxfuwFdL5eIPSPCgeH9mmGtZg5ERDLyvMIhFS4r0v5tPoJTTZzLiMzOUjEkHWWdIyxdJcbq+OZ+pF5chDaWQ7WprHyQYUJj6fH5ZRzxO2bBLe6+S/u/ROo5RRw4HJ+2OTIJpEdmYJfg7YxDmylGFF1nD++AJ6Tj8cfXDJBmXwkyeZXlGwlnMMufxoixRqzumCk4Q0nHAcOkbgYreXa88sZQRZXPOuWcsc0/XYBKRE1/GueXx/BdpNEllOvMTk5WvJvwuLSMizAecnXRkKX5UcRQg5VZXj9plXuSQpWx8eRiXfQlC/bQy9IwZCwnpl6T953r57e9GzjjR2AhVjAtvgR2DnPALYuqLrB5aNwSv89bxgs+svyct6VQOKEdj3HltbBMW5AHwDcP/+3eFpaVk912w2DrynaVKOeDxQmSTooqgPFQovNM2yl/NGNUzqSQcpXpA8lgh0nQdjWK8rdp96tvuBlx//hAy8tYZdO9BuB9bPFkRou7DxM5IWwBFWyo+RHEuH55FFTMwvJBAjk7apM5FQbmLltvMgwvrZ0m4Hdu2AtWbUMIRDGa+ep6Vlua7pOujagWPXETaEenL/q/Lz9kKzsDQN7DdBs0bM9FDmBHphqRcVlTU4V25HJP3mx6xanQ4aRKdFKT7QfBn/xDGqSnCDp28d23YKewIM4WDRuXCCZAp7myztxQqu5eBHjCV7aRqv9ZXEx5OkqjInB4uvHgc83r+f9ej268uPs2z/AjPH2Cpa66OmAAAAAElFTkSuQmCC",class:"helpbox_iconborder"}),b(n,{src:o.hiIMG,class:"helpbox_icon"},null,8,["src"]),A("h2",null,C(o.hiAttiName),1),-1==o.aID?(h(),T("div",{key:0,class:"introduce"},[A("h4",null,"一次攻击造成的伤害："),A("p",null,[v(" 很显然，这一次攻击可以是平a伤害，也可以是单次技能伤害"),A("br"),v(" 作为平a，您仅需要考虑面板值"),A("br"),v(" 作为技能伤害，您需要考虑您的技能伤害加成、以及各种才能和其他技能的额外加成、 技能伤害影响因素有很多，容易和您的预期不符 ")])])):f("",!0),0==o.aID?(h(),T("div",{key:1,class:"introduce"},[A("h4",null,"精准一比一的抵消闪避值："),A("p",null,[v(" 比如您的精准值是30%，敌人的闪避是60% "),A("br"),v(" 那么您对敌人的 实际命中率 = (100%+精准-闪避) = 70% ")]),A("h4",null,"精准的应用场景："),A("p",null,[v(" 在pve中，35左右的精准就很少会出现闪避了。"),A("br"),v(" 而在pvp中，有的技能可以减少您的精准，因此您会遇到许多闪避。 ")])])):f("",!0),1==o.aID?(h(),T("div",{key:2,class:"introduce"},[A("h4",null,"穿透一比一的抵消防御百分比值："),A("p",null,[v(" 比如您的穿透值是30%，敌人的物理防御是6500(50%)"),A("br"),v(" 那么您对敌人的 实际伤害结算 只会扣除20% ")]),A("h4",null,"锐评穿透："),A("p",null," 在绝大多数情况，敌人的防御都会比30%乃至50%更多， 因此穿透=增伤。显然，这是一个pvppve都很重要的属性。 ")])):f("",!0),2==o.aID?(h(),T("div",{key:3,class:"introduce"},[A("h4",null,"暴击率是pve收益最高的属性！"),A("h4",null,"暴击率增加造成暴击伤害 或 暴击治疗 的概率："),A("p",null,[v(" 暴击造成伤害 = 原伤害 * 2 * 暴伤值"),A("br"),v(" 值得注意的是，暴击奶不会收到暴伤加成 ")]),A("h4",null,"暴击率："),A("p",null,[v(" 在你的才能界面可以额外增加3%的暴击率上限。 "),A("br"),v(" 稳固值可以降低敌人收到的暴击率和暴击伤害。"),A("br"),v(" 弹性值可以降低你的暴击率，战矛的特性会让暴击效果在pvp时起到负面影响 ")])])):f("",!0),3==o.aID?(h(),T("div",{key:4,class:"introduce"},[A("h4",null,"攻速减少平a的攻击间隔："),A("p",null,[v(" 不同武器有不同的攻击时间间隔"),A("br"),v(" 拿两个武器和一个武器，有不同的计算公式"),A("br"),v(" 使用技能会立即重置攻击间隔，时机不好就会卡手 ")]),A("h4",null,"公式："),A("p",null,[v(" 仅持有一个武器时： "),A("br"),v("  攻击间隔 = (100% - 攻速值) * 武器固有攻击间隔"),A("br"),v(" 持有两把武器时： "),A("br"),v("  攻击间隔 = (100% - 攻速值) * (左间隔 + 右间隔) / 1.5"),A("br")])])):f("",!0)])])),_:1},512)}],["__scopeId","data-v-2a135861"]]),B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});export{q as A,H as _,B as a};
