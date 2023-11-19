<script setup>
  import { useModalStore } from '@/stores/modal'
  const modalStore = useModalStore()

  import data from '~/db.json'
  const events = data.latestEvents


</script>
<template>
  <div class="mb-6 lg:mb-0 p-4 pt-2 xl:p-12 xl:pt-2 grow overflow-auto lg:flex gap-8">
    <div class="basis-5/12 ">
      <img class="w-full h-[256px] object-cover" :src="events[modalStore.modalContentNumber].image" alt="">
      <p class="text-sm mt-4 mb-2">{{events[modalStore.modalContentNumber].title}}</p>
      <div class="flex items-center mb-8">
        <div class="mr-4">分享</div>
        <div class="flex gap-4">
          <a href="#">
            <img src="~/assets/images/icon_fb.png" alt="">
          </a>
          <a href="#">
            <img src="~/assets/images/icon_ig.png" alt="">
          </a>
          <a href="#">
            <img src="~/assets/images/icon_line.png" alt="">
          </a>
          <a href="#">
            <img src="~/assets/images/icon_twitter.png" alt="">
          </a>
        </div>
      </div>            
    </div>
    

    <div class="basis-7/12 overflow-auto">
      <h3 class="text-2xl font-bold text-primaryTheme">{{events[modalStore.modalContentNumber].title}}</h3>
      <div class="text-sm text-secondary my-2">
        <span v-timeformat="events[modalStore.modalContentNumber].date*1000"></span>
      </div>
      <p v-html="events[modalStore.modalContentNumber].content"></p>
      
      <!-- 更多活動 -->
      <div class="p-4 bg-slate-50 rounded-xl mt-24">
        <h4 class="mb-4 font-semibold">更多活動</h4>
        <div class="grid gap-4 grid-cols-2  sm:grid-cols-3">
          <a href="#" class=" hover:text-primaryTheme" @click.prevent="modalStore.modalContentNumber = modalStore.modalContentNumber==0 ? 1 : 0"> 
            <img class="rounded-lg mb-3" :src="events[modalStore.modalContentNumber==0 ? 1 : 0].image" alt="">
            <h5>{{ events[modalStore.modalContentNumber==0 ? 1 : 0].title }}</h5>
          </a>
          <a href="#" class=" hover:text-primaryTheme" @click.prevent="modalStore.modalContentNumber = modalStore.modalContentNumber > 1 ? 1 : 2">
            <img class="rounded-lg mb-3" :src="events[modalStore.modalContentNumber > 1 ? 1 : 2].image" alt="">
            <h5>{{ events[modalStore.modalContentNumber > 1 ? 1 : 2].title }}</h5>
          </a>
          <a href="#" class="hidden sm:block hover:text-primaryTheme" @click.prevent="modalStore.modalContentNumber = modalStore.modalContentNumber >2 ? 2 : 3">
            <img class="rounded-lg mb-3" :src="events[modalStore.modalContentNumber>2 ? 2 : 3].image" alt="">
            <h5>{{ events[modalStore.modalContentNumber>2 ? 2 : 3].title }}</h5>
          </a>
        </div>
      </div>
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