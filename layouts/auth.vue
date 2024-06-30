<template>
  <div class="w-screen h-screen grid grid-rows-[auto_1fr]">
    <nav class="px-10 py-3 flex flex-row justify-between w-full bg-white shadow z-10">
      <div class="flex flex-row gap-4 items-center">
        <img
          src="~/assets/images/unila-logo.png"
          alt="unila-logo"
          class="h-7 w-7"
        >
        <span class="text-xl font-semibold">LanguageCenter</span>
      </div>
    </nav>

    <div class="h-full w-full z-10 pb-10">
      <slot />
    </div>
    <div
      class="absolute h-screen w-screen blur-md bg-slate-100 top-0 left-0 z-0 bg-layout bg-cover bg-center"
    />
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.bg-layout {
  background-image: url('~/assets/images/bg-unila.jpg');
}
</style>
