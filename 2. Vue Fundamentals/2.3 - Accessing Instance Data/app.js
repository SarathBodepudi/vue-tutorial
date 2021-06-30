const vm = Vue.createApp({
    // data function. Returns object
    data() {
        return {
            firstName: 'Sarath',
            lastName: 'Bodepudi'
        }
    }
}).mount('#app')


// setTimeout( () => {
//     vm.firstName = 'Charitha' // With proxy
//     //vm.$data.firstName = 'Nandhitha' // without proxy. This also works. See explanation in below comments
// }, 2000

// )

// Normally, data function will have to be accessed as vm.data.firstName. But Vue does some magic called 'proxying'
// So, we can directly access data element as vm.firstName

/*
    what is Proxy?

    - A figure that cane be used to represent the value of something in a calculation

    When Vue is initialized, it will store the data in a property called '$data'. Ex: vm.$data.firstName

    Vue simplifies the code you have to write by creating proxy getters and setters. They are merely functions that will take care of grabing and updating actual data
*/