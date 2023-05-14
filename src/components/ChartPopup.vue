<template>
	<v-dialog v-model="dialog" :style="{ width: '90%' }">
		<v-card>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="popupHandler()">
					Close window
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-actions>
			<v-card-text>
				<canvas ref="myChart" class="history-chart" />
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
	props: {
		popupStatus: {
			type: Boolean,
		},
	},
	data() {
		return {
			dialog: this.popupStatus,
		}
	},
	watch: {
		popupStatus: function (newVal) {
			this.dialog = newVal
		},
		assetHistory: function () {
			this.renderChart()
		},
	},
	computed: {
		...mapGetters('assets', ['assetHistory']),
	},

	mounted() {
		this.renderChart()
	},

	methods: {
		popupHandler() {
			this.$emit('popupHandler')
		},
		renderChart() {
			if (!this.$refs.myChart || !this.assetHistory) {
				return
			}

			const ctx = this.$refs.myChart.getContext('2d')
			const myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: this.assetHistory.map(asset => {
						const date = new Date(asset.date)
						const formattedDate = date.toLocaleDateString('uk-UA', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric',
						})
						return formattedDate
					}),
					datasets: [
						{
							pointRadius: 0,
							data: this.assetHistory.map(asset => asset.priceUsd),
							borderWidth: 1,
            	borderColor: 'rgb(61, 90, 254, 0.7)',
							fill: true,
							backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0,0,0,500);

              gradient.addColorStop(0, '#3D5AFE');
              gradient.addColorStop(1, 'transparent');

              return gradient;
            },
							tension: 0.1,
						},
					],
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					interaction: {
						mode: 'index',
						intersect: false,
					},

					plugins: {
						tooltip: {
							intersect: false,
							backgroundColor: '#29303b',
							titleFont: { size: 12 },
							bodyFont: { size: 12 },
							callbacks: {
								label: function (context) {
									var label = context.dataset.label || ''
									if (label) {
										label += ': '
									}
									if (context.parsed.y !== null) {
										label += new Intl.NumberFormat('en-US', {
											style: 'currency',
											currency: 'USD',
										}).format(context.parsed.y)
									}
									return label
								},
								title: function (context) {
									return context[0].label
								},
							},
						},
						legend: {
							display: false,
						},
					},
					scales: {
						x: {
							ticks: {
								font: {
									size: 12,
								},
							},
						},
						y: {
							ticks: {
								font: {
									size: 12,
								},
								callback: function (value, index, values) {
									return new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD',
									}).format(value)
								},
							},
							grid: {
								display: true,
								drawBorder: false,
								color: '#d8d8d8',
								borderDash: [5, 5],
								drawOnChartArea: false,
								drawTicks: false,
							},
						},
					},
				},
			})
		},
	},
}
</script>

<style lang="scss">
canvas {
	width: 100% !important;
	height: 100% !important;
}
</style>
