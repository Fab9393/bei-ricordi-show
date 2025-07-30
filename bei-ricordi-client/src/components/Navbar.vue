<template>
  <nav class="navbar">
    <div class="nav-left">
      <router-link to="/"><font-awesome-icon :icon="['fas', 'house']" /> Home</router-link>
      <router-link to="/about"><font-awesome-icon :icon="['fas', 'users']" /> Chi siamo</router-link>
      <router-link to="/events"><font-awesome-icon :icon="['fas', 'masks-theater']" /> Eventi</router-link>
      <router-link to="/gallery"><font-awesome-icon :icon="['fas', 'images']" /> Galleria</router-link>
      <router-link to="/contacts"><font-awesome-icon :icon="['fas', 'envelope']" /> Contatti</router-link>
    </div>
    <span class="nav-right" @click="$emit('show-login')">
      <font-awesome-icon :icon="['fas', 'user-circle']" class="profile-icon" />
    </span>
  </nav>
</template>

<script setup>
// Questo componente non ha script, è solo visuale
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap');

.navbar {
  font-family: 'Cinzel', serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.85);
  padding: 0.6rem 1.5rem;
  border: 1px solid #8a6d3b;
  border-radius: 16px;
  margin: 1rem auto;
  max-width: 1080px;
  box-shadow: 0 0 12px rgba(255, 217, 120, 0.15);
  backdrop-filter: blur(6px);
  z-index: 1000;
  position: relative;
}

.nav-left a {
  margin-right: 1.2rem;
  color: #f9d9a6;
  text-decoration: none;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
}

.nav-left a:hover {
  color: #ffd27f;
}

.nav-right {
  cursor: pointer;
}

.profile-icon {
  color: #f9d9a6;
  font-size: 26px;
  transition: color 0.3s ease;
}
.profile-icon:hover {
  color: #ffd27f;
}

</style>
