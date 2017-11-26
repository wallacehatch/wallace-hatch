<template>
  <div class="field-cont">
    <input
    @focus="active = true"
    @blur="shouldBlurField"
    :value="iValue"
    @input="updateModelValue"
    type="text"
    :name="iName"
    class="std-input reg-text open-sans"
    :class="[{error: error, submitted: submitted}, iClass]">
    <label class="std-input-label open-sans" for="">{{error ? error : iPlaceholder}}</label>
    <div class="side-label-cont">
      <label @click="$emit('submitForm')"
      :class="{active: active}"
      class="side-label">
        <span class="side-label-text">{{submitted ? 'Thank you for signing up for our newsletter' : 'Sign Up'}}</span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
   name: 'StdInput',
   data() {
     return {
       active: false,
     }
   },
   props: ['iName', 'iType', 'iValidate', 'iPlaceholder', 'iClass', 'iMask', 'iValue', 'iMin', 'iMax', 'iStep', 'submitted', 'error'],
   methods: {
    updateModelValue: function(e) {
      this.$emit('input', e.target.value)
    },
    shouldBlurField(e) {
      if (!e.target.value) {this.active = false;}
    },
   }
  }
</script>

<style lang='scss'>
@import '../../styles/variables.scss';
.side-label-cont {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  pointer-events: none;
}
.field-cont{
  position: relative;
  float: left;
  overflow: visible;
  &:hover{
    .std-input-label {
      top: 50px;
    }
  }
  @include respond-to(sm) {
    max-width: calc(100%) !important;
    box-sizing: border-box;
  }
  &.submitted .side-label {
    transition: 0.4s transform cubic-bezier(.33,.74,.42,.95);
    transform: translateX(-27.5rem);
    width: 38.4rem;
    &:hover {
      cursor: initial;
      opacity: 1.0;
    }
  }
}
.std-input-label {
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #000000;
  position: absolute;
  pointer-events: none;
  top: 16px;
  left: 20px;
  pointer-events: none;
  text-transform: initial;
  &.blank {
    transform: translateY(2.2rem);
  }
}

.side-label{
  position: absolute;
  display: inline-block;
  pointer-events: auto;
  top: 0;
  left: 275px;
  width: 111px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  transition: 0.2s all cubic-bezier(.33,.74,.42,.95);
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  transform: translateX(111px);
  &.active {
    transform: translateX(0);
  }

  .side-label-text{
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    color: white;
  }
}

.std-input.error {
  border-color: red;
  &+label {
    color: red;
  }
}

.std-input {
  padding: 1.6rem 0;
  text-indent: 2rem;
  outline: none;
  margin: 0 0;
  display: inline-block;
  max-width: 100% !important;
  background-color: #ffffff;
  box-shadow: 0 17px 20px 0 rgba(0, 0, 0, 0.1), 0 4px 14px 0 rgba(0, 0, 0, 0.2);
  border: solid 2px #d1d1d1;
  @include text-body;
  letter-spacing: 0.5px;
  &.reg{
    width: 28rem;
  }
  &.md {
    width: 31rem;
  }
  &.lg {
    width: 38rem;
  }
  &.max {
    width: 100%;
  }
  &.sm {
    width: 11.9rem;
  }
  &:focus, &.submitted {
    box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    border: solid 3px #000000;
    &+label {
      font-size: 10px;
      top: 7px;
      letter-spacing: 0.4px;
      transform: translateY(0);
      transition: 0.15s all ease;
      font-weight: 100;
    }
  }

}
</style>
