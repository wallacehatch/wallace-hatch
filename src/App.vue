<template>
  <div id="app">
    <order-success-modal @close="$store.commit('SET_ORDER_SUCCESS_MODAL_ACTIVE',{})"></order-success-modal>
    <site-header></site-header>
    <router-view/>
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
    }
  },
  methods: {
},
  beforeMount() {
    const bag = BagService.getBag();
    if (bag === null) return;
    const bn = bag.items.reduce((total, item) => {return total + item.quantity},0);
    this.$store.commit('SET_BADGE_NUMBER', bn);

    // Custom Validation Messages for inputs
    this.$validator.extend('validCvc', {
      getMessage: field => 'The CVC field you entered is not valid',
      validate: (value) => {
        // this is where you put the logic to verify the CVC
        return false;
      }
    })

  }
}
</script>

<style lang='scss'>
  @import './styles/main.scss';
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
