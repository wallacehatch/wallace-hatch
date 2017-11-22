<template>
	<div class="newsletter-cont">
		<div class="newsletter-inner-cont">
		<div class="logo"></div>
		<h4 class="uppercase">The Hatch Newsletter</h4>
		<div class="newsletter-box">
			<h4 class="newsletter-text open-sans">Thank you, for signing up for our newsletter</h4>
		</div>
		<h5 class="uppercase">Contact us</h5>
		</div>
	</div>
</template>


<script>
export default {
  name: 'Newsletter',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">

.newsletter-cont{
	text-align: center;
	.newsletter-inner-cont{
	margin-left: auto;
	margin-right: auto;
	max-width: 38rem;
	.newsletter-box{
		margin-top: 3.8rem;
		width: 38rem;
		height: 5rem;
		background-color:  #000000;
		.newsletter-text{
			font-weight: 500;
			font-size: 14px;
			letter-spacing: 0.5px;
  			line-height: 5rem;
			color: #ffffff;
		}
	}
	.logo {
			margin-top: 6rem;
			height: 4.6rem;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 2rem;
			width: 9.8rem;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/wh-mark.svg');
		}
	}
	h5{
		margin-top: 4rem;

	}

}
</style>
