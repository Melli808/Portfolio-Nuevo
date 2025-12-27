<template>
  <v-btn
    icon
    class="icon-btn theme-toggle-btn"
    @click="emit('toggle')"
    :aria-pressed="isDark"
    :aria-label="t('aria.toggleTheme')"
  >
    <v-icon>{{ isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
  </v-btn>
</template>

<script setup>
defineProps({
  t: { type: Function, required: true },
  isDark: { type: Boolean, required: true },
})

const emit = defineEmits(['toggle'])
</script>

<style scoped>
  .theme-toggle-btn {
    color: var(--text-1);
    width: 50px;
    height: 50px;
    min-width: 0;
    border-radius: 50%;
    transition: background-color 0.3s ease, transform 0.35s ease;
  }
  .icon-btn{ 
    color:var(--text-1); 
    width:40px; 
    height:40px; 
    min-width:0; 
    border-radius:50%; 
    background:transparent; 
    transition:background-color .3s ease, 
    transform .35s ease; 
  }
  .icon-btn:hover{ 
    background-color:var(--surface-3); 
    transform:translateY(-1px) scale(1.03); 
  }
</style>
