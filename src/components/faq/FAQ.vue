<template lang="html">
  <div class="faq-cont">
    <h3 class="section-title">FAQ</h3>
    <faq-item v-for="(question, i) in questions" :key="'faq_item_' + i" :qKey="'faq_item_' + i" :question="question.question" :answer="question.answer"></faq-item>
    <hr class="faq-divider">

  </div>
</template>

<script>
import FaqItem from './FaqItem';
export default {
  components: {
    FaqItem,
  },
  data() {
    return {
      questions: [{
        question: 'Test question 1',
        answer: "Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
      }, {
        question: 'Test question 2',
        answer: "Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
      }, {
        question: 'Test question 3 this is a raelly long question if this was supper long what would you actually do? Test question 3 this is a raelly long question if this was supper long what would you actually do?',
        answer: "Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
      }]
    }
  },
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
    padding: 5rem 0 3rem 0;
    @include respond-to(sm) {
      padding: 3rem 0;
      font-size: 1.8rem;
      letter-spacing: 5px;
    }
  }
  .faq-divider{
    border: none;
    width: calc();
    height: 1px;
    background-color: #d8d8d8;
    width: calc(100% + 3rem);
    margin-left: -1.5rem;
  }
}
</style>
