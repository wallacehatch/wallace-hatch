<template lang="html">
    <div class="product-line-cont">
        <div class="product-line-inner-cont">
          <div class="product-box">
            <div class="product-image" :style="{backgroundImage: 'url(' + product.variant.image.src + ')'}"></div>
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
             <button class="remove-button" @click="handleIncrement(-1 *product.quantity)">Remove</button>
             <div class="additional-message-cont"><p>Includes leather band and tool to use when changing bands.</p></div>
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
      max-width: 1140px;
      margin: 0 auto;
      border-bottom: solid 1px #d8d8d8;
      overflow: auto;

    }
    .product-image {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 18.4rem;
        height: 26.3em;
        margin: 0;
      }
      .product-box {
        overflow: auto;
        padding: 5.2rem 0rem 5.3rem 10rem;
      }
    .product-box > * {
        float:left;
  
    }
    
    .product-info{
      text-transform: uppercase;
      margin-top: 4rem;
      text-align: left;
      line-height: 2rem;
      min-width: 30rem;
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
        }

    }

    .product-line-bottom{
      
      
      .additional-message-cont{
        margin-top: 3rem;
        margin-left: 2rem;
        border-radius: 2px;
        background-color: #f6f6f6;
        display: inline-block;

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
    .remove-button{
        width: 80px;
      height: 32px;
      border-radius: 4px;
      border: solid 1px #cccccc;
      // margin-right: 8.4rem;
      transition: 0.2s linear;
            &:hover{
                box-shadow: 0 10px 17px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.2);

            }
      }

    .product-line-right{
      // background-color: red;
      margin-top: 3rem;
      margin-bottom: 4rem;

      text-align: center;
      width: 20%;
      height: 10rem;
      display: inline-block;
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
