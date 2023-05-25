<template>
  <div class="trading-mode ">
		<div class="trading-mode-info">
			<h1 class="trading-mode-info__title">Режим Торговли</h1>
			<span class="trading-mode-info__clue">
        <img src="../assets/img/info.fa9fff1e.svg" alt="#"/>
      </span>
		</div>

		<ul class="trading-mode__tabs">
			<li
				v-for="mode in tradingModeOptions"
				:key="mode.id"
				@click="currentTradingMode = mode.id"
				:class="currentTradingMode === mode.id ? 'active' : ''"
			>
				{{ mode.mode }}
			</li>
		</ul>

	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	emits: ['getTradingMode'],
  setup(_, {emit}) {
    const currentTradingMode = ref(1);

    const tradingModeOptions = [
      { id: 1, mode: 'простой' },
      { id: 2, mode: 'свой' }
    ];

    const currentTabMode = ref(tradingModeOptions[0].mode);

		watch(currentTradingMode, () => {
			const selectedTradingMode = tradingModeOptions.find(mode => mode.id === currentTradingMode.value);
			currentTabMode.value = selectedTradingMode.mode;

			emit('getTradingMode', selectedTradingMode.mode)
		})

    return {
			currentTradingMode,
			tradingModeOptions,
			currentTabMode
    };
  },
};
</script>

<style scoped>
.trading-mode {
  color: #fff;
	margin: 0 0 2rem 0;
}

.trading-mode-info {
	display: flex;
	flex-direction: row;

}

.trading-mode-info__title {
  display: flex;
  flex-direction: row;
	margin: 1.5rem 0;
	font-size: 1rem;
}

.trading-mode-info__clue {
	display: flex;
	align-items: center;
}

.trading-mode-info__clue img {
	width: 0.9rem;
	height: 0.9rem;
	margin-left: 0.7rem;
	filter: invert(63%) sepia(9%) saturate(481%) hue-rotate(199deg) brightness(95%) contrast(82%);
}

.trading-mode__tabs {
  display: flex;
  flex-direction: row;
}

.trading-mode__tabs li {
  margin: 1rem 1rem 1rem 0 ;
  list-style-type: none;
  cursor: pointer;
	padding-bottom: 0.4rem;
}

.active {
	cursor: pointer;
	border-bottom: 3px solid #d3822d;
}

hr {
  margin: 2rem 0;
}
</style>
