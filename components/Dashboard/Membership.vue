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
        <!-- <canvas id="membership" count="2" /> -->

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
import Charts from '../../assets/charts'
import BarChart from './Bar.js'

export default {
  name: 'Membership',
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
  components: { BarChart },
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
</style>
