<template>
  <div class="background"></div>
  <v-app>
    <!-- CARGA -->
    <div :class="['loading-screen', { 'slide-up': slideOut }]">
      <div class="loading-content">
        <div class="loading-text">{{ t('loading.text') }}</div>
        <div class="loading-percent">{{ loading }}%</div>
      </div>
    </div>

    <!-- CASA -->
    <HomeSection :t="t" :nameImage="nameImage" />

    <!-- Skills Section (LOGOS) -->
    <SkillsSection :t="t" :skillGroups="skillGroups" />
    <!-- About Section -->
    <section id="about" class="section about-section">
      <div class="section-content">
        <h2 class="section-title">{{ t('about.title') }}</h2>
        <div class="about-grid">
          <div class="about-text">
            <p>{{ t('about.p1') }}</p>
            <p>{{ t('about.p2') }}</p>
            <p>{{ t('about.p3') }}</p>
            <div class="about-tech">
              <h3>{{ t('about.techTitle') }}</h3>
              <ul class="tech-list">
                <li>Vue.js</li>
                <li>React</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Figma / Adobe XD</li>
              </ul>
            </div>
          </div>
          <div class="about-image">
            <div class="image-container">
              <div class="image-border"></div>
              <img src="./assets/Me.jpg" alt="Profile portrait" class="profile-image" decoding="async" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Scroll button a Projects -->
        <ScrollButton
      target="#projects"
        :aria="t('aria.scrollProjects')"
      >
        {{ t('aria.goProjects') }}
      </ScrollButton>
      </div>
    </section>

    <!-- Projects Section -->
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

        <!-- Scroll button volver al Home -->
        <ScrollButton
      target="#home"
        :aria="t('aria.scrollHome')">
        {{ t('aria.goHome') }}
      </ScrollButton>
      </div>
    </section>

    <!-- Floating Navigation -->
     <FloatingNav :show="showFloatingNav" :t="t" />
  </v-app>

  <!-- Botones globales teletransportados al <body> -->
  <teleport to="body">
    <div v-if="loaded" class="theme-toggle-global">
      <!-- Selector de idioma (a la izquierda) -->
         <LanguageSelector
           :t="t"
           :locale="locale"
           :locales="locales"
           v-model:langMenu="langMenu"
           @set-locale="setLocale"
/>

      <!-- Botón de tema -->
      <ThemeToggle
      :t="t"
      :isDark="isDark"
      @toggle="toggleDarkMode"
/>

    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

import HomeSection from './components/sections/HomeSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue' 
import { useScroll } from './composables/useScroll'
import { useLoading } from './composables/useLoading'
import ScrollButton from './components/navigation/ScrollButton.vue'
import FloatingNav from './components/navigation/FloatingNav.vue'
import LanguageSelector from './components/ui/LanguageSelector.vue'
import ThemeToggle from './components/ui/ThemeToggle.vue'
import { useI18nLite } from './composables/useI18nLite'


import NameDark from './assets/Santiago_Melgarejo.png'
import NameLight from './assets/Santiago_Melgarejo_Black.png'

import VueLogo from './assets/logos/vue.svg'
import ReactLogo from './assets/logos/react.svg'
import JsLogo from './assets/logos/javascript.svg'
import CssLogo from './assets/logos/css3.svg'
import FigmaLogo from './assets/logos/figma.svg'
import GitLogo from './assets/logos/git.svg'
import BlenderLogo from './assets/logos/Blender.svg'
import ESLogo from './assets/logos/es.svg'
import ENLogo from './assets/logos/en.svg'



const { loading, slideOut, loaded, start, stop } = useLoading()
const { scrollToSection } = useScroll()

const showFloatingNav = ref(false)

const isDark = ref(true)
const nameImage = computed(() => (isDark.value ? NameDark : NameLight))

const skillGroups = ref([
  {
    title: 'Frontend Development',
    items: [
      { name: 'Vue.js', img: VueLogo },
      { name: 'React', img: ReactLogo },
      { name: 'JavaScript', img: JsLogo },
      { name: 'CSS/SCSS', img: CssLogo },
    ],
  },
  {
    title: 'Design & Tools',
    items: [
      { name: 'Figma', img: FigmaLogo },
      { name: 'Blender', img: BlenderLogo },
      { name: 'Git', img: GitLogo },
    ],
  },
  {
    title: 'Language',
    items: [
      { name: 'Spanish', img: ESLogo },
      { name: 'English', img: ENLogo },
    ],
  },
])


