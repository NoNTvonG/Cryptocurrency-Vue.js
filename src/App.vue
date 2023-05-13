<script>
import Header from '@/components/Header.vue'
import CryptocurrencyListVue from '@/components/CryptocurrencyList.vue'
import ChartPopupVue from '@/components/ChartPopup.vue'
import test from '@/components/test.vue'
import { mapGetters } from 'vuex'

export default {
	components: {
		Header,
		CryptocurrencyListVue,
		ChartPopupVue,
		test
	},

	data() {
		return {
      	isChartPopupVisible: false,
			}
	},
	computed: {
		...mapGetters('assets', ['assets']),
	},
	created() {
		this.$store.dispatch('assets/fetchAssets')
	},
	methods: {
    popupHandler() {
      this.isChartPopupVisible = !this.isChartPopupVisible;
    },
  },
}
</script>

<template>
	<v-app>
		<Header />
		<v-main>
			<v-container>
				<v-row>
					<v-col col="12">
						<ChartPopupVue :popupStatus="isChartPopupVisible" @popupHandler="popupHandler" />
						<CryptocurrencyListVue :assets="assets" @popupHandler="popupHandler"/>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<style></style>
