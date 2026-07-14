/**
 * ==================================================================
 *  Tailwind CSS Config — tailwind.config.js
 * ==================================================================
 *  Mở rộng theme với:
 *    - Font Plus Jakarta Sans
 *    - Custom colors phù hợp brand
 *    - Animation bounce-slow cho floating card
 *
 *  Khi thay đổi brand colors, UPDATE các giá trị bên dưới.
 * ==================================================================
 *
 * @type {import('tailwindcss').Config}
 */

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      /** Font family chính */
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      /** Bảng màu thương hiệu */
      colors: {
        cream: '#FDFBF7',         // Nền trang chính
        card: '#F4F1EA',          // Nền card phụ
        primary: '#1A1A1A',       // Text chính
        secondary: '#646464',     // Text phụ
        sage: '#4A5D4E',          // Xanh lá — accent chính
        'sage-hover': '#3B4A3E',  // Xanh lá — hover state
        terra: '#D98263',         // Đỏ đất — badge/sale
        border: 'rgba(26, 26, 26, 0.08)', // Viền mờ
      },
      /** Animation cho floating card */
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
