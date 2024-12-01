<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-2xl bg-white p-8 shadow-md rounded-lg">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Hesap oluştur</h2>
        
        <!-- Başarı Mesajı -->
        <div
          v-if="showSuccessMessage"
          class="mb-4 p-3 text-sm text-green-700 bg-green-100 border border-green-300 rounded"
        >
          Üye olma işlemi başarılı!
        </div>
  
        <form @submit.prevent="handleSignUp">
          <!-- Sosyal Unvan -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Sosyal unvan</label>
            <div class="flex gap-4">
              <label><input type="radio" value="Erkek" v-model="socialTitle" /> Erkek</label>
              <label><input type="radio" value="Kadın" v-model="socialTitle" /> Kadın</label>
              <label><input type="radio" value="Bayi" v-model="socialTitle" /> Bayi</label>
            </div>
          </div>
  
          <!-- Ad -->
          <div class="mb-4">
            <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">Ad</label>
            <input
              type="text"
              id="firstName"
              v-model="firstName"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
  
          <!-- Soyad -->
          <div class="mb-4">
            <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
            <input
              type="text"
              id="lastName"
              v-model="lastName"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
  
          <!-- E-posta -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
  
          <!-- Parola -->
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Parola</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
  
          <!-- Üye Ol Butonu -->
          <button
            type="submit"
            class="w-full py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Form verileri
  const socialTitle = ref("");
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const password = ref("");
  
  // Başarı mesajı için durum
  const showSuccessMessage = ref(false);
  
  const handleSignUp = () => {
    // Tüm alanlar doldurulmuşsa başarılı mesajını göster
    if (socialTitle.value && firstName.value && lastName.value && email.value && password.value) {
      showSuccessMessage.value = true;
  
      // Mesajı 3 saniye sonra gizle
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 3000);
  
      // Burada bir API çağrısı yapılabilir
      console.log("Kullanıcı verileri:", {
        socialTitle: socialTitle.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      });
    } else {
      alert("Lütfen tüm alanları doldurun!");
    }
  };
  </script>
  
  <style scoped>
  /* İsteğe bağlı özel stiller buraya eklenebilir */
  </style>
  