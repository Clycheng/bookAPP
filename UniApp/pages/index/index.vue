<template>
	<view id="app" :style="{height:winHeight+'px'}">
		<button @click="qingqiu">加载</button>
		<view class="warp" :style="{height:winHeight+'px'}">
			<view class="warp-child menu" :class="menuBlean?'menu-active':''">
					<view class = "menu-warp">
							<ui>
								<li><uni-icon type="star" size="17"></uni-icon>我的收藏</li>
								<li><uni-icon type="gear" size="17"></uni-icon>阅读设置</li>
								<li><uni-icon type="chatbubble" size="17"></uni-icon>给个好评</li>
							</ui>
					</view>
				
			</view>
			<view class="warp-child content" :class="menuBlean?'content-active':''">
				<header>
					<view class="bars">
						<uni-icon type="bars" color="#333333" size="30" @click='menu'></uni-icon>
					</view>
					<view class="title">
						<h3 v-if="HTitle">{{dayContent.title}}</h3>
					</view>
					<view class="more">
						<uni-icon type="more" color="#333333" size="30" @click="drwer"></uni-icon>
					</view>
				</header>
				<section :style="{height:secHeight+'px'}" @touchstart="touchStrat" @touchmove="touchMove" @touchend="touchEnd">
					<scroll-view scroll-y :style="{height:secHeight+'px'}" @scrolltolower="srcTop">
						<p>{{dayContent.title}}</p>
						<p>—————— · ——————</p>
						<p style="color:#8F8F94;text-align: center;">{{dayContent.author}}</p>
						<rich-text :nodes="dayContent.content"></rich-text>

					</scroll-view>
				</section>
			</view>
			<view class="content-top-mask" v-if="menuBlean" :style="{height:winHeight+'px'}" @click="menu"></view>
			<view style="clear: both;"></view>
			<view class="mask-warp" v-if="drawerBlean" @click="drwer">
			</view>
			<uni-drawer :visible="drawerBlean" mode="right">
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
				winWidth: '',
				winHeight: '',
				secHeight: '',
				drawerBlean: false,
				menuBlean: false,
				PageStartX: '',
				PageEndX: '',
				PageStratY: '',
				PageEndY: '',
				dayContent: {
					title: "",
					author: "",
					content: "",
					date: "",
					digest: ""
				},
				HTitle: false,
			}
		},
		components: {
			uniIcon,
			uniDrawer
		},
		onLoad(e) {
			if (uni.getSystemInfoSync().platform === 'devtools') {
				console.log('运行在开发工具上')
				var that = this
				wx.getSystemInfo({
					success: function(res) {
						console.log(res.windowWidth);
						console.log(res.windowHeight);
						that.winHeight = res.windowHeight
						that.winWidth = res.windowWidth;
						that.secHeight = res.windowHeight - 40
					},
				})
			} else {
				var that = this
				wx.getSystemInfo({
					success: function(res) {
						console.log(res.windowWidth);
						console.log(res.windowHeight);
						that.winHeight = res.windowHeight
						that.winWidth = res.windowWidth;
						that.secHeight = res.windowHeight - 40
					},
				})
			}
			// 请求数据
			var that = this.dayContent;
			uni.request({
				url: "https://interface.meiriyiwen.com/article/today?dev=1",
				dataType: "JSON",
				success: function(e) {
					var res = e.data.data;
					// console.log(res);
					// res.content = res.content.replace(/\"/g, "");
					that.author = res.author;
					that.content = res.content;
					that.digest = res.digest;
					that.title = res.title;
					that.date = res.date;
					// console.log(that.author, that.content, that.digest, that.title, that.date)
				}
			})
		},

		methods: {
			qingqiu:function(){
					uni.request({
						url: "https://interface.meiriyiwen.com/article/today?dev=1",
						dataType: "JSON",
						success: function(e) {
							var res = e.data.data;
							// console.log(res);
							res.content = res.content.replace(/\"/g, "");
							that.author = res.author;
							that.content = res.content;
							that.digest = res.digest;
							that.title = res.title;
							that.date = res.date;
							// console.log(that.author, that.content, that.digest, that.title, that.date)
						}
					})
			},
			// 控制抽屉栏
			drwer: function() {
				this.menuBlean = false;
				if (!this.drawerBlean) {
					this.drawerBlean = true;
				} else if (this.drawerBlean) {
					this.drawerBlean = false;
				}
				console.log('抽屉开关=' + this.drawerBlean)
			},
			// 控制菜单
			menu: function() {
				this.drawerBlean = false;
				if (!this.menuBlean) {
					this.menuBlean = true;
				} else {
					this.menuBlean = false;
				}
				console.log('菜单=' + this.menuBlean)
			},
			// 判断左右滑动
			touchStrat: function(e) {
				// console.log(e);
				// 小程序规范
				//#ifdef MP-WEIXIN
				if (uni.getSystemInfoSync().platform === 'devtools') {
					this.PageStartX = e.clientX
					this.PageStartY = e.clientY
				} else {
					this.PageStartX = e.clientX
					this.PageStartY = e.clientY
				}
				// #endif
				// H5平台规范
				// #ifdef H5 
				this.PageStartX = e.changedTouches[0].pageX
				this.PageStratY = e.changedTouches[0].pageY
				// #endif
				// app规范
				// #ifdef APP-PLUS
				this.PageStartX = e.changedTouches[0].pageX
				this.PageStratY = e.changedTouches[0].pageY
				// #endif
			},
			touchMove: function(e) {
				//#ifdef MP-WEIXIN
				if (uni.getSystemInfoSync().platform === 'devtools') {
					this.PageEndX = e.clientX
					this.PageEndY = e.clientY
				} else {
					this.PageEndX = e.clientX
					this.PageEndY = e.clientY
				}
				//#endif

				// #ifdef H5
				this.PageEndX = e.changedTouches[0].pageX
				this.PageEndY = e.changedTouches[0].pageY
				// #endif

				// app规范
				// #ifdef APP-PLUS
				this.PageEndX = e.changedTouches[0].pageX
				this.PageEndY = e.changedTouches[0].pageY
				// #endif
			},
			touchEnd: function(e) {
				// console.log(this.winWidth)
				// 当菜单没有被点开
				if (!this.menuBlean) {
					// 手指到最左边才执行	
					if (this.PageStartX < 100) {

						let diffVal = this.PageStartX - this.PageEndX;
						console.log('开始坐标：' + this.PageStartX, '结束坐标：' + this.PageEndX)
						console.log("cha:" + diffVal)

						if (diffVal < -100 && diffVal != this.PageStartX) {
							this.menuBlean = true;

						}
						// 手指到最右边才执行
					} else if (this.winWidth - this.PageStartX < 100) {

						let diffVal = this.PageStartX - this.PageEndX;

						if (diffVal > 100 && diffVal != this.PageStartX) {
							this.drawerBlean = true;
						} else if (diffVal < 100) {
							this.drawerBlean = false;
						}
					} else {
						return false;
					}
					//当菜单被点开 
				} else if (this.menuBlean) {
					console.log(1);

				}
			},

			// 滚动
			srcTop: function(e) {
				console.log(e);
				console.log("123131313")
			}
		},
		// 收藏
		coll: function() {
			// this.callIcon?"star":"star-filled";
			console.log(1)
		}
	}
