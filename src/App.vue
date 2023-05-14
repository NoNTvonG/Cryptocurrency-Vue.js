<script>
import Header from '@/components/Header.vue'
import CryptocurrencyListVue from '@/components/CryptocurrencyList.vue'
import ChartPopupVue from '@/components/ChartPopup.vue'
import PaginationVue from '@/components/Pagination.vue'
import { mapGetters } from 'vuex'

export default {
	components: {
		Header,
		CryptocurrencyListVue,
		ChartPopupVue,
		PaginationVue
	},

	data() {
		return {
      	isChartPopupVisible: false,
			}
	},
	computed: {
		...mapGetters('assets', ['assets']),
		...mapGetters('assets', ['searchStatus']),
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
						<PaginationVue v-if="!searchStatus" />
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>
	
<style></style>
