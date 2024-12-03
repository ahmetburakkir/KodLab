<template>
    <nav class="bg-white border-b border-gray-300 shadow-sm">
      <ul class="flex items-center justify-center space-x-6 py-3">
          <!-- Ana Sayfa Linki -->
    <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
      <!-- NuxtLink ile ana sayfaya yönlendirme -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <i class="fas fa-home text-lg"></i>
        <span class="text-sm font-semibold">ANA SAYFA</span>
      </NuxtLink>
    </li>
         <!-- Kategoriler -->
      <!-- Kategoriler -->
      <li class="relative group">
        <div
          class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded bg-blue-100"
        >
          <i class="fas fa-bars text-lg"></i>
          <span class="text-sm font-semibold">KATEGORİLER</span>
        </div>

        <!-- Dropdown Menü -->
        <div
          class="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg border-t border-gray-300 p-6 w-screen"
        >
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
          <i class="fas fa-desktop text-lg"></i>
          <span class="text-sm font-semibold">VİDEOLAR</span>
        </li>
        <!-- Dosya Merkezi -->
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <i class="fas fa-cloud-download-alt text-lg"></i>
          <span class="text-sm font-semibold">DOSYA MERKEZİ</span>
        </li>
        <!-- Yazarlarımız -->
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <i class="fas fa-users text-lg"></i>
          <span class="text-sm font-semibold">YAZARLARIMIZ</span>
        </li>
        <!-- Ayın Kitapları -->
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <i class="fas fa-trophy text-lg"></i>
          <span class="text-sm font-semibold">AYIN KİTAPLARI</span>
        </li>
        <!-- İletişim -->
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <i class="fas fa-phone-alt text-lg"></i>
          <span class="text-sm font-semibold">İLETİŞİM</span>
        </li>
        <!-- Hakkımızda -->
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <i class="fas fa-search text-lg"></i>
          <span class="text-sm font-semibold">HAKKIMIZDA</span>
        </li>
        <!-- Yazar Giriş -->
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <i class="fas fa-sign-in-alt text-lg"></i>
          <span class="text-sm font-semibold">YAZAR GİRİŞ</span>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  // Tailwind CSS kullanıldığı ve Font Awesome simgelerin dahil edildiği varsayılmaktadır.
  </script>
  
  <style scoped>
  /* Hover efektine geçiş süresi */
  li:hover {
    transition: background-color 0.3s ease-in-out;
  }
  
  /* Menü elemanlarına daha şık bir his */
  li {
    transition: transform 0.3s;
  }
  li:hover {
    transform: translateY(-2px);
  }

  /* Dropdown görünürlüğü */
.group-hover\:flex {
  display: none;
}
.group:hover .group-hover\:flex {
  display: flex;
}

/* Ekstra stil */
li:hover {
  transition: background-color 0.3s ease-in-out;
}

.dropdown {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
  </style>
  