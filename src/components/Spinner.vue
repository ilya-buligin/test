<template>
  <div class="spinner" :style="{ '--size': `${size}px` }"></div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    size: {
      type: Number,
      default: 30, // px
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/colors.scss';
@import '../assets/scss/animations.scss';

.spinner {
  width: var(--size);
  height: var(--size);
  border: solid 2px transparent;
  border-left-color: $primary;
  border-bottom-color: $primary;
  border-radius: 50%;
  animation: spin 0.5s linear infinite;
  filter: blur(0.5px);
}
</style>
