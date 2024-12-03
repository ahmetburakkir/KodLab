<template>
  <header class="bg-white shadow p-6">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img src="/images/logo.jpg" alt="Logo" class="h-20 object-contain" />
       
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
    <nav class="bg-white border-b border-gray-300 shadow-sm">
    <ul class="flex items-center justify-center space-x-6 py-3">
      <!-- Ana Sayfa Linki -->
      <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <font-awesome-icon :icon="['fas', 'home']" class="text-lg" />
        </NuxtLink>
      </li>

      <!-- Kategoriler -->
      <li class="relative group">
        <div class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded bg-blue-100">
          <font-awesome-icon :icon="['fas', 'bars']" class="text-lg" />
          <span class="text-sm font-semibold">KATEGORİLER</span>
        </div>

        <!-- Dropdown Menü -->
        <div class="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg border-t border-gray-300 p-6 w-screen">
          <div class="grid grid-cols-3 gap-8 text-sm">
            <!-- Sol Sütun -->
            <div class="space-y-3">
              <h3 class="font-bold mb-3">İNDİRİMLİ SUPER SETLER</h3>
              <ul class="space-y-1">
                <li class="cursor-pointer hover:underline">ALGORİTMA</li>
                <li class="cursor-pointer hover:underline">ASP.NET</li>
                <li class="cursor-pointer hover:underline">C#</li>
                <li class="cursor-pointer hover:underline">C/C++</li>
                <li class="cursor-pointer hover:underline">JAVA</li>
                <li class="cursor-pointer hover:underline">PYTHON</li>
                <li class="cursor-pointer hover:underline">PHP</li>
                <li class="cursor-pointer hover:underline">SAP</li>
                <li class="cursor-pointer hover:underline">DİĞER</li>
              </ul>
            </div>

            <!-- Orta Sütun -->
            <div class="space-y-3">
              <h3 class="font-bold mb-3">Oyun Programlama</h3>
              <ul class="space-y-1">
                <li class="cursor-pointer hover:underline">MOBİL OYUN</li>
                <li class="cursor-pointer hover:underline">PC OYUN</li>
              </ul>
              <h3 class="font-bold mb-3 mt-4">Network</h3>
              <ul class="space-y-1">
                <li class="cursor-pointer hover:underline">WINDOWS SERVER</li>
                <li class="cursor-pointer hover:underline">LİNÜX SERVER</li>
                <li class="cursor-pointer hover:underline">NETWORK</li>
                <li class="cursor-pointer hover:underline">BULUT</li>
              </ul>
            </div>

            <!-- Sağ Sütun -->
            <div class="space-y-3">
              <h3 class="font-bold mb-3">Web İnternet</h3>
              <ul class="space-y-1">
                <li class="cursor-pointer hover:underline">WEB TASARIMI</li>
                <li class="cursor-pointer hover:underline">WEB PROGRAMLAMA</li>
              </ul>
              <h3 class="font-bold mb-3 mt-4">Mobil Programlama</h3>
              <ul class="space-y-1">
                <li class="cursor-pointer hover:underline">ANDROID</li>
                <li class="cursor-pointer hover:underline">WINDOWS PHONE</li>
                <li class="cursor-pointer hover:underline">iOS PROGRAMLAMA</li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <!-- Videolar -->
      <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
        <font-awesome-icon :icon="['fas', 'desktop']" class="text-lg" />
        <span class="text-sm font-semibold">VİDEOLAR</span>
      </li>

      <!-- Dosya Merkezi -->
      <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
        <font-awesome-icon :icon="['fas', 'cloud-download-alt']" class="text-lg" />
        <span class="text-sm font-semibold">DOSYA MERKEZİ</span>
      </li>

      <!-- Yazarlarımız -->
      <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
        <font-awesome-icon :icon="['fas', 'users']" class="text-lg" />
        <span class="text-sm font-semibold">YAZARLARIMIZ</span>
      </li>

      <!-- Ayın Kitapları -->
      <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
        <font-awesome-icon :icon="['fas', 'trophy']" class="text-lg" />
        <span class="text-sm font-semibold">AYIN KİTAPLARI</span>
      </li>

      <!-- İletişim -->
      <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
        <font-awesome-icon :icon="['fas', 'phone-alt']" class="text-lg" />
        <span class="text-sm font-semibold">İLETİŞİM</span>
      </li>

      <!-- Hakkımızda -->
      <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
        <font-awesome-icon :icon="['fas', 'search']" class="text-lg" />
        <span class="text-sm font-semibold">HAKKIMIZDA</span>
      </li>

      <!-- Yazar Giriş -->
      <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
        <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="text-lg" />
        <span class="text-sm font-semibold">YAZAR GİRİŞ</span>
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
