<template>
  <div class="events-page">
    <!-- Riflettore -->
    <div class="spotlight"></div>

    <!-- Hero con tendine -->
    <section class="events-hero with-curtains">
      <Navbar @show-login="showLogin = true" />
      <img class="curtain left" src="/images/curtain-left.png" alt="Tendina sinistra" />
      <img class="curtain right flipped" src="/images/curtain-left.png" alt="Tendina destra" />
      <h1><i class="fa-solid fa-masks-theater"></i> Eventi</h1>
      <p>La Redazione annuncia…</p>
    </section>

    <!-- Evento in primo piano -->
    <section class="highlight">
      <h2>🎭 Prossimo evento</h2>
      <div class="highlight-card">
        <h3>{{ highlightEvent.date }}</h3>
        <p>{{ highlightEvent.location }}</p>
        <router-link class="cta-button" :to="highlightEvent.link">Prenota ora</router-link>
      </div>
    </section>

    <!-- Slider eventi -->
    <section class="slider">
      <h2>🎫 Altri eventi</h2>
      <div class="event-slider">
        <div
          v-for="(event, i) in filteredEvents"
          :key="i"
          class="event-box"
          @click="highlightEvent = event"
        >
          <h4>{{ event.date }}</h4>
          <p>{{ event.location }}</p>
        </div>
      </div>
    </section>

    <LoginModal v-if="showLogin" @close="showLogin = false" />
  </div>
      <!-- Footer -->
  <TheaterFooter />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import LoginModal from '../components/LoginModal.vue'
import TheaterFooter from '../components/TheaterFooter.vue'

const showLogin = ref(false)

const events = ref([
  { date: '20 agosto 2024', location: 'Teatro Manzoni, Milano', link: '/payment?event=milano' },
  { date: '30 settembre 2024', location: 'Teatro Eliseo, Roma', link: '/payment?event=roma' },
  { date: '15 ottobre 2024', location: 'Auditorium Parco della Musica, Roma', link: '/payment?event=auditorium' }
])

const highlightEvent = ref(events.value[1])

const filteredEvents = computed(() => {
  return events.value
    .filter(e => e !== highlightEvent.value)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
})

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--y', `${e.clientY}px`)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter&display=swap');

.events-page {
  background: linear-gradient(to bottom, #1a0000, #0d0d0d);
  color: #f2efe9;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Riflettore */
.spotlight {
  content: '';
  position: fixed;
  top: var(--y);
  left: var(--x);
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(255, 255, 180, 0.18), transparent 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: top 0.2s ease, left 0.2s ease;
}

/* Hero */
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

.events-hero h1,
.events-hero p {
  position: relative;
  z-index: 2;
}
.events-hero h1 {
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: #ffdfb9;
}
.events-hero p {
  font-size: 1.2rem;
  color: #e2cfcf;
  margin-top: 0.5rem;
}

/* Highlight */
.highlight {
  text-align: center;
  margin-top: 2rem;
}

.highlight-card {
  background-color: #2a0000;
  margin: 1rem auto;
  padding: 1.5rem;
  max-width: 500px;
  border-radius: 14px;
  box-shadow: 0 6px 24px rgba(255, 204, 204, 0.15);
  border: 1px solid #b01717;
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
  display: inline-block;
  text-decoration: none;
}
.cta-button:hover {
  background-color: #8e1010;
}

/* Slider */
.slider {
  padding: 2rem 1rem;
  text-align: center;
}

.event-slider {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  margin-left: 150px;
  margin-right: 150px;
  z-index: 1000;
  padding: 1rem 0;
}

.event-box {
  min-width: 220px;
  background-color: #2a0000;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid #b01717;
  flex-shrink: 0;
  box-shadow: 0 6px 24px rgba(255, 204, 204, 0.15);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-box:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 32px rgba(255, 204, 204, 0.3);
}

.event-box h4 {
  margin-bottom: 0.5rem;
  color: #ffdfb9;
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
}

.event-box p {
  color: #e2cfcf;
  font-size: 1rem;
}

</style>
