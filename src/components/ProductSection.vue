<script setup>
import { useProductViewModel } from '../viewmodels/useProductViewModel'

const { products } = useProductViewModel()

function formatPrice(price) {
  return price.toLocaleString('vi-VN') + '₫'
}
</script>

<template>
  <section id="products" class="py-20 lg:py-28">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 max-w-[1440px] mx-auto px-6 lg:px-16">
      <h2 class="text-[32px] sm:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em] text-primary">
        Sản phẩm nổi bật
      </h2>
      <a href="#" class="text-[15px] font-semibold text-sage hover:underline flex items-center gap-1 mt-2 sm:mt-0">
        Xem tất cả sản phẩm
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-6 lg:px-16">
      <article
        v-for="product in products"
        :key="product.id"
        class="group flex flex-col cursor-pointer"
      >
        <div class="relative w-full aspect-[4/5] rounded-[20px] bg-card overflow-hidden mb-4">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          <span
            v-if="product.badge"
            class="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-terra text-white text-[11px] font-bold uppercase tracking-wider shadow-sm"
          >
            {{ product.badge }}
          </span>

          <button
            class="absolute bottom-4 left-4 right-4 h-[44px] bg-white/95 backdrop-blur-md text-primary font-semibold text-[14px] rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white"
          >
            + Thêm vào giỏ hàng
          </button>
        </div>

        <div>
          <p class="text-[12px] text-secondary uppercase tracking-wider mb-1 font-medium">
            {{ product.category }}
          </p>
          <h3 class="text-[17px] font-semibold text-primary group-hover:text-sage transition-colors line-clamp-1">
            {{ product.name }}
          </h3>
          <div class="flex items-center gap-2.5 mt-1.5">
            <span class="text-[16px] font-bold text-primary">{{ formatPrice(product.price) }}</span>
            <span
              v-if="product.oldPrice"
              class="text-[14px] text-secondary line-through font-normal"
            >
              {{ formatPrice(product.oldPrice) }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
