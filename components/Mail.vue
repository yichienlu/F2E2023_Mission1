<script setup>
  import { useModalStore } from '@/stores/modal'
  const modalStore = useModalStore()

  let sent = ref(false)

  const closeModal = () => {
    modalStore.toggleModal()
    sent.value = false
  }
</script>
<template>
  <div class="mb-6 p-4 lg:pr-0 pt-2 xl:p-12 xl:pt-2 grow overflow-auto lg:flex gap-8 ">
    <div class="basis-5/12 xl:basis-6/12 2xl:basis-7/12 h-36 sm:h-auto rounded-3xl sm:text-xl md:text-2xl lg:text-4xl bg-[#E3F8FF] bg-[url('~/assets/images/mail_modal.png')] flex sm:block p-6 xl:p-16 justify-between bg-contain bg-no-repeat bg-right-bottom">
        <h2 class="text-primary font-bold leading-normal">
          分享您的想法 <br />
          一同為我們的未來<br class="2xl:hidden" />打造更美好！
        </h2>
    </div>
    
    <div class="basis-7/12 2xl:basis-5/12 sm:pr-4 overflow-auto">
      <form v-if="!sent">
        <label for="name" class="block text-xl font-bold mb-2">您的姓名</label>
        <input id="name" type="text" placeholder="姓名" class="block w-full mb-6 text-lg p-4 rounded-lg bg-gray-100">

        <label for="email" class="block text-xl font-bold mb-2">Email</label>
        <input id="email" type="email" placeholder="email" class="block w-full mb-6 text-lg p-4 rounded-lg bg-gray-100">

        <label for="phone" class="block text-xl font-bold mb-2">手機</label>
        <input id="phone" type="tel" placeholder="手機號碼" class="block w-full mb-6 text-lg p-4 rounded-lg bg-gray-100">

        <label for="suggestion" class="block text-xl font-bold mb-2">您的建言</label>
        <textarea id="suggestion" type="tel"  rows="5" placeholder="輸入內容" class="block w-full mb-6 text-lg p-4 rounded-lg bg-gray-100"></textarea>

        <button class="font-bold text-white bg-primaryTheme w-full rounded-full py-6 px-8 hover:bg-primary" @click="sent=true">
          送出意見
        </button>
      </form>

      <div v-else class="flex flex-col justify-center items-center h-full py-6">
          <h3 class="text-[28px] font-bold">感謝您的意見</h3>
          <img src="~/assets/images/thanks.png" alt="" class="my-8">
          <button class="px-24 py-4 rounded-full bg-gray-100 font-bold" @click.prevent="closeModal">關閉</button>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>



/* scrollbar */
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #94A3B8; /* or add it to the track */
}
::-webkit-scrollbar-thumb {
  background: #334155;
}

.bg-donation {
  background:  linear-gradient(45deg, #F8E8D9 2.32%, #F8EEE5 98.97%), var(--bg-2, #F7ECE1);;
}



input[name="donate"]:checked+label {
  border-color: rgb(218, 125, 74)
}



</style>