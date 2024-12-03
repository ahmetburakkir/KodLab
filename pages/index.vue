<template>
  <div class="container">
    <!-- Sidebar -->
    <nav class="sidebar">
      <div class="button-group">
        <button class="button" @click="currentComponent = 'Header'">Header</button>
        <button class="button" @click="currentComponent = 'Bar'">Bar</button>
        <button class="button" @click="currentComponent = 'Form'">Üye Girişi</button>
        <button class="button" @click="currentComponent = 'UyeOlustur'">Üye Ol!</button>
        <button class="button" @click="currentComponent = 'Slider'">Slide</button>
        <button class="button" @click="currentComponent = 'Bar2'">Bar2</button>
        <button class="button" @click="currentComponent = 'ContentArea'">İçerik Alanı</button>
        <button class="button" @click="currentComponent = 'Icerik'">İçerik Alanı 2</button>
        <button class="button" @click="currentComponent = 'ShoppingCart'">Sepet</button>
        <button class="button" @click="currentComponent = 'Footer'">Footer</button>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Dinamik olarak bileşen yükleme -->
      <component :is="currentComponent" />
    </main>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Bar from "@/components/Bar.vue";
import Form from "@/components/Form.vue";
import UyeOlustur from "@/components/uyeolustur.vue";
import Slider from "@/components/slider.vue";
import Bar2 from "@/components/Bar2.vue";
import ContentArea from "@/components/ContentArea.vue";
import Icerik from "@/components/icerik.vue";
import ShoppingCart from "@/components/sepet.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Header,
    Bar,
    Form,
    UyeOlustur,
    Slider,
    Bar2,
    ContentArea,
    Icerik,
    ShoppingCart,
    Footer,
  },
  data() {
    return {
      currentComponent: null, // Başlangıçta hiçbir bileşen gösterilmiyor
    };
  },
};
</script>

<style scoped>
/* Ana kapsayıcı */
.container {
  display: flex;
  height: 100vh;
}

/* Sidebar */
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  overflow-y: auto;
}

.button-group {
  display: flex;
  flex-direction: column;
}

.button {
  margin: 10px 0;
  padding: 10px;
  background-color: #e42121;
  color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #b31919;
}

/* Ana İçerik */
.main-content {
  margin-left: 200px;
  flex: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
}
</style>
