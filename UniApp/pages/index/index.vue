<template>
	<view>
		<view class="warp" :style="{height:winHeight+'px'}">
			<view class="warp-child menu" :class="menuBlean?'menu-active':''"></view>
			<view class="warp-child content" :class="menuBlean?'content-active':''" >
				<header>
					<uni-icon type="bars" class = "bars" color="#333333" size="30" @click='menu'></uni-icon>
					<uni-icon type="more" class = "more" color="#333333" size="30" @click="drwer"></uni-icon>
				</header>
			</view>
			<view style="clear: both;"></view>
			<view class="mask-warp" v-if="drawerBlean" @click="drwer">
				</view>
				<uni-drawer :visible="drawerBlean" mode="right" >
						<view style="padding:10upx;" >
							<view class="uni-title"></view>
							<view class="uni-list uni-common-mt">
								<view class="uni-list-cell" hover-class="uni-list-cell-hover">
									<view class="uni-list-cell-navigate uni-navigate-right">Item1</view>
								</view>
								<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
									<view class="uni-list-cell-navigate uni-navigate-right">Item2</view>
								</view>
							</view>
					</view>
				</uni-drawer>
			</view>
		</view>
	</view>

</template>

<script>
	import uniIcon from "@/components/uni-icon.vue"
	import uniDrawer from "@/components/uni-drawer.vue"
	export default {
		data() {
			return {
				winHeight: '',
				drawerBlean:false,
				menuBlean:false

			}
		},
		components: {
			uniIcon,
			uniDrawer
		},
		onLoad(e) {
			if(uni.getSystemInfoSync().platform === 'devtools'){
					console.log('运行在开发工具上')
					var that =this
					wx.getSystemInfo({
						  success: function(res) {
							console.log(res.windowWidth);
							console.log(res.windowHeight);
							that.winHeight= res.windowHeight
						  },
						})
				}else{
					var that =this
					wx.getSystemInfo({
						success: function(res) {
							console.log(res.windowWidth);
							console.log(res.windowHeight);
							that.winHeight= res.windowHeight
						},
						})
				}

			// console.log(navigationBarTitleText
			
			// console.log(document.body.clientHeight);
			console.log(this.winHeight)
			var that = this;
		},

		methods: {
			// 控制抽屉栏
			drwer: function() {
				console.log(this.drawerBlean)
				console.log(this.menuBlean)
				this.menuBlean=false;
				if(!this.drawerBlean){
						this.drawerBlean = true;
					
					}else if(this.drawerBlean){
						this.drawerBlean = false;
					}
			},
			// 控制菜单
			menu:function(){
				this.drawerBlean=false;
				if(!this.menuBlean){
						this.menuBlean = true;
					
					}else{
						this.menuBlean = false;
					}
			}
		}
	}
</script>

<style scoped>
	.warp {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.warp-child {
		height: 100%;
		float: left;
		position: absolute;
	}
/* 菜单 */
	.menu{
		width: 0%;
		background: red;
		animation:menucallback 0.5s 1;
	}
	.menu-active{
		width: 20%;
		background: red;
		z-index: 1;
		animation:menuMove 0.5s 1;
	}
	/*菜单运动*/
	@keyframes menuMove{
		from {
			width:0%
		}
		to{
			width: 20%;
		}
	}
	@keyframes menucallback{
		from {
			width:20%
		}
		to{
			width: 0%;
		}
	}
/* 内容部分 */
	.content {
		width: 100%;
		background: #007AE6;
		z-index: 1;	
		/* transition: 0.5s; */
		animation:mycallback 0.5s 1;
		
	}
	.content-active{
		background: #007AE6;
		z-index: 1;
		left: 20%;
		animation:mymove 0.5s 1;
		
	}
	/* css3动画 */
	@keyframes mymove
	{
	from {left:0%;}
	to {left:20%;}
	}
	@keyframes mycallback
	{
	from {left:20%;}
	to {left:0%;}
	}
	.uni-icon-more {
		position: absolute;
		left:90% ;
	}
	.uni-icon-bars {
		position: absolute;
		left:3% ;
	}
	/* 自定义抽屉 */
	.mask-warp{
		position: absolute;
		width: 75%;
		height: 100%;
		z-index: 9999;
	}
</style>
