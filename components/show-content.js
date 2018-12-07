Vue.component('show-content', {
    props: ['media'],
    template:`
        <b-card v-for="content in media" title="Card Title"
            img-src="content.url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
        </b-card>
    `
})