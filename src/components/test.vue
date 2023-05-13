<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>BTC hart</v-card-title>
        <v-card-text>
          <canvas ref="myChart" />
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  watch: {
    assetSingle: function () {
      this.renderChart();
    }
  },
  mounted() {
    this.renderChart();
  },
  computed: {
    ...mapGetters('assets', ['assetSingle']),
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.assetSingle.map(asset => asset.date),
          datasets: [{
            data: this.assetSingle.map(asset => asset.priceUsd),
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
</script>

<style>
canvas {
  max-width: 100%;
}
</style>