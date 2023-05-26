<template>
	<div class="deposit">
		<div class="deposit-info">
			<h1 class="deposit-info__title">Депозит</h1>
			<span class="deposit-info__clue">
        <img src="../assets/img/info.fa9fff1e.svg" alt="#"/>
      </span>
		</div>

		<div class="deposit-select">
			<label class="deposit-select__custom">
				<input
					v-model="currentDeposit"
					class="deposit-select__input"
					type="text"
				>
			</label>

			<div class="deposit-balance">
				<p class="deposit-balance__title">баланс</p>
				<p class="deposit-balance__currency">
					<span>
						0
					</span>
					usdt
				</p>
				<div class="deposit-balance__icon">
					<img src="" alt="">
				</div>
			</div>
		</div>

		<hr>

	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	emits: ['getDeposit'],

	setup(_, { emit }) {

		const currentDeposit = ref(0)

		watch(currentDeposit, () => {
			emit('getDeposit', Number(currentDeposit.value))
		})

		return {currentDeposit};
	}
};
</script>

<style scoped>

</style>
