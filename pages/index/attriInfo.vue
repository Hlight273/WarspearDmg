<template>
	<uni-popup ref="popup" type="center">
		<div class="helpbox" @click="closePopup">
			<image src="../../static/image/attribute/wsBorder.png" class="helpbox_iconborder"></image>
			<image :src="hiIMG" class="helpbox_icon"></image>
			<h2>{{hiAttiName}}</h2>
			
			<div class="introduce" v-if="aID==-1">
				<h4>一次攻击造成的伤害：</h4>
				<p>
					这一次攻击可以是平a伤害，也可以是单次技能伤害<br>
					对于平a，您仅需要考虑面板值<br>
					对于技能伤害，您需要考虑您的技能伤害加成、以及各种才能和其他技能的额外加成、
					技能伤害影响因素有很多，容易和您的预期不符
				</p>
			</div>
			
			<div class="introduce" v-if="aID==0">
				<h4>精准一比一的抵消闪避值：</h4>
				<p>
					比如您的精准值是30%，敌人的闪避是60% <br>
					那么您对敌人的 实际命中率 = (100%+精准-闪避) = 70%
				</p>
				<h4>精准的应用场景：</h4>
				<p>
					根据经验，35%左右的精准在pve中已经很够用了<br>
					在pvp中，有的技能会降低您的精准甚至到负值，比如盗贼、看守的技能
				</p>
			</div>
			
			<div class="introduce" v-if="aID==1">
				<h4>穿透一比一的抵消防御百分比值：</h4>
				<p>
					比如您的穿透值是30%，敌人的物理防御是6500(50%)<br>
					那么您对敌人的 实际伤害结算 只会扣除20% 
				</p>
				<h4>锐评穿透：</h4>
				<p>
					在绝大多数情况，敌人的防御都会比30%乃至50%更多，
					因此穿透=增伤。显然，这是一个pvppve都很重要的属性。
				</p>
			</div>
			
			<div class="introduce" v-if="aID==2">
				<h4>暴击率是pve收益最高的属性！</h4>
				<h4>暴击率增加造成暴击伤害 或 暴击治疗 的概率：</h4>
				<p>
					暴击造成伤害 = 原伤害 * 2 * 暴伤值<br>
					值得注意的是，暴击奶不会收到暴伤加成
				</p>
				<h4>暴击率：</h4>
				<p>
					在你的才能界面可以额外增加3%的暴击率上限。 <br>
					稳固值可以降低敌人收到的暴击率和暴击伤害。<br>
					弹性值可以降低你的暴击率，战矛的特性会让暴击效果在pvp时起到负面影响
				</p>
			</div>
			
			<div class="introduce" v-if="aID==3">
				<h4>攻速减少平a的攻击间隔：</h4>
				<p>
					不同武器有不同的攻击时间间隔<br>
					拿两个武器和一个武器，有不同的计算公式<br>
					使用技能会立即重置攻击间隔，时机不好就会卡手
				</p>
				<h4>公式：</h4>
				<p>
					仅持有一个武器时： <br>
					&nbsp;攻击间隔 = (100% - 攻速值) * 武器固有攻击间隔<br>
					持有两把武器时： <br>
					&nbsp;攻击间隔 = (100% - 攻速值) * (左间隔 + 右间隔) / 1.5<br>
				</p>
			</div>
			
		</div>
	</uni-popup>
</template>

<script>
	export default {
		data() {
			return {
				aID: 0,
				hiIMG:'',
				hiAttiName:'',
				
				attrs:['acc','pene','crit','speed','attackStrength',
						'superdmg','piericing','depthFury','rage','defPhysic',
						'defMagic','dodge','parry','block'],
				attrs_ZH:['精准','穿透','暴击','攻速','攻强',
						'暴伤','穿刺','鱼叉','肆虐','物防',
						'魔防','闪避','招架','格挡'],
			}
		},
		methods: {
			changeAttri(value) {
				this.pene = value;
			},
			hi(e,id){
				this.aID = id;
				this.hiIMG = this.iconURL(this.attrs[id]);
				this.hiAttiName = this.attrs_ZH[id];
				if(this.aID == -1){
					this.hiIMG = "../../static/image/attribute/dmg.png";
					this.hiAttiName = '攻击力';
				}
				this.$refs.popup.open('center');
			},
			closePopup(){
				this.$refs.popup.close();
			},
			iconURL(name){
				return "../../static/image/attribute/"+name+".webp";
			},
		},
	}
</script>

<style>
	.helpbox {
		margin-bottom: 50px;
		padding: 40px;
		box-sizing: border-box;
		width: 400px;
		height: 300px;
		background-color: #fff;
		border-radius: 10px;
	}
	.helpbox_icon {
		position: absolute;
		width: 43px;
		height: 43px;
	}
	.helpbox_iconborder {
		position: absolute;
		top:29px;
		left: 29px;
		width: 65px;
		height: 65px;
	}
	.helpbox h2{
		float: left;
		margin-left: 60px;
		font-weight: normal;
		font-size: 20px;
		line-height: 20px;
		color: #4d4d4d;
	}
	.introduce {
		margin-top: 70px;
		width: 320px;
		height: 160px;
		font-weight: normal;
		font-size: 12px;
		color: #4d4d4d;
	}
	.introduce p {
		/*text-indent: 2em;*/
		margin-left: 5px;
	}
	.introduce h4 {
		margin: 10px auto 2px auto;
	}
</style>
