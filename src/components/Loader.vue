<template>
  <div
    :class="[
      'flex flex-col items-center justify-center gap-4 transition-all duration-300',
      fullScreen
        ? 'fixed inset-0 z-50 bg-[var(--color-dark)]/80 backdrop-blur-sm'
        : 'min-h-[250px] w-full py-12'
    ]"
  >
    <!-- Outer Glow & Dual-Ring Spinner -->
    <div class="relative flex items-center justify-center">
      <!-- Ambient Neon Glow using Primary Theme Color -->
      <div class="absolute h-16 w-16 rounded-full bg-[var(--color-primary)]/20 blur-xl animate-pulse" />

      <!-- Outer Background Track -->
      <div class="h-12 w-12 rounded-full border-2 border-slate-800" />

      <!-- Primary Rotating Ring -->
      <div class="absolute h-12 w-12 animate-spin rounded-full border-2 border-transparent border-t-[var(--color-primary)] border-r-[var(--color-primary)]/50" />

      <!-- Inner Counter-Rotating Accent using Tertiary Theme Color -->
      <div class="absolute h-6 w-6 animate-[spin_1.5s_linear_infinite_reverse] rounded-full border-2 border-transparent border-b-[var(--color-tertiary)]" />
    </div>

    <!-- Animated Status Label -->
    <p
      v-if="message"
      class="text-xs font-semibold tracking-wider text-slate-400 uppercase animate-pulse"
    >
      {{ message }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: "Loading...",
  },
  fullScreen: {
    type: Boolean,
    default: false,
  },
});
</script>