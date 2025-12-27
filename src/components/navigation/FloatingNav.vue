<script setup>
defineProps({
  show: { type: Boolean, default: false },
  t: { type: Function, required: true },
})

import { useScroll } from '../../composables/useScroll'
const { scrollToSection } = useScroll()
</script>

<template>
  <div class="footer-icons" :class="{ 'float-in': show }">
    <v-btn icon class="icon-btn" @click="scrollToSection('#home')" :aria-label="t('aria.navHome')">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn icon class="icon-btn" @click="scrollToSection('#skills')" :aria-label="t('aria.navSkills')">
      <v-icon>mdi-code-tags</v-icon>
    </v-btn>

    <v-btn icon class="icon-btn" @click="scrollToSection('#about')" :aria-label="t('aria.navAbout')">
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn icon class="icon-btn" @click="scrollToSection('#projects')" :aria-label="t('aria.navProjects')">
      <v-icon>mdi-folder</v-icon>
    </v-btn>

    <div class="divider"></div>

    <v-btn
      icon
      class="icon-btn"
      href="https://github.com/Melli808"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open GitHub"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn
      icon
      class="icon-btn"
      href="https://www.linkedin.com/in/santiago-melgarejo-a15985328/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open LinkedIn"
    >
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.footer-icons{
  position:fixed; bottom:12px; left:50%; transform:translate(-50%,12px);
  background-color:var(--surface-2); padding:2px 5px; border-radius:50px; display:flex; align-items:center; gap:1px;
  box-shadow:0 4px 20px var(--shadow-1); opacity:0; transition:opacity .6s ease, transform .6s ease, background-color .35s ease, color .35s ease, border-color .35s ease; z-index:999;
}
.footer-icons.float-in{ opacity:1; transform:translate(-50%,0); }
.icon-btn{ color:var(--text-1); width:50px; height:50px; min-width:0; border-radius:50%; background:transparent; transition:background-color .3s ease, transform .35s ease; }
.icon-btn:hover{ background-color:var(--surface-3); transform:translateY(-1px) scale(1.03); }
.divider{ width:2px; height:30px; background-color:var(--border); margin:0 4px; }

</style>
