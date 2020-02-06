<template>
  <div class="home">
    <RadioBtnGroup
      v-model="currentSort"
      name="sort"
      valueProp="id"
      :variants="sortVariants"
    />

    <Spinner v-if="isLoading" class="spinner" />

    <Card v-else v-for="item in sortedItems" :key="item.id" with-hover-effect>
      <div class="order-card-header" slot="header">
        <span class="order-card-price"
          >{{ item.price.toLocaleString('ru') }} Р</span
        >
        <Logo class="order-card-logo" :airline="item.airline" />
      </div>

      <Flight
        v-for="(flight, index) in item.flights"
        v-bind="{ flight }"
        :key="index"
      />
    </Card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import RadioBtnGroup from '../components/RadioBtnGroup';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Logo from '../components/AirlineLogo';
import Flight from '../components/Flight';

const CHEAPEST = 'cheapest';
const FASTEST = 'fastest';

const SORT_VARIANTS = {
  [CHEAPEST]: {
    label: 'Самый дешевый',
    id: CHEAPEST,
    sort(items) {
      return items.sort((a, b) => a.price - b.price);
    },
  },
  [FASTEST]: {
    label: 'Самый быстрый',
    id: FASTEST,
    sort(items) {
      const flightsDuration = flights =>
        flights.reduce((acc, { duration }) => acc + duration, 0);
      return items.sort(
        (a, b) => flightsDuration(a.flights) - flightsDuration(b.flights)
      );
    },
  },
};

export default {
  name: 'home',
  components: {
    RadioBtnGroup,
    Card,
    Logo,
    Flight,
    Spinner,
  },
  data() {
    return {
      sortVariants: SORT_VARIANTS,
      currentSort: CHEAPEST,
      isLoading: true,
      items: [],
    };
  },
  computed: {
    sortedItems() {
      return SORT_VARIANTS[this.currentSort].sort(this.items);
    },
  },
  created() {
    this.getItems()
      .then(data => (this.items = data))
      .catch(console.error)
      .finally(() => (this.isLoading = false));
  },
  methods: {
    ...mapActions(['getItems']),
  },
};
</script>

<style lang="scss">
@import '../assets/scss/colors.scss';

.home {
  box-sizing: border-box;
  width: 100%;
  max-width: 540px;
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .spinner {
    margin-top: 60px;
  }

  .order-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .order-card-price {
    font-size: 24px;
    color: $primary;
  }
  .order-card-logo {
    height: 36px;
  }
}
</style>
