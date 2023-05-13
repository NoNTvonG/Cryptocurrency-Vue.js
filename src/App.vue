<script>
import Header from '@/components/Header.vue'
import CryptocurrencyListVue from '@/components/CryptocurrencyList.vue'
import { mapGetters } from 'vuex';

export default {
	components: {
		Header,
    CryptocurrencyListVue
	},

	data() {
		return {
		}
	},
  computed: {
    ...mapGetters('assets', ['assets']),
  },
  created() {
    this.$store.dispatch('assets/fetchAssets');
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
						<CryptocurrencyListVue :assets="assets" />
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<style >
</style>
