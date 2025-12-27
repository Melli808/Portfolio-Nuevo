<script setup>
import ScrollButton from '../navigation/ScrollButton.vue'

defineProps({
  t: { type: Function, required: true },
})
</script>

<template>
  <section id="about" class="section about-section">
    <div class="section-content">
      <h2 class="section-title">{{ t('about.title') }}</h2>

      <div class="about-grid">
        <div class="about-text">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
          <p>{{ t('about.p3') }}</p>

          <h3 class="tech-title">{{ t('about.techTitle') }}</h3>

          <ul class="tech-list">
            <li>Vue.js</li>
            <li>React</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Figma / Adobe XD</li>
          </ul>
        </div>
        <div class="about-image">
          <div class="image-container">
            <div class="image-border"></div>
            <img
              src="../../assets/Me.jpg"
              alt="Profile portrait"
              class="profile-image"
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <ScrollButton target="#projects" :aria="t('aria.scrollProjects')">
        {{ t('aria.goProjects') }}
      </ScrollButton>
    </div>
  </section>
</template>

<style scoped>
.about-section{
  background:linear-gradient(to top,var(--black) 100%); 
  position:relative;
  z-index:2;
}

.section-content{
  width:100%;
  max-width:1200px;
  margin:0 auto;
}

.section-title{
  font-size:clamp(1.6rem, 2vw + 1rem, 2.5rem);
  font-weight:700;
  color:var(--text-1);
  margin-bottom:10px;
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

.about-grid{
  display:grid;
  grid-template-columns:1.2fr .8fr;
  gap:60px;
  align-items:center;
}

.about-text{
  color:var(--text-2);
  font-size:1rem;
  line-height:1.7;
}
.about-text p{
  margin-bottom:20px;
}

.tech-title{
  margin-top:30px;
  margin-bottom:16px;
  font-size:1.1rem;
  color:var(--text-1);
}
.tech-list{
  list-style:none;
  padding:0;
  margin:0;
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:10px 30px;
}
.tech-list li{
  position:relative;
  padding-left:14px;
  color:var(--text-2);
}
.tech-list li::before{
  content:'▸';
  position:absolute;
  left:0;
  top:0;
  color:var(--accent);
}

.about-image{
  display:flex;
  justify-content:flex-end;
}

.image-container{
  position:relative;
  width:420px;
  max-width:100%;
  border-radius:16px;
}

.image-border{
  position:absolute;
  inset:0;
  border:2px solid var(--accent);
  border-radius:16px;
  transform:translate(14px, 14px);
  pointer-events:none;
  opacity:.9;
}
.image-container{
  position:relative;
  width:420px;
  max-width:100%;
  border-radius:16px;
  transition: transform .35s ease;
}

.image-border{
  position:absolute;
  inset:0;
  border:2px solid var(--accent);
  border-radius:16px;
  transform:translate(14px, 14px);
  transition: transform .35s ease, opacity .35s ease;
  pointer-events:none;
  opacity:.9;
}

.profile-image{
  position:relative;
  z-index:1;
  width:100%;
  height:auto;
  display:block;
  border-radius:16px;
  transition: transform .35s ease, filter .35s ease;
  box-shadow:0 14px 36px var(--shadow-2);
}

.image-container:hover .image-border{
  transform:translate(8px, 8px); 
  opacity:1;
}

.image-container:hover .profile-image{
  transform:translate(-2px, -2px); 
}

@media (max-width:992px){
  .about-grid{
    grid-template-columns:1fr;
    gap:40px;
  }
  .about-image{
    justify-content:flex-start;
  }
  .image-container{
    width:min(520px, 100%);
  }
}

@media (max-width:520px){
  .tech-list{
    grid-template-columns:1fr;
  }
}
</style>
