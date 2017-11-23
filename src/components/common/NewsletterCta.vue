<template>
	<div class="newsletter-cont">
		<div class="newsletter-inner-cont">
		<div class="logo"></div>
		<h4 class="subtext">The Hatch Newsletter</h4>
		<!-- INPUT SHOULD GO HERE  -->
		<div class="email-input">
		<std-input
		iName="email"
		v-model="email"
		:iValue="email"
		iPlaceholder="Enter Your Email Address"
		iClass="lg"
		></std-input>
		</div>
		<!-- NAV SHOULD GO HERE -->
		<ul class="footer-site-nav">
			<li v-for="item in navItems"><router-link to="/">{{item}}</router-link></li>
		</ul>
		</div>
	</div>
</template>


<script>
import NavBar from  './navBar/NavBar';
import StdInput from './StdInput';
export default {
  name: 'NewsletterCta',
	components: {
		NavBar,
		StdInput,
	},
  data () {
    return {
			email: '',
			navItems: ['Home', 'Our Story', 'Pre-order list', 'contact us'],
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';
.newsletter-cont{
	text-align: center;
	.subtext{
		@include h4;
		font-size: 1.4rem;
		line-height: 1.43;
		letter-spacing: 5.8px;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 3rem;
	}
	.logo {
		margin: 6rem auto 2rem auto;
		height: 4rem;
		width: 4.7rem;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/wh-mark.svg');
	}
}
.footer-site-nav {
	overflow: auto;
	margin-bottom: 5rem;
	li {
		display: inline-block;
		padding: 0 1.5rem;
		@include intro-text;
		font-size: 1.2rem;
		letter-spacing: 3px;
		text-transform: uppercase;
		transition: 0.2s all linear;
		&:hover {
			cursor: pointer;
			opacity: 0.5;
		}
		a {
			text-decoration: none;
			color: $wh-black;
		}
	}

}
</style>
