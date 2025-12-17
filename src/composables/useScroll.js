export function useScroll() {
  function scrollToSection(selector) {
    const el = document.querySelector(selector)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return { scrollToSection }
}
