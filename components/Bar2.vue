<template>
  <div>
    <nav class="bg-white border-b border-gray-300 shadow-sm">
      <ul class="flex items-center justify-center space-x-6 py-3">
        <!-- dinamik menü itemleri -->
        <li
          v-for="item in menuItems"
          :key="item.label"
          :class="[
            'flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded relative',
            currentMenu === item.label ? 'active' : ''
          ]"
          @click="selectMenu(item.label)"
        >
          <i :class="item.icon" class="text-lg"></i>
          <span class="text-sm font-semibold">{{ item.label }}</span>

          <!-- altçizgi -->
          <div
            v-if="currentMenu === item.label"
            class="absolute bottom-0 left-0 right-0 h-[3px] bg-red-500 rounded-t-md"
          ></div>
        </li>
      </ul>
    </nav>

    <!-- şeçilen menüdeki kartlar -->
    <div v-if="currentMenu === 'YENİ ÇIKANLAR'">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <!-- Product Card Example -->
        <div v-for="(product, index) in newArrivals" :key="index" class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <img :src="product.image" alt="Product Image" class="w-full h-auto object-contain rounded" />
          <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">{{ product.title }}</h2>
          <p class="text-xl font-bold text-blue-600 mt-2">{{ product.price }}</p>
          <div class="mt-4 flex items-center space-x-4">
            <input v-model="quantity" type="number" min="1" class="w-16 text-center border border-gray-300 rounded" />
            <button @click="addToCart" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center">
              <span class="material-icons-outlined mr-2"></span> Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
    
    
    <div v-if="currentMenu === 'TEKRAR BASKILAR'">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <!-- Product Card Example -->
        <div v-for="(product, index) in newArrivals" :key="index" class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <img :src="product.image" alt="Product Image" class="w-full h-auto object-contain rounded" />
          <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">{{ product.title }}</h2>
          <p class="text-xl font-bold text-blue-600 mt-2">{{ product.price }}</p>
          <div class="mt-4 flex items-center space-x-4">
            <input v-model="quantity" type="number" min="1" class="w-16 text-center border border-gray-300 rounded" />
            <button @click="addToCart" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center">
              <span class="material-icons-outlined mr-2"></span> Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="currentMenu === 'SÜPER SETLER'">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <!-- Product Card Example -->
        <div v-for="(product, index) in newArrivals" :key="index" class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <img :src="product.image" alt="Product Image" class="w-full h-auto object-contain rounded" />
          <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">{{ product.title }}</h2>
          <p class="text-xl font-bold text-blue-600 mt-2">{{ product.price }}</p>
          <div class="mt-4 flex items-center space-x-4">
            <input v-model="quantity" type="number" min="1" class="w-16 text-center border border-gray-300 rounded" />
            <button @click="addToCart" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center">
              <span class="material-icons-outlined mr-2"></span> Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>



    <!-- Similar block for 'ÇOK SATANLAR', 'TEKRAR BASKILAR', 'SÜPER SETLER' -->
    <!-- Repeat the structure with appropriate arrays for each section -->
    <div v-if="currentMenu === 'ÇOK SATANLAR'">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <!-- Product Cards for 'ÇOK SATANLAR' -->
        <div v-for="(product, index) in bestSellers" :key="index" class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <img :src="product.image" alt="Product Image" class="w-full h-auto object-contain rounded" />
          <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">{{ product.title }}</h2>
          <p class="text-xl font-bold text-blue-600 mt-2">{{ product.price }}</p>
          <div class="mt-4 flex items-center space-x-4">
            <input v-model="quantity" type="number" min="1" class="w-16 text-center border border-gray-300 rounded" />
            <button @click="addToCart" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center">
              <span class="material-icons-outlined mr-2"></span> Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// menu itemleri ve aktif menu
const menuItems = [
  { label: 'YENİ ÇIKANLAR', icon: 'fas fa-phone-alt' },
  { label: 'ÇOK SATANLAR', icon: 'fas fa-phone-alt' },
  { label: 'TEKRAR BASKILAR', icon: 'fas fa-search' },
  { label: 'SÜPER SETLER', icon: 'fas fa-sign-in-alt' },
];

const currentMenu = ref('YENİ ÇIKANLAR'); // Default selected menu

// her menudeki içerikler
const newArrivals = [
  { title: 'KOTLIN ile PRATİK UYGULAMALAR', image: '/images/kotlin.jpg', price: '₺250,00' },
  { title: 'YENİ TEKNOLOJİLER', image: '/images/tech.jpg', price: '₺300,00' },
  { title: 'VUE.js Başlangıç', image: '/images/vuejs.jpg', price: '₺200,00' },
];

const bestSellers = [
  { title: 'REACT ile Web Geliştirme', image: '/images/react.jpg', price: '₺150,00' },
  { title: 'JAVASCRIPT Temelleri', image: '/images/javascript.jpg', price: '₺100,00' },
  { title: 'HTML ve CSS için Uygulamalar', image: '/images/htmlcss.jpg', price: '₺120,00' },
];

// miktar ve sepete ekleme foksıyonu
const quantity = ref(1);
const addToCart = () => {
  console.log('Product added to cart');
};

// menu secme fonksıyonu
const selectMenu = (menu) => {
  currentMenu.value = menu;
};
</script>

<style scoped>
/* Menü çubuğu */
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}

/* Menü öğeleri düzenlemesi */
ul {
  display: flex;
  flex-wrap: wrap; /* Sığmayan öğelerin alta kayması */
  justify-content: center;
  gap: 1rem; /* Aralığı eşit ayarla */
}

li {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: transform 0.3s, background-color 0.3s;
  white-space: nowrap; /* Metni tek satırda tutar */
}

li:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

/* Aktif menü öğesi */
.active div {
  display: block;
}

/* Alt çizgi */
.active div {
  height: 3px;
  background-color: #e3342f;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 2px 2px 0 0;
}

/* Responsive düzenlemeler */
@media (max-width: 768px) {
  li {
    font-size: 0.875rem; /* Daha küçük yazı boyutu */
    padding: 0.5rem; /* Daha az padding */
  }
}

@media (max-width: 480px) {
  ul {
    gap: 0.5rem; /* Daha az aralık */
  }
}
</style>

