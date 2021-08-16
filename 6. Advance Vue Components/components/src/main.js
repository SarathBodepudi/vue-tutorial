import { createApp } from 'vue'
import App from './App.vue'

const vm = createApp(App)
// Global component registry
//vm.component('Greeting', Greeting)
vm.mount('#app')
