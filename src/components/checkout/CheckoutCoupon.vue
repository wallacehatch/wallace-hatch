<template lang="html">
  <div class="coupon-cont">
    <div class="redeem-coupon-btn" :class="{active: isActive }" v-on:click="isActive = !isActive"><p>Redeem a gift card or promo code</p></div>
      <std-input
               iName="coupon"
               v-model="coupon"
               :iValue="coupon.coupon"
               iPlaceholder="Enter coupon"
               iClass="lg"
               :class="[{submitted: coupon.submitted}, {active: isActive }]"
               :submitted="coupon.submitted"
               :error="coupon.error"
               @submitForm="handleFieldSubmit"
               class="coupon-input"
               ></std-input>
  </div>
</template>

<script>
import StdInput from '@/components/common/StdInput';
export default {
  inject: ['$validator'],
  components: {
    StdInput
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
        // background-color: #e6e6e6;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1);
      }
    
  }
  .active {
      background-color: #e6e6e6;

    }
   .coupon-input {
        height: 0px;
        overflow: hidden;
        margin-top: 1rem;
        width: 100% !important;
        
        .std-input{
               width: 100% !important;
               // background-color: #ffffff;
               
        }
      }
      .active {
        height: 100%;      
      
    }
}

</style>
