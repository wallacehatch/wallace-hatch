<template lang="html">
    <div class="cart-item-cont">
        <div class="cart-item-inner-cont">
            <div class="product-image" @click="handleImageClick" :style="{backgroundImage: 'url(' + product.variant.image.src + ')'}"></div>
            <div class="product-info">
                <h4 class="cart-item-heading">{{productInfo.size}} MM</h4>
                <h4 class="cart-item-heading name">{{product.title}}</h4>
                <p>{{product.quantity}} X {{product.variant.price | currency}}</p>
            </div>
        </div>
        <div class="cart-item-bottom">
            <button class="remove-button" @click="handleIncrement(-1 *product.quantity)">Remove</button>
            <button class="increment-button" @click="handleIncrement(-1 + product.quantity)"><i class="fal fa-minus"></i></button>
            <p class="quantity">{{product.quantity}}</p>
            <button class="increment-button" @click="handleIncrement(1 + product.quantity)"><i class="fal fa-plus"></i></button>
        </div>
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
    	productInfo: null,
    }
  },
  methods: {
  	handleIncrement(quantity){
  		this.$emit('clicked',this.product, quantity)
  },
  handleImageClick() {
      var productHandle = this.product.title.replace(/\s+/g, '-').toLowerCase();
      this.$router.replace('/watches/' + productHandle)
    },
},
beforeMount() {
	 const tmp = JSON.parse(this.product.variant.title);
      this.productInfo = tmp; 
  },

}
</script>

<style lang="scss">
  @import '../../../styles/_variables.scss';
.cart-item-cont{
	// margin: 2rem 2rem 3rem 1rem;
    margin-top: 2rem;
    // margin-right: 4rem;
    // margin-bottom: 3rem;
    margin-left: 2rem;
	.cart-itm-inner-cont:before,
	.cart-item-inner-cont:after {
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
        .name{
            margin-bottom: 1.5rem;
        }

    }

    .cart-item-bottom{
    	text-align: left;
    	width: 100%;
    	display: inline-block;
    	.quantity{
    		display: inline-block;
    		padding: 1rem;

    	}
    	.remove-button{
    		width: 80px;
			height: 32px;
			border-radius: 4px;
			border: solid 1px #cccccc;
			margin-right: 8.4rem;
            transition: 0.2s linear;
            &:hover{
                box-shadow: 0 10px 17px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.2);

            }
    	}
    	.increment-button{
    		width: 32px;
			height: 32px;
			border-radius: 4px;
			border: solid 1px #cccccc;
            transition: 0.2s linear;
            &:hover{
                box-shadow: 0 10px 17px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.2);

            }

    	}
    	
    }
}

</style>
