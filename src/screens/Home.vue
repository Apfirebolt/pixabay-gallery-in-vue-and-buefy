<template>
  <main class="min-h-screen bg-slate-100 flex items-center justify-center p-4">
    <section class="max-w-2xl bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
      <h1 class="text-4xl font-extrabold text-emerald-800 tracking-tight mb-4">
        Welcome to Dinosaur World
      </h1>
      
      <p class="text-slate-700 leading-relaxed mb-4">
        Discover the fascinating world of dinosaurs! Dive into their history, learn about their habitats, and
        uncover the secrets of their extinction.
      </p>
      
      <p class="text-slate-700 leading-relaxed mb-6">
        Whether you're a paleontology enthusiast or just curious, this is the perfect place to start your
        journey into the prehistoric era.
      </p>
      
      <button 
        type="button"
        @click="handleExplore"
        class="bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors duration-150"
      >
        Explore Now
      </button>
    </section>
  </main>
</template>

<script setup>
defineOptions({
  name: 'Homepage'
})

const handleExplore = () => {
  // Navigation or action logic goes here
}
</script>