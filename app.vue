<script setup>
  let modalOpen = ref(false)
  let modalContent = ref('')

const openLatestEventsModal = (n) => {
  modalOpen.value = true
  modalContent.value = 'LatestEvents'
  // console.log(modalOpen.value, modalContent.value)
}
const openPolicyIssuesModal = (n) => {
  modalOpen.value = true
  modalContent.value = 'PolicyIssues'
  // console.log(modalOpen.value, modalContent.value)
}



const closeModal = () => {
    modalOpen.value = false
  }
  


// https://fonts.google.com/specimen/Inter

</script>
<template>
  <div class="bg-colorTheme1">
    <!-- https://www.figma.com/file/DCnuTZQ00D5VHiDkBLhxQ3/2023-The-F2E-%E7%AB%8B%E5%A7%94%E7%AB%B6%E9%81%B8%E5%AE%98%E7%B6%B2?type=design&node-id=4690-1607&mode=design&t=im9XqrRGXThI9u1r-0  -->
    <header class="sticky top-0 sm:px-6 sm:py-3" style="z-index: 1000">
      <div  class="px-6 py-3 bg-[#FFFD] sm:rounded-2xl backdrop-blur-md">
        <div class="flex justify-between items-center">
          <div>
            <img src="" alt="" />
            <span class="text-2xl font-bold text-primaryTheme">喵立翰 Miao Li-Han</span>
          </div>
          <ul class="hidden xl:flex text-primary">
            <li class="mr-4">
              <a href="#section-advocate" class="block p-2 hover:text-primaryTheme">候選人主張</a>
            </li>
            <li class="mr-4">
              <a href="#section-LatestEvents" class="block p-2 hover:text-primaryTheme">最新活動</a>
            </li>
            <li class="mr-4">
              <a href="#section-PolicyIssues" class="block p-2 hover:text-primaryTheme">政策議題</a>
            </li>
            <li class="mr-4">
              <a href="#section-donation" class="block p-2 hover:text-primaryTheme">小額捐款</a>
            </li>
            <li><a href="#section-mail" class="block p-2 hover:text-primaryTheme">民眾服務信箱</a></li>
          </ul>
          <div class="hidden sm:flex">
            <a href="#">facebook</a>
            <a href="#">IG</a>
            <a href="#">Youtube</a>
          </div>
        </div>
      </div>
    </header>

    <!-- banner -->
    <section class="bg-white px-4">
      <div class="container mx-auto relative pt-24 ">

        <h2 class="sm:flex text-center mb-4 Mantou">
          <span class="text-gradientTheme text-5xl xl:text-8xl inline-block mx-auto">台灣的明天 <br class="block md:hidden" />喵先鋪路</span>
        </h2>
        <div class="flex flex-col md:flex-row justify-center items-center">
          <h3 class="px-3 py-2 xl:px-4 xl:py-3 leading-[42px] rounded-2xl text-xl xl:text-[28px] font-bold text-white bg-primary inline-block">
            2024 立委參選人
          </h3>
          <h3 class="flex items-center px-4 py-3">
            <div
              class="w-10 h-10 rounded-full bg-gradientTheme flex justify-center items-center mx-4">
              <span class="text-white text-2xl font-bold">3</span>
            </div>
            <span class="text-[28px] sm:text-[40px] text-primaryTheme font-bold">喵立翰 Miao Li-Han</span>
          </h3>
        </div>
        <div class="w-[320px] sm:w-[360px] xl:hidden mx-auto">
          <img src="~/assets/images/banner.png" alt="" class="block " />
        </div>
        <div class="hidden xl:block mx-auto">
          <img src="~/assets/images/banner.png" alt="" />
        </div>

        <div class="absolte bottom-3 flex">
          <a href="#">facebook</a>
          <a href="#">IG</a>
          <a href="#">Youtube</a>
        </div>

      </div>

    </section>

    <!-- marquee -->
    <section class="overflow-hidden bg-primaryTheme text-white text-[40px] xl:text-[60px] py-2 z-70">
      <div class="marquee mx-auto w-[1400px] xl:w-[2000px] Mantou leading-none">
        <span class="text-transparent whitespace-nowrap ">
          為喵星人，護台灣！　　從喵的眼中，看見台灣　　喵的未來，人的希望
        </span>
        <div class="marquee-text  w-[2800px] xl:w-[4000px]">
          <span>
            為喵星人，護台灣！　　從喵的眼中，看見台灣　　喵的未來，人的希望
          </span>
          <span>
            為喵星人，護台灣！　　從喵的眼中，看見台灣　　喵的未來，人的希望
          </span>
        </div>
      </div>
    </section>

    <!-- advocate -->
    <section id="section-advocate" class="bg-colorTheme2 py-16 px-4">
      <div class="container mx-auto rounded-3xl bg-white text-primary grid lg:grid-cols-2">
        <div class="py-10 px-6">
          <h3 class="text-center">
            <span
              class="px-3 py-2 rounded-lg font-bold text-white bg-primary inline-block">ADVOCATE</span>
          </h3>
          <h2 class="text-center">
            <span class="text-gradientTheme text-[52px] xl:text-[64px] inline-block Mantou">候選人主張</span>
          </h2>
          <p class="font-bold text-2xl my-8">
            我堅信 ! 藉由推動更完善的<span class="text-primaryTheme">貓咪福利</span>和相關政策，更是間接地投資於<span class="text-primaryTheme">台灣的未來</span>。
          </p>
          <p>
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
          </p>
          <p>
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
        </div>
        <div class="bg-[url('~/assets/images/advocate.png')] bg-cover bg-center h-[244px] sm:h-[514px] lg:h-auto rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl"></div>
      </div>
    </section>

    <!-- Latest Events -->

    <section id="section-LatestEvents" class="px-4 py-16 rounded-tr-[32px] rounded-bl-[32px] xl:rounded-tr-[96px] xl:rounded-bl-[96px] bg-white">
      <div class="container mx-auto">
        <h3 class="text-center">
          <span
            class="px-3 py-2 rounded-lg font-bold text-white bg-primary inline-block">LATEST EVENTS</span>
        </h3>
        <h2 class="text-center">
          <span class="text-gradientTheme text-[52px] xl:text-[64px] inline-block Mantou">最新活動</span>
        </h2>
        <div class="grid lg:grid-cols-2 gap-6">
          <a href="#" class="mb-6" @click.prevent="openLatestEventsModal(1)">
            <div
              class="h-[240px] bg-[url('https://chalk-freedom-ec6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa1da9db4-41fd-4177-a848-eaaf19a89147%2Fcf82d7cb-b899-4adf-a901-1ad7ce1dff8f%2FOIG_(2).jpeg?table=block&id=759faa20-87e9-4377-ae39-56cc5e1cbdd2&spaceId=a1da9db4-41fd-4177-a848-eaaf19a89147')] bg-cover bg-center"></div>
            <div class="text-sm text-secondary">2023/12/26</div>
            <h4 class="text-xl font-bold">
              參與台北寵物論壇，爭取貓咪友善環境
            </h4>
            <p>
              炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
              VIP 休憩空間。
            </p>
          </a>
          <div>
            <ul>
              <li class="mb-6">
                <a href="#" class="flex flex-row gap-4 xl:h-[134px] items-stretch" @click.prevent="openLatestEventsModal(2)">
                  <div class="basis-1/4 rounded-lg bg-[url('https://chalk-freedom-ec6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa1da9db4-41fd-4177-a848-eaaf19a89147%2Fe32175f1-73cf-45f7-89ac-9a91da0fd3e4%2FOIG_(1).jpeg?table=block&id=304c874e-e2e0-40ac-9618-62f18b91146b&spaceId=a1da9db4-41fd-4177-a848-eaaf19a89147')] bg-cover bg-center"></div>
                  <div class="basis-3/4">
                    <div class="text-sm text-secondary">2023/12/24</div>
                    <h4 class="font-bold my-2">
                      掃街模式開啟！帶著你的貓耳，來和我一起走！
                    </h4>
                    <p class="ellipsis-2">
                      街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！
                    </p>
                  </div>
                </a>
              </li>
              <li class="mb-6">
                <a href="" class="flex flex-row gap-4 xl:h-[134px] items-stretch" @click.prevent="openLatestEventsModal(3)">
                  <div class="basis-1/4 rounded-lg bg-[url('https://chalk-freedom-ec6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa1da9db4-41fd-4177-a848-eaaf19a89147%2F3221d1b9-47c2-404f-b583-92531980d6b5%2FOIG_(3).jpeg?table=block&id=58bdb676-6d70-4c1a-8b44-6483ee00d7ae&spaceId=a1da9db4-41fd-4177-a848-eaaf19a89147')] bg-cover bg-center"></div>
                  <div class="basis-3/4">
                    <div class="text-sm text-secondary">2023/12/20</div>
                    <h4 class="font-bold my-2">收容所模特兒大比拼！</h4>
                    <p class="ellipsis-2">
                      今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
                    </p>
                  </div>
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="flex flex-row gap-4 xl:h-[134px]" @click.prevent="openLatestEventsModal(4)">
                  <div
                    class="basis-1/4 rounded-lg bg-[url('https://chalk-freedom-ec6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa1da9db4-41fd-4177-a848-eaaf19a89147%2Fcf82d7cb-b899-4adf-a901-1ad7ce1dff8f%2FOIG_(2).jpeg?table=block&id=759faa20-87e9-4377-ae39-56cc5e1cbdd2&spaceId=a1da9db4-41fd-4177-a848-eaaf19a89147')] bg-cover bg-center"></div>
                  <div class="basis-3/4">
                    <div class="text-sm text-secondary">2023/12/26</div>
                    <h4 class="font-bold my-2">
                      參與台北寵物論壇，爭取貓咪友善環境
                    </h4>
                    <p class="ellipsis-2">
                      炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            <button class="flex items-center px-6 py-4 rounded-full bg-slate-100 text-primary font-semibold">
              <span>查看更多</span>
              <span class="w-8 h-8">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Policy Issues -->
    <section id="section-PolicyIssues" class="px-4 py-16 bg-colorTheme1">
      <div class="container mx-auto">
        <h3 class="text-center">
          <span
            class="px-3 py-2 rounded-lg font-bold text-white bg-primary inline-block">POLICY ISSUES</span>
        </h3>
        <h2 class="text-center mb-10">
          <span
            class="text-gradientTheme text-[52px] xl:text-[64px] inline-block Mantou">政策議題</span>
        </h2>

        <ul class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-y-16 xl:gap-16 items-stretch text-primary text-2xl font-bold">
          <li>
            <a href="#" class="flex flex-col justify-between h-full"  @click.prevent="openPolicyIssuesModal(1)">
              <h4 class="p-4 pt-0">
                為毛孩子謀福利！<br />
                推動寵物醫療保障方案
              </h4>
              <img src="~/assets/images/issues_1.png" alt="" class="rounded-2xl sm:rounded-3xl w-full" />
            </a>
          </li>
          <li>
            <a href="#" class="flex flex-col justify-between h-full"  @click.prevent="openPolicyIssuesModal(2)">
              <h4 class="p-4 pt-0">
                打造休閒天堂！<br />
                推廣寵物休閒與娛樂場所
              </h4>
              <img src="~/assets/images/issues_2.png" alt="" class="rounded-2xl sm:rounded-3xl w-full" />
            </a>
          </li>
          <li class="">
            <a href="#" class="flex flex-col justify-between h-full"  @click.prevent="openPolicyIssuesModal(3)">
              <h4 class="p-4 pt-0">推廣寵物飼養教育，讓愛更加專業</h4>
              <img src="~/assets/images/issues_3.png" alt="" class="rounded-2xl sm:rounded-3xl w-full" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- donation & mail -->
    <section class="px-4 py-16">
      <div class="grid md:grid-cols-2 gap-6 container mx-auto text-white">
        <div id="section-donation" class="bg-primaryTheme rounded-3xl px-6 py-10 xl:p-24">
          <h3 class="text-4xl mb-4 Mantou">小額支持喵喵</h3>
          <p class="text-xl font-semibold">
            您的小筆捐款，是每隻毛孩未來的大大動力！
          </p>
          <div class="flex items-center justify-between">
            <button class="flex items-center px-6 py-4 rounded-full bg-white text-primary font-bold">
              <span>小額捐款</span>
              <Icon name="material-symbols:arrow-forward" class="w-8 h-8" />
            </button>
            <img src="~/assets/images/donate.png" alt="">
          </div>
        </div>

        <div id="section-mail" class="bg-primary rounded-3xl px-6 py-10 xl:p-24">
          <h3 class="text-4xl mb-4 Mantou">民眾服務信箱</h3>
          <p class="text-xl font-semibold">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
          </p>
          <div class="flex items-center justify-between">
            <button class="flex items-center px-6 py-4 rounded-full bg-white text-primary font-bold">
              <span>填寫表單</span>
              <Icon name="material-symbols:arrow-forward" class="w-8 h-8" />
            </button> 
            <img src="~/assets/images/mail.png" alt="">
          </div>

        </div>
      </div>
    </section>

    <!-- end banner -->
    <section class="">
      <h2 class="sm:flex text-center mb-4">
        <span class="text-gradientTheme text-[52px] xl:text-[64px] inline-block mx-auto Mantou leading-[105%] xl:leading-normal">
          台灣的明天 <br class="block sm:hidden" />喵先鋪路</span>
      </h2>
      <h3 class="flex items-center justify-center py-3">
        <span class="w-12 h-12 rounded-full bg-gradientTheme flex items-center justify-center text-white text-3xl font-bold mr-4">3</span>
        <span class="text-4xl font-bold text-primaryTheme">喵立翰 Miao Li-Han</span>
      </h3>
    </section>

    <!-- footer -->
    <footer class="px-4 py-16 bg-colorTheme2 text-primary">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 gap-4">
          <div class="mb-6 lg:mb-0">
            <div class="flex items-center">
              <span class="w-8 h-8 rounded-full text-xl text-white bg-gradientTheme font-bold flex justify-center items-center mr-2">3</span>
              <span class="text-primaryTheme text-[28px] font-bold">喵立翰 Miao Li-Han</span>
            </div>
            <ul class="flex my-4">
              <li><a href="#" class="block p-2 rounded-full bg-white mr-2">
                <img src="~/assets/images/icon_fb.png" alt="" >
              </a></li>
              <li><a href="#" class="block p-2 rounded-full bg-white mr-2">
                <img src="~/assets/images/icon_ig.png" alt="">
              </a></li>
              <li><a href="#" class="block p-2 rounded-full bg-white mr-2">
                <img src="~/assets/images/icon_youtube.png" alt="">
              </a></li>
            </ul>
            <p class="text-sm">© 2023 喵立翰 Miao Li-Han 版權所有</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4">競選總部</h3>
            <ul class="">
              <li>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</li>
              <li>電話：(02) 888-5678</li>
              <li>電子郵件地址：meowoffice@linmeow.tw</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <section class="xl:hidden sticky bottom-0 w-full text-center bg-[#FFFD] backdrop-blur-md backdrop-opacity-90 text-[10px]">
      <ul class="grid grid-cols-5">
        <li>
          <a href="#section-advocate" class="block pt-3 pb-4 hover:text-primaryTheme">
            <img src="~/assets/images/menu_advocate.png" alt="候選人主張" height="24" width="24" class="mx-auto mb-1" />
            <span>候選人主張</span>
          </a>
        </li>
        <li>
          <a href="#section-LatestEvents" class="block pt-3 pb-4 hover:text-primaryTheme">
            <img src="~/assets/images/menu_events.png" alt="最新活動" height="24" width="24" class="mx-auto mb-1" />
            <span>最新活動</span>
          </a>
        </li>
        <li>
          <a href="#section-PolicyIssues" class="block pt-3 pb-4 hover:text-primaryTheme">
            <img src="~/assets/images/menu_issues.png" alt="政策議題" height="24" width="24" class="mx-auto mb-1" />
            <span>政策議題</span>
          </a>
        </li>
        <li>
          <a href="#section-donation" class="block pt-3 pb-4 hover:text-primaryTheme">
            <img src="~/assets/images/menu_donate.png" alt="小額捐款" height="24" width="24" class="mx-auto mb-1" />
            <span>小額捐款</span>
          </a>
        </li>
        <li>
          <a href="#section-mail" class="block pt-3 pb-4 hover:text-primaryTheme">
            <img src="~/assets/images/menu_mail.png" alt="民眾服務信箱" height="24" width="24" class="mx-auto mb-1" />
            民眾服務信箱</a
          >
        </li>
      </ul>
    </section>

    <!-- modal -->
    <Modal  :modal-open="modalOpen" @close-modal="closeModal" />
    
  </div>
</template>

<style lang="scss" scoped>

*{
  outline: 1px solid #A008;
}


.text-gradientTheme {
  background: linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-gradientTheme {
  background: linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%);
}



/* marquee */

.marquee {
  position: relative;
  overflow: hidden;

  .marquee-text {
    position: absolute;
    overflow: hidden;
    animation: marquee 10s linear infinite;
  }

  span {
    float: left;
    width: 50%;
  } 
}

@keyframes marquee {
  0% { left: 0; }
  100% { left: -100%; }
}




.ellipsis-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}


</style>