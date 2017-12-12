<template lang="html">
	<div class="cart-item-cont">
		<!-- {{realProduct}} -->
		<!-- <div class="product-image" :style="{backgroundImage: 'url(' + realProduct.images[0].src + ')'}"></div>
		<div class="cart-item-bottom">
			<button class="remove-button">remove</button>
			<button class="minus-button">-</button>
			<p>1</p>
			<button class="plux-button">+</button>
		</div> -->
	</div>
</template>

<script>
import anime from 'animejs';
import axios from 'axios';
import ShopifySvc from '@/ShopifyService.js';
export default {
  props: ['product'],
  data() {
    return {
    	realProduct: null
    }
  },
  methods: {

  },
  mounted() {
  	ShopifySvc.product(this.$route.params.id, (result) => {
      this.realProduct = result;
      console.log(result)
    }, (err) => {
      debugger;
    })

  },
  watch: {

  }
}
</script>

<style lang="scss">
  @import '../../../styles/_variables.scss';
  
  .cart-item-cont{
  		.product-image {
      // background-position: center;
      // background-size: contain;
      // background-repeat: no-repeat;
      // width: 100%;
      // height: 38.3rem;
    }

  	.cart-item-bottom{
  		display: inline-block;
  	}
  }
</style>
