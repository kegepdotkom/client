Vue.component('show-content', {
    props: ['media'],
    name: 'show-content',
    template:`
        <div>
            <b-card v-for="medias in media" title="Card Title"
                v-bind:img-src="medias.url"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 m-3">
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's medias.
                </p>
            </b-card>
        </div>
    `
})