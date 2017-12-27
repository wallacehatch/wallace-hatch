<template lang="html">
  <div class="checkout-info-cont">
    <h2 class="info-section-title">Your Details</h2>

    <checkout-input iPlaceholder="First and Last Name"
      iType="text"
      class="info-field-cont"
      iName="name"
      iValidate="required">
    </checkout-input>
    <checkout-input iPlaceholder="Email"
      iType="text"
      class="info-field-cont"
      iName="email"
      iValidate="required|email">
    </checkout-input>
    <checkout-input iPlaceholder="Password"
      iType="password"
      class="info-field-cont"
      iName="password"
      iValidate="required">
    </checkout-input>
  </div>
</template>

<script>
import CheckoutInput from './CheckoutInput';
export default {
  components: {
    CheckoutInput,
  }
}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .checkout-info-cont {
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
    }
  }
</style>
