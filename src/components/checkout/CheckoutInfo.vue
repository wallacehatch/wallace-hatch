<template lang="html">
  <form @submit.prevent="advanceToReview" class="checkout-info-cont">
    <h2 class="info-section-title">Your Details</h2>
    <checkout-input iPlaceholder="First and Last Name"
      iType="text"
      class="info-field-cont"
      iName="name"
      v-model="form.account.name"
      :iValue="form.account.name"
      iValidate="required|validCvc">
    </checkout-input>
    <checkout-input iPlaceholder="Email"
      iType="text"
      class="info-field-cont"
      iName="email"
      v-model="form.account.email"
      :iValue="form.account.email"
      iValidate="required|email">
    </checkout-input>
  <!--   <checkout-input iPlaceholder="Password"
      iType="password"
      class="info-field-cont"
      iName="password"
      v-model="form.account.password"
      :iValue="form.account.password"
      iValidate="required">
    </checkout-input> -->
    <checkout-input iPlaceholder="Phone"
      iType="tel"
      class="info-field-cont"
      iName="phone"
      iValidate="required"
      v-model="form.account.phone"
      :iValue="form.account.phone"
      iMask="(###) ###-####">
    </checkout-input>
    <checkout-checkbox
      class="info-field-cont"
      v-model="form.account.acceptTerms"
      :iValue="form.account.acceptTerms"
      cKey="0" cName="order text">
    </checkout-checkbox>
    <hr class="info-section-divider">

    <h2 class="info-section-title">Ship to</h2>
    <checkout-input iPlaceholder="First and Last Name"
      iType="text"
      class="info-field-cont"
      iName="shipping name"
      v-model="form.shipping.name"
      :iValue="form.shipping.name"
      iValidate="required">
    </checkout-input>
    <checkout-input iPlaceholder="Street Address"
      iType="text"
      class="info-field-cont"
      iName="address_ac"
      v-model="form.shipping.address"
      :iValue="form.shipping.address"
      iClass="address"
      iId="address_ac"
      iValidate="required">
    </checkout-input>

    <div v-if="form.addressSelected" class="address-details-cont">
      <checkout-input iPlaceholder="Apt/Suite"
        iType="text"
        class="info-field-cont col-2"
        iName="aptSuite"
        v-model="form.shipping.aptSuite"
        :iValue="form.shipping.aptSuite"
        iValidate="">
      </checkout-input>
      <checkout-input iPlaceholder="Company"
        iType="text"
        class="info-field-cont col-2"
        iClass="nbl"
        iName="company"
        v-model="form.shipping.company"
        :iValue="form.shipping.company"
        iValidate="">
      </checkout-input>
      <checkout-input iPlaceholder="City"
        iType="text"
        class="info-field-cont col-3"
        :iClass="[ {'active': form.shipping.city}]"
        iName="city"
        v-model="form.shipping.city"
        :iValue="form.shipping.city"
        iValidate="required"
        initValidate="true">
      </checkout-input>
      <checkout-input iPlaceholder="State"
        iType="text"
        class="info-field-cont col-3"
        :iClass="['nbl', {'active': form.shipping.state}]"
        iName="state"
        v-model="form.shipping.state"
        :iValue="form.shipping.state"
        iValidate="required"
        initValidate="true">
      </checkout-input>
      <checkout-input iPlaceholder="Zip Code"
        iType="text"
        class="info-field-cont col-3"
        :iClass="['nbl', {'active': form.shipping.zip}]"
        iName="zip"
        v-model="form.shipping.zip"
        :iValue="form.shipping.zip"
        iValidate="required">
      </checkout-input>
    </div>
    <hr class="info-section-divider">

    <h2 class="info-section-title">Bill to</h2>
    <card-input v-model="form.billing" class="info-field-cont"></card-input>
    <checkout-coupon class="info-field-cont"></checkout-coupon>
    <order-summary :bag="bag" buttonText="Review Your Order"  @buttonClick="advanceToReview"></order-summary>
  </form>
</template>

<script>
import CheckoutInput from './CheckoutInput';
import CardInput from './CardInput';
import CheckoutCheckbox from './CheckoutCheckbox';
import OrderSummary from './OrderSummary';
import StripeService from '@/StripeService.js';
import CheckoutCoupon from './CheckoutCoupon';
export default {
  props: ['form', 'bag'],
  components: {
    CheckoutInput,
    CheckoutCheckbox,
    CardInput,
    OrderSummary,
    CheckoutCoupon,
  },
  methods: {
    advanceToReview() {
      var valid
      this.$validator.validateAll().then((result) => {
        console.log(result)
        if (result) {
          StripeService.createCustomer(this.form).then((result) => {
              this.$router.push('/checkout/review');
      }, (err) => {
        alert(err.response.data.error.message)
      })
        }
        else {
          const inputs = document.getElementsByTagName('input');
          for (var i=0; i < inputs.length; i++) {
            console.log(inputs[i]);
            if ((typeof this.fields[inputs[i].name] !== 'undefined') && (this.fields[inputs[i].name].invalid)) {
              window.scroll({
                top: inputs[i].getBoundingClientRect().top,
                left: 0,
                behavior: 'smooth'
              });
              break;
            }
          }
        }

      })

    },
    assignAddressComponent(c) {
      switch (c.types[0]) {
        case 'street_number':
          this.form.shipping.streetNumber = c.long_name;
          break;
        case 'route':
          this.form.shipping.streetName = c.long_name;
          break;
        case 'locality':
          this.form.shipping.city = c.long_name;
          break;
        case 'administrative_area_level_1':
          this.form.shipping.state = c.long_name;
          break;
        case 'country':
          this.form.shipping.country = c.long_name;
          break;
        case 'postal_code':
          this.form.shipping.zip = c.long_name;
          break;
      }
    }
  },
  mounted() {
    this.$emit('setSection', 0);
    var input = document.getElementById('address_ac');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      this.form.addressSelected = true;
      place.address_components.map(this.assignAddressComponent);
    })
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .checkout-info-cont {
    .info-field-cont.summary {
      margin-bottom: 0;
    }
    .info-section-divider {
      padding-top: 3rem;
      width: calc(100% - 30rem);
      @include respond-to(md) {
        width: calc(100% - 25rem);
        max-width: 50rem;
      }
      @include respond-to(sm) {width: calc(100% - 4rem);}
      margin: auto;
      margin-bottom: 3rem;
      border: none;
      border-bottom: solid 1px #d8d8d8;
    }
    .info-section-title {
      @include h4;
      letter-spacing: 1rem;
      font-size: 3.2rem;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;
      @include respond-to(md) {
        font-size: 2rem;
        letter-spacing: 0.6rem;
        margin-bottom: 2rem;
      }
      @include respond-to(sm) {
        font-size: 1.8rem;
        letter-spacing: 0.5rem;
      }
    }
    .info-field-cont {
      max-width: 50rem;
      width: calc(100% - 2rem);
      margin: auto;
      margin-bottom: 2rem;
      &.col-2 {
        max-width: 25rem;
        width: 50%;
        float: left;
      }
      &.col-3 {
        max-width: 16.66rem;
        width: 33.33%;
        float: left;
      }
    }
    .address-details-cont {
      max-width: 50rem;
      width: calc(100% - 2rem);
      margin: auto;
      overflow: auto;
    }
    .address {
      &::placeholder {
        color: transparent;
      }
    }
  }
  .checkout-input.nbr {
    border-right: none !important;
  }
  .checkout-input.nbl {
    border-left: none !important;
  }
</style>
