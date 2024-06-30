<script lang="ts" setup>
import Button from '~/components/ui/button/Button.vue';
import Card from '~/components/ui/card/Card.vue';
import CardContent from '~/components/ui/card/CardContent.vue';
import Input from '~/components/ui/input/Input.vue';
import Label from '~/components/ui/label/Label.vue';

useHead({
  title: 'Lupa password',
})

definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full mx-6">
    <div class="m-5 grid place-items-center">
      <img
        src="~/assets/images/unila-logo.png"
        alt="unila-logo"
        class="w-32 h-w-32"
      >
      <span class="text-4xl font-semibold text-white">LanguageCenter</span>
    </div>

    <Card class="max-w-[500px] w-full flex flex-col pt-8">
      <CardContent class="grid gap-6">
        <span class="text-sm">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</span>
        <div class="grid w-full items-center gap-1.5">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
          />
        </div>

        <Button class="w-full">
          EMAIL PASSWORD RESET LINK
        </Button>
      </CardContent>
    </Card>
  </div>
</template>
