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
				<label
					v-for="algorithm in algorithmOptions"
					:key="algorithm.id"
					@click="currentAlgorithm = algorithm.id"
					:class="currentAlgorithm === algorithm.id ? 'long' : 'short'"
				>
					<input type="radio" name="algorithm">
					<div class="algorithm-tabs__tab">
						<span class="algorithm-tabs__label">{{algorithm.mode}}</span>
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

		const currentAlgorithm = ref(1);

		const algorithmOptions = [
			{id: 1, mode: 'Long'},
			{id: 2, mode: 'Short'},
		]

		const currentTabMode = ref(algorithmOptions[0].mode);

		watch(currentAlgorithm, () => {
			const selectedAlgorithm = algorithmOptions.find(mode => mode.id === currentAlgorithm.value)
			currentTabMode.value = selectedAlgorithm.mode

			emit('getAlgorithmMode', selectedAlgorithm.mode)
		})

		return {
			currentAlgorithm,
			algorithmOptions,
			currentTabMode
		}
	}
}
</script>

<style scoped>
.algorithm {
	margin: 2rem 0 0 0 ;
	color: #fff;
}

.algorithm-info {
	display: flex;
	flex-direction: row;
	margin: 1.5rem 0;
}

.algorithm-info__title {
	font-size: 1rem;
}

.algorithm-select__label {
	font-size: 0.7rem;
	color: #8b8fa3;
}

.algorithm-info__clue {
	display: flex;
	align-items: center;
}

.algorithm-info__clue img {
	width: 0.9rem;
	height: 0.9rem;
	margin-left: 0.7rem;
	filter: invert(63%) sepia(9%) saturate(481%) hue-rotate(199deg) brightness(95%) contrast(82%);
}

.algorithm-tabs {
	display: flex;
	flex-direction: row;
	margin-top: 1rem;
}

.algorithm-tabs input[type=radio] {
	display: none;
}

.algorithm-tabs__tab {
	width: 6rem;
	height: 2.6rem;
	border-radius: 0.6rem;
	border: 1px solid #1f2128;
	background: #1f2128;
	box-shadow: 0.1rem 0.1rem 0.2rem rgb(128 129 145 / 20%);
	cursor: pointer;
	margin: 0 2rem 0 0;

	display: flex;
	justify-content: center;
	align-items: center;
}

.algorithm-tabs__label {
	font-size: 0.7rem;
	text-align: center;
}

.long {
	color: green;
}

.short {
	color: red;
}

hr {
	margin: 2rem 0;
	opacity: 0.15;
}
</style>
