<template>
	<div id="calc_box">
		<uni-section title="基础伤害" type="line" padding>
			<div id="DMG_base"><h4>基础数值：{{DMG_base_phys}}/{{DMG_base_mag}}</h4></div>
			
			<div style="height: 20upx;"></div>
			<div class="titlebox">
				<div class="subtitile">人物等级</div>
				<uni-easyinput prefixIcon="" v-model="playerLV" 
							   placeholder="输入等级" 
							   style="width: 120px;margin: auto 25upx;">
				</uni-easyinput>
				<div style="height: 50upx;"></div>
			</div>
			
			<div class="titlebox">
				<div class="subtitile">主手伤害</div>
				<div class="numbar"> 
					<img src="https://aurora.wsdb.xyz/icons/95.webp" alt="物理"> 
					<uni-number-box v-model="dmgPhyBase_main" :min="0" :max="2000"/>
				</div>
				<div class="numbar"> 
					<img src="https://aurora.wsdb.xyz/icons/897.webp" alt="法术"> 
					<uni-number-box v-model="dmgMagBase_main" :min="0" :max="2000"/>
				</div>
				<div style="height: 100upx;"></div>
			</div>
					
			<div class="titlebox">
				<div class="subtitile">副手伤害</div>
				<div class="numbar"> 
					<img src="https://aurora.wsdb.xyz/icons/95.webp" alt="物理"> 
					<uni-number-box v-model="dmgPhyBase_acc" :min="0" :max="2000"/>
				</div>
				<div class="numbar"> 
					<img src="https://aurora.wsdb.xyz/icons/897.webp" alt="法术"> 
					<uni-number-box v-model="dmgMagBase_acc" :min="0" :max="2000"/>
				</div>
				<div style="height: 80upx;"></div>
			</div>
		</uni-section>
		
		<jewelry ref="jewe" @jeweChanged="getJeweDMG"></jewelry>
		
		<uni-section title="BUFF增益" type="line" padding>
			<div style="height:20upx;"></div>
			<div class="titlebox l">
				<div class="subtitile">药水</div>
				<uni-data-select
						style="width:160px;"
						v-model="potionValue"
						:localdata="potionRange"
						@change="change"
						:clear="false"
					  ></uni-data-select>
			</div>
			<div class="titlebox r">
				<div class="subtitile">卷轴</div>
				<uni-data-select
						style="width:160px;"
						v-model="scrollValue"
						:localdata="scrollRange"
						@change="change"
						:clear="false"
					  ></uni-data-select>
			</div>
			<div style="height:80upx;"></div>
		</uni-section>
		
		
		<uni-section title="其他增益" type="line" padding>
			<div style="height: 20upx;"></div>
			<div>
				<div class="titlebox l">
					<div class="subtitile">工会力量</div>
					<img style="float: left;" src="https://aurora.wsdb.xyz/icons/3171.webp" alt="">
					<uni-easyinput  placeholder="10%" :disabled="true" style="float: left;width: 80px;margin: auto 25upx;">
					</uni-easyinput>
					<uni-fav :checked="guildPower" :star="false" class="enableBtn" 
							 @click="this.guildPower = !this.guildPower" 
							 :content-text="TextTrue"
							 :circle="true"
							 style="float: left;width: 25px;"/>
					<div style="height: 50upx;"></div>
				</div>
				
				<div class="titlebox r">
					<div class="subtitile">肆虐加成</div>
					<img style="float: left;" src="https://aurora.wsdb.xyz/icons/3146.webp" alt="">
					<uni-easyinput  suffixIcon="x" placeholder="10%" :disabled="true" style="float: left;width: 80px;margin: auto 25upx;">
					</uni-easyinput>
					<uni-fav :checked="ragePower" :star="false" class="enableBtn" 
							 @click="this.ragePower = !this.ragePower" 
							 :content-text="TextTrue"
							 :circle="true"
							 style="float: left;width: 25px;"/>
					<div style="height: 50upx;"></div>
				</div>
			</div>
			
			<div style="height: 118upx;"></div>
			
			<div>
				<div class="titlebox l">
					<div class="subtitile">才能加成 %</div>
					<image style="float: left;width: 30px;height: 30px;" src="/static/image/talent.png" alt="才能"></image>
					<uni-number-box v-model="talentPower" :min="0" :max="2.25" :step="0.25" @change="change" style="margin:10upx 40upx;"/>
					<div style="height: 50upx;"></div>
				</div>
				
				<div class="titlebox r">
					<div class="subtitile">其他加成% <!-- / 数值 --></div>
					<!-- <img style="float: left;" src="https://aurora.wsdb.xyz/icons/4981.webp" alt=""> -->
					<uni-easyinput v-model="dmgOther1" type=Number placeholder="%"  style="float: right;width: 127px;margin-right: 38px;">
					</uni-easyinput>
					<!-- <uni-easyinput v-model="dmgOther2" placeholder=""  style="float: left;width: 70px;margin-right: 75upx;">
					</uni-easyinput> -->
				</div>
			</div>
			
			<div style="height:80upx;"></div>
		</uni-section>
	</div>

	<div style="height: 30upx;"></div>
	
	<uni-section title="计算结果" type="line" id="result_box" padding>
		<uni-tag text="物理伤害" type="error" /><span class="DMG_final">{{getDMG_phys}}</span>
		<div style="height: 30upx;"></div>
		<uni-tag text="法术伤害" type="primary" /><span class="DMG_final">{{getDMG_mag}}</span>
		<div style="height: 40upx;"></div>
	</uni-section>
