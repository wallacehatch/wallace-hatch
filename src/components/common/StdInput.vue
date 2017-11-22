<template>
  <div class="field-cont">    
    <input
    :value="iValue"
    @input="updateModelValue"
    type="text"
    :name="iName"
    class="std-input reg-text"
    :placeholder="iPlaceholder">
  </div>
</template>

<script>
  export default {
   name: 'StdInput',
   // directives: {mask},
   props: ['iName', 'iType', 'iValidate', 'iPlaceholder', 'iClass', 'iMask', 'iValue', 'iMin', 'iMax', 'iStep'],
   methods: {
    updateModelValue: function(e) {
      this.$emit('input', e.target.value)
    },
   }
  }
</script>

<style lang='scss'>
.std-input {
  padding: 1.25rem 0;
  text-indent: 2rem;
  text-transform: uppercase;
  outline: none;
  /*border: 1px solid $medium-text;*/
  margin: 0 0;
  /*margin-right: 1.4rem;*/
  display: inline-block;
  max-width: 100% !important;
  background-color: #ffffff;
  box-shadow: 0 17px 20px 0 rgba(0, 0, 0, 0.1), 0 4px 14px 0 rgba(0, 0, 0, 0.2);
  border: solid 2px #d1d1d1;
  &::placeholder {
    /*font-family: OpenSans;*/
  font-size: 14px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #000000;
  }

  &.reg{
    width: 28rem;
  }
  &.md {
    width: 31rem;
  }
  &.lg {
    width: 37rem;
  }
  &.max {
    width: 100%;
  }
  &.sm {
    width: 11.9rem;
  }

}
.field-cont {
  /*float: left;*/
}
.std-error {
  display: block;
}
.is-danger {
  border-color: red !important;
  color: red !important;
  /*&::placeholder {
    color: red;
  }*/
}
@media (max-width: 1024px) {
  .field-cont {
    width: 100%;
  }
}
</style>
