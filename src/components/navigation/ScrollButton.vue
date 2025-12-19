<script setup>
defineProps({
  target: {
    type: String,
    required: true,
  },
  aria: {
    type: String,
    required: true,
  },
})

import { useScroll } from '../../composables/useScroll'
const { scrollToSection } = useScroll()
</script>

<template>
  <div class="scroll-button">
    <button
      class="scroll-toggle"
      @click="scrollToSection(target)"
      :aria-label="aria"
    >
      <svg
        class="arrow-down"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>

      <span class="sr-only">
        <slot />
      </span>
    </button>
  </div>
</template>
<style scoped>
.scroll-button{
  margin-top:40px;
  height:48px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.scroll-toggle{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  width:48px;
  height:48px;
  border-radius:24px;
  background:transparent;
  border:1px solid var(--border);
  transition:all .3s ease;
  overflow:hidden;
  cursor:pointer;
  color:var(--text-1);
  position:relative;
}

.scroll-toggle svg{
  opacity:1;
  stroke:var(--text-1);
  transition:transform .3s ease, stroke .3s ease;
}

.scroll-toggle:hover svg{
  stroke:var(--bg);
}

.scroll-toggle:hover{
  width:50px;
  background:var(--text-1);
  color:var(--bg);
  box-shadow:0 2px 12px var(--shadow-1);
}

.arrow-down{
  width:20px;
  height:20px;
  stroke:var(--text-1);
  opacity:1;
}

/* Accesibilidad */
.sr-only{
  position:absolute;
  width:1px;
  height:1px;
  padding:0;
  margin:-1px;
  overflow:hidden;
  clip:rect(0,0,0,0);
  white-space:nowrap;
  border:0;
}
</style>
