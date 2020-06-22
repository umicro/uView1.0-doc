<template>
	<div>
		<!-- <picker v-model="value" @input="updateValue"></picker> -->
		<dropdown>
			<template  slot="btn">Click me</template >
			<template  slot="body">
				<picker v-model="value" @input="updateValue"></picker>
			</template >
		</dropdown>
	</div>
</template>

<script>
import {Chrome} from 'vue-color';
import dropdown from 'bp-vuejs-dropdown';
export default {
	components: {
		'picker': Chrome,
		dropdown
	},
	props: {
		color: {
			type: String,
			default: '#000000'
		}
	},
	data() {
		return {
			value: this.color
		};
	},
	methods: {
		updateValue(e) {
			console.log(e);
		}
	}
};
</script>

<style></style>
