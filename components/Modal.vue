<script setup>
  import { useModalStore } from '@/stores/modal'
  const modalStore = useModalStore()

  
  const closeModal = () => {
    modalStore.toggleModal()
  }

</script>
<template>
    <div ref="modal" id="modal" class="fixed duration-300 h-[100vh] inset-0 sm:py-6  sm:px-4 bg-[#000C] text-primary"  
      style="z-index: 2000">
      <div class="container mx-auto h-full bg-white sm:rounded-3xl flex flex-col duration-300"  >
        <div class="sticky top-0 flex justify-between pt-4 pb-2 xl:py-12 px-4 xl:px-12">
          <h2 class="font-bold text-2xl xl:text-[32px]">
            <span v-if="modalStore.modalContent == 'latestEvents'">最新活動</span>
            <span v-else-if="modalStore.modalContent == 'policyIssues'">政策議題</span>
            <span v-else-if="modalStore.modalContent == 'donation'">小額捐款</span>
            <span v-else>民眾服務信箱</span>
          </h2>
          <a href="#" class="hover:text-primaryTheme" @click.prevent="closeModal">
            <Icon name="material-symbols:cancel" class="w-6 h-6 xl:w-8 xl:h-8 " />
          </a>
        </div>

        <LatestEvents v-if="modalStore.modalContent == 'latestEvents'" />
        <PolicyIssues v-else-if="modalStore.modalContent == 'policyIssues'" />
        <Donation v-else-if="modalStore.modalContent == 'donation'" />
        <Mail v-else />

      </div>
    </div>

</template>

<style lang="scss" scoped>

*{
  outline: 1px solid #A008;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #94A3B8; /* or add it to the track */
}
::-webkit-scrollbar-thumb {
  background: #334155;
}
</style>