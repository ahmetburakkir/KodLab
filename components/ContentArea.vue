<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <!-- Ürün Kartı 1 -->
    <div class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src="/images/kotlin.jpg"
        alt="Ürün Resmi"
        class="w-full h-auto object-contain rounded"
      />
  
      <!-- Ürün Başlığı -->
      <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">
        KOTLIN ile PRATİK UYGULAMALAR
      </h2>
  
      <!-- Fiyat -->
      <p class="text-xl font-bold text-blue-600 mt-2">₺250,00</p>
  
      <!-- Miktar ve Sepete Ekle Butonu -->
      <div class="mt-4 flex items-center space-x-4">
        <!-- Miktar Seçimi -->
        <input
          v-model="quantity"
          type="number"
          min="1"
          class="w-16 text-center border border-gray-300 rounded"
        />
  
        <!-- Sepete Ekle Butonu -->
        <button
          @click="addToCart"
          class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center"
        >
          <span class="material-icons-outlined mr-2"></span>
          Sepete Ekle
        </button>
      </div>
    </div>

    <!-- Ürün Kartı 2 -->
    <div class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src="/images/robotik-kodlama.jpg"
        alt="Ürün Resmi"
        class="w-full h-auto object-contain rounded"
      />
  
      <!-- Ürün Başlığı -->
      <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">
        ROBOTİK KODLAMA
      </h2>
  
      <!-- Fiyat -->
      <p class="text-xl font-bold text-blue-600 mt-2">₺200,00</p>
  
      <!-- Miktar ve Sepete Ekle Butonu -->
      <div class="mt-4 flex items-center space-x-4">
        <!-- Miktar Seçimi -->
        <input
          v-model="quantity"
          type="number"
          min="1"
          class="w-16 text-center border border-gray-300 rounded"
        />
  
        <!-- Sepete Ekle Butonu -->
        <button
          @click="addToCart"
          class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center"
        >
          <span class="material-icons-outlined mr-2"></span>
          Sepete Ekle
        </button>
      </div>
    </div>

    <!-- Ürün Kartı 3 -->
    <div class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src="/images/yapay-zeka.jpg"
        alt="Ürün Resmi"
        class="w-full h-auto object-contain rounded"
      />
  
      <!-- Ürün Başlığı -->
      <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">
        YAPAY ZEKA
      </h2>
  
      <!-- Fiyat -->
      <p class="text-xl font-bold text-blue-600 mt-2">₺250,00</p>
  
      <!-- Miktar ve Sepete Ekle Butonu -->
      <div class="mt-4 flex items-center space-x-4">
        <!-- Miktar Seçimi -->
        <input
          v-model="quantity"
          type="number"
          min="1"
          class="w-16 text-center border border-gray-300 rounded"
        />
  
        <!-- Sepete Ekle Butonu -->
        <button
          @click="addToCart"
          class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center"
        >
          <span class="material-icons-outlined mr-2"></span>
          Sepete Ekle
        </button>
      </div>
    </div>

    <!-- Ürün Kartı 4 -->
    <div class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src="/images/dijital-sanatlar.jpg"
        alt="Ürün Resmi"
        class="w-full h-auto object-contain rounded"
      />
  
      <!-- Ürün Başlığı -->
      <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">
        DİJİTAL SANATLAR
      </h2>
  
      <!-- Fiyat -->
      <p class="text-xl font-bold text-blue-600 mt-2">₺270,00</p>
  
      <!-- Miktar ve Sepete Ekle Butonu -->
      <div class="mt-4 flex items-center space-x-4">
        <!-- Miktar Seçimi -->
        <input
          v-model="quantity"
          type="number"
          min="1"
          class="w-16 text-center border border-gray-300 rounded"
        />
  
        <!-- Sepete Ekle Butonu -->
        <button
          @click="addToCart"
          class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center"
        >
          <span class="material-icons-outlined mr-2"></span>
          Sepete Ekle
        </button>
      </div>
    </div>

    <!-- Ürün Kartı 5 -->
    <div class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src="/images/kotlin.jpg"
        alt="Ürün Resmi"
        class="w-full h-auto object-contain rounded"
      />
  
      <!-- Ürün Başlığı -->
      <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">
        KOTLIN ile PRATİK UYGULAMALAR
      </h2>
  
      <!-- Fiyat -->
      <p class="text-xl font-bold text-blue-600 mt-2">₺250,00</p>
  
      <!-- Miktar ve Sepete Ekle Butonu -->
      <div class="mt-4 flex items-center space-x-4">
        <!-- Miktar Seçimi -->
        <input
          v-model="quantity"
          type="number"
          min="1"
          class="w-16 text-center border border-gray-300 rounded"
        />
  
        <!-- Sepete Ekle Butonu -->
        <button
          @click="addToCart"
          class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center"
        >
          <span class="material-icons-outlined mr-2"></span>
          Sepete Ekle
        </button>
      </div>
    </div>

    <!-- Ürün Kartı 6 -->
    <div class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src="/images/python.jpg"
        alt="Ürün Resmi"
        class="w-full h-auto object-contain rounded"
      />
  
      <!-- Ürün Başlığı -->
      <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">
        PYTHON
      </h2>
  
      <!-- Fiyat -->
      <p class="text-xl font-bold text-blue-600 mt-2">₺250,00</p>
  
      <!-- Miktar ve Sepete Ekle Butonu -->
      <div class="mt-4 flex items-center space-x-4">
        <!-- Miktar Seçimi -->
        <input
          v-model="quantity"
          type="number"
          min="1"
          class="w-16 text-center border border-gray-300 rounded"
        />
  
        <!-- Sepete Ekle Butonu -->
        <button
          @click="addToCart"
          class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center"
        >
          <span class="material-icons-outlined mr-2"></span>
          Sepete Ekle
        </button>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  import { ref } from 'vue';
  
  // Miktar için reactive değişken
  const quantity = ref(1);
  
  // Sepete ekle fonksiyonu
  const addToCart = () => {
    alert(`Sepete ${quantity.value} adet ürün eklendi!`);
  };
  </script>
  
  <style scoped>
  /* Görsel hover efekti */
  img {
    transition: transform 0.3s ease-in-out;
  }
  img:hover {
    transform: scale(1.05);
  }
  
  /* Buton hover efekti */
  button:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Ürün başlığı taşması için '...' */
  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>
  