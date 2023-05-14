<template>
	<v-table>
		<template v-slot:default>
			<thead>
				<tr>
					<th class="text-left">#</th>
					<th class="text-left">Name</th>
					<th class="text-right">Price</th>
					<th class="text-right">24h %</th>
					<th class="text-right">Market Cap</th>
					<th class="text-right">Circulating Supply</th>
					<th class="text-right"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in assets" :key="item.name">
					<td>{{ item.rank }}</td>
					<td>
						<a class="history-link" @click.prevent="fetchCoinData(item.name); popupHandler()">
							{{ item.name }} <strong>{{ item.symbol }}</strong>
						</a>
					</td>
					<td class="text-right">
						{{
							item.priceUsd ?
								formatPrice(item.priceUsd, 'currency', 4, 4)
							:
							"--"
						}}
					</td>
					<td class="text-right">
						{{ item.changePercent24Hr ?
								parseFloat(item.changePercent24Hr).toFixed(3)
							:
							"--"
						}}
					</td>
					<td class="text-right">
						{{
							item.marketCapUsd ?
								formatPrice(item.marketCapUsd, 'currency', 0, 0)
							:
								'--'
						}}
					</td>
					<td class="text-right">
						{{
							formatPrice(item.supply, 'decimal', 0, 0)
						}}
						{{ item.symbol }}
					</td>
					<td class="text-right">
						<v-btn icon size="x-small" variant="plain" @click="fetchCoinData(item.name); popupHandler()">
							<v-icon>mdi-chart-line</v-icon>
						</v-btn>
					</td>
				</tr>
			</tbody>
		</template>
	</v-table>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		assets: Array,
	},

	methods: {
		fetchCoinData(coinName) {
			const formatName = coinName
				.toLowerCase()
				.replace(/ /g, '-')
				.replace(/\./g, '-')
			this.$store.dispatch('assets/fetchAssetHistory', formatName)
		},
		popupHandler() {
      this.$emit("popupHandler");
    },
		formatPrice(price, style , minFractionDigits, maxFractionDigits, ) {
			const formatPrice = parseFloat(price).toLocaleString('en-US', {
				style: style,
				currency: 'USD',
				minimumFractionDigits: minFractionDigits,
				maximumFractionDigits: maxFractionDigits,
			})

			return formatPrice;
		}
	},
}
</script>

<style lang="scss" scoped>
.history-link{
	cursor: pointer;
}
</style>
