<template>
  <background-pattern class="background" />
  <v-app>
    <!-- CARGA -->
    <div :class="['loading-screen', { 'slide-up': slideOut }]">
      <div class="loading-content">
        <div class="loading-text">{{ t('loading.text') }}</div>
        <div class="loading-percent">{{ loading }}%</div>
      </div>
    </div>
    <!-- home -->
    <HomeSection :t="t" :nameImage="nameImage" />
    <!-- Skills -->
    <SkillsSection :t="t" :skillGroups="skillGroups" />
    <!-- About/Sobre mi -->
    <AboutSection :t="t" />
    <!-- Projects -->
    <ProjectsSection :t="t" />
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
           @set-locale="setLocale"/>
      <!-- Botón de tema -->
      <ThemeToggle
      :t="t"
      :isDark="isDark"
      @toggle="toggleDarkMode"/>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
// componentes//
import BackgroundPattern from './components/layout/BackgroundPattern.vue'
import HomeSection from './components/sections/HomeSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue' 
import AboutSection from './components/sections/AboutSection.vue'   
import ProjectsSection from './components/sections/ProjectsSection.vue'
import FloatingNav from './components/navigation/FloatingNav.vue'
// composables //
import { useLoading } from './composables/useLoading'
import LanguageSelector from './components/ui/LanguageSelector.vue'
import ThemeToggle from './components/ui/ThemeToggle.vue'
import { useI18nLite } from './composables/useI18nLite'
// assets //
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
// css // 
import './styles/theme.css'
import './styles/app.css'

const { loading, slideOut, loaded, start, stop } = useLoading()
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
 
</style>
