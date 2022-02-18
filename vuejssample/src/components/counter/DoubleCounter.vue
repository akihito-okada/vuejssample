<template>
  <div>
    <button @click="increment">increment {{ step }}</button>
    <span>total {{ count }}</span>
  </div>
</template>

<script>
  export default {
    name: "Counter",
    props: {
      module: {
        type: String,
        required: true,
      }
    },
    computed: {
      step() { return this.$store.getters[`${this.module}/step`]},
      count() { return this.$store.getters[`${this.module}/count`]}
    },
    methods: {
      increment() {
        this.$store.dispatch(`${this.module}/increment`)
      }
    }
  }
</script>

<style scoped>

</style>
