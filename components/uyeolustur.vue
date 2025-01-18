<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-xl p-8 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Üye Oluştur</h1>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">İsim</label>
          <input
            type="text"
            v-model="newUser.isim"
            placeholder="İsim"
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Soyisim</label>
          <input
            type="text"
            v-model="newUser.soyisim"
            placeholder="Soyisim"
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">E-Posta</label>
          <input
            type="email"
            v-model="newUser.email"
            placeholder="E-Posta"
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Parola</label>
          <input
            type="password"
            v-model="newUser.parola"
            placeholder="Parola"
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Kaydet
        </button>
      </form>
    </div>

    <div class="w-full max-w-3xl mt-8">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Kullanıcılar</h2>
      <ul class="space-y-4">
        <li
          v-for="user in users"
          :key="user.id"
          class="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
        >
          <div>
            <p><strong>İsim:</strong> {{ user.isim }}</p>
            <p><strong>Soyisim:</strong> {{ user.soyisim }}</p>
            <p><strong>E-Posta:</strong> {{ user.email }}</p>
          </div>
          <button
            @click="deleteUser(user.id)"
            class="py-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sil
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firbase/firebaseConfig.js"; // Firebase Firestore bağlantısı
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

const users = ref([]);
const newUser = ref({
  isim: "",
  soyisim: "",
  email: "",
  parola: "",
});

// Kullanıcıları Firestore'dan çek
const loadUsers = async () => {
  try {
    const docRef = doc(db, "uyeler", "kullanicilar"); // Tek bir doküman
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Mevcut kullanıcılar:", docSnap.data());
      users.value = docSnap.data().uyeler || [];
    } else {
      // Eğer doküman yoksa, yeni bir doküman oluştur
      console.log("Doküman bulunamadı, yeni bir doküman oluşturuluyor...");
      await setDoc(docRef, { uyeler: [] });
      users.value = [];
    }
  } catch (error) {
    console.error("Kullanıcılar yüklenirken hata:", error);
    alert("Kullanıcılar yüklenirken bir hata oluştu!");
  }
};

// Yeni kullanıcı ekle
const onSubmit = async () => {
  if (
    !newUser.value.isim ||
    !newUser.value.soyisim ||
    !newUser.value.email ||
    !newUser.value.parola
  ) {
    alert("Tüm alanları doldurunuz!");
    return;
  }

  try {
    const docRef = doc(db, "uyeler", "kullanicilar"); // Tek bir doküman
    const newUserData = { ...newUser.value };

    // Kullanıcı e-posta kontrolü
    const existingUser = users.value.find(user => user.email === newUserData.email);
    if (existingUser) {
      alert("Bu e-posta zaten kullanılıyor!");
      return;
    }

    // Yeni kullanıcıyı Firestore dizisine ekle
    await updateDoc(docRef, {
      uyeler: arrayUnion(newUserData),
    });

    alert("Kullanıcı başarıyla eklendi!");
    newUser.value = { isim: "", soyisim: "", email: "", parola: "" };
    loadUsers(); // Listeyi güncelle
  } catch (error) {
    console.error("Kullanıcı eklenirken hata:", error);
    alert("Kullanıcı eklenirken bir hata oluştu!");
  }
};

// Sayfa yüklendiğinde verileri yükle
onMounted(() => {
  loadUsers();
});
</script>





<style scoped>
body {
  background-color: #f3f4f6;
}
</style>


