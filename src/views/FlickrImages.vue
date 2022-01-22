<template>
  <div class="container">
    <div class="notification p-3 m-3">
      <h3 class="is-size-4 has-text-centered">FlickR Images</h3>
      <h3 v-if="images.length === 0 && !loading" class="is-size-5 my-2 has-text-danger has-text-centered">No Images Found on Flickr</h3>
      <b-loading
        :is-full-page="isFullPage"
        v-model="loading"
        :can-cancel="true"
      ></b-loading>
      <b-field class="my-2">
        <b-input
          placeholder="Search Images on Pixalbay..."
          class="is-primary is-rounded"
          type="search"
          icon="search"
          icon-clickable
          v-model="term"
          @icon-click="getFlickrImages"
        >
        </b-input>
      </b-field>
      <div class="columns is-multiline">
        <div
          v-for="(image, index) in imageUrls"
          :key="index"
          class="column my-2 is-one-third-desktop is-one-fourth-widescreen"
        >
        <b-image
            :src="image.imageUrl"
            :alt="image.title"
            ratio="601by450"
        ></b-image>
         <h3 class="is-size-5 my-2 has-text-centered">{{ image.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlickrImagePage",
  data() {
    return {
      images: [],
      term: "nature",
      isFullPage: true,
      loading: false,
    };
  },
  computed: {
    imageUrls() {
      let urls = [];
      this.images &&
        this.images.map((image) => {
          let farm = image.farm;
          let server = image.server;
          let id = image.id;
          let secret = image.secret;
          let title = image.title;
          let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
          urls.push({ title, imageUrl: url });
        });
      return urls;
    },
  },
  mounted() {
    this.getFlickrImages();
  },
  methods: {
    getFlickrImages() {
      this.loading = true;
      // Flickr requests
      fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.VUE_APP_FLICKR_API_KEY}&tags=${this.term}&per_page=24&format=json&nojsoncallback=1`
      )
        .then((res) => res.json())
        .then((data) => {
          this.images = data.photos.photo;
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
