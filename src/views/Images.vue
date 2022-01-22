<template>
  <div class="container">
    <div class="notification p-3 m-3">
      <h3 class="is-size-4 has-text-centered">PixaBay Images</h3>
      <h3 v-if="images.length === 0 && !loading" class="is-size-5 my-2 has-text-danger has-text-centered">No Images Found on Pixabay</h3>
      <b-loading :is-full-page="isFullPage" v-model="loading" :can-cancel="true"></b-loading>
      <b-field class="my-2">
        <b-input
          placeholder="Search Images on Pixalbay..."
          class="is-primary is-rounded"
          type="search"
          icon="search"
          icon-clickable
          v-model="term"
          @icon-click="getPixabayImages"
        >
        </b-input>
      </b-field>
      <b-carousel>
        <b-carousel-item v-for="(carousel, i) in images" :key="i">
          <div class="card my-3">
            <div class="card-image">
              <figure class="image is-16by9">
                <img
                  :src="carousel.webformatURL"
                  alt="Placeholder image"
                  height="400"
                  width="700"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">
                    Uploaded by <span>{{ carousel.user }}</span>
                  </p>
                  <b-button
                    type="is-danger"
                    icon-left="eye"
                    class="mr-2"
                  >
                    {{ carousel.views }} Views
                  </b-button>
                  <b-button
                    type="is-primary"
                    icon-left="thumbs-up"
                    class="mr-2"
                  >
                    {{ carousel.likes }} Likes
                  </b-button>
                  <b-button
                    type="is-dark"
                    icon-left="comments"
                    class="mr-2"
                  >
                    {{ carousel.comments }} Comments
                  </b-button>
                  <b-button type="is-success" class="mr-2" icon-left="tags">
                    {{ carousel.tags }}
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </b-carousel-item>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImagesPage",
  data() {
    return {
      images: [],
      term: "nature",
      isFullPage: true,
      loading: false,
    };
  },
  mounted() {
    this.getPixabayImages();
  },
  methods: {
    getPixabayImages() {
      this.loading = true;
      // Flickr requests
      fetch(
        `https://pixabay.com/api/?key=${process.env.VUE_APP_PIXABAY_API_KEY}&q=${this.term}&image_type=photo&pretty=true`
      )
        .then((res) => res.json())
        .then((data) => {
          this.images = data.hits;
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

