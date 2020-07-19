<template>
  <div class="bar-chart">
    <div class="card-group">
      <Pemasukan />
      <Membership />
    </div>
  </div>
</template>

<script>
import Pemasukan from './Bar/Pemasukan.vue'
import Membership from './Bar/Membership.vue'

export default {
  name: 'Bar',
  components: { Pemasukan, Membership },
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
