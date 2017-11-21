<template>
	<div class="header-cont">
		<div class="header-left">
			<div class="header-logo"></div>
			<p class="text-mark uppercase">wallace hatch</p>
		</div>
		<div class="header-right">
			<nav-bar :items="nav.items" :active="nav.active" navKey="siteNav"></nav-bar>
		</div>
	</div>
</template>



<script>
import NavBar from './navBar/NavBar';
export default {
  name: 'siteHeader',
  data () {
    return {
			nav: {
				// items: ['Home', 'Watches', 'Our Story', 'Lookbook'],
				items: ['contact us'],
				active: 0,
			},
    }
  },
	components: {
		NavBar,
	}
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.header-cont{
		overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
		padding: 0 2rem;
	.header-left{
	float: left;
	overflow: auto;
	padding: 1.9rem 0;
	.header-logo {
		float: left;
		width: 3.8rem;
		height: 3.2rem;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/wh-mark.svg');
	}
	.text-mark {
		float: left;
		@include h6;
		font-size: 1.4rem;
		letter-spacing: 4px;
		line-height: 3.2rem;
		padding-left: 1.6rem;
	}
}

.header-right{
	float: right;
}

}



</style>
