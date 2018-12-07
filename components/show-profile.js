Vue.component('profile-card', {
    name: "profile-card",
    props: ['profile'],
    template: 
    `<div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="profile.imgUrl" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{profile.username}}</h5>
      <p class="card-text">Points</p>
      <a href="#" class="btn btn-primary" @click="logout()">Log Out</a>
    </div>
  </div>`,
  methods: {
      logout () {
          this.$emit('logout')
      }
  }
})