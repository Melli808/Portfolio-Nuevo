<script setup>
import ScrollButton from '../navigation/ScrollButton.vue'

defineProps({
  t: { type: Function, required: true },
  nameImage: { type: String, required: true },
})
</script>

<template>
  <main id="home" class="start-screen" role="main">
    <div class="intro">
      <p class="intro-sub">{{ t('intro.sub') }}</p>

      <div class="intro-name">
        <img :src="nameImage" alt="Santiago" class="name-image" draggable="false" />
      </div>

      <h1 class="intro-role">{{ t('intro.role') }}</h1>

      <p class="intro-desc">
        {{ t('intro.desc') }}
      </p>

      <p class="intro-available">{{ t('intro.available') }}</p>
    </div>

    <ScrollButton target="#skills" :aria="t('aria.scrollSkills')">
      {{ t('aria.goSkills') }}
    </ScrollButton>
  </main>
</template>

<style scoped>
.start-screen{
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
  z-index:1;
  text-align:center;
}

.intro{
  text-align:left;
  max-width:720px;
  padding:20px;
  animation:fadeInUp 1s ease-out;
  z-index:2;
}

.intro-sub{
  color:var(--muted);
  font-size:.9rem;
  margin-bottom:10px;
  letter-spacing:1.5px;
  position:relative;
  transform:translate(-300px,40px);
}

.intro-name{
  font-size:clamp(2rem,6vw,4rem);
  font-weight:800;
  color:var(--text-1);
  margin:0;
  display:flex;
  align-items:center;
}

.name-image{
  max-height:300px;
  object-fit:contain;
  pointer-events:none;
  user-select:none;
  position:relative;
  transform:translate(-300px,-50px);
  transition:filter .35s ease;
}

.intro-role{
  font-size:clamp(1.5rem,3.5vw,2.5rem);
  font-weight:700;
  color:var(--text-3);
  margin:10px 0 20px;
  position:relative;
  transform:translate(-200px,-120px);
  transition:color .35s ease;
}

.intro-desc{
  font-size:1rem;
  color:var(--text-2);
  line-height:1.6;
  margin-bottom:20px;
  position:relative;
  transform:translate(-200px,-120px);
  transition:color .35s ease;
}

.intro-available{
  color:var(--accent);
  font-family:monospace;
  font-size:.9rem;
  position:relative;
  transform:translate(-200px,-120px);
}

@keyframes fadeInUp{
  from{opacity:0; transform:translateY(20px);}
  to{opacity:1; transform:translateY(0);}
}

/* Responsive (solo Home) */
@media (max-width:992px){
  .intro-name{ font-size:3.5rem; }
  .intro-role{ font-size:2rem; }
}

@media (max-width:768px){
  .intro{ padding-top:80px; }
  .intro-sub{ transform:none; }
  .name-image{ transform:none; max-height:200px; }
  .intro-role,.intro-desc,.intro-available{ transform:none; }
}

@media (max-width:576px){
  .intro-name{ font-size:2.5rem; }
  .name-image{ max-height:150px; }
  .intro-role{ font-size:1.5rem; }
  .intro-desc{ font-size:.9rem; }
}

@media (max-width:400px){
  .intro-name{ font-size:2rem; }
  .name-image{ max-height:120px; }
  .intro-role{ font-size:1.3rem; }
}
</style>
