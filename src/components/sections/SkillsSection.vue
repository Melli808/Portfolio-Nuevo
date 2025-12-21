<script setup>
import ScrollButton from '../navigation/ScrollButton.vue'

defineProps({
  t: { type: Function, required: true },
  skillGroups: { type: Array, required: true },
})
</script>

<template>
  <!-- Skills Section (LOGOS) -->
  <section id="skills" class="section skills-section">
    <div class="section-content">
      <h2 class="section-title">{{ t('skills.title') }}</h2>

      <div class="skills-grid logos">
        <div class="skill-category" v-for="group in skillGroups" :key="group.title">
          <h3>{{ group.title }}</h3>

          <ul class="logo-grid">
            <li
              v-for="item in group.items"
              :key="group.title + '-' + item.name"
              class="logo-item"
              :title="item.name"
            >
              <img :src="item.img" decoding="async" loading="lazy" :alt="`${item.name} logo`" />
              <span class="logo-label">{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <ScrollButton target="#about" :aria="t('aria.scrollAbout')">
        {{ t('aria.goAbout') }}
      </ScrollButton>
    </div>
  </section>
</template>

<style scoped>
/* === Skills === */
.skills-section{
  background:linear-gradient(to bottom, transparent 1%, var(--black) 100%);
  position:relative;
  z-index:2;
}

.skills-grid.logos{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
}

.skill-category{
  background:var(--surface-2);
  padding:30px;
  border-radius:10px;
  backdrop-filter:blur(5px);
  border:1px solid var(--border);
  transition:background-color .35s ease, border-color .35s ease, color .35s ease;
}

.skill-category h3{
  color:var(--text-1);
  margin-bottom:20px;
  font-size:1.3rem;
}

.logo-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(92px, 1fr));
  gap:14px;
  list-style:none;
  padding:0;
  margin:0;
}

.logo-item{
  aspect-ratio:1/1;
  border-radius:14px;
  border:1px solid var(--border-soft);
  background:var(--surface-3);
  backdrop-filter:blur(5px);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;
  transition:transform .2s ease, border-color .2s ease, box-shadow .2s ease, background .2s ease;
  padding:12px;
}

.logo-item img{
  width:42px;
  height:42px;
  object-fit:contain;
  filter:grayscale(20%) contrast(1.05) brightness(.95);
  transition:filter .2s ease;
  pointer-events:none;
  user-select:none;
}

.logo-item:hover{
  transform:translateY(-4px);
  border-color:color-mix(in srgb, var(--accent) 70%, transparent);
  box-shadow:0 10px 26px var(--shadow-2);
  background:color-mix(in srgb, var(--accent) 6%, transparent);
}

.logo-item:hover img{
  filter:grayscale(0%) contrast(1.1) brightness(1);
}

.logo-label{
  font-size:.8rem;
  color:var(--text-2);
  text-align:center;
  line-height:1;
}

.section-title{
  font-size:clamp(1.6rem, 2vw + 1rem, 2.5rem);
  color:var(--text-1);
  margin-bottom:60px;
  position:relative;
  display:inline-block;
  transition:color .35s ease;
}

.section-title::after{
  content:'';
  position:absolute;
  bottom:-10px;
  left:0;
  width:60px;
  height:3px;
  background:var(--accent);
}


/* Responsive (solo Skills) */
@media (max-width:1200px){
  .skills-grid.logos{ grid-template-columns:repeat(2,1fr); }
}

@media (max-width:768px){
  .skills-grid.logos{ grid-template-columns:1fr; }
  .logo-grid{ grid-template-columns:repeat(auto-fit,minmax(84px,1fr)); gap:12px; }
}
</style>
