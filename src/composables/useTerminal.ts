import { ref } from 'vue'

const visible = ref(false)

export function useTerminal() {
  const toggle = () => {
    visible.value = !visible.value
  }

  const open = () => {
    visible.value = true
  }

  const close = () => {
    visible.value = false
  }

  return {
    visible,
    toggle,
    open,
    close
  }
}
