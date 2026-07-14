<script setup>
import { ref } from 'vue'
import { BRAND } from '../../config/brand.js'

const isMenuOpen = ref(false)

const navItems = [
  { label: 'Phòng bếp', href: '#products' },
  { label: 'Phòng khách', href: '#products' },
  { label: 'Thiết bị thông minh', href: '#products' },
  { label: 'Về chúng tôi', href: '#about' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-border transition-all">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-16 h-[76px] flex items-center justify-between">
      <a href="#" class="text-[20px] font-bold tracking-[0.18em] text-primary uppercase leading-[1.15] max-w-[70px] sm:max-w-none sm:whitespace-nowrap">
        {{ BRAND.LOGO_TEXT }}
      </a>

      <nav class="hidden lg:flex items-center gap-10 text-[15px] font-medium text-secondary">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="relative hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-5">
        <span class="text-primary cursor-pointer hover:text-sage transition-colors" aria-label="Tìm kiếm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
        <span class="text-primary cursor-pointer hover:text-sage transition-colors hidden sm:block" aria-label="Tài khoản">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </span>
        <div class="relative cursor-pointer text-primary hover:text-sage transition-colors" aria-label="Giỏ hàng">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span class="w-[18px] h-[18px] bg-terra text-white text-[11px] font-bold rounded-full flex items-center justify-center absolute -top-1.5 -right-2">3</span>
        </div>

        <button class="lg:hidden ml-2" @click="isMenuOpen = !isMenuOpen" aria-label="Menu">
          <svg v-if="!isMenuOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0 scale-95"
    >
      <nav v-if="isMenuOpen" class="lg:hidden px-6 pb-6 space-y-3 bg-cream border-t border-border">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="block py-2 text-[15px] font-medium text-secondary hover:text-primary transition-colors"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
    </transition>
  </header>
</template>
