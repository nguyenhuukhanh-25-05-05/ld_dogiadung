<script setup>
</script>

<template>
  <section class="max-w-[1440px] mx-auto px-6 lg:px-16 pt-10 pb-20 lg:pt-16 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      <!-- Left -->
      <div class="lg:col-span-6">

        <h1 class="text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.08] tracking-[-0.02em] text-primary mb-6">
          Nâng tầm không gian sống với công nghệ tinh tế.
        </h1>

        <p class="text-[16px] leading-[1.6] text-secondary max-w-[500px] mb-8">
          Sự kết hợp hoàn hảo giữa thiết kế Bắc Âu tối giản và công nghệ gia dụng thông minh. Đưa sự tiện nghi, êm ái và thẩm mỹ tinh tế vào từng góc nhỏ trong ngôi nhà bạn.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap items-center gap-4">
          <a
            href="#products"
            class="h-[52px] px-8 rounded-full bg-sage hover:bg-sage-hover text-white font-medium text-[15px] flex items-center gap-2.5 transition-all shadow-[0_8px_20px_rgba(74,93,78,0.25)] hover:shadow-[0_10px_25px_rgba(74,93,78,0.35)] hover:-translate-y-0.5"
          >
            Khám phá bộ sưu tập
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a
            href="#about"
            class="h-[52px] px-7 rounded-full border border-primary/20 hover:border-primary text-primary font-medium text-[15px] transition-all bg-transparent hover:bg-primary/5 flex items-center"
          >
            Xem câu chuyện
          </a>
        </div>
      </div>

      <!-- Right -->
      <div class="lg:col-span-6 relative">
        <!-- Main Image -->
        <div class="w-full h-[480px] sm:h-[560px] lg:h-[640px] rounded-[24px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop"
            alt="Kitchen interior"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <!-- Floating Trust Card -->
        <div class="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-[16px] shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-white/60 flex items-center gap-4 max-w-[280px] sm:max-w-[310px] z-10 animate-bounce-slow">
          <div class="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold text-lg shrink-0">
            4.9
          </div>
          <div>
            <p class="text-[13px] font-bold text-[#F59E0B] mb-1">4.9</p>
            <p class="text-[13px] font-medium text-primary leading-tight">
              Hơn 10.000+ gia đình Việt tin dùng
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
