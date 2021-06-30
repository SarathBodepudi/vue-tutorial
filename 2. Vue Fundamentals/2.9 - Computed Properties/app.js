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
    }
}).mount('#app')

/*
You need to be aware that you cannot pass data onto the function. If you need to pass on data, 
then you may want to consider using a method that does it for computed properties.

Thanks to that magic computed properties can seriously boost the performance of your application with little work.

https://v3.vuejs.org/guide/computed.html

*/