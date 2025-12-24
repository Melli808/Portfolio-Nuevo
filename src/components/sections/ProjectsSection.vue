<script setup>
import ScrollButton from '../navigation/ScrollButton.vue'

defineProps({
  t: { type: Function, required: true },
})
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="section-content">
      <h2 class="section-title">{{ t('projects.title') }}</h2>

      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Project 1"
              decoding="async"
              loading="lazy"
            />
            <div class="project-links">
              <a href="#" class="project-link" rel="noopener noreferrer">{{ t('projects.live') }}</a>
              <a href="#" class="project-link" rel="noopener noreferrer">{{ t('projects.code') }}</a>
            </div>
          </div>

          <div class="project-info">
            <h3>{{ t('projects.p1.title') }}</h3>
            <p>{{ t('projects.p1.desc') }}</p>
            <div class="project-tech">
              <span>Vue.js</span>
              <span>Firebase</span>
              <span>SCSS</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Project 2"
              decoding="async"
              loading="lazy"
            />
            <div class="project-links">
              <a href="#" class="project-link" rel="noopener noreferrer">{{ t('projects.live') }}</a>
              <a href="#" class="project-link" rel="noopener noreferrer">{{ t('projects.code') }}</a>
            </div>
          </div>

          <div class="project-info">
            <h3>{{ t('projects.p2.title') }}</h3>
            <p>{{ t('projects.p2.desc') }}</p>
            <div class="project-tech">
              <span>React</span>
              <span>D3.js</span>
              <span>Node.js</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Project 3"
              decoding="async"
              loading="lazy"
            />
            <div class="project-links">
              <a href="#" class="project-link" rel="noopener noreferrer">{{ t('projects.live') }}</a>
              <a href="#" class="project-link" rel="noopener noreferrer">{{ t('projects.code') }}</a>
            </div>
          </div>

          <div class="project-info">
            <h3>{{ t('projects.p3.title') }}</h3>
            <p>{{ t('projects.p3.desc') }}</p>
            <div class="project-tech">
              <span>Three.js</span>
              <span>GSAP</span>
              <span>Vue.js</span>
            </div>
          </div>
        </div>
      </div>

      <ScrollButton target="#home" :aria="t('aria.backToTop')">
        {{ t('aria.backToTop') }}
      </ScrollButton>
    </div>
  </section>
</template>

<style scoped>
/* Title (misma regla que venís repitiendo) */
.section-content{
  width:100%;
  max-width:1200px;
  margin:0 auto;
}

.section-title{
  font-size:clamp(1.6rem, 2vw + 1rem, 2.5rem);
  font-weight:700;
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

/* === Projects (copiado de tu App.vue) === */
.projects-section{ background:linear-gradient(to top,var(--black) 100%); }

.projects-grid{
  display:grid;
  grid-template-columns:repeat(3, minmax(0, 1fr));
  gap:30px;
}


.project-card{
  background:var(--surface-1);
  border-radius:10px;
  overflow:hidden;
  transition:transform .3s ease, box-shadow .3s ease, background-color .35s ease, border-color .35s ease;
  border:1px solid var(--border);
}
.project-card:hover{
  transform:translateY(-10px);
  box-shadow:0 15px 30px var(--shadow-1);
}

.project-image{
  position:relative;
  overflow:hidden;
  height:200px;
}
.project-image img{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:transform .5s ease;
}
.project-card:hover .project-image img{
  transform:scale(1.05);
}

.project-links{
  position:absolute;
  top:0; left:0;
  width:100%; height:100%;
  background:rgba(0,0,0,.7);
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
  opacity:0;
  transition:opacity .3s ease;
}
:global([data-theme="light"]) .project-links{ background:rgba(0,0,0,.3); }
.project-card:hover .project-links{ opacity:1; }

.project-link{
  color:#fff;
  background:color-mix(in srgb, var(--accent) 80%, transparent);
  padding:8px 15px;
  border-radius:4px;
  text-decoration:none;
  font-size:.9rem;
  transition:background .3s ease;
}
.project-link:hover{ background:var(--accent); }

.project-info{ padding:20px; }
.project-info h3{ color:var(--text-1); margin-bottom:10px; }
.project-info p{
  color:var(--text-2);
  font-size:.9rem;
  line-height:1.6;
  margin-bottom:15px;
}

.project-tech{ display:flex; flex-wrap:wrap; gap:10px; }
.project-tech span{
  background:color-mix(in srgb, var(--accent) 9%, transparent);
  color:var(--accent);
  padding:3px 10px;
  border-radius:20px;
  font-size:.7rem;
}

@media (max-width:576px){
  .project-links{ flex-direction:column; gap:10px; }
}
@media (max-width:1100px){
  .projects-grid{ grid-template-columns:repeat(2, minmax(0, 1fr)); }
}

@media (max-width:768px){
  .projects-grid{ grid-template-columns:1fr; }
}

</style>
