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
            //event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
        }
    }
}).mount('#app')

/*
It is very common need to call event.preventDefault() or event.stopPropagation() inside event handlers. 
Although we can easily do this inside methods (as in lesson '2.7 - Passing on data with events'), it would be better if the methods can be purely about data logic rather than having to deal with DOM event details.

To address this problem, Vue provides event modifiers for v-on.

*/