</script>

<style scoped>
	#app {
		overflow: hidden;
	}

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
	.menu {
		width: 0%;
		background: #708090;
		animation: menucallback 0.5s 1;
	}

	.menu-active {
		width: 20%;
		z-index: 1;
		animation: menuMove 0.5s 1;
	}
	
	.menu-warp{
		width: 100%;
		height: 100%;
		/* background: red; */
		border:1px solid #708090;
	}
	.menu-warp li {
		position:relative;
		list-style: none;
		font-size: 12px;
		text-align: right;
		height: 40px;
		line-height: 40px;
		vertical-align:top;
		font-weight: bold;
		padding-right: 5px;
		margin-bottom: 10px;
		border-bottom: 1px solid #708090;
		box-shadow:0px 1px 1px  #94a0ab;
	}
	.menu-warp li uni-view{
		position:absolute;
		left: 10%;
		top:13px;
	}
	/*菜单运动*/
	@keyframes menuMove {
		from {
			width: 0%
		}

		to {
			width: 20%;
		}
	}

	@keyframes menucallback {
		from {
			width: 20%
		}

		to {
			width: 0%;
		}
	}

	/* 内容部分 */
	.content {
		width: 100%;
		background: #F8F8F8;
		z-index: 1;
		/* transition: 0.5s; */
		animation: mycallback 0.5s 1;

	}

	.content-active {
		z-index: 1;
		left: 20%;
		animation: mymove 0.5s 1;

	}

	/* 内容蒙层 */
	.content-top-mask {
		position: fixed;
		width: 80%;
		left: 20%;
		z-index: 9999;
	}

	/* header */
	header {
		width: 100%;
		height: 40px;
		/* position: fixed; */
		background: #fef8e8;
	}

	h3 {
		font-size: 25px;
		background: #fef8e8;
	}

	.title {
		position: absolute;
		width: 40%;
		left: 50%;
		top: -1%;
		transform: translate(-50%, 0%);
		background: #F8F8F8;
		text-align: center;
	}

	/* section */
	section {
		width: 100%;
		/* height: 300px; */
		overflow: auto;
		background: #f5efd9;


	}

	p:first-child {
		margin-top: 10px;
		font-size: 35px;
		text-align: center;
	}

	p:nth-child(2) {
		text-align: center;
	}

	p:last-child {
		text-align: right;
	}

	>>>p {
		font-size: 15px;
		text-indent: 25px;
		line-height: 30px;
		padding: 5px;
	}



	/* css3动画 */
	@keyframes mymove {
		from {
			left: 0%;
		}

		to {
			left: 20%;
		}
	}

	@keyframes mycallback {
		from {
			left: 20%;
		}

		to {
			left: 0%;
		}
	}

	.more {
		width: 30px;
		height: 30px;
		position: absolute;
		left: 90%;
	}

	.bars {
		width: 30px;
		height: 30px;
		position: absolute;
		left: 3%;
	}

	/* 自定义抽屉 */
	.mask-warp {
		position: absolute;
		width: 75%;
		height: 100%;
		z-index: 9999;
	}
</style>
