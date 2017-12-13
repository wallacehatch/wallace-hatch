<template lang="html">
  <div @click="handleTileClick" class="product-tile-cont">
    <div class="product-image" :style="{backgroundImage: 'url(' + product.images[0].src + ')'}"></div>
    <p class="product-title">{{product.title}}</p>
    <p class="product-price">{{product.variants[0].price | currency}}</p>
    <div class="hover-tile-cont">
      <div class="product-image" :style="{backgroundImage: 'url(' + product.images[0].src + ')'}"></div>
      <p class="product-info"><span class="title">{{product.title}}</span> <span class="price">{{139.99 | currency}}</span></p>
      <div class="add-cart-btn" @click.stop="handleAddCartClick">Add to bag</div>
    </div>
  </div>
</template>

<script>
import ShopifySvc from '@/ShopifyService.js';
export default {
  data () {
    return {
      nav: {
        items: this.$store.state.navItems,
        active: 0,
      },
    }
  },
  props: ['product'],
  methods: {
    handleTileClick() {
      this.$router.push('/watches/' + this.product.id)
    },
    handleAddCartClick() {
      ShopifySvc.addToCheckout(this.product.variants[0].id, 1,(result)=>{
         this.$store.commit('SET_CART_ACTIVE', true);
        });
    }
  },
}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .product-tile-cont {
    float: left;
    position: relative;
    box-sizing: border-box;
    padding: 7rem 0.25rem 5.5rem 0.25rem;
    width: 33.33%;
    transition: 0.3s all linear;
    @include respond-to(lg) { padding: 5rem 0.35rem 4rem 0.35rem;}
    @include respond-to(md) { padding: 4.5rem 0.3rem 4rem 0.3rem;}
    @include respond-to(sm) {
      padding: 4.5rem 0.25rem 3rem 0.25rem;
      width: 100%;
      margin-top: 0.5rem;
    }

    .product-image {
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      height: 38.3rem;
    }
    .product-title {
      @include intro-text;
      font-size: 1.4rem;
      text-transform: uppercase;
      text-align: center;
      padding-top: 3.8rem;
      @include respond-to(lg) {
        font-size: 1.2rem;
        letter-spacing: 3px;
        padding-top: 2.5rem;
      }
    }
    .product-price {
      @include intro-text;
      font-size: 1.4rem;
      letter-spacing: 2px;
      font-weight: 300;
      text-align: center;
      padding-top: 0.7rem;
      @include respond-to(lg) {
        font-size: 1.2rem;
        letter-spacing: 3px;
      }
    }
    .add-cart-btn {
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
      transition: 0.2s all linear;
      @include respond-to(lg) {
        margin-top: 2rem;
        padding: 1.5rem 0;
        width: 22rem;
      }
      @include respond-to(md) {width: 18rem;}
      &:hover {
        cursor: pointer;
        background-color: #262626;
      }
    }
    .hover-tile-cont {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 5rem 0;
      background-color: $wh-white;
      opacity: 0;
      transition: 0.3s all linear;
      @include respond-to(lg) {
        padding: 3rem 0;
      }
      @include respond-to(md) {
        padding: 2.5rem 0;
      }
      @include respond-to(sm) {
        opacity: 1.0;
        padding-bottom: 3rem;
        // box-shadow: 0 12px 24px 0 rgba(95, 95, 95, 0.3), 0 2px 6px 0 rgba(149, 149, 149, 0.2);
      }
      .product-info {
        @include intro-text;
        font-size: 1.4rem;
        text-transform: uppercase;
        text-align: center;
        padding-top: 2rem;
        @include respond-to(lg) {
          font-size: 1.2rem;
          letter-spacing: 3px;
          padding-top: 1rem;
        }
        .price {
          letter-spacing: 2px;
          font-weight: 300;
          @include respond-to(lg) { letter-spacing: 3px; }
        }
      }
    }

    &:hover {
      box-shadow: 0 12px 24px 0 rgba(95, 95, 95, 0.3), 0 2px 6px 0 rgba(149, 149, 149, 0.2);
      .hover-tile-cont {
        opacity: 1;
      }
    }
  }

</style>