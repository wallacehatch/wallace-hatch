<template>
	<div class="black-info-box-cont">
		<div class="black-info-icon"></div>
		<div v-for="blurb in blurbs"class="icon-blurb">
			<i :class="blurb.icon"></i>
			<p>{{blurb.text}}</p>
		</div>
	</div>
</template>



<script>
export default {
  name: 'BlackInfoBox',
  data () {
    return {
			blurbs: [{
				text: 'Free Worldwide Shipping on orders over $50',
				icon: 'fa fa-paper-plane-o'
			}, {
				text: 'Free Returns Worldwide on orders over $95',
				icon: 'fa fa-undo'
			}, {
				text: '24/7 Customer  service support',
				icon: 'fa fa-life-ring'
			}, {
				text: 'Safe and Secure Checkout',
				icon: 'fa fa-shield'
			}]
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';
.black-info-box-cont{
	width: 100%;
	box-sizing: border-box;
	background-color: #000000;
	position: relative;
	// padding: 0 1.5rem;
	padding-top: 8.7rem;
	// padding-bottom: 10rem;
	@include respond-to(sm) {
		padding-top: 4rem;
		padding-bottom: 5.6rem;
	}
	.black-info-icon{
		width: 9.2rem;
		height: 8.4rem;
		margin: auto;
		@include respond-to(lg) {margin-bottom: 9.5rem;}
		@include respond-to(md) {margin-bottom: 6.5rem;}
		@include respond-to(sm) {margin-bottom: 4rem;}
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/wh-icon.svg');

	}
	.icon-blurb {
	display: inline-flex;
	align-items: center;
	width: 25%;
	justify-content: center;
	padding-bottom: 2.5rem;
	@include respond-to(sm) {
		display: flex;
		width: auto;
		padding: 2rem 2.5rem;
		box-sizing: border-box;
		justify-content: flex-start;
		border-top: 1px solid #252525;
	}
	i {
		display: inline-block;
		color: $wh-white;
		font-size: 3.2rem;
		margin-right: 2rem;
		@include respond-to(lg) {font-size: 2.4rem; margin-right: 1.5rem;}
		@include respond-to(md) {font-size: 1.8rem; margin-right: 1.1rem;}
		@include respond-to(sm) {font-size: 2.4rem; margin-right: 1.38rem;}
	}
	p {
		@include text-small;
		display: inline-block;
		color: $wh-white;
		width: 20rem;
		line-height: 1.6;
		letter-spacing: 2px;
		text-align: left;
		@include respond-to(md) {
			letter-spacing: 1.5px;
			font-size: 0.75rem;
			width: 15rem;
		}
		@include respond-to(sm) {
			font-size: 1.2rem;
			width: initial;
		}
	}
}


}

</style>
