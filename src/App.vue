<!-- ===================================================================
  Root Component — App.vue
  ===================================================================
  Layout tổng: AnnouncementBar → StickyHeader → RouterView → Footer
  Toàn bộ giao diện sử dụng font Plus Jakarta Sans + màu nền cream.
  =================================================================== -->

<script setup>
import AnnouncementBar from './components/layout/AnnouncementBar.vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-cream font-jakarta">
    <AnnouncementBar />
    <AppHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
