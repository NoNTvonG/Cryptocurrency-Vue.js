<script>
export default {
	data() {
		return {
      page: ""
    }
	},
  methods: {
    fetchSingleCoin(limit) {
      this.$store.dispatch('assets/fetchAssets', limit)
		},
	},
}
</script>

<template>
	<v-row justify="center">
		<v-col cols="8">
			<v-container class="max-width">
				<v-pagination v-model="page" @click="fetchSingleCoin((page - 1 ) * 20)" class="my-4" :length="100"></v-pagination>
			</v-container>
		</v-col>
	</v-row>
</template>
