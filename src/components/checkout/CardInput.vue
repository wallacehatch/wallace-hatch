<template lang="html">
  <div class="card-input-cont">
    <checkout-input iPlaceholder="Card Details"
      iType="text"
      class="card-field"
      iClass="card-details"
      iName="card number"
      :iValue="cardInfo.cardNumber"
      v-model="cardInfo.cardNumber"
      iValidate="required|credit_card"
      iMask="#### #### #### ####">
      <div slot="cardIcon" class="card-icon"
        :class="cardInfo.cardType">
      </div>
      <div slot="cardAuth" class="card-auth-cont">
        <checkout-input iPlaceholder="MM/YY"
          iType="text"
          class="info-field-cont col-2"
          :iClass="[{'active': cardInfo.exp}]"
          :iValue="cardInfo.exp"
          iName="expiration date"
          iMask="##/##"
          v-model="cardInfo.exp"
          iValidate="required">
        </checkout-input>
        <checkout-input iPlaceholder="cvc"
          iType="text"
          class="info-field-cont col-2"
          :iClass="['nbl', {'active': cardInfo.cvc}]"
          :iValue="cardInfo.cvc"
          iName="cvc"
          v-model="cardInfo.cvc"
          iValidate="required">
        </checkout-input>
      </div>
    </checkout-input>
  </div>
</template>

<script>
import CheckoutInput from './CheckoutInput';
export default {
  components: {
    CheckoutInput,
  },
   data() {
     const cardTypes = {
       VISA: 'VISA',
       MASTERCARD: 'MASTERCARD',
       DISCOVER: 'DISCOVER',
       AMEX: 'AMEX',
       UNKNOWN: 'UNKNOWN',
     }
     return {
       cardTypes,
       cardInfo: {
         cardNumber: null,
         cardType: cardTypes.UNKNOWN,
         exp: '',
         cvc: '',
       }
     }
   },
   methods: {
     detectCardType(num) {
       switch (num.split('')[0]) {
         case '3':
         this.cardInfo.cardType = this.cardTypes.AMEX;
         break;
         case '4':
         this.cardInfo.cardType = this.cardTypes.VISA;
         break;
         case '5':
         this.cardInfo.cardType = this.cardTypes.MASTERCARD;
         break;
         case '6':
         this.cardInfo.cardType = this.cardTypes.DISCOVER;
         break;
         default:
         this.cardInfo.cardType = this.cardTypes.UNKNOWN;
         break;
       }
     }
   },
   watch: {
     'cardInfo.cardNumber' (newNum) {
       if (newNum.length === 1) { this.detectCardType(newNum) }
       this.$emit('input', this.cardInfo);
     },
     'cardInfo.exp' (newNum) {
       this.$emit('input', this.cardInfo);
     },
     'cardInfo.cvc' (newNum) {
       this.$emit('input', this.cardInfo);
     }
   }
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.card-field {
  width: 100%;
  .card-details {
    padding-left: 7rem;
    &+label {
      padding-left: 6rem;
    }
  }
  &.active .card-auth-cont, &.valid .card-auth-cont {
    height: 6rem;
    margin-top: 2rem;
    overflow: visible;
  }
}
.card-auth-cont {
  margin-top: 0;
  overflow: hidden;
  height: 0;
  transition: 0.2s all cubic-bezier(.28,.56,.32,1);
}
.card-icon {
  background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/unknowncard.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 4.7rem;
  height: 3rem;
  position: absolute;
  top: calc(50% - 1.5rem);
  left: 1.5rem;
  &.UNKNOWN {background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/unknowncard.svg');}
  &.AMEX {background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/amex.svg');}
  &.VISA {background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/visa.svg');}
  &.MASTERCARD {background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/mastercard.svg');}
  &.DISCOVER {background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/discover.svg');}
}
</style>
