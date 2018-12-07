Vue.component('profile-card', {
    name: "profile-card",
    props: ['profile'],
    data () {
        return {
            isImage: false,
            image: null,
            file: null,
            title: '',
            description: ''
        }
    },
    template: 
    `<div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="profile.imgUrl" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">{{profile.username}}</h5>
        <p class="card-text">Points</p>
        <a href="#" class="btn btn-primary" @click="isImage = true">Upload</a>
        <a href="#" class="btn btn-primary" @click="logout()">Log Out</a>
        </div>
        <div v-if="isImage" class="m-3">
            <label>Image/Video</label>
            <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..." @click="uploadFile"></b-form-file>
            <div class="mt-3">Selected file: {{file && file.name}}</div>   
            <label>Judul</label>
            <input type="text" class="form-control mb-2" v-model="title" placeholder="judulny amas bro">
            <label>Descrition</label>
            <input type="text" class="form-control mb-2" v-model="description" placeholder="description">
            <button @click="uploadFile" class="btn btn-light">Share dong</button>
        </div>
    </div>`,
  methods: {
      logout () {
          this.$emit('logout')
      },
      uploadFile () {
          let formData = new FormData()
          formData.append('image', this.file)
          formData.append('title', this.title)
          formData.append('description', this.description)

          axios.post('http://localhost:3000/media/', formData)
          .then(data => {
            this.isImage = false
            this.file = null
            this.description = ''
            alert('success share brader')
            this.$emit('set-content')
          })
          .catch(err => {
              console.log(err)
              alert('error mba di upload file')
          })
      }
  }
})