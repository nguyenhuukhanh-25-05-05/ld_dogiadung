<script setup>

const features = [
  { num: '01', title: 'Vật liệu sinh học', desc: 'Nhựa tái chế & Nhôm nguyên khối' },
  { num: '02', title: 'Tiết kiệm 50% điện', desc: 'Công nghệ Eco-Inverter tiên tiến' },
  { num: '03', title: 'Bảo hành 24 tháng', desc: 'Đổi mới trong 30 ngày đầu' },
  { num: '04', title: 'Thiết kế chuẩn Bắc Âu', desc: 'Đoạt giải Red Dot Design 2025' },
]
</script>

<template>
  <div class="max-w-[1440px] mx-auto px-6 lg:px-16 py-12 border-y border-border">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="f in features"
        :key="f.title"
        class="border-r-0 lg:border-r border-border last:border-r-0 pr-6 last:pr-0"
      >
        <p class="text-[13px] font-bold text-sage/60 tracking-widest mb-2">{{ f.num }}</p>
        <p class="text-[16px] font-semibold text-primary mb-1">{{ f.title }}</p>
        <p class="text-[14px] text-secondary leading-relaxed">{{ f.desc }}</p>
      </div>
    </div>
  </div>
</template>
