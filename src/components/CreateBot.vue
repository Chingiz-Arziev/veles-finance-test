<template>
	<button class="btn" @click="logData">Создать Бота</button>
</template>

<script>

export default {
	props: {
		dataSettings: {
			type: Object,
			required: true
		}
	},

	setup(props) {
		const logData = () => {
			console.log(props.dataSettings);
		};

		return {logData}
	}
}

</script>