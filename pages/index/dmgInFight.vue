<template>
	<div>
		<uni-section title="战矛伤害计算公式" type="line" padding>
			<div style="padding:20px;padding-top: 5px;">
				伤害计算公式:
				<br><br>
				<center>
					<span class="huati">D = ((X + Y%) - A%) - B%</span>
				</center>
				<div class="huatiinfo">
					<br>D - 最终造成的伤害
					<br>X - 你的伤害值  
					<br>Y - 你的凶猛度
					<br>A - 目标防御比例（已减去穿透百分比）  
					<br>B - 目标弹性
					<br>注：此处的加减表示×(1±x%)
				</div>
			</div>
		</uni-section>
		
		<uni-section title="基础伤害属性 (%)" type="line" style="" padding>
			<div class="props"><image @click="show($event,-1)" src="../../static/image/dmg.png"></image>
				<uni-number-box :value="dmg" @change="(v)=>{dmg=v}" :max="9999" :min="0" :step="0.1" /></div>
			<div style="float: left;width: 100px;height: 30px;margin-bottom: 5px;"></div>
			<div class="props"><image @click="show($event,0)" :src="iconURL(attrs[0])"></image>
				<uni-number-box :value="acc" @change="(v)=>{acc=v}" :max="50" :min="-999" :step="0.1" /></div>
			<div class="props"><image @click="show($event,1)" :src="iconURL(attrs[1])"></image>
				<uni-number-box :value="pene" @change="(v)=>{pene=v}" :max="50" :step="0.1" /></div>
			<div class="props"><image @click="show($event,2)" :src="iconURL(attrs[2])"></image>
				<uni-number-box :value="crit" @change="(v)=>{crit=v}" :max="53" :min="0" :step="0.1"/></div>
			<div class="props"><image @click="show($event,3)" :src="iconURL(attrs[3])"></image>
				<uni-number-box :value="speed" @change="(v)=>{speed=v}" :max="70" :min="-999" :step="0.1" /></div>
		</uni-section>
		
		<uni-section title="附加伤害属性 (%)" type="line" style="" padding>
			<div class="props"><image @click="show($event,4)" :src="iconURL(attrs[4])"></image>
				<uni-number-box :value="atk" @change="(v)=>{atk=v}" :max="100" :step="0.1" /></div>
			<div class="props"><image @click="show($event,5)" :src="iconURL(attrs[5])"></image>
				<uni-number-box :value="criteff" @change="(v)=>{criteff=v}" :max="150" :min="100" :step="0.1" /></div>
			<div class="props"><image @click="show($event,6)" :src="iconURL(attrs[6])"></image>
				<uni-number-box :value="pirck" @change="(v)=>{pirck=v}" :max="999" :step="0.1" /></div>
			<div class="props"><image @click="show($event,7)" :src="iconURL(attrs[7])"></image>
				<uni-number-box :value="fury" @change="(v)=>{fury=v}" :max="50" :step="0.1" /></div>
			<div class="props"><image @click="show($event,8)" :src="iconURL(attrs[8])"></image>
				<uni-number-box :value="rage" @change="(v)=>{rage=v}" :max="999" :step="0.1" /></div>
		</uni-section>
		
		<uni-section title="目标防御属性" type="line" style="" padding>
			<div class="def_data_box">
				<div class="props"><image @click="show($event,9)" :src="iconURL(attrs[9])"></image>
					<uni-number-box :value="defP" @change="(v)=>{defP=v}" :max="26000" /></div>
				<div class="def_data">{{defphyPercent}}</div>
			</div>
			<div class="def_data_box">
				<div class="props"><image @click="show($event,10)" :src="iconURL(attrs[10])"></image>
					<uni-number-box :value="defM" @change="(v)=>{defM=v}" :max="26000" /></div>
				<div class="def_data">{{defmagPercent}}</div>
			</div>
			<div class="props"><image @click="show($event,11)" :src="iconURL(attrs[11])"></image>
				<uni-number-box :value="dodge" @change="(v)=>{dodge=v}" :max="60" :min="-20" :step="0.1" /></div>
			<div class="props"><image @click="show($event,12)" :src="iconURL(attrs[12])"></image>
				<uni-number-box :value="parry" @change="(v)=>{parry=v}" :max="30" :step="0.1" /></div>
			<div class="props"><image @click="show($event,13)" :src="iconURL(attrs[13])"></image>
				<uni-number-box :value="block" @change="(v)=>{block=v}" :max="25" :step="0.1" /></div>
		</uni-section>
		
		<uni-section title="武器类型" type="line" style="" padding>
			<div class="titlebox l">
				<div class="subtitile">主手武器类型</div>
				<uni-data-select
					style="width:160px;"
					v-model="weaponL"
					:localdata="weaponLRange"
					@change="(v)=>{
						weaponL=v;
						if(weaponL>4 && weaponR!=0) weaponR = 0;
					}"
					:clear="false">
				</uni-data-select>
			</div>
			<div class="titlebox r">
				<div class="subtitile">副手武器类型</div>
				<uni-data-select
					style="width:160px;"
					v-model="weaponR"
					:localdata="weaponRRange"
					@change="(v)=>{weaponR=v;}"
					:clear="false"
					:disabled="(weaponL>4)?true:false">
				</uni-data-select>
			</div>
			<div class="iconbox_tiny l">
				<image src="../../static/image/attribute/spd.png"></image>
				<div>{{speedL}}</div>
			</div>
			<div class="iconbox_tiny r">
				<image src="../../static/image/attribute/spd.png"></image>
				<div>{{speedR}}</div>
			</div>
			<div class="dmginterval">
				<div>总攻击间隔</div>
				<center>
					<span class="huati">{{myRound(attackInterval,100)}}</span>
				</center>
			</div>
				
		</uni-section>
		
		<uni-section title="实战伤害模拟" type="line" padding>
			单次伤害期望值:
			<br><br>
			<center>
				<span class="huati">{{myRound(attackDMG,10)}}</span>
			</center>
			每秒平a伤害期望值:
			<br><br>
			<center>
				<span class="huati">{{myRound(attackDMGperSec,10)}}</span>
			</center>
			<div style="font-size: 12px;color: #4d4d4d;display: inline-block;margin-top: 20px;">
				(平a或技能伤害，取决于设定攻击力)<br>
				(把设定攻击力视为平a)
			</div>
		</uni-section>
		
		<AttriInfo ref="atrriinfo"></AttriInfo>
	</div>
