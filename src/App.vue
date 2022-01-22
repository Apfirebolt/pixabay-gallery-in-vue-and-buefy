<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style>
  @import './assets/styles.css';
</style>