<template>
	<div class="algorithm">
		<div class="algorithm-info">
			<h1 class="algorithm-info__title">Алгоритм</h1>
			<span class="algorithm-info__clue">
        <img src="../assets/img/info.fa9fff1e.svg" alt="#"/>
      </span>
		</div>

		<div class="algorithm-select">
			<label class="algorithm-select__label" for="">Алгоритм</label>
			<div class="algorithm-tabs">

				<label>
					<input
						v-model="selectedAlgorithm"
						type="radio"
						name="algorithm"
						value="long"
						@click="changeColor('long')"
					>
					<div
						class="algorithm-tabs__tab"
						:style="longAlgorithm ? {border: '1px solid #6b6c79'} : ''"
					>
						<span
							:class="longAlgorithm ? 'long' : ''"
						>Long</span>
					</div>
				</label>

				<label>
					<input
						v-model="selectedAlgorithm"
						type="radio"
						name="algorithm"
						value="short"
						@click="changeColor('short')"
					>
					<div
						class="algorithm-tabs__tab"
						:style="shortAlgorithm ? {border: '1px solid #6b6c79'} : ''"
					>
						<span
							:class="shortAlgorithm ? 'short' : ''"
						>Short</span>
					</div>
				</label>

			</div>
		</div>

		<hr>
	</div>
</template>

<script>
import {ref, watch} from "vue";

export default {
	emits: ['getAlgorithmMode'],
	setup(_, {emit}) {

		const selectedAlgorithm = ref('')
		const longAlgorithm = ref('');
		const shortAlgorithm = ref('');

		const changeColor = (selectedInput) => {
			if (selectedInput === 'long') {
				longAlgorithm.value = 'green';
				shortAlgorithm.value = '';
			} else if (selectedInput === 'short') {
				longAlgorithm.value = '';
				shortAlgorithm.value = 'red';
			}
		};

		watch(selectedAlgorithm, () => {
			emit('getAlgorithmMode', selectedAlgorithm.value)
		})

		return {
			longAlgorithm,
			shortAlgorithm,
			changeColor,
			selectedAlgorithm
		};
	}
}
</script>
