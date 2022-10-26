import{r as e,a,o as t,c as s,b as l,d as n,w as i,e as d,F as o,i as c,t as r,f as p,g as u}from"./index.a099a342.js";import{_ as h,a as g,b as v,c as A,C as f}from"./calc.5dc99801.js";import{_ as m,r as C}from"./uni-app.es.75419fbb.js";import{_ as x,A as w}from"./attriInfo.b2c52e80.js";var b=m({data:()=>({pageIndex:1}),methods:{open(){this.$refs.popup.open("left")},clickGoTo(e){this.pageIndex=e.currentTarget.id,this.$emit("changeIndex",this.pageIndex)}}},[["render",function(r,p,u,g,v,A){const f=C(e("uni-icons"),h),m=c,w=a("ui"),b=C(e("uni-popup"),x);return t(),s(o,null,[l("div",{id:"bars",onClick:p[0]||(p[0]=(...e)=>A.open&&A.open(...e))},[n(f,{type:"bars",size:"30",color:"gray"})]),n(b,{ref:"popup",type:"left"},{default:i((()=>[l("div",{class:"mybox"},[l("div",{class:"myboxtitle"},[n(m,{src:"/assets/warpearhelp.c30eb529.png",id:"wshelp"}),d("战矛辅助工具")]),n(w,null,{default:i((()=>[l("li",{class:"goto",onClick:p[1]||(p[1]=e=>A.clickGoTo(e)),id:"1"},[n(f,{type:"forward",size:"16",color:"dimgray"}),d("战矛伤害模拟器")]),l("li",{class:"goto",onClick:p[2]||(p[2]=e=>A.clickGoTo(e)),id:"2"},[n(f,{type:"forward",size:"16",color:"dimgray"}),d("战矛伤害公式原理")]),l("li",{class:"goto",onClick:p[3]||(p[3]=e=>A.clickGoTo(e)),id:"3"},[n(f,{type:"forward",size:"16",color:"dimgray"}),d("战矛小知识1")]),l("li",{class:"goto",onClick:p[4]||(p[4]=e=>A.clickGoTo(e)),id:"4"},[n(f,{type:"forward",size:"16",color:"dimgray"}),d("战矛小知识2")])])),_:1})])])),_:1},512)],64)}],["__scopeId","data-v-6400a994"]]),y="data:image/png;base64,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";var k=m({data:()=>({dmg:0,attriIndex:0,attrs:["acc","pene","crit","speed","attackStrength","superdmg","piericing","depthFury","rage","defPhysic","defMagic","dodge","parry","block"],acc:0,pene:0,crit:5,speed:0,atk:0,criteff:100,pirck:0,fury:0,rage:0,defP:0,defPp:0,defM:0,defMp:0,dodge:5,parry:0,block:0,weaponL:0,weaponLRange:[{value:0,text:"空手",spd:1.5},{value:1,text:"匕首 - 1.7",spd:1.7},{value:2,text:"单手剑 - 2.0",spd:2},{value:3,text:"单手斧 - 2.2",spd:2.2},{value:4,text:"单手锤 - 2.4",spd:2.4},{value:5,text:"法杖 - 3.1",spd:3.1},{value:6,text:"双手锤剑斧 - 3.2",spd:3.2},{value:7,text:"弓 - 3.3",spd:3.3},{value:8,text:"战矛 - 3.4",spd:3.4},{value:9,text:"弩 - 3.9",spd:3.9}],weaponR:0,weaponRRange:[{value:0,text:"空手",spd:1.5},{value:1,text:"匕首 - 1.7",spd:1.7},{value:2,text:"单手剑 - 2.0",spd:2},{value:3,text:"单手斧 - 2.2",spd:2.2},{value:4,text:"单手锤 - 2.4",spd:2.4}],attackInterval:0,attackDMG_attri:0,speedL_attri:0,speedR_attri:0}),methods:{changeAttri(e){this.pene=e},show(e,a){this.attriIndex=a,this.$refs.atrriinfo.hi(e,this.attriIndex)},iconURL:e=>"../../static/image/attribute/"+e+".webp",myRound:(e,a)=>Math.round(e*a)/a},computed:{speedL(){let e=this.weaponLRange[this.weaponL].spd;return this.speedL_attri=e,e},speedR(){let e=this.weaponRRange[this.weaponR].spd;return this.speedR_attri=e,e},defphyPercent(){let e=this.defP,a=e/(e+6500);return this.defPp=Math.round(1e4*a)/100,this.defPp+"%"},defmagPercent(){let e=this.defM,a=e/(e+6500);return this.defMp=Math.round(1e4*a)/100,this.defMp+"%"},attackDMG(){let e=this.dmg,a=(100+this.acc-this.dodge)/100;a>1&&(a=1),e*=a;let t=this.crit/100;e=2*t*e*(this.criteff/100)+(1-t)*e,e*=1+this.atk/100;let s=this.defP,l=s/(s+6500)-this.pene/100;return l<0&&(l=0),e*=1-l,this.attackDMG_attri=e,e},attackDMGperSec(){let e=0!=this.weaponR;0==this.weaponL&&0==this.weaponR&&(e=!0);let a=this.attackDMG_attri,t=e?(1-1*this.speed/100)*(this.speedL_attri+this.speedR_attri)/1.5:(1-1*this.speed/100)*this.speedL_attri;return this.attackInterval=t,a/t}},components:{AttriInfo:w}},[["render",function(p,u,h,f,m,x){const w=a("center"),b=C(e("uni-section"),g),k=c,R=C(e("uni-number-box"),v),D=C(e("uni-data-select"),A),U=a("AttriInfo");return t(),s(o,null,[n(b,{title:"战矛伤害计算公式",type:"line",padding:""},{default:i((()=>[l("div",{style:{padding:"20px","padding-top":"5px"}},[d(" 伤害计算公式: "),l("br"),l("br"),n(w,null,{default:i((()=>[l("span",{class:"huati"},"D = ((X + Y%) - A%) - B%")])),_:1}),l("div",{class:"huatiinfo"},[l("br"),d("D - 最终造成的伤害 "),l("br"),d("X - 你的伤害值 "),l("br"),d("Y - 你的凶猛度 "),l("br"),d("A - 目标防御比例（已减去穿透百分比） "),l("br"),d("B - 目标弹性 "),l("br"),d("注：此处的加减表示×(1±x%) ")])])])),_:1}),n(b,{title:"基础伤害属性 (%)",type:"line",style:{},padding:""},{default:i((()=>[l("div",{class:"props"},[n(k,{onClick:u[0]||(u[0]=e=>x.show(e,-1)),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAZlJREFUOI2dkyFw2zAUhr/uAsxkaFbBsZnFMNAshoGBYfFQDDu0BNVlDnOZWV2UQJe5TGOGCjOUmFgH0kvrpdn1+vD/ffrvvdPV79vlSxL6fGVqZRgloc8syT8FGGtJllOk1wOQxDGj/4UBfCHAh/5gyVZj5okCoKwDgI8FxoM0nQKQF4+4A2SrMYtsBoDr3hqfCYy1RJNr5rHCIdHdGCk5waarqeqAYtMRxzHfPmrQa8NiDXUbkKUeUgY0jX6FHevNM5640ACg0xajwZk9Us6JQkWrNFXryDfPBNcCzDF71sBD4CyUVUlRNBR5iepDotDQO3CCE3wmcBYMlmr3wPdI0ju4yY+Sug1IZx6LdHq60EBgrMVgKXcPTCKJOZ6atmkAyb7e46HplMK9e3QE0L8a38O907RKkf38BUD4QzDPoHk6IIUYCnwE+a4kiiZ0Wh9lRUO5vSNA4AlQfyw+dgCfBPmuZBJJQBN4sM5Lyu3dIPwvOBCc9tDDTZ5Tbe8vAhcFTXusXm3vCfgcDHB1u1q+xPHXvvN+b/gLKty7E1cPXYIAAAAASUVORK5CYII="}),n(R,{value:m.dmg,onChange:u[1]||(u[1]=e=>{m.dmg=e}),max:9999,min:0,step:.1},null,8,["value","step"])]),l("div",{style:{float:"left",width:"100px",height:"30px","margin-bottom":"5px"}}),l("div",{class:"props"},[n(k,{onClick:u[2]||(u[2]=e=>x.show(e,0)),src:x.iconURL(m.attrs[0])},null,8,["src"]),n(R,{value:m.acc,onChange:u[3]||(u[3]=e=>{m.acc=e}),max:50,min:-999,step:.1},null,8,["value","step"])]),l("div",{class:"props"},[n(k,{onClick:u[4]||(u[4]=e=>x.show(e,1)),src:x.iconURL(m.attrs[1])},null,8,["src"]),n(R,{value:m.pene,onChange:u[5]||(u[5]=e=>{m.pene=e}),max:50,step:.1},null,8,["value","step"])]),l("div",{class:"props"},[n(k,{onClick:u[6]||(u[6]=e=>x.show(e,2)),src:x.iconURL(m.attrs[2])},null,8,["src"]),n(R,{value:m.crit,onChange:u[7]||(u[7]=e=>{m.crit=e}),max:53,min:0,step:.1},null,8,["value","step"])]),l("div",{class:"props"},[n(k,{onClick:u[8]||(u[8]=e=>x.show(e,3)),src:x.iconURL(m.attrs[3])},null,8,["src"]),n(R,{value:m.speed,onChange:u[9]||(u[9]=e=>{m.speed=e}),max:70,min:-999,step:.1},null,8,["value","step"])])])),_:1}),n(b,{title:"附加伤害属性 (%)",type:"line",style:{},padding:""},{default:i((()=>[l("div",{class:"props"},[n(k,{onClick:u[10]||(u[10]=e=>x.show(e,4)),src:x.iconURL(m.attrs[4])},null,8,["src"]),n(R,{value:m.atk,onChange:u[11]||(u[11]=e=>{m.atk=e}),max:100,step:.1},null,8,["value","step"])]),l("div",{class:"props"},[n(k,{onClick:u[12]||(u[12]=e=>x.show(e,5)),src:x.iconURL(m.attrs[5])},null,8,["src"]),n(R,{value:m.criteff,onChange:u[13]||(u[13]=e=>{m.criteff=e}),max:150,min:100,step:.1},null,8,["value","step"])]),l("div",{class:"props"},[n(k,{onClick:u[14]||(u[14]=e=>x.show(e,6)),src:x.iconURL(m.attrs[6])},null,8,["src"]),n(R,{value:m.pirck,onChange:u[15]||(u[15]=e=>{m.pirck=e}),max:999,step:.1},null,8,["value","step"])]),l("div",{class:"props"},[n(k,{onClick:u[16]||(u[16]=e=>x.show(e,7)),src:x.iconURL(m.attrs[7])},null,8,["src"]),n(R,{value:m.fury,onChange:u[17]||(u[17]=e=>{m.fury=e}),max:50,step:.1},null,8,["value","step"])]),l("div",{class:"props"},[n(k,{onClick:u[18]||(u[18]=e=>x.show(e,8)),src:x.iconURL(m.attrs[8])},null,8,["src"]),n(R,{value:m.rage,onChange:u[19]||(u[19]=e=>{m.rage=e}),max:999,step:.1},null,8,["value","step"])])])),_:1}),n(b,{title:"目标防御属性",type:"line",style:{},padding:""},{default:i((()=>[l("div",{class:"def_data_box"},[l("div",{class:"props"},[n(k,{onClick:u[20]||(u[20]=e=>x.show(e,9)),src:x.iconURL(m.attrs[9])},null,8,["src"]),n(R,{value:m.defP,onChange:u[21]||(u[21]=e=>{m.defP=e}),max:26e3},null,8,["value"])]),l("div",{class:"def_data"},r(x.defphyPercent),1)]),l("div",{class:"def_data_box"},[l("div",{class:"props"},[n(k,{onClick:u[22]||(u[22]=e=>x.show(e,10)),src:x.iconURL(m.attrs[10])},null,8,["src"]),n(R,{value:m.defM,onChange:u[23]||(u[23]=e=>{m.defM=e}),max:26e3},null,8,["value"])]),l("div",{class:"def_data"},r(x.defmagPercent),1)]),l("div",{class:"props"},[n(k,{onClick:u[24]||(u[24]=e=>x.show(e,11)),src:x.iconURL(m.attrs[11])},null,8,["src"]),n(R,{value:m.dodge,onChange:u[25]||(u[25]=e=>{m.dodge=e}),max:60,min:-20,step:.1},null,8,["value","step"])]),l("div",{class:"props"},[n(k,{onClick:u[26]||(u[26]=e=>x.show(e,12)),src:x.iconURL(m.attrs[12])},null,8,["src"]),n(R,{value:m.parry,onChange:u[27]||(u[27]=e=>{m.parry=e}),max:30,step:.1},null,8,["value","step"])]),l("div",{class:"props"},[n(k,{onClick:u[28]||(u[28]=e=>x.show(e,13)),src:x.iconURL(m.attrs[13])},null,8,["src"]),n(R,{value:m.block,onChange:u[29]||(u[29]=e=>{m.block=e}),max:25,step:.1},null,8,["value","step"])])])),_:1}),n(b,{title:"武器类型",type:"line",style:{},padding:""},{default:i((()=>[l("div",{class:"titlebox l"},[l("div",{class:"subtitile"},"主手武器类型"),n(D,{style:{width:"160px"},modelValue:m.weaponL,"onUpdate:modelValue":u[30]||(u[30]=e=>m.weaponL=e),localdata:m.weaponLRange,onChange:u[31]||(u[31]=e=>{m.weaponL=e,m.weaponL>4&&0!=m.weaponR&&(m.weaponR=0)}),clear:!1},null,8,["modelValue","localdata"])]),l("div",{class:"titlebox r"},[l("div",{class:"subtitile"},"副手武器类型"),n(D,{style:{width:"160px"},modelValue:m.weaponR,"onUpdate:modelValue":u[32]||(u[32]=e=>m.weaponR=e),localdata:m.weaponRRange,onChange:u[33]||(u[33]=e=>{m.weaponR=e}),clear:!1,disabled:m.weaponL>4},null,8,["modelValue","localdata","disabled"])]),l("div",{class:"iconbox_tiny l"},[n(k,{src:y}),l("div",null,r(x.speedL),1)]),l("div",{class:"iconbox_tiny r"},[n(k,{src:y}),l("div",null,r(x.speedR),1)]),l("div",{class:"dmginterval"},[l("div",null,"总攻击间隔"),n(w,null,{default:i((()=>[l("span",{class:"huati"},r(x.myRound(m.attackInterval,100)),1)])),_:1})])])),_:1}),n(b,{title:"实战伤害模拟",type:"line",padding:""},{default:i((()=>[d(" 单次伤害期望值: "),l("br"),l("br"),n(w,null,{default:i((()=>[l("span",{class:"huati"},r(x.myRound(x.attackDMG,10)),1)])),_:1}),d(" 每秒平a伤害期望值: "),l("br"),l("br"),n(w,null,{default:i((()=>[l("span",{class:"huati"},r(x.myRound(x.attackDMGperSec,10)),1)])),_:1}),l("div",{style:{"font-size":"12px",color:"#4d4d4d",display:"inline-block","margin-top":"20px"}},[d(" (平a或技能伤害，取决于设定攻击力)"),l("br"),d(" (把设定攻击力视为平a) ")])])),_:1}),n(U,{ref:"atrriinfo"},null,512)],64)}],["__scopeId","data-v-5662c28e"]]);var R=m({data:()=>({PageIndex:1}),watch:{},methods:{changePage(e){this.PageIndex=e}},computed:{},components:{Switcher:b,Calc:f,DmgInFight:k}},[["render",function(e,c,r,h,g,v){const A=a("switcher"),f=a("calc"),m=a("DmgInFight"),C=u;return t(),s(o,null,[l("div",{id:"logo",style:{height:"180upx"}}),l("h2",{id:"webtitle"}),n(C,{class:"container"},{default:i((()=>[n(A,{onChangeIndex:v.changePage},null,8,["onChangeIndex"]),1==g.PageIndex?(t(),s("div",{key:0},[n(f)])):p("",!0),2==g.PageIndex?(t(),s("div",{key:1},[n(m)])):p("",!0)])),_:1}),l("div",{style:{height:"5upx"}}),l("div",{class:"author"},[d("作者qq2732149714，请联系他修复bug！"),l("br"),d(" 数据仅供参考，实际效果以游戏为准！"),l("br"),d(" 战矛萌新群群号: 851922086 "),l("br"),d(" 传送门："),l("a",{target:"“_blank”",href:"https://aurora.wsdb.xyz/en/calculator"},"战矛做梦器")])],64)}],["__scopeId","data-v-40ea3318"]]);export{R as default};
