<template>
	<div class="total-footer-cont">
		<black-info-box></black-info-box>
		<newsletter-cta></newsletter-cta>
		<div class="site-footer-cont">
			<div class="footer-left">
				<a target="_blank" href="https://www.instagram.com/wallaceHatch/" class="social-link fa fa-instagram"></a>
				<a target="_blank" href="https://www.facebook.com/askvest/" class="social-link fa fa-facebook"></a>
				<a target="_blank" href="https://twitter.com/vestfinancial" class="social-link fa fa-twitter"></a>
				<a target="_blank" href="https://www.linkedin.com/company/22303643/" class="social-link fa fa-envelope-o"></a>
			</div>
			<div class="footer-right">
				  <!-- Desktop Only -->
				<a target="_blank" href="https://wallacehatch.com/terms" class="legal-link">Terms & conditions</a>
				<a target="_blank" href="https://wallacehatch.com/privacy" class="legal-link hide-sm">Privacy policy</a>
				<router-link class="legal-link hide-sm" to="/" disabled>© 2017 Wallace Hatch</router-link>
				<!-- Mobile Only -->
				<a target="_blank" href="https://wallacehatch.com/privacy" class="legal-link sm-only">Privacy policy</a>
				<router-link class="legal-link block" to="/" disabled>© 2017 Wallace Hatch</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import NewsletterCta from './NewsletterCta';
	import BlackInfoBox from './BlackInfoBox';
	export default {
		name: 'siteFooter',
		components: {
			NewsletterCta,
			BlackInfoBox,
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
	.total-footer-cont {
		position: relative;
		z-index: 4;
	}
	.site-footer-cont {
     display: inline-block;
		 overflow: auto;
     width: 100%;
		 padding: 0 2rem;
		 padding-bottom: 2.2rem;
		 box-sizing: border-box;
		}
	.footer-left {
		float: left;
		@include respond-to(sm) {
			float: none;
			text-align: center;
			margin-bottom: 4.5rem;
		}
		.social-link {
		display: inline-block;
		text-decoration: none;
		color: $wh-black;
		font-size: 2rem;
		margin-right: 2.89rem;
		transition: 0.2s all linear;
		&:hover {
			opacity: 0.5;
		}
		@include respond-to(sm) {
			margin: 0 1.6rem;
		}
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
		width: calc(100% - 19.1rem);
		text-align: right;
		@include respond-to(sm) {
			float: none;
			margin: none;
			width: auto;
			text-align: center;
		}

		.legal-link {
				text-decoration: none;
				@include text-body;
				font-size: 1.2rem;
				line-height: 1.71;
				letter-spacing: 0.2px;
				margin-left: 3.2rem;
				transition: 0.2s all linear;
				color: #908f90;
				&:hover {
					opacity: 0.5;
				}
				&.block {
					display: none;
				}
				@include respond-to(sm) {
					display: block;
					margin: 0;
					width: auto;
					margin-bottom: 2rem;
					&.block {
						display: block;
						margin-top: 3rem;
						margin-bottom: 0;
					}
				}

			}

	}
</style>
