<template>
  <div class="bar-chart">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ Pemasukan.title }}</h5>
      </div>
      <div class="card-text">
        <h4>Rp {{ Pemasukan.total.toLocaleString('id') }}</h4>
        <h6>{{ Pemasukan.change }}</h6>
      </div>

      <div class="card-img-bottom">
        <BarChart
          :data="barChartData"
          :options="{ maintainAspectRatio: false }"
          style="max-height: 180px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from './Bar.js'
import Charts from '@/assets/charts'

export default {
  name: 'Pemasukan',
  components: { BarChart },
  data() {
    return {
      barChartData: {
        labels: Charts[0].labels,
        datasets: [
          {
            label: Charts[0].title,
            backgroundColor: '#bb99ff',
            data: Charts[0].data,
          },
        ],
      },
    }
  },
  computed: {
    Pemasukan() {
      return Charts[0]
    },
  },
}
</script>

<style scoped>
.card-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  /* margin-top: 5px; */
}

.card {
  width: 40vw;
  min-width: 250px;
}
h6 {
  font-size: small;
  color: green;
}
</style>
