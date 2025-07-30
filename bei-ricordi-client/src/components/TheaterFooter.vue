<template>
  <footer class="theater-footer">
    <p><strong>Email:</strong> info@beiricordishow.it</p>
    <p><strong>Telefono:</strong> +39 328 456 7890</p>
    <p><strong>Indirizzo:</strong> Via Carlo Emanuele I, 26 - Roma</p>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.theater-footer {
  text-align: center;
  margin-top: 2rem;
  padding: 0.8rem 1rem; /* 🔽 Ridotto */
  border-top: 1px solid #3a0000;
  color: #ccc;
  font-size: 0.9rem; /* 🔽 Leggermente più piccolo */
  background: rgba(10, 0, 0, 0.4);
  font-family: 'Inter', sans-serif;
}

.theater-footer p {
  margin: 0.2rem 0; /* 🔽 Ridotto lo spazio tra righe */
}

.theater-footer strong {
  color: #ffdfb9;
}
</style>
