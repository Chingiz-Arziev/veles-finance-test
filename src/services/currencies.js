import axios from "axios";

const API = 'https://api.coingecko.com/api/v3/coins/list'

export const fetchCurrencies = async () => {
  try {
    const response = await axios.get(API)
    return await response.data
  }
  catch (error) {
    console.log('проблема на сервере: ', error)
  }
}
