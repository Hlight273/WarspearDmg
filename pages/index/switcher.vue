<template>
	<div>
		<div id="bars"  @click="open">
			<uni-icons type="bars" size="30" color="gray"></uni-icons>
		</div>
		<uni-popup ref="popup" type="left">
			<div class="mybox">
				<div class="myboxtitle"><image src="../../static/image/warpearhelp.png" id="wshelp"></image>战矛辅助工具</div>
				<ul>
					<li class="goto" @click="clickGoTo($event)" id="1"><uni-icons type="forward" size="16" color="dimgray"></uni-icons>战矛伤害模拟器</li>
					<li class="goto" @click="clickGoTo($event)" id="2"><uni-icons type="forward" size="16" color="dimgray"></uni-icons>战矛伤害公式原理</li>
					<li class="goto" @click="clickGoTo($event)" id="3"><uni-icons type="forward" size="16" color="dimgray"></uni-icons>战矛小知识1</li>
					<li class="goto" @click="clickGoTo($event)" id="4"><uni-icons type="forward" size="16" color="dimgray"></uni-icons>战矛小知识2</li>
				</ul>
			</div>
		</uni-popup>
	</div>
</template>

<script>
	export default {
	    data() {
	    	return {
				pageIndex: 1,
			}
		},
		methods:{
		  open(){
			    this.$refs.popup.open('left');
		  },
		  clickGoTo(a){
			    this.pageIndex = a.currentTarget.id;
				this.$emit("changeIndex", this.pageIndex);
		  },
		},
	}
</script>

<style>
	li {
		list-style: none;
	}
	ul {
		padding-left:0 ;
	}
	#bars {
		cursor: pointer;
		position: absolute;
		top: 50px;
		left: 20px;
		width: 50px;
		height: 50px;
		background-color: #fff;
		border-radius: 50px;
		box-shadow: 1px 2px 3px #4d4d4d;
	}
	#bars .uni-icons {
		position: relative;
		top: 10px;
		left: 10px;
	}
	.mybox {
		position: relative;
		width: 180px;
		height: 3000px;
		color: dimgray;
		/*border-right: 2px solid #c2b0a2;*/
		background-color: #fff;
		/*background-image: url("@/static/image/tiling_back.png");*/
	}
	#wshelp {
		position: relative;
		top:2px;
		left:-2px;
		width: 20px;
		height: 20px;
	}
	.myboxtitle {
		padding: 20px;
		padding-top:140upx ;
		font-size: 20px;
	}
	.goto {
		cursor: pointer;
		padding: 15px;
		margin-bottom: 10px;
		height: 20px;
		line-height: 20px;
		transition: all .3s;
	}
	.goto:hover {
		color: aliceblue;
		background-color: #4d4d4d;
	}
	
	/*电脑端浏览器*/
	/* #ifdef H5 */
	#bars {
		z-index: 0;
		position: absolute;
		top: 20px;
		left: 20px;
	}
	#wshelp {
		position: relative;
		top:10px;
		left:-5px;
		width: 40px;
		height: 40px;
	}
	.mybox {
		top:0px;
		width: 300px;
	}
	.myboxtitle {
		padding: 20px;
	}
	/* #endif */
</style>