// Aplica el tema y persiste (+ clase .dark para la animación)
function applyTheme(toDark) {
  isDark.value = toDark
  const next = toDark ? 'dark' : 'light'
  const root = document.documentElement
  root.setAttribute('data-theme', next)
  root.classList.toggle('dark', toDark)
  localStorage.setItem('theme', next)
}

// Toggle con View Transitions API (fallback incluido)
function toggleDarkMode() {
  const nextDark = !isDark.value
  const switchTheme = () => applyTheme(nextDark)
  const prefersReduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  // @ts-ignore experimental
  if (prefersReduce || !document.startViewTransition) {
    switchTheme()
    return
  }
  // @ts-ignore experimental
  document.startViewTransition(switchTheme)
}

/* ===== i18n LITE ===== */
const messages = {
  en: {
    loading: { text: 'LOADING...' },
    intro: {
      sub: 'Hi, my name is',
      role: 'I build clean, functional web interfaces.',
      desc:
        "I'm a passionate Frontend Developer with experience in Vue, JavaScript, UI/UX and beautiful interfaces. " +
        'Currently exploring motion, animations and creative coding.',
      available: 'Currently available for freelance',
    },
    skills: { title: 'Skills & Expertise' },
    about: {
      title: 'About Me',
      p1: "Hello! I'm Santiago, a frontend developer based in Argentina with a passion for creating beautiful, functional, and user-centered digital experiences.",
      p2: "With over 3 years of experience in web development, I've worked with startups and agencies to build modern web applications that are fast, accessible, and visually appealing.",
      p3: "When I'm not coding, you'll find me exploring new design trends, experimenting with 3D graphics, or enjoying outdoor activities.",
      techTitle: 'Technologies I work with:',
    },
    projects: {
      title: 'Featured Projects',
      live: 'Live Demo',
      code: 'Code',
      p1: {
        title: 'E-commerce Platform',
        desc:
          'A modern e-commerce solution built with Vue.js and Firebase, featuring product filtering, cart functionality, and secure checkout.',
      },
      p2: {
        title: 'Interactive Dashboard',
        desc:
          'Data visualization dashboard with real-time updates, custom charts, and user management features.',
      },
      p3: {
        title: 'Portfolio Website',
        desc:
          'Creative portfolio website with smooth animations, 3D elements and custom transitions using GSAP.',
      },
    },
    aria: {
      changeLanguage: 'Change language. Current:',
      toggleTheme: 'Toggle theme',
      scrollSkills: 'Scroll to skills',
      scrollAbout: 'Scroll to about',
      scrollProjects: 'Scroll to projects',
      goSkills: 'Go to Skills',
      goAbout: 'Go to About',
      goProjects: 'Go to Projects',
      backToTop: 'Back to top',
      navHome: 'Go home',
      navSkills: 'Go to skills',
      navAbout: 'Go to about',
    },
  },
  es: {
    loading: { text: 'CARGANDO...' },
    intro: {
      sub: 'Hola, mi nombre es',
      role: 'Construyo interfaces web limpias y funcionales.',
      desc:
        'Soy un Desarrollador Frontend con experiencia en Vue, JavaScript, UI/UX e interfaces bonitas. ' +
        'Actualmente explorando motion, animaciones y creative coding.',
      available: 'Actualmente disponible para freelance',
    },
    skills: { title: 'Habilidades & Experiencia' },
    about: {
      title: 'Sobre mí',
      p1: '¡Hola! Soy Santiago, desarrollador frontend en Argentina con pasión por crear experiencias digitales bonitas, funcionales y centradas en el usuario.',
      p2: 'Con más de 3 años de experiencia, trabajé con startups y agencias para construir aplicaciones web modernas rápidas, accesibles y visualmente atractivas.',
      p3: 'Cuando no estoy codeando, me gusta explorar nuevas tendencias de diseño, experimentar con gráficos 3D o disfrutar actividades al aire libre.',
      techTitle: 'Tecnologías con las que trabajo:',
    },
    projects: {
      title: 'Proyectos Destacados',
      live: 'Ver Demo',
      code: 'Código',
      p1: {
        title: 'Plataforma E-commerce',
        desc:
          'Solución e-commerce moderna con Vue.js y Firebase: filtrado de productos, carrito y checkout seguro.',
      },
      p2: {
        title: 'Dashboard Interactivo',
        desc:
          'Tablero de visualización de datos con actualizaciones en tiempo real, gráficos personalizados y gestión de usuarios.',
      },
      p3: {
        title: 'Sitio de Portafolio',
        desc:
          'Portafolio creativo con animaciones fluidas, elementos 3D y transiciones personalizadas usando GSAP.',
      },
    },
    aria: {
      changeLanguage: 'Cambiar idioma. Actual:',
      toggleTheme: 'Cambiar tema',
      scrollSkills: 'Ir a habilidades',
      scrollAbout: 'Ir a sobre mí',
      scrollProjects: 'Ir a proyectos',
      goSkills: 'Ir a Habilidades',
      goAbout: 'Ir a Sobre mí',
      goProjects: 'Ir a Proyectos',
      backToTop: 'Volver arriba',
      navHome: 'Ir al inicio',
      navSkills: 'Ir a habilidades',
      navAbout: 'Ir a sobre mí',
    },
  },
}

