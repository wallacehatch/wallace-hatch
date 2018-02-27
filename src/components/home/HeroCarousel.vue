<template lang="html">
  <!-- SITE HERO -->
  <div class="hero-cont">

    <img v-lazy="'https://s3.us-east-2.amazonaws.com/wallace-hatch/hero-image.jpg'"
    data-srcset="https://s3.us-east-2.amazonaws.com/wallace-hatch/hero-image.jpg 1353w,
    https://s3.us-east-2.amazonaws.com/wallace-hatch/hero-image%402x.jpg 2600w,
    https://s3.us-east-2.amazonaws.com/wallace-hatch/hero-image%403x.jpg 3900w"
    alt="" class="hero-image lazy">
    <div class="lazy delay-1" id="home_lazy_1">
      <p class="hero-1">The New</p>
      <h2 class="hero-2">SOHO Hatch</h2>
      <p class="hero-3">Worn by Kendall Jenner</p>
      <button class="hero-btn" v-scroll-to="'#product-showcase'">Shop now</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
</style>
