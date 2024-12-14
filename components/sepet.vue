<template>
  <div class="p-8">
   
    <h1 class="text-2xl font-bold mb-6">Alışveriş Sepeti</h1>

   
    <div class="bg-orange-100 text-orange-800 p-4 rounded mb-6">
      Sepetinizde başka kitap yok
    </div>

   
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
     
      <div>
        <button
          class="flex items-center text-gray-700 border border-gray-300 rounded p-3 hover:bg-gray-100 transition"
        >
          <span class="mr-2">&larr;</span>
          Alışverişe devam
        </button>
      </div>

      <!-- Sepet Özeti -->
      <div class="md:col-span-2 border border-gray-200 rounded p-6">
        <div class="mb-4">
          <div class="flex justify-between text-gray-700">
            <span>0 öğe</span>
            <span>₺0,00</span>
          </div>
        </div>

        <div class="border-t border-gray-200 py-4">
          <div class="flex justify-between font-bold">
            <span>Toplam (vergi dahil)</span>
            <span>₺0,00</span>
          </div>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700 mb-2" for="promo-code">
            Promosyon kodu
          </label>
          <div class="flex items-center">
            <input
              id="promo-code"
              type="text"
              class="border border-gray-300 rounded-l p-2 w-full"
              placeholder="Promosyon kodu"
            />
            <button class="bg-gray-200 text-gray-700 px-4 rounded-r hover:bg-gray-300 transition">
              Ekle
            </button>
          </div>
        </div>

        <button
          class="w-full bg-orange-500 text-white py-3 mt-6 rounded hover:bg-orange-600 transition"
        >
          Siparişi Tamamlamak için devam et
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
};
</script>
