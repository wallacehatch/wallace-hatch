<template>
	<div class="countdown-cont">
		<div class="countdown-inner-cont">
		<div class="countdown-title">
		<h1 class="uppercase">Welcome to <br> Wallace Hatch</h1>
		<h4 class="uppercase sans-serif">@wallachatch</h4>
		</div>
		<hr class="break-line"></hr>
		<div class="countdown-body">
			<p class="body-text">The story behind Wallace Hatch is one of collective experience. Our founders have spent years immersed in a world of design, travel, and discovery. This journey led them to develop a sincere appreciation for the avant-garde boroughs they encountered while traveling.</p>
			<p class="body-text">From candle-lit cocktail bars in SoHo to eclectic bookstores in the SF Mission, our founders saw these neighborhoods as mavens of truly original style.  Struck by the beautiful tenacity of these places and the individuals who inhabited them, our founders set out to create Wallace Hatch.</p>
			<p class="body-text">The Wallace Hatch brand is, at it’s core, a reflection of this inspired lifestyle. Our watches embody uptown style and simplistic elegance.  Designed to be breath-taking yet versatile, they provide the perfect compliment to an empowered self.</p>
		</div>
		<div class="getting-close-cont">
			<h1 class="uppercase">We're getting close</h1>
			<h4 class="uppercase sans-serif">To relaunching our new site</h4>
		</div>
		<hr class="break-line"></hr>
		<div class="countdown-box-cont">
			<timer date="August 15, 2016"></timer>
		</div>
		</div>
		<black-info-box></black-info-box>
		<newsletter></newsletter>
	</div>
</template>




<script>
import BlackInfoBox from '@/components/BlackInfoBox';
import Newsletter from '@/components/Newsletter';
import Timer from '@/components/Timer'
export default {
  name: 'Countdown',
  components:{
  	BlackInfoBox,
  	Newsletter,
  	Timer,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">


.countdown-cont{
	text-align: center;
	
}
.countdown-inner-cont{
	margin-left: auto;
	margin-right: auto;
	max-width: 60rem;
	margin-top: 10rem;
	margin-bottom: 2rem;
}

.getting-close-cont{
	margin-top: 11rem;
}

.body-text {
	padding: 1rem;
	text-align: left;

}

.countdown-box-cont {
	margin-left: auto;
	margin-right: auto;
	width: 300px;
	height: 100px;
	background-color: #ffffff;
	border: solid 3px #000000;
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
