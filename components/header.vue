<template>
  <header class="bg-white shadow p-6">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img src="/images/logo.jpg" alt="Logo" class="h-20 object-contain" />
        <div class="text-sm">
          <p class="font-bold text-red-500">KODLAB</p>
          <p class="text-gray-600 text-xs">"Bilişim Yayıncılığının Yeni Yüzü"</p>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="flex-1 mx-4 relative">
        <input
          type="text"
          placeholder="Kitap Ara..."
          class="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <!-- Font Awesome Search Icon -->
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
      </div>

      <!-- User and Cart Icons -->
      <div class="flex items-center space-x-6">
        <!-- User Icon -->
        <button class="text-gray-600 hover:text-black">
          <font-awesome-icon icon="fa-solid fa-user" class="h-6 w-6" />
        </button>
        <!-- Shopping Cart Icon -->
        <button class="text-gray-600 hover:text-black">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="bg-white shadow p-6">
      <ul class="container mx-auto flex space-x-6 p-3 text-sm">
        <li>
          <a href="#" class="hover:text-blue-600 flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-house" class="h-5 w-5" />
            <span>Anasayfa</span>
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-600 flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-list" class="h-5 w-5" />
            <span>Kategoriler</span>
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-600 flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-video" class="h-5 w-5" />
            <span>Videolar</span>
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-600 flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-folder-open" class="h-5 w-5" />
            <span>Dosya Merkezi</span>
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-600 flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-user-group" class="h-5 w-5" />
            <span>Yazarlarımız</span>
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-600 flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-book" class="h-5 w-5" />
            <span>Ayın Kitapları</span>
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-600 flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-phone" class="h-5 w-5" />
            <span>İletişim</span>
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-600 flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-info-circle" class="h-5 w-5" />
            <span>Hakkımızda</span>
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-600 flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-right-to-bracket" class="h-5 w-5" />
            <span>Yazar Giriş</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Font Awesome bileşenlerini kullanabilmek için import edilmesi gerekiyor
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<style scoped>
/* Logo'nun responsive boyutları */
header img {
  max-width: 100%; /* Resmin genişliğini %100'e ayarlayarak, ekranın genişliğine göre esnemesini sağlar. */
  height: auto; /* Yüksekliği orantılı olarak ayarlar. */
}
</style>
