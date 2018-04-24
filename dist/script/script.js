document.addEventListener('DOMContentLoaded', function () {
    Vue.use(vueResource);

    Vue.component('smb-form', {
        data: function () {
            return {
                data: {

                },
                arrays: this.multiples
            }
        },
        props: ['multiples'],
        created: function () {
            this.arrays.forEach(value => {
                this.data[value] = [];
            });
        },
        methods: {
            submit: function () {
                this.$http.post(JSON.stringify(this.data))
                    .then(function (response) {
                        // success
                    console.log(response)
                    }, function (response) {
                        // error
                    });
            }
        }
    });

    var app = new Vue({
        el: "#app",
        data: {

        }
    });
})