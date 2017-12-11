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
      <div class="instagram-image i4 hide-sm"></div>
      <div class="instagram-image i5 hide-sm"></div>
      <div class="instagram-image i6 hide-sm"></div>
      <div class="instagram-image i7 hide-sm"></div>
      <div class="instagram-image i8 hide-sm"></div>
      <div class="instagram-image i9 hide-sm"></div>
      <div class="instagram-image i10 hide-sm"></div>
      <div class="instagram-image i11 hide-sm"></div>
      <div class="insta-btn-wrapper">
        <a target="_blank" href="https://www.instagram.com/wallaceHatch/" class="view-insta-btn">View Our Instagram</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .experience-section-cont .section-heading-cont {
    padding-bottom: 0;
  }
  .instagram-feed-cont {
    margin: 4rem 2.3rem 0 2.3rem;
    padding-bottom: 0.9rem;
    box-sizing: border-box;
    overflow: auto;
    @include respond-to(lg) {margin: 0rem 1rem;}
    @include respond-to(md) {margin-top: 1.5rem;}
    @include respond-to(sm) {margin-top: 2.5rem;}

    .insta-btn-wrapper {
      clear: both;
      padding-top: 1.5rem;
      padding-bottom: 3.1rem;
      display: none;
      @include respond-to(sm) {display: block;}
    }
    .view-insta-btn {
      display: block;
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.7);
    	box-shadow: 0 7px 10px 2px rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.05);
    	border: solid 3px #000000;
      text-transform: uppercase;
      @include intro-text;
      font-size: 1.2rem;
      padding: 1.2rem 0;
      font-weight: bold;
    }
    .instagram-image {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 16.66%;
      height: calc(16.66vw - 0.766rem);
      float: left;
      @include respond-to(lg) {height: calc(16.66vw - 0.333rem);}
      @include respond-to(sm) {
        height: calc(50vw - 1rem);
        width: 50%;
      }
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
      &.i6 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i7 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i8 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i9 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i10 {
        background-image: url('https://instagram.com/p/Bb2qU-4hVvn/media/');
      }
      &.i11 {
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
      @include respond-to(sm) {padding: 2.4rem 3rem;}
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
