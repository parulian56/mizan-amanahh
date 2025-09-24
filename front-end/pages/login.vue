<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold">Login</h1>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-4 mt-4">
      <input v-model="username" placeholder="Username" class="border p-2" />
      <input v-model="password" type="password" placeholder="Password" class="border p-2" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { login } = useAuth() 
const username = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await login(username.value, password.value)
    alert('Login berhasil!')
    navigateTo('/')
  } catch (err) {
    alert('Login gagal!')
  }
}
</script>
