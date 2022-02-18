<template>
  <div>
    <ol>
      <li v-for="(item, index) in info.bpi" :key="index">
        <div v-bind:to="item">{{ item }}</div>
      </li>
    </ol>
  </div>
  <button @click="currentprice">currentprice</button>
</template>

<script>
export default {
  name: "CurrentPrices",
  computed: {
    info() { return this.$store.getters[`currentPrices/info`]}
  },
  methods: {
    async currentprice(){
      await this.$store.dispatch(`currentPrices/currentprice`)
    }
  },
    data() {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'counter', path: '/counter' },
        { title: 'currentpirces', path: '/currentpirces' },
        { title: 'outputs', path: '/outputs' }
      ]
    }
  }
};
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