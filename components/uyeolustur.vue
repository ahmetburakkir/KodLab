<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-3xl bg-white p-8 shadow-md rounded-lg">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Hesap oluştur</h2>
      <p class="text-sm text-gray-600 mb-6">
        Zaten bir hesabınız mı var? 
        <a href="#" class="text-orange-500 hover:underline">Bunun yerine giriş yapın!</a>
      </p>
      <form>
        <!-- Sosyal Unvan -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Sosyal unvan</label>
          <div class="flex items-center space-x-4">
            <label class="inline-flex items-center">
              <input type="radio" name="title" value="male" class="text-orange-500" />
              <span class="ml-2 text-sm text-gray-700">Erkek</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" name="title" value="female" class="text-orange-500" />
              <span class="ml-2 text-sm text-gray-700">Kadın</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" name="title" value="dealer" class="text-orange-500" />
              <span class="ml-2 text-sm text-gray-700">Bayi</span>
            </label>
          </div>
        </div>

        <!-- Ad -->
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">Ad</label>
          <input
            type="text"
            id="firstName"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <p class="text-sm text-gray-500 mt-1">Yalnızca harflere ve nokta (.) karakterine izin verilir.</p>
        </div>

        <!-- Soyad -->
        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
          <input
            type="text"
            id="lastName"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <p class="text-sm text-gray-500 mt-1">Yalnızca harflere ve nokta (.) karakterine izin verilir.</p>
        </div>

        <!-- Şirket -->
        <div class="mb-4">
          <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Şirket</label>
          <input
            type="text"
            id="company"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <!-- Kimlik Numarası -->
        <div class="mb-4">
          <label for="identityNumber" class="block text-sm font-medium text-gray-700 mb-1">Kimlik numarası</label>
          <input
            type="text"
            id="identityNumber"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <!-- E-posta -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
          <input
            type="email"
            id="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <!-- Parola -->
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Parola</label>
          <input
            type="password"
            id="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <!-- Checkboxlar -->
        <div class="mb-4 space-y-2">
          <label class="inline-flex items-start">
            <input type="checkbox" class="text-orange-500 mt-1" />
            <span class="ml-2 text-sm text-gray-700">Ortaklarımızdan teklifler alın</span>
          </label>
          <label class="inline-flex items-start">
            <input type="checkbox" class="text-orange-500 mt-1" />
            <span class="ml-2 text-sm text-gray-700">
              Müşteri veri gizliliği hakkında bilgiye sahipsiniz.
            </span>
          </label>
          <label class="inline-flex items-start">
            <input type="checkbox" class="text-orange-500 mt-1" />
            <span class="ml-2 text-sm text-gray-700">Haber bültenimize üye olun</span>
          </label>
        </div>

        <!-- Kaydet Butonu -->
        <div>
          <button
            type="submit"
            class="w-full py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// İlgili script kodları buraya eklenebilir.
</script>

<style scoped>
/* Özel stiller eklemek isterseniz buraya yazabilirsiniz */
</style>
