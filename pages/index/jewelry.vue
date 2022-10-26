<template>
	<view>
		<uni-section title="装备&饰品伤害" type="line" padding>
			<div style="height:20upx;"></div>
			<div class="titlebox l">
				<div class="subtitile">披风</div>
				<uni-data-select
						style="width:160px;"
				        v-model="vCape"
				        :localdata="RangeCape"
				        @change="change1"
						:clear="false"
				      ></uni-data-select>
			</div>
			<div class="titlebox r">
				<div class="subtitile">项链</div>
				<uni-data-select
						style="width:160px;"
				        v-model="vNecklace"
				        :localdata="RangeNecklace"
				        @change="change2"
						:clear="false"
				      ></uni-data-select>
			</div>
			<div style="height:120upx;"></div>
			
			<div class="titlebox l">
				<div class="subtitile">戒指</div>
				<uni-data-select
						style="width:160px;"
				        v-model="vRing1"
				        :localdata="RangeRing1"
				        @change="change3"
						:clear="false"
				      ></uni-data-select>
			</div>
			<div class="titlebox r">
				<div class="subtitile">戒指</div>
				<uni-data-select
						style="width:160px;"
				        v-model="vRing2"
				        :localdata="RangeRing2"
				        @change="change4"
						:clear="false"
				      ></uni-data-select>
			</div>
			<div style="height:120upx;"></div>
			
			<div class="titlebox l">
				<div class="subtitile">衣服法强</div>
				<uni-easyinput v-model="clotheDmg" class="clothe_inputbox" @change="change5" :clearable="false" type=Number></uni-easyinput>
			</div>
			<div class="titlebox l">
				<div class="subtitile">腰带法强</div>
				<uni-easyinput v-model="beltDmg" class="clothe_inputbox" @change="change6" :clearable="false" type=Number></uni-easyinput>
			</div>
			<div class="titlebox l">
				<div class="subtitile">手套法强</div>
				<uni-easyinput v-model="gloveDmg" class="clothe_inputbox" style="margin-right:0;" @change="change7" :clearable="false" type=Number></uni-easyinput>
			</div>
			<!-- <br>
			<br>
			<div>{{JResult[0].dmgAD1}}</div>
			<div>{{JResult[1].dmgAD2}}</div>
			<div>{{JResult[2].dmgAP1}}</div>
			<div>{{JResult[3].dmgAP2}}</div>
			 -->
			<div style="height:160upx;"></div>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				JResult: [ 
					{dmgAD1: 0},
				    {dmgAD2: 0},
				    {dmgAP1: 0},
				    {dmgAP2: 0}
				],
				clotheDmg:0,
				beltDmg:0,
				gloveDmg:0,
				vCape: 0,
				RangeCape: [
				  { value:0, text: "无" ,dmg1:0,dmg2:0,isMagic:false},
				  { value: 1, text: "物理+7%" ,dmg1:0.07,dmg2:0,isMagic:false},
				  { value: 2, text: "物理+69" ,dmg1:0,dmg2:69,isMagic:false},
				  { value: 3, text: "物理+63" ,dmg1:0,dmg2:63,isMagic:false},
				  { value: 4, text: "法术+10%" ,dmg1:0.1,dmg2:0,isMagic:true},
				  { value: 5, text: "法术+5%,+41" ,dmg1:0.05,dmg2:41,isMagic:true},
				  { value: 6, text: "法术+5%,+45" ,dmg1:0.05,dmg2:45,isMagic:true},
				  { value: 7, text: "法术+15%" ,dmg1:0.15,dmg2:0,isMagic:true},
				  { value: 6, text: "法术+41" ,dmg1:0,dmg2:41,isMagic:true},
				  { value: 7, text: "法术+45" ,dmg1:0,dmg2:45,isMagic:true},
				],
				vNecklace: 0,
				RangeNecklace: [
				  { value:0, text: "无" ,dmg1:0,dmg2:0,isMagic:false},
				  { value: 1, text: "物理+7%" ,dmg1:0.07,dmg2:0,isMagic:false},
				  { value: 2, text: "物理+62" ,dmg1:0,dmg2:62,isMagic:false},
				  { value: 3, text: "物理+57" ,dmg1:0,dmg2:57,isMagic:false},
				  { value: 4, text: "法术+10%" ,dmg1:0.1,dmg2:0,isMagic:true},
				  { value: 5, text: "法术+35" ,dmg1:0,dmg2:35,isMagic:true},
				  { value: 6, text: "法术+38" ,dmg1:0,dmg2:38,isMagic:true},
				  { value: 7, text: "法术+15%" ,dmg1:0.15,dmg2:0,isMagic:true},
				],
				vRing1: 0,
				RangeRing1: [
				  { value:0, text: "无" ,dmg1:0,dmg2:0,isMagic:false},
				  { value: 1, text: "物理+6%" ,dmg1:0.06,dmg2:0,isMagic:false},
				  { value: 2, text: "物理+46" ,dmg1:0,dmg2:46,isMagic:false},
				  { value: 3, text: "物理+41" ,dmg1:0,dmg2:41,isMagic:false},
				  { value: 4, text: "法术+9%" ,dmg1:0.09,dmg2:0,isMagic:true},
				  { value: 5, text: "法术+34" ,dmg1:0,dmg2:34,isMagic:true},
				  { value: 6, text: "法术+31" ,dmg1:0,dmg2:31,isMagic:true},
				  { value: 7, text: "法术+10%" ,dmg1:0.1,dmg2:0,isMagic:true},
				],
				vRing2: 0,
				RangeRing2: [
				  { value:0, text: "无" ,dmg1:0,dmg2:0,isMagic:false},
				  { value: 1, text: "物理+6%" ,dmg1:0.06,dmg2:0,isMagic:false},
				  { value: 2, text: "物理+46" ,dmg1:0,dmg2:46,isMagic:false},
				  { value: 3, text: "物理+41" ,dmg1:0,dmg2:41,isMagic:false},
				  { value: 4, text: "法术+9%" ,dmg1:0.09,dmg2:0,isMagic:true},
				  { value: 5, text: "法术+34" ,dmg1:0,dmg2:34,isMagic:true},
				  { value: 6, text: "法术+31" ,dmg1:0,dmg2:31,isMagic:true},
				  { value: 7, text: "法术+10%" ,dmg1:0.1,dmg2:0,isMagic:true},
				],
			}
		},
		methods: {
			getDataJewelry(){
				return this.JResult;
			},
			changeData(){
				this.clearData();
				let dataCape = this.RangeCape[this.vCape];
				let dataNecklace = this.RangeNecklace[this.vNecklace];
				let dataRing1 = this.RangeRing1[this.vRing1];
				let dataRing2 = this.RangeRing2[this.vRing2];
				let dataAll = [dataCape, dataNecklace, dataRing1, dataRing2];
				for(let i=0; i<dataAll.length; i++){
					this.addData(dataAll[i]);
				}
				//加衣服等部位固定法强
				let dmgClothes = 0 + this.beltDmg*1 + this.gloveDmg*1 + this.clotheDmg*1;
				this.JResult[3].dmgAP2 += dmgClothes*1;
				//向父组件注入钩子
				this.$emit("jeweChanged", this.JResult);
			},
			addData(dataJewelry){
				if(!dataJewelry.isMagic){
					this.JResult[0].dmgAD1 += dataJewelry.dmg1;
					this.JResult[1].dmgAD2 += dataJewelry.dmg2;
				}else {
					this.JResult[2].dmgAP1 += dataJewelry.dmg1;
					this.JResult[3].dmgAP2 += dataJewelry.dmg2;
				}
			},
			clearData(){
				this.JResult[0].dmgAD1 = 0;
				this.JResult[1].dmgAD2 = 0;
				this.JResult[2].dmgAP1 = 0;
				this.JResult[3].dmgAP2 = 0;
			},
			change1(e){
				this.vCape = e;
				this.changeData();
			},
			change2(e){
				this.vNecklace = e;
				this.changeData();
			},
			change3(e){
				this.vRing1 = e;
				this.changeData();
			},
			change4(e){
				this.vRing2 = e;
				this.changeData();
			},
			change5(e){
				this.clotheDmg = e;
				this.changeData();
			},
			change6(e){
				this.beltDmg = e;
				this.changeData();
			},
			change7(e){
				this.gloveDmg = e;
				this.changeData();
			},
		}
	}
</script>

<style>
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
	.l {
		float: left;
	}
	.r {
		float: right;
	}
	.titlebox {
		position: relative;
	}
	.subtitile {
		position: absolute;
		left: 20upx;
		top: -20px;
		font-size: 12px;
		color: gray;
	}
	.clothe_inputbox {
		float: left;
		margin-right: 30px;
		width: 90px;
	}
	@media screen and (max-width:360px){
		.uni-section {
			margin: 5px;
		}
	}
</style>
