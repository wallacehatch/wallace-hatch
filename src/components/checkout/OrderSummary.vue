<template lang="html">
  <div class="total-summary-cont">
    <div class="info-field-cont summary">
      <div class="summary-line">
        <p class="label">Subtotal (2 items)</p>
        <p class="amount">{{338 | currency}}</p>
      </div>
      <div class="summary-line">
        <p class="label">Tax</p>
        <p class="amount">{{0 | currency}}</p>
      </div>
      <div class="summary-line">
        <p class="label">Shipping</p>
        <p class="amount">Free</p>
      </div>
    </div>
    <hr class="info-section-divider">
    <div class="info-field-cont">
      <div class="summary-line">
        <p class="label total">Total</p>
        <p class="amount total">{{338 | currency}}</p>
      </div>
      <div @click="$emit('buttonClick')" class="review-btn">{{buttonText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['buttonText'],
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.total-summary-cont {
  margin-top: 4rem;
  padding-top: 3.4rem;
  padding-bottom: 3rem;
  @include respond-to(md) {
    padding-top: 1.4rem;
    padding-bottom: 2rem;
  }
  @include respond-to(sm) {
    padding: 0.4rem 0.5rem 0 0.5rem;
  }
  background-color: #f6f6f6;
  border: 1px solid $wh-grey-1;
  border-left: none;
  border-right: none;
}
.summary-line {
  overflow: auto;
  margin-top: 1.8rem;
  .label {
    @include intro-text;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 2px;
    float: left;
    color: #717171;
    &.total {
      font-size: 1.4rem;
      letter-spacing: 4px;
      font-weight: initial;
      color: #000;
    }
  }
  .amount {
    @include intro-text;
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    font-weight: 300;
    float: right;
    &.total {
      font-size: 1.8rem;
      letter-spacing: 2.2px;
    }
  }
}
.review-btn {
  display: block;
  background-color: #000;
  box-shadow: 0 17px 20px 0 rgba(0, 0, 0, 0.1), 0 4px 14px 0 rgba(0, 0, 0, 0.2);
  padding: 2.1rem 0;
  text-transform: uppercase;
  @include intro-text;
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-align: center;
  margin-top: 3rem;
  &:hover {
    cursor: pointer;
  }
}
</style>
