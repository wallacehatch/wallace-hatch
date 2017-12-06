<template lang="html">
  <div class="experience-section-cont">
    <div class="quote-box">
      <p class="quote-text">“You can have anything you want in life if you dress for it.”</p>
      <p class="quote-source">– Edith Head</p>
    </div>
    <div class="section-heading-cont">
      <p class="header">Life Experiences</p>
      <p class="subtext">#WallaceHatch</p>
      <hr class="line">
    </div>
    <div class="instagram-feed-cont">
      <div class="instagram-image i0"></div>
      <div class="instagram-image i1"></div>
      <div class="instagram-image i2"></div>
      <div class="instagram-image i3"></div>
      <div class="instagram-image i4"></div>
      <div class="instagram-image i5"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .instagram-feed-cont {
    // margin-top: 4rem;
    margin: 4rem 2.3rem 0 2.3rem;
    box-sizing: border-box;
    @include respond-to(lg) {margin-top: 0rem;}
    @include respond-to(md) {margin-top: 1.5rem;}
    @include respond-to(sm) {margin-top: 2.5rem;}
    .instagram-image {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 16.666%;
      height: 16.66vw;
      display: inline-block;
      &.i0 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i1 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i2 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i3 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i4 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i5 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
    }
  }
  .experience-section-cont {
    text-align: center;
    .quote-box {
      display: inline-block;
      margin: 0 1rem;
      max-width: 58.8rem;
      border: solid 2.4px #f1f1f1;
      padding: 4rem 8rem;
      box-sizing: border-box;
    }
    .quote-text {
      @include text-quote;
      text-transform: uppercase;
      @include respond-to(lg) {
        font-size: 1.4rem;
        line-height: 1.43;
	      letter-spacing: 4px;
      }
    }
    .quote-source {
      @include intro-text;
      font-size: 1.2rem;
      margin-top: 1rem;
      letter-spacing: 4px;
      text-transform: uppercase;
    }
  }
</style>
