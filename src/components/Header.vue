<template>
	<v-app-bar app color="primary">
      <v-toolbar-title>Cryptocurrency</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-app-bar>
</template>

<script>
export default {
	data() {
		return {
			search: '',
		}
	},
}
</script>
