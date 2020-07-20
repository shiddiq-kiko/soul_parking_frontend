<template>
  <div class="bar-chart">
    <div class="card">
      <div class="card-body" style="text-align: left;">
        <h5 class="card-title">Metode Pembayaran</h5>
      </div>

      <div class="doughnut-chart">
        <div class="card-img-bottom">
          <PieChart
            :data="PieChartData"
            :options="{
              legend: {
                display: true,
                position: 'left',
                align: 'start',
                labels: {
                  boxwidth: 1,
                  fontSize: 8,
                },
              },
              maintainAspectRatio: false,
            }"
            style="max-height: 150px;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from './Pie.js'

export default {
  components: {
    PieChart,
  },
  data() {
    return {
      PieChartData: {
        labels: ['ORGANIC SEARCH', 'DIRECT', 'SOCIAL', 'OTHER'],
        datasets: [
          {
            label: 'Trafik Situs',
            backgroundColor: ['#b37700', '#a64dff', '#ffb31a', 'GRAY'],
            data: [10, 25, 56, 10],
          },
        ],
      },
    }
  },
}
</script>

<style scoped>
.doughnut-chart {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 32vw;
  min-width: 250px;
  max-height: 225px;
  height: 20vw;
  min-height: 225px;
}
</style>
