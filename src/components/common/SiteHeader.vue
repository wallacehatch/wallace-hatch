<template>
	<div class="header-cont">
		<div class="header-left">

			<div class="header-logo"></div>
			<h2 class="uppercase">wallace hatch</h2>
		</div>
		<div class="header-right">
			<h4 class="uppercase">Contact us</h4>
		</div>
	</div>
</template>



<script>
export default {
  name: 'siteHeader',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.header-cont{
	overflow: visible;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 9.4rem;
    background-color: transparent;
    overflow: auto;
     border-bottom: 1px solid #d8d8d8;
     .header-right{
		float: right;
	}
	.header-left{
	float: left;
	.header-logo {
			height: 4.6rem;
			width: 9.8rem;
			display: table-cell;
			vertical-align: middle;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/wh-mark.svg');
		}
}


}



</style>
