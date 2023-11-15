<script setup>
  import data from '~/db.json'
  import { useModalStore } from '@/stores/modal'
  const modalStore = useModalStore()
  import {useLatestEventsStore} from '@/stores/latestEvents'
  const events = useLatestEventsStore()

  console.log(events.number)

  const {latestEvents} = data

  // console.log(latestEvents[modalStore.modalContentNumber])
  // const moreArr = latestEvents.splice

  const switchEvent = (n) => {
    modalStore.modalContentNumber = n
    let num = ref(modalStore.modalContentNumber)
    console.log(num.value)
  }

  switchEvent(modalStore.modalContentNumber)

  // onMounted(()=>{
  //   let num = ref(modalStore.modalContentNumber)
  //   console.log(num.value)
  // })
</script>
<template>
        <div class="mb-6 p-4 pt-2 xl:p-12 xl:pt-2 grow overflow-auto lg:flex gap-8">

          <div class="basis-5/12 ">
            <img class="w-full h-[256px] object-cover" src="https://chalk-freedom-ec6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa1da9db4-41fd-4177-a848-eaaf19a89147%2Fcf82d7cb-b899-4adf-a901-1ad7ce1dff8f%2FOIG_(2).jpeg?table=block&id=759faa20-87e9-4377-ae39-56cc5e1cbdd2&spaceId=a1da9db4-41fd-4177-a848-eaaf19a89147" alt="">
            <p class="text-sm mt-4 mb-2">參與台北寵物論壇，爭取貓咪友善環境</p>
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
            <h3 class="text-2xl font-bold text-primaryTheme">參與台北寵物論壇，爭取貓咪友善環境</h3>
            <div class="text-sm text-secondary my-2">2023/12/24</div>
            <p>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
            <p>
              台北市 — 今日，立法院喵星區的優秀立法委員喵力翰在台北寵物論壇中發表了一場引人注目的演講，強調了打造貓咪友善環境的重要性，並提出一系列相應政策的建議。

在演講中，喵力翰立委強調了現代社會中寵物貓咪對人們生活的重要性，並指出我們應該共同努力，確保牠們在城市中擁有安全、舒適的生活空間。他提到，貓咪的存在不僅僅是寵物，更是家庭成員，應該得到應有的尊重與照顧。

喵力翰在演講中呼籲增加公共空間中的貓咪友善設施，包括貓咪休息區、遊戲區和專屬的餵食站。他表示，這不僅能提高城市的宜居性，還能促進社區的凝聚力，讓人們更好地享受城市生活。

為了實現這一目標，喵力翰提出了一系列具體的政策建議。
首先，他建議增加城市中的貓咪專屬公園，提供一個安全、無車輛的環境，讓貓咪可以自由遊玩。其次，他呼籲建立動物友善型社區，推動居民更多地參與動物保護活動，共同建設一個和諧的生活環境。

在論壇中，喵力翰提到，他將致力於推動一系列法案，以保障貓咪的權益。其中包括建立貓咪訓練中心，提高領養貓咪的知識普及度，以及加強動物保護法規。他認為，這些舉措將有助於提升社會對貓咪的關注度，並確保牠們在人類社會中得到應有的尊重。

此外，立委喵力翰表示，他將積極與其他立法委員合作，共同推動這一系列的法案。
他強調，這不僅是一個為貓咪發聲的行動，更是為了建立一個更加友善、關愛的社會，讓每一個家庭都能夠擁有一個快樂、和諧的生活環境。

這場寵物論壇為我們提供了一個思考如何打造更友善社會的契機，立委喵力翰的參與使得這一目標更加具體可行。台灣將因有如喵力翰這樣關心動物權益的立法委員而變得更加溫馨。
            </p>
            
            <!-- 更多活動 -->
            <div class="p-4 bg-slate-50 rounded-xl mt-24">
              <h4 class="mb-4 font-semibold">更多活動</h4>
              <div class="grid gap-4 grid-cols-2  sm:grid-cols-3">
                <a href="#" class=" hover:text-primaryTheme" @click.prevent="switchEvent(1)"> 
                  <img class="rounded-lg mb-3" src="https://chalk-freedom-ec6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa1da9db4-41fd-4177-a848-eaaf19a89147%2Fe32175f1-73cf-45f7-89ac-9a91da0fd3e4%2FOIG_(1).jpeg?table=block&id=304c874e-e2e0-40ac-9618-62f18b91146b&spaceId=a1da9db4-41fd-4177-a848-eaaf19a89147" alt="">
                  <h5>掃街模式開啟！帶著你的貓耳，來和我一起走！</h5>
                </a>
                <a href="#" class=" hover:text-primaryTheme" @click.prevent="switchEvent(2)">
                  <img class="rounded-lg mb-3" src="https://chalk-freedom-ec6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa1da9db4-41fd-4177-a848-eaaf19a89147%2F3221d1b9-47c2-404f-b583-92531980d6b5%2FOIG_(3).jpeg?table=block&id=58bdb676-6d70-4c1a-8b44-6483ee00d7ae&spaceId=a1da9db4-41fd-4177-a848-eaaf19a89147" alt="">
                  <h5>收容所模特兒大比拼！</h5>
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