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
			{ id: 1, name: 'Binance Future', icon: 'URL' },
			{ id: 1, name: 'OKX', icon: 'URL' },
			{ id: 1, name: 'Huobi', icon: 'URL' },
			{ id: 1, name: 'Coinbase', icon: 'URL' }
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

<style scoped>
  .exchanges {
    width: 640px;
    margin: 2rem 0 0 0 ;
    color: #fff;
  }

  .exchanges-info {
    display: flex;
    flex-direction: row;
    margin: 1.5rem 0;
  }

  .exchanges-info__title {
    font-size: 1rem;
  }

	.exchanges-select__label {
		font-size: 0.7rem;
		color: #8b8fa3;
	}

  .exchanges-info__clue {
    display: flex;
    align-items: center;
  }

  .exchanges-info__clue img {
    width: 0.9rem;
    height: 0.9rem;
		margin-left: 0.7rem;
		filter: invert(63%) sepia(9%) saturate(481%) hue-rotate(199deg) brightness(95%) contrast(82%);
  }

  .exchanges-select {
    display: flex;
    flex-direction: column;
  }

  .exchanges-select select {
    height: 40px;
    padding: 5px 10px;
    margin: 1rem 0 0 0;
    background-color: #292c35;
    color: #fff;
    border: none;
		border-radius: 5px;
  }

  .exchanges-select select:focus {
    border: none;
  }

  .exchanges-select option {
		font-size: 1rem;
		margin: 1rem;
  }

  hr {
    margin: 2rem 0;
		opacity: 0.15;
	}
</style>