const locales = ['es', 'en']
const langMenu = ref(false)
const { locale, setLocale, t } = useI18nLite(messages, 'en')






onMounted(() => {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  applyTheme(saved ? saved === 'dark' : !!prefersDark)

  const preload = new Image()
  preload.src = NameLight

  start()
  setTimeout(() => { showFloatingNav.value = true }, 1800)

  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && locales.includes(savedLocale)) {
  setLocale(savedLocale)
}

})
onUnmounted(() => {
  stop()
})

function submitForm() {}
</script>

<style scoped>
:global(.v-application){ background:transparent!important; }

/* ===== THEME VARIABLES ===== */
:global(:root){
  --accent:#FFB301;
  --expo-out:cubic-bezier(0.16,1,0.3,1);

  --text-1:#fff; --text-2:#ccc; --text-3:#999ca7; --muted:#919191;
  --bg:#111; --black:#000; --c1:#111111; --c2:#141414; --c3:#121212;

  --surface-1:rgba(30,30,30,.8);
  --surface-2:rgba(40,40,40,.6);
  --surface-3:rgba(40,40,40,.45);

  --border:rgba(255,255,255,.1);
  --border-soft:rgba(255,255,255,.08);

  --shadow-1:rgba(0,0,0,.5);
  --shadow-2:rgba(0,0,0,.35);
  --input-bg:rgba(255,255,255,.05);
  --input-focus-bg:rgba(63,176,255,.05);
  --input-border:rgba(255,255,255,.1);
}
:global([data-theme="light"]){
  --accent:#0233d6;
  --text-1:#111; --text-2:#444; --text-3:#5b6b83; --muted:#666;
  --bg:#f6f7f9; --black:#fff; --c1:#eef1f6; --c2:#fff; --c3:#e9eef5;
  --surface-1:rgba(255,255,255,.9);
  --surface-2:rgba(255,255,255,.85);
  --surface-3:rgba(255,255,255,.8);
  --border:rgba(0,0,0,.12); --border-soft:rgba(0,0,0,.08);
  --shadow-1:rgba(0,0,0,.12); --shadow-2:rgba(0,0,0,.08);
  --input-bg:rgba(0,0,0,.03); --input-focus-bg:rgba(0,0,0,.04); --input-border:rgba(0,0,0,.12);
}

/* View Transitions (global) */
:global(::view-transition-group(root)){ animation-duration:.7s; animation-timing-function:var(--expo-out); }
:global(::view-transition-new(root)){ animation-name:reveal-light; }
:global(::view-transition-old(root)), :global(.dark::view-transition-old(root)){ animation:none; z-index:-1; }
:global(.dark::view-transition-new(root)){ animation-name:reveal-dark; }
@media (prefers-reduced-motion: reduce){ :global(::view-transition-group(root)){ animation-duration:.001s; } }
@keyframes reveal-dark{
  from{ clip-path:polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%); }
  to  { clip-path:polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%); }
}
@keyframes reveal-light{
  from{ clip-path:polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%); }
  to  { clip-path:polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%); }
}

