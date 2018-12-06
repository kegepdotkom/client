const app = new Vue ({
    el: '#app',
    data: {
        contentShow: []
    },
    methods: {
        setContent () {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/media/'
            })
            .then(({data}) => {
                this.contentShow.push(data)
            })
            .catch(err => {
                console.log(err)
                alert('error mba')
            })
        }
    },
    created () {
        this.setContent()
    }
})