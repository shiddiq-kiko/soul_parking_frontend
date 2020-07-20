<template>
  <div class="stats">
    <div v-for="stat in stats" :key="stat.name" class="card-group text-left">
      <b-card
        :footer="stat.change"
        footer-tag="small"
        footer-class="footer"
        footer-text-variant="muted"
        class="card"
      >
        <div class="card-body2">
          <div class="card-text">
            <b-card-title class="title">{{ stat.name }}</b-card-title>
            <b-card-text style="font-size: 20px;">{{
              stat.number.toLocaleString('id')
            }}</b-card-text>
          </div>
          <div class="image">
            <font-awesome-icon
              :icon="stat.image"
              style="opacity: 0.5; height: 80px; font-size: 40px;"
            />
          </div>
        </div>
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
  /* max-height: 100px; */
  /* margin: 10px; */
}

.card-group {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.card-body2 {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.card-image {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}

.card {
  width: 15.48vw;
  height: 150px;
  max-height: 150px;
  min-width: 175px;
  max-width: 220px;
}

.title {
  font-size: 15px;
}
b-card-text {
  margin-top: 10px;
}
</style>
