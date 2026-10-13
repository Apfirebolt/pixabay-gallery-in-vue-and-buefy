<template>
  <div class="min-h-screen bg-[var(--color-dark)] text-slate-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-12">
      <!-- Header Hero -->
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider border border-[var(--color-primary)]/20">
          <span>✨ Our Mission</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          About Pixabay Gallery
        </h1>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          Discovering and sharing breathtaking high-resolution photography through secure backend proxies, open APIs, and modern Vue 3 architecture.
        </p>
      </div>

      <!-- Main Story Card -->
      <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
        <h2 class="text-2xl font-bold text-white mb-4">
          Empowering Visual Discovery
        </h2>
        <div class="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
          <p>
            Welcome to <span class="font-semibold text-white">Pixabay Gallery</span>! We built this platform to make searching, exploring, and bookmarking professional-grade photography seamless, fast, and visually immersive.
          </p>
          <p>
            Powered by the Pixabay API with server-side proxy protection, our gallery ensures secure key handling while delivering lightning-fast vector and keyword filtering right in your browser.
          </p>
          <p>
            Thank you for exploring with us. Dive into our gallery, test out our interactive carousels, and enjoy high-res imagery for your next creative project!
          </p>
        </div>
      </div>

      <!-- Quick Action Navigation -->
      <div class="text-center pt-4">
        <router-link
          to="/pixabay"
          class="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 px-6 py-3 text-sm font-semibold text-white transition-colors shadow-lg shadow-[var(--color-primary)]/20"
        >
          <span>Explore Photo Gallery</span>
          <span>→</span>
        </router-link>
      </div>
    </div>
  </div>
</template>