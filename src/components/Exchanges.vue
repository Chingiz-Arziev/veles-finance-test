<template>
  <div class="exchanges">
    <div class="exchanges-info">
      <h1 class="exchanges-info__title">Биржа</h1>
      <span class="exchanges-info__clue">
        <img src="../assets/img/info.fa9fff1e.svg" alt="#"/>
      </span>
    </div>

    <div class="exchanges-select">
      <label class="exchanges-select__label" for="">Биржа</label>
      <select v-model="selectedExchange">
        <option
					v-for="exchange in exchangeOptions"
					:key="exchange.id"
					:value="exchange.name"
				>
					{{exchange.name}}
				</option>
      </select>
    </div>
    <hr>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	emits: ['getExchange'],

	setup(_, { emit }) {
		const exchangeOptions = [
			{ id: 1, name: 'Binance Spot', icon: 'URL' },
			{ id: 2, name: 'Binance Future', icon: 'URL' },
			{ id: 3, name: 'OKX', icon: 'URL' },
			{ id: 4, name: 'Huobi', icon: 'URL' },
			{ id: 5, name: 'Coinbase', icon: 'URL' }
		];

		const selectedExchange = ref('');

		watch(selectedExchange, (newValue) => {
			emit('getExchange', newValue)
		})

		return {
			selectedExchange,
			exchangeOptions
		};
	}
};
</script>
