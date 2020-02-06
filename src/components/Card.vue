<template>
  <div :class="['card', { 'card--with-hover-effect': withHoverEffect }]">
    <slot name="header" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    withHoverEffect: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.card {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &--with-hover-effect {
    transition: box-shadow 0.4s, transform 0.3s;
    &:hover {
      transform: scale(1.003);
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
