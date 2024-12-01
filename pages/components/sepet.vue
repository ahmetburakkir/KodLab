<template>
    <div class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <!-- Sepet Ürünleri -->
      <div v-if="cartItems.length > 0">
        <div v-for="(item, index) in cartItems" :key="index" class="mb-4">
          <!-- Ürün Bilgisi -->
          <img
            :src="item.image"
            alt="Ürün Resmi"
            class="w-full h-auto object-contain rounded"
          />
          <h2 class="mt-4 text-lg font-semibold text-gray-700">{{ item.name }}</h2>
          <p class="text-xl font-bold text-blue-600 mt-2">₺{{ item.price }}</p>
          <p class="mt-2 text-sm text-gray-600">Miktar: {{ item.quantity }}</p>
        </div>
  
        <!-- Sepeti Temizle ve Satın Al Butonları -->
        <div class="mt-4 flex space-x-4">
          <button
            @click="clearCart"
            class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
          >
            Sepeti Temizle
          </button>
          <button
            @click="buyNow"
            class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Satın Al
          </button>
        </div>
      </div>
  
      <!-- Sepet Boşsa -->
      <div v-else class="text-center text-gray-500">
        Sepetiniz şu an boş.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Sepetteki ürünlerin listesi
  const cartItems = ref([]);
  
  // URL'den gelen parametreleri alıyoruz
  const route = useRoute();
  const productName = route.query.name || 'Ürün Adı';
  const productPrice = route.query.price || 0;
  const productQuantity = route.query.quantity || 1;
  
  // Ürünü sepete ekliyoruz
  const addProductToCart = () => {
    const newItem = {
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      image: '/images/kotlin.jpg', // Görselin yolu
    };
  
    cartItems.value.push(newItem);
  };
  
  // Sepeti temizleme fonksiyonu
  const clearCart = () => {
    cartItems.value = [];
  };
  
  // Satın alma fonksiyonu (şu anda sadece alert veriyoruz)
  const buyNow = () => {
    alert("Satın alma işlemi gerçekleştirildi!");
  };
  
  // Sepeti otomatik olarak güncellemek için component mount'ta addProductToCart fonksiyonunu çağırıyoruz
  onMounted(addProductToCart);
  </script>
  
  <style scoped>
  /* Görsel hover efekti */
  img {
    transition: transform 0.3s ease-in-out;
  }
  img:hover {
    transform: scale(1.05);
  }
  
  /* Ürün başlığı taşması için '...' */
  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>
  