<script setup>
import { ref } from 'vue'
import { BRAND } from '../../config/brand.js'

const currentYear = new Date().getFullYear()

const email = ref('')

function handleNewsletter() {
  alert('Cảm ơn bạn đã đăng ký! Kiểm tra email để nhận voucher 15%.')
  email.value = ''
}
</script>

<template>
  <footer class="bg-primary text-cream pt-20 pb-12 mt-20">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
      <div>
        <h3 class="text-[32px] font-bold text-white mb-2">Tham gia cộng đồng sống tinh tế</h3>
        <p class="text-[15px] text-[#A0A0A0]">
          Nhận ngay voucher giảm 15% cho đơn hàng đầu tiên và cẩm nang decor nhà cửa mỗi tuần.
        </p>
      </div>
      <form class="w-full lg:w-auto flex-1 max-w-[480px] relative" @submit.prevent="handleNewsletter">
        <input
          v-model="email"
          type="email"
          placeholder="Nhập email của bạn..."
          required
          class="w-full h-[56px] pl-6 pr-36 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 text-[15px] transition-all"
        />
        <button
          type="submit"
          class="absolute right-1.5 top-1.5 h-[44px] px-6 rounded-full bg-sage hover:bg-sage-hover text-white font-medium text-[14px] transition-all flex items-center gap-1"
        >
          Đăng ký
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </form>
    </div>

    <div class="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
      <div class="md:col-span-2">
        <a href="#" class="text-[24px] font-bold tracking-widest text-white mb-4 block">{{ BRAND.LOGO_TEXT }}</a>
        <p class="text-[14px] text-[#A0A0A0] leading-relaxed mb-6 max-w-[320px]">
          {{ BRAND.NAME_DISPLAY }} cam kết mang đến những sản phẩm gia dụng bền vững, thân thiện với môi trường và thiết kế tinh tế chuẩn Bắc Âu.
        </p>
        <div class="flex items-center gap-4 text-[13px] text-[#A0A0A0]">
          <a :href="BRAND.SOCIAL.FACEBOOK" class="hover:text-white transition-colors">Facebook</a>
          <a :href="BRAND.SOCIAL.INSTAGRAM" class="hover:text-white transition-colors">Instagram</a>
          <a :href="BRAND.SOCIAL.PINTEREST" class="hover:text-white transition-colors">Pinterest</a>
          <a :href="BRAND.SOCIAL.YOUTUBE" class="hover:text-white transition-colors">Youtube</a>
        </div>
      </div>

      <div>
        <h4 class="text-[15px] font-semibold text-white uppercase tracking-wider mb-5">Sản phẩm</h4>
        <div class="flex flex-col gap-3.5 text-[14px] text-[#A0A0A0]">
          <a href="#" class="hover:text-white transition-colors">Phòng bếp thông minh</a>
          <a href="#" class="hover:text-white transition-colors">Thiết bị pha chế</a>
          <a href="#" class="hover:text-white transition-colors">Máy lọc & Hút bụi</a>
          <a href="#" class="hover:text-white transition-colors">Đồ dùng bàn ăn</a>
          <a href="#" class="hover:text-white transition-colors">Hàng mới về</a>
        </div>
      </div>

      <div>
        <h4 class="text-[15px] font-semibold text-white uppercase tracking-wider mb-5">Về chúng tôi</h4>
        <div class="flex flex-col gap-3.5 text-[14px] text-[#A0A0A0]">
          <a href="#" class="hover:text-white transition-colors">Câu chuyện thương hiệu</a>
          <a href="#" class="hover:text-white transition-colors">Triết lý bền vững</a>
          <a href="#" class="hover:text-white transition-colors">Báo chí & Truyền thông</a>
          <a href="#" class="hover:text-white transition-colors">Tuyển dụng</a>
          <a href="#" class="hover:text-white transition-colors">Showroom</a>
        </div>
      </div>

      <div>
        <h4 class="text-[15px] font-semibold text-white uppercase tracking-wider mb-5">Hỗ trợ khách hàng</h4>
        <div class="flex flex-col gap-3.5 text-[14px] text-[#A0A0A0]">
          <a href="#" class="hover:text-white transition-colors">Trung tâm bảo hành</a>
          <a href="#" class="hover:text-white transition-colors">Chính sách đổi trả 30 ngày</a>
          <a href="#" class="hover:text-white transition-colors">Tra cứu đơn hàng</a>
          <a href="#" class="hover:text-white transition-colors">Câu hỏi thường gặp</a>
          <a href="#" class="hover:text-white transition-colors">Liên hệ trực tiếp</a>
        </div>
      </div>
    </div>

    <div class="max-w-[1440px] mx-auto px-6 lg:px-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#707070] gap-4">
      <p>&copy; {{ currentYear }} {{ BRAND.NAME_DISPLAY }} All rights reserved. Designed with precision.</p>
      <div class="flex items-center gap-3">
        <span class="px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium tracking-wide">Visa</span>
        <span class="px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium tracking-wide">Mastercard</span>
        <span class="px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium tracking-wide">Apple Pay</span>
        <span class="px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium tracking-wide">Momo</span>
      </div>
    </div>
  </footer>
</template>
