<template>
  <div id="app">
    <Counter module="counterA"/>
    <Counter module="counterB"/>
    <DoubleCounter module="doubleCounterA"/>
    <DoubleCounter module="doubleCounterB"/>
    <TotalCounter/>
  </div>
</template>

<script>
import Counter from './Counter.vue'
import DoubleCounter from './DoubleCounter.vue'
import TotalCounter from './TotalCounter.vue'

export default {
  name: 'app',
  components: {
    Counter,
    DoubleCounter,
    TotalCounter
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>