import { createWebHistory, createRouter } from "vue-router"
import HelloWorldScreen from '../components/helloworld/HelloWorldScreen.vue'
import OutputScreen from '../components/output/OutputScreen.vue'
import CounterScreen from '../components/counter/CounterScreen.vue'
import CurrentPrices from '../components/currentprices/CurrentPricesScreen.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorldScreen
        },
        {
           path: '/counter',
           name: 'CounterScreen',
           component: CounterScreen
        },
        {
          path: '/outputs',
          name: 'Output',
          component: OutputScreen
        },
        {
          path: '/currentprices',
          name: 'CurrentPrices',
          component: CurrentPrices
        }
      ],
  });

export default router