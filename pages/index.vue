<script lang="ts" setup>
import { DialogRoot } from 'radix-vue';
import DialogContent from '~/components/ui/dialog/DialogContent.vue';

useHead({
  title: 'NewLC',
})

definePageMeta({
  layout: 'auth',
})

const loginModalRef = ref(true)
</script>

<template>
  <DialogRoot v-model:open="true">
    <DialogContent>
      <div>test</div>
    </DialogContent>
  </DialogRoot>
</template>
