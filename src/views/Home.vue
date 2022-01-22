<template>
  <div class="home">
    <HeroComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    HeroComponent
  }
}
</script>
