<template>
  <Disclosure
    as="nav"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolledDown
        ? 'bg-[var(--color-dark)]/80 backdrop-blur-md border-b border-slate-800 shadow-xl'
        : 'bg-[var(--color-dark)]/40 backdrop-blur-sm border-b border-slate-800/50'
    ]"
    v-slot="{ open, close }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18">
        <!-- Logo / Brand -->
        <router-link to="/" class="flex items-center gap-2.5 group">
          <div class="h-9 w-9 rounded-xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-tertiary)] flex items-center justify-center text-white shadow-lg shadow-[var(--color-primary)]/20 group-hover:scale-105 transition-transform duration-200">
            <span class="text-base">📸</span>
          </div>
          <span class="text-xl font-bold tracking-tight text-[var(--color-light)] group-hover:text-[var(--color-primary)] transition-colors">
            Softgenie Gallery
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            v-for="link in links"
            :key="link.name"
            :to="link.href"
            class="px-3.5 py-2 text-sm font-medium text-slate-300 rounded-lg transition-colors hover:text-white hover:bg-slate-800/60"
            active-class="text-white bg-slate-800/80 font-semibold"
          >
            {{ link.name }}
          </router-link>

          <!-- Categories Mega Menu Dropdown -->
          <div
            class="relative"
            @mouseenter="showMegaMenu = true"
            @mouseleave="showMegaMenu = false"
          >
            <button
              type="button"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:text-white hover:bg-slate-800/60"
              :class="{ 'text-white bg-slate-800/60': showMegaMenu }"
              aria-expanded="showMegaMenu"
            >
              <span>Categories</span>
              <svg
                class="w-4 h-4 text-slate-400 transition-transform duration-200"
                :class="{ 'rotate-180 text-white': showMegaMenu }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Floating Mega Menu Panel -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div
                v-if="showMegaMenu"
                class="absolute right-0 top-full pt-3 w-[720px] z-50"
              >
                <div class="rounded-2xl border border-slate-800 bg-[var(--color-dark)]/95 p-6 shadow-2xl backdrop-blur-xl">
                  <div class="grid grid-cols-3 gap-6">
                    <!-- Column 1 -->
                    <div>
                      <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Nature & Outdoors
                      </h4>
                      <ul class="space-y-2">
                        <li>
                          <router-link
                            to="/pixabay?q=nature"
                            class="group block p-2 rounded-lg transition hover:bg-slate-800/60"
                          >
                            <div class="text-sm font-medium text-slate-200 group-hover:text-[var(--color-primary)]">
                              Landscapes & Forests
                            </div>
                            <div class="text-xs text-slate-500">Scenic views & greenery</div>
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="/pixabay?q=wildlife"
                            class="group block p-2 rounded-lg transition hover:bg-slate-800/60"
                          >
                            <div class="text-sm font-medium text-slate-200 group-hover:text-[var(--color-primary)]">
                              Wildlife & Animals
                            </div>
                            <div class="text-xs text-slate-500">Animals in their habitat</div>
                          </router-link>
                        </li>
                      </ul>
                    </div>

                    <!-- Column 2 -->
                    <div>
                      <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Urban & Architecture
                      </h4>
                      <ul class="space-y-2">
                        <li>
                          <router-link
                            to="/pixabay?q=architecture"
                            class="group block p-2 rounded-lg transition hover:bg-slate-800/60"
                          >
                            <div class="text-sm font-medium text-slate-200 group-hover:text-[var(--color-primary)] flex items-center justify-between">
                              <span>Modern Buildings</span>
                            </div>
                            <div class="text-xs text-slate-500">Skyscrapers & interiors</div>
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="/pixabay?q=cyberpunk"
                            class="group block p-2 rounded-lg transition hover:bg-slate-800/60"
                          >
                            <div class="text-sm font-medium text-slate-200 group-hover:text-[var(--color-primary)] flex items-center justify-between">
                              <span>Cyberpunk & Neon</span>
                            </div>
                            <div class="text-xs text-slate-500">Futuristic cityscapes</div>
                          </router-link>
                        </li>
                      </ul>
                    </div>

                    <!-- Column 3 -->
                    <div>
                      <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Creative Tools
                      </h4>
                      <ul class="space-y-2">
                        <li>
                          <a
                            href="https://pixabay.com/api/docs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group block p-2 rounded-lg transition hover:bg-slate-800/60"
                          >
                            <div class="text-sm font-medium text-slate-200 group-hover:text-[var(--color-primary)] flex items-center justify-between">
                              <span>Pixabay API</span>
                              <span class="text-xs text-slate-500">↗</span>
                            </div>
                            <div class="text-xs text-slate-500">Official documentation</div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://vuejs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group block p-2 rounded-lg transition hover:bg-slate-800/60"
                          >
                            <div class="text-sm font-medium text-slate-200 group-hover:text-[var(--color-primary)] flex items-center justify-between">
                              <span>Vue 3 Docs</span>
                              <span class="text-xs text-slate-500">↗</span>
                            </div>
                            <div class="text-xs text-slate-500">Progressive framework</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Menu Hamburger Button -->
        <div class="flex md:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
          >
            <span class="sr-only">Toggle Navigation</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Panel -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <DisclosurePanel class="md:hidden border-b border-slate-800 bg-[var(--color-dark)]/95 px-4 pt-3 pb-6 space-y-4 backdrop-blur-xl">
        <div class="space-y-1">
          <router-link
            v-for="link in links"
            :key="link.name"
            :to="link.href"
            class="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            active-class="text-white bg-slate-800/80 font-semibold"
            @click="close"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Mobile Categories Section -->
        <div class="pt-4 border-t border-slate-800">
          <p class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Quick Categories
          </p>
          <div class="mt-2 space-y-1">
            <router-link
              to="/pixabay?q=nature"
              class="block px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800"
              @click="close"
            >
              Landscapes & Nature
            </router-link>
            <router-link
              to="/pixabay?q=architecture"
              class="block px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800"
              @click="close"
            >
              Architecture & Buildings
            </router-link>
            <a
              href="https://pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
              class="block px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800"
            >
              Pixabay Official ↗
            </a>
          </div>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';

const isScrolledDown = ref(false);
const showMegaMenu = ref(false);

const links = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/pixabay' },
  { name: 'About', href: '/about' },
];

const checkScroll = () => {
  isScrolledDown.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>