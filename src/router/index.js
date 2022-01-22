import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pixabay-images',
    name: 'Images',
    component: () => import(/* webpackChunkName: "pixabay-images" */ '../views/Images.vue')
  },
  {
    path: '/flickr-images',
    name: 'FlickrImages',
    component: () => import(/* webpackChunkName: "flickr-images" */ '../views/FlickrImages.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
