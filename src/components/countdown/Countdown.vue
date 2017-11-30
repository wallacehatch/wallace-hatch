<template>
	<div class="countdown-cont">
		<div class="countdown-inner-cont">
		<div class="countdown-title">
		<h1 class="uppercase">Welcome to <br> Wallace Hatch</h1>
		<h4 class="twitter-handle uppercase sans-serif">@wallachatch</h4>
		</div>
		<hr class="break-line"></hr>
		<div class="countdown-body">
			<p class="body-text">The story behind Wallace Hatch is one of collective experience. Our founders have spent years immersed in a world of design, travel, and discovery. This journey led them to develop a sincere appreciation for the avant-garde boroughs they encountered while traveling.</p>
			<p class="body-text">From candle-lit cocktail bars in SoHo to eclectic bookstores in the SF Mission, our founders saw these neighborhoods as mavens of truly original style.  Struck by the beautiful tenacity of these places and the individuals who inhabited them, our founders set out to create Wallace Hatch.</p>
			<p class="body-text">The Wallace Hatch brand is, at it’s core, a reflection of this inspired lifestyle. Our watches embody uptown style and simplistic elegance.  Designed to be breath-taking yet versatile, they provide the perfect compliment to an empowered self.</p>
		</div>
		<div class="getting-close-cont">
			<h1 class="uppercase">We're getting close</h1>
			<h4 class="new-site-text uppercase sans-serif">To relaunching our new site</h4>
		</div>
		<hr class="break-line"></hr>
		<timer></timer>
		</div>
		<div class="email-input-cont">
			<div class="live-cont">
			<h4 class="uppercase sans-serif">We can Email you once we're live</h4>
			</div>
			<div class="email-input">
		<std-input
		iName="email"
		v-model="newsletter.email"
		:iValue="newsletter.email"
		iPlaceholder="Enter Your Email Address"
		iClass="lg"
		:class="{submitted: newsletter.submitted}"
		:submitted="newsletter.submitted"
		:error="newsletter.error"
		@submitForm="handleFieldSubmit"
		></std-input>
		</div>
		</div>
	</div>
</template>




<script>
import Timer from '@/components/countdown/Timer'
import StdInput from '@/components/common/StdInput'
export default {
  name: 'Countdown',
  components:{
  	Timer,
  	StdInput,
  },
  data () {
    return {
    	newsletter: {
				email: '',
				submitted: false,
				error: null,
			},
    }
  }
}
</script>

<style lang="scss">

.email-input{
	// width: 100%;
	height: 15rem;
	margin-left: auto;
	margin-right: auto;
	max-width: 38rem;
}

.countdown-cont{
	text-align: center;

}

.email-input{
	// width: 100%;
	height: 15rem;
	margin-left: auto;
	margin-right: auto;
	max-width: 38rem;


}

.countdown-inner-cont{
	margin-left: auto;
	margin-right: auto;
	max-width: 60rem;
	margin-top: 10rem;
	margin-bottom: 2rem;
}

.getting-close-cont{
	margin-top: 10rem;
}

.body-text {
	padding: 1rem;
	text-align: left;

}
.countdown-body{
	max-width: 55rem;
	margin-right: auto;
	margin-left: auto;
}
.twitter-handle{
	margin-top: 1rem;
	font-weight: 500;
}
.countdown-box-cont {
	margin-left: auto;
	margin-right: auto;
	width: 300px;
	height: 100px;
	background-color: #ffffff;
	border: solid 3px #000000;
}
.new-site-text{
	margin-top: 1rem;
	font-weight: 500;
}



.live-cont{
	margin-left: auto;
	margin-right: auto;
	margin-top: 6rem;
	width: 24rem;
	margin-bottom: 3rem;
	h4{
		font-weight: 500;
	}
}
.break-line{
	margin-left: auto;
    margin-right: auto;
	margin-top: 5rem;
	margin-bottom: 3rem;
	text-align: center;
	background-color: black;
	width: 36px;
	height: 4px;

}

</style>
