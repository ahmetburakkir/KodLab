<template>
    <div class="flex flex-col lg:flex-row lg:gap-4">
      <!-- Sol Sidebar -->
      <aside class="w-full lg:w-1/4 bg-gray-100 p-4 rounded-md">
        <!-- Programlama Kategorileri -->
        <div>
          <h2 class="text-xl font-bold mb-4">Programlama</h2>
          <ul class="space-y-2">
            <li v-for="item in programmingCategories" :key="item" class="text-gray-700">
              <label class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  v-model="selectedProgramming"
                  :value="item"
                  class="form-checkbox text-blue-600"
                />
                <span>{{ item }}</span>
              </label>
            </li>
          </ul>
        </div>
  
        <!-- Diğer Kategoriler -->
        <div class="mt-6">
          <h2 class="text-xl font-bold mb-4">Kategoriler</h2>
          <ul class="space-y-2">
            <li
              v-for="(count, item) in categories"
              :key="item"
              class="text-gray-700 flex justify-between items-center"
            >
              <label class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  v-model="selectedCategories"
                  :value="item"
                  class="form-checkbox text-blue-600"
                />
                <span>{{ item }}</span>
              </label>
              <span class="text-gray-500">({{ count }})</span>
            </li>
          </ul>
        </div>
      </aside>
  
      <!-- Sağ İçerik -->
      <main class="flex-1">
        <h1 class="text-2xl font-bold mb-4">Programlama</h1>
        <!-- Filtre ve Sıralama -->
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center space-x-4">
            <button class="p-2 rounded-md bg-gray-200 hover:bg-gray-300">
              <span class="material-icons">grid_view</span>
            </button>
            <button class="p-2 rounded-md bg-gray-200 hover:bg-gray-300">
              <span class="material-icons">list</span>
            </button>
          </div>
          <div>
            <label for="sorting" class="sr-only">Sıralama</label>
            <select id="sorting" class="p-2 rounded-md bg-gray-200">
              <option>Sıralama</option>
              <option>En Yeniler</option>
              <option>Fiyat: Düşükten Yükseğe</option>
              <option>Fiyat: Yüksekten Düşüğe</option>
            </select>
          </div>
        </div>
        <!-- Ürünler -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="book in filteredBooks"
            :key="book.id"
            class="p-4 border rounded-md hover:shadow-lg flex flex-col items-center"
          >
            <img :src="book.image" :alt="book.title" class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-lg font-semibold text-center mb-2">{{ book.title }}</h3>
            <p class="text-gray-500 text-center mb-4">{{ book.description }}</p>
            <div class="text-blue-600 text-xl font-bold mb-2">{{ book.price }}</div>
            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Sepete Ekle
            </button>
          </div>
        </div>
        <!-- Sayfalama -->
        <div class="flex justify-center mt-6">
          <button
            class="px-4 py-2 mx-1 rounded-md bg-gray-200 hover:bg-gray-300"
            v-for="page in pagination"
            :key="page"
          >
            {{ page }}
          </button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        programmingCategories: [
          "ALGORİTMA",
          "ASP.NET",
          "C#",
          "C/C++",
          "JAVA",
          "PYTHON",
          "PHP",
          "SAP",
          "DİĞER",
        ],
        categories: {
          ALGORİTMA: 21,
          "ASP.NET": 16,
          "C#": 32,
          "C/C++": 14,
          JAVA: 13,
          PYTHON: 29,
          PHP: 17,
          SAP: 15,
        },
        selectedProgramming: [], // Seçilen programlama kategorileri
        selectedCategories: [], // Seçilen genel kategoriler
        books: [
          {
            id: 1,
            title: "KOTLIN ile PRATİK UYGULAMALAR",
            description: "Kodlab",
            category: "PYTHON",
            price: "₺250,00",
            image: "/images/kotlin.jpg",
          },
          {
            id: 2,
            title: "YAPAY ZEKA UYGULAMALARI",
            description: "MEB Müfredatına Tam Uyumlu",
            category: "JAVA",
            price: "₺250,00",
            image: "/images/yapay-zeka.jpg",
          },
          {
            id: 3,
            title: "DİJİTAL SANATLAR",
            description: "MEB Müfredatına Tam Uyumlu",
            category: "ALGORİTMA",
            price: "₺250,00",
            image: "/images/dijital-sanatlar.jpg",
          },
          {
            id: 4,
            title: "ROBOTİK KODLAMA",
            description: "MEB Müfredatına Tam Uyumlu",
            category: "C++",
            price: "₺250,00",
            image: "/images/robotik-kodlama.jpg",
          },
          {
            id: 5,
            title: "PYTHON EĞİTİM KİTABI",
            description: "Kodlab",
            category: "PYTHON",
            price: "₺250,00",
            image: "/images/python.jpg",
          },
        ],
        pagination: [1, 2, 3, 4],
      };
    },
    computed: {
      filteredBooks() {
        // Kategori seçimine göre ürünleri filtrele
        if (this.selectedProgramming.length === 0 && this.selectedCategories.length === 0) {
          return this.books; // Hiçbir kategori seçilmezse tüm kitapları göster
        }
        return this.books.filter((book) =>
          this.selectedProgramming.includes(book.category) ||
          this.selectedCategories.includes(book.category)
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .material-icons {
    font-size: 24px;
  }
  </style>
  