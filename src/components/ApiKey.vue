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

