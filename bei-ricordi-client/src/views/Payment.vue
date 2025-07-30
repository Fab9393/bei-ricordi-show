<template>
  <div class="payment-page">


    <!-- Hero -->
    <section class="payment-hero with-curtains">
      <Navbar @show-login="showLogin = true" />
      <img class="curtain left" src="/images/curtain-left.png" alt="Tendina sinistra" />
      <img class="curtain right flipped" src="/images/curtain-left.png" alt="Tendina destra" />
      <h1><i class="fa-solid fa-ticket"></i> Acquista il tuo biglietto</h1>
      <p>Un'esperienza dal vivo ti aspetta</p>
    </section>

    <!-- Payment Form -->
    <section class="payment-form">
      <form @submit.prevent="submitPayment">
        <h2>Dati dell'acquirente</h2>
        <input type="text" placeholder="Nome completo" v-model="form.name" required />
        <input type="email" placeholder="Email" v-model="form.email" required />
        <input type="tel" placeholder="Telefono" v-model="form.phone" />

        <h2>Pagamento</h2>
        <input type="text" placeholder="Numero carta (xxxx xxxx xxxx xxxx)" v-model="form.cardNumber" required />
        <input type="text" placeholder="Scadenza (MM/AA)" v-model="form.expiry" required />
        <input type="text" placeholder="CVV" v-model="form.cvv" required />

        <button type="submit" class="cta-button">Conferma pagamento</button>
      </form>
    </section>

    <LoginModal v-if="showLogin" @close="showLogin = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import LoginModal from '../components/LoginModal.vue'

const showLogin = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  cardNumber: '',
  expiry: '',
  cvv: ''
})

const submitPayment = () => {
  console.log('Pagamento inviato:', form.value)
  alert('Pagamento effettuato con successo! Riceverai una mail di conferma.')
}

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--y', `${e.clientY}px`)
  })
})
</script>

<style scoped>
.payment-page {
  background: linear-gradient(to bottom, #1a0000, #0d0d0d);
  color: #f2efe9;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.payment-page::before {
  content: '';
  position: fixed;
  top: var(--y);
  left: var(--x);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255,255,200,0.2), transparent 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.payment-hero {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 1rem 1rem 3rem;
  background: radial-gradient(circle at top, #400000, transparent 70%);
}
.payment-hero h1 {
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  color: #ffdfb9;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1000;
}
.payment-hero p {
  font-size: 1rem;
  color: #e2cfcf;
}
.curtain {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 33vw;
  min-height: 100%;
  object-fit: cover;
  z-index: 998;
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

.payment-form {
  text-align: center; 
  max-width: 500px;
  margin: 2rem auto;
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(255, 204, 204, 0.1);
}
.payment-form form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payment-form h2 {
  color: #ffdfb9;
  font-family: 'Cinzel', serif;
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.55rem;
  margin-bottom: 1rem;
  background-color: #2b2b2b;
  border: none;
  color: #f2efe9;
  border-radius: 6px;
  font-size: 0.8rem;
}
input::placeholder {
  color: #aaa;
}
input:focus {
  outline: none;
  border: 1px solid #b01717;
}

.cta-button {
  background-color: #b01717;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  font-size: 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 40%;
}
.cta-button:hover {
  background-color: #8e1010;
}
</style>
