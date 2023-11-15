<script setup>
import data from '~/db.json'
const {donation} = data

console.log(donation)

  let donated = ref(false)

  import { useModalStore } from '@/stores/modal'
  const modalStore = useModalStore()


  const closeModal = () => {
    modalStore.toggleModal()
    donated.value = false
  }
</script>
<template>
        <div class="mb-6 p-4 sm:pr-0 pt-2 xl:p-12 xl:pt-2 grow overflow-auto sm:flex gap-8">
          <div class="basis-5/12 2xl:basis-7/12 rounded-3xl bg-donation flex sm:block p-6 xl:p-16 justify-between">
            <div class="">
              <h2 class="text-primaryTheme font-bold">您的小筆捐款<br /> 是每隻毛孩未來的大大動力！</h2>
              <p class="text-sm">目前小額贊助總金額</p>
              <p class="text-xl font-bold">987,655,873</p>
            </div>
            <img src="~/assets/images/donate.png" alt="" class="w-24 object-contain">
          </div>
          
          <div class="basis-7/12 2xl:basis-5/12 sm:pr-4 overflow-auto">
            <div v-if="!donated">
            <h3 class="text-xl font-bold mb-4">捐款方案</h3>
            <ul  class="mb-4">
              <li class="mb-4" >
                <input type="radio" name="donate" id="donate-1" class="hidden checked:border-primaryTheme">
                <label for="donate-1" class="block 2xl:flex justify-between rounded-2xl border-2 border-gray-200 hover:bg-colorTheme2 px-4 py-6">
                  <h4 class="text-xl mb-2 text-primaryTheme font-bold">喵星人之友</h4>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div>NT$</div>
                      <div class="text-2xl font-bold">600</div>
                    </div>
                    <div class="text-sm text-gray-500 ml-6">已有 <span>{{donation.regular[0].num}}</span> 人贊助</div>
                  </div>
                </label>
              </li>
              <li class="mb-4">
                <input type="radio" name="donate" id="donate-2" class="hidden checked:border-primaryTheme">
                <label for="donate-2" class="block 2xl:flex justify-between rounded-2xl border-2 border-gray-200 hover:bg-colorTheme2 px-4 py-6">
                  <h4 class="text-xl mb-2 text-primaryTheme font-bold">喵星大使</h4>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div>NT$</div>
                      <div class="text-2xl font-bold">6000</div>
                    </div>
                    <div class="text-sm text-gray-500 ml-6">已有 <span>{{donation.regular[1].num}}</span> 人贊助</div>
                  </div>
                </label>
              </li>
              <li class="mb-4">
                <input type="radio" name="donate" id="donate-3" class="hidden checked:border-primaryTheme">
                <label for="donate-3" class="block 2xl:flex justify-between rounded-2xl border-2 border-gray-200 hover:bg-colorTheme2 px-4 py-6" >
                  <h4 class="text-xl mb-2 text-primaryTheme font-bold">喵星傳奇</h4>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div>NT$</div>
                      <div class="text-2xl font-bold">60000</div>
                    </div>
                    <div class="text-sm text-gray-500 ml-6">已有 <span>{{donation.regular[2].num}}</span> 人贊助</div>
                  </div>
                </label>
              </li>
              <li>
                <input type="radio" name="donate" id="donate-4" class="hidden">
                <label for="donate-4" class="block rounded-2xl border-2 border-gray-200 hover:bg-colorTheme2 px-4 py-6">
                  <h4 class="text-xl mb-2 text-primaryTheme font-bold">自訂贊助金額</h4>
                  <div class="flex items-center ps-4 rounded-lg bg-gray-100">
                    <span class="mr-1 whitespace-nowrap">NT $</span>
                    <input type="number" placeholder="輸入金額" class="block px-4 py-2 bg-transparent grow text-2xl font-bold">

                  </div>
                </label>
              </li>
            </ul>
            <button class="font-bold text-white bg-primaryTheme w-full rounded-full py-6 px-8 hover:bg-primary" @click="donated=true">
              前往捐款
            </button>
          </div>

          <div v-else class="flex flex-col justify-center items-center h-full py-6">
              <h3 class="text-[28px] font-bold">感謝您的捐款</h3>
              <img src="~/assets/images/thanks.png" alt="" class="my-8">
              <button class="px-24 py-4 rounded-full bg-gray-100 font-bold" @click.prevent="closeModal">關閉</button>
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

.bg-donation {
  background:  linear-gradient(45deg, #F8E8D9 2.32%, #F8EEE5 98.97%), var(--bg-2, #F7ECE1);;
}



input[name="donate"]:checked+label {
  border-color: rgb(218, 125, 74)
}



</style>