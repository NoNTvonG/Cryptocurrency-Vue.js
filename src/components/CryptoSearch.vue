<script>
export default {
	data() {
		return {
			searchText: '',
      fetchStatus: false
		}
	},
	methods: {
    fetchSingleCoin(coinName) {
      if(coinName && !this.fetchStatus) {
        const formatName = coinName
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/\./g, '-')
        this.$store.dispatch('assets/fetchAssetSingle', formatName)
        this.fetchStatus = true
      } else {
        this.$store.dispatch('assets/fetchAssets')
        this.searchText = ''
        this.fetchStatus = false
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
		<v-icon v-if="!fetchStatus">mdi-magnify</v-icon>
    <v-icon v-else>mdi-close</v-icon>
	</v-btn>
</template>


<!-- @:keyup.enter="fetchSingleCoin" -->