<template lang="html">
    <div class="cart-item-cont">
        <div class="cart-item-inner-cont">
            <div class="product-image" @click="handleImageClick" :style="{backgroundImage: 'url(' + product.variant.image.src + ')'}"></div>
            <div class="product-info">
                <h4 class="cart-item-text">{{productInfo.size}} MM</h4>
                <h4 class="cart-item-heading">{{product.title}}</h4>
               <p>Color: Black/Gold</p>
            </div>
        </div>
        <div class="cart-item-bottom">
            <div class="product-line">
              <p class="right-heading">QTY</p>
              <button class="increment-button" @click="handleIncrement(-1 + product.quantity)"><i class="fal fa-minus"></i></button>
              <p class="product-line-text">{{product.quantity}}</p>
              <button class="increment-button" @click="handleIncrement(1 + product.quantity)"><i class="fal fa-plus"></i></button>
           </div>
           <div class="product-line">
              <p class="right-heading">Price</p>
              <p class="product-line-text">{{product.variant.price * product.quantity| currency}}</p>
           </div>
           <div class="product-line-bottom">
             <button class="remove-button" @click="handleIncrement(-1 *product.quantity)">Remove</button>
           </div>
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
	 // const tmp = JSON.parse(this.product.variant.title);
      // this.productInfo = tmp; 
  },

}
</script>

<style lang="scss">
  @import '../../../styles/_variables.scss';
.cart-item-cont{
		.product-image {
	      background-position: center;
	      background-size: contain;
	      background-repeat: no-repeat;
	      width: 6rem;
	      height: 10.3rem;
	      margin: 1rem 1rem 0 1rem;
    	}
      .cart-item-inner-cont{


      }
		.cart-item-inner-cont > * {
		    float:left;


		}
		.product-info{
			text-transform: uppercase;
			padding: 3rem 2rem 2rem 0rem;
			text-align: left;
			line-height: 2rem;
		   	.cart-item-heading{

    		@include intro-text;
    		font-size: 14px;
			letter-spacing: 3px;
			font-weight: 500;
    	}
        .cart-item-text{
            @include text-small;
            // text-decoration: none;
            text-align: left;
            font-weight: 500;

        }

    }

    .cart-item-bottom{
    	display: inline-block;

    .product-line{

      text-align: center;
      display: inline-block;
        margin: 0 2rem;
      .product-line-text{
        display: inline-block;
         // margin-top: 2rem;
         padding: 1rem 1rem;
          font-weight: 300;
          font-size: 18px;
          font-weight: 300;
          letter-spacing: 2.2px;
      }

      .right-heading{
        @include text-body;
        font-size: 10px;
        font-weight: 300;
        letter-spacing: 2.9px;
        text-transform: uppercase;
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
    .remove-button{
        width: 300px;
    height: 32px;
    border-radius: 4px;
    border: solid 1px #cccccc;
    margin-top: 1rem;


    }
    }
}

</style>