/* Smooth scroll */
:global(html:focus-within){ scroll-behavior:smooth; }

/* Background */
.background{ position:fixed; inset:0; z-index:0; width:100%; height:100%; --s:80px;
  --_g:var(--c3) 0 120deg,#0000 0;
  background:
    conic-gradient(from -60deg at 50% calc(100%/3),var(--_g)),
    conic-gradient(from 120deg at 50% calc(200%/3),var(--_g)),
    conic-gradient(from 60deg at calc(200%/3),var(--c3) 60deg,var(--c2) 0 120deg,#0000 0),
    conic-gradient(from 180deg at calc(100%/3),var(--c1) 60deg,var(--_g)),
    linear-gradient(90deg,var(--c1) calc(100%/6),var(--c2) 0 50%,var(--c1) 0 calc(500%/6),var(--c2) 0);
  background-size:calc(1.732 * var(--s)) var(--s);
  pointer-events:none; animation:moveBackground 20s linear infinite;
}
@keyframes moveBackground{ 0%{background-position:0 0;} 100%{background-position:calc(1.732 * var(--s)) var(--s);} }

/* Loading */
.loading-screen{
  width:100vw; height:100vh; background:var(--bg); position:fixed; top:0; left:0; z-index:999;
  display:flex; flex-direction:column; justify-content:center; align-items:center; pointer-events:none; overflow:hidden;
  transform:translateY(0);
  transition:transform 1s ease-in-out, clip-path 1s ease-in-out, background-color .35s ease, color .35s ease, border-color .35s ease;
  clip-path:inset(0 0 0 0 round 0px);
}
.slide-up{ transform:translateY(-100%); box-shadow:0 40px 60px var(--shadow-1); }
.loading-content{ z-index:2; display:flex; flex-direction:column; align-items:center; }
.loading-text{ color:var(--muted); font-size:.9rem; margin-bottom:10px; letter-spacing:2px; }
.loading-percent{ font-size:clamp(2.4rem,2vw + 1.6rem,4rem); font-weight:bold; color:var(--text-1); transition:all .3s ease; }


/* About Section */
.about-section{ background:linear-gradient(to top,var(--black) 100%); }
.about-grid{ display:grid; grid-template-columns:1fr 1fr; gap:50px; align-items:center; }
.about-text{ color:var(--text-2); line-height:1.8; }
.about-text p{ margin-bottom:20px; }
.about-tech h3{ color:var(--text-1); margin:30px 0 15px; font-size:1.2rem; }
.tech-list{ display:grid; grid-template-columns:repeat(2,1fr); gap:10px; list-style-type:none; padding:0; }
.tech-list li{ position:relative; padding-left:20px; color:var(--text-2); }
.tech-list li::before{ content:'▹'; position:absolute; left:0; color:var(--accent); }
.about-image{ position:relative; }
.image-container{ position:relative; max-width:400px; margin:0 auto; }
.image-border{ position:absolute; width:100%; height:100%; border:2px solid var(--accent); top:20px; left:20px; z-index:-1; transition:all .3s ease; }
.profile-image{ width:100%; height:auto; display:block; filter:grayscale(20%) contrast(1.1); transition:all .3s ease; }
.image-container:hover .image-border{ top:15px; left:15px; }
.image-container:hover .profile-image{ filter:grayscale(0%) contrast(1); }

/* Projects Section */
.projects-section{ background:linear-gradient(to top,var(--black) 100%); }
.projects-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:30px; }
.project-card{ background:var(--surface-1); border-radius:10px; overflow:hidden; transition:transform .3s ease, box-shadow .3s ease, background-color .35s ease, border-color .35s ease; border:1px solid var(--border); }
.project-card:hover{ transform:translateY(-10px); box-shadow:0 15px 30px var(--shadow-1); }
.project-image{ position:relative; overflow:hidden; height:200px; }
.project-image img{ width:100%; height:100%; object-fit:cover; transition:transform .5s ease; }
.project-card:hover .project-image img{ transform:scale(1.05); }
.project-links{ position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,.7); display:flex; align-items:center; justify-content:center; gap:20px; opacity:0; transition:opacity .3s ease; }
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
.project-info p{ color:var(--text-2); font-size:.9rem; line-height:1.6; margin-bottom:15px; }
.project-tech{ display:flex; flex-wrap:wrap; gap:10px; }
.project-tech span{
  background:color-mix(in srgb, var(--accent) 9%, transparent);
  color:var(--accent);
  padding:3px 10px;
  border-radius:20px;
  font-size:.7rem;
}

