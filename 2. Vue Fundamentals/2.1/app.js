Vue.createApp({
    // data function. Returns object
    data() {
        return {
            firstName: 'Sarath',
            lastName: 'Bodepudi'
        }
    }
}).mount('#app')

// One Vue instance cannot control multiple elements at once