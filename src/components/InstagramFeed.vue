<script setup>
const images = [
  { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500&auto=format&fit=crop', user: '@minh.an.home' },
  { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=500&auto=format&fit=crop', user: '@thao.nguyen' },
  { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=500&auto=format&fit=crop', user: '@hieu.le' },
  { url: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=500&auto=format&fit=crop', user: '@lan.huynh' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop', user: '@tuan.nguyen' },
  { url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=500&auto=format&fit=crop', user: '@my.tran' },
]
</script>

<template>
  <section class="py-20 lg:py-28">
    <div class="text-center mb-12">
      <h2 class="text-[32px] sm:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em] text-primary">
        #LumenInRealLife
      </h2>
      <p class="text-secondary mt-2 mb-10 text-center text-[16px]">
        Chia sẻ không gian sống của bạn với tag @lumen.home để có cơ hội nhận voucher 2.000.000d
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-[1440px] mx-auto px-6 lg:px-16">
      <div
        v-for="img in images"
        :key="img.user"
        class="relative aspect-square rounded-[16px] overflow-hidden group cursor-pointer bg-card"
      >
        <img
          :src="img.url"
          :alt="img.user"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center backdrop-blur-[2px] z-10">
          <p class="text-[13px] font-medium">{{ img.user }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
