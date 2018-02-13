<template>
  <div id="app">
    <order-success-modal @close="$store.commit('SET_ORDER_SUCCESS_MODAL_ACTIVE',{})"></order-success-modal>
    <site-header :active="navActive"></site-header>
    <router-view @setNav="setNavActive"/>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/common/SiteHeader';
import SiteFooter from '@/components/common/SiteFooter';
import OrderSuccessModal from '@/components/common/orderSuccessModal/Modal';
import fetchInstagramPosts from './instagram';
import axios from 'axios';
import BagService from '@/BagService';
import StripeService from '@/StripeService';


export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter,
    OrderSuccessModal,
  },
  data() {
    return {
      navActive: 0,
    }
  },
  methods: {
    setNavActive(i) {
      this.navActive = i;
    }
  },
  beforeMount() {
    const bag = BagService.getBag();
    if (bag === null) return;
    const bn = bag.items.reduce((total, item) => {return total + item.quantity},0);
    this.$store.commit('SET_BADGE_NUMBER', bn);

    // Custom Validation Messages for inputs
    this.$validator.extend('validCard', {

      getMessage: field => 'The Card is not valid field you entered is not valid',
      validate: (value) => {
        console.log("validating")
        // this is where you put the logic to verify the CVC
        return false;
      }
    })

  }
}
</script>

<style lang='scss'>
  @import './styles/main.scss';
  @import './styles/_variables.scss';
  #app {
    min-height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  .site-cont {
    margin-top: 7rem;
    @include respond-to(sm) {
      margin-top: 5.5rem;
    }
  }


  .lazy {
    @include lazy-trans;
    opacity: 0;
    &[lazy=loading] {
      opacity: 0;
    }
    &[lazy=error] {
      opacity: 1;
    }
    &[lazy=loaded] {
      opacity: 1;
    }
    &.delay-1 {
      transition-delay: $lazy-dur-1;
    }
    &.delay-2 {
      transition-delay: $lazy-dur-2;
    }
    &.delay-3 {
      transition-delay: $lazy-dur-3;
    }
  }


  .clearfix:before,
  .clearfix:after {
      content: ".";
      display: block;
      height: 0;
      overflow: hidden;
  }
  .clearfix:after { clear: both; }
  .load-mask {
    opacity: 0 !important;
    min-height: 100vh !important;
  }
  input {
    border-radius: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
</style>
