<template lang="html">
    <div class="product-line-cont">
        <div class="product-line-inner-cont">
          <div class="product-box">
            <div class="product-image" @click="handleImageClick" :style="{backgroundImage: 'url(' + product.variant.image.src + ')'}"></div>
            <div class="product-info-wrapper">
            <div class="product-info">
                <h4 class="product-line-heading">{{productInfo.size}} MM</h4>
                <h4 class="product-line-heading name">{{product.title}}</h4>
                <p>Color: Black/Gold</p>
            </div>
            <div class="product-line-right">
              <p class="right-heading">QTY</p>
              <button class="increment-button" @click="handleIncrement(-1 + product.quantity)"><i class="fal fa-minus"></i></button>
              <p class="quantity">{{product.quantity}}</p>
              <button class="increment-button" @click="handleIncrement(1 + product.quantity)"><i class="fal fa-plus"></i></button>
           </div>
           <div class="product-line-right">
              <p class="right-heading">Price</p>
              <p class="price">{{product.variant.price * product.quantity| currency}}</p>
           </div>
           <div class="product-line-bottom">
             <button class="remove-button desktop" @click="handleIncrement(-1 *product.quantity)">Remove</button>
             <div class="additional-message-cont"><p>Includes leather band and tool to use when changing bands.</p></div>
             <button class="remove-button mobile" @click="handleIncrement(-1 *product.quantity)">Remove</button>
           </div>
         </div>
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
   const tmp = JSON.parse(this.product.variant.title);
      this.productInfo = tmp; 
  },

}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
.product-line-cont{
  margin-bottom: 2rem;
    .product-line-inner-cont{
      max-width: 90%;
      margin: 0 auto;
      border-bottom: solid 1px #d8d8d8;
      overflow: auto;

    }
    .product-image {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 14.4rem;
        height: 24.7em;
        margin: 0;
        @include respond-to(sm) {
          width: 7rem;
        height: 10rem;
        }
      }
      .product-box {
        overflow: auto;
        padding: 5.2rem 0rem 5.3rem 10rem;
        @include respond-to(md) {padding: 0rem 0rem 0rem 0rem;}
        @include respond-to(sm) {padding: 3rem 4rem 3rem 4rem;}
      }
      .product-info-wrapper{
        padding: 5.7rem 6rem;
        @include respond-to(lg) {padding: 4rem 3rem}
        @include respond-to(md) {padding: 4rem 0rem}
        @include respond-to(sm) {padding: 0rem 0rem 0rem 0rem;}

      }

    .product-box > * {
        float:left;
  
    }
    
    .product-info{
      text-transform: uppercase;
      display: inline-block;
      text-align: left;
      line-height: 2rem;
      padding: 0 10.5rem 0 0;
      @include respond-to(md) {padding: 0rem 4.9rem 0 0rem;}
      .product-line-heading{
            @include intro-text;
            font-size: 14px;
            letter-spacing: 3px;
            font-weight: 500;
      }
        .name{
            margin-top: 1rem;
            margin-bottom: 1.5rem;
            font-size: 24px;
            letter-spacing: 6px;
            @include respond-to(md) {
              font-size: 20px;
      }

        }

    }

    .product-line-bottom{
          
      .additional-message-cont{
        margin-top: 3rem;
        margin-left: 2rem;
        border-radius: 2px;
        background-color: #f6f6f6;
        display: inline-block;
         @include respond-to(sm){
          width: 100%;
          margin-left: 0;

      }

      p{
        padding: .7rem 1.5rem;
        font-size: 12px;
        text-transform: none;
        letter-spacing: 0.2px;
        text-align: left;
        color: #5c5c5c;
      } 
    }
    }
    .desktop{
      @include respond-to(sm){
        display: none;
      }
    }
    .mobile{
      @include respond-to(lg){
        display: none;
        }
       @include respond-to(md){
        display: none;
        }
      @include respond-to(sm){
        display: inline-block;
        width: 100% !important;
        margin-top: 1.7rem;
        }
      }
    .remove-button{

     width: 80px;
      height: 32px;
      border-radius: 4px;
      border: solid 1px #cccccc;
      transition: 0.2s linear;
            &:hover{
                box-shadow: 0 10px 17px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.2);

            }
      }

    .product-line-right{
      vertical-align: top;
      padding: 0 8.4rem 0 0;
      text-align: center;
      display: inline-block;
      @include respond-to(md) {padding: 0 5rem 0 0;}
      @include respond-to(sm) {padding: 0 0rem 0 0;}
      .quantity{
        display: inline-block;
        padding: 2.5rem 1rem 1rem 1rem;

      }
      .right-heading{
        @include text-body;
        font-size: 10px;
        font-weight: 300;
        letter-spacing: 2.9px;
        text-transform: uppercase;
      }
      .price{
         margin-top: 2rem;
          font-weight: 300;
          font-size: 18px;
          font-weight: 300;
          letter-spacing: 2.2px;
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
