<template>
  <div :class="['loading-screen', { 'slide-up': slideOut }]" aria-hidden="true">
    <div class="loading-content">
      <div class="loading-text">{{ text }}</div>
      <div class="loading-percent">{{ loading }}%</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loading: { type: Number, required: true },
  slideOut: { type: Boolean, default: false },
  // si no querés pasarle texto, queda como LOADING...
  text: { type: String, default: 'LOADING...' },
})
</script>

<style scoped>
/* ===== Loading (copiado de App.vue) ===== */
.loading-screen{
  width:100vw;
  height:100vh;
  background:var(--bg);
  position:fixed;
  top:0;
  left:0;
  z-index:999;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  pointer-events:none;
  overflow:hidden;
  transform:translateY(0);
  transition:
    transform 1s ease-in-out,
    clip-path 1s ease-in-out,
    background-color .35s ease,
    color .35s ease,
    border-color .35s ease;
  clip-path:inset(0 0 0 0 round 0px);
}

.slide-up{
  transform:translateY(-100%);
  box-shadow:0 40px 60px var(--shadow-1);
}

.loading-content{
  z-index:2;
  display:flex;
  flex-direction:column;
  align-items:center;
}

.loading-text{
  color:var(--muted);
  font-size:.9rem;
  margin-bottom:10px;
  letter-spacing:2px;
}

.loading-percent{
  font-size:clamp(2.4rem,2vw + 1.6rem,4rem);
  font-weight:bold;
  color:var(--text-1);
  transition:all .3s ease;
}
</style>
