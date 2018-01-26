<template>
  <div id="app">
    <site-header></site-header>
    <router-view/>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/common/SiteHeader';
import SiteFooter from '@/components/common/SiteFooter';
import fetchInstagramPosts from './instagram';
import axios from 'axios';
import BagService from '@/BagService';

export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter,
  },
  data() {
    return {
    }
  },
  methods: {
},
  beforeMount() {
    const bn = BagService.getBag().items.reduce((total, item) => {return total + item.quantity},0);
    this.$store.commit('SET_BADGE_NUMBER', bn);
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
  input {
    border-radius: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
</style>
