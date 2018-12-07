const app = new Vue ({
    el: '#app',
    data: {
        contentShow: {
            image: [],
            video: []
        }
    },
    methods: {
        setContent () {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/media/'
            })
            .then(({data}) => {
                this.contentShow = data.media
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