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
  padding: 20px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &--with-hover-effect {
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
