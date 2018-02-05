<template lang="html">
  <div class="coupon-cont clearfix">
    <div class="redeem-coupon-btn" :class="{active: isActive}" v-on:click="handleCouponClick"><p>Redeem a gift card or promo code</p></div>
      <coupon-input
       iName="coupon"
       v-model="coupon.coupon"
       :iValue="coupon.coupon"
       iPlaceholder="Enter Code"
       iClass="lg"
       :class="[{validated: coupon.validated, invalid: coupon.invalid}, {active: isActive }]"
       :validated="coupon.validated"
       :invalid="coupon.invalid"
       :error="coupon.error"
       @submitForm="submitCoupon"
       @reset="resetState"
       class="coupon-input">
     </coupon-input>
     <div v-for="cp in $store.state.coupons" class="coupon-line-item">
       <p class="name">Promo: {{cp.id}}</p>
       <div @click="$store.commit('REMOVE_COUPON', cp)" class="redeem-coupon-btn">Remove</div>
     </div>
  </div>
</template>

<script>
import CouponInput from './CouponInput.vue';
import StripeService from '@/StripeService.js';
export default {
  inject: ['$validator'],
  components: {
    CouponInput
  },
   data() {

     return {
      isActive: false,
      coupon: {
        coupon: null,
        validated: false,
        invalid: false,
        error: null,
      },

     }
   },
   methods: {
    resetState() {
      this.coupon.validated = false;
      this.coupon.invalid = false;
      this.coupon.error = null;
    },
    handleCouponClick() {
      this.isActive = !this.isActive;
      this.isActive && document.getElementById('coupon_input').focus();
      !this.isActive && document.getElementById('coupon_input').blur();
    },
    submitCoupon(){
      StripeService.validateCoupon(this.coupon.coupon).then((result) => {
        console.log(result)
        this.coupon.validated = true;
        this.coupon.coupon = null;
        this.$store.commit('ADD_COUPON', result.data);
        document.getElementById('coupon_input').blur();

      }, (err) => {
        console.log("COUPON NOT VALID!!" + err)
        this.coupon.invalid = true;
      })

    }

   },
   watch: {

   }
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.coupon-cont{
  .redeem-coupon-btn{
    display: inline-block;
    border: solid 1px #cccccc;
    border-radius: 4px;
    padding: 0.34rem 1.2rem;
    transition: 0.2s all linear;
    p {
      @include text-body;
      font-size: 14px;
      letter-spacing: 0.2px;
      text-align: left;
    }
    &.active {
      background-color: #e6e6e6;
      box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1);
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .coupon-input {
    height: 0px !important;
    overflow: hidden;
    margin-top: 1rem;
    width: 100% !important;
    transition: 0.2s;
    box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.05), 0 4px 4px 0 rgba(0, 0, 0, 0.05) !important;
    box-sizing: border-box;
    &.active {
      height: 5.9rem !important;
    }
    &.validated {
      height: 5.7rem !important;
      .std-input { border: solid 1px #d1d1d1 !important; }
      .side-label {
        background-color: #e9e9e9 !important;
        border: solid 1px #d1d1d1;
        border-left: none;
        height: calc(100% - 2px);
      }
      .side-label span {  color: #acacac !important; }

    }
    .std-input{
      width: 100% !important;
      border: solid 1px #d1d1d1;
    }
  }
  .coupon-line-item {
    display: flex;
    padding-top: 1.5rem;
    align-items: center;
    clear: both;
    padding-left: 1rem;
    p {
      @include text-body;
      margin-right: 1.5rem;
    }
    div {
      @include text-body;
      padding: 0.34rem 1.3rem;
    }
  }
}

</style>
