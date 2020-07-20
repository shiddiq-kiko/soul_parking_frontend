<template>
  <div class="bar-chart">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ Member.title }}</h5>
      </div>
      <div class="card-text">
        <h4>{{ Member.total.toLocaleString('id') }}</h4>
        <h6>{{ Member.change }}</h6>
      </div>

      <div class="card-img-bottom">
        <BarChart
          :data="barChartData"
          :options="{
            scales: {
              yAxes: [
                {
                  ticks: {
                    stepSize: 300,
                    beginAtZero: true,
                  },
                },
              ],
            },
            responsive: false,
            maintainAspectRatio: false,
          }"
          :height="150"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from './Bar.js'
import Charts from '@/assets/charts'

export default {
  name: 'Membership',
  components: { BarChart },
  data() {
    return {
      barChartData: {
        labels: Charts[1].labels,
        datasets: [
          {
            label: Charts[1].title,
            backgroundColor: '#bb99ff',
            data: Charts[1].data,
          },
        ],
      },
    }
  },
  computed: {
    Member() {
      return Charts[1]
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

h6 {
  font-size: small;
  color: sienna;
}
.card {
  width: 32vw;
  min-width: 250px;
  max-height: 225px;
  height: 20vw;
  min-height: 225px;
}
</style>
