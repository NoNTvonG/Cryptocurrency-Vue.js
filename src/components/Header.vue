<template>
	<v-app-bar app color="indigo-accent-3">
      <v-toolbar-title>Cryptocurrency</v-toolbar-title>
      <v-spacer></v-spacer>
      <CryptoSearch />
    </v-app-bar>
</template>

<script>
import CryptoSearch from './CryptoSearch.vue';

export default {
  components: {CryptoSearch},

	data() {
		return {
			search: '',
		}
	},
}
</script>
