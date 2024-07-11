<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import Button from '~/components/ui/button/Button.vue';
import Card from '~/components/ui/card/Card.vue';
import CardContent from '~/components/ui/card/CardContent.vue';
import Input from '~/components/ui/input/Input.vue';
import Label from '~/components/ui/label/Label.vue';

useHead({
  title: 'Login',
})

definePageMeta({
  layout: 'auth',
})

const pokemonsQuery = useQuery({
  queryKey: ['pokemons'],
  queryFn: () => axios.get('https://pokeapi.co/api/v2/pokemon'),
})

console.log('this is test', pokemonsQuery.data)
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
          <Label for="picture">Email/NPM/NIK</Label>
          <Input id="crendential" />
        </div>

        <div class="grid w-full items-center gap-1.5">
          <Label for="picture">Password</Label>
          <Input
            id="password"
            type="password"
          />
        </div>

        <div class="grid gap-3">
          <div class="flex flex-row justify-between">
            <NuxtLink
              to="/auth/forgot-password"
            >
              <Button
                variant="link"
              >
                Lupa password?
              </Button>
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              :replace="true"
            >
              <Button
                variant="link"
              >
                Belum punya akun?
              </Button>
            </NuxtLink>
          </div>

          <Button class="w-full">
            Login
          </Button>
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-center font-semibold">Panduan Penggunaan</span>

          <div class="flex flex-row justify-around">
            <NuxtLink
              to="https://youtu.be/AF68qYztRh0"
              target="_blank"
            >
              <Button
                variant="link"
              >
                <Icon
                  name="ic:outline-play-circle-filled-white"
                  class="mr-2"
                />
                Web
              </Button>
            </NuxtLink>

            <NuxtLink
              to="https://youtu.be/QXs5ajm91Ts"
              target="_blank"
            >

              <Button
                variant="link"
              >
                <Icon
                  name="ic:outline-play-circle-filled-white"
                  class="mr-2"
                />
                Mobile
              </Button>
            </NuxtLink>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
