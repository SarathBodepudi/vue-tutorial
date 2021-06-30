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
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
        updatedLastName(msg, event) {
            //event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(msg, event) {
            console.log(msg)
            this.middleName = event.target.value
        }
    }
}).mount('#app')

/*


*/