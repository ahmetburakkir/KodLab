<template>
    <div class="slider-container">
      <div class="relative w-full overflow-hidden">
        <!-- Slider Images -->
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="min-w-full h-64 bg-cover bg-center"
            :style="{ backgroundImage: `url(${image.url})` }"
          >
            <!-- Caption -->
            <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
              <h3>{{ image.caption }}</h3>
            </div>
          </div>
        </div>
  
        <!-- Navigation Buttons -->
        <button
          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
          @click="prevSlide"
        >
          ‹
        </button>
        <button
          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
          @click="nextSlide"
        >
          ›
        </button>
  
        <!-- Slider Dots -->
        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            v-for="(image, index) in images"
            :key="'dot-' + index"
            class="w-3 h-3 rounded-full"
            :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const images = ref([
    { url: '/images/slide1.jpg', caption: 'Slide 1' },
    { url: '/images/slide2.jpg', caption: 'Slide 2' },
    { url: '/images/slide3.jpg', caption: 'Slide 3' },
  ]);
  
  const currentIndex = ref(0);
  const totalSlides = images.value.length;
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
  };
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % totalSlides;
  };
  
  const goToSlide = (index) => {
    currentIndex.value = index;
  };
  </script>
  
  <style scoped>
  /* Basic styling for slider buttons and dots */
  button.w-3.h-3 {
    transition: background-color 0.3s;
  }
  </style>
  