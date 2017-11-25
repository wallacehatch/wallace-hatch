<template lang="html">
  <div class="experience-section-cont">
    <div class="quote-box">
      <p class="quote-text">“You can have anything you want in life if you dress for it.”</p>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .experience-section-cont {
    text-align: center;
    .quote-box {
      display: inline-block;
      margin: 0 1rem;
      margin-bottom: 6rem;
      max-width: 58.8rem;
      border: solid 2.4px #f1f1f1;
      padding: 4rem 8rem;
      box-sizing: border-box;
    }
    .quote-text {
      @include text-quote;
    }
  }
</style>
