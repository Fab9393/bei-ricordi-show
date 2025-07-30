<template>
  <div class="home-page">

    <!-- Hero con tendine teatrali -->
    <section class="hero-section with-curtains">
      <Navbar @show-login="showLogin = true" />
      <img class="curtain left" src="/images/curtain-left.png" alt="Tendina sinistra" />
      <img class="curtain right flipped" src="/images/curtain-left.png" alt="Tendina destra" />

      <h1>LA REDAZIONE DI SCOMODO</h1>
      <p class="subheading">Presenta... BEIRICORDI SHOW</p>
      <router-link to="/events" class="cta-button">Scopri gli eventi</router-link>
    </section>

    <!-- Evento in primo piano -->
    <section class="event-card">
      <h2>🎭 Prossimo evento</h2>
      <p class="event-date">30 maggio 2024</p>
      <p class="event-location">Teatro Marchionni, Roma</p>
      <router-link to="/payment?event=roma" class="cta-button">Prenota ora</router-link>
    </section>

    <!-- Intro -->
    <section class="intro">
      <h2 class="section-title"><em>La Redazione Ringrazia</em></h2>
      <p>
        Un grazie di cuore all'impegno degli artisti e al nostro maginifico pubblico che contribuiscono
        a rendere magnifiche le nostre serate.
      </p>
    </section>

    <LoginModal v-if="showLogin" @close="showLogin = false" />
  </div>
      <!-- Footer -->
  <TheaterFooter />
</template>

<script setup>
import { ref } from 'vue'
import TheaterFooter from '../components/TheaterFooter.vue'
import Navbar from '../components/Navbar.vue'
import LoginModal from '../components/LoginModal.vue'

const showLogin = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Playfair+Display&display=swap');

.home-page {
  background: linear-gradient(to bottom, #1a0000, #0d0d0d);
  color: #f2efe9;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Hero teatrale */
.hero-section {
  position: relative;
  text-align: center;
  padding: 1rem 1rem 4rem;
  background: radial-gradient(circle at top, #400000, transparent 70%);
  z-index: 1;
}

.curtain {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 33vw;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
}
.curtain.left {
  left: 0;
}
.curtain.right {
  right: 0;
}
.curtain.flipped {
  transform: scaleX(-1);
}

.hero-section h1 {
  font-family: 'Cinzel', serif;
  font-size: 3.2rem;
  color: #ffdfb9;
  z-index: 2;
  position: relative;
  margin-bottom: 0.5rem;
}

.subheading {
  font-size: 1.5rem;
  color: #e2cfcf;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.cta-button {
  background-color: #b01717;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  z-index: 2;
  position: relative;
  display: inline-block;
  margin-top: 0.5rem;
}
.cta-button:hover {
  background-color: #8e1010;
}

/* Evento evidenziato */
.event-card {
  background-color: #2a0000;
  margin: 2rem auto;
  padding: 2rem;
  max-width: 600px;
  border-radius: 14px;
  box-shadow: 0 6px 24px rgba(255, 204, 204, 0.15);
  text-align: center;
  border: 1px solid #b01717;
}

.event-card h2 {
  font-family: 'Cinzel', serif;
  color: #ffdfb9;
  margin-bottom: 0.5rem;
}

.event-date {
  font-size: 1.1rem;
  color: #e2cfcf;
  margin-bottom: 0.3rem;
}

.event-location {
  font-size: 1.1rem;
  color: #e2cfcf;
  margin-bottom: 1.5rem; /* ⬅️ Spazio aggiunto per non sovrapporre il bottone */
}

/* Intro ringraziamento */
.intro {
  max-width: 700px;
  margin: 3rem auto;
  text-align: center;
  font-size: 1rem;
  color: #b0b0b0;
  padding: 0 1rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  color: #f8f8f8;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.4rem;
  }
  .subheading {
    font-size: 1.2rem;
  }
  .curtain {
    width: 50vw;
  }
}

</style>
