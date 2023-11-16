<script setup>
  import { useModalStore } from '@/stores/modal'
  const modalStore = useModalStore()
  // const num = modalStore.modalContentNumber

  import data from '~/db.json'
  const policy = data.policyIssues

</script>
<template>
        <div class="mb-6 p-4 pt-2 xl:p-12 xl:pt-2 grow overflow-auto sm:flex gap-8">
          <div class="basis-5/12">
            <img class="w-full" :src="policy[modalStore.modalContentNumber].img_url" alt="">
            <!-- <img class="w-full h-[256px] object-cover" :src="policy[modalStore.modalContentNumber].img_url" alt=""> -->
            <!-- dynamic src -->
            <p class="text-sm mt-4 mb-2">{{ policy[modalStore.modalContentNumber].title }}</p>
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
            <h3 class="text-2xl xl:text-[32px] font-bold text-primaryTheme mb-[42px]">{{ policy[modalStore.modalContentNumber].title }}</h3>
            
            <ul>
              <li v-for="item in policy[modalStore.modalContentNumber].policyIssues" :key="item.id">
                <h4 class="text-xl font-bold mb-2">{{item.policy}}</h4>
                <p class="text-lg mb-6">{{ item.description }}</p>
              </li>
            </ul>
            
            <!-- 更多 -->
            <div class="p-4 bg-slate-50 rounded-xl mt-24">
              <h4 class="mb-4 font-semibold">更多政策議題</h4>
              <div class="grid gap-4 grid-cols-2  sm:grid-cols-3">
                <a href="#" class=" hover:text-primaryTheme" @click.prevent="modalStore.modalContentNumber = modalStore.modalContentNumber == 0 ? 1 : modalStore.modalContentNumber == 1 ? 2 : 0"> 
                  <img class="rounded-lg mb-3" :src="policy[modalStore.modalContentNumber == 0 ? 1 : modalStore.modalContentNumber == 1 ? 2 : 0].img_url" alt="">
                  <h5>{{policy[modalStore.modalContentNumber == 0 ? 1 : modalStore.modalContentNumber == 1 ? 2 : 0].title}}</h5>
                </a>
                <a href="#" class=" hover:text-primaryTheme" @click.prevent="modalStore.modalContentNumber = modalStore.modalContentNumber == 0 ? 2 : modalStore.modalContentNumber == 1 ? 0 : 1">
                  <img class="rounded-lg mb-3" :src="policy[modalStore.modalContentNumber == 0 ? 2 : modalStore.modalContentNumber == 1 ? 0 : 1].img_url" alt="">
                  <h5>{{policy[modalStore.modalContentNumber == 0 ? 2 : modalStore.modalContentNumber == 1 ? 0 : 1].title}}</h5>
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