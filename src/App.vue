<template>
  <div class="container">
		<Exchanges @getExchange="handleExchange"/>
		<ApiKey @getApiKey="handleApiKey"/>
		<Algorithm @getAlgorithmMode="handleAlgorithm"/>

		<TradingMode @getTradingMode="handleTradingMode"/>

		<button class="btn" @click="logData">Создать Бота</button>
	</div>
</template>

<script>
import { ref } from 'vue';

import Exchanges from "@/components/Exchanges.vue";
import ApiKey from '@/components/ApiKey.vue'
import Algorithm from "@/components/Algorithm.vue";
import TradingMode from "@/components/TradingMode.vue";

export default {
	components: {Exchanges, ApiKey, TradingMode, Algorithm},

	setup() {
		const settings = ref([])

		const handleExchange = (data) => {
			settings.value.push(data)
		};

		const handleApiKey = (data) => {
			settings.value.push(data)
		};

		const handleAlgorithm = (data) => {
			settings.value.push(data)
		};

		const handleTradingMode = (data) => {
			settings.value.push(data)
		};

		const logData = () => {
			console.log('ваши настройки:', settings.value);
		};

		return {
			settings,
			handleExchange,
			handleApiKey,
			handleTradingMode,
			handleAlgorithm,
			logData
		};
	}
};

</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	max-width: 650px;
}

.btn {
	padding: 1rem 0;
	margin: 2rem 0;
	background-color: #d3822d;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1rem;
}

.btn:hover {
	background-color: #d3822d;
	color: #fff;
	border: none;
	border-radius: 5px;
	font-size: 1rem;
	scale: 1.005;
	transition: 0.3s;
}
</style>
