<template lang="html">
  <div v-show="lActive">
    <div id="contact_modal_mask" class="contact-modal-mask"></div>
    <div id="contact_modal_cont" @click="$emit('close')" class="contact-modal-cont">
      <div @click.stop id="contact_modal_inner_cont" class="inner-cont">
          <div @click="$emit('close') "class="fa fa-close close-btn"></div>
          <div class="contact-form-body">
            <p class="heading">Need to get in<br> contact with us?</p>
            <p class="subtext">Interested in working with us or learning more about<br class="hide-sm"> Wallace Hatch? Feel free to send us a message!</p>
            <form class="contact-form" method="post" @submit.prevent="validateForm">
              <contact-input
              iName="name"
          		v-model="form.name"
          		:iValue="form.name"
              iValidate="required"
          		iPlaceholder="Full Name"
          		iClass="max">
          		</contact-input>

              <contact-input
              iName="email"
          		v-model="form.email"
          		:iValue="form.email"
              iValidate="required"
          		iPlaceholder="Email"
              iType="email"
          		iClass="max">
          		</contact-input>

              <contact-input
              iName="company"
              iOptional="true"
          		v-model="form.company"
          		:iValue="form.company"
          		iPlaceholder="Company"
          		iClass="max">
          		</contact-input>

              <div class="contact-text-area-cont">
                <span class="remaining-chars">{{textarea.chars}}/250</span>
                <textarea
                v-validate="'required'"
                maxlength="250"
                @focus="textarea.active = true"
                @blur="shouldBlurField"
                @keyup="setCharCount"
                :placeholder="errors.has('message') ? errors.first('message') : 'Enter Message'"
                name="message" id="" cols="30" rows="7"
                class="contact-text-area"
                :class="{'is-danger': errors.has('message'), active: textarea.active}"></textarea>
              </div>
              <button type="submit" class="contact-form-btn">Send</button>
            </form>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import ContactInput from './ContactInput';
export default {
  props: ['active'],
  components: {
    ContactInput,
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        company: null,
        message: null,
      },
      textarea: {
        chars: 0,
        active: false,
      },

      lActive: false,
      dur: 500,
    }
  },
  methods: {
    validateForm() {
      this.$validator.validateAll().then((result) => {
        // result && // This is where you send this shit to the backend
      })
    },
    shouldBlurField(e) {
      if (!e.target.value) {this.textarea.active = false;}
    },
    setCharCount(e) {
      this.textarea.chars = e.target.value.length
    },
    toggleModal(active) {
      if (active) {
        this.lActive = true;
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          anime({
            targets: '#contact_modal_mask',
            opacity: 1.0,
            duration: this.dur,
            easing: 'easeInOutCubic'
          })
          anime({
            targets: '#contact_modal_inner_cont',
            translateX: 0,
            duration: this.dur,
            easing: 'easeInOutCubic'
          })
        })

      }
      else {
        document.body.style.overflow = 'initial';
        anime({
          targets: '#contact_modal_mask',
          opacity: 0,
          duration: this.dur,
          easing: 'easeInOutCubic'
        })
        anime({
          targets: '#contact_modal_inner_cont',
          translateX: '101%',
          duration: this.dur,
          easing: 'easeInOutCubic',
          complete: () => {
            this.lActive = false;
          }
        })
      }
    }
  },
  mounted() {
    // uncomment this to have form always out
    // this.toggleModal(true);
  },
  watch: {
    'active' (newState) {
      this.toggleModal(newState);

    }
  }
}
</script>

<style lang="scss">
  @import '../../../styles/_variables.scss';
  .contact-modal-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    overflow: scroll;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0.0;
  }
  .contact-modal-cont {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    overflow: scroll;
    .inner-cont {
      background-color: $wh-white;
      box-shadow: -20px 0 20px 0 rgba(0, 0, 0, 0.1), -10px 0 14px 0 rgba(0, 0, 0, 0.2);
      max-width: 60rem;
      width: 66%;
      min-height: 100vh;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(101%);
      @include respond-to(sm) {
        width: 94%;
      }
    }
    .close-btn {
      font-size: 32px;
	    font-weight: 300;
      width: 2.4rem;
      height: 3.2rem;
      float: right;
      margin: 2rem 2rem 1.8rem 2rem;
      transition: 0.2s all linear;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
      @include respond-to(sm) {
        margin: 1rem 1rem 0 0;
      }
    }
    .contact-form-body {
      clear: both;
      padding: 9.3rem 5rem;
      padding-top: 0;
      @include respond-to(sm) {
        padding: 0 2rem 3rem 2rem;
      }
    }
    .heading {
      @include h5;
      font-size: 1.8rem;
      line-height: 1.78;
	    letter-spacing: 5px;
      text-transform: uppercase;
      padding-bottom: 1rem;
      @include respond-to(sm) {font-size: 1.6rem;}
    }
    .subtext {
      @include text-body;
      line-height: 1.71;
	    letter-spacing: 0.2px;
      padding-bottom: 5rem;
      @include respond-to(sm) {
        padding-bottom: 2rem;
      }
    }
    .contact-form {
      width: 100%;
      overflow: visible;
      .field-cont {
        width: calc(100% - 4px);
        margin-bottom: 1rem;
      }

    }
  }

  .contact-text-area {
    background-color: #ffffff;
  	box-shadow: 0 17px 20px 0 rgba(0, 0, 0, 0.1), 0 4px 14px 0 rgba(0, 0, 0, 0.2);
  	border: solid 2px #d1d1d1;
    overflow: visible;
    @include text-body;
    padding: 2rem 2rem;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    outline: none;
    transition: 0.15s all ease;
    &::-webkit-input-placeholder {color: #000}
    &:-moz-input-placeholder {color: #000}
    &::-moz-input-placeholder {color: #000}
    &::-ms-input-placeholder {color: #000}
    &:focus, &.active {
      border-color: #000;
      box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    }
    &.is-danger {
      border-color: red !important;
      &::-webkit-input-placeholder {color: red}
      &:-moz-input-placeholder {color: red}
      &::-moz-input-placeholder {color: red}
      &::-ms-input-placeholder {color: red}
    }
  }
  .contact-text-area-cont {
    position: relative;
    overflow: visible;
    .remaining-chars {
      position: absolute;
      top: 1.2rem;
      right: 1.2rem;
      @include text-body;
      font-size: 1rem;
    }
  }
  .contact-form-btn {
    background-color: $wh-black;
    padding: 1.3rem 5.2rem;
    box-shadow: 0 7px 13px 0 rgba(95, 95, 95, 0.5), 0 1px 3px 0 rgba(149, 149, 149, 0.2);
    @include intro-text;
    color: $wh-white;
    margin-top: 2rem;
    float: right;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 0;
    border: 3px solid $wh-black;
    outline: none;
    transition: 0.2s all linear;
    margin-bottom: 3rem;
    &:hover {
      cursor: pointer;
      background-color: $wh-white;
      color: $wh-black;
    }
    @include respond-to(sm) {
      font-size: 1.4rem;
      width: 100%;
    }
  }

</style>
