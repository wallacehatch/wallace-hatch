<template>
  <div class="pdp-cont">
    <div v-if="product" class="pdp-upper-cont">
      <div class="pdp-ul">
        <div class="active-image" :style="{backgroundImage: 'url(' + product.images[activeImageIndex].src + ')'}"></div>
        <div class="additional-images-cont">
          <div v-for="(image, i) in product.images" class="additional-image"
          :class="{active: activeImageIndex === i}"
          @click="activeImageIndex = i"
          :style="{backgroundImage: 'url(' + product.images[i].src + ')'}"></div>
        </div>
      </div>
      <div class="pdp-ur">
        <p class="size">40MM</p>
        <hr class="line">
        <p class="title">{{product.title}}</p>
        <p class="price hide-sm">{{product.variants[0].price | currency}}</p>
        <div class="color-bubble"></div>
        <p class="color-text">Color: black/gold</p>
        <div @click="handleAddCartClick" class="add-cart-btn pdp">
          <span class="mobile-add">Add to cart</span>
          <span class="mobile-price">{{product.variants[0].price | currency}}</span></div>
      </div>
      <hr class="pdp-divider">
    </div>
  </div>
</template>

<script>
import ShopifySvc from '@/ShopifyService';
export default {
   name: 'ProductPage',
   data () {
    return {
      product: null,
      activeImageIndex: 0,
    }
  },
  beforeMount() {
    ShopifySvc.product(this.$route.params.id, (result) => {
      this.product = result;
    }, (err) => {
      debugger;
    })
  },
  methods: {
    handleAddCartClick() {
      ShopifySvc.checkoutCart((result)=>{
      ShopifySvc.addToCheckout(this.product.variants[0].id, 1,(result)=>{
        this.$store.commit('SET_CART_ACTIVE', true);
        });
      });
    }
  }
}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .pdp-divider {
    clear: both;
    border: none;
    border-bottom: 1px solid #d8d8d8;
    margin-bottom: 3rem !important;
    @include respond-to(md) {margin: 0 1.5rem;}
  }
  .add-cart-btn.pdp {
    background-color: $wh-black;
    box-shadow: 0 12px 24px 0 rgba(95, 95, 95, 0.5), 0 2px 6px 0 rgba(149, 149, 149, 0.2);
    @include intro-text;
    font-size: 1.4rem;
    text-transform: uppercase;
    text-align: center;
    width: 28.2rem;
    margin: auto;
    margin-top: 3rem;
    color: $wh-white;
    font-weight: bold;
    padding: 2.2rem 0;
    margin-top: 3rem;
    transition: 0.2s all linear;
    @include respond-to(md) {width: 18rem;}
    @include respond-to(sm) {
      margin: 2rem 1rem 4rem 1rem;
      padding: 2.2rem;
      display: block;
      width: initial;
      overflow: auto;
    }
    &:hover {
      cursor: pointer;
      background-color: #262626;
    }
    .mobile-add {
      @include respond-to(sm) {float: left;}
    }
    .mobile-price {
      display: none;
      float: right;
      font-weight: 300;
      @include respond-to(sm) {display: initial;}
    }
  }
  .pdp-cont {
    padding: 7.5rem 10.2rem 0 10.2rem;
    @include respond-to(lg) {padding: 7.5rem 4rem 0 4rem; }
    @include respond-to(md) {padding: 7.5rem 0rem 0 0rem; }
    @include respond-to(sm) {padding: 7.5rem 0rem 0 0rem; }
  }
  .pdp-upper-cont {
    overflow: auto;
    .pdp-ul {
      float: left;
      max-width: 50rem;
      width: 52.5%;
      padding-top: 5rem;
      @include respond-to(sm) {
        padding-top: 2rem;
        width: 100%;
      }
      .active-image {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 51.5rem;
        @include respond-to(md) {height: 41.2rem}
        @include respond-to(sm) {height: 28.8rem}
      }
      .additional-images-cont {
        padding: 6rem 0 8.3rem 0;
        overflow: auto;
        text-align: center;
        @include respond-to(md) {
          padding: 6rem 0 5rem 0;
        }
        @include respond-to(sm) {
          padding: 2rem 0;
        }
      }
      .additional-image {
        box-sizing: border-box;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-color: $wh-white;
        width: 6rem;
        height: 6rem;
        margin-left: 2rem;
        display: inline-block;
        box-shadow: 0 2px 6px 0 rgba(149, 149, 149, 0.2);
	      border: solid 2px #d8d8d8;
        transition: 0.2s all linear;
        &:first-of-type { margin-left: 0;}
        &:hover {
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
        }
        &.active {
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
	        border: solid 2px #000000;
        }
        @include respond-to(md) {
          width: 4rem;
          height: 4rem;
          margin-left: 1.34rem;
        }
        @include respond-to(sm) {
          margin-left: 1rem;
        }
      }
    }
    .pdp-ur {
      float: left;
      text-align: center;
      width: 47.5%;
      min-width: calc(100% - 50rem);
      padding-top: 11rem;
      @include respond-to(md) {
        padding-top: 8.1rem;
      }
      @include respond-to(sm) {
        width: 100%;
        padding-top: 0;
      }
      .size {
        @include intro-text;
        font-size: 1.4rem;
        @include respond-to(sm) {font-size: 1.2rem;}
      }
      .line {
        border: none;
        border-bottom: 4px solid $wh-black;
        width: 4rem;
        margin: 2rem auto;
        @include respond-to(sm) {
          margin: 1rem auto 1.6rem auto;
        }
      }
      .title {
        @include intro-text;
        font-size: 3.2rem;
        letter-spacing: 8px;
        text-transform: uppercase;
        margin-bottom: 3rem;
        @include respond-to(sm) {
          font-size: 2.4rem;
          letter-spacing: 6px;
          margin-bottom: 2rem;
        }
      }
      .price {
        @include intro-text;
        font-size: 2.4rem;
        font-weight: 300;
        margin-bottom: 4.5rem;
      }
      .color-bubble {
        height: 6rem;
        width: 6rem;
        margin: auto;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/color-selected.jpg');
        @include respond-to(2x) {
          background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/color-selected%402x.jpg');
        }
        @include respond-to(3x) {
          background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/color-selected%403x.jpg');
        }
      }
      .color-text {
        @include intro-text;
        font-size: 1.4rem;
        text-transform: uppercase;
        margin-top: 4.5rem;
        @include respond-to(sm) {
          margin-top: 0;
        }
      }
    }
  }
</style>
