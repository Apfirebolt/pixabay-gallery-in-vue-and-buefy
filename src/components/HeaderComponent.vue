<template>
  <Disclosure
    as="nav"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolledDown
        ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 shadow-xl'
        : 'bg-emerald-900 border-b border-transparent'
    ]"
    v-slot="{ open, close }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18">
        <!-- Logo / Brand -->
        <router-link to="/" class="flex items-center gap-2.5 group">
          <div class="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
            <span class="text-lg">🦕</span>
          </div>
          <span class="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            Pixabay Gallery
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            v-for="link in links"
            :key="link.name"
            :to="link.href"
            class="px-3.5 py-2 text-sm font-medium text-neutral-300 rounded-lg transition-colors hover:text-white hover:bg-neutral-800/60"
            active-class="text-white bg-neutral-800/80 font-semibold"
          >
            {{ link.name }}
          </router-link>

          <!-- Resources Mega Menu Dropdown -->
          <div
            class="relative"
            @mouseenter="showMegaMenu = true"
            @mouseleave="showMegaMenu = false"
          >
            <button
              type="button"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors text-neutral-300 hover:text-white hover:bg-neutral-800/60"
              :class="{ 'text-white bg-neutral-800/60': showMegaMenu }"
              aria-expanded="showMegaMenu"
            >
              <span>Resources</span>
              <svg
                class="w-4 h-4 text-neutral-400 transition-transform duration-200"
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
                <div class="rounded-2xl border border-neutral-800 bg-neutral-900/95 p-6 shadow-2xl backdrop-blur-xl">
                  <div class="grid grid-cols-3 gap-6">
                    <!-- Column 1 -->
                    <div>
                      <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                        Documentation
                      </h4>
                      <ul class="space-y-2">
                        <li>
                          <router-link
                            to="/docs/getting-started"
                            class="group block p-2 rounded-lg transition hover:bg-neutral-800/60"
                          >
                            <div class="text-sm font-medium text-neutral-200 group-hover:text-emerald-400">
                              Getting Started
                            </div>
                            <div class="text-xs text-neutral-500">Quick guides & dinosaur anatomy</div>
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="/docs/api"
                            class="group block p-2 rounded-lg transition hover:bg-neutral-800/60"
                          >
                            <div class="text-sm font-medium text-neutral-200 group-hover:text-emerald-400">
                              API Reference
                            </div>
                            <div class="text-xs text-neutral-500">Full schema & endpoints</div>
                          </router-link>
                        </li>
                      </ul>
                    </div>

                    <!-- Column 2 -->
                    <div>
                      <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                        Community
                      </h4>
                      <ul class="space-y-2">
                        <li>
                          <a
                            href="https://forum.vuejs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group block p-2 rounded-lg transition hover:bg-neutral-800/60"
                          >
                            <div class="text-sm font-medium text-neutral-200 group-hover:text-emerald-400 flex items-center justify-between">
                              <span>Forum</span>
                              <span class="text-xs text-neutral-500">↗</span>
                            </div>
                            <div class="text-xs text-neutral-500">Discussions & Q&A</div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://chat.vuejs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group block p-2 rounded-lg transition hover:bg-neutral-800/60"
                          >
                            <div class="text-sm font-medium text-neutral-200 group-hover:text-emerald-400 flex items-center justify-between">
                              <span>Discord Chat</span>
                              <span class="text-xs text-neutral-500">↗</span>
                            </div>
                            <div class="text-xs text-neutral-500">Real-time collaboration</div>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <!-- Column 3 -->
                    <div>
                      <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                        Ecosystem Tools
                      </h4>
                      <ul class="space-y-2">
                        <li>
                          <a
                            href="https://vitejs.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group block p-2 rounded-lg transition hover:bg-neutral-800/60"
                          >
                            <div class="text-sm font-medium text-neutral-200 group-hover:text-emerald-400 flex items-center justify-between">
                              <span>Vite</span>
                              <span class="text-xs text-neutral-500">↗</span>
                            </div>
                            <div class="text-xs text-neutral-500">Fast frontend tooling</div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://pinia.vuejs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group block p-2 rounded-lg transition hover:bg-neutral-800/60"
                          >
                            <div class="text-sm font-medium text-neutral-200 group-hover:text-emerald-400 flex items-center justify-between">
                              <span>Pinia</span>
                              <span class="text-xs text-neutral-500">↗</span>
                            </div>
                            <div class="text-xs text-neutral-500">Intuitive state management</div>
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
            class="inline-flex items-center justify-center p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
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
      <DisclosurePanel class="md:hidden border-b border-neutral-800 bg-neutral-900/95 px-4 pt-3 pb-6 space-y-4 backdrop-blur-xl">
        <div class="space-y-1">
          <router-link
            v-for="link in links"
            :key="link.name"
            :to="link.href"
            class="block px-3 py-2.5 rounded-lg text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800"
            active-class="text-white bg-neutral-800/80 font-semibold"
            @click="close"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Mobile Resources Section -->
        <div class="pt-4 border-t border-neutral-800">
          <p class="px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Resources & Ecosystem
          </p>
          <div class="mt-2 space-y-1">
            <router-link
              to="/docs/getting-started"
              class="block px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-neutral-800"
              @click="close"
            >
              Getting Started
            </router-link>
            <router-link
              to="/docs/api"
              class="block px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-neutral-800"
              @click="close"
            >
              API Reference
            </router-link>
            <a
              href="https://forum.vuejs.org"
              target="_blank"
              rel="noopener noreferrer"
              class="block px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              Vue Forum ↗
            </a>
            <a
              href="https://pinia.vuejs.org"
              target="_blank"
              rel="noopener noreferrer"
              class="block px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              Pinia State Store ↗
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
  { name: 'About', href: '/about' },
  { name: 'Pixabay', href: '/pixabay' },
  { name: 'Composables', href: '/composables' }
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