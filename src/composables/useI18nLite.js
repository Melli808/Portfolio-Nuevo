import { ref } from 'vue'

export function useI18nLite(messages, defaultLocale = 'en') {
  const locale = ref(defaultLocale)

  function setLocale(l) {
    if (!messages[l]) return
    locale.value = l
    localStorage.setItem('locale', l)
  }

  function t(path) {
    const keys = path.split('.')
    let value = messages[locale.value]

    for (const k of keys) {
      if (!value?.[k]) return path
      value = value[k]
    }

    return value
  }

  return { locale, setLocale, t }
}
