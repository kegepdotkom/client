Vue.component('login-component', {
    data: function () {
        return {
            username: '',
            password: ''
        }
    },
    template:`
    <form @submit.prevent="login">
        <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" v-model="username" placeholder="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>
        <div class="row">
            <div class="col">
                <button type="submit" class="btn btn-light">Submit</button>
            </div>            
        </div>
    </form>
    `,
    methods: {
        login () {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/users/login',
                data: {
                    username: this.username,
                    password: this.password
                }
            })
            .then(({data}) => {
                this.$emit('logged-in', data);      
            })
            .catch(err => {
                console.log(err)
                alert('error mba di login')
            })
        }
    }
})
