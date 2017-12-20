<template>
  <div class="bag-page-cont">
  	<div class="bag-upper-cont">
  		<h1 class="heading">You have</h1>
  		<p class="items-description">{{message}}</p>

  		<button  class="checkout-btn" @click="handleCheckoutClick" v-if="this.cart.lineItems.length > 0">Checkout</button>
  		<button  class="shopping-btn" @click="handleShoppingClick" v-if="this.cart.lineItems.length == 0">Start Shopping</button>
  		<p class="subtext">Free worldwide Shipping &</p>
  		<p class="subtext">Returns on orders over $95</p>
  	</div>
  	<div class="product-section">
      <product-line v-for="(product, i) in cart.lineItems" :key="'pTile' + i" :product="product" @clicked="modifyCart"></product-line>
    </div>
    <!-- <band-section v-if="this.cart.lineItems.length > 0"></band-section> -->
  </div>
</template>

<script>
import ShopifySvc from '@/ShopifyService';
import ProductLine from '@/components/bag/ProductLine'
import BandSection from '@/components/bands/BandSection';
export default {
   name: 'BagPage',
   components: {
   	ProductLine,
    BandSection,
   },
   data () {
    return {
      cart: {
        lineItems: [],
      },
      message:null,
      
    }
  },
  beforeMount() {
  	this.refreshCart()
  },
  methods: {
     handleCheckoutClick(){
      this.$router.push('/checkout/')
    },
    handleShoppingClick(){
      this.$router.push('/')
    },
    modifyCart(product, quantity) {
      ShopifySvc.updateCheckout(product.id, quantity,(result)=>{
        this.refreshCart();
      });
    },

    refreshCart(){
      ShopifySvc.checkoutCart((result)=>{
      this.cart = result;
      var badgeNumber = 0
      for (var i = 0; i < result.lineItems.length; i++) { 
        badgeNumber = badgeNumber + result.lineItems[i].quantity
        }
      this.$store.commit('SET_BADGE_NUMBER', badgeNumber)
  		if (this.$store.state.badgeNumber === 0) {
  			this.message = "Nothing in your bag, start shopping to fill it up."
  		}
  		else if (this.$store.state.badgeNumber == 1) {
  			this.message = this.$store.state.badgeNumber + " item in your cart"
  		}
  		else{
  			this.message = this.$store.state.badgeNumber + " items in your cart"
  		}
    });
      return this.cart
    },

  },

}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';

  .bag-page-cont{
  	padding: 7rem 0rem 0rem 0rem;
    // max-width: 114rem;
    margin: auto;
    // @include respond-to(lg) {padding: 7.5rem 4rem 0 4rem; }
    // @include respond-to(md) {padding: 7.5rem 0rem 0 0rem; }
    @include respond-to(sm) {padding: 4rem 0rem 0 0rem; }
    .bag-upper-cont{
    	padding: 6rem 0 6.6rem 0;
    	text-align: center;
    	background-color: #f6f6f6;
    	
    	.heading{
    	@include h1;
    	text-align: center;
    	text-transform: uppercase;
    	@include respond-to(sm) {
      // font-size: 1.rem;
    }

    }
    .items-description{
    	@include intro-text;
    	text-transform: uppercase;
    	font-size: 14px;
    	margin-top: 1rem;
    	
    }
     .subtext{
     	@include text-small;
  		text-transform: uppercase;
  		line-height: 2.0;
		letter-spacing: 2px;
		color: #717171;

  }
    
    .checkout-btn {
    background-color: $wh-black;
    padding: 2rem 9.3rem;
    box-shadow: 0 7px 13px 0 rgba(95, 95, 95, 0.5), 0 1px 3px 0 rgba(149, 149, 149, 0.2);
    @include intro-text;
    font-size: 1.4rem;
    color: $wh-white;
    margin: 3rem 0 2rem 0;
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
      min-width: 30rem;
    }
  }
  .shopping-btn{

  	background-color: $wh-black;
    padding: 2rem 5.9rem;
    @include intro-text;
    font-size: 1.4rem;
    margin: 3rem 0 2rem 0;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 0;
    outline: none;
    transition: 0.2s all linear;
    &:hover {
      cursor: pointer;
      background-color: #262626;
      color: $wh-white;
    }
    @include respond-to(sm) {
      font-size: 1.4rem;
      width: 100%;
    }
  	background-color: #ffffff;
	box-shadow: 0 12px 24px 0 rgba(95, 95, 95, 0.3), 0 2px 6px 0 rgba(149, 149, 149, 0.2);
	border: solid 2px #000000;
  }


  }
    }



</style>