<template>
	<!-- #ifdef H5 -->
	<div id="logo" style="height:180upx;"></div>
	<h2 id="webtitle"><!-- 战矛在线伤害模拟器 --></h2>
	<!-- #endif -->
	<!-- #ifndef H5 -->
	<div id="logo" style="height:200upx;"></div>
	<h2 id="webtitle"><!-- 战矛在线伤害模拟器 --></h2>
	<!-- #endif -->
	<view class="container">
		
		<switcher @changeIndex="changePage"></switcher>

		<div  v-if="PageIndex==1">
			<calc></calc>
		</div>
		
		<div v-if="PageIndex==2">
			<DmgInFight></DmgInFight>
		</div>
		
	</view>
	<div style="height: 5upx;"></div>
	<div class="author">作者qq2732149714，请联系他修复bug！<br>
	数据仅供参考，实际效果以游戏为准！<br>
	战矛萌新群群号: 851922086 <br>
	传送门：<a target=“_blank” href="https://aurora.wsdb.xyz/en/calculator">战矛做梦器</a></div>
</template>

<script>
	import Switcher from './switcher.vue'
	import Calc from "./calc.vue"
	import DmgInFight from "./dmgInFight.vue"
	export default {
		data() {
			return {
				PageIndex: 1,
			}
		},
		watch:{
		},
		methods: {
			changePage(pIndex){
				this.PageIndex = pIndex;
			},
		},
		computed: {
		},
		components: {
			Switcher,
			Calc,
			DmgInFight,
		},
	}
</script>

<style>
	
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
	
	a {
		text-decoration: none;
		color: #b37011;
	}
	.l {
		float: left;
	}
	.r {
		float: right;
	}
	.author {
		text-align: center;
		padding: 20px;
		color: gray;
		font-size: 20upx;
	}
	
	/*电脑端浏览器*/
	/* #ifdef H5 */
	page {
		width: 100%;  height: 100%; 
		background-image: url("@/static/image/tiling_back.png");
	}
	#logo {
		background: url(https://forum.warspear-online.com/uploads/monthly_2022_02/logo_warspear_new_finished.png.65638b0dc12d7290f0a6cf2265e129c1.png)
					no-repeat;
		background-size: 200px;
		background-position: 50% 10px;
	}
	#webtitle {
		position: absolute;
		top:25px;
		left: calc(50% - 108px);
		text-align: center;
		color: aliceblue;
	}
	.container {
		width: 1110px;
		margin: 0 auto;
		overflow : hidden;
	}
	.uni-section {
		margin: 10px;
		float: left;
		width: 350px;
		height: 250px;
		border-radius: 10px;
		box-shadow: 1px 2px 3px #4d4d4d;
	}
	@media screen and (max-width:1110px){
		.container {
			width: 740px;
			margin: 0 auto;
		}
	}
	@media screen and (max-width:740px){
		.container {
			width: 370px;
			margin: 0 auto;
		}
	}
	@media screen and (max-width:360px){
		.container {
			width: 360px;
			margin: 0 auto;
		}
	}
	/* #endif */
	
	/*非电脑端*/
	/* #ifndef H5 */
	#logo {
		background: url(https://forum.warspear-online.com/uploads/monthly_2022_02/logo_warspear_new_finished.png.65638b0dc12d7290f0a6cf2265e129c1.png)
					no-repeat;
		background-size: 200px;
		background-position: 50% 10px;
		margin-top: 90upx;
	}
	#webtitle {
		position: absolute;
		top:25px;
		left: calc(50% - 108px);
		text-align: center;
		color: aliceblue;
	}
	/* #endif */
</style>
