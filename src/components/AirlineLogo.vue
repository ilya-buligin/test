<template>
  <img v-bind="{ src }" :alt="airline" />
</template>

<script>
import s7 from '../assets/img/logos/s7.png';

const LOGOS = { s7 };

export default {
  name: 'AirlineLogo',
  props: {
    airline: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      return LOGOS[this.airline];
    },
  },
};
</script>
