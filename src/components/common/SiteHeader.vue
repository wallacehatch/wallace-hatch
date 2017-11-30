<template>
	<div class="header-cont">
		<div class="mobile-header-left sm-only">
			MENU
		</div>
		<div class="header-left">
			<div class="header-logo"></div>
			<p class="text-mark uppercase hide-md">wallace hatch</p>
		</div>
		<div class="header-right">
			<nav-bar class="wh-site-nav hide-sm" :items="nav.items" :active="nav.active" navKey="siteNav"></nav-bar>
			<div class="shopping-cart-icon fa fa-shopping-bag" aria-hidden="true"></div>
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
				items: this.$store.state.navItems,
				// items: ['contact us'],
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
		z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
		padding: 0 2rem;
		@include respond-to(sm) {padding: 0 1rem;}
		.header-right {
			float: right;
			@include respond-to(sm) { float: left; }
			.wh-site-nav {
				display: inline-block;
				margin-right: 3rem;
			}
			.shopping-cart-icon {
				font-size: 32px;
				font-weight: 300;
				display: inline-block;
				@include respond-to(sm) {
					font-size: 2.56rem;
					padding: 1.3rem 0.9rem 1.7rem 1.9rem;
					border-left: 1px solid #ececec;
				}
			}
		}
		.mobile-header-left {
			@include intro-text;
			font-size: 1.2rem;
			font-weight: bold;
			letter-spacing: 1px;
			padding: 1.9rem 1rem 2.1rem 0rem;
			border-right: 1px solid #ececec;
			float: left;
		}
		.header-left{
		float: left;
		overflow: auto;
		padding: 1.9rem 0;
		@include respond-to(sm) {
			padding: 1.4rem 0 1.6rem 0;
			width: calc(100% - 10.74rem);
		}
		.header-logo {
			float: left;
			width: 3.8rem;
			height: 3.2rem;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/wh-mark.svg');
			@include respond-to(sm) {
				width: 2.9rem;
				height: 2.5rem;
				float: none;
				margin: auto;
			}
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


}



</style>
