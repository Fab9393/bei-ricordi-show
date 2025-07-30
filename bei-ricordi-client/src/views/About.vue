<template>
  <div class="about-page">

    <section class="about-hero with-curtains">
      <Navbar @show-login="showLogin = true" />
      <img class="curtain left" src="/images/curtain-left.png" alt="Tendina sinistra" />
      <img class="curtain right flipped" src="/images/curtain-left.png" alt="Tendina destra" />
      <h1><i class="fa-solid fa-masks-theater"></i> La Redazione di Scomodo </h1>
      <p>Il cuore creativo che sapientemente orchestra ogni edizione del BeiRicordi Show</p>
    </section>


    <!-- Team -->
    <section class="team-cards">
      <div class="card" v-for="member in members" :key="member.name">
        <div class="photo" :style="{ backgroundImage: `url(${member.photo})` }"></div>
        <h3>{{ member.name }}</h3>
        <p>{{ member.bio }}</p>
      </div>
    </section>
  </div>
      <!-- Footer -->
  <TheaterFooter />
</template>

<script setup>
import { onMounted } from 'vue'
import TheaterFooter from '../components/TheaterFooter.vue'
import Navbar from '../components/Navbar.vue'

const members = [
  {
    name: 'Emma Quartullo',
    bio: 'Artista e fondatrice, voce narrativa del progetto Bei Ricordi.',
    photo: '/images/emma.png'
  },
  {
    name: 'Silvia Ignoto',
    bio: 'Curatrice artistica e coordinatrice generale.',
    photo: '/images/silvia.png'
  },
  {
    name: 'Marcello',
    bio: 'Responsabile tecnico e ideatore del concept scenico.',
    photo: '/images/marcello.png'
  }
]

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--y', `${e.clientY}px`)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter&display=swap');

.about-page {
  background: linear-gradient(to bottom, #1a0000, #0d0d0d);
  color: #f2efe9;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.about-page::before {
  content: '';
  position: fixed;
  top: var(--y);
  left: var(--x);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255,255,200,0.15), transparent 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: top 0.2s ease, left 0.2s ease;
}

.with-curtains {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 1rem 1rem 3rem;
  background: radial-gradient(circle at top, #400000, transparent 70%);
}
.curtain {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 33vw;
  min-height: 100%;
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
.about-hero h1, .about-hero p {
  position: relative;
  z-index: 2;
}
.about-hero h1 {
  font-family: 'Cinzel', serif;
  font-size: 3.2rem;
  color: #ffdfb9;
  margin-bottom: 0.5rem;
}
.about-hero p {
  font-size: 1.2rem;
  color: #e2cfcf;
}

.team-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 3rem 2rem;
}

.card {
  background-color: #2a0000;
  border-radius: 14px;
  border: 1px solid #b01717;
  box-shadow: 0 6px 24px rgba(255, 204, 204, 0.15);
  width: 280px;
  padding: 2.2rem 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 32px rgba(255, 204, 204, 0.3);
}

.photo {
  background-color: #b01717;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background-size: cover;
  background-position: center;
  border: 3px solid #b01717;
}

.card h3 {
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  color: #ffdfb9;
  margin-bottom: 0.6rem;
}

.card p {
  font-size: 1rem;
  color: #d8cfc9;
  line-height: 1.4;
}
</style>
