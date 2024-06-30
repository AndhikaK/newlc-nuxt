<script lang="ts" setup>
import Button from '~/components/ui/button/Button.vue';
import Card from '~/components/ui/card/Card.vue';
import CardContent from '~/components/ui/card/CardContent.vue';
import Input from '~/components/ui/input/Input.vue';
import Label from '~/components/ui/label/Label.vue';

useHead({
  title: 'Register',
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
        <div class="grid w-full items-center gap-1.5">
          <Label for="crendential">NPM/NIK</Label>
          <Input id="crendential" />
        </div>

        <div class="grid w-full items-center gap-1.5">
          <Label for="name">Nama lengkap</Label>
          <Input id="name" />
        </div>

        <div class="grid w-full items-center gap-1.5">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
          />
        </div>

        <div class="grid w-full items-center gap-1.5">
          <Label for="password">Kata sandi</Label>
          <Input
            id="password"
            type="password"
          />
        </div>

        <div class="grid w-full items-center gap-1.5">
          <Label for="confirm_password">Konfirmasi kata sandi</Label>
          <Input
            id="confirm_password"
            type="password"
          />
        </div>

        <div class="grid place-items-center">
          <Button class="w-full">
            Daftar
          </Button>

          <NuxtLink
            to="/auth/login"
            :replace="true"
          >
            <Button variant="link">
              Kembali ke Login
            </Button>
          </NuxtLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
