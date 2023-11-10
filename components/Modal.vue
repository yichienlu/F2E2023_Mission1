<script setup>






</script>
<template>
    <div ref="modal" id="modal" class="fixed duration-300 h-[100vh] inset-0 sm:py-6  sm:px-4 bg-[#000C] text-primary"  
      style="z-index: 2000">
      <div class="container mx-auto h-full bg-white sm:rounded-3xl flex flex-col duration-300"  >
        <div class="sticky top-0 flex justify-between pt-4 pb-2 xl:py-12 px-4 xl:px-12">
          <h2 class="font-bold text-2xl xl:text-[32px]">最新活動</h2>
          <a href="#" class="hover:text-primaryT" @click.prevent="">
            <Icon name="material-symbols:cancel" class="w-6 h-6 xl:w-8 xl:h-8 " />
          </a>
        </div>

        <LatestEvents />
        <!-- <PolicyIssues /> -->

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