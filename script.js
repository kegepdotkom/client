const app = new Vue ({
    el: '#app',
    data: {
        isLogin: false,
        registerForm: false,
        contentShow: {
            image: [],
            video: []
        },
        loginUser: {
            username: '',
            imgUrl: ''
        },
        selected: 'image'
    },
    methods: {
        setContent () {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/media/'
            })
            .then(({data}) => {
                data.media.forEach(e => {
                    if(e.type === 'image/jpeg') {
                        this.contentShow.image.push(e)
                    } else {
                        this.contentShow.video.push(e)
                    }
                });
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

        },
        showFormRegister () {
            this.registerForm = true
            this.isLogin=true
        },
        hideFormRegister(){
            this.registerForm = false
            this.isLogin=false
        },
        refreshContent () {
            this.setContent()
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