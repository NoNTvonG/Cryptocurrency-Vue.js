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
							parseFloat(item.priceUsd).toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
								minimumFractionDigits: 2,
							})
						}}
					</td>
					<td class="text-right">
						{{ parseFloat(item.changePercent24Hr).toFixed(2) }}
					</td>
					<td class="text-right">
						{{
							parseFloat(item.marketCapUsd).toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
							})
						}}
					</td>
					<td class="text-right">
						{{
							parseFloat(item.supply).toLocaleString('en-US', {
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
							})
						}}
						{{ item.symbol }}
					</td>
				</tr>
			</tbody>
		</template>
	</v-table>
</template>

<script>
export default {
	data() {
		return {
		}
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
			this.$store.dispatch('assets/fetchSingleAsset', formatName)
		},
		popupHandler() {
      this.$emit("popupHandler");
    }
	},
}
</script>

<style lang="scss" scoped>
.history-link{
	cursor: pointer;
}
</style>
