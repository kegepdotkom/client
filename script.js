const app = new Vue ({
    el: '#app',
    data: {
        isLogin: 'false',
        contentShow: {
            image: [],
            video: []
        },
        loginUser: {
            username: '',
            imgUrl: ''
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
        },
        loginMethod (data) {
            this.isLogin = 'true'
            this.loginUser.username = data.username
            this.loginUser.imgUrl = data.imgUrl
            localStorage.setItem('token', data.token)
        }
    },
    created () {
        this.setContent()
    }
})