</template>

<script>
	import AttriInfo from '@/pages/index/attriInfo.vue'
	export default {
		data() {
			return {
				dmg: 0.0,
				
				attriIndex:0,
				attrs:['acc','pene','crit','speed','attackStrength',
						'superdmg','piericing','depthFury','rage','defPhysic',
						'defMagic','dodge','parry','block'
				],
				
				acc:0.0,
				pene: 0.0,
				crit:5.0,
				speed:0.0,
				atk: 0.0,
				criteff:100.0,
				pirck:0.0,
				fury:0.0,
				rage:0.0,
				
				defP:0.0,
				defPp:0.0,
				defM:0.0,
				defMp:0.0,
				dodge:5.0,
				parry:0.0,
				block:0.0,

				weaponL: 0,
				weaponLRange: [
				  { value: 0, text: "空手" ,   spd:1.5 },
				  { value: 1, text: "匕首 - 1.7" ,   spd:1.7 },
				  { value: 2, text: "单手剑 - 2.0" , spd:2.0 },
				  { value: 3, text: "单手斧 - 2.2" , spd:2.2 },
				  { value: 4, text: "单手锤 - 2.4" , spd:2.4 },
				  { value: 5, text: "法杖 - 3.1" , spd:3.1 },
				  { value: 6, text: "双手锤剑斧 - 3.2" , spd:3.2 },
				  { value: 7, text: "弓 - 3.3" , spd:3.3 },
				  { value: 8, text: "战矛 - 3.4" , spd:3.4 },
				  { value: 9, text: "弩 - 3.9" , spd:3.9 }
				],
				weaponR: 0,
				weaponRRange: [
				 { value: 0, text: "空手" ,   spd:1.5 },
				 { value: 1, text: "匕首 - 1.7" ,   spd:1.7 },
				 { value: 2, text: "单手剑 - 2.0" , spd:2.0 },
				 { value: 3, text: "单手斧 - 2.2" , spd:2.2 },
				 { value: 4, text: "单手锤 - 2.4" , spd:2.4 }
				],
				
				attackInterval:0.0,
				
				attackDMG_attri: 0.0,
				speedL_attri:0.0 ,
				speedR_attri:0.0 ,
			}
		},
		methods: {
			changeAttri(value) {
				this.pene = value;
			},
			show(e,index){
				this.attriIndex = index;
				this.$refs.atrriinfo.hi(e,this.attriIndex);
			},
			iconURL(name){
				return "../../static/image/attribute/"+name+".webp";
			},
			myRound(num,decimal){
				return Math.round(num*decimal)/decimal;
			}
		},
		computed: {
			speedL(){
				let v = this.weaponLRange[this.weaponL].spd;
				this.speedL_attri = v;
				return v;
			},
			speedR(){
				let v = this.weaponRRange[this.weaponR].spd;
				this.speedR_attri = v;
				return v;
			},
			defphyPercent(){
				let d = this.defP;
				let dmg = d / (d + 6500);
				this.defPp =  Math.round(dmg*10000)/100;
				return this.defPp + "%";
			},
			defmagPercent(){
				let d = this.defM;
				let dmg = d / (d + 6500);
				this.defMp =  Math.round(dmg*10000)/100;
				return this.defMp + "%";
			},
			attackDMG(){
				let D = this.dmg;
				
				let hitRate = (100 + this.acc - this.dodge)/100;
				if(hitRate > 1) hitRate = 1.0;
				D *= hitRate;
				
				let crit = this.crit/100;
				let critEff = this.criteff/100;
				D = crit * 2 * D * critEff + (1 - crit) * D;
				
				let atk  = this.atk/100;
				D = D * (1 + atk);
				
				let def = this.defP;
				let defPercent = def / (def + 6500);
				let dmgReduceRate  = defPercent - this.pene/100;
				if(dmgReduceRate < 0) dmgReduceRate = 0.0;
				D = D * (1 - dmgReduceRate);
				
				this.attackDMG_attri = D;
				
				return D;
			},
			attackDMGperSec(){
				//判断是否是双持
				let isDual = (this.weaponR != 0)?true:false;
				//如果双手都没武器，视作双持
				if(this.weaponL == 0 && this.weaponR == 0) isDual = true;
				//每次伤害期望
				let atkDmg = this.attackDMG_attri;
				
				let atkinterval = isDual ? ( (1 - this.speed*1.0/100) * (this.speedL_attri + this.speedR_attri) / 1.5 ):
										 ( (1 - this.speed*1.0/100) * this.speedL_attri );
			    this.attackInterval = atkinterval;
										 
				let dmgPerSec = atkDmg / atkinterval;
				
				return dmgPerSec;
				
			},
		},
		components: {
			AttriInfo,
		},
	}
