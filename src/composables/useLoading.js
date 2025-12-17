import { ref } from 'vue'

export function useLoading() {
  const loading = ref(0)
  const slideOut = ref(false)
  const loaded = ref(false)

  let interval

  function start() {
    interval = setInterval(() => {
      if (loading.value >= 100) {
        clearInterval(interval)
        slideOut.value = true
        setTimeout(() => (loaded.value = true), 800)
      } else {
        loading.value += 5
      }
    }, 20)
  }

  function stop() {
    if (interval) clearInterval(interval)
  }

  return { loading, slideOut, loaded, start, stop }
}
