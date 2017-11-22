<template>
	<div class="site-footer-cont">
		<div class="footer-left">
			<div class="bottom">
				<a target="_blank" href="https://www.instagram.com/vestfinancial/?hl=en" class="social-link instagram"></a>
				<a target="_blank" href="https://www.facebook.com/askvest/" class="social-link facebook"></a>
				<a target="_blank" href="https://twitter.com/vestfinancial" class="social-link twitter"></a>
				<a target="_blank" href="https://www.linkedin.com/company/22303643/" class="social-link linkedin"></a>
			</div>
		</div>
		<div class="footer-right">
			<div class="bottom">
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
	.site-footer-cont {
     display: inline-block;
     width: 100%;
     margin-top: 8.2rem;
		}
	.footer-left {
		float: left;
		display: table;
		width: 15rem;
		@include respond-to(sm) {
			float: none;
			margin: auto; 
			height: auto;
			margin-top: 4rem;
			margin-bottom: 2rem;
		}
		.bottom {
			float: right;
			clear: both;
			@include respond-to(sm) {
				float: none;
				text-align: center;
				margin-bottom: 2rem;
			}
		}
		.social-link {
		display: inline-block;
		width: 2.1rem;
		height: 2.1rem;
		margin-right: 1rem;
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
		}
		.legal-link {
				text-decoration: none;
				font-family: OpenSans;
				font-size: 14px;
				line-height: 1.71;
				letter-spacing: 0.2px;
				margin-left: 3.2rem;
				margin-bottom: 2rem;
				transition: 0.2s all linear;
				color: #908f90;
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
</style>
