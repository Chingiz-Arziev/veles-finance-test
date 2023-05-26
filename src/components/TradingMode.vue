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