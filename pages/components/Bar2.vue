<template>
    <nav class="bg-white border-b border-gray-300 shadow-sm">
      <ul class="flex items-center justify-center space-x-6 py-3">
        <!-- Dinamik Menü Öğeleri -->
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
  
          <!-- Alt Çizgi -->
          <div
            v-if="currentMenu === item.label"
            class="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 rounded-t-md"
          ></div>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Menüler ve aktif menü durumu
  const menuItems = [
    { label: "YENİ ÇIKANLAR", icon: "fas fa-phone-alt" },
    { label: "ÇOK SATANLAR", icon: "fas fa-phone-alt" },
    { label: "TEKRAR BASKILAR", icon: "fas fa-search" },
    { label: "SÜPER SETLER", icon: "fas fa-sign-in-alt" },
  ];
  
  const currentMenu = ref("YENİ ÇIKANLAR"); // Varsayılan olarak seçili menü
  
  // Menü seçimi
  const selectMenu = (menu) => {
    currentMenu.value = menu;
  };
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
  
  /* Alt Çizgi Aktif Durumu */
  .active div {
    display: block;
  }
  </style>
  