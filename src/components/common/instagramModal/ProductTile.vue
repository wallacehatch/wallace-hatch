<template lang="html">
<div class="insta-product-cont">
  <div class="product-image" :style="{backgroundImage: 'url(' + item.images[0] + ')'}"></div>
  <div class="info">
    <p class="size">40 MM</p>
    <p class="name">{{item.name}}</p>
    <p class="color">COLOR: {{item.dialColor}}/{{item.metadata.caseColor}}</p>
    <div class="info-block info-quantity">
      <p class="label">QTY</p>
      <p class="value">{{item.quantity}}</p>
    </div>
    <div class="info-block info-price">
      <p class="label">PRICE</p>
      <p class="value">{{100 | currency}}</p>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {

    }
  },
  mounted() {
    console.log("heres item")
    console.log(this.item)
  }
}
</script>

<style lang="scss">
@import '../../../styles/_variables.scss';

.insta-product-cont{
  width: 320px;
  height: 130px;
  background-color: #ffffff;
  border: solid 1px #dbdbdb;

  .product-image{
    display: inline-block;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    float: left;
    transition: 0.35s all cubic-bezier(.69,.16,.32,1);
    width: 99px;
    height: 124px;
    overflow: auto;
  }
  .info {
    @include respond-to(md) { margin-left: 2.5rem; }
    @include respond-to(sm) { margin-left: 1.5rem; }
    .size {
      @include intro-text;
      font-size: 1.4rem;
      letter-spacing: 4px;
      @include respond-to(sm) {
        font-size: 1rem;
        letter-spacing: 3px;
      }
    }
    .name {
      @include intro-text;
      font-size: 2rem;
      letter-spacing: 5px;
      text-transform: uppercase;
      @include respond-to(sm) {
        font-size: 1.4rem;
        letter-spacing: 3px;
      }
    }
    .color {
      @include intro-text;
      font-size: 1.2rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 2.5rem;
      @include respond-to(md) {margin-bottom: 1.5rem;}
      @include respond-to(sm) {
        margin-bottom: 1rem;
        font-size: 1rem;
      }
    }
    .info-block {
      display: inline-block;
      text-align: center;
      .label {
        @include text-small;
        letter-spacing: 2.9px;
      }
      .value {
        @include intro-text;
        font-weight: 300;
        @include respond-to(sm) {
          font-size: 1.4rem;
          letter-spacing: 2px;
          line-height: initial !important;
        }
      }
    }
    .info-quantity .value {
      font-size: 1.4rem;
      line-height: 3rem;
    }
    .info-quantity {
      margin-right: 5rem;
    }
  }
}




</style>
