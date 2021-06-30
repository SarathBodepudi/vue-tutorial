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
        updatedLastName(event) {
            this.lastName = event.target.value
        }
    }
}).mount('#app')

/*
Passing a parameter called 'event' to the updatedLastName function.
When Vue calls the function, it will automatically pass the event object to your function.

The event object is a typical javascript object

The target object refers to the element that is currently triggering the event.
*/