</template>

<script>
	import Jewelry from './jewelry.vue'
	export default {
		data() {
			return {
				TextTrue: {
					contentDefault: 'X',
					contentFav: '✔'
				},
				dmgPhyBase_main:0,
				dmgPhyBase_acc:0,
				dmgMagBase_main:0,
				dmgMagBase_acc:0,
				JResult: [
					{dmgAD1: 0},
				    {dmgAD2: 0},
				    {dmgAP1: 0},
				    {dmgAP2: 0}
				],
				DMGResult: [
					{dmgAD1: 0},
				    {dmgAD2: 0},
				    {dmgAP1: 0},
				    {dmgAP2: 0}
				],
				minDmg :0,
				playerLV: 32,
				guildPower: false,
				ragePower: false,
				talentPower: 0,
				dmgOther1: 0,
				dmgOther2: 0,
				potionValue: 0,
				potionRange: [
				  { value:0, text: "无" ,dmg1:0,dmg2:0,isMagic:false},
				  { value: 1, text: "物理+10%" ,dmg1:0.1,dmg2:0,isMagic:false},
				  { value: 2, text: "法术+15%" ,dmg1:0.15,dmg2:0,isMagic:true},
				],
				scrollValue: 0,
				scrollRange: [
				  { value: 0, text: "无" ,dmg1:0,dmg2:0,isMagic:false},
				  { value: 1, text: "物理+73" ,dmg1:0,dmg2:73,isMagic:false},
				  { value: 2, text: "法术+98" ,dmg1:0,dmg2:98,isMagic:true},
				  { value: 3, text: "物理+10%" ,dmg1:0.1,dmg2:0,isMagic:false},
				  { value: 4, text: "物理+15%" ,dmg1:0.15,dmg2:0,isMagic:false},
				  { value: 5, text: "法术+10%" ,dmg1:0.1,dmg2:0,isMagic:true},
				  { value: 6, text: "法术+15%" ,dmg1:0.15,dmg2:0,isMagic:true},
				  { value: 7, text: "法术+20%" ,dmg1:0.2,dmg2:0,isMagic:true},
				],
			}
		},
		watch:{
			//watch可以监听data中指定数据的变化，然后触发对应的处理函数
			playerLV:function(newVal,oldVal){this.change();},
			dmgPhyBase_main:function(newVal,oldVal){this.change();},
			dmgMagBase_main:function(newVal,oldVal){this.change();},
			dmgPhyBase_acc:function(newVal,oldVal){this.change();},
			dmgMagBase_acc:function(newVal,oldVal){this.change();},
			potionValue:function(newVal,oldVal){this.change();},
			scrollValue:function(newVal,oldVal){this.change();},
			guildPower:function(newVal,oldVal){this.change();},
			ragePower:function(newVal,oldVal){this.change();},
			talentPower:function(newVal,oldVal){this.change();},
			dmgOther1:function(newVal,oldVal){this.change();},
			dmgOther2:function(newVal,oldVal){this.change();},
			
		},
		methods: {
			//返回饰品子组件里的数据，在子组件的change事件中用$emit向上绑钩子传递事件
			getJeweDMG(value){
				this.JResult = value;
				this.change();
				return value;
			},
			//分别计算物理魔法基础伤害的函数
			getDmgBase_phys(){
				return this.playerLV*1 + this.dmgPhyBase_main*1 + this.dmgPhyBase_acc*0.6;
			},
			getDmgBase_mag(){
				return this.playerLV*1 + this.dmgMagBase_main*1 + this.dmgMagBase_acc*0.7;
			},
			//更新四项伤害表
			change(){
				this.clearData();
				//加基础伤害
				this.DMGResult[1].dmgAD2 += this.getDmgBase_phys();
				this.DMGResult[3].dmgAP2 += this.getDmgBase_mag();
				//加饰品伤害
				let jeweData = this.JResult;
				this.DMGResult[0].dmgAD1 += jeweData[0].dmgAD1;
				this.DMGResult[1].dmgAD2 += jeweData[1].dmgAD2;
				this.DMGResult[2].dmgAP1 += jeweData[2].dmgAP1;
				this.DMGResult[3].dmgAP2 += jeweData[3].dmgAP2;
				//加药水卷轴伤害
				let potionData = this.potionRange[this.potionValue];
				let scrollData = this.scrollRange[this.scrollValue];
				this.addDataInRange(potionData);
				this.addDataInRange(scrollData);
				//其他加成
				if(this.guildPower) {
					this.DMGResult[0].dmgAD1 += 0.1;
					this.DMGResult[2].dmgAP1 += 0.1;
				}
				if(this.ragePower) {
					this.DMGResult[0].dmgAD1 += 0.1;
					this.DMGResult[2].dmgAP1 += 0.1;
				}
				this.DMGResult[0].dmgAD1 += this.talentPower * 0.01;
				this.DMGResult[2].dmgAP1 += this.talentPower * 0.01;
				
				this.DMGResult[0].dmgAD1 += this.dmgOther1 * 0.01;
				this.DMGResult[2].dmgAP1 += this.dmgOther1 * 0.01;
				
				this.DMGResult[1].dmgAD2 += this.dmgOther2 *1;
				this.DMGResult[3].dmgAP2 += this.dmgOther2 *1;
			},
			addDataInRange(data){
				if(!data.isMagic){
					this.DMGResult[0].dmgAD1 += data.dmg1;
					this.DMGResult[1].dmgAD2 += data.dmg2;
				}else {
					this.DMGResult[2].dmgAP1 += data.dmg1;
					this.DMGResult[3].dmgAP2 += data.dmg2;
				}
			},
			clearData(){
				this.DMGResult[0].dmgAD1 = 0;
				this.DMGResult[1].dmgAD2 = 0;
				this.DMGResult[2].dmgAP1 = 0;
				this.DMGResult[3].dmgAP2 = 0;
			},
		},
		computed: {
			getDMG_phys(){
				return ((this.DMGResult[1].dmgAD2) * (1 + this.DMGResult[0].dmgAD1)).toFixed(1);
			},
			getDMG_mag(){
				return ((this.DMGResult[3].dmgAP2) * (1 + this.DMGResult[2].dmgAP1)).toFixed(1);
			},
			DMG_base_phys(){
				return (this.getDmgBase_phys()).toFixed(1);
			},
			DMG_base_mag(){
				return (this.getDmgBase_mag()).toFixed(1);
			},
		},
		components: {
			Jewelry,
		},
	}
