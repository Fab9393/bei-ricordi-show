<template>
  <div class="gallery-page">

    <!-- Hero con tendine teatrali -->
    <section class="gallery-hero with-curtains">
      <Navbar @show-login="showLogin = true" />
      <img class="curtain left" src="/images/curtain-left.png" alt="Tendina sinistra" />
      <img class="curtain right flipped" src="/images/curtain-left.png" alt="Tendina destra" />
      <h1><i class="fa-solid fa-camera-retro"></i> Galleria</h1>
      <p>Esplora i momenti più belli degli spettacoli</p>
    </section>

    <!-- Grid -->
    <section class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-card"
        @click="openModal(index)"
      >
        <div class="image-container">
          <img :src="image.src" :alt="image.caption" />
          <div class="hover-caption">{{ image.caption }}</div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div v-if="modalIndex !== null" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <img :src="images[modalIndex].src" :alt="images[modalIndex].caption" />
        <button class="close-button" @click="closeModal">×</button>
      </div>
    </div>

    <LoginModal v-if="showLogin" @close="showLogin = false" />
  </div>
      <!-- Footer -->
  <TheaterFooter />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import TheaterFooter from '../components/TheaterFooter.vue'
import LoginModal from '../components/LoginModal.vue'

const showLogin = ref(false)
const modalIndex = ref(null)

const images = [
  { src: '/images/evento1.jpg', caption: 'Concerto Roma - Giugno 2024' },
  { src: '/images/evento2.jpg', caption: 'Spettacolo al Teatro Eliseo' },
  { src: '/images/evento3.jpg', caption: 'Live al Parco della Musica' }
]

const openModal = (index) => {
  modalIndex.value = index
}
const closeModal = () => {
  modalIndex.value = null
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Playfair+Display:wght@600&display=swap');

.gallery-page {
  background: linear-gradient(to bottom, #1a0000, #0d0d0d);
  color: #f2efe9;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  padding-bottom: 3rem;
  position: relative;
}

/* Hero + tendine */
.gallery-hero {
  position: relative;
  text-align: center;
  padding: 1rem 1rem 3rem;
  background: radial-gradient(circle at top, #400000, transparent 70%);
  z-index: 1;
}
.gallery-hero h1 {
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: #ffdfb9;
  z-index: 2;
  position: relative;
}
.gallery-hero p {
  font-size: 1.2rem;
  color: #e2cfcf;
  margin-top: 0.5rem;
  z-index: 2;
  position: relative;
}
.curtain {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 33svw;
  object-fit: cover;
  z-index: 5;
  pointer-events: none;
}
.curtain.left { left: 0; }
.curtain.right { right: 0; }
.curtain.flipped { transform: scaleX(-1); }

/* Grid */
.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

/* Card */
.gallery-card {
  background-color: #2a0000;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(255, 204, 204, 0.12);
  width: 260px;
  height: 260px;
  overflow: hidden;
  position: relative;
  cursor: zoom-in;
  border: 1px solid #b01717;
  z-index: 0; /* di base sotto la tenda */
  transition: transform 0.8s ease, z-index 0.8s; /* ritarda il reset dello z-index */
}
.image-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.gallery-card:hover img {
  z-index: 1001;
  transform: scale(1.08);
}
.hover-caption {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.6rem;
  text-align: center;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.gallery-card:hover .hover-caption {
  opacity: 1;
}
.gallery-card:hover {
  z-index: 10; /* sopra la tenda */
  transform: scale(1.05);
  transition: transform 0.8s ease, z-index 0.8s; /* nessun ritardo per z-index in hover */
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 13, 13, 0.94);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid #b01717;
  box-shadow: 0 0 20px rgba(255, 204, 204, 0.25);
}
.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
}
.close-button {
  position: absolute;
  top: -16px;
  right: -16px;
  font-size: 2.5rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 1100;
}

@media (max-width: 768px) {
  .gallery-card {
    width: 90vw;
    height: auto;
  }
  .image-container img {
    height: auto;
  }
}
</style>
