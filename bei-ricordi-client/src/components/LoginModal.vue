<template>
  <div class="overlay" @click.self="emit('close')">
    <div class="modal">
      <h2><i class="fa-solid fa-masks-theater"></i> Accedi con Google</h2>
      <p>Per acquistare biglietti e accedere al tuo profilo</p>
      <button class="google-button" @click="loginWithGoogle">
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
        Continua con Google
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
const emit = defineEmits(['close'])

const loginWithGoogle = () => {
  alert('TODO: Integrazione con Google OAuth')
}

const handleKey = (e) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap');

.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(10, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background: #2a0000;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  border: 1px solid #b01717;
  box-shadow: 0 0 40px rgba(255, 204, 204, 0.15);
  font-family: 'Cinzel', serif;
}

.modal h2 {
  color: #ffdfb9;
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
}

.modal p {
  color: #e2cfcf;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.google-button {
  background-color: #fff;
  color: #000;
  border: none;
  padding: 0.7rem 1.2rem;
  font-size: 0.95rem;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s, transform 0.2s;
  font-weight: bold;
}

.google-button:hover {
  background-color: #f0f0f0;
  transform: scale(1.02);
}

.google-button img {
  width: 20px;
  height: 20px;
}
</style>
