Vue.component('video-content', {
    props: ['video'],
    name: 'video-content',
    template:`
    <div>
        <b-card v-for="videos in video" :title="videos.title" class="mb-2 m-3">
            <p class="card-text">
                {{ videos.description }}
            </p>
            <video width="320" height="240" controls>
            <source :src="videos.url" type="video/mp4">
            <source :src="videos.url" type="video/ogg">
            Your browser does not support the video tag.
            </video>
            <p class="card-text">
                {{ videos.description }}
            </p>
            <div class="fb-share-button" 
                :data-href="videos.url" 
                data-layout="button_count">
            </div>
        </b-card>
    </div>`
})