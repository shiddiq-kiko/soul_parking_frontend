<template>
  <div class="bar-chart">
    <div class="card">
      <div class="card-body" style="text-align: left;">
        <h5 class="card-title">Metode Pembayaran</h5>
      </div>

      <div class="doughnut-chart">
        <div class="card-img-bottom">
          <DoughnutChart
            :data="doughnutChartData"
            :options="{
              legend: {
                display: true,
                position: 'top',
                align: 'start',
                boxwidth: 10,
                fontSize: 10,
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
import DoughnutChart from './Doughnut.js'

export default {
  components: {
    DoughnutChart,
  },
  data() {
    return {
      doughnutChartData: {
        labels: ['CASH', 'GO-PAY', 'MEMBERSHIP'],
        datasets: [
          {
            label: 'Metode Pembayaran',
            backgroundColor: ['#b37700', '#a64dff', '#ffb31a'],
            data: [300, 300, 200],
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
