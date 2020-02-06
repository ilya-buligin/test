<template>
  <div class="radio-btn-group">
    <div v-for="item in variants" :key="`${name}_${item.id}`" class="radio-btn">
      <input
        type="radio"
        v-bind="{ name }"
        :id="`${name}_${item.id}`"
        :value="item[valueProp]"
        v-model="valueModel"
      />
      <label :for="`${name}_${item.id}`">{{ item[labelProp] }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioBtnGroup',
  props: {
    value: {
      type: null,
      default: null,
    },
    variants: {
      type: [Array, Object],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    valueProp: {
      type: String,
      default: 'value',
    },
    labelProp: {
      type: String,
      default: 'label',
    },
  },
  computed: {
    valueModel: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      },
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/colors.scss';

$border-radius: 5px;

.radio-btn-group {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  border-radius: $border-radius;
  background: $elem-bg;
}

.radio-btn {
  flex: 1;

  [type='radio'] {
    opacity: 0;
    position: absolute;

    &:checked + label {
      background-color: $primary;
      color: $text-light;
    }
  }

  label {
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 50px;
    text-transform: uppercase;
    transition: all .3s;
  }

  &:first-child label {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }
  &:last-child label {
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}
</style>
