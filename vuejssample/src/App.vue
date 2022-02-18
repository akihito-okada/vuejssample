<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TabMenu from './components/tab/TabMenu.vue'
import { defineComponent } from 'vue'

</script>

<script>

export default defineComponent({
  setup(props) {
    console.log(props)
    return {
      message: "default Value",
      count: 4,
      rawHtml: '<span style="color: red">This should be red.</span>',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      isButtonDisabled: true,
      color: "#777777"
    }
  },
  components: {
    TabMenu
  }
})
</script>

<template>
  <div id="app">
    <TabMenu />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
