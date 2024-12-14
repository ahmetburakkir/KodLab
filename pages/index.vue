<template>
  <div class="container">
    <!-- Header -->
    <Header />

    <!-- Main Content (Flexbox Düzeni) -->
    <main class="main-content">
      <!-- Slider (Üstteki bölüm) -->
      <div class="slider-container">
        <Slider />
      </div>

      <!-- Bar2 (Alt bölüm) -->
      <div class="bar2-container">
        <Bar2 />
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Slider from "@/components/slider.vue";
import Header from "@/components/header.vue";
import Bar2 from "@/components/Bar2.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Slider,
    Header,
    Bar2,
    Footer,
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* Tüm içeriği yatayda ortalar */
  align-items: center; /* Tüm içeriği dikeyde ortalar */
  flex-direction: column; /* Dikine hizalama */
  box-sizing: border-box;
}

* {
  box-sizing: border-box; /* İçerik taşmasını engeller */
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; /* Genişlik ekran boyutuna uygun */
  max-width: 1500px; /* İçeriği belli bir genişlikle sınırlandır */
  margin: 0 auto; /* Ortalamayı sağlar */
  padding: 0;
  position: relative; /* Z-index için gerekli */
}

/* Header */
.header-wrapper {
  position: relative; /* Dropdown'un konumunu ayarlamak için */
  z-index: 10; /* Dropdown menüsünün üstte görünmesini sağlar */
}

.header-wrapper .dropdown-menu {
  position: absolute; /* Dropdown menüsünü konumlandırır */
  z-index: 20; /* Slider'ın üstünde görünmesini sağlar */
  background-color: white; /* Arka plan rengi */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Hafif gölge efekti */
  padding: 10px;
  border-radius: 4px;
}

/* Main Content */
.main-content {
  flex: 1; /* Footer ve header dışında kalan boşluğu doldurur */
  padding: 20px;
  width: 100%; /* Tam genişlikte olmasını sağlar */
}

/* Slider */
.slider-container {
  position: relative; /* Z-index ayarı için gerekli */
  z-index: 5; /* Header ve dropdown'dan daha düşük */
}

/* Bar2 */
.bar2-container {
  position: relative; /* Varsayılan ayar */
  z-index: 5;
}

/* Footer */
.footer-wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
}

/* Product List */
.product-list {
  width: 100%;
  max-width: 1200px; /* İçeriğin genişliği */
  margin: 0 auto; /* Yatayda ortalamayı sağlar */
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Esnek grid sistemi */
  gap: 20px; /* Kartlar arasında boşluk */
}

@media (min-width: 1200px) {
  .product-list {
    grid-template-columns: repeat(1, 1fr); /* Daha fazla sütun */
  }
}

</style>
