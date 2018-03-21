<template>
	<div class="container">
		<!--头部及中间-->
		<div class="body">
			<router-view></router-view>
		</div>
		<!--底部导航-->
		<footer class="footer" id="footer">
			<router-view name="footer"></router-view>
		</footer>
	</div>
</template>

<script>
	import "./../scss/animate.scss";
	import MainFooter from "./MainFooter.vue";
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			"v-footer": MainFooter
		}

	}
</script>