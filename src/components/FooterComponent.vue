<template>
  <footer class="border-t border-slate-800/80 bg-[var(--color-dark)] text-slate-400">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
        <!-- Brand & Description -->
        <div class="space-y-4 lg:col-span-2">
          <router-link to="/" class="flex items-center gap-2.5 group">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-tertiary)] text-lg text-white shadow-lg shadow-[var(--color-primary)]/20 group-hover:scale-105 transition-transform duration-200">
              📸
            </div>
            <span class="text-xl font-bold tracking-tight text-[var(--color-light)] group-hover:text-[var(--color-primary)] transition-colors">
              Softgenie Gallery
            </span>
          </router-link>
          <p class="max-w-sm text-sm leading-6 text-slate-400">
            A high-resolution photography discovery app powered by Pixabay, Vue 3, Vite, and Tailwind CSS.
          </p>
        </div>

        <!-- Column 1: Navigation -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-[var(--color-light)]">
            Explore
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <router-link to="/" class="transition hover:text-[var(--color-primary)]">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/pixabay" class="transition hover:text-[var(--color-primary)]">
                Gallery
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="transition hover:text-[var(--color-primary)]">
                About
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 2: Categories -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-[var(--color-light)]">
            Categories
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <router-link to="/pixabay?q=nature" class="transition hover:text-[var(--color-primary)]">
                Nature & Landscapes
              </router-link>
            </li>
            <li>
              <router-link to="/pixabay?q=architecture" class="transition hover:text-[var(--color-primary)]">
                Architecture
              </router-link>
            </li>
            <li>
              <router-link to="/pixabay?q=cyberpunk" class="transition hover:text-[var(--color-primary)]">
                Cyberpunk & Neon
              </router-link>
            </li>
            <li>
              <a href="https://pixabay.com/api/docs/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 transition hover:text-[var(--color-primary)]">
                Pixabay API <span class="text-xs text-slate-500">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Tech Stack -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-[var(--color-light)]">
            Built With
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="transition hover:text-[var(--color-primary)]">
                Vue 3
              </a>
            </li>
            <li>
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" class="transition hover:text-[var(--color-primary)]">
                Vite
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="transition hover:text-[var(--color-primary)]">
                Tailwind CSS
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="transition hover:text-[var(--color-primary)]">
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 sm:flex-row">
        <p class="text-xs text-slate-500">
          &copy; {{ currentYear }} Softgenie Gallery. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-xs text-slate-500">
          <router-link to="/privacy" class="transition hover:text-[var(--color-light)]">
            Privacy Policy
          </router-link>
          <router-link to="/terms" class="transition hover:text-[var(--color-light)]">
            Terms of Use
          </router-link>
          <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer" class="transition hover:text-[var(--color-light)]">
            Pixabay ↗
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>