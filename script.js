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
            console.log(data)
            this.isLogin = 'true'
            this.loginUser.username = data.username
            this.loginUser.imgUrl = data.imgUrl
            localStorage.setItem('token', data.token)
        },
        logout () {
            localStorage.clear()
            this.loginUser.username = ''
            this.loginUser.imgUrl = ''
            this.isLogin = false

        }
    },
    created () {
        this.setContent()
        let token = localStorage.getItem('token')
        if(!token) {
            this.isLogin = false
        } else {
            this.isLogin = true
        }
    }
})