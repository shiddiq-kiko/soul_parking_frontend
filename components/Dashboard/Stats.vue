<template>
  <div class="stats">
    <div v-for="stat in stats" :key="stat.name" class="card-group text-left">
      <b-card
        :footer="stat.change"
        :header="stat.name"
        footer-tag="small"
        header-tag="medium"
        header-bg-variant="white"
        header-border-variant="white"
      >
        <b-card-text style="font-size: 30px;">
          {{ stat.number.toLocaleString('id') }}
          <font-awesome-icon
            :icon="stat.image"
            style="margin-left: 10px; margin-right: 0; opacity: 0.5;"
          />
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import stats from '../../assets/stats.js'
export default {
  computed: {
    stats() {
      return stats.stats
    },
  },
}
</script>

<style scoped>
.stats {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 100px;
  margin: 10px;
}

.card-group {
  margin: 10px;
}

b-card-text {
  margin-top: 10px;
}
</style>
