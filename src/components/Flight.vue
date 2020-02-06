<template>
  <div class="flight">
    <div class="flight-column">
      <span class="flight-column_label"
        >{{ flight.from }} – {{ flight.to }}</span
      >
      <span>{{ flight.time }}</span>
    </div>
    <div class="flight-column">
      <span class="flight-column_label">В пути</span>
      <span>{{ duration }}</span>
    </div>
    <div class="flight-column">
      <span class="flight-column_label">{{ transfersLabel }}</span>
      <span>{{ transfers }}</span>
    </div>
  </div>
</template>

<script>
import { declOfNum, formDur } from '../utils';

export default {
  name: 'Flight',
  props: {
    flight: {
      type: Object,
      required: true,
    },
  },
  computed: {
    transfersLabel() {
      const count = this.flight.transfers?.length || 0;

      if (count < 1) {
        return 'Без пересадок';
      }

      const label = declOfNum(count, ['пересадка', 'пересадки', 'пересадок']);
      return `${count} ${label}`;
    },
    transfers() {
      return (this.flight.transfers || []).join(' ,');
    },
    duration() {
      return formDur(this.flight.duration);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/colors.scss';

.flight {
  display: flex;
  margin-bottom: 10px;
}

.flight-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  &_label {
    color: $text-secondary;
    font-size: 12px;
  }
}

.flight-column:last-child {
  margin-right: unset;
}

@media screen and (max-width: 380px) {
  .flight {
    flex-direction: column;
    margin-bottom: 20px;
  }
  .flight-column {
    margin-right: unset;
    margin-bottom: 10px;
  }
  .flight-column:last-child {
    margin-bottom: unset;
  }
}
</style>
