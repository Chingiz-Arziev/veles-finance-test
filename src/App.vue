<template>
  <div class="container">
		<Exchanges @getExchange="setSetting('exchange',$event)"/>
		<ApiKey @getApiKey="setSetting('apiKey',$event)"/>
		<Algorithm @getAlgorithmMode="setSetting('algorithm',$event)"/>
		<TradingPair @getTradingPair="setSetting('tradingPair',$event)"/>
		<Deposit @getDeposit="setSetting('deposit', $event)"/>
		<TradingMode @getTradingMode="setSetting('tradingMode',$event)"/>
		<CreateBot :dataSettings="botSettings"/>
	</div>
</template>

<script>
import { ref } from 'vue';

import Exchanges from "@/components/Exchanges.vue";
import ApiKey from '@/components/ApiKey.vue'
import Algorithm from "@/components/Algorithm.vue";
import TradingPair from "@/components/TradingPair.vue";
import Deposit from "@/components/Deposit.vue";
import TradingMode from "@/components/TradingMode.vue";
import CreateBot from "@/components/CreateBot.vue";

export default {
	components: {Exchanges, ApiKey, Algorithm, TradingPair, Deposit, TradingMode, CreateBot},

	setup() {
		const botSettings = ref({
			'exchange': '',
			'apiKey': '',
			'algorithm': '',
			'tradingPair': {
				"first": '',
				"second": ''
			},
			'deposit': '',
			'tradingMode': ''
		})

		const setSetting = (key, value) => {
			botSettings.value[key] = value
		}

		return {
			botSettings,
			setSetting,
		};
	}
};

</script>

