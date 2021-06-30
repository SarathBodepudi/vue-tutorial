const vm = Vue.createApp({
    // data function. Returns object
    data() {
        return {
            firstName: 'Sarath',
            middleName: '',
            lastName: 'Bodepudi',
            url: 'https://google.com',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age ++
        },
        updatedLastName(msg, event) {
            //event.preventDefault()
            //console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(msg, event) {
            console.log(msg)
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            console.log('Full name computed propery was called!')
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        }
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20
            }, 3000)       
        }
    }
}).mount('#app')

/*
Watchers are on the same level as the data and method properties.
Easy to implement.
Not used often.

What propertie can we watch? It can be any of the prperties on the Vue instance. This includes the data and computed properties.

The key name must correspond to any of the key names inside the instance.
Not obligated to return a value.

Useful when performing asynchronous tasks

This example reverts the age to its original default value after 3 seconds
*/