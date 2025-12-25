<template>
  <v-menu v-model="menu" :close-on-content-click="true" location="bottom">
    <template #activator="{ props: act }">
      <v-btn
        v-bind="act"
        class="lang-btn"
        :aria-label="`${t('aria.changeLanguage')} ${locale.toUpperCase()}`"
      >
        {{ locale.toUpperCase() }}
      </v-btn>
    </template>

    <v-list class="lang-menu">
      <v-list-item
        v-for="l in locales"
        :key="l"
        @click="emit('set-locale', l)"
        :aria-selected="locale === l"
      >
        <v-list-item-title>{{ l.toUpperCase() }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  t: { type: Function, required: true },
  locale: { type: String, required: true },
  locales: { type: Array, required: true },
  
  langMenu: { type: Boolean, required: true },
})

const emit = defineEmits(['update:langMenu', 'set-locale'])

const menu = computed({
  get: () => props.langMenu,
  set: (val) => emit('update:langMenu', val),
})
</script>

<style scoped>
.lang-btn{
  height:40px;
  min-width:48px;
  padding:0 12px;
  border-radius:999px;
  background:var(--surface-2);
  color:var(--text-1);
  border:1px solid var(--border);
  text-transform:none;
  letter-spacing:.5px;
  font-weight:600;
  transition:background-color .3s ease, transform .35s ease, color .35s ease, border-color .35s ease;
}
.lang-btn:hover{
  background-color:var(--surface-3);
  transform:translateY(-1px) scale(1.03);
}
.lang-menu{
  background:var(--surface-2);
  border:1px solid var(--border);
  box-shadow:0 8px 24px var(--shadow-1);
}
</style>
