<template lang="html">
  <div class="faq-cont">
    <h3 class="section-title">FAQ</h3>
    <hr class="faq-divider">

    <h4 class="body-section-title">Terms of Use</h4>
    <p class="body-info">Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
    <hr class="faq-divider">

    <h4 class="body-section-title">Changes To These Terms Or The Services</h4>


    <p class="body-info">Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur.</p>
    <hr class="faq-divider">
    <h4 class="body-section-title">Pellentesque Fermentum Elit</h4>
    <p class="body-info">Some cookies are vital in order for the website to function properly. The cookies keep track of your settings and make your shopping experience more convenient by e.g. recognizing your device and remembering your preferences and settings.</p>
    <hr class="faq-divider">

  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';
.faq-cont {
  width: calc(100% - 8rem);
  max-width: 75rem;
  margin: 7rem auto;
  @include respond-to(sm) {
    width: calc(100% - 3rem);
    margin: 5.5rem auto;
  }
  .section-title {
    @include h4;
    font-size: 2.8rem;
    letter-spacing: 6px;
    text-transform: uppercase;
    text-align: center;
    padding: 8rem 0 1rem 0;
    @include respond-to(sm) {
      padding: 3rem 0 0 0;
      font-size: 2.4rem;
      letter-spacing: 5px;
    }
  }
  .body-section-title {
    @include intro-text;
    letter-spacing: 2.6px !important; 

    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-bottom: 1rem;
    padding-top: 2rem;
  }
  .body-info {
    @include text-body;
  }
  .faq-divider{
    border: none;
    width: 103.5%;
    margin-left:  -1.75%;
    margin-top: 3rem;
    height: 1px;
    background-color: #d8d8d8;
  }
}
</style>
