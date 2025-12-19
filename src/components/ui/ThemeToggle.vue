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
/* no hace falta CSS acá si ya te gusta como está */
</style>