</script>

<style>
	a {
		text-decoration: none;
		color: #adb32e;
	}
	#DMG_base {
		position: relative;
	}
	#DMG_base h4{
		position:absolute;
		left: 12em;
		top: 1em;
		color: royalblue;
		font-weight: normal;
	}
	.l {
		float: left;
	}
	.r {
		float: right;
	}
	.titlebox {
		position: relative;
	}
	.numbar {
		float: left;
		height: 30upx;
		margin: 0upx 15upx;
		text-align: center;
		font-size: 25upx;
	}
	.subtitile {
		position: absolute;
		left: 20upx;
		top: -20px;
		font-size: 12px;
		color: gray;
	}
	.numbar *{
		float: left;
	}
	.numbar img{
		float: left;
		margin-right: 15upx;
		margin-top: -2px;
	}
	.enableBtn {
		width: 25px;
		margin-top: 5px;
		float: left;
		font-weight: 900;
	}
	.DMG_final {
		margin-left: 20upx;
	}
	
	.author {
		text-align: center;
		padding: 20px;
		color: gray;
		font-size: 20upx;
	}
	
	/*电脑端浏览器*/
	/* #ifdef H5 */
	.uni-section {
		margin: 10px;
		float: left;
		width: 350px;
		height: 250px;
		border-radius: 10px;
		box-shadow: 1px 2px 3px #4d4d4d;
	}
	@media screen and (max-width:360px){
		.uni-section {
			margin: 5px;
		}
	}
	/* #endif */
</style>
