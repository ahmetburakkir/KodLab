<template>
  <div class="container">
    <!-- Sidebar -->
    <nav class="sidebar">
      <div class="button-group">
        <button class="button"><NuxtLink to="/">Header</NuxtLink></button>
        <button class="button"><NuxtLink to="/components/Bar">Bar</NuxtLink></button>
        <button class="button"><NuxtLink to="/components/Form">Üye Girişi</NuxtLink></button>
        <button class="button"><NuxtLink to="/components/uyeolustur">Üye Ol!</NuxtLink></button>
        <button class="button"><NuxtLink to="/components/slider">Slide</NuxtLink></button>
        <button class="button"><NuxtLink to="/components/ContentArea">İçerik Alanı</NuxtLink></button>       
        <button class="button"><NuxtLink to="/components/about">Hakkımızda</NuxtLink></button>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* Ana kapsayıcı */
.container {
  display: flex;
  height: 100vh; /* Tüm ekran yüksekliğini kaplar */
}

/* Sidebar Stilleri */
.sidebar {
  width: 200px; /* Sidebar genişliği */
  background-color: #f0f0f0; /* Arka plan rengi */
  height: 100vh; /* Sayfanın tamamını kaplar */
  position: fixed; /* Sabit pozisyon */
  left: 0;
  top: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  padding: 10px;
  overflow-y: auto; /* İçerik taşarsa kaydırma */
}

/* Sidebar Buton Stilleri */
.button-group {
  display: flex;
  flex-direction: column;
}

.button {
  margin: 10px 0; /* Dikey aralık */
  padding: 10px; /* İçerik boşluğu */
  background-color: #e42121; /* Kırmızı arka plan */
  color: white; /* Beyaz yazı rengi */
  border: none;
  border-radius: 5px; /* Yuvarlatılmış kenarlar */
  text-align: center;
  font-size: 16px; /* Yazı boyutu */
  cursor: pointer; /* İmleç değişimi */
  transition: all 0.3s ease; /* Geçiş efekti */
}

.button:hover {
  background-color: #b31919; /* Hover'da koyulaşan renk */
}

/* Main Content Stilleri */
.main-content {
  margin-left: 200px; /* Sidebar genişliğine eşit */
  flex: 1; /* Geri kalan alanı kaplar */
  padding: 20px; /* İçerik boşluğu */
  background-color: #fff; /* Beyaz arka plan */
  overflow-y: auto; /* Taşan içerik için kaydırma */
}
</style>
