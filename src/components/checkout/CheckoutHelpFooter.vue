<template lang="html">
  <div class="checkout-help-footer-cont">
    <p class="title">Need Help?</p>
    <p class="subtext">We’re available by phone 000 000.0000<br>
      Monday - Friday, 9am - 6pm or by Email every day, 9am - 9pm ET.</p>
    <div class="help-icon-cont">
      <i class="fal fa-bolt icon"></i>
      <p class="label">FAQ</p>
    </div>
    <div class="help-icon-cont">
      <i class="fal fa-mobile icon"></i>
      <p class="label">CALL</p>
    </div>
    <div class="help-icon-cont">
      <i class="fal fa-envelope icon"></i>
      <p class="label">EMAIL</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.checkout-help-footer-cont {
  text-align: center;
  padding: 5rem 0 2.8rem 0;
  @include respond-to(lg) {padding: 5rem 0 3.8rem 0}
  @include respond-to(md) {padding: 4rem 0 4.5rem 0}
  @include respond-to(sm) {padding: 3rem 0 4.8rem 0}
  .title {
    @include intro-text;
    font-size: 1.4rem;
    padding-bottom: 1.7rem;
    text-transform: uppercase;
    text-align: center;
  }
  .subtext {
    @include intro-text;
    font-size: 1.2rem;
    color: #717171;
    text-align: center;
    line-height: 2.0;
	  letter-spacing: 2px;
    text-transform: uppercase;
    width: calc(100% - 2rem);
    max-width: 60rem;
    margin: auto;
  }
  .help-icon-cont {
    display: inline-block;
    width: 8rem;
    text-align: center;
    margin-top: 3.7rem;
    transition: 0.2s all linear;
    padding: 0 2rem;
    @include respond-to(sm) {padding: 0 1rem};
    svg {
      font-size: 3.2rem;
    }
    .label {
      @include intro-text;
      font-size: 1.2rem;
      letter-spacing: 3px;
      padding-top: 1.7rem;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
}
</style>
