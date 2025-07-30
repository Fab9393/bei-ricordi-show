<template>
  <div class="contact-page">
    <!-- Hero con tendine teatrali -->
    <section class="contact-hero with-curtains">
      <Navbar @show-login="showLogin = true" />
      <img class="curtain left" src="/images/curtain-left.png" alt="Tendina sinistra" />
      <img class="curtain right flipped" src="/images/curtain-left.png" alt="Tendina destra" />
      <h1><i class="fa-solid fa-envelope"></i> Contattaci</h1>
      <p>Siamo felici di ascoltarti</p>
    </section>

    <!-- Selettore Form -->
    <div class="form-switch">
      <button :class="{ active: formType === 'artist' }" @click="formType = 'artist'">Candidatura Artista</button>
      <button :class="{ active: formType === 'general' }" @click="formType = 'general'">Contatta la Redazione</button>
    </div>

    <!-- Card unificata -->
    <div class="form-box unified">
      <form v-if="formType === 'artist'" @submit.prevent="submitArtist">
        <h2>Candidati come Artista</h2>
        <input type="text" placeholder="Nome completo" v-model="artistForm.name" required />
        <input type="email" placeholder="Email" v-model="artistForm.email" required />
        <input type="tel" placeholder="Telefono" v-model="artistForm.phone" />
        <textarea rows="3" placeholder="Messaggio" v-model="artistForm.message" required></textarea>
        <input type="url" placeholder="Link Instagram" v-model="artistForm.instagram" />
        <input type="url" placeholder="Link Spotify" v-model="artistForm.spotify" />
        <button class="cta-button" type="submit">Invia candidatura</button>
      </form>

      <form v-else @submit.prevent="submitGeneral">
        <h2>Contatta la Redazione</h2>
        <input type="text" placeholder="Nome completo" v-model="generalForm.name" required />
        <input type="email" placeholder="Email" v-model="generalForm.email" required />
        <input type="tel" placeholder="Telefono" v-model="generalForm.phone" />
        <textarea rows="5" placeholder="Messaggio" v-model="generalForm.message" required></textarea>
        <button class="cta-button" type="submit">Invia messaggio</button>
      </form>
    </div>

    <LoginModal v-if="showLogin" @close="showLogin = false" />
  </div>
    <!-- Footer -->
  <TheaterFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import LoginModal from '../components/LoginModal.vue'
import TheaterFooter from '../components/TheaterFooter.vue'

const showLogin = ref(false)
const formType = ref('artist')

const artistForm = ref({ name: '', email: '', phone: '', message: '', instagram: '', spotify: '' })
const generalForm = ref({ name: '', email: '', phone: '', message: '' })

const submitArtist = () => {
  alert('Grazie per averci contattato come artista!')
  console.log('Artista:', artistForm.value)
}

const submitGeneral = () => {
  alert('Messaggio inviato con successo!')
  console.log('Generale:', generalForm.value)
}

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--y', `${e.clientY}px`)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter&display=swap');

.contact-page {
  background: linear-gradient(to bottom, #1a0000, #0d0d0d);
  color: #f2efe9;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.contact-page::before {
  content: '';
  position: fixed;
  top: var(--y);
  left: var(--x);
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(255,255,200,0.2), transparent 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: top 0.2s ease, left 0.2s ease;
}

/* Hero */
.contact-hero {
  position: relative;
  text-align: center;
  padding: 1rem 1rem 3rem;
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
.curtain.left { left: 0; }
.curtain.right { right: 0; }
.curtain.flipped { transform: scaleX(-1); }

.contact-hero h1 {
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: #ffdfb9;
  z-index: 2;
  position: relative;
}
.contact-hero p {
  font-size: 1.2rem;
  color: #e2cfcf;
  margin-top: 0.5rem;
  z-index: 2;
  position: relative;
}

/* Form Switch Buttons */
.form-switch {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 1rem;
}
.form-switch button {
  background: transparent;
  border: 2px solid #b01717;
  color: #ffdfb9;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}
.form-switch button.active,
.form-switch button:hover {
  background-color: #b01717;
  color: white;
}

/* Form card */
.form-box.unified {
  background-color: rgba(10, 10, 10, 0.85);
  border: 1px solid #b01717;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(255, 204, 204, 0.15);
  max-width: 600px;
  margin: 0 auto 3rem;
  padding: 2rem;
  z-index: 2;
}

.form-box h2 {
  font-family: 'Playfair Display', serif;
  margin-bottom: 1rem;
  color: #ffdfb9;
  font-size: 1.4rem;
  text-align: center;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: #2b2b2b;
  border: none;
  color: #f2efe9;
  border-radius: 6px;
  font-size: 1rem;
}
input::placeholder, textarea::placeholder {
  color: #aaa;
}
input:focus, textarea:focus {
  outline: none;
  border: 1px solid #b01717;
}

/* Button */
.cta-button {
  background-color: #b01717;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 40%;
}
.cta-button:hover {
  background-color: #8e1010;
}

/* Footer */
.contact-footer {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #222;
  color: #bbb;
  font-size: 0.95rem;
}

.form-box.unified {
  width: 90%;
  padding: 2rem clamp(1.5rem, 5vw, 3rem);
  text-align: center; 

}

@media (max-width: 768px) {
  .form-switch {
    flex-direction: column;
    align-items: center;
  }
  .form-box.unified {
    width: 90%;
    padding: 2rem clamp(1.5rem, 5vw, 3rem);
    text-align: center; 

  }
}
</style>
