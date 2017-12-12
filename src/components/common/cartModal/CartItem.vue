<template lang="html">
	<div class="cart-item-cont">
<div class="cart-item-inner-cont">
	<div class="product-image" :style="{backgroundImage: 'url(' + product.variant.image.src + ')'}"></div>
   <div class="product-info"> 
		<h4 class="cart-item-heading">40 MM</h4>
		<h4 class="cart-item-heading">Soho hatch</h4>
		<p>1 X 179.99</p>
		</div>
		
</div>
<!-- <div class="cart-item-bottom">
			<button class="remove-button">remove</button>
			<button class="minus-button">-</button>
			<p>{{product.quantity}}</p>
			<button class="plux-button">+</button>
</div> -->
    
</div>  
    

	<!-- <div class="cart-item-cont">
		<div class="product-cont">
		<div class="product-image" :style="{backgroundImage: 'url(' + product.variant.image.src + ')'}"></div>
		
		<div class="product-info"> 
		<h4 class="cart-item-heading">{{product.variant.title}}</h4>
		<h4 class="cart-item-heading">{{product.title}}</h4>
		<p>{{product.quantity}} X $ {{product.variant.price}}</p>
		</div>
	</div> -->
<!-- 
		<div class="cart-item-bottom">
			<button class="remove-button">remove</button>
			<button class="minus-button">-</button>
			<p>{{product.quantity}}</p>
			<button class="plux-button">+</button>
		</div> -->
	<!-- </div> -->
</template>

<script>
import anime from 'animejs';
import axios from 'axios';
import ShopifySvc from '@/ShopifyService.js';
export default {
  props: ['product'],
  data() {
    return {
    }
  },
  methods: {

  },
  mounted() {
  	

  },
  watch: {

  }
}
</script>

<style lang="scss">
  @import '../../../styles/_variables.scss';
.cart-item-cont{
	margin: 2rem 2rem;
	.cart-item-inner-cont:before,
	.cart-item-inner-cont:after {
	 	content: " ";
		display: table;
		}
	.cart-item-inner-cont:after {
		    clear: both;
		}
		.product-image {
	      background-position: center;
	      background-size: contain;
	      background-repeat: no-repeat;
	      width: 6rem;
	      height: 10.3rem;
	      margin: 0;
    	}
		.cart-item-inner-cont > * {
		    float:left;
	
		}
		.product-info{
			text-transform: uppercase;
			padding: 2rem;
			text-align: left;
			line-height: 2rem;
		   	.cart-item-heading{

    		@include intro-text;
    		font-size: 14px;
			letter-spacing: 3px;
			font-weight: 500;
    	}
    }

    .cart-item-bottom{

    }
}

</style>
