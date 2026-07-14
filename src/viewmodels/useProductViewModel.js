import { ref } from 'vue'
import { Product } from '../models/product'
const defaultProducts = [
  new Product({
    id: 1,
    name: 'Máy pha cà phê Espresso Lumen Barista',
    price: 4890000,
    oldPrice: 5500000,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1637029967725-b64c1a7449ff?q=80&w=800&auto=format&fit=crop',
    category: 'Thiết bị pha chế',
  }),
  new Product({
    id: 2,
    name: 'Ấm đun nước kiểm soát nhiệt độ SmartKettle',
    price: 1850000,
    badge: '-15%',
    image: 'https://images.unsplash.com/photo-1594213114663-d94db9b17125?q=80&w=800&auto=format&fit=crop',
    category: 'Phòng bếp thông minh',
  }),
  new Product({
    id: 3,
    name: 'Xe mô tô phân khối lớn Adventurer 800',
    price: 58900000,
    badge: 'Mới',
    image: 'https://images.unsplash.com/photo-1602595214081-cad47de197a1?q=80&w=800&auto=format&fit=crop',
    category: 'Phương tiện di chuyển',
  }),
  new Product({
    id: 4,
    name: 'Bộ nồi gang tráng men gốm Pastel',
    price: 2450000,
    oldPrice: 2800000,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1518737003272-dac7c4760d5e?q=80&w=800&auto=format&fit=crop',
    category: 'Đồ dùng bàn ăn',
  }),
]

export function useProductViewModel() {
  const products = ref(defaultProducts)
  return { products }
}
