<template>
  <div class="apikey">
    <div class="apikey-info">
      <h1 class="apikey-info__title">API ключа</h1>
      <span class="apikey-info__clue">
        <img src="../assets/img/info.fa9fff1e.svg" alt="#"/>
      </span>
    </div>

    <div class="apikey-select">
      <label class="apikey-select__label" for="">API ключа</label>
      <select v-model="selectedApiKey">
        <option
					v-for="apiKey in apiKeysOption"
					:key="apiKey.id"
					:value="apiKey.name"
				>
					{{apiKey.name}}
				</option>
      </select>
    </div>

    <hr>
  </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
	emits: ['getApiKey'],

	setup(_, {emit}) {

		const apiKeysOption = [
			{id: 1, name: 'Binance Spot API Key'},
			{id: 2, name: 'Binance Futures API Key'},
		]

		const selectedApiKey = ref('')

		watch(selectedApiKey, (newValue) => {
			emit('getApiKey', newValue)
		})

		return {
			apiKeysOption,
			selectedApiKey
		}
	}
}
</script>

<style scoped>
.apikey {
  margin: 2rem 0 0 0 ;
  color: #fff;
}

.apikey-info {
  display: flex;
  flex-direction: row;
	margin: 1.5rem 0;
}

.apikey-info__title {
  font-size: 1rem;
}

.apikey-select__label {
	font-size: 0.7rem;
	color: #8b8fa3;
}

.apikey-info__clue {
  display: flex;
  align-items: center;
}

.apikey-info__clue img {
	width: 0.9rem;
	height: 0.9rem;
	margin-left: 0.7rem;
	filter: invert(63%) sepia(9%) saturate(481%) hue-rotate(199deg) brightness(95%) contrast(82%);
}

.apikey-select {
  display: flex;
  flex-direction: column;
}

.apikey-select select {
  height: 40px;
  padding: 5px 10px;
  margin: 1rem 0 0 0;
  background-color: #292c35;
  color: #fff;
  border: none;
	border-radius: 5px;
}

.apikey-select option {
	font-size: 1rem;
	margin: 1rem;
}

hr {
	margin: 2rem 0;
	opacity: 0.15;
}
</style>
