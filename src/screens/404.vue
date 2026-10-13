<template>
  <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--color-dark)] px-4 text-slate-100 selection:bg-[var(--color-primary)]/30 selection:text-[var(--color-light)] sm:px-6 lg:px-8">
    <!-- Ambient Glows -->
    <div class="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-primary)]/15 blur-[120px]" />
    <div class="pointer-events-none absolute bottom-10 right-1/4 -z-10 h-72 w-72 rounded-full bg-[var(--color-tertiary)]/10 blur-[100px]" />

    <div class="mx-auto flex max-w-lg flex-col items-center text-center">
      <!-- Icon Badge -->
      <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 text-3xl shadow-lg shadow-[var(--color-primary)]/10">
        📸
      </div>
      <span class="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
        Error 404
      </span>
      <h1 class="mt-2 bg-gradient-to-b from-white via-slate-100 to-slate-500 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent sm:text-8xl">
        404
      </h1>

      <h2 class="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
        Page Not Found
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-slate-400">
        Looks like this photo link or gallery page has vanished into thin air or been moved to a different folder.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3.5">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition hover:bg-[var(--color-primary)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-dark)]"
        >
          <span>Return Home</span>
          <span>→</span>
        </router-link>

        <router-link
          to="/pixabay"
          class="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
        >
          Browse Gallery
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'NotFoundPage'
});
</script>