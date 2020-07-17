<template>
  <div class="stats">
    <div v-for="stat in stats" :key="stat.name" class="card-group text-left">
      <b-card
        :footer="stat.change"
        footer-tag="small"
        footer-class="footer"
        footer-text-variant="muted"
      >
        <div class="card-body2">
          <div class="card-text">
            <b-card-title class="title">{{ stat.name }}</b-card-title>
            <b-card-text style="font-size: 30px;">
              {{ stat.number.toLocaleString('id') }}</b-card-text
            >
          </div>
          <div class="image">
            <font-awesome-icon
              :icon="stat.image"
              style="opacity: 0.5; height: 100px; font-size: 50px;"
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
  flex-wrap: wrap;
  /* max-height: 100px; */
  margin: 10px;
}

.card-group {
  margin: 10px;
  width: 200px;
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
.title {
  font-size: medium;
}

.footer {
  background-color: rgba(255, 157, 0, 0.253);
}

b-card-text {
  margin-top: 10px;
}
</style>
