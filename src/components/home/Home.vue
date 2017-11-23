<template lang="html">
  <div class="home-cont">
    <!-- SITE HERO -->
    <div class="hero-cont">
      <p class="hero-1">The New</p>
      <h2 class="hero-2">SOHO Hatch</h2>
      <p class="hero-3">Worn by Kendall Jenner</p>
      <button class="hero-btn">Shop now</button>
    </div>
    <!-- PRODUCT SHOWCASE -->
    <div class="showcase-cont">
      <p class="header">Pre-order now</p>
      <p class="subtext">We won’t charge you, until we ship</p>
      <hr class="line">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.home-cont {
  margin-top: 7rem;
  @include respond-to(sm) { margin-top: 5.5rem; }

  // SITE HERO
  .hero-cont {
    background-color: #222;
    min-height: 40rem;
    padding-left: 11rem;
    padding-top: 20rem;
    @include respond-to(lg) { padding-top: 16.6rem; padding-left: 8rem; }
    @include respond-to(md) { padding-top: 10.6rem; padding-left: 7rem; }
    @include respond-to(md) { padding-top: 9.2rem; padding-left: 2rem; }
  }
  .hero-btn {
    background-color: rgba(0, 0, 0, 0.7);
  	box-shadow: 0 17px 20px 15px rgba(0, 0, 0, 0.5), 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  	border: solid 3px $wh-white;
    padding: 1.6rem 3.5rem;
    @include intro-text;
    font-size: 1.4rem;
    margin-top: 4rem;
    color: $wh-white;
    text-transform: uppercase;
    box-sizing: border-box;
    @include respond-to(md) { font-size: 1.2rem;}
    @include respond-to(sm) { width: calc(100% - 2rem); }
  }
  .hero-1 {
    @include intro-text;
    text-transform: uppercase;
    color: $wh-white;
    padding-bottom: 0.6rem;
    @include respond-to(lg) {font-size: 1.4rem;}
  }
  .hero-2 {
    @include h1;
    font-size: 4rem;
    color: $wh-white;
    padding-bottom: 1rem;
    text-transform: uppercase;
    @include respond-to(lg) {font-size: 3.2rem;}
    @include respond-to(md) {font-size: 2.8rem;}
  }
  .hero-3 {
    @include intro-text;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: $wh-white;
  }


  // PRODUCT SHOWCASE
  .showcase-cont {
    padding: 6rem 0 4rem 0;
    text-align: center;
    .header {
      @include h4;
      line-height: 1.58;
      text-transform: uppercase;
	    letter-spacing: 7.5px;
      text-align: center;
      @include respond-to(md) {font-size: 2rem;}
    }
    .subtext {
      @include intro-text;
      font-size: 1.2rem;
      letter-spacing: 3px;
      margin-top: 1rem;
      text-transform: uppercase;
      @include respond-to(sm) { line-height: 2.0 }
    }
    .line {

      border: none;
      border-bottom: 4px solid $wh-black;
      width: 4rem;
      margin: auto;
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }
}
</style>
