const vm = Vue.createApp({
    // data function. Returns object
    data() {
        return {
            firstName: 'Sarath',
            lastName: 'Bodepudi'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')

/*
Look into index.html in '2.3 - Accessing Instance Data' 
html code has complex expressions. Its not ideal to write complex expressions inside the template.
Logic must be separated from the view.

This example illustrates accomplishing this using 'methods'.
'method' is set to an object. It works similarly to the 'data' object.
Functions outside of Vue instance will be ignored

You won't be be able to call them from your template if you will only use the functions defined inside the configuration object

NOTE:   TO ACCESS THE DATA FROM WITHIN THE INSTANCE, WE NEED TO USE 'this' KEYWORD.
        IF YOU ARE FAMILAR WITH ES6, YOU MAY BE TEMPTED TO USE ARROW FUNCTIONS. HOWEVER IT MAY CAUSE ERRORS IN YOUR APPLICATIONS.
        IT IS NOT RECOMMENDED TO USE ARROW FUNCTIONS BECAUSE OF THE PROXY MECHANISM IN THE VUE.
        ALWAYS RECOMMENDED TO USE REGULAR FUNCTIONS LIKE IN THE ABOVE EXAMPLE


*/