<template>
  <div class="container">
    <h1>Dashboard</h1>
    <div class="card-group">
      <Stats />
      <Chart />
    </div>
  </div>
</template>

<script>
import Stats from '../components/Dashboard/Stats.vue'
import Chart from '../components/Dashboard/Chart.vue'
export default {
  name: 'Dashboard',
  layout: 'default',
  components: {
    Stats,
    Chart,
  },
}
</script>

<style>
h1 {
  max-height: 100px;
  margin-top: 10px;
}
.container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flexbox;
  justify-content: start;
  flex-direction: row;
  /* align-items: center; */
  /* text-align: center; */
  flex-wrap: wrap;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.card-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
</style>
