<template>
  <div class="bar-chart">
    <div class="card-group">
      <Methods />
      <Trafic />
    </div>
  </div>
</template>

<script>
import Methods from './Methods.vue'
import Trafic from './Trafic.vue'
export default {
  name: 'Pie',
  components: { Methods, Trafic },
}
</script>

<style scoped>
.bar-chart {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  /* width: 80%; */
  margin: 10px;
}
</style>