</script>

<style>
	uni-scroll-view {
		z-index: 4;
	}
	.huati {
		font-size: 120%;
		font-weight: bold;
		font-style: italic;
		font-family: 'Times New Roman', Times, serif;
	}
	.huatiinfo {
		font-size: 12px;
		color: #4d4d4d;
	}
	.uni-section {
		float: left;
		width: 350px;
	}
	/* #ifdef H5 */
	.uni-section {
		margin: 10px;
		float: left;
		width: 350px;
		height: 250px;
		border-radius: 10px;
		box-shadow: 1px 2px 3px #4d4d4d;
	}
	/* #endif */
	.def_data_box {
		height: 30px;
		margin-bottom: 5px;
	}
	.props {
		float: left;
		margin-right: 20px;
	}
	.props:nth-child(even)::after {
		display: block;
		height: 10px;
		content: " ";
	}
	.def_data {
		margin-left: 20px;
		float: left;
		width: 140px;
		line-height: 25px;
		color: gray;
		font-size: 12px;
	}
	.props uni-image{
		float: left;
		margin-right: 10px;
		width: 30px;
		height: 30px;
	}
	.props uni-number-box {
		float: left;
	}
	.l {float: left;}
	.r {float: right;}
	.titlebox {
		margin-top: 10px;
		position: relative;
	}
	.subtitile {
		position: absolute;
		left: 20upx;
		top: -20px;
		font-size: 12px;
		color: gray;
	}
	.iconbox_tiny {
		margin-top: 10px;
		width: 160px;
		color: #4d4d4d;
		line-height: 20px;
	}
	.iconbox_tiny image {
		float: left;
		width: 20px;
		height: 20px;
	}
	.iconbox_tiny div {
		margin-left: 10px;
		float: left;
		color: #4d4d4d;
		line-height: 20px;
	}
	.dmginterval {
		margin: 10px;
		margin-top: 100px;
	}
	.dmginterval>div{
		margin-right: 20px;
		color: gray;
		font-size: 12px;
	}
	@media screen and (max-width:380px){
		.uni-section {
			margin-left: 5px;
		}
	}
</style>