/* icono modo oscuro/blanco */

.icon-btn{ color:var(--text-1); width:40px; height:40px; min-width:0; border-radius:50%; background:transparent; transition:background-color .3s ease, transform .35s ease; }
.icon-btn:hover{ background-color:var(--surface-3); transform:translateY(-1px) scale(1.03); }


/* Botón global (siempre visible, sin bloquear interacción debajo) */
.theme-toggle-global  {
  position:fixed;
  top:calc(env(safe-area-inset-top, 0px) + 16px);
  right:calc(env(safe-area-inset-right, 0px) + 20px);
  z-index:2147483647;
  pointer-events:auto;
}
.theme-toggle-global :deep(*) {
  pointer-events:auto;
}
 .theme-toggle-btn{ pointer-events:auto; }

/* Secciones genéricas */
.section{ 
  padding:100px 20px; 
  position:relative; 
  min-height:100vh; 
  display:flex; 
  align-items:center;
  justify-content: center;
  z-index:2; 
  scroll-margin-top:80px; }

.section-content{ max-width:1200px; margin:0 auto; width:100%; }
.section-title{ font-size:clamp(1.6rem, 2vw + 1rem, 2.5rem); color:var(--text-1); margin-bottom:60px; position:relative; display:inline-block; }
.section-title::after{ content:''; position:absolute; bottom:-10px; left:0; width:60px; height:3px; background:var(--accent); }
.more-projects{ margin-top:50px; text-align:center; }
.more-button{
  display:inline-block;
  padding:12px 30px;
  background:transparent;
  color:var(--accent);
  border:1px solid var(--accent);
  border-radius:30px;
  text-decoration:none;
  font-weight:500;
  transition:all .3s ease;
}
.more-button:hover{
  background:color-mix(in srgb, var(--accent) 10%, transparent);
}

/* Responsive */
@media (max-width:1200px){
  .about-grid{ gap:30px; }
}
@media (max-width:992px){
  .intro-name{ font-size:3.5rem; }
  .intro-role{ font-size:2rem; }
  .section-title{ font-size:2rem; }
  .about-grid{ grid-template-columns:1fr; }
  .about-image{ order:-1; margin-bottom:40px; }
  .image-container{ max-width:350px; }
}
@media (max-width:768px){
  .intro{ padding-top:80px; }
  .intro-sub{ transform:none; }
  .name-image{ transform:none; max-height:200px; }
  .intro-role,.intro-desc,.intro-available{ transform:none; }
  .projects-grid{ grid-template-columns:1fr; }
  .section{ padding:80px 20px; }
  .footer-icons{ bottom:10px; padding:6px 8px; }
  .icon-btn{ width:36px; height:36px; }
}
@media (max-width:576px){
  .intro-name{ font-size:2.5rem; }
  .name-image{ max-height:150px; }
  .intro-role{ font-size:1.5rem; }
  .intro-desc{ font-size:.9rem; }
  .section-title{ font-size:1.8rem; margin-bottom:40px; }
  .project-links{ flex-direction:column; gap:10px; }
  .footer-icons{ flex-wrap:wrap; justify-content:center; width:90%; max-width:350px; padding:8px; }
  .divider{ display:none; }
}
@media (max-width:400px){
  .intro-name{ font-size:2rem; }
  .name-image{ max-height:120px; }
  .intro-role{ font-size:1.3rem; }
  .section-title{ font-size:1.5rem; }
}

/* A11y */


/* ========================= */
/*  APPEND: Language selector overrides (sin romper tu orden) */
/* ========================= */

.theme-toggle-global{
  display:flex;
  align-items:center;
  gap:8px; /* separa el lang del theme */
}

.theme-toggle-global {
  pointer-events:auto;
}

</style>
