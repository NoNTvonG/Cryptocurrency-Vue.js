<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			searchText: '',
		}
	},
	computed: {
		...mapGetters('assets', ['searchStatus']),
	},
	methods: {
    fetchSingleCoin(coinName) {
      if(coinName && !this.searchStatus) {
        const formatName = coinName
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/\./g, '-')
        this.$store.dispatch('assets/fetchAssetSingle', formatName)
        this.$store.dispatch('assets/changeSearchStatus', true)
      } else {
        this.$store.dispatch('assets/fetchAssets')
        this.$store.dispatch('assets/changeSearchStatus', false)
        this.searchText = ''
      }
		},
	},
}
</script>

<template>
	<v-text-field
		v-model="searchText"
		label="Search crypto coins..."
		single-line
		hide-details
    @keydown.enter="fetchSingleCoin(searchText)"
	></v-text-field>
	<v-btn icon @click="fetchSingleCoin(searchText)">
		<v-icon v-if="!searchStatus">mdi-magnify</v-icon>
    <v-icon v-else>mdi-close</v-icon>
	</v-btn>
</template>


<!-- @:keyup.enter="fetchSingleCoin" -->