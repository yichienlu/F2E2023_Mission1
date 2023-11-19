<script setup>
  let loading = ref(true)
  onMounted(()=>{
  setTimeout(()=>{
    loading.value = false
  }, 1500)
})
</script>
<template>
  <div class="fixed inset-0 bg-white flex justify-center items-center" :class="{'hidden':!loading}" style="z-index:2000">
     <img src="~/assets/images/loading.gif" alt="">
   </div>
</template>
