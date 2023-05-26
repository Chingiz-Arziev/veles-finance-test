<template>
	<div class="trading-pair">
		<div class="trading-pair-info">
			<h1 class="trading-pair-info__title">Торговая Пара</h1>
			<span class="trading-pair-info__clue">
        <img src="../assets/img/info.fa9fff1e.svg" alt="#"/>
      </span>
		</div>

		<div class="trading-pair-cards">
			<div class="trading-pair-cards description">
				<h3 class="trading-pair-cards description__title">Рекомендованные пары за 24 часа</h3>
				<p class="trading-pair-cards description__title__sub">По этим парам было больше всего прибыльных сделок за последние 24 часа.</p>
			</div>

			<div class="trading-pair-cards wrapper">
				<label
					v-for="pair in pairOptions"
					:key="pair.id"
					@click="currentPair = pair.id"
					:style="currentPair === pair.id ? {border: '1px solid #d3822d'} : ''"
					class="trading-pair-cards recommended-pairs"
				>
					<input type="radio">
					<img class="recommended-pairs__icon" src="" alt="">
					<span
						class="recommended-pairs__pair">{{pair.firstPair}} / </span>
					<span class="recommended-pairs__pair"> {{pair.secondPair}}</span>
				</label>
			</div>
		</div>

		<div class="trading-pair-own">
			<h3 class="trading-pair-own description__title">задать пару</h3>
			<div>

				<select
					v-model="firstPairOption"
					class="trading-pair-own select-pair"
				>
					<option>{{firstPairOption}}</option>
				</select>

				<select
					v-model="secondPairOption"
					class="trading-pair-own select-pair"
				>
					<option>{{secondPairOption}}</option>
				</select>

			</div>
		</div>

		<hr>
	</div>
</template>

<script>
import {ref, watch} from 'vue'
import {fetchCurrencies} from "../services/currencies";

export default {
	emits: ['getTradingPair'],
	setup(_, {emit}) {
		const data = fetchCurrencies()

		const currentPair = ref(1)

		const firstPairOption = ref('')
		const secondPairOption = ref('')

		watch(currentPair, () => {
			const selectedPair = pairOptions.find(pair => pair.id === currentPair.value)
			firstPairOption.value = selectedPair.firstPair
			secondPairOption.value = selectedPair.secondPair

			emit('getTradingPair', {
				'first': firstPairOption.value,
				'second': secondPairOption.value
			})
		})

		const pairOptions = [
			{id: 1, firstPair: 'ETH', secondPair: 'USDT'},
			{id: 2, firstPair: 'ATOM', secondPair: 'BNB'},
			{id: 3, firstPair: 'MATIC', secondPair: 'ADA'},
			{id: 4, firstPair: 'SOL', secondPair: 'APT'},
			{id: 5, firstPair: 'USDT', secondPair: 'USDC'},
			{id: 6, firstPair: 'ETH', secondPair: 'BTC'},
			{id: 7, firstPair: 'TRX', secondPair: 'FTX'},
			{id: 8, firstPair: 'DOGE', secondPair: 'BUSD'},
			{id: 9, firstPair: 'BUSD', secondPair: 'MGLN'},
			{id: 10, firstPair: 'ATOM', secondPair: 'MATIC'},
			{id: 11, firstPair: 'SAND', secondPair: 'MANA'},
			{id: 12, firstPair: 'EGLD', secondPair: 'ALGO'}
		]

		return {data, currentPair, firstPairOption, secondPairOption, pairOptions}
	}
}
</script>
