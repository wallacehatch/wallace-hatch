<template lang="html">
  <div class="coupon-cont">
    <div class="redeem-coupon-btn" :class="{active: isActive }" v-on:click="isActive = !isActive"><p>Redeem a gift card or promo code</p></div>
      <coupon-input
               iName="coupon"
               v-model="coupon"
               :iValue="coupon.coupon"
               iPlaceholder="Enter coupon"
               iClass="lg"
               :class="[{submitted: coupon.submitted}, {active: isActive }]"
               :submitted="coupon.submitted"
               :error="coupon.error"
               @submitForm="submitCoupon"
               class="coupon-input"
               ></coupon-input>
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
        coupon: '',
        submitted: false,
        error: null,
      },

     }
   },
   methods: {
    submitCoupon(){
      StripeService.validateCoupon(this.coupon.coupon).then((result) => {
        console.log(result)
      }, (err) => {
        console.log("COUPON NOT VALID!!" + err)
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
  overflow: auto;
  .redeem-coupon-btn{

    display: inline-block;
    p{
      @include text-body;
      font-size: 14px;
      letter-spacing: 0.2px;
      text-align: left;
    }
    border: solid 1px #cccccc;
    border-radius: 4px;
    padding: 0.34rem 1.2rem;
    
      &:hover {
        cursor: pointer;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1);
        // background-color: #e6e6e6;
        
      }
    
  }
  .active {
      background-color: #e6e6e6;
      // box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1);

    }
   .coupon-input {
        height: 0px !important;
        overflow: hidden;
        margin-top: 1rem;
        width: 100% !important;
        transition: 0.2s;
        box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.05), 0 4px 4px 0 rgba(0, 0, 0, 0.05) !important;
        
        .std-input{
               width: 100% !important;
                border: solid 1px #d1d1d1;      
        }
      }
     .coupon-input{
        height: 100% !important;
        
      }
      
    
}

</style>
