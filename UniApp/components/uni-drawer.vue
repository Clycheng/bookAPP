<template>
	<view class="uni-drawer" :catchtouchmove="catchtouchmove" :class="{'uni-drawer-visible':visible,'uni-drawer-right':rightMode}">
		<view v-if="showMask" class="uni-drawer-mask" @tap="close"></view>
		<view class="uni-drawer-content">
			<slot><view style="padding:10upx;">
					<view class="uni-title">想要干哈？</view>
					<view class="uni-list uni-common-mt">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="coll" >
							<view class="uni-list-cell-navigate uni-navigate-right coll">收藏<uni-icon :type="callIcon" size="30"></uni-icon></view>
						</view>
						<view class="uni-list-cell " hover-class="uni-list-cell-hover">
							<view class="uni-list-cell-navigate uni-navigate-right share">分享<uni-icon type="paperplane" size="30" ></uni-icon>
							</view>

						</view>
						<view class="uni-list-cell" hover-class="uni-list-cell-hover">
							<view class="uni-list-cell-navigate uni-navigate-right coll">前一天<uni-icon type="undo" size="30" ></uni-icon></view>
						</view>
						<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
							<view class="uni-list-cell-navigate uni-navigate-right coll">随机<uni-icon type="refresh" size="30" ></uni-icon></view>
						</view>
					</view>
				</view></slot>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon.vue"
	export default {
		props: {
			/**
			 * 显示状态
			 */
			visible: {
				type: Boolean,
				default: false
			},
			/**
			 * 显示模式（左、右），只在初始化生效
			 */
			mode: String,
			/**
			 * 蒙层显示状态
			 */
			mask: {
				type: [Boolean, String],
				default: true
			}
		},
		data() {
			return {
				rightMode: false,
				catchtouchmove: false,
				callIcon:"star"
			}
		},
		computed: {
			showMask() {
				return String(this.mask) === 'true'
			}
		},
		components:{
			uniIcon
		},
		created() {
			this.rightMode = this.mode === 'right'
			//#ifdef MP-WEIXIN
			this.catchtouchmove = true
			//#endif
		},
		methods: {
			close() {
				this.$emit('close')
			},
			coll:function(){
				console.log(this.callIcon)
				// this.callIcon='star'?'star-filled':'star'
				if(this.callIcon == 'star'){
					this.callIcon = 'star-filled'
				}else if(this.callIcon == 'star-filled'){
					this.callIcon = 'star'
				}
				
			}
		}
	}
</script>

<style>
	.uni-drawer {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		visibility: hidden;
		z-index: 998;
		height:100%;
	}

	.uni-drawer>.uni-drawer-mask {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
	}

	.uni-drawer>.uni-drawer-content {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 25%;
		height: 100%;
		background: #FFFFFF;
		transition: all 0.3s ease-out;
		transform: translatex(-100%);
	}

	.uni-drawer.uni-drawer-right>.uni-drawer-content {
		left: auto;
		right: 0;
		transform: translatex(100%);
	}

	.uni-drawer.uni-drawer-visible {
		visibility: visible;
	}

	.uni-drawer.uni-drawer-visible>.uni-drawer-mask {
		display: block;
	}

	.uni-drawer.uni-drawer-visible>.uni-drawer-content {
		transform: translatex(0);
	}
	
	/* 修改icon */
		.uni-navigate-right:after {
			content: '';
			width: 0;
			height: 0;
	
		}
</style>
