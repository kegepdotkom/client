Vue.component('show-content', {
    props: ['media'],
    template:`
        <div>
            <b-card v-for="medias in media" :title="medias.title"
                v-bind:img-src="medias.url"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 m-3">
                <p class="card-text">
                    {{ medias.description }}
                </p>
                <div class="fb-share-button" 
                    :data-href="medias.url" 
                    data-layout="button_count">
                </div>
            </b-card>
        </div>
    `
})