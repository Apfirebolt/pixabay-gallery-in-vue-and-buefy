<template>
  <footer class="border-t border-neutral-800 bg-neutral-950 text-neutral-400">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
        <!-- Brand & Description -->
        <div class="space-y-4 lg:col-span-2">
          <router-link to="/" class="flex items-center gap-2.5 group">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-lg text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              🦕
            </div>
            <span class="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Vue Dinosaurs
            </span>
          </router-link>
          <p class="max-w-sm text-sm leading-6 text-neutral-400">
            An interactive catalog exploring prehistoric life, built with Vue 3, Vite, and Tailwind CSS.
          </p>
        </div>

        <!-- Column 1: Navigation -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-neutral-200">
            Explore
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <router-link to="/" class="transition hover:text-white">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="transition hover:text-white">
                About
              </router-link>
            </li>
            <li>
              <router-link to="/dinosaur" class="transition hover:text-white">
                Dinosaurs
              </router-link>
            </li>
            <li>
              <router-link to="/composables" class="transition hover:text-white">
                Composables
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 2: Resources -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-neutral-200">
            Resources
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <router-link to="/docs/getting-started" class="transition hover:text-white">
                Getting Started
              </router-link>
            </li>
            <li>
              <router-link to="/docs/api" class="transition hover:text-white">
                API Reference
              </router-link>
            </li>
            <li>
              <a href="https://forum.vuejs.org" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 transition hover:text-white">
                Vue Forum <span class="text-xs text-neutral-500">↗</span>
              </a>
            </li>
            <li>
              <a href="https://pinia.vuejs.org" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 transition hover:text-white">
                Pinia <span class="text-xs text-neutral-500">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Tech Stack -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-neutral-200">
            Built With
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="transition hover:text-white">
                Vue 3
              </a>
            </li>
            <li>
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" class="transition hover:text-white">
                Vite
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="transition hover:text-white">
                Tailwind CSS
              </a>
            </li>
            <li>
              <a href="https://headlessui.com" target="_blank" rel="noopener noreferrer" class="transition hover:text-white">
                Headless UI
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800/80 pt-8 sm:flex-row">
        <p class="text-xs text-neutral-500">
          &copy; {{ currentYear }} Vue Dinosaurs. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-xs text-neutral-500">
          <router-link to="/privacy" class="transition hover:text-neutral-300">
            Privacy Policy
          </router-link>
          <router-link to="/terms" class="transition hover:text-neutral-300">
            Terms of Use
          </router-link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="transition hover:text-neutral-300">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>