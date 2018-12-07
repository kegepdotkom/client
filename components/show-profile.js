Vue.component('profileCard', {
    props: ['profile'],
    template: 
    `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="profile.url" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">profile.username</h5>
      <p class="card-text">Points</p>
      <a href="#" class="btn btn-primary">Log Out</a>
    </div>
  </div>`
})