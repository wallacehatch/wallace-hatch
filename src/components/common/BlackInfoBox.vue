<template>
	<div class="black-info-box-cont">
		<div class="black-info-icon"></div>
	</div>
</template>



<script>
export default {
  name: 'BlackInfoBox',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.black-info-box-cont{
	width: 100%;
	height: 27.1rem;
	background-color: #000000;
	position: relative;
	.black-info-icon{
		 width: 9.2rem;
		height: 8.4rem;
		  margin: -4.2rem 0 0 -4.6rem;
		  position: absolute;
		  top: 50%;
		  left: 50%;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/wh-icon.svg');
			
	}

	
}

</style>