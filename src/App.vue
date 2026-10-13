<template>
  <div class="bg-secondary-300">
    <HeaderComponent />
    <main class="mt-12 sm:mt-6">
      <router-view v-slot="{ Component }">
        <transition name="slide-left" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<style>
.slide-left-enter-active {
  animation: slide-left-in 0.5s ease-out;
}
.slide-left-leave-active {
  animation: slide-left-out 0.5s ease-in;
}
@keyframes slide-left-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-left-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>