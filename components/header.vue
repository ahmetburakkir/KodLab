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
        <!-- Heroicons Search Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a7 7 0 110 14 7 7 0 010-14zm0 0a7 7 0 017 7h0a7 7 0 01-7 7m7-7h1l3 3m-3-3l-3 3" />
        </svg>
      </div>

      <!-- User and Cart Icons -->
      <div class="flex items-center space-x-6">
        <button class="text-gray-600 hover:text-black">
          <!-- User Icon (Heroicons) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12h3l-3-3m0 6h3l-3-3m-6 0H9l3 3m0-6H9l3 3" />
          </svg>
        </button>
        <button class="text-gray-600 hover:text-black">
          <!-- Shopping Cart Icon (Heroicons) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 9h18M3 15h18M3 21h18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="bg-white shadow p-6">
      <ul class="container mx-auto flex space-x-6 p-3 text-sm">
        <li><a href="#" class="hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 9h18M3 15h18M3 21h18" /></svg> Anasayfa</a></li>
        <li><a href="#" class="hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg> Kategoriler</a></li>
        <li><a href="#" class="hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12l-6 6M3 12l6 6M12 3l6 6M12 21l6-6" /></svg> Videolar</a></li>
        <li><a href="#" class="hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16h16V4H4z" /></svg> Dosya Merkezi</a></li>
        <li><a href="#" class="hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 9h18M3 15h18M3 21h18" /></svg> Yazarlarımız</a></li>
        <li><a href="#" class="hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 9h18M3 15h18M3 21h18" /></svg> Ayın Kitapları</a></li>
        <li><a href="#" class="hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 9h18M3 15h18M3 21h18" /></svg> İletişim</a></li>
        <li><a href="#" class="hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 9h18M3 15h18M3 21h18" /></svg> Hakkımızda</a></li>
        <li><a href="#" class="hover:text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 9h18M3 15h18M3 21h18" /></svg> Yazar Giriş</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Ekstra JavaScript gereksinimleri burada eklenebilir.
</script>

<style scoped>
/* Logo'nun responsive boyutları */
header img {
  max-width: 100%; /* Resmin genişliğini %100'e ayarlayarak, ekranın genişliğine göre esnemesini sağlar. */
  height: auto; /* Yüksekliği orantılı olarak ayarlar. */
}
</style>
