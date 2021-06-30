const vm = Vue.createApp({
    // data function. Returns object
    data() {
        return {
            firstName: 'Sarath',
            lastName: 'Bodepudi',
            url: 'https://google.com',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age ++
        },
        updatedLastName(msg, event) {
            event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
        }
    }
}).mount('#app')

/*


*/