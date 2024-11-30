<template>
    <header class="bg-white shadow p-4">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
            <img src="/images/logo.jpg" alt="Logo" class="h-10" />
          <div class="text-sm">
            <p class="font-bold text-red-500">KODLAB</p>
            <p class="text-gray-600 text-xs">"Bilişim Yayıncılığının Yeni Yüzü"</p>
          </div>
        </div>
  
        <!-- Search Bar -->
        <div class="flex-1 mx-4">
          <input
            type="text"
            placeholder="Kitap Ara..."
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
  
        <!-- User and Cart Icons -->
        <div class="flex items-center space-x-4">
          <button class="text-gray-600 hover:text-black">
            <i class="fas fa-user text-xl"></i>
          </button>
          <button class="text-gray-600 hover:text-black">
            <i class="fas fa-shopping-cart text-xl"></i>
          </button>
        </div>
      </div>
  
      <!-- Navigation Menu -->
      <nav class="mt-4 bg-gray-100">
        <ul class="container mx-auto flex space-x-4 p-2 text-sm">
          <li><a href="#" class="hover:text-blue-600"><i class="fas fa-home"></i> Anasayfa</a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fas fa-bars"></i> Kategoriler</a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fas fa-tv"></i> Videolar</a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fas fa-folder"></i> Dosya Merkezi</a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fas fa-users"></i> Yazarlarımız</a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fas fa-trophy"></i> Ayın Kitapları</a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fas fa-phone"></i> İletişim</a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fas fa-info-circle"></i> Hakkımızda</a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fas fa-sign-in-alt"></i> Yazar Giriş</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  // Bileşenle ilgili ekstra JavaScript kodu eklemek gerekiyorsa buraya yazabilirsiniz.
  </script>
  
  <style scoped>
  /* İhtiyaç durumunda özel stiller buraya eklenebilir. */
  </style>
  