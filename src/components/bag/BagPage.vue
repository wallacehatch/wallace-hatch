<template>
  <div class="bag-page-cont">
  	<div class="bag-upper-cont">
  		<h1 class="heading">You have</h1>
  		<p class="items-description">1 item in your cart</p>
  		<button  class="checkout-btn" @click="handleCheckoutBagClick">Checkout</button>
  		<p class="subtext">Free worldwide Shipping &</p>
  		<p class="subtext">Returns on orders over $95</p>
  	</div>
  </div>
</template>

<script>
import ShopifySvc from '@/ShopifyService';
export default {
   name: 'BagPage',
   components: {
   },
   data () {
    return {
      product: null,
      productInfo: null,
    }
  },
  beforeMount() {
    
  },
  methods: {
     handleCheckoutBag(){
      this.$router.push('/checkout/')
    },
  },

}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';

  .bag-page-cont{
  	padding: 7.5rem 0rem 10.2rem 0rem;
    // max-width: 114rem;
    margin: auto;
    // @include respond-to(lg) {padding: 7.5rem 4rem 0 4rem; }
    // @include respond-to(md) {padding: 7.5rem 0rem 0 0rem; }
    // @include respond-to(sm) {padding: 7.5rem 0rem 0 0rem; }
    .bag-upper-cont{
    	padding: 6rem 0 6.6rem 0;
    	text-align: center;
    	background-color: #f6f6f6;
    	
    	.heading{
    	@include h1;
    	text-align: center;
    	text-transform: uppercase;

    }
    .items-description{
    	@include intro-text;
    	text-transform: uppercase;
    	font-size: 14px;
    	
    }
     .subtext{
     	@include text-small;
  		text-transform: uppercase;
  }
    
    .checkout-btn {
    background-color: $wh-black;
    padding: 2rem 9.3rem;
    box-shadow: 0 7px 13px 0 rgba(95, 95, 95, 0.5), 0 1px 3px 0 rgba(149, 149, 149, 0.2);
    @include intro-text;
    font-size: 1.4rem;
    color: $wh-white;
    margin-top: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 0;
    outline: none;
    transition: 0.2s all linear;
    &:hover {
      cursor: pointer;
      background-color: #262626;
    }
    @include respond-to(sm) {
      font-size: 1.4rem;
      width: 100%;
    }
  }


  }
    }



</style>