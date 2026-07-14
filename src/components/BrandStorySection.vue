<script setup>
import { BRAND } from '../config/brand.js'

// Cam kết
const checks = [
  'Thiết kế vượt thời gian',
  'Linh kiện thay thế sẵn có trong 10 năm',
  'Đóng gói 100% không rác thải nhựa',
]
</script>

<template>
  <section id="about" class="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 bg-card/50 my-12 rounded-[32px]">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left: Image collage -->
      <div class="lg:col-span-6">
        <div class="relative">
          <!-- Large -->
          <div class="w-[80%] h-[380px] rounded-[24px] overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556911073-38141963c9e0?q=80&w=800&auto=format&fit=crop"
              alt="Kitchen interior"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Small (overlapping) -->
          <div class="w-[60%] h-[260px] rounded-[20px] overflow-hidden shadow-xl border-4 border-cream -mt-24 ml-auto relative z-10">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
              alt="Product detail"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="lg:col-span-6 lg:pl-8">
        <span class="text-[12px] font-semibold text-sage uppercase tracking-[0.2em] mb-4 block">
          TRIẾT LÝ CỦA {{ BRAND.NAME }}
        </span>

        <h2 class="text-[36px] lg:text-[44px] font-bold text-primary leading-[1.15] mb-6">
          Chúng tôi tin rằng đồ gia dụng không chỉ để dùng, mà là để sống cùng.
        </h2>

        <p class="text-[16px] text-secondary mb-4 leading-relaxed">
          Trong một thế giới đầy rẫy đồ nhựa dùng một lần và các thiết bị nhanh hỏng, {{ BRAND.NAME_DISPLAY }} chọn một lối đi khác. Chúng tôi chế tác các thiết bị gia dụng bằng nhôm nguyên khối, gốm tự nhiên và nhựa sinh học tái chế.
        </p>

        <p class="text-[16px] text-secondary mb-8 leading-relaxed">
          Mỗi sản phẩm đều được thiết kế theo nguyên tắc 'Sửa chữa dễ dàng - Tuổi thọ thập kỷ', giúp giảm thiểu tối đa rác thải điện tử ra môi trường mà vẫn giữ trọn vẻ đẹp thẩm mỹ cho căn bếp hiện đại.
        </p>

        <!-- Checklist -->
        <div class="flex flex-col gap-3">
          <div
            v-for="item in checks"
            :key="item"
            class="flex items-center gap-3 text-[15px] font-medium text-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A5D4E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
