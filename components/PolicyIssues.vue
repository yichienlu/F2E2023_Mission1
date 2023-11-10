<script setup>
  import { useModalStore } from '@/stores/modal'
  const modalStore = useModalStore()
  // const num = modalStore.modalContentNumber

  import data from '~/db.json'
  const policy = data.policyIssues

</script>
<template>
        <div class="mb-6 p-4 pt-2 xl:p-12 xl:pt-2 grow overflow-auto lg:flex gap-8">
          <div class="basis-5/12 ">
            <img class="w-full h-[256px] object-cover" :src="`~/assets/images/issues_${modalStore.modalContentNumber + 1}.png`" alt="">
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
              <!-- <li>
                <h4 class="text-xl font-bold mb-2">提供醫療補助</h4>
                <p class="text-lg mb-6">每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</p>
              </li>
              <li>
                <h4 class="text-xl font-bold mb-2">合作動物醫院</h4>
                <p class="text-lg mb-6">目前已有和超過 200 家動物醫院進行初步的合作討論</p>
              </li> -->
            </ul>
            
            <!-- 更多活動 -->
            <div class="p-4 bg-slate-50 rounded-xl mt-24">
              <h4 class="mb-4 font-semibold">更多政策議題</h4>
              <div class="grid gap-4 grid-cols-2  sm:grid-cols-3">
                <a href="#" class=" hover:text-primaryTheme"> 
                  <img class="rounded-lg mb-3" src="~/assets/images/issues_2.png" alt="">
                  <h5>打造休閒天堂！推廣寵物休閒與娛樂場所</h5>
                </a>
                <a href="#" class=" hover:text-primaryTheme">
                  <img class="rounded-lg mb-3" src="~/assets/images/issues_3.png" alt="">
                  <h5>推廣寵物飼養教育，讓愛更加專業</h5>
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