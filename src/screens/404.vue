<template>
  <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-emerald-900 px-4 text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-100 sm:px-6 lg:px-8">
    <!-- Ambient Glows -->
    <div class="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
    <div class="pointer-events-none absolute bottom-10 right-1/4 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-[100px]" />

    <div class="mx-auto flex max-w-lg flex-col items-center text-center">
      <!-- Icon Badge -->
      <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-3xl shadow-lg shadow-emerald-500/10">
        🦕
      </div>
      <span class="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
        Error 404
      </span>
      <h1 class="mt-2 bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent sm:text-8xl">
        404
      </h1>

      <h2 class="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
        Extinct Page Not Found
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-neutral-100">
        Looks like this fossil record has been lost to time or moved to a different geological layer.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3.5">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
        >
          <span>Return Home</span>
          <span>→</span>
        </router-link>

        <router-link
          to="/dinosaur"
          class="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-2.5 text-sm font-medium text-neutral-300 backdrop-blur-sm transition hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
        >
          Browse Archive
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// NotFoundPage
</script>