Vue.component('register-user', {
    name :'register-user',
    data :function(){
      return {
        regusername:'',
        regemail   :'',
        regpassword:''
      }
    },
    template:`
        <form v-on:submit.prevent="register()" id="register">
            <div class="form-group">
                <label for="exampleInputUser">User Name</label>
                <input v-model="regusername" type="text" class="form-control" id="exampleInputUser"  placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">Let the World Know Who You Are</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmailregister">Email address</label>
                <input v-model="regemail" type="email" class="form-control" id="exampleInputEmailregister" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPasswordregeister">Password</label>
                <input v-model="regpassword" type="password" class="form-control" id="exampleInputPasswordregister" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-light">Submit</button>
        </form>
        `,
    methods:{
      register(){
        console.log('masuk sini=================')
        axios({
          method  :"POST",
          url     :'http://localhost:3000/users',
          data    : {
            username:this.regusername,
            email:this.regemail,
            password:this.regemail
          }
        })
        .then(function({data}){
            this.regusername ='',
            this.regemail    ='',
            this.regpassword =''
            console.log(data)
        })
        .catch(function(err){
            console.log(err)
        })
      }
    }
 })