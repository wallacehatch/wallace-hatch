<template lang="html">
  <div v-show="lActive">
    <div id="cart_modal_mask" class="cart-modal-mask"></div>
    <div id="cart_modal_cont" @click="$emit('close')" class="cart-modal-cont">
      <div @click.stop id="cart_modal_inner_cont" class="inner-cont" style="transform: translateX(101%)">
        <div @click="$emit('close')"  class="fal fa-times close-btn"></div>
        <div class="cart-body">
          <p class="heading">Added to bag!</p>
          <div v-for="(product, i) in cart.lineItems">
            <cart-item :product="product"></cart-item>
          </div>
          <button  class="cart-btn">Review Bag</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import axios from 'axios';
import ShopifySvc from '@/ShopifyService.js';
import CartItem from './CartItem';
export default {
  props: ['active'],
  data() {
    return {
      dur: 500,
      lActive: false,
      cart: {
        lineItems: [],
      }
    }
  },
  components: {
    CartItem,
  },
  methods: {
    shouldBlurField(e) {
      if (!e.target.value) {this.textarea.active = false;}
    },
    setCharCount(e) {
      this.textarea.chars = e.target.value.length
    },
    toggleModal(active) {
      if (active) {
        this.lActive = true;
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          anime({
            targets: '#cart_modal_mask',
            duration: this.dur,
            easing: 'easeInOutCubic'
          })
          anime({
            targets: '#cart_modal_inner_cont',
            translateX: 0,
            duration: this.dur,
            easing: 'easeInOutCubic'
          })
        })
      }
      else {
        document.body.style.overflow = 'initial';
        anime({
          targets: '#cart_modal_mask',
          opacity: 0,
          duration: this.dur,
          easing: 'easeInOutCubic'
        })
        anime({
          targets: '#cart_modal_inner_cont',
          translateX: '101%',
          duration: this.dur,
          easing: 'easeInOutCubic',
          complete: () => {
            this.lActive = false;
          }
        })
      }
    }
  },
  mounted() {
    // uncomment this to have form always out

    this.toggleModal(true);
      ShopifySvc.checkoutCart((result)=>{
      console.log(result)
      this.cart = result
    });
  },
  watch: {
    'active' (newState) {
      this.toggleModal(newState);
    },
    'submitSuccess' (newState) {
      newState && anime({
        targets: '#success_overlay',
        opacity: 1.0,
        duration: this.dur,
        easing: 'easeOutCubic',
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../../../styles/_variables.scss';
  .success-overlay-cont {
    background-color: #000;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding-top: 33%;
    opacity: 0.0;
    i {
      font-size: 42px;
      display: block;
      text-align: center;
      color: $wh-white;
    }
    .title {
      @include h5;
      color: $wh-white;
      font-size: 1.8rem;
    	line-height: 1.78;
    	letter-spacing: 5px;
      text-transform: uppercase;
      text-align: center;
      padding: 0 3.5rem;
      margin-top: 2rem;
      @include respond-to(sm) {
        font-size: 1.6rem;
        letter-spacing: 3px;
      }
    }
    .subtext {
      @include text-body;
      color: $wh-white;
      padding: 0 10rem;
      text-align: center;
      max-width: 40rem;
      margin: auto;
      margin-top: 1rem;
      @include respond-to(sm) {padding: 0 2rem;}
    }
  }
  .cart-modal-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    overflow: scroll;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0.0;
  }
  .cart-modal-cont {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    overflow: scroll;
    .inner-cont {
      background-color: $wh-white;
      box-shadow: -20px 0 20px 0 rgba(0, 0, 0, 0.1), -10px 0 14px 0 rgba(0, 0, 0, 0.2);
      max-width: 32rem;
      width: 31.2%;
      min-height: 30.8rem;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(101%);
      -webkit-transform: translateX(101%);
      @include respond-to(sm) {
        width: 94%;
      }
    }
    .close-btn {
      font-size: 20px;
	    font-weight: 300;
      width: 1.5rem;
      height: 2.1rem;
      float: left;
      position: relative;
      z-index: 1;
      margin: 1.4rem 0rem 0rem 1.6rem;
      transition: 0.2s all linear;
      &.white {color: $wh-white;}
      &:hover {
        cursor: pointer;
        color: #262626;
      }
      @include respond-to(sm) {
        margin: 1rem 1rem 0 0;
      }
    }
    .cart-body {
      text-align: center;
      clear: both;
      padding: 9.3rem 1rem;
      padding-top: 0;
      @include respond-to(sm) {
        
      }
    }
    .heading {
      @include intro-text;
      font-family: Montserrat;
      text-transform: uppercase;
      // padding-bottom: 1rem;
      font-weight: 500;
      @include respond-to(sm) {font-size: 1.6rem;}
    }
    .subtext {
      @include text-body;
      line-height: 1.71;
	    letter-spacing: 0.2px;
      padding-bottom: 5rem;
      @include respond-to(sm) {
        padding-bottom: 2rem;
      }
    }
  }

  .cart-text-area {
    background-color: #ffffff;
  	box-shadow: 0 17px 20px 0 rgba(0, 0, 0, 0.1), 0 4px 14px 0 rgba(0, 0, 0, 0.2);
  	border: solid 2px #d1d1d1;
    overflow: visible;
    @include text-body;
    padding: 2rem 2rem;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    outline: none;
    transition: 0.15s all ease;
    &::-webkit-input-placeholder {color: #000}
    &:-moz-input-placeholder {color: #000}
    &::-moz-input-placeholder {color: #000}
    &::-ms-input-placeholder {color: #000}
    &:focus, &.active {
      border-color: #000;
      box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    }
    &.is-danger {
      border-color: red !important;
      &::-webkit-input-placeholder {color: red}
      &:-moz-input-placeholder {color: red}
      &::-moz-input-placeholder {color: red}
      &::-ms-input-placeholder {color: red}
    }
    &.disabled {
      color: #d1d1d1;
      background-color: #fafafa;
      border-color: #d1d1d1 !important;
      &::-webkit-input-placeholder {color: #d1d1d1}
      &:-moz-input-placeholder {color: #d1d1d1}
      &::-moz-input-placeholder {color: #d1d1d1}
      &::-ms-input-placeholder {color: #d1d1d1}

    }
  }
  .cart-text-area-cont {
    position: relative;
    overflow: visible;
    .remaining-chars {
      position: absolute;
      top: 1.2rem;
      right: 1.2rem;
      @include text-body;
      font-size: 1rem;
      &.disabled {color: #d1d1d1;}
    }
  }
  .cart-btn {
    background-color: $wh-black;
    padding: 1.3rem 5.2rem;
    box-shadow: 0 7px 13px 0 rgba(95, 95, 95, 0.5), 0 1px 3px 0 rgba(149, 149, 149, 0.2);
    @include intro-text;
    color: $wh-white;
    margin-top: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 0;
    outline: none;
    transition: 0.2s all linear;
    margin-bottom: 3rem;

    &:hover {
      cursor: pointer;
      background-color: #262626;
    }
    @include respond-to(sm) {
      font-size: 1.4rem;
      width: 100%;
    }
  }

</style>
