<template>
  <div>
    <span>total = {{ count }}</span>
  </div>
</template>
<script>
export default {
  name: "TotalCounter",
  computed: {
    count() { return this.$store.getters[`totalCounter/count`] }
  }
}
</script>

<style scoped>
</style>
