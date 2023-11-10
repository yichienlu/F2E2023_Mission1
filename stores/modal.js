
export const useModalStore = defineStore('modal', () => {
  const modalOpen = ref(false)
  function toggleModal() {
    modalOpen.value = !modalOpen.value
  }

  const modalContent = ref('')
  const modalContentNumber = ref(0)

  return { modalOpen, toggleModal, modalContent, modalContentNumber }
})