<template>
  <div class="field-cont">
    <input
    @focus="active = true"
    @blur="active = false"
    :value="iValue"
    @input="updateModelValue"
    type="text"
    :name="iName"
    class="std-input reg-text open-sans"
    :class="[iClass]">
    <label class="std-input-label open-sans"  for="">{{iPlaceholder || ''}}</label>
    <label :class="{active: active}" class="side-label"><span class="side-label-text">Sign Up</span></label>
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
   props: ['iName', 'iType', 'iValidate', 'iPlaceholder', 'iClass', 'iMask', 'iValue', 'iMin', 'iMax', 'iStep'],
   methods: {
    updateModelValue: function(e) {
      this.$emit('input', e.target.value)
    },
   }
  }
</script>

<style lang='scss'>
@import '../../styles/variables.scss';
.field-cont{
  position: relative;
  float: left;
  overflow: hidden;
  :hover{
    .std-input-label {
      top: 50px;
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
  top: 0;
  left: 275px;
  width: 111px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  transition: 0.2s all linear;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
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
  transform: translateX(111px);
  transition: 0.15s transform linear;
  &.active {
    transform: translateX(0);
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
  &:focus {
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
