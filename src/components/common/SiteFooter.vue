<template>
	<div class="site-footer-cont">

		<div class="footer-left">
			<div class="logo color" @click="$router.push('/')"></div>
		</div>
		<div class="footer-right">
			<div class="top">
				<a target="_blank" href="https://www.instagram.com/vestfinancial/?hl=en" class="social-link instagram"></a>
				<a target="_blank" href="https://www.facebook.com/askvest/" class="social-link facebook"></a>
				<a target="_blank" href="https://twitter.com/vestfinancial" class="social-link twitter"></a>
				<a target="_blank" href="https://www.linkedin.com/company/22303643/" class="social-link linkedin"></a>
			</div>
			<div class="bottom">
			  <!-- Desktop Only -->
				
				<router-link class="legal-link hide-sm" to="/privacy">Contact Us</router-link>
				<a target="_blank" href="https://askvest.com/privacy" class="legal-link hide-sm">Privacy policy</a>
				<a target="_blank" href="https://askvest.com/terms" class="legal-link">Terms & conditions</a>
				<router-link class="legal-link hide-sm" to="/" disabled>© copyright 2017 VEST Financial Group, Inc.</router-link>
				<!-- Mobile Only -->
				<a target="_blank" href="https://askvest.com/privacy" class="legal-link sm-only">Privacy policy</a>
				<router-link class="legal-link sm-only" to="/privacy">Contact Us</router-link>
				<router-link class="legal-link block" to="/" disabled>© copyright 2017 VEST Financial Group, Inc.</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'siteFooter',
		components: {
		},
		data() {
			return {
				
			}
		},
		methods: {
			linkClicked(i) {
				console.log('link clicked');
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../styles/variables.scss';
	/*$footer-mt: 1.5rem;*/
	.site-footer-cont {
		overflow: auto;
		/*background-color: $vest-white;*/
		/*@include v-cont();*/
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		/*border-top: 1px solid $vest-light-silver;*/
		.nav-cont {
			@include respond-to(md) { display: none; }
		}
	}
	.footer-right .social-link {
		display: inline-block;
		width: 2.1rem;
		height: 2.1rem;
		margin-left: 3.2rem;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		transition: 0.2s all linear;
		&:hover {
			opacity: 0.5;
		}
		&.facebook {
			background-image: url('https://s3-us-east-2.amazonaws.com/vest-client-2-ohio/facebook.svg');
		}
		&.instagram {
			background-image: url('https://s3-us-east-2.amazonaws.com/vest-client-2-ohio/instagram.svg');
		}
		&.twitter {
			background-image: url('https://s3-us-east-2.amazonaws.com/vest-client-2-ohio/twitter.svg');
		}
		&.linkedin {
			background-image: url('https://s3-us-east-2.amazonaws.com/vest-client-2-ohio/linkedin.svg');
		}
		@include respond-to(sm) {
			margin: 0 1.6rem;
		}
	}
	.footer-left {
		float: left;
		width: 10rem;
		display: table;
		height: 10.2rem;
		@include respond-to(sm) {
			float: none;
			margin: auto; 
			height: auto;
			margin-top: 4rem;
			margin-bottom: 2rem;
		}
		.logo {
			height: 4.6rem;
			width: 9.8rem;
			display: table-cell;
			vertical-align: middle;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			background-image: url('https://s3-us-east-2.amazonaws.com/vest-client-2-ohio/white-vest-logo.svg');
			&.color {
				background-image: url('https://s3-us-east-2.amazonaws.com/vest-client-2-ohio/fullcolor-vest-logo.svg');
			}
		}
	}
	.footer-right {
		float: left;
		width: calc(100% - 10rem);
		overflow: auto;
		@include respond-to(sm) {
			float: none;
			margin: auto;
			width: auto;
		}
		.top {
			float: right;
			clear: both;
			margin-bottom: 1.5rem;
			padding-top: 3rem;
			@include respond-to(sm) {
				float: none;
				text-align: center;
				margin-bottom: 4rem;
			}
		}
		.bottom {
			float: right;
			clear: both;
			margin-bottom: 1rem;
			@include respond-to(sm) {
				float: none;
				text-align: center;
				margin-bottom: 2rem;
			}
			.legal-link {
				@include text-body;
				text-decoration: none;
				/*color: $vest-gun-metal;*/
				margin-left: 3.2rem;
				margin-bottom: 2rem;
				transition: 0.2s all linear;
				&:hover {
					opacity: 0.5;
				}
				&.block {
					display: none;
				}
				@include respond-to(sm) {
					display: inline-block;
					margin: 0 1.6rem;
					margin-bottom: 1rem;

					&.block {
						display: block;
						margin: 0;
						margin-top: 2rem;
					}
				}
				
			}
		}
	}
</style>
