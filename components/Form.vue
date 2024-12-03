<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Hesabınıza giriş yapın</h2>
        <!-- Başarı Mesajı -->
        <div
          v-if="showSuccessMessage"
          class="mb-4 p-3 text-sm text-green-700 bg-green-100 border border-green-300 rounded"
        >
          Giriş başarılı!
        </div>
  
        <form @submit.prevent="handleLogin">
          <!-- E-posta Girişi -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <!-- Şifre Girişi -->
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Parola</label>
            <div class="relative">
              <input
                type="password"
                id="password"
                v-model="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <!-- Giriş Yap Butonu -->
          <button
            type="submit"
            class="w-full py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Oturum Aç
          </button>
        </form>
  
        <!-- Üye Ol Butonu -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Hesap yok mu?
            <NuxtLink
              to="/components/uyeolustur"
              class="text-orange-500 hover:underline"
            >
              Bir hesap oluşturun
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Form verileri
  const email = ref("");
  const password = ref("");
  
  // Başarı mesajı için durum
  const showSuccessMessage = ref(false);
  
  const handleLogin = () => {
    // Burada gerçek bir giriş doğrulama işlemi yapılabilir
    if (email.value && password.value) {
      // Giriş başarılı mesajını göster
      showSuccessMessage.value = true;
  
      // Mesajı 3 saniye sonra gizle
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 3000);
    } else {
      alert("Lütfen tüm alanları doldurun!");
    }
  };
  </script>
  
  <style scoped>
  /* İsteğe bağlı özel stiller buraya eklenebilir */
  </style>
  