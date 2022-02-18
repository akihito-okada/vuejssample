import { createStore } from 'vuex';
import counter from './modules/counter'
import doubleCounter from './modules/doubleCounter'
import totalCounter from './modules/totalCounter'
import currentPrices from './modules/currentPrices'

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    counterA: counter,
    counterB: counter,
    doubleCounterA: doubleCounter,
    doubleCounterB: doubleCounter,
    totalCounter,
    currentPrices
  }
})

store.dispatch('totalCounter/setModules', ['counterA','counterB', 'doubleCounterA', 'doubleCounterB'])